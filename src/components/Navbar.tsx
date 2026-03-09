import { Link, useLocation } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/departments", label: "Departments" },
    { to: "/psu-govt", label: "PSU & Govt Jobs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Brain className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold text-gradient">PrepAI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
<div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90">
              Sign Up
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block py-2 text-sm text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-3">
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/register" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="bg-gradient-primary text-primary-foreground">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;