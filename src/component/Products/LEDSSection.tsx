import { motion } from "framer-motion";
import { Sun, Zap, Settings } from "lucide-react";

const features = [
  {
    title: "High Efficiency Panels",
    desc: "Maximum power generation even in low light",
    icon: <Sun size={20} />,
  },
  {
    title: "Smart Monitoring",
    desc: "Real-time tracking & performance insights",
    icon: <Zap size={20} />,
  },
  {
    title: "Robust Installation",
    desc: "Engineered for long-term durability",
    icon: <Settings size={20} />,
  },
];

const SolarInstallationSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">

      {/* SOFT GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-200/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-medium text-blue-600">
            Solar Solutions
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900">
            Solar Panel <span className="text-blue-600">Installations</span>
          </h2>

          <p className="mt-5 text-gray-600">
            End-to-end solar EPC solutions designed for commercial,
            industrial, and residential energy independence.
          </p>
        </div>

        {/* FEATURED INSTALLATION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="https://4.imimg.com/data4/KE/PH/MY-14958750/solar-power-system.jpg"
              className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
              alt="Solar Installation"
            />

            {/* FLOATING TAG */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium shadow">
              Industrial Solar Setup
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Complete Solar EPC Solutions
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Solar Reios delivers high-performance solar installations
              with advanced engineering, ensuring maximum efficiency,
              long-term savings, and reliable energy output.
            </p>

            {/* FEATURES */}
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

            <button className="px-6 py-3 bg-blue-600 hover:bg-slate-900 text-white rounded-lg font-medium transition shadow-md">
              Explore Solar Solutions →
            </button>
          </motion.div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              name: "Rooftop Solar",
              wattage: "10kW – 500kW",
              img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1200"
            },
            {
              name: "Ground Mounted Solar",
              wattage: "500kW – 5MW",
              img: "https://gserenewables.com/wp-content/uploads/2016/03/solar-panel-field.jpg"
            },
            {
              name: "Commercial Solar Plant",
              wattage: "100kW – 2MW",
              img: "https://static.wixstatic.com/media/c3e29a_be941e72c8534ab6ab073fd0b15cc7d3~mv2.jpg/v1/fill/w_480,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c3e29a_be941e72c8534ab6ab073fd0b15cc7d3~mv2.jpg"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.img}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
                alt={project.name}
              />

              <div className="p-5">
                <h3 className="font-semibold text-gray-900">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Capacity: {project.wattage}
                </p>

                <button className="mt-4 text-blue-600 font-medium text-sm hover:underline">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SolarInstallationSection;