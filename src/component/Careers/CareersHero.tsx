import { motion } from "framer-motion";

const CareersHero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center overflow-hidden bg-slate-900">
      <div 
        className="absolute inset-0 w-full h-full object-cover bg-blue-500"
      >
      </div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      <div className="relative text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-black text-slate-900 uppercase tracking-tighter"
        >
          Join Our <span className="text-blue-600">Mission</span>
        </motion.h1>
        <p className="text-slate-600 mt-6 text-[15px] font-black max-w-2xl mx-auto uppercase tracking-[0.2em]">
          Help us power a sustainable future for India. Explore opportunities to grow with us.
        </p>
      </div>
    </section>
  );
};

export default CareersHero;
