import { motion } from "framer-motion";
import { ArrowRight, Zap, Sun, Battery, Car } from "lucide-react";

const products = [
  {
    title: "Solar Inverter",
    desc: "Built for performance and reliability, Solar Reios inverters ensure maximum energy conversion with intelligent MPPT technology. Designed for commercial and industrial applications, they deliver stable output, real-time monitoring, and long-term operational efficiency.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800",
    icon: <Zap className="text-[#1E559D]" />,
    color: "[#1E559D]"
  },
  {
    title: "Solar Panels",
    desc: "Solar Reios high-efficiency panels are engineered using advanced cell technology to generate maximum power even in low-light conditions. Built for durability, they offer long lifespan, higher yield, and consistent performance across all environments.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrWeGu4aue48crsLjuzTrXZUKTwt2kpxNWg&s",
    icon: <Sun className="text-[#F9DCAB]-500" />,
    color: "[#F9DCAB]"
  },
  {
    title: "Energy Storage Systems",
    desc: "Ensure uninterrupted power with Solar Reios lithium-based energy storage solutions. Equipped with intelligent battery management systems, they provide safe, efficient, and scalable backup for residential, commercial, and industrial use.",
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800",
    icon: <Battery className="text-emerald-500" />,
    color: "emerald"
  },
  {
    title: "EV Charging Solutions",
    desc: "Power the future of mobility with Solar Reios EV charging infrastructure. Our smart charging systems are designed for fast, reliable, and scalable deployment across commercial spaces, highways, and urban environments.",
    image: "https://img.freepik.com/free-photo/ev-charging-station-clean-energy-filling-technology-electric-car-charging_35913-2573.jpg?semt=ais_hybrid&w=740&q=80",
    icon: <Car className="text-indigo-500" />,
    color: "indigo"
  },
];

const ProductShowcase = () => {
  return (
    <section className=" bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#1E559D] font-bold tracking-[0.3em] text-xs uppercase"
          >
            Product Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-[#000000] mt-4"
          >
            Precision <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1E559D] to-cyan-500">Engineering.</span>
          </motion.h2>
        </div>

        <div className="space-y-40">
          {products.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE AREA */}
                <div className="w-full md:w-1/2 relative group">
                  {/* Decorative Background Aura */}
                  <div className={`absolute inset-0 bg-${item.color}-200/30 blur-[100px] rounded-full scale-125 group-hover:scale-150 transition-transform duration-1000`} />
               <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: isReverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative z-10 flex justify-center"
                  >
                    <motion.img
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      src={item.image}
                      alt={item.title}
                     className="w-full h-80 md:h-90 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_30px_60px_rgba(37,99,235,0.2)] transition-all duration-500"
                    />
                  </motion.div>
                </div>

                {/* CONTENT AREA */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full md:w-8/12 space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white shadow-xl rounded-2xl">
                      {item.icon}
                    </div>
                    <div className="h-px w-12 bg-slate-200" />
                  </div>

                  <h3 className="text-4xl font-black text-[#000000] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-lg leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-3 px-8 py-4 bg-[#000000] text-white rounded-full font-bold hover:bg-[#1E559D] transition-colors shadow-lg shadow-slate-200"
                    >
                      View Specifications
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;