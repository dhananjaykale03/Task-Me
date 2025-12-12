import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const features = [
    "Unlimited task creation",
    "AI-powered generation",
    "Real-time tracking",
    "Team collaboration",
    "Detailed analytics",
    "Always free",
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="cta">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-accent font-semibold">100% Free Forever</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block text-gradient-primary">Task Management?</span>
          </h2>

          <p className="text-white/50 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of teams using TaskMe to streamline employee assessments and boost productivity.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-white/70"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-10 py-7 text-xl font-semibold glow-primary">
                Get Started Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <p className="text-white/40 text-sm mt-4">No credit card required • Setup in 2 minutes</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
