import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Member {
  name: string;
  role: string;
  workingOn: string;
  initials: string;
  color: string;
}

interface MembersListProps {
  members: Member[];
}

const roleColors: Record<string, string> = {
  "UI Designer": "text-primary",
  "UX Research": "text-blue-400",
  "Developer": "text-accent",
  "Product Manager": "text-secondary",
};

const MembersList = ({ members }: MembersListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-card/40 backdrop-blur-xl rounded-2xl p-5 border border-border/30"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold">Member</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs">
          See More
        </Button>
      </div>

      <div className="space-y-4">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer"
          >
            <div className={`w-10 h-10 rounded-full ${member.color} flex items-center justify-center text-sm font-semibold text-white`}>
              {member.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{member.name}</p>
              <p className={`text-xs ${roleColors[member.role] || "text-muted-foreground"}`}>
                {member.role}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Work On</p>
              <p className="text-xs font-medium truncate max-w-[100px]">{member.workingOn}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MembersList;
