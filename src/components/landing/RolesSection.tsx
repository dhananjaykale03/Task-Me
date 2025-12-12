import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Brain,
  Smartphone,
  Globe
} from "lucide-react";

const roles = [
  { name: "Full Stack Developer", icon: Code, color: "text-blue-400" },
  { name: "Backend Developer", icon: Server, color: "text-emerald-400" },
  { name: "Python Developer", icon: Code, color: "text-yellow-400" },
  { name: "Java Developer", icon: Code, color: "text-orange-400" },
  { name: "Database Engineer", icon: Database, color: "text-purple-400" },
  { name: "Cloud Engineer", icon: Cloud, color: "text-cyan-400" },
  { name: "Security Engineer", icon: Shield, color: "text-red-400" },
  { name: "ML Engineer", icon: Brain, color: "text-pink-400" },
  { name: "Mobile Developer", icon: Smartphone, color: "text-indigo-400" },
  { name: "Frontend Developer", icon: Globe, color: "text-teal-400" },
];

const RolesSection = () => {
  return (
    <section className="py-24 gradient-section" id="roles">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Developer Roles</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tasks For
            <span className="text-gradient-primary"> Every Role</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Generate role-specific tasks for any technical position in your organization
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-xl p-5 text-center cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/10 transition-colors">
                  <Icon className={`w-6 h-6 ${role.color}`} />
                </div>
                <span className="text-white/80 text-sm font-medium">{role.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10+", label: "Developer Roles" },
            { value: "500+", label: "Task Templates" },
            { value: "1000+", label: "Quiz Questions" },
            { value: "∞", label: "AI Generated Tasks" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 glass-card rounded-xl">
              <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSection;
