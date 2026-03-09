import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleCard from "@/components/RoleCard";
import { departmentRoles } from "@/data/departments";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const DepartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dept = id ? departmentRoles[id] : null;

  if (!dept) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-2xl text-foreground">Department not found</h1>
          <Link to="/departments" className="text-primary mt-4 inline-block">← Back to Departments</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <Link to="/departments" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Departments
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{dept.name}</h1>
          <p className="text-muted-foreground mb-10">Select a job role to start your mock interview</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dept.roles.map((role, i) => (
            <motion.div key={role.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <RoleCard {...role} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentDetail;
