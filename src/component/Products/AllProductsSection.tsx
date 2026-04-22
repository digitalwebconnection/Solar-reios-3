import { motion } from "framer-motion";
import { ArrowRight, Zap, Sun, Battery, Car } from "lucide-react";

const products = [
  {
    title: "Solar Inverter",
    desc: "Maximize your energy yield with intelligent N-type conversion technology. Our inverters offer real-time monitoring and 98.9% peak efficiency for total control over your power ecosystem.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85gF0TzRJZcj5wnDvMQzibo4uRd3Uu7-vNA&s",
    icon: <Zap className="text-blue-500" />,
    color: "blue"
  },
  {
    title: "Solar Panels",
    desc: "Engineered for high performance. Utilizing PERC technology and bifacial glass to capture sunlight from both sides, ensuring maximum power generation even on cloudy days.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQRd6Oqwy63I19vNp0F-Qi0jYVZ9HbGtdSA&s",
    icon: <Sun className="text-amber-500" />,
    color: "amber"
  },
  {
    title: "Solar Batteries",
    desc: "Energy security that never sleeps. Our Lithium-ion storage solutions feature a smart BMS (Battery Management System) for safe, long-lasting backup during critical hours.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTTXBXWh5Z3ibZuFxo4c5Etjem6J-G4geXg&s",
    icon: <Battery className="text-emerald-500" />,
    color: "emerald"
  },
  {
    title: "Solar Carport",
    desc: "Transform your parking space into a power plant. Our structural solar carports provide vehicle protection while fueling your electric fleet with 100% clean energy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlv5MCVrcXB6UGihuVHVe6zaYVOmi2l21WvQ&s",
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
            className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase"
          >
            Product Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-slate-900 mt-4"
          >
            Precision <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">Engineering.</span>
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
                  
                  {/* Watermark Number */}
                  <span className="absolute -top-10 -left-10 text-[12rem] font-black text-slate-100 select-none z-0">
                    0{index + 1}
                  </span>

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
                      className="w-4/5 h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_30px_60px_rgba(37,99,235,0.2)] transition-all duration-500"
                    />
                  </motion.div>
                </div>

                {/* CONTENT AREA */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full md:w-5/12 space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white shadow-xl rounded-2xl">
                      {item.icon}
                    </div>
                    <div className="h-px w-12 bg-slate-200" />
                  </div>

                  <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-lg leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200"
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