import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DepartmentCard from "@/components/DepartmentCard";
import { govtJobs } from "@/data/departments";
import { motion } from "framer-motion";

const PsuGovt = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-20 container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">PSU & Government Job Interviews</h1>
        <p className="text-center text-muted-foreground mb-12">Prepare for public sector and government exam interviews</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {govtJobs.map((d) => <DepartmentCard key={d.id} {...d} />)}
      </div>
    </div>
    <Footer />
  </div>
);

export default PsuGovt;