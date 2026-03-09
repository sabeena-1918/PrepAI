import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registration functionality will be connected to backend soon!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="bg-gradient-card rounded-xl border border-border p-8 shadow-card">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Brain className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl font-bold text-gradient">PrepAI</span>
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground text-center mb-1">Create Account</h2>
            <p className="text-sm text-muted-foreground text-center mb-6">Start your interview preparation journey</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Full Name" className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="email" placeholder="Email address" className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type={showPassword ? "text" : "password"} placeholder="Password" className="pl-10 pr-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90">
                Create Account
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">Sign In</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;