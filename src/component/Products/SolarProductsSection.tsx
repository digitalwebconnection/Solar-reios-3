import { motion } from "framer-motion";
import { Sun, Leaf, Zap, ArrowRight } from "lucide-react";

const SolarProductsSection = () => {
  const benefits = [
    {
      icon: <Sun className="text-amber-500" size={28} />,
      title: "High Efficiency",
      desc: "Up to 22% conversion with advanced N-Type technology.",
      glow: "from-amber-200/40 to-transparent",
    },
    {
      icon: <Leaf className="text-emerald-500" size={28} />,
      title: "Eco-Friendly",
      desc: "Reduce carbon footprint with clean renewable energy.",
      glow: "from-emerald-200/40 to-transparent",
    },
    {
      icon: <Zap className="text-blue-500" size={28} />,
      title: "Long Performance",
      desc: "Reliable output backed by 25+ years warranty.",
      glow: "from-blue-200/40 to-transparent",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW + PARALLAX */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-amber-100 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Solar Energy
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Smart Solar for <br />
            <span className="text-blue-600">Modern Energy Needs</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Advanced solar systems engineered for efficiency, sustainability,
            and long-term reliability.
          </p>
        </motion.div>

        {/* 🔥 FLOATING CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
            >
              {/* GLOW HOVER */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition`} />

              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 mb-6 relative z-10"
              >
                {item.icon}
              </motion.div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold text-gray-900 relative z-10">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm relative z-10">
                {item.desc}
              </p>

              {/* ARROW */}
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-6 text-blue-600 flex items-center gap-1 text-sm font-medium relative z-10"
              >
                Learn more <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </div>

   

      </div>
    </section>
  );
};

export default SolarProductsSection;