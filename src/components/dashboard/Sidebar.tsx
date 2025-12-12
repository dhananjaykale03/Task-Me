import { motion } from "framer-motion";
import { Home, FolderOpen, CheckSquare, Users, Calendar, Settings, LogOut, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "task", label: "Task", icon: CheckSquare },
  { id: "team", label: "Team", icon: Users },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "setting", label: "Setting", icon: Settings },
];

const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-56 bg-card/40 backdrop-blur-xl border-r border-border/30 p-5 flex flex-col h-screen"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <div>
          <span className="text-xs text-primary font-medium">TASKIFY</span>
          <p className="text-lg font-bold -mt-1">TASKS</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground neon-glow-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Premium Card */}
      <div className="bg-card/60 rounded-2xl p-4 mb-4 border border-border/30 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full" />
        <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-accent/10 rounded-full" />
        <div className="relative">
          <p className="text-sm font-medium mb-1">Update to Premium</p>
          <p className="text-xs text-muted-foreground mb-3">for get all features</p>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg text-xs px-4">
            Get Started
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 opacity-60">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
            <path d="M30 15 L35 25 L45 27 L38 35 L40 45 L30 40 L20 45 L22 35 L15 27 L25 25 Z" fill="currentColor" className="text-accent/40" />
          </svg>
        </div>
      </div>

      {/* Logout */}
      <Button variant="ghost" className="justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted">
        <LogOut className="w-5 h-5" />
        Log Out
      </Button>
    </motion.div>
  );
};

export default Sidebar;
