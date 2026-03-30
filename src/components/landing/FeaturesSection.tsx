import { motion } from "framer-motion";
import { ShieldCheck, UserPlus, Pencil, Trash2, FileUp, CheckCircle, BarChart3, Download } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Admin Login", desc: "Secure authentication with role-based access control." },
  { icon: UserPlus, title: "Create Records", desc: "Add new student records quickly with validated forms." },
  { icon: Pencil, title: "Edit Profiles", desc: "Update student information in real-time." },
  { icon: Trash2, title: "Delete Profiles", desc: "Remove outdated records with confirmation safeguards." },
  { icon: FileUp, title: "Batch Import", desc: "Import student data via CSV or Excel files." },
  { icon: CheckCircle, title: "Data Validation", desc: "Automatic error checking ensures data accuracy." },
  { icon: BarChart3, title: "Report Generation", desc: "Generate analytics, summaries, and visual reports." },
  { icon: Download, title: "Data Export", desc: "Export records to CSV or PDF with one click." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 section-alt">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to manage student data efficiently and securely.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border/50 group"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
