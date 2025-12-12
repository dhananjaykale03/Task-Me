import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserStats } from "@/hooks/useUserStats";
import {
  CheckCircle, 
  Clock, 
  Trophy, 
  Target, 
  Sparkles,
  Code2,
  FileText,
  HelpCircle,
  Timer,
  Play,
  Award,
  TrendingUp,
  Zap,
  AlertTriangle,
  Lock,
  ChevronRight,
  Home,
  LogOut,
  Bell,
  Flame,
  Star,
  BarChart3,
  Eye,
  Send,
  XCircle,
  Shield
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

// Stats, tasks, and achievements will be fetched from database using useUserStats hook

const Particles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const CountdownTimer = ({ seconds }: { seconds: number }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  const isUrgent = timeLeft < 3600;

  return (
    <div className={`flex items-center gap-1 font-mono text-sm ${isUrgent ? 'text-red-400' : 'text-muted-foreground'}`}>
      <Timer className={`w-4 h-4 ${isUrgent ? 'animate-pulse' : ''}`} />
      <span>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(secs).padStart(2, '0')}</span>
    </div>
  );
};

interface TaskType {
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

const TaskCard = ({ task, onStart }: { task: TaskType; onStart: () => void }) => {
  const typeIcon = {
    Coding: Code2,
    Quiz: HelpCircle,
    Written: FileText,
  }[task.type] || FileText;

  const TypeIcon = typeIcon;

  const priorityColors = {
    High: "from-red-500 to-rose-600",
    Medium: "from-amber-500 to-orange-500",
    Low: "from-emerald-500 to-green-500",
  };

  const difficultyColors = {
    Easy: "text-emerald-400 bg-emerald-500/20",
    Medium: "text-amber-400 bg-amber-500/20",
    Hard: "text-red-400 bg-red-500/20",
  };

  const isCompleted = task.status === "Completed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`glass-panel-neon rounded-2xl p-6 relative overflow-hidden group transition-all ${
        isCompleted ? 'opacity-60' : ''
      }`}
    >
      {/* Priority indicator */}
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${priorityColors[task.priority as keyof typeof priorityColors]}`} />
      
      {/* Hover glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
      />

      <div className="flex items-start gap-4">
        {/* Type Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0`}>
          <TypeIcon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="font-semibold text-foreground text-lg truncate">{task.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{task.role}</span>
                <span className="text-muted-foreground">•</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[task.difficulty as keyof typeof difficultyColors]}`}>
                  {task.difficulty}
                </span>
              </div>
            </div>
            {!isCompleted && task.timeLeft > 0 && (
              <CountdownTimer seconds={task.timeLeft} />
            )}
          </div>

          {/* Progress Bar */}
          {task.progress > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>Progress</span>
                <span>{task.progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${task.progress}%` }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                />
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1.5 rounded-lg text-xs font-medium glass-panel-premium`}>
                {task.type}
              </span>
              <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                task.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' :
                task.status === 'In Progress' ? 'bg-cyan-500/20 text-cyan-400' :
                'bg-amber-500/20 text-amber-400'
              }`}>
                {task.status}
              </span>
            </div>

            {!isCompleted && (
              <Button 
                onClick={onStart}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl"
              >
                {task.status === 'In Progress' ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Continue
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Start
                  </>
                )}
              </Button>
            )}

            {isCompleted && (
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Completed</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AntiCheatNotice = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-panel-neon rounded-2xl p-6 border border-red-500/20"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shrink-0">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-2">Anti-Cheat Protection Active</h3>
        <p className="text-sm text-muted-foreground mb-4">
          The following protections are enabled during task attempts:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { icon: XCircle, label: "No Screenshots" },
            { icon: XCircle, label: "No Copy/Paste" },
            { icon: XCircle, label: "No Right-Click" },
            { icon: Eye, label: "Tab Switch Detection" },
            { icon: AlertTriangle, label: "Auto-Submit on Exit" },
            { icon: Lock, label: "Inspect Disabled" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-red-400/80">
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("tasks");
  const [filter, setFilter] = useState("all");
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const { stats: userStats, tasks: userTasks, achievements } = useUserStats();

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const stats = [
    { icon: CheckCircle, label: "Completed", value: userStats.completed.toString(), color: "from-emerald-500 to-green-500" },
    { icon: Clock, label: "In Progress", value: userStats.inProgress.toString(), color: "from-cyan-500 to-blue-500" },
    { icon: Trophy, label: "Quiz Score", value: `${userStats.quizScore}%`, color: "from-amber-500 to-orange-500" },
    { icon: Flame, label: "Day Streak", value: userStats.dayStreak.toString(), color: "from-red-500 to-orange-500" },
  ];

  const tasks = userTasks;

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "pending") return task.status === "Pending";
    if (filter === "progress") return task.status === "In Progress";
    if (filter === "completed") return task.status === "Completed";
    return true;
  });

  const xpProgress = (userStats.xpPoints % 500) / 5;
  const currentLevel = userStats.level;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-violet-500/10 via-transparent to-transparent blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(180 100% 50% / 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(180 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <Particles />

      <div className="relative z-10 p-6 lg:p-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8"
          >
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="glass-panel-premium rounded-xl">
                  <Home className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                      My Dashboard
                    </h1>
                    <p className="text-muted-foreground">
                      {user?.email ? `Welcome, ${user.email}` : "Track progress and complete tasks"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Profile & XP */}
            <div className="flex items-center gap-6">
              <div className="glass-panel-premium rounded-2xl px-6 py-3 flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Level {currentLevel}</div>
                  <div className="text-xs text-cyan-400">{xpProgress}% to Level {currentLevel + 1}</div>
                </div>
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${xpProgress}%` }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">2,450 XP</span>
                </div>
              </div>

              <Button variant="outline" className="glass-panel-premium border-primary/20">
                <Bell className="w-4 h-4 mr-2" />
                <span className="px-2 py-0.5 rounded-full bg-cyan-500 text-white text-xs">3</span>
              </Button>

              <Button 
                variant="outline" 
                className="glass-panel-premium border-red-500/30 text-red-400 hover:bg-red-500/10"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel-neon rounded-2xl p-6 relative overflow-hidden group"
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="glass-panel-premium p-1 rounded-2xl gap-2">
              <TabsTrigger value="tasks" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 rounded-xl px-6 py-3">
                <Target className="w-4 h-4 mr-2" />
                My Tasks
              </TabsTrigger>
              <TabsTrigger value="progress" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 rounded-xl px-6 py-3">
                <BarChart3 className="w-4 h-4 mr-2" />
                Progress
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 rounded-xl px-6 py-3">
                <Award className="w-4 h-4 mr-2" />
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tasks" className="space-y-6">
              {/* Anti-Cheat Notice */}
              <AntiCheatNotice />

              {/* Filter Tabs */}
              <div className="flex items-center gap-3">
                {[
                  { id: "all", label: "All Tasks" },
                  { id: "pending", label: "Pending" },
                  { id: "progress", label: "In Progress" },
                  { id: "completed", label: "Completed" },
                ].map((f) => (
                  <Button
                    key={f.id}
                    variant={filter === f.id ? "default" : "outline"}
                    onClick={() => setFilter(f.id)}
                    className={filter === f.id 
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" 
                      : "glass-panel-premium"
                    }
                  >
                    {f.label}
                  </Button>
                ))}
              </div>

              {/* Task List */}
              <div className="space-y-4">
                {filteredTasks.map((task, i) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <TaskCard task={task} onStart={() => {}} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="progress">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel-neon rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  Performance Overview
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Weekly Activity */}
                  <div className="glass-panel-premium rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Weekly Activity</h3>
                    <div className="flex items-end justify-between h-40 gap-2">
                      {[45, 70, 55, 85, 60, 90, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex-1 rounded-lg bg-gradient-to-t from-cyan-500/40 to-cyan-500"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                  </div>

                  {/* Skill Breakdown */}
                  <div className="glass-panel-premium rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Skill Breakdown</h3>
                    <div className="space-y-4">
                      {[
                        { skill: "Coding", progress: 85, color: "from-cyan-500 to-blue-500" },
                        { skill: "Quizzes", progress: 92, color: "from-violet-500 to-purple-500" },
                        { skill: "Written", progress: 78, color: "from-amber-500 to-orange-500" },
                        { skill: "Problem Solving", progress: 88, color: "from-emerald-500 to-green-500" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-foreground">{item.skill}</span>
                            <span className="text-muted-foreground">{item.progress}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.progress}%` }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="achievements">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel-neon rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-amber-400" />
                  Achievements
                </h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`glass-panel-premium rounded-2xl p-6 text-center relative overflow-hidden ${
                        !achievement.earned ? 'opacity-50' : ''
                      }`}
                    >
                      {!achievement.earned && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                          <Lock className="w-8 h-8 text-muted-foreground" />
                        </div>
                      )}
                      <div className="text-5xl mb-4">{achievement.icon}</div>
                      <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                      {achievement.earned && (
                        <div className="mt-3 inline-flex items-center gap-1 text-emerald-400 text-xs font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Earned
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
