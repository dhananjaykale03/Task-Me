import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface UserStats {
  completed: number;
  inProgress: number;
  quizScore: number;
  dayStreak: number;
  xpPoints: number;
  level: number;
  isLoading: boolean;
}

interface UserTask {
  id: string;
  title: string;
  type: string;
  status: string;
  deadline: string | null;
  priority: string;
  difficulty: string;
  timeLeft: number;
  progress: number;
  role: string;
}

interface Achievement {
  icon: string;
  title: string;
  desc: string;
  earned: boolean;
}

export const useUserStats = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<UserStats>({
    completed: 0,
    inProgress: 0,
    quizScore: 0,
    dayStreak: 0,
    xpPoints: 0,
    level: 1,
    isLoading: true,
  });

  const [tasks, setTasks] = useState<UserTask[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([
    { icon: "🏆", title: "First Task", desc: "Complete your first task", earned: false },
    { icon: "🔥", title: "7 Day Streak", desc: "Maintain 7 day streak", earned: false },
    { icon: "⚡", title: "Speed Demon", desc: "Complete task in half time", earned: false },
    { icon: "🎯", title: "Perfect Score", desc: "100% on a quiz", earned: false },
    { icon: "💎", title: "Diamond Coder", desc: "Complete 50 coding tasks", earned: false },
    { icon: "🌟", title: "Rising Star", desc: "Top 10 leaderboard", earned: false },
  ]);

  useEffect(() => {
    if (!user) {
      setStats(prev => ({ ...prev, isLoading: false }));
      return;
    }

    const fetchUserData = async () => {
      try {
        // Fetch user's task assignments
        const { data: assignments, error: assignmentsError } = await supabase
          .from("task_assignments")
          .select(`
            id,
            status,
            score,
            started_at,
            completed_at,
            tasks!task_assignments_task_id_fkey(
              id,
              title,
              task_type,
              difficulty,
              role,
              deadline,
              duration_minutes
            )
          `)
          .eq("user_id", user.id);

        if (assignmentsError) {
          console.error("Error fetching assignments:", assignmentsError);
        }

        // Calculate stats from assignments
        let completed = 0;
        let inProgress = 0;
        let totalScore = 0;
        let quizCount = 0;

        const userTasks: UserTask[] = [];

        if (assignments) {
          assignments.forEach((assignment: any) => {
            if (assignment.status === "completed") completed++;
            if (assignment.status === "in_progress") inProgress++;
            
            if (assignment.score && assignment.tasks?.task_type === "quiz") {
              totalScore += assignment.score;
              quizCount++;
            }

            if (assignment.tasks) {
              const deadline = assignment.tasks.deadline 
                ? new Date(assignment.tasks.deadline)
                : null;
              const now = new Date();
              const timeLeft = deadline 
                ? Math.max(0, Math.floor((deadline.getTime() - now.getTime()) / 1000))
                : 0;

              userTasks.push({
                id: assignment.id,
                title: assignment.tasks.title,
                type: assignment.tasks.task_type,
                status: assignment.status === "completed" ? "Completed" 
                  : assignment.status === "in_progress" ? "In Progress" 
                  : "Pending",
                deadline: deadline ? formatDeadline(deadline) : "No deadline",
                priority: assignment.tasks.difficulty === "hard" ? "High" 
                  : assignment.tasks.difficulty === "medium" ? "Medium" 
                  : "Low",
                difficulty: capitalizeFirst(assignment.tasks.difficulty),
                timeLeft,
                progress: assignment.status === "completed" ? 100 
                  : assignment.status === "in_progress" ? 50 
                  : 0,
                role: assignment.tasks.role,
              });
            }
          });
        }

        const quizScore = quizCount > 0 ? Math.round(totalScore / quizCount) : 0;

        // Fetch achievements
        const { data: userAchievements } = await supabase
          .from("user_achievements")
          .select("*")
          .eq("user_id", user.id);

        let dayStreak = 0;
        let xpPoints = 0;

        if (userAchievements && userAchievements.length > 0) {
          dayStreak = userAchievements[0]?.streak_days || 0;
          xpPoints = userAchievements.reduce((sum, a) => sum + (a.xp_points || 0), 0);
        }

        // Calculate level (every 500 XP is a level)
        const level = Math.floor(xpPoints / 500) + 1;

        // Update achievements earned status
        const earnedBadges = userAchievements?.map(a => a.badge_name) || [];
        const updatedAchievements = achievements.map(a => ({
          ...a,
          earned: earnedBadges.includes(a.title) || 
            (a.title === "First Task" && completed > 0) ||
            (a.title === "7 Day Streak" && dayStreak >= 7)
        }));

        setStats({
          completed,
          inProgress,
          quizScore,
          dayStreak,
          xpPoints,
          level,
          isLoading: false,
        });

        setTasks(userTasks);
        setAchievements(updatedAchievements);
      } catch (error) {
        console.error("Error fetching user stats:", error);
        setStats(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchUserData();
  }, [user]);

  return { stats, tasks, achievements };
};

function formatDeadline(date: Date): string {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days < 0) return "Overdue";
  if (days === 0) return "Today";
  if (days === 1) return "1 day";
  if (days < 7) return `${days} days`;
  if (days < 14) return "1 week";
  return `${Math.floor(days / 7)} weeks`;
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
