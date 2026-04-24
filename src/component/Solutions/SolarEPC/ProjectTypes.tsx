import { motion } from "framer-motion";
import { Home, Building2, Factory, Landmark } from "lucide-react";

const types = [
  {
    title: "Residential",
    capacity: "3kW - 10kW",
    icon: <Home size={28} />,
    desc: "Reduce electricity bills for homes.",
  },
  {
    title: "Commercial",
    capacity: "10kW - 100kW",
    icon: <Building2 size={28} />,
    desc: "Lower energy costs for businesses.",
  },
  {
    title: "Industrial",
    capacity: "100kW - 1MW+",
    icon: <Factory size={28} />,
    desc: "High-capacity solutions for factories.",
  },
  {
    title: "Government",
    capacity: "Institutional",
    icon: <Landmark size={28} />,
    desc: "Solar projects for public sector.",
  },
];

const ProjectTypes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#000000]">
            EPC Project Types
          </h2>
          <p className="text-slate-500 mt-3">
            Solutions tailored for every energy need
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-slate-600/40 rounded-xl p-6 hover:shadow-md shadow-sm shadow-black transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#1E559D]/10 text-[#1E559D] rounded-lg mb-4">
                {type.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#000000]">
                {type.title}
              </h3>

              {/* CAPACITY */}
              <p className="text-sm text-[#1E559D] font-medium mt-1">
                {type.capacity}
              </p>

              {/* DESC */}
              <p className="text-sm text-slate-500 mt-3">
                {type.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectTypes;