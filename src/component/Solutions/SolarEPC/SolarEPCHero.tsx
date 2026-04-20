import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolarEPCHero = () => {
  return (
    <section className="relative h-[450px] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="EPC Hero"
      />
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-white text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight">
            End-to-End <span className="text-blue-400">Solar EPC</span> Services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-10 font-light">
            Expert Engineering, Procurement, and Construction for guaranteed 
            performance and long-term energy savings.
          </p>
          <Link to="/contact" className="bg-blue-600 hover:bg-white hover:text-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-2 group transition-all shadow-2xl uppercase tracking-widest">
            Get Free Consultation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarEPCHero;
