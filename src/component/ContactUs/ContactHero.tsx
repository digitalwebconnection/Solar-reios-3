import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="bg-slate-900 pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full fill-white" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100 L100,0 Z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-7xl font-heading font-black text-white mb-6 uppercase tracking-tight"
        >
          Get in <span className="text-blue-400">Touch</span>
        </motion.h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
          Have questions about solar installations or EV charging? Our team is here to help you 
          every step of the way.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
