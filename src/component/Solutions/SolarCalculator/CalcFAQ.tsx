import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faq = [
  { q: "How much space do I need for a 1kW solar system?", a: "Roughly 100 sq. ft. of shadow-free rooftop area is required for a 1kW solar installation." },
  { q: "What is the typical ROI on solar?", a: "Most residential systems pay for themselves within 3–5 years, after which you enjoy free electricity for 20+ years." },
  { q: "Does the government provide subsidies?", a: "Yes, under schemes like PM Surya Ghar, the central government provides significant subsidies for residential solar (up to 3kW)." },
  { q: "Will solar work during power cuts?", a: "Only if you have a hybrid system with batteries. Standard on-grid systems shut down during power cuts for safety (anti-islanding)." },
];

const CalcFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-sm">
          <HelpCircle size={32} />
        </div>
        <h2 className="text-4xl font-heading font-black text-slate-900">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faq.map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
            <button 
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full p-8 text-left flex justify-between items-center group"
            >
              <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.q}</span>
              <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-all ${openFaq === idx ? "bg-blue-600 text-white rotate-180" : "text-slate-400"}`}>
                <ChevronDown size={18} />
              </div>
            </button>
            <AnimatePresence>
              {openFaq === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-8 pb-8 text-slate-500 leading-relaxed font-medium"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalcFAQ;
