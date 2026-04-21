import { motion } from "framer-motion";

const LegacySection = () => {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* OUR LEGACY */}
        <div className="mb-16">
          <div className="text-center mb-16">

            {/* Small Tag */}
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
              Our Legacy
            </h4>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
              How We <span className="text-blue-600">Started</span>
            </h2>

            {/* Sub Heading */}
            <h3 className="text-lg md:text-xl font-semibold text-slate-600">
              History
            </h3>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[15px] md:text-[16px] leading-[1.9] text-gray-800"
          >
            <p>
              Having forayed into the industry in 2004 with the introduction of
              Sine-Wave inverters for domestic and commercial use, Servotech
              witnessed dramatic growth over the subsequent years since inception
              while launching a series of LED lighting solutions, Solar Street
              lights, Solar-Hybrid Inverters, LED solar lighting solutions
              followed by its positioning as a giant and making its debut in the
              stock market and being listed on the National Stock Exchange (NSE)
              in the year 2017. To bridge the demand-supply gaps for medical-grade
              equipment since the COVID-19 outbreak, Servotech emerged as one of
              the sole providers of Oxygen Concentrators as well as UV-C
              disinfectant products.
            </p>

            <p className="mt-6">
              With a defining history of delivering unmatched and unparalleled
              product and service offerings, Servotech has carved a niche for
              itself. Rising as a disruptor within the industry, Servotech has
              progressed leaps and bounds over the years by incorporating
              ultra-modern methods, techniques and ethical practices to ensure
              superior-grade development which could bring a change for the
              society and complements the environment at large.
            </p>
          </motion.div>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* Mission */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Animated Light Sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent skew-x-12 group-hover:left-full transition-all duration-700" />
            </div>

            {/* Border Pulse */}
            <div className="absolute inset-0 rounded-2xl border border-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none" />

            {/* Top Accent */}
            <div className="w-12 h-1 bg-blue-600 mb-5 rounded-full transition-all duration-300 group-hover:w-24" />

            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 transition group-hover:text-blue-600">
              MISSION
            </h2>

            <p className="text-[15px] md:text-[16px] leading-[1.9] text-gray-700">
              To provide the most advanced cutting-edge technological and innovative solutions for a sustainable future. To empower our skilled workforce through knowledge sharing, associations, and collaborations to help society embrace the change of energy transition.
            </p>
          </div>


          {/* Vision */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Animated Light Sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent skew-x-12 group-hover:left-full transition-all duration-700" />
            </div>

            {/* Border Pulse */}
            <div className="absolute inset-0 rounded-2xl border border-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none" />

            {/* Top Accent */}
            <div className="w-12 h-1 bg-blue-600 mb-5 rounded-full transition-all duration-300 group-hover:w-24" />

            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 transition group-hover:text-blue-600">
              VISION
            </h2>

            <p className="text-[15px] md:text-[16px] leading-[1.9] text-gray-700">
              Our vision, "Produce Green to Live Green," is to lead the global transition to net-zero emissions. We are committed to creating and introducing world-class renewable energy solutions that eliminate reliance on fossil fuels, ensuring a sustainable future for generations to come.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LegacySection;