import { motion } from "framer-motion";

const CareersHero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
      <img 
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt="Careers Hero"
      />
      <div className="relative text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-black text-white"
        >
          Join Our <span className="text-blue-400">Mission</span>
        </motion.h1>
        <p className="text-slate-400 mt-6 text-xl max-w-2xl mx-auto font-light">
          Help us power a sustainable future for India. Explore opportunities to grow with us.
        </p>
      </div>
    </section>
  );
};

export default CareersHero;
