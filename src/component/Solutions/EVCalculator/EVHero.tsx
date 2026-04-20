import { motion } from "framer-motion";
import { BatteryCharging } from "lucide-react";

const EVHero = () => {
  return (
    <section className="relative h-[300px] flex items-center justify-center text-center overflow-hidden bg-slate-900 px-4">
      <BatteryCharging className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-white/5 opacity-10 pointer-events-none" />
      <div className="relative z-10">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight"
        >
          EV Savings <span className="text-blue-400">Calculator</span>
        </motion.h1>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto font-light">
          Compare fuel costs with electric charging and see how much you can save per kilometer.
        </p>
      </div>
    </section>
  );
};

export default EVHero;
