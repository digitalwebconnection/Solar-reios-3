import { motion } from "framer-motion";
import { Truck, Zap, MapPin, ArrowRight } from "lucide-react";

const Electric3WSection = () => {
  const specs = [
    { label: "Charging Time", value: "45Ã¢â‚¬â€œ90 mins" },
    { label: "Range Support", value: "80Ã¢â‚¬â€œ150 km/day" },
    { label: "Output Capacity", value: "3.3Ã¢â‚¬â€œ7.4 kW" }
  ];

  const features = [
    { icon: <Zap size={18} />, text: "Fast & Efficient Charging Infrastructure" },
    { icon: <MapPin size={18} />, text: "Scalable Network Deployment Across Cities" },
    { icon: <Truck size={18} />, text: "Optimized for Fleet & Commercial Operations" }
  ];

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-[#1E559D] mb-2">
            Micro Mobility
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Electric Charging <br />
            <span className="text-[#1E559D]">Solutions</span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Advanced EV charging infrastructure by Solar Reios, designed to support high-demand electric 3-wheeler fleets. 
            Engineered for reliability, speed, and scalability Ã¢â‚¬â€ enabling seamless operations for logistics, commercial mobility, and urban transport ecosystems.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://www.servotech.in/blog/wp-content/uploads/2023/09/ev_banner-scaled.webp"
                className="w-full h-105 object-cover"
                alt="EV Charging"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <p className="text-xs text-gray-500">Smart Monitoring</p>
              <p className="text-sm font-semibold text-gray-900">
                IoT Enabled Charging
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>

            {/* SPECS */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="p-4 bg-white border border-gray-200 rounded-xl text-center hover:shadow-md transition"
                >
                  <p className="text-xs text-gray-500">{spec.label}</p>
                  <p className="font-semibold text-[#1E559D] mt-1">
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* FEATURES */}
            <div className="space-y-4 mb-6">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-[#1E559D] text-white rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* EXTRA CONTENT */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Solar Reios charging solutions are built with smart energy management systems, 
              enabling real-time monitoring, load optimization, and reduced operational costs. 
              Our infrastructure supports rapid deployment and seamless integration with existing power systems.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#1E559D] text-white rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-[#000000] transition-all"
            >
              Explore EV Solutions <ArrowRight size={16} />
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Electric3WSection;