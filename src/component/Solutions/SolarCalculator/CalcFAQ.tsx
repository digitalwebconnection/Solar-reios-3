import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Zap, TrendingUp, FileText, Battery } from "lucide-react";

const faq = [
  { 
    q: "How much space do I need for a 1kW solar system?", 
    a: "Roughly 100 sq. ft. of shadow-free rooftop area is required for a 1kW solar installation. We conduct a free site assessment to determine exact requirements.",
    icon: Zap,
    color: "blue"
  },
  { 
    q: "What is the typical ROI on solar?", 
    a: "Most residential systems pay for themselves within 3Ã¢â‚¬â€œ5 years, after which you enjoy free electricity for 20+ years. Your ROI depends on your location, sun exposure, and electricity tariffs.",
    icon: TrendingUp,
    color: "green"
  },
  { 
    q: "Does the government provide subsidies?", 
    a: "Yes, under schemes like PM Surya Ghar, the central government provides significant subsidies for residential solar (up to 3kW). We help you navigate the entire subsidy process.",
    icon: FileText,
    color: "purple"
  },
  { 
    q: "Will solar work during power cuts?", 
    a: "Only if you have a hybrid system with batteries. Standard on-grid systems shut down during power cuts for safety (anti-islanding). We offer battery solutions for backup power.",
    icon: Battery,
    color: "orange"
  },
];

const colorMap = {
  blue: { bg: "bg-[#1E559D]/10", border: "border-blue-200", badge: "bg-[#1E559D]/20 text-[#1E559D]" },
  green: { bg: "bg-green-50", border: "border-green-200", badge: "bg-green-100 text-green-700" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-700" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", badge: "bg-orange-100 text-orange-700" },
};

const CalcFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-to-b from-white via-slate-50 to-white">
      
      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#1E559D]/20/20 rounded-full blur-3xl -ml-40 -mt-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl -mr-40 -mb-40"></div>

      <div className="relative max-w-5xl mx-auto z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-block">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-20 h-20 bg-linear-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center shadow-lg"
            >
              <HelpCircle size={40} className="text-[#1E559D]" />
            </motion.div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-black text-[#000000]">
              Got Questions? <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1E559D] to-cyan-600">
                We Have Answers
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about solar systems, installation, subsidies, and savings.
            </p>
          </div>
        </motion.div>

        {/* FAQ ACCORDION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          {faq.map((item, idx) => {
            const IconComponent = item.icon;
            const colors = colorMap[item.color as keyof typeof colorMap];
            const isOpen = openFaq === idx;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? `${colors.border} ${colors.bg} shadow-2xl`
                    : `border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg`
                }`}
              >
                {/* GRADIENT BACKGROUND ON OPEN */}
                {isOpen && (
                  <motion.div
                    layoutId={`bg-${idx}`}
                    className={`absolute inset-0 ${colors.bg} opacity-50`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}

                {/* BUTTON */}
                <motion.button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="relative w-full px-6 sm:px-8 py-6 text-left flex items-start sm:items-center justify-between gap-4"
                  whileHover={{ x: 4 }}
                  whileTap={{ x: 2 }}
                >
                  {/* LEFT SECTION */}
                  <div className="flex items-start sm:items-center gap-4 flex-1">
                    <motion.div
                      animate={{ rotate: isOpen ? 360 : 0 }}
                      transition={{ duration: 0.4 }}
                      className={`shrink-0 p-3 rounded-xl ${colors.badge} transition-all`}
                    >
                      <IconComponent size={24} />
                    </motion.div>

                    <h3 className="text-base sm:text-lg font-bold text-[#000000] leading-snug group-hover:text-[#1E559D] transition-colors">
                      {item.q}
                    </h3>
                  </div>

                  {/* CHEVRON */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isOpen 
                        ? "bg-linear-to-br from-[#1E559D] to-blue-700 text-white" 
                        : "bg-slate-100 text-slate-400 group-hover:bg-[#1E559D]/20 group-hover:text-[#1E559D]"
                    }`}>
                      <ChevronDown size={20} />
                    </div>
                  </motion.div>
                </motion.button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative px-6 sm:px-8 pb-6 sm:pb-8 border-t-2 border-slate-200/50"
                      >
                        <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-medium">
                          {item.a}
                        </p>

                        {/* CTA IN ANSWER */}
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-4 text-[#1E559D] font-semibold text-sm hover:text-[#1E559D] flex items-center gap-2 group/link"
                        >
                          Learn More <ChevronDown className="w-4 h-4 group-hover/link:translate-x-1 transition-transform rotate-90" />
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-4 bg-linear-to-r from-[#1E559D] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/40"
          >
            Talk to Our Solar Experts
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default CalcFAQ;
