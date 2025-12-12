import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Zap,
  BarChart3,
  PieChart,
  Plus,
  Bell,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="orb-accent top-1/4 right-0 opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-button px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Cinematic Dashboard</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-white">Your Command</span>
            <span className="block text-gradient-primary">Center</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real-time analytics, productivity scores, animated charts, and everything at your fingertips
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 glow-subtle"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Good Morning, Admin</h3>
                <p className="text-white/40 text-sm">Here's your productivity overview</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="glass-panel p-2 px-4 flex items-center gap-2">
                <Search className="w-4 h-4 text-white/40" />
                <span className="text-white/40 text-sm">Search tasks...</span>
              </div>
              <button className="glass-panel p-3 relative">
                <Bell className="w-5 h-5 text-white/60" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
              </button>
              <Button className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl px-5">
                <Plus className="w-4 h-4 mr-2" />
                New Task
              </Button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { icon: CheckCircle2, label: "Completed", value: "156", change: "+12%", color: "from-green-500 to-emerald-400" },
              { icon: Clock, label: "In Progress", value: "42", change: "+5%", color: "from-primary to-cyan-400" },
              { icon: TrendingUp, label: "Productivity", value: "89%", change: "+8%", color: "from-secondary to-purple-400" },
              { icon: PieChart, label: "Efficiency", value: "94%", change: "+3%", color: "from-accent to-pink-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="glass-panel p-5 group hover:bg-white/[0.08] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-green-400 text-xs font-medium">{stat.change}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-6">
            {/* Weekly Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 glass-panel p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-white font-semibold">Weekly Progress</h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-white/50 text-xs">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="text-white/50 text-xs">In Progress</span>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between h-40 gap-3">
                {[
                  { completed: 70, progress: 20 },
                  { completed: 85, progress: 10 },
                  { completed: 60, progress: 25 },
                  { completed: 90, progress: 8 },
                  { completed: 75, progress: 15 },
                  { completed: 95, progress: 5 },
                  { completed: 80, progress: 12 },
                ].map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${day.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                      className="rounded-t bg-gradient-to-t from-secondary/50 to-secondary"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${day.completed}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                      className="rounded-t bg-gradient-to-t from-primary/50 to-primary"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <span key={i} className="text-white/30 text-xs flex-1 text-center">{day}</span>
                ))}
              </div>
            </motion.div>

            {/* Progress Ring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 flex flex-col items-center justify-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full progress-ring">
                  <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 352" }}
                    whileInView={{ strokeDasharray: "296 352" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(190, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(270, 100%, 65%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">84%</div>
                    <div className="text-white/40 text-xs">Overall</div>
                  </div>
                </div>
              </div>
              <h4 className="text-white font-semibold mb-1">Productivity Score</h4>
              <p className="text-white/40 text-xs">Above average</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
