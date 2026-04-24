import { motion } from "framer-motion";
import { Search, PenTool, Truck, Settings, CheckCircle2, Wrench, ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "Site Survey",
    desc: "Detailed technical assessment of the roof structure and land topography.",
    icon: Search,
    image: "https://www.vara3d.com/_next/image?url=https%3A%2F%2Fwpadmin.vara3d.com%2Fwp-content%2Fuploads%2F2024%2F11%2Fsolar-site-survey.jpg&w=828&q=75"
  },
  {
    title: "Design",
    desc: "Custom PV system design using advanced 3D simulation software.",
    icon: PenTool,
    image: "https://cdn.prod.website-files.com/65b217df08a6f1f6aba3d4ce/681b30ab19210e305c93f148_ycDmEc-Ywaqv_Xcov_v6eLtKk9XoRJ9Uth8uui8GCWBWLYbtOW45kvdpCITzRkj4t0dvxENqtBGUjXItRAoljICh_BQGoP1R-xtz8c3P9DszuVrBktR1xqKMOJGyf78bM8p2i3GYMhGy9AiSKcpwNQ.jpeg"
  },
  {
    title: "Procurement",
    desc: "Sourcing high-efficiency Tier-1 modules and global components.",
    icon: Truck,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XtxaHbb9SkSu4Xap1C6b4SS0Ho8Od9nLRw&s"
  },
  {
    title: "Installation",
    desc: "Professional mechanical mounting and precision electrical wiring.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Commissioning",
    desc: "Rigorous testing and final utility grid connection approval.",
    icon: CheckCircle2,
    image: "https://renesys.in/wp-content/uploads/2025/07/New-Project-9.webp"
  },
  {
    title: "Maintenance",
    desc: "24/7 performance monitoring and preventive system cleaning.",
    icon: Wrench,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhNVgxvIxngtzigkUziEmUmWr1u-ZMHWfaA&s"
  },
];

const EPCProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E559D]/10 border border-blue-100 mb-4"
          >
            <span className="text-[#1E559D] font-bold tracking-widest text-[10px] uppercase">Work Strategy</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#000000] mb-6 tracking-tight"
          >
            Our Professional <span className="text-[#1E559D] italic">EPC</span> Process
          </motion.h2>
          <p className="text-slate-500 text-lg">
            We manage every stage of the solar lifecycle with precision engineering
            and transparent project management.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <StepCard key={idx} step={step} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }: { step: any; index: number }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -12 }}
      className="group relative bg-white rounded-xl overflow-hidden border border-slate-600/50 
       shadow-xl shadow-black/40 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#1E559D]/10 group-hover:bg-transparent transition-colors duration-500" />

        {/* Step Number Tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-sm">
          <span className="text-[#1E559D] font-bold text-xs">STEP 0{index + 1}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 relative">
        {/* Floating Icon Box */}
        <div className="absolute -top-7 right-8 w-14 h-14 bg-[#1E559D] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:rotate-360 transition-transform duration-700">
          <Icon size={24} />
        </div>

        <h4 className="text-2xl font-bold text-[#000000] mb-3 pt-2 group-hover:text-[#1E559D] transition-colors">
          {step.title}
        </h4>
        <p className="text-slate-500 leading-relaxed text-sm mb-6">
          {step.desc}
        </p>

        {/* Animated Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="h-1 w-12 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              whileHover={{ width: "100%" }}
              className="h-full bg-[#1E559D] w-0 group-hover:w-full transition-all duration-500"
            />
          </div>
          <button className="text-slate-400 group-hover:text-[#1E559D] transition-colors">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EPCProcess;