import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/dashboard/Sidebar";
import ProjectCard from "@/components/dashboard/ProjectCard";
import TaskList from "@/components/dashboard/TaskList";
import MembersList from "@/components/dashboard/MembersList";
import TaskActivityChart from "@/components/dashboard/TaskActivityChart";
import SchedulePanel from "@/components/dashboard/SchedulePanel";

const TaskDashboard = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Create Detail Booking", time: "2 min ago", completed: false },
    { id: 2, title: "Revision Home Page", time: "2 min ago", completed: false },
    { id: 3, title: "Make Illustration", time: "4 min ago", completed: false },
    { id: 4, title: "Wireframing Task Manager", time: "2 min ago", completed: false },
    { id: 5, title: "Research E-commerce App", time: "2 min ago", completed: false },
  ]);

  const projects = [
    { title: "Travel Mobile App", tasks: 10, progress: 60, date: "15 Agustus 2021, 10:30 AM", members: ["KM", "PJ", "YN", "SK", "LH"], color: "pink" as const },
    { title: "Task Manager", tasks: 10, progress: 70, date: "12 Agustus 2021, 10:30 AM", members: ["AB", "CD", "EF", "GH", "IJ"], color: "purple" as const },
    { title: "E-Commerce", tasks: 8, progress: 80, date: "9 Agustus 2021, 10:30 AM", members: ["MN", "OP", "QR", "ST", "UV"], color: "yellow" as const },
  ];

  const members = [
    { name: "Kim Mengkoi", role: "UI Designer", workingOn: "Travel mobile App", initials: "KM", color: "bg-gradient-to-br from-amber-400 to-orange-500" },
    { name: "Park Jae-Eon", role: "UX Research", workingOn: "Task Manager", initials: "PJ", color: "bg-gradient-to-br from-pink-400 to-rose-500" },
    { name: "Yu Na-Bi", role: "Product Manager", workingOn: "Landing Page", initials: "YN", color: "bg-gradient-to-br from-violet-400 to-purple-500" },
  ];

  const activityData = [
    { label: "UI Designer", percentage: 40, color: "hsl(220, 80%, 60%)" },
    { label: "UX Research", percentage: 25, color: "hsl(280, 70%, 60%)" },
    { label: "Product Designer", percentage: 35, color: "hsl(35, 95%, 55%)" },
  ];

  const scheduleEvents = [
    { time: "10:00", category: "Dribble Shot", title: "SUB-X" },
    { time: "15:00", category: "Design", title: "Task Management" },
    { time: "09:00", category: "Design", title: "Travel App" },
    { time: "07:00", category: "Design", title: "Task Management" },
    { time: "12:00", category: "Dribble Shot", title: "Design Thinker" },
    { time: "18:00", category: "UX Research", title: "E-Commerce App" },
  ];

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-2xl font-bold font-display">Hello, Megkoi!</h1>
              <p className="text-muted-foreground text-sm">Let's Organize Your Daily Tasks.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-10 w-56 bg-card/40 border-border/30 rounded-full text-sm"
                />
              </div>
              <button className="relative p-2.5 rounded-full bg-card/40 hover:bg-card/60 transition-colors border border-border/30">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </button>
            </div>
          </motion.div>

          {/* Project Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-5 mb-8 overflow-x-auto pb-2"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <TaskList tasks={tasks} onToggle={toggleTask} />
            <MembersList members={members} />
            <TaskActivityChart data={activityData} totalPercentage={80} />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <SchedulePanel
        userName="Mengkoi Sudagar"
        userRole="UI Designer"
        events={scheduleEvents}
      />
    </div>
  );
};

export default TaskDashboard;
