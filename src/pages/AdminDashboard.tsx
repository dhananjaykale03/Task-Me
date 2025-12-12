import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAdminStats } from "@/hooks/useAdminStats";
import { 
  Users, 
  ClipboardCheck, 
  Clock, 
  TrendingUp, 
  Plus, 
  Settings,
  Brain,
  Code2,
  FileText,
  HelpCircle,
  Timer,
  BarChart3,
  Shield,
  Bell,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Zap,
  Award,
  Play,
  Pause,
  Eye,
  Upload,
  Video,
  Send,
  ChevronRight,
  LogOut,
  Home,
  Filter,
  Search,
  MoreVertical,
  Star,
  Target
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const developerRoles = [
  { id: "fullstack", name: "Full Stack", color: "from-violet-500 to-purple-600" },
  { id: "software", name: "Software Engineer", color: "from-blue-500 to-cyan-500" },
  { id: "python", name: "Python Developer", color: "from-yellow-500 to-orange-500" },
  { id: "java", name: "Java Developer", color: "from-red-500 to-orange-600" },
  { id: "c", name: "C Developer", color: "from-slate-500 to-slate-600" },
  { id: "cpp", name: "C++ Developer", color: "from-blue-600 to-blue-700" },
  { id: "react", name: "React Developer", color: "from-cyan-400 to-blue-500" },
  { id: "devops", name: "DevOps Engineer", color: "from-green-500 to-emerald-600" },
  { id: "cloud", name: "Cloud Engineer", color: "from-sky-500 to-blue-600" },
  { id: "cybersecurity", name: "Cybersecurity", color: "from-red-600 to-rose-600" },
  { id: "uiux", name: "UI/UX Designer", color: "from-pink-500 to-rose-500" },
  { id: "aiml", name: "AI/ML Engineer", color: "from-purple-500 to-violet-600" },
];

const taskTypes = [
  { id: "quiz", name: "Quiz", icon: HelpCircle },
  { id: "written", name: "Written Task", icon: FileText },
  { id: "coding", name: "Coding Challenge", icon: Code2 },
  { id: "debugging", name: "Debugging", icon: AlertTriangle },
  { id: "multistep", name: "Multi-step Project", icon: Target },
];

const difficultyLevels = [
  { id: "easy", name: "Easy", color: "from-green-500 to-emerald-500" },
  { id: "medium", name: "Medium", color: "from-yellow-500 to-orange-500" },
  { id: "hard", name: "Hard", color: "from-red-500 to-rose-600" },
];

// Stats will be fetched from database using useAdminStats hook

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  return `${days} day${days > 1 ? 's' : ''} ago`;
}

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
          className="absolute rounded-full bg-violet-400/30"
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

