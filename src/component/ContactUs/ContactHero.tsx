import { motion } from "framer-motion";
import contactVideo from "../../assets/offGrid.mp4";

const ContactHero = () => {
  return (
    <section className="bg-slate-900 pt-32 pb-20 px-4 relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={contactVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-7xl font-heading font-black text-slate-900 mb-6 uppercase tracking-tighter"
        >
          Get in <span className="text-blue-600">Touch</span>
        </motion.h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm font-black uppercase tracking-[0.3em]">
          Have questions about solar installations or EV charging? Our team is here to help you 
          every step of the way.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
