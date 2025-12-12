import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Task {
  id: number;
  title: string;
  time: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
}

const TaskList = ({ tasks, onToggle }: TaskListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-card/40 backdrop-blur-xl rounded-2xl p-5 border border-border/30"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold">Today Task</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs">
          See More
        </Button>
      </div>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group cursor-pointer"
          >
            <div className="flex-1">
              <p className={`font-medium text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                {task.title}
              </p>
              <span className="text-xs text-muted-foreground">{task.time}</span>
            </div>
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => onToggle(task.id)}
              className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TaskList;
