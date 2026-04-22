import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center text-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <img
          src="https://akuntha.com/wp-content/uploads/2023/07/Solar-Panels.jpg"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/20" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 max-w-3xl">

        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4"
        >
          Contact Us
        </motion.p>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-white leading-tight"
        >
          Let’s Power Your <br />
          <span className="text-blue-500">Next Project</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-6 text-lg"
        >
          Have questions about solar installations, EV charging, or energy solutions?
          Our team is ready to guide you every step of the way.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md">
            Get Consultation
          </button>

          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition">
            Call Us Now
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;