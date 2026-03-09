import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoleCardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  questions: number;
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-success/15 text-success",
  Intermediate: "bg-warning/15 text-warning",
  Advanced: "bg-destructive/15 text-destructive",
};

const RoleCard = ({ title, description, difficulty, questions }: RoleCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-gradient-card rounded-lg border border-border p-6 shadow-card hover:shadow-glow hover:border-primary/30 transition-all"
  >
    <div className="flex items-start justify-between mb-3">
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
        <Briefcase className="h-5 w-5 text-primary" />
      </div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>
        {difficulty}
      </span>
    </div>
    <h3 className="font-display text-base font-semibold text-foreground mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted-foreground">{questions}+ Questions</span>
      <Button size="sm" variant="ghost" className="text-primary hover:text-primary gap-1 text-xs p-0 h-auto">
        Start Practice <ArrowRight className="h-3 w-3" />
      </Button>
    </div>
  </motion.div>
);

export default RoleCard;