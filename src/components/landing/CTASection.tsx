import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="gradient-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Start Managing Student Data Efficiently Today
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Join institutions already using SDMS to streamline their student record management.
          </p>
          <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 rounded-xl text-base font-semibold px-8 hover:scale-105 transition-all">
            Launch Dashboard <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
