import { motion } from "framer-motion";
import { Zap, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: <Zap size={20} />,
    title: "Ultra-Fast Charging",
    desc: "Up to 350kW rapid charging capability",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Smart Grid Integration",
    desc: "IoT-enabled monitoring & analytics",
  },
  {
    icon: <Award size={20} />,
    title: "Certified & Reliable",
    desc: "Built with global safety standards",
  },
];

const EVChargerSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            EV Charging Solutions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Smarter Charging for <br />
            <span className="text-blue-600">
              Electric Mobility
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Scalable EV charging infrastructure designed for residential,
            commercial, and public applications — built for performance and reliability.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80"
                alt="EV Charger"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* SOFT BORDER */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10" />
          </motion.div>

          {/* FEATURES */}
          <div className="space-y-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="flex gap-4 p-5 rounded-xl border border-gray-200 hover:shadow-lg transition bg-white"
              >
                <div className="p-3 rounded-lg bg-blue-600 text-white">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="pt-4 flex gap-4">
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