import { motion } from "framer-motion";


const SolarEPCHero = () => {
  return (
    <section className="relative h-150 w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">

      {/* ANIMATED BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
          alt="Solar Plant"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* DYNAMIC GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80 z-1"></div>

      {/* ANIMATED GLOW EFFECTS */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-80 h-80 bg-[#1E559D]/100/20 rounded-full blur-3xl z-1"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0]
        }}
        transition={{ repeat: Infinity, duration: 10, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-1"
      ></motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8">



          {/* MAIN HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white drop-shadow-lg">
              Power Your Future <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-block bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
              >
                with Solar EPC Excellence
              </motion.span>
            </h1>
          </motion.div>

          {/* SUBTEXT WITH ANIMATION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-lg sm:text-xl text-gray-200 leading-relaxed font-light"
          >
            From intelligent design to seamless installation Ã¢â‚¬â€ we deliver cutting-edge solar solutions
            that dramatically reduce costs and maximize long-term ROI with industry-leading expertise.
          </motion.p>

          {/* STATS/HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-3 gap-6 sm:gap-8 w-full mt-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-black text-[#1E559D]">500+</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">Projects Completed</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-black text-cyan-400">10 GW</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">Capacity Installed</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-black text-[#1E559D]">12+</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">Years Experience</p>
            </div>
          </motion.div>



        </div>
      </div>

    </section>
  );
};

export default SolarEPCHero;
