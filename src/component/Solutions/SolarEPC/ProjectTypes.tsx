import { motion } from "framer-motion";
import { Home, Building2, Factory, Landmark } from "lucide-react";

const types = [
  { title: "Residential", capacity: "3kW - 10kW", icon: <Home />, desc: "Reduce your home electricity bills by up to 90%." },
  { title: "Commercial", capacity: "10kW - 100kW", icon: <Building2 />, desc: "Lower operational costs for offices and showrooms." },
  { title: "Industrial", capacity: "100kW - 1MW+", icon: <Factory />, desc: "MW scale solutions for factories and cold storage." },
  { title: "Government", capacity: "Institutional", icon: <Landmark />, desc: "Public sector energy transition projects." },
];

const ProjectTypes = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Versatile Expertise</p>
          <h2 className="text-4xl font-heading font-black text-slate-900">EPC Project Types</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {types.map((type, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-[40px] text-center shadow-xl shadow-slate-200/50 border border-slate-100 group transition-all"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600 text-4xl group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-100 shadow-sm">
                {type.icon}
              </div>
              <h4 className="text-2xl font-black font-heading text-slate-900 mb-2">{type.title}</h4>
              <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4">{type.capacity}</p>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
