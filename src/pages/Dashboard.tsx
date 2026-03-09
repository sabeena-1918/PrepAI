import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { User, History, Package, Trophy, Target, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "history", label: "Interview History", icon: History },
  { id: "packages", label: "Packages", icon: Package },
];

const mockHistory = [
  { role: "Frontend Developer", dept: "CSE", date: "2026-03-05", score: 82, status: "Completed" },
  { role: "Data Scientist", dept: "CSE", date: "2026-03-02", score: 74, status: "Completed" },
  { role: "BHEL Engineer", dept: "PSU", date: "2026-02-28", score: 68, status: "Completed" },
  { role: "Backend Developer", dept: "CSE", date: "2026-02-20", score: 89, status: "Completed" },
];

const packages = [
  { name: "Free", price: "₹0", features: ["3 mock interviews/month", "Basic feedback", "Text answers only"], current: true },
  { name: "Pro", price: "₹499/mo", features: ["Unlimited interviews", "Detailed AI feedback", "Voice & text answers", "Performance analytics"], current: false },
  { name: "Enterprise", price: "₹1999/mo", features: ["Everything in Pro", "Custom question banks", "Team management", "Priority support", "Certificate of completion"], current: false },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-8">Dashboard</h1>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border pb-3 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === t.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Profile */}
        {activeTab === "profile" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
            <div className="bg-gradient-card rounded-xl border border-border p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <User className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">John Doe</h2>
                  <p className="text-sm text-muted-foreground">john.doe@email.com</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Trophy, label: "Interviews", value: "12" },
                  { icon: Target, label: "Avg Score", value: "78%" },
                  { icon: Clock, label: "Hours", value: "8.5" },
                  { icon: TrendingUp, label: "Improvement", value: "+15%" },
                ].map((s) => (
                  <div key={s.label} className="bg-secondary rounded-lg p-4 text-center">
                    <s.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-lg font-display font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* History */}
        {activeTab === "history" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="bg-gradient-card rounded-xl border border-border shadow-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Role</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Department</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Score</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockHistory.map((h, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                        <td className="p-4 text-sm text-foreground font-medium">{h.role}</td>
                        <td className="p-4 text-sm text-muted-foreground">{h.dept}</td>
                        <td className="p-4 text-sm text-muted-foreground">{h.date}</td>
                        <td className="p-4">
                          <span className={`text-sm font-semibold ${h.score >= 80 ? "text-success" : h.score >= 60 ? "text-warning" : "text-destructive"}`}>
                            {h.score}%
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-success/15 text-success">{h.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Packages */}
        {activeTab === "packages" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className={`bg-gradient-card rounded-xl border p-6 shadow-card relative ${
                    p.name === "Pro" ? "border-primary shadow-glow" : "border-border"
                  }`}
                >
                  {p.name === "Pro" && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground">
                      Popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{p.name}</h3>
                  <p className="font-display text-2xl font-bold text-foreground mb-4">{p.price}</p>
                  <ul className="space-y-2 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      p.current
                        ? "bg-secondary text-secondary-foreground"
                        : p.name === "Pro"
                        ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                    disabled={p.current}
                  >
                    {p.current ? "Current Plan" : "Upgrade"}
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
