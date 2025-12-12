import { motion } from "framer-motion";
import { Clock, Users as UsersIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tasks: number;
  progress: number;
  date: string;
  members: string[];
  color: "pink" | "purple" | "yellow";
}

const colorClasses = {
  pink: {
    bg: "gradient-pink",
    glow: "neon-glow-pink",
  },
  purple: {
    bg: "gradient-purple",
    glow: "neon-glow-purple",
  },
  yellow: {
    bg: "gradient-orange",
    glow: "neon-glow-orange",
  },
};

const ProjectCard = ({ title, tasks, progress, date, members, color }: ProjectCardProps) => {
  const colors = colorClasses[color];
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className={`${colors.bg} ${colors.glow} rounded-2xl p-5 min-w-[240px] flex-shrink-0 cursor-pointer transition-all duration-300`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
          
          {/* Member Avatars */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex -space-x-2">
              {members.slice(0, 3).map((initials, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-xs font-medium text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            {members.length > 3 && (
              <span className="text-white/80 text-xs ml-1">+{members.length - 3}</span>
            )}
          </div>
        </div>

        {/* Progress Ring */}
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 -rotate-90">
            <circle
              className="stroke-white/20"
              strokeWidth="4"
              fill="transparent"
              r={radius}
              cx="32"
              cy="32"
            />
            <motion.circle
              className="stroke-white/90"
              strokeWidth="4"
              fill="transparent"
              r={radius}
              cx="32"
              cy="32"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
            {progress}%
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-white/80 text-xs">
        <div className="flex items-center gap-1.5">
          <UsersIcon className="w-3.5 h-3.5" />
          <span>{tasks} Tasks</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
