import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-display text-lg font-bold text-gradient">PrepAI</span>
          </div>
          <p className="text-sm text-muted-foreground">AI-powered interview preparation system. Practice, improve, and ace your interviews.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/departments" className="hover:text-primary transition-colors">Departments</Link>
            <Link to="/psu-govt" className="hover:text-primary transition-colors">PSU & Govt Jobs</Link>
            <Link to="/login" className="hover:text-primary transition-colors">Login</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-foreground">Contact</h4>
          <p className="text-sm text-muted-foreground">support@prepai.com</p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 PrepAI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;