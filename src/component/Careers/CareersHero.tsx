import { motion } from "framer-motion";
import careersVideo from "../../assets/22.mp4";

const CareersHero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={careersVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
      <div className="relative text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-black text-slate-900 uppercase tracking-tighter"
        >
          Join Our <span className="text-blue-600">Mission</span>
        </motion.h1>
        <p className="text-slate-600 mt-6 text-[10px] font-black max-w-2xl mx-auto uppercase tracking-[0.4em]">
          Help us power a sustainable future for India. Explore opportunities to grow with us.
        </p>
      </div>
    </section>
  );
};

export default CareersHero;
