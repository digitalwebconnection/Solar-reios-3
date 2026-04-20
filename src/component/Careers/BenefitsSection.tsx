import { motion } from "framer-motion";
import { Rocket, Heart, DollarSign, BookOpen } from "lucide-react";

const benefits = [
  { title: "Growth Culture", icon: <Rocket />, desc: "Rapid advancement opportunities in the green energy sector." },
  { title: "Mission Driven", icon: <Heart />, desc: "Work that contributes directly to a healthier planet." },
  { title: "Competitive Pay", icon: <DollarSign />, desc: "Top-tier compensation and performance-linked incentives." },
  { title: "Continuous Learning", icon: <BookOpen />, desc: "Regular training sessions and professional development." },
];

const BenefitsSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Build Your Future</p>
        <h2 className="text-4xl font-heading font-black text-slate-900">Why Work With Us?</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, idx) => (
          <motion.div 
            key={idx}
            {...fadeIn}
            transition={{ delay: idx * 0.1 }}
            className="p-10 bg-white rounded-[40px] hover:bg-slate-900 group transition-all duration-500 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              {b.icon}
            </div>
            <h4 className="text-xl font-bold font-heading text-slate-900 group-hover:text-white mb-4 transition-colors">{b.title}</h4>
            <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed font-medium transition-colors">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
