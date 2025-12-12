import { motion } from "framer-motion";
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  BarChart3, 
  Settings,
  UserPlus,
  FileCheck,
  Eye,
  Shield
} from "lucide-react";

const adminFeatures = [
  {
    icon: UserPlus,
    title: "Assign Tasks to Users",
    description: "Easily distribute tasks to team members based on their roles and expertise"
  },
  {
    icon: CheckCircle,
    title: "Approve Submissions",
    description: "Review and approve completed tasks with detailed feedback options"
  },
  {
    icon: XCircle,
    title: "Reject with Feedback",
    description: "Provide constructive feedback when submissions need improvements"
  },
  {
    icon: BarChart3,
    title: "Track Performance",
    description: "Monitor team productivity with real-time analytics and reports"
  },
  {
    icon: Eye,
    title: "Review AI Tasks",
    description: "Oversee AI-generated tasks and customize before assignment"
  },
  {
    icon: Settings,
    title: "Manage User Access",
    description: "Control permissions and access levels for all team members"
  },
];

const AdminSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="orb-secondary top-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Admin Panel Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card p-6 glow-subtle">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Admin Panel</h3>
                    <p className="text-white/40 text-sm">Team Overview</p>
                  </div>
                </div>
                <div className="glass-button px-3 py-1.5">
                  <span className="text-green-400 text-sm">● Live</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Active Users", value: "48" },
                  { label: "Pending Tasks", value: "23" },
                  { label: "Completed", value: "156" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="glass-panel p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/40 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Submissions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Recent Submissions</span>
                  <span className="text-primary text-xs">View All</span>
                </div>
                {[
                  { user: "Alex Johnson", task: "API Integration", status: "Pending Review", statusColor: "text-amber-400" },
                  { user: "Sarah Chen", task: "Database Design", status: "Approved", statusColor: "text-green-400" },
                  { user: "Mike Brown", task: "UI Components", status: "Needs Revision", statusColor: "text-red-400" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass-panel p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                        {item.user.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white text-sm">{item.user}</div>
                        <div className="text-white/40 text-xs">{item.task}</div>
                      </div>
                    </div>
                    <span className={`text-xs ${item.statusColor}`}>{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 glass-button px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Admin Controls</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient-white">Admin</span>
                <span className="block text-gradient-primary">Superpowers</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Complete control over task assignments, submissions, and team performance — all from one powerful dashboard.
              </p>
            </motion.div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {adminFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-panel p-4 group hover:bg-white/[0.08] transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white text-sm font-medium mb-1">{feature.title}</h4>
                  <p className="text-white/40 text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
