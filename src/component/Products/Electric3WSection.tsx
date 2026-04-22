import { motion } from "framer-motion";
import { Truck, Zap, MapPin, ArrowRight } from "lucide-react";

const Electric3WSection = () => {
  const specs = [
    { label: "Charging Time", value: "30–60 mins" },
    { label: "Range", value: "60–120 km" },
    { label: "Power Output", value: "5–10 kW" }
  ];

  const features = [
    { icon: <Zap size={18} />, text: "Fast Charging Technology" },
    { icon: <MapPin size={18} />, text: "Wide Charging Network" },
    { icon: <Truck size={18} />, text: "Built for Commercial Use" }
  ];

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-blue-200/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-75 h-75 bg-blue-100/40 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Micro Mobility
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-gray-900">
            Electric 3W Charging <br />
            <span className="text-blue-600">Solutions</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Smart charging infrastructure designed for last-mile delivery
            and urban mobility systems.
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
                src="https://cdn11.bigcommerce.com/s-o8a7xpro4o/images/stencil/564x564/uploaded_images/hv.jpeg"
                className="w-full h-105 object-cover"
              />
            </div>

            {/* FLOATING MINI CARD */}
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
                  <p className="font-semibold text-blue-600 mt-1">
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* FEATURES */}
            <div className="space-y-4 mb-8">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-md"
            >
              Explore Charging <ArrowRight size={16} />
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Electric3WSection;