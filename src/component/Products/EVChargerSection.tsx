import { motion } from "framer-motion";
import { Zap, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: <Zap size={18} />,
    title: "Ultra-Fast Charging",
    desc: "Up to 350kW rapid charging capability",
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Smart Grid Integration",
    desc: "IoT-enabled monitoring & analytics",
  },
  {
    icon: <Award size={18} />,
    title: "Certified & Reliable",
    desc: "Built with global safety standards",
  },
];

const EVChargerSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            EV Charging Solutions
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Powering the Future of <br />
            <span className="text-blue-600">Electric Mobility</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Advanced EV charging infrastructure built for speed, intelligence,
            and long-term scalability.
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: IMAGE WITH FLOATING CARDS */}
          <div className="relative">

            {/* MAIN IMAGE */}
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900"
              className="rounded-3xl shadow-2xl w-full h-[460px] object-cover"
            />

            {/* FLOATING FEATURE CARDS */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-10 left-6 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg w-52"
            >
              <p className="text-sm font-semibold text-gray-800">
                ⚡ 350kW Fast Charging
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute top-6 -right-6 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg w-52"
            >
              <p className="text-sm font-semibold text-gray-800">
                📊 Smart Monitoring
              </p>
            </motion.div>
          </div>

          {/* RIGHT: FEATURES */}
          <div className="space-y-6">

            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition"
              >
                <div className="p-3 rounded-lg bg-blue-600 text-white group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="pt-6 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
                Explore Solutions →
              </button>

              <button className="px-8 py-3 border border-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Consultation
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EVChargerSection;