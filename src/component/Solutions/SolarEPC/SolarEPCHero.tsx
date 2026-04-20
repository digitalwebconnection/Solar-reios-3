import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolarEPCHero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full object-cover bg-blue-500"
      >
      </div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight text-slate-900 uppercase tracking-tighter">
            End-to-End <br/>
            <span className="text-blue-600">Solar EPC</span> Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mb-10 font-bold uppercase tracking-widest text-xs">
            Expert Engineering, Procurement, and Construction for guaranteed 
            performance and long-term energy savings.
          </p>
          <Link to="/contact" className="bg-blue-600 hover:bg-slate-900 text-white px-10 py-5 rounded-full font-black text-lg inline-flex items-center gap-2 group transition-all shadow-2xl uppercase tracking-widest">
            Get Free Consultation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarEPCHero;
