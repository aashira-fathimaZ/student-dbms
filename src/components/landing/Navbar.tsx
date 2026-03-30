import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Features", "How It Works", "Benefits", "Tech Stack"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-gradient">SDMS</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <Button variant="hero" size="sm">Admin Login</Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border/50 p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary py-2">
              {l}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full">Admin Login</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
