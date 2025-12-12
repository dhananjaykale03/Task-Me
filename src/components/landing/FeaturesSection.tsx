import { motion } from "framer-motion";
import { 
  LayoutGrid, 
  ListTodo, 
  Users, 
  Flag, 
  GitBranch, 
  BarChart3,
  Clock,
  MessageSquare,
  Shield
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Kanban Board View",
    description: "Visualize tasks in columns - To Do, In Progress, Completed. Drag and drop for instant updates.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ListTodo,
    title: "List View",
    description: "Traditional list format with sorting, filtering, and quick actions for task management.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Flag,
    title: "Priority System",
    description: "Mark tasks as High, Medium, or Low priority with color-coded visual indicators.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign tasks to team members, track workload, and collaborate in real-time.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: GitBranch,
    title: "Subtasks Support",
    description: "Break down complex tasks into smaller subtasks for better organization.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track completion rates, team performance, and productivity insights.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Monitor task progress as it happens with instant status updates.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: MessageSquare,
    title: "Instant Feedback",
    description: "Provide comments, reviews, and feedback directly on task submissions.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security to protect your team's data and submissions.",
    color: "from-slate-500 to-gray-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 gradient-section" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Task Management
            <span className="block text-gradient-primary">System</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Everything you need to manage, assign, and track tasks efficiently in one platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-cinematic rounded-2xl p-6 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
