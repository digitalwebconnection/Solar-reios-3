import { motion } from "framer-motion";
import { BatteryCharging } from "lucide-react";
import evVideo from "../../../assets/offGrid.mp4";

const EVHero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-slate-900 px-4">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={evVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-7xl font-heading font-black text-slate-900 uppercase tracking-tighter"
        >
          EV Savings <br/>
          <span className="text-blue-600">Calculator</span>
        </motion.h1>
        <p className="text-slate-600 mt-6 text-[10px] font-black max-w-2xl mx-auto uppercase tracking-[0.4em]">
          Compare fuel costs with electric charging and see how much you can save per kilometer.
        </p>
      </div>
    </section>
  );
};

export default EVHero;
