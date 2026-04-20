import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ChevronRight } from "lucide-react";
// import heroVideo from "../../assets/ongred.jpg";

const AboutHero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full object-cover bg-blue-500"
      />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-heading font-black text-slate-900 leading-tight"
        >
          Powering a <br />
          <span className="text-blue-600">Greener</span> Future
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutHero;
