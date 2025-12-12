import { motion } from "framer-motion";
import { 
  Brain, 
  Sparkles, 
  Code, 
  FileText, 
  HelpCircle,
  Layers,
  Upload,
  ChevronRight,
  Cpu,
  Wand2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full-Stack Developer",
  "Python Developer",
  "Java Developer",
  "UI/UX Designer",
  "Data Scientist",
  "Cybersecurity",
  "DevOps Engineer",
  "Mobile Developer"
];

const taskTypes = [
  { icon: FileText, label: "Written Task", desc: "Documentation & reports" },
  { icon: HelpCircle, label: "Quiz Task", desc: "MCQ assessments" },
  { icon: Code, label: "Coding Challenge", desc: "Real coding problems" },
  { icon: Layers, label: "Multi-Step Project", desc: "Complex workflows" },
  { icon: Upload, label: "File Submission", desc: "Upload deliverables" },
];

const AIGeneratorSection = () => {
  return (
    <section id="ai-generator" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="orb-primary top-0 left-1/4 opacity-20" />
      <div className="orb-secondary bottom-0 right-0 opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 glass-button px-4 py-2 mb-6">
                <Brain className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-medium">AI-Powered</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient-white">Auto-Generate</span>
                <span className="block text-gradient-accent">Perfect Tasks</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Select a developer role, choose difficulty level, and let AI create tailored tasks instantly. From coding challenges to written assessments.
              </p>
            </motion.div>

            {/* Task Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3 mb-8"
            >
              {taskTypes.map((type, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-panel p-4 flex items-center gap-4 group hover:bg-white/[0.08] transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center group-hover:from-secondary group-hover:to-accent transition-all">
                    <type.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{type.label}</div>
                    <div className="text-white/40 text-sm">{type.desc}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-secondary to-accent text-white rounded-xl px-8 py-6 text-lg font-semibold glow-secondary hover:opacity-90 transition-all">
                <Wand2 className="w-5 h-5 mr-2" />
                Try AI Generator
              </Button>
            </motion.div>
          </div>

          {/* Right - AI Interface Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card p-6 glow-secondary">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center animate-pulse-glow">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">AI Task Generator</h3>
                  <p className="text-white/40 text-sm">Powered by Advanced AI</p>
                </div>
              </div>

              {/* Role Selector */}
              <div className="mb-6">
                <label className="text-white/60 text-sm mb-2 block">Select Developer Role</label>
                <div className="glass-panel p-4">
                  <div className="flex flex-wrap gap-2">
                    {roles.slice(0, 4).map((role, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className={`px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-all ${
                          i === 0 
                            ? "bg-gradient-to-r from-secondary to-accent text-white" 
                            : "bg-white/5 text-white/60 hover:bg-white/10"
                        }`}
                      >
                        {role}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Difficulty */}
              <div className="mb-6">
                <label className="text-white/60 text-sm mb-2 block">Difficulty Level</label>
                <div className="flex gap-3">
                  {['Easy', 'Medium', 'Hard'].map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className={`flex-1 p-3 rounded-xl text-center text-sm cursor-pointer transition-all ${
                        i === 1 
                          ? "glass-card border-secondary/50 text-secondary" 
                          : "glass-panel text-white/60 hover:text-white"
                      }`}
                    >
                      {level}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="w-full p-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-5 h-5" />
                Generate Task with AI
              </motion.button>

              {/* AI Status */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-4 flex items-center justify-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white/40 text-sm">AI Ready • Generates in seconds</span>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 glass-card px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">1,000+</div>
                  <div className="text-white/40 text-xs">Tasks Generated</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIGeneratorSection;
