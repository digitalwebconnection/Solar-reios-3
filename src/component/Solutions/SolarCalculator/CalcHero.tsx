import { motion } from "framer-motion";
import { Sun } from "lucide-react";

const CalcHero = () => {
  return (
    <section className="relative h-[300px] flex items-center justify-center text-center overflow-hidden bg-slate-900 px-4">
      <Sun className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-white/5 opacity-10 pointer-events-none" />
      <div className="relative z-10">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-heading font-black text-white"
        >
          Solar <span className="text-blue-400">Calculator</span>
        </motion.h1>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto font-light">
          Precision-engineered tool to estimate your potential solar savings and ROI.
        </p>
      </div>
    </section>
  );
};

export default CalcHero;
