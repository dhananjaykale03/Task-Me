import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Sparkles, Code, Database, Shield, Palette, Cloud } from "lucide-react";
import { toast } from "sonner";

const categories = [
  { value: "fullstack", label: "Full Stack Developer", icon: Code },
  { value: "python", label: "Python", icon: Code },
  { value: "java", label: "Java", icon: Code },
  { value: "ml", label: "Machine Learning", icon: Brain },
  { value: "security", label: "Cyber Security", icon: Shield },
  { value: "uiux", label: "UI/UX", icon: Palette },
  { value: "cloud", label: "Cloud Development", icon: Cloud },
  { value: "database", label: "Database", icon: Database },
];

const AITaskGenerator = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!category || !difficulty || !type) {
      toast.error("Please select all options");
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Task generated successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Brain className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-medium">AI Task Generator</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Generate AI-Powered Tasks
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create custom learning tasks with artificial intelligence across multiple categories
          </p>
        </motion.div>

        {/* Category Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Select Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCategory(cat.value)}
                  className={`p-4 rounded-lg glass glass-hover flex flex-col items-center gap-2 transition-all ${
                    category === cat.value ? "bg-primary/20 neon-glow-primary" : ""
                  }`}
                >
                  <cat.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-center">{cat.label}</span>
                </motion.button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label>Difficulty Level</Label>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger className="glass">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Task Type</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger className="glass">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="written">Written Task</SelectItem>
                    <SelectItem value="quiz">Quiz (MCQ)</SelectItem>
                    <SelectItem value="project">Project Task</SelectItem>
                    <SelectItem value="code">Code Writing</SelectItem>
                    <SelectItem value="bug">Bug Fixing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-glow-primary transition-all duration-300 text-lg py-6"
            >
              {isGenerating ? (
                <>
                  <Brain className="w-5 h-5 mr-2 animate-pulse" />
                  Generating with AI...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Task
                </>
              )}
            </Button>
          </GlassCard>
        </motion.div>

        {/* Generated Task Preview */}
        {!isGenerating && category && difficulty && type && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <GlassCard className="neon-glow-primary">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-primary" />
                Generated Task Preview
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Task Title</h4>
                  <p className="text-lg">Build a RESTful API with Authentication</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Description</h4>
                  <p className="text-muted-foreground">
                    Create a secure RESTful API using modern best practices. Implement JWT-based authentication,
                    user registration, and protected routes. Include proper error handling and validation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>User registration and login endpoints</li>
                    <li>JWT token generation and validation</li>
                    <li>Protected routes requiring authentication</li>
                    <li>Input validation and error handling</li>
                  </ul>
                </div>
                <Button className="bg-gradient-to-r from-primary to-secondary">
                  Save Task
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AITaskGenerator;
