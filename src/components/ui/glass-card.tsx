import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  className?: string;
  glow?: boolean;
  hover?: boolean;
  children?: ReactNode;
}

export const GlassCard = ({ className, glow, hover, children }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={cn(
        "glass rounded-lg p-6 backdrop-blur-xl",
        hover && "glass-hover cursor-pointer",
        glow && "neon-glow-primary",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
