import { motion } from "framer-motion";
import abouthero from "../../assets/abouthero.png";

const AboutHero = () => {
  return (
    <section className="relative h-120 flex items-center justify-center overflow-hidden">
      <img
        src={abouthero}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading text-white font-bold leading-tight"
        >
          Powering a Greener<br />
          <span className="text-blue-400">Future</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutHero;
