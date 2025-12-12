import { motion } from "framer-motion";
import { 
  BookOpen, Code, Zap, Users, Settings, 
  Play, FileText, Search, ArrowRight, ExternalLink
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Documentation = () => {
  const categories = [
    {
      icon: Play,
      title: "Getting Started",
      description: "Learn the basics of TaskMe and set up your first project",
      articles: ["Quick Start Guide", "Creating Your Account", "Dashboard Overview", "Your First Task"]
    },
    {
      icon: Users,
      title: "User Management",
      description: "Manage team members, roles, and permissions",
      articles: ["Inviting Users", "Role Management", "Permission Levels", "Team Settings"]
    },
    {
      icon: FileText,
      title: "Task Creation",
      description: "Create and manage different types of tasks",
      articles: ["Task Types Overview", "Creating Coding Tasks", "Quiz Configuration", "Deadline Management"]
    },
    {
      icon: Zap,
      title: "AI Features",
      description: "Leverage AI to generate and evaluate tasks",
      articles: ["AI Task Generator", "Auto-Evaluation", "Smart Suggestions", "AI Best Practices"]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Integrate TaskMe with your existing tools",
      articles: ["Authentication", "REST API", "Webhooks", "Rate Limits"]
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Customize TaskMe for your organization",
      articles: ["Branding Options", "Email Templates", "Integration Settings", "Security Config"]
    }
  ];

  const popularArticles = [
    "How to create your first coding challenge",
    "Setting up automated task evaluation",
    "Configuring SSO for enterprise",
    "Best practices for candidate assessment",
    "Exporting and analyzing results"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Resources</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Documentation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Everything you need to know about using TaskMe effectively
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="pl-12 h-14 bg-card/50 border-primary/20 text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link">
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Articles</h2>
            <p className="text-muted-foreground">Most read articles by our users</p>
          </motion.div>

          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <motion.a
                key={article}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <span className="text-foreground group-hover:text-primary transition-colors">{article}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Can't find what you're looking for?</h2>
            <p className="text-muted-foreground mb-6">Our support team is here to help</p>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Contact Support
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;
