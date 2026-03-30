import { motion } from "framer-motion";
import { LogIn, Upload, Settings, FileBarChart } from "lucide-react";

const steps = [
  { icon: LogIn, title: "Admin Logs In", desc: "Authenticate securely to access the dashboard." },
  { icon: Upload, title: "Add or Import Data", desc: "Enter records manually or import from CSV/Excel." },
  { icon: Settings, title: "Manage Records", desc: "Update, edit, or delete student profiles as needed." },
  { icon: FileBarChart, title: "Generate & Export", desc: "Create reports and export data in CSV or PDF." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Four simple steps to full student data management.</p>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center relative"
          >
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <span className="inline-block text-xs font-bold text-primary mb-2">STEP {i + 1}</span>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
