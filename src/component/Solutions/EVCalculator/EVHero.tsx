import { motion } from "framer-motion";

const EVHero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/6295cf9d59d138d26fe61c27/66e012b9b54466405c3e17ca_Main%20Pic.png"
          alt="Electric Vehicle Charging"
          className="w-full h-full object-cover"
        />
      </div>

    

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          EV Savings <br />
          <span className="text-[#1E559D]">Calculator</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          Compare petrol vs electric costs and discover how much you can save per kilometer with EV.
        </motion.p>

        {/* CTA */}
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
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black to-transparent"></div>
    </section>
  );
};

export default EVHero;