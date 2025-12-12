import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ActivityData {
  label: string;
  percentage: number;
  color: string;
}

interface TaskActivityChartProps {
  data: ActivityData[];
  totalPercentage: number;
}

const TaskActivityChart = ({ data, totalPercentage }: TaskActivityChartProps) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  let currentOffset = 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-card/40 backdrop-blur-xl rounded-2xl p-5 border border-border/30"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold">Task Activity</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs">
          See More
        </Button>
      </div>

      <div className="flex items-center gap-6">
        {/* Donut Chart */}
        <div className="relative w-28 h-28 flex-shrink-0">
          <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="transparent"
              stroke="hsl(var(--muted))"
              strokeWidth="14"
            />
            {/* Data segments */}
            {data.map((item, index) => {
              const segmentLength = (item.percentage / 100) * circumference;
              const offset = currentOffset;
              currentOffset += segmentLength;
              
              return (
                <motion.circle
                  key={index}
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={`${segmentLength} ${circumference}`}
                  strokeDashoffset={-offset}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: -offset }}
                  transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{totalPercentage}%</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 flex-1">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TaskActivityChart;
