import { motion } from "framer-motion";

const stack = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React"], color: "from-blue-500 to-cyan-400" },
  { category: "Backend", items: ["Node.js", "Express.js", "REST API"], color: "from-green-500 to-emerald-400" },
  { category: "Database", items: ["MySQL", "MongoDB", "Redis"], color: "from-orange-500 to-amber-400" },
];

const TechStackSection = () => (
  <section id="tech-stack" className="py-24">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tech Stack</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Built with modern, reliable technologies.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {stack.map(({ category, items, color }, i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl font-bold text-white">{category[0]}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {items.map((item) => (
                <span key={item} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
