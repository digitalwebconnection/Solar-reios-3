import { motion } from "framer-motion";
import { Bookmark, ArrowDownRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
          alt="Solar background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Background Glow */}
      

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-white mb-6"
        >
          <Bookmark size={14} /> Resource Center
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Solar Insights That <br />
          <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Drive Smarter Decisions
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white mt-6 text-base md:text-lg max-w-7xl mx-auto"
        >
          Explore expert insights, industry trends, and practical guides on solar energy, EV infrastructure, and sustainable growth in India.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <button className="flex items-center gap-2 bg-[#1E559D] hover:bg-[#153A7A] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-xl">
            Explore Blogs <ArrowDownRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
