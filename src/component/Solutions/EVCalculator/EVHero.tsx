import { motion } from "framer-motion";

const EVHero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center text-center overflow-hidden bg-slate-900 px-4">
      <div 
        className="absolute inset-0 w-full h-full object-cover bg-blue-500"
      >
      </div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-7xl font-heading font-black text-slate-900 uppercase tracking-tighter"
        >
          EV Savings <br/>
          <span className="text-blue-600">Calculator</span>
        </motion.h1>
        <p className="text-slate-600 mt-6 text-[15px] font-black max-w-2xl mx-auto uppercase tracking-[0.2em]">
          Compare fuel costs with electric charging and see how much you can save per kilometer.
        </p>
      </div>
    </section>
  );
};

export default EVHero;
