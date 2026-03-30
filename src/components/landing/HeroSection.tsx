import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, FileText, BarChart3, Shield } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Background decorations */}
    <div className="absolute top-20 -right-32 w-96 h-96 rounded-full gradient-primary opacity-10 blur-3xl" />
    <div className="absolute -bottom-20 -left-32 w-80 h-80 rounded-full gradient-primary opacity-5 blur-3xl" />

    <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-0">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          🎓 Student Management Simplified
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
          Smart Student{" "}
          <span className="text-gradient">Database Management</span>{" "}
          System
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mb-8">
          Effortlessly manage student records with speed, accuracy, and control.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg">Get Started</Button>
          <Button variant="heroOutline" size="lg">Admin Login</Button>
        </div>
      </motion.div>

      {/* Mock Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
      >
        <div className="bg-card rounded-2xl shadow-card border border-border p-6 animate-float">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(38, 92%, 50%)" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(142, 71%, 45%)" }} />
            <span className="ml-2 text-xs text-muted-foreground font-medium">Dashboard — SDMS</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { icon: Users, label: "Students", value: "2,340" },
              { icon: FileText, label: "Records", value: "12,800" },
              { icon: BarChart3, label: "Reports", value: "156" },
              { icon: Shield, label: "Uptime", value: "99.9%" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-secondary rounded-xl p-4">
                <Icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {["Alice Johnson — CS", "Bob Smith — Math", "Carol Lee — Physics"].map((s, i) => (
              <div key={i} className="flex items-center justify-between bg-secondary/60 rounded-lg px-4 py-2.5">
                <span className="text-sm text-foreground font-medium">{s}</span>
                <span className="text-xs gradient-primary text-primary-foreground px-2 py-0.5 rounded-full">Active</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
