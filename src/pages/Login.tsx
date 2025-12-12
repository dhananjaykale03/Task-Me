import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Sparkles,
  Code2,
  Brain,
  BarChart3,
  Timer,
  FileText,
  Shield,
  ChevronLeft,
  Eye,
  EyeOff,
  Users,
  CheckCircle2,
  Award,
  Target,
  UserPlus
} from "lucide-react";
import { useNavigate, Link, useSearchParams, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type LoginMode = "select" | "admin" | "user";
type AuthTab = "login" | "signup";

const adminFeatures = [
  { icon: Brain, label: "AI Task Generation", desc: "Auto-generate role-based tasks" },
  { icon: Users, label: "User Management", desc: "Create & manage accounts" },
  { icon: BarChart3, label: "Advanced Analytics", desc: "3D charts & insights" },
  { icon: Shield, label: "Anti-Cheat System", desc: "Full proctoring suite" },
  { icon: Timer, label: "Deadline Control", desc: "Set timers & difficulty" },
  { icon: Award, label: "Approve Submissions", desc: "Review & grade work" },
];

const userFeatures = [
  { icon: FileText, label: "Task Dashboard", desc: "View all assignments" },
  { icon: Code2, label: "Code Editor", desc: "Built-in IDE for coding" },
  { icon: Timer, label: "Smart Timer", desc: "Track time remaining" },
  { icon: Target, label: "Progress Tracking", desc: "Monitor your growth" },
  { icon: CheckCircle2, label: "Submissions", desc: "Submit & track status" },
  { icon: Award, label: "Achievements", desc: "Earn XP & badges" },
];

const Particles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
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
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: `radial-gradient(circle, hsl(${180 + Math.random() * 90} 100% 60% / 0.5), transparent)`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
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

const RoleCard = ({ 
  role, 
  icon: Icon, 
  title, 
  description, 
  features, 
  gradient, 
  glowColor,
  onClick 
}: {
  role: "admin" | "user";
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: { icon: React.ComponentType<{ className?: string }>; label: string; desc: string }[];
  gradient: string;
  glowColor: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div 
        className={`relative glass-panel-neon rounded-3xl p-8 border transition-all duration-500 overflow-hidden
          ${role === "admin" ? "border-violet-500/20 hover:border-violet-500/50" : "border-cyan-500/20 hover:border-cyan-500/50"}`}
        style={{ boxShadow: `0 0 80px ${glowColor}` }}
      >
        <motion.div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${gradient}`}
        />
        
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100"
        >
          <motion.div
            className={`absolute left-0 right-0 h-[2px] ${role === "admin" ? "bg-violet-400/50" : "bg-cyan-400/50"}`}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div 
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          style={{ boxShadow: `0 0 40px ${glowColor}` }}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>

        <h3 className="text-3xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-8 text-lg">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-start gap-3"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}
                style={{ background: `linear-gradient(135deg, ${role === "admin" ? "hsl(270 60% 20%)" : "hsl(180 60% 20%)"}, transparent)` }}
              >
                <feature.icon className={`w-5 h-5 ${role === "admin" ? "text-violet-400" : "text-cyan-400"}`} />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground/90">{feature.label}</div>
                <div className="text-xs text-muted-foreground">{feature.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <Button 
          className={`w-full bg-gradient-to-r ${gradient} text-white rounded-2xl py-7 text-lg font-bold group-hover:shadow-lg transition-all duration-500`}
          style={{ boxShadow: `0 0 30px ${glowColor}` }}
        >
          Continue as {title}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

const LoginForm = ({ 
  role, 
  onBack,
}: { 
  role: "admin" | "user"; 
  onBack: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<AuthTab>("login");
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  
  const isAdmin = role === "admin";
  const gradient = isAdmin ? "from-violet-500 to-purple-600" : "from-cyan-500 to-blue-500";
  const glowColor = isAdmin ? "hsl(270 100% 50% / 0.2)" : "hsl(180 100% 50% / 0.2)";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (activeTab === "signup") {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          toast.error(error.message);
          setIsLoading(false);
          return;
        }
        toast.success("Account created successfully! You can now sign in.");
        setActiveTab("login");
        setPassword("");
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          toast.error(error.message);
          setIsLoading(false);
          return;
        }
        toast.success("Welcome back!");
        navigate(isAdmin ? "/admin" : "/dashboard");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }

    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg"
    >
      <div 
        className="glass-panel-neon rounded-3xl p-10 border border-primary/20"
        style={{ boxShadow: `0 0 100px ${glowColor}` }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to role selection</span>
        </button>

        <div className="text-center mb-8">
          <motion.div 
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-6`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            style={{ boxShadow: `0 0 40px ${glowColor}` }}
          >
            {isAdmin ? <ShieldCheck className="w-10 h-10 text-white" /> : <User className="w-10 h-10 text-white" />}
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            {isAdmin ? "Admin Portal" : "User Portal"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {isAdmin ? "Access the control center" : "Access your task dashboard"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 p-1 glass-panel-premium rounded-xl">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === "login" 
                ? `bg-gradient-to-r ${gradient} text-white` 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === "signup" 
                ? `bg-gradient-to-r ${gradient} text-white` 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {activeTab === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground/80 text-base">Full Name</Label>
              <div className="relative">
                <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="pl-12 h-14 glass-panel-premium border-primary/20 focus:border-primary/50 rounded-xl text-base"
                  required={activeTab === "signup"}
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/80 text-base">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isAdmin ? "admin@company.com" : "user@company.com"}
                className="pl-12 h-14 glass-panel-premium border-primary/20 focus:border-primary/50 rounded-xl text-base"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground/80 text-base">Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="pl-12 pr-12 h-14 glass-panel-premium border-primary/20 focus:border-primary/50 rounded-xl text-base"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {activeTab === "login" && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-primary/30 bg-muted w-5 h-5" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <button type="button" className="text-primary hover:underline font-medium">
                Forgot password?
              </button>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className={`w-full h-16 bg-gradient-to-r ${gradient} text-white rounded-xl text-lg font-bold hover:opacity-90 transition-all duration-300 group`}
            style={{ boxShadow: `0 0 30px ${glowColor}` }}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-7 h-7 border-3 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <>
                {activeTab === "signup" ? "Create Account" : "Sign In"}
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

const Login = () => {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState<LoginMode>("select");
  const { user, userRole, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const role = searchParams.get("role");
    if (role === "admin" || role === "user") {
      setMode(role);
    }
  }, [searchParams]);

  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && user) {
      const from = (location.state as { from?: { pathname: string } })?.from?.pathname;
      if (from) {
        navigate(from, { replace: true });
      } else {
        navigate(userRole === "admin" ? "/admin" : "/dashboard", { replace: true });
      }
    }
  }, [user, userRole, isLoading, navigate, location]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-radial from-violet-500/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cyan-500/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(180 100% 50% / 0.5) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(180 100% 50% / 0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <Particles />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group glass-panel-premium px-5 py-2.5 rounded-full"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <AnimatePresence mode="wait">
          {mode === "select" ? (
            <motion.div
              key="select"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 glass-panel-premium px-6 py-3 rounded-full mb-8 border border-cyan-500/20"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                  <span className="text-cyan-400 font-semibold">Premium AI Task Management</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black mb-6"
                >
                  <span className="text-foreground">Choose Your </span>
                  <span className="text-gradient-neon">Portal</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                  Select your role to access the AI-powered task management platform
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <RoleCard
                  role="admin"
                  icon={ShieldCheck}
                  title="Admin"
                  description="Full control panel with AI generation, user management & analytics"
                  features={adminFeatures}
                  gradient="from-violet-500 to-purple-600"
                  glowColor="hsl(270 100% 50% / 0.15)"
                  onClick={() => setMode("admin")}
                />
                <RoleCard
                  role="user"
                  icon={User}
                  title="User"
                  description="Complete tasks, take quizzes, solve challenges & track progress"
                  features={userFeatures}
                  gradient="from-cyan-500 to-blue-500"
                  glowColor="hsl(180 100% 50% / 0.15)"
                  onClick={() => setMode("user")}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="flex justify-center"
            >
              <LoginForm
                role={mode}
                onBack={() => setMode("select")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;
