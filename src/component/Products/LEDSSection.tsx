import { motion } from "framer-motion";
import { Lightbulb, Wifi, Zap } from "lucide-react";

const features = [
  {
    title: "Smart Controls",
    desc: "App-based dimming & automation",
    icon: <Wifi size={20} />,
  },
  {
    title: "Energy Efficient",
    desc: "Up to 80% less power consumption",
    icon: <Zap size={20} />,
  },
  {
    title: "Long Life",
    desc: "50,000+ hours lifespan",
    icon: <Lightbulb size={20} />,
  },
];

const LEDSSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">

      {/* SOFT GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-100 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Smart Lighting
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
            LED Lighting <span className="text-blue-600">Reimagined</span>
          </h2>

          <p className="mt-5 text-gray-600">
            Intelligent lighting systems built for efficiency, control,
            and modern living.
          </p>
        </div>

        {/* 🔥 FEATURED PRODUCT (NEW) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="https://qbmindia.com/wp-content/uploads/2024/12/51KCVfyVqwL._SL1030_.jpg"
              className="rounded-3xl shadow-xl w-full h-[400px] object-contain"
            />

            {/* FLOATING TAG */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow">
              Indoor LED Panel
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Indoor Lighting
            </h3>

            <p className="text-gray-600 mb-6">
              Designed for modern interiors, our LED panels deliver
              uniform brightness, energy efficiency, and sleek aesthetics.
            </p>

            {/* FEATURES INLINE */}
            <div className="space-y-3 mb-6">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 text-white rounded-md">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 text-sm">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition shadow-md">
              Explore Product →
            </button>
          </motion.div>
        </div>

        {/* 🔥 PRODUCT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              name: "Outdoor LED Lights",
              wattage: "20–100W",
              img: "https://litverse.in/cdn/shop/files/1_e10033a4-f25c-42e3-91e2-30a4c655d08e.jpg?v=1758348924"
            },
            {
              name: "Street LED",
              wattage: "30–120W",
              img: "https://images.unsplash.com/photo-1507477338202-487281e6c27e?w=800"
            },
            {
              name: "Decorative LED",
              wattage: "5–20W",
              img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800"
            }
          ].map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.img}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="p-5">
                <h3 className="font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Power Range: {product.wattage}
                </p>

                <button className="mt-4 text-blue-600 font-semibold text-sm hover:underline">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LEDSSection;  