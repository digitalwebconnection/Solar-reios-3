import { motion } from "framer-motion";
import { Package, Gauge, AlertCircle } from "lucide-react";

const OthersSection = () => {
  const products = [
    {
      name: "Monitoring Systems",
      description: "Real-time energy monitoring and analytics",
      icon: <Gauge size={40} />
    },
    {
      name: "Safety Equipment",
      description: "DC disconnectors and safety devices",
      icon: <AlertCircle size={40} />
    },
    {
      name: "Installation Kits",
      description: "Complete mounting and installation accessories",
      icon: <Package size={40} />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 border-2 border-blue-600 rounded-full opacity-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-4 py-2 bg-black text-white text-xs font-black rounded-full uppercase tracking-widest mb-4 border-2 border-blue-600"
          >
            Additional Solutions
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-heading font-black text-black mb-4">
            And Much More
          </h2>

          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Beyond our core products, we provide comprehensive accessories and solutions for a complete energy ecosystem
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-white border-4 border-black shadow-xl hover:shadow-2xl transition-all cursor-pointer h-full"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="p-4 rounded-xl bg-blue-600 text-white inline-block mb-6 shadow-lg"
                >
                  {product.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-black mb-3">{product.name}</h3>
                <p className="text-black/70 leading-relaxed mb-6">{product.description}</p>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-black font-black"
                >
                  <span>Explore</span>
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </motion.div>

              {/* Glow effect on hover */}
              <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur-xl"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Full Width Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-black text-white p-12 border-4 border-blue-600 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full border border-blue-600 rounded-full"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 max-w-2xl"
          >
            <h3 className="text-3xl font-heading font-black mb-4">Custom Solutions Available</h3>
            <p className="text-lg text-white/80 mb-8">
              Need something specific? Our team can provide tailored solutions for your unique energy requirements and constraints.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:shadow-lg transition-all border-2 border-white"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-black rounded-2xl hover:bg-white/10 transition-all"
              >
                Browse Catalog
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OthersSection;
