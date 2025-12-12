import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

interface ScheduleEvent {
  time: string;
  category: string;
  title: string;
}

interface SchedulePanelProps {
  userName: string;
  userRole: string;
  events: ScheduleEvent[];
}

const categoryColors: Record<string, string> = {
  Meeting: "border-l-blue-400",
  Interview: "border-l-primary",
  Review: "border-l-accent",
  Training: "border-l-secondary",
  Design: "border-l-purple-400",
  "Dribble Shot": "border-l-pink-400",
  "UX Research": "border-l-cyan-400",
};

const SchedulePanel = ({ userName, userRole, events }: SchedulePanelProps) => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const calendarDays = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, null, null, null, null],
  ];
  
  const selectedDays = [3, 4, 5];

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-72 bg-card/30 backdrop-blur-xl border-l border-border/30 p-5 h-screen overflow-y-auto"
    >
      {/* User Profile */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
          {userName.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">{userName}</p>
          <p className="text-xs text-muted-foreground">{userRole}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Calendar */}
      <div className="bg-card/40 rounded-2xl p-4 mb-6 border border-border/30">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">My Schedule</h3>
          <CalendarIcon className="w-4 h-4 text-muted-foreground" />
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <ChevronLeft className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
          <span className="text-sm font-medium">Agustus 2021</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map((day) => (
            <div key={day} className="text-center text-xs text-muted-foreground py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.flat().map((day, index) => (
            <motion.div
              key={index}
              whileHover={day ? { scale: 1.1 } : {}}
              className={`text-center text-xs py-1.5 rounded-lg cursor-pointer transition-colors ${
                day === null
                  ? ""
                  : selectedDays.includes(day)
                  ? "bg-primary text-primary-foreground font-medium"
                  : "hover:bg-muted/50"
              }`}
            >
              {day}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Schedule Events */}
      <div className="space-y-4">
        {["03 August", "04 August", "05 August"].map((date, dateIndex) => (
          <div key={date}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">{date}</h4>
              <span className="text-xs text-muted-foreground cursor-pointer">...</span>
            </div>
            <div className="space-y-2">
              {events.slice(dateIndex * 2, dateIndex * 2 + 2).map((event, eventIndex) => (
                <motion.div
                  key={eventIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (dateIndex * 2 + eventIndex) }}
                  whileHover={{ x: 4 }}
                  className={`bg-card/40 rounded-xl p-3 border-l-2 ${categoryColors[event.category] || "border-l-primary"} cursor-pointer hover:bg-card/60 transition-colors`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-muted-foreground font-medium">{event.time}</span>
                    <div>
                      <p className="text-xs text-muted-foreground">{event.category}</p>
                      <p className="text-sm font-medium">{event.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SchedulePanel;
