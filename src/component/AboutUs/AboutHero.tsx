import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Company Hero"
      />
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
      <div className="relative text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-heading font-black text-white"
        >
          About Us
        </motion.h1>
        <div className="h-1.5 w-32 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>
    </section>
  );
};

export default AboutHero;
