import { motion } from "framer-motion";

const CareersHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/071/392/534/large_2x/solar-panels-manufacturing-plant-research-and-development-experts-studying-how-to-harness-sun-powervoltaics-factory-engineering-team-working-together-to-improve-development-efficiency-photo.jpg
          "
          alt="Team working"
          className="w-full h-full object-cover"
        />
      </motion.div>



      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

      {/* FLOATING GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#1E559D]/20 blur-[120px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Join Our <span className="text-[#1E559D]">Team</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mt-2 max-w-4xl mx-auto"
        >
          Be part of a team shaping the future of clean energy in India. 
          Build your career while making a real impact.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-[#1E559D] hover:bg-[#153A7A] text-white px-6 py-3 rounded-full font-medium transition">
            View Open Roles
          </button>

          <button className="border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Life at Company
          </button>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 text-white text-sm"
      >
        Ã¢â€ â€œ Scroll
      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black to-transparent"></div>
    </section>
  );
};

export default CareersHero;