const AITaskGenerator = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [duration, setDuration] = useState("30");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTask, setGeneratedTask] = useState<any>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedTask({
        title: "Build a RESTful API with Authentication",
        description: "Create a complete REST API using Node.js and Express with JWT authentication, including user registration, login, and protected routes.",
        sampleInput: "POST /api/auth/register { email, password, name }",
        sampleOutput: "{ success: true, token: 'jwt_token', user: {...} }",
        questions: [
          "What is the purpose of JWT tokens?",
          "Explain middleware in Express.js",
          "How do you handle password hashing?",
        ],
        codingTask: "Implement a middleware function that validates JWT tokens and attaches user data to the request object.",
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Role Selection */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold text-foreground">Developer Role</Label>
          <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2">
            {developerRoles.map((role) => (
              <motion.button
                key={role.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedRole(role.id)}
                className={`p-4 rounded-xl text-left transition-all ${
                  selectedRole === role.id 
                    ? `bg-gradient-to-r ${role.color} text-white shadow-lg` 
                    : "glass-panel-premium hover:border-primary/30"
                }`}
              >
                <span className="font-medium">{role.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Task Type & Settings */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-foreground">Task Type</Label>
            <div className="grid grid-cols-2 gap-3">
              {taskTypes.map((type) => (
                <motion.button
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-xl flex items-center gap-3 transition-all ${
                    selectedType === type.id 
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg" 
                      : "glass-panel-premium hover:border-cyan-500/30"
                  }`}
                >
                  <type.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{type.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold text-foreground">Difficulty Level</Label>
            <div className="flex gap-3">
              {difficultyLevels.map((level) => (
                <motion.button
                  key={level.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDifficulty(level.id)}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    selectedDifficulty === level.id 
                      ? `bg-gradient-to-r ${level.color} text-white shadow-lg` 
                      : "glass-panel-premium hover:border-primary/30"
                  }`}
                >
                  {level.name}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold text-foreground">Time Duration (minutes)</Label>
            <Input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="h-12 glass-panel-premium border-primary/20"
              min="5"
              max="180"
            />
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Button
          onClick={handleGenerate}
          disabled={!selectedRole || !selectedType || !selectedDifficulty || isGenerating}
          className="w-full h-16 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-2xl"
          style={{ boxShadow: "0 0 40px hsl(270 100% 50% / 0.3)" }}
        >
          {isGenerating ? (
            <motion.div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
              />
              <span>Generating with AI...</span>
            </motion.div>
          ) : (
            <>
              <Brain className="mr-2 w-6 h-6" />
              Generate AI Task
              <Zap className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </motion.div>

      {/* Generated Task Preview */}
      <AnimatePresence>
        {generatedTask && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-panel-neon rounded-2xl p-8 border border-violet-500/30"
            style={{ boxShadow: "0 0 60px hsl(270 100% 50% / 0.15)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">AI Generated Task</h3>
                <p className="text-muted-foreground text-sm">Ready to assign</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-muted-foreground text-sm">Title</Label>
                <h4 className="text-lg font-semibold text-foreground mt-1">{generatedTask.title}</h4>
              </div>

              <div>
                <Label className="text-muted-foreground text-sm">Description</Label>
                <p className="text-foreground/80 mt-1">{generatedTask.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-panel-premium rounded-xl p-4">
                  <Label className="text-muted-foreground text-sm">Sample Input</Label>
                  <code className="block mt-2 text-cyan-400 text-sm font-mono">{generatedTask.sampleInput}</code>
                </div>
                <div className="glass-panel-premium rounded-xl p-4">
                  <Label className="text-muted-foreground text-sm">Expected Output</Label>
                  <code className="block mt-2 text-emerald-400 text-sm font-mono">{generatedTask.sampleOutput}</code>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl h-12">
                  <CheckCircle2 className="mr-2 w-5 h-5" />
                  Assign to Users
                </Button>
                <Button variant="outline" className="glass-panel-premium border-primary/30 h-12">
                  <Settings className="mr-2 w-5 h-5" />
                  Customize
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const { stats: adminStats, recentSubmissions: dbSubmissions, topPerformers: dbPerformers } = useAdminStats();

  const stats = [
    { icon: Users, label: "Total Users", value: adminStats.totalUsers.toString(), change: "", color: "from-violet-500 to-purple-500" },
    { icon: ClipboardCheck, label: "Tasks Created", value: adminStats.totalTasks.toString(), change: "", color: "from-cyan-500 to-blue-500" },
    { icon: Clock, label: "Pending Review", value: adminStats.pendingReview.toString(), change: "", color: "from-amber-500 to-orange-500" },
    { icon: TrendingUp, label: "Completion Rate", value: `${adminStats.completionRate}%`, change: "", color: "from-emerald-500 to-green-500" },
  ];

  const recentSubmissions = dbSubmissions.length > 0 
    ? dbSubmissions.map(s => ({
        user: s.profiles?.full_name || s.profiles?.email || "Unknown",
        task: s.tasks?.title || "Unknown Task",
        type: s.tasks?.task_type || "Unknown",
        time: formatTimeAgo(s.updated_at),
        status: s.status,
      }))
    : [];

  const topPerformers = dbPerformers.length > 0 ? dbPerformers : [];

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-violet-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(270 100% 50% / 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(270 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <Particles />

      <div className="relative z-10 p-6 lg:p-8">
        <div className="max-w-[1600px] mx-auto">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                      Admin Control Center
                    </h1>
                    <p className="text-muted-foreground">
                      {user?.email ? `Welcome, ${user.email}` : "Manage users, tasks, and monitor performance"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="glass-panel-premium border-primary/20">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
                <span className="ml-2 px-2 py-0.5 rounded-full bg-red-500 text-white text-xs">5</span>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
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
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-bold ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="glass-panel-premium p-1 rounded-2xl gap-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 rounded-xl px-6 py-3">
                <BarChart3 className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="ai-generator" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 rounded-xl px-6 py-3">
                <Brain className="w-4 h-4 mr-2" />
                AI Generator
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 rounded-xl px-6 py-3">
                <Users className="w-4 h-4 mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger value="submissions" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 rounded-xl px-6 py-3">
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Submissions
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 rounded-xl px-6 py-3">
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Submissions */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-panel-neon rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <ClipboardCheck className="w-5 h-5 text-violet-400" />
                      Recent Submissions
                    </h2>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      View All <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {recentSubmissions.map((submission, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-4 p-4 rounded-xl glass-panel-premium group hover:border-violet-500/30 transition-all"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                          {submission.user[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{submission.user}</p>
                          <p className="text-sm text-muted-foreground truncate">{submission.task}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">{submission.time}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            submission.status === 'approved' ? 'bg-emerald-500/20 text-emerald-400' :
                            submission.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                            'bg-amber-500/20 text-amber-400'
                          }`}>
                            {submission.status}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Top Performers */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-panel-neon rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-400" />
                      Top Performers
                    </h2>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      View All <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {topPerformers.map((performer, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-4 p-4 rounded-xl glass-panel-premium"
                      >
                        <span className="text-3xl">{performer.badge}</span>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{performer.name}</p>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>{performer.tasks} tasks</span>
                            <span>•</span>
                            <span className="text-amber-400">🔥 {performer.streak} day streak</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-emerald-400">{performer.score}%</p>
                          <p className="text-xs text-muted-foreground">Success Rate</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel-neon rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Quick Actions
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Brain, label: "Generate AI Task", color: "from-violet-500 to-purple-600" },
                    { icon: Users, label: "Add New User", color: "from-cyan-500 to-blue-500" },
                    { icon: Bell, label: "Send Alert", color: "from-amber-500 to-orange-500" },
                    { icon: Upload, label: "Upload Resources", color: "from-emerald-500 to-green-500" },
                  ].map((action, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-6 rounded-2xl bg-gradient-to-br ${action.color} text-white flex flex-col items-center gap-3 transition-all`}
                      style={{ boxShadow: `0 0 30px hsl(var(--primary) / 0.2)` }}
                    >
                      <action.icon className="w-8 h-8" />
                      <span className="font-semibold">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="ai-generator">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel-neon rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">AI Task Generator</h2>
                    <p className="text-muted-foreground">Generate role-based tasks instantly with AI</p>
                  </div>
                </div>
                <AITaskGenerator />
              </motion.div>
            </TabsContent>

            <TabsContent value="users">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel-neon rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">User Management</h2>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="Search users..." className="pl-10 w-64 glass-panel-premium" />
                    </div>
                    <Button className="bg-gradient-to-r from-violet-500 to-purple-600">
                      <Plus className="w-4 h-4 mr-2" />
                      Add User
                    </Button>
                  </div>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>User management interface will be displayed here</p>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="submissions">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel-neon rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Submission Review</h2>
                  <div className="flex gap-3">
                    <Button variant="outline" className="glass-panel-premium">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  <ClipboardCheck className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Submission review interface will be displayed here</p>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="analytics">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel-neon rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Analytics Dashboard</h2>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>3D Charts and analytics will be displayed here</p>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
