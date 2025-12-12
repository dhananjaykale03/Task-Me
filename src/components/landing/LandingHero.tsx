import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Brain, 
  Code2, 
  HelpCircle, 
  Timer, 
  TrendingUp, 
  ShieldCheck,
  Zap,
  CheckCircle2,
  BarChart3,
  Users,
  Shield,
  Eye,
  FileText,
  Award,
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";

const featureBadges = [
  { icon: Brain, label: "AI Task Generator" },
  { icon: Code2, label: "Coding Challenges" },
  { icon: HelpCircle, label: "Quiz Mode" },
  { icon: Timer, label: "Smart Timers" },
  { icon: TrendingUp, label: "Analytics" },
  { icon: Shield, label: "Anti-Cheat" },
  { icon: Eye, label: "Proctoring" },
  { icon: Award, label: "Achievements" },
];

const roleCards = [
  { name: "Full Stack", color: "from-violet-500 to-purple-600" },
  { name: "Python", color: "from-yellow-500 to-orange-500" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Java", color: "from-red-500 to-orange-600" },
  { name: "DevOps", color: "from-green-500 to-emerald-600" },
  { name: "AI/ML", color: "from-pink-500 to-rose-600" },
];

const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 4 + 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: `radial-gradient(circle, hsl(${180 + Math.random() * 60} 100% 60% / 0.6), transparent)`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
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

const HolographicDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20, rotateY: -20 }}
      animate={{ opacity: 1, y: 0, rotateX: 8, rotateY: -8 }}
      transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
      className="relative"
      style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
    >
      {/* Main Dashboard */}
      <motion.div
        className="relative glass-panel-neon rounded-3xl p-8 border border-cyan-500/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          boxShadow: `
            0 0 60px hsl(180 100% 50% / 0.15),
            0 0 120px hsl(210 100% 50% / 0.1),
            inset 0 1px 0 hsl(0 0% 100% / 0.1)
          `,
        }}
      >
        {/* Holographic scan line effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <motion.div 
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ boxShadow: "0 0 30px hsl(180 100% 50% / 0.4)" }}
            >
              <Cpu className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h3 className="font-bold text-foreground text-xl">AI Control Center</h3>
              <p className="text-cyan-400/80 text-sm">Real-time task orchestration</p>
            </div>
          </div>
          <motion.div 
            className="flex items-center gap-2 glass-panel-premium px-4 py-2 rounded-full"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-emerald-400 text-sm font-medium">Live</span>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Tasks Active", value: "247", icon: Zap, color: "from-cyan-400 to-blue-500", percent: 85 },
            { label: "Completed", value: "1.2K", icon: CheckCircle2, color: "from-emerald-400 to-green-500", percent: 92 },
            { label: "Team Members", value: "48", icon: Users, color: "from-violet-400 to-purple-500", percent: 78 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="glass-panel-premium rounded-2xl p-5 relative overflow-hidden group"
            >
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <stat.icon className="w-5 h-5 text-muted-foreground mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-xs mb-3">{stat.label}</div>
              <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.percent}%` }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 1 }}
                  className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Role Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {roleCards.slice(0, 4).map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${role.color} text-white text-xs font-medium`}
              style={{ boxShadow: `0 0 15px hsl(var(--primary) / 0.3)` }}
            >
              {role.name}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
            className="px-3 py-1.5 rounded-full glass-panel-premium text-muted-foreground text-xs font-medium"
          >
            +8 more
          </motion.div>
        </div>

        {/* Activity Chart */}
        <div className="glass-panel-premium rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Weekly Performance</span>
            <span className="text-emerald-400 text-sm font-bold">+34%</span>
          </div>
          <div className="flex items-end justify-between h-20 gap-2">
            {[40, 65, 45, 80, 60, 95, 75].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 1.5 + i * 0.08, duration: 0.6 }}
                className="flex-1 rounded-lg relative overflow-hidden"
                style={{
                  background: `linear-gradient(to top, hsl(180 100% 50% / 0.3), hsl(210 100% 60% / 0.6))`,
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 30, y: -30 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="absolute -top-6 -right-6 glass-panel-neon px-5 py-3 rounded-2xl border border-violet-500/30"
        style={{ 
          boxShadow: "0 0 40px hsl(270 100% 50% / 0.2)",
          transform: "translateZ(60px)" 
        }}
      >
        <div className="flex items-center gap-3">
          <Brain className="w-5 h-5 text-violet-400" />
          <span className="text-foreground text-sm font-semibold">AI Generator</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.2, type: "spring" }}
        className="absolute -bottom-8 -left-8 glass-panel-premium px-6 py-4 rounded-2xl"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-foreground font-bold text-xl">98.5%</div>
            <div className="text-muted-foreground text-xs">Success Rate</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute top-1/2 -right-12 glass-panel-neon p-3 rounded-xl border border-cyan-500/20"
        style={{ transform: "translateZ(40px)" }}
      >
        <Shield className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </motion.div>
  );
};

const LandingHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-24 pb-20 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-violet-500/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(180 100% 50% / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(180 100% 50% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 glass-panel-premium px-5 py-2.5 rounded-full mb-8 border border-cyan-500/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <span className="text-cyan-400 text-sm font-semibold tracking-wide">Premium AI Task Management</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8"
            >
              <span className="text-foreground">Manage Tasks</span>
              <br />
              <motion.span 
                className="text-gradient-neon inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(180 100% 50% / 0.5)",
                    "0 0 40px hsl(180 100% 50% / 0.8)",
                    "0 0 20px hsl(180 100% 50% / 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Smarter.
              </motion.span>
              <br />
              <span className="text-foreground">Build </span>
              <span className="text-gradient-primary">Faster.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              AI-powered task system for developers with role-based assignments, 
              quizzes, coding challenges, smart timers, anti-cheat protection & 
              advanced analytics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link to="/login">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white rounded-2xl px-10 py-7 text-lg font-bold group"
                    style={{ 
                      boxShadow: "0 0 40px hsl(180 100% 50% / 0.3), 0 0 80px hsl(210 100% 50% / 0.2)" 
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-blue-500"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ opacity: 0.5 }}
                    />
                    <span className="relative flex items-center">
                      <Sparkles className="mr-2 w-5 h-5" />
                      Start Now
                    </span>
                  </Button>
                </motion.div>
              </Link>

              <Link to="/login?role=admin">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto glass-panel-neon border-violet-500/30 text-foreground hover:bg-violet-500/10 hover:border-violet-500/50 rounded-2xl px-8 py-7 text-lg font-semibold transition-all group"
                >
                  <ShieldCheck className="mr-2 w-5 h-5 text-violet-400 group-hover:text-violet-300" />
                  Admin Portal
                </Button>
              </Link>

              <Link to="/login?role=user">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto glass-panel-neon border-cyan-500/30 text-foreground hover:bg-cyan-500/10 hover:border-cyan-500/50 rounded-2xl px-8 py-7 text-lg font-semibold transition-all group"
                >
                  <Users className="mr-2 w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                  User Portal
                </Button>
              </Link>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {featureBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-panel-premium flex items-center gap-2 px-4 py-2.5 rounded-full cursor-default border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <badge.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-foreground/80 text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Holographic Dashboard */}
          <div className="hidden lg:block">
            <HolographicDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
