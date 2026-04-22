import { motion } from "framer-motion";
import { Package, Gauge, AlertCircle } from "lucide-react";

const products = [
  {
    name: "Monitoring Systems",
    desc: "Track performance in real-time and identify issues instantly with smart analytics.",
    icon: <Gauge size={22} />,
  },
  {
    name: "Safety Equipment",
    desc: "Advanced protection systems ensuring safety, compliance, and long-term reliability.",
    icon: <AlertCircle size={22} />,
  },
  {
    name: "Installation Kits",
    desc: "All-in-one kits designed for quick, seamless, and professional installations.",
    icon: <Package size={22} />,
  },
];

const OthersSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* SOFT BACKGROUND DESIGN */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-100 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-100 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-widest">
            Complete Ecosystem
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            More Than Just Products
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            We provide everything you need to build, manage, and optimize your energy solutions — all in one place.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition overflow-hidden"
            >

              {/* HOVER BACKGROUND */}
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition" />

              {/* ICON */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white mb-5 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}

        </div>



      </div>
    </section>
  );
};

export default OthersSection;