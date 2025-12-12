import { motion } from "framer-motion";
import { Crown, Brain, Bot, HelpCircle, Briefcase, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
}

const features: FeatureCard[] = [
  {
    id: "admin",
    title: "Admin Control",
    description: "Manage users, assign tasks, and monitor progress",
    icon: Crown,
    color: "text-highlight",
    gradient: "from-highlight/20 to-highlight/5",
  },
  {
    id: "smart-tasks",
    title: "Smart Assignments",
    description: "AI-powered task distribution based on skills",
    icon: Zap,
    color: "text-accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    id: "ai-generator",
    title: "AI Task Generator",
    description: "Generate practice tasks with AI assistance",
    icon: Brain,
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    description: "Get instant help and guidance on tasks",
    icon: Bot,
    color: "text-green-400",
    gradient: "from-green-400/20 to-green-400/5",
  },
  {
    id: "quizzes",
    title: "Interactive Quizzes",
    description: "Test knowledge with MCQ assessments",
    icon: HelpCircle,
    color: "text-blue-400",
    gradient: "from-blue-400/20 to-blue-400/5",
  },
  {
    id: "interviewer",
    title: "Interviewer Mode",
    description: "Conduct and manage technical interviews",
    icon: Briefcase,
    color: "text-orange-400",
    gradient: "from-orange-400/20 to-orange-400/5",
  },
];

interface FeatureCardsProps {
  onFeatureClick: (featureId: string) => void;
}

const FeatureCards = ({ onFeatureClick }: FeatureCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={() => onFeatureClick(feature.id)}
            className={`glass rounded-2xl p-5 cursor-pointer relative overflow-hidden group`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative">
              <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${feature.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
              <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                Explore →
              </Button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeatureCards;
