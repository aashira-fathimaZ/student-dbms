import { motion } from "framer-motion";
import { Clock, Target, Layers, Lock } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Save Time", desc: "Automate repetitive tasks and reduce manual data entry." },
  { icon: Target, title: "Data Accuracy", desc: "Built-in validation ensures error-free student records." },
  { icon: Layers, title: "Bulk Operations", desc: "Import, update, or export thousands of records at once." },
  { icon: Lock, title: "Secure & Scalable", desc: "Role-based access and scalable architecture for growth." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-24 section-alt">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose SDMS?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Built to make student data management effortless.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
