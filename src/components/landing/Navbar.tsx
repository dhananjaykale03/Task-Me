import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  Menu, 
  X, 
  Brain, 
  Target, 
  Trophy, 
  Shield, 
  Zap, 
  BarChart3,
  Users,
  Clock,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Task Formats", href: "#formats" },
  { label: "Roles", href: "#roles" },
  { label: "Why Us", href: "#why-us" },
];

const features = [
  { icon: Brain, label: "AI Task Generator", desc: "Auto-generate role-based tasks", color: "from-violet-500 to-purple-600" },
  { icon: Target, label: "Smart Assignments", desc: "Intelligent task distribution", color: "from-cyan-500 to-blue-500" },
  { icon: Trophy, label: "Gamification", desc: "XP points, badges & streaks", color: "from-amber-500 to-orange-500" },
  { icon: Shield, label: "Anti-Cheat System", desc: "Full proctoring protection", color: "from-red-500 to-rose-600" },
  { icon: Zap, label: "Real-time Tracking", desc: "Live progress monitoring", color: "from-emerald-500 to-green-500" },
  { icon: BarChart3, label: "Analytics Dashboard", desc: "Insights & performance data", color: "from-pink-500 to-rose-500" },
];

const quickStats = [
  { icon: Users, value: "10K+", label: "Active Users" },
  { icon: CheckCircle2, value: "50K+", label: "Tasks Completed" },
  { icon: Clock, value: "99.9%", label: "Uptime" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    if (showFeatures) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showFeatures]);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "top-2" : "top-4"
        }`}
      >
        <motion.div
          className={`relative px-2 py-2 rounded-2xl transition-all duration-500 ${
            scrolled 
              ? "bg-background/95 backdrop-blur-2xl shadow-2xl shadow-primary/10 border border-primary/20" 
              : "bg-background/80 backdrop-blur-xl border border-white/10"
          }`}
          style={{
            boxShadow: scrolled 
              ? "0 20px 60px -20px hsl(var(--primary) / 0.3), 0 0 40px -10px hsl(var(--primary) / 0.1)" 
              : "0 10px 40px -20px hsl(0 0% 0% / 0.3)"
          }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200% 0%", "-200% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="flex items-center gap-1 relative z-10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 px-3 py-2 group">
              <motion.div 
                className="relative w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center overflow-hidden"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Sparkle effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Layers className="w-5 h-5 text-white relative z-10" />
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-foreground tracking-tight">TaskMe</span>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Link>

            {/* Divider */}
            <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent mx-2" />

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  />
                </motion.a>
              ))}

              {/* Features Dropdown Trigger */}
              <motion.button
                className={`relative px-4 py-2 font-medium text-sm flex items-center gap-2 rounded-xl transition-all ${
                  showFeatures 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setShowFeatures(!showFeatures)}
                whileHover={{ y: -2 }}
              >
                <Sparkles className="w-4 h-4" />
                Features
                <motion.svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="currentColor"
                  animate={{ rotate: showFeatures ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </motion.svg>
              </motion.button>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent mx-2" />

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/login">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl px-5 relative overflow-hidden group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <Zap className="w-3.5 h-3.5" />
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-xl text-foreground hover:bg-primary/10 transition-colors ml-2"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Features Mega Menu */}
        <AnimatePresence>
          {showFeatures && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] max-w-[95vw]"
            >
              <div 
                className="bg-background/95 backdrop-blur-2xl rounded-2xl border border-primary/20 p-6 shadow-2xl"
                style={{
                  boxShadow: "0 30px 80px -20px hsl(var(--primary) / 0.25), 0 0 60px -20px hsl(var(--primary) / 0.1)"
                }}
              >
                {/* Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-background border-l border-t border-primary/20" />

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Features Grid */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Core Features
                    </h3>
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.label}
                        className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                          activeFeature === index 
                            ? "bg-primary/10 border border-primary/20" 
                            : "hover:bg-muted/50"
                        }`}
                        onMouseEnter={() => setActiveFeature(index)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{feature.label}</h4>
                          <p className="text-xs text-muted-foreground">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Feature Preview */}
                  <div className="hidden md:block">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {quickStats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          className="text-center p-3 rounded-xl bg-muted/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <stat.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <div className="text-lg font-bold text-foreground">{stat.value}</div>
                          <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Active Feature Highlight */}
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${features[activeFeature].color} relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative z-10">
                        <h4 className="font-bold text-white text-lg mb-1">{features[activeFeature].label}</h4>
                        <p className="text-white/80 text-sm">{features[activeFeature].desc}</p>
                        <Link to="/login">
                          <Button size="sm" className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0">
                            Try Now
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3"
            >
              <div className="bg-background/95 backdrop-blur-2xl rounded-2xl border border-primary/20 p-4 shadow-2xl">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-3 rounded-xl text-foreground hover:bg-primary/10 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-primary/10 grid grid-cols-2 gap-3">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full rounded-xl border-primary/20">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary rounded-xl">
                      Get Started
                    </Button>
                  </Link>
                </div>

                {/* Mobile Features */}
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Features
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {features.slice(0, 4).map((feature) => (
                      <div key={feature.label} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-foreground">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for dropdowns */}
      <AnimatePresence>
        {(showFeatures || isOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => {
              setShowFeatures(false);
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
