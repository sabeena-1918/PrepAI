import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  roles: number;
}

const DepartmentCard = ({ title, description, icon: Icon, to, roles }: DepartmentCardProps) => (
  <Link to={to}>
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gradient-card rounded-lg border border-border p-6 shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300 cursor-pointer h-full"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <span className="text-xs text-primary font-medium">{roles} Job Roles →</span>
    </motion.div>
  </Link>
);

export default DepartmentCard;
