import { motion } from "framer-motion";

const CalcHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
          alt="Solar Panels"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}


      {/* LIGHT GRADIENT (for premium feel) */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-black text-white leading-tight"
        >
          Solar <span className="text-[#1E559D]">Calculator</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white mt-6 max-w-2xl mx-auto"
        >
          Estimate your solar savings, ROI, and system size in minutes with our smart calculator.
        </motion.p>

        {/* OPTIONAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <button className="bg-[#1E559D] hover:bg-[#153A7A] text-white px-6 py-3 rounded-full font-medium transition">
            Start Calculation
          </button>
        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default CalcHero;