import { motion } from "framer-motion";
import { Lightbulb, Wifi, Zap } from "lucide-react";

const LEDSSection = () => {
  const features = [
    {
      title: "Smart Controls",
      desc: "App-based dimming and color adjustment",
      icon: <Wifi size={32} />
    },
    {
      title: "Energy Efficient",
      desc: "80% less power consumption than traditional",
      icon: <Zap size={32} />
    },
    {
      title: "Long Life",
      desc: "50,000+ hours operational lifespan",
      icon: <Lightbulb size={32} />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated grid effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full border border-blue-600 rounded-full"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest mb-4 border-2 border-black"
          >
            Smart Lighting
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-black text-black mb-4"
          >
            Smart LED Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-black/70 max-w-2xl mx-auto"
          >
            Intelligent lighting solutions for homes, offices, and outdoor spaces with advanced control systems
          </motion.p>
        </div>

        {/* Features Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative p-8 rounded-3xl bg-white border-4 border-black shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  className="p-4 rounded-xl bg-blue-600 text-white inline-block mb-6 shadow-lg"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-black mb-3">{feature.title}</h3>
                <p className="text-black/70 leading-relaxed">{feature.desc}</p>
              </div>

              {/* Animated bottom border */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-blue-600 rounded-full mt-6 absolute bottom-0 left-0"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Indoor LED Panels",
              wattage: "10-50W"
            },
            {
              name: "Outdoor LED Lights",
              wattage: "20-100W"
            }
          ].map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-10 rounded-2xl bg-gradient-to-br from-blue-600 to-black text-white overflow-hidden cursor-pointer hover:shadow-2xl transition-all border-2 border-black"
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute opacity-10"
              >
                <Lightbulb size={150} className="absolute -top-10 -right-10" />
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">{product.name}</h3>
                <p className="text-white/80 mb-6 font-bold">Power Range: {product.wattage}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white text-black font-black rounded-lg hover:shadow-lg transition-all border border-white"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LEDSSection;
