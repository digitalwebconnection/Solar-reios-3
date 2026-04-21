import { motion } from "framer-motion";
import { Battery, Clock, Shield, ArrowRight } from "lucide-react";

const PowerBackupSection = () => {
  return (
    <section className="py-28 bg-[#f8fafc] relative overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 🔥 LEFT - IMAGE PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80"
              className="w-full h-[480px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* TEXT OVER IMAGE */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">
                Smart Energy Backup
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Reliable storage for uninterrupted power
              </p>
            </div>
          </motion.div>

          {/* 🔥 RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Energy Storage
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Backup Power <br />
              <span className="text-blue-600">
                That Never Fails
              </span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-lg">
              Advanced battery systems designed to deliver reliable energy,
              reduce dependency on the grid, and ensure uninterrupted power.
            </p>

            {/* 🔥 GLASS STATS BAR */}
            <div className="mt-8 p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm grid grid-cols-3 gap-4">

              {[
                { icon: <Battery size={18} />, value: "50kWh+", label: "Capacity" },
                { icon: <Clock size={18} />, value: "15+ Years", label: "Lifespan" },
                { icon: <Shield size={18} />, value: "10 Years", label: "Warranty" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center text-blue-600 mb-1">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-md"
            >
              Explore Solutions <ArrowRight size={16} />
            </motion.button>

          </motion.div>

        </div>

        {/* 🔥 PRODUCT STRIP */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">

          {[
            { name: "Lithium Batteries", cap: "5–20 kWh" },
            { name: "Lead-Acid Batteries", cap: "2–10 kWh" },
            { name: "Hybrid Systems", cap: "10–50 kWh" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Storage Capacity
              </p>

              <div className="mt-4 text-blue-600 font-semibold">
                {item.cap}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PowerBackupSection;