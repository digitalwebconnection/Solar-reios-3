import { motion } from "framer-motion";
import { Search, PenTool, Truck, Settings, CheckCircle2, Wrench } from "lucide-react";

const steps = [
  { title: "Site Survey", desc: "Detailed technical assessment of the roof or land.", icon: <Search /> },
  { title: "Design", desc: "Custom PV system design and shadows analysis.", icon: <PenTool /> },
  { title: "Procurement", desc: "Sourcing high-quality tier-1 components.", icon: <Truck /> },
  { title: "Installation", desc: "Professional mounting and electrical wiring.", icon: <Settings /> },
  { title: "Commissioning", desc: "Testing, inspection and grid connection.", icon: <CheckCircle2 /> },
  { title: "Maintenance", desc: "Regular cleaning and performance monitoring.", icon: <Wrench /> },
];

const EPCProcess = () => {
  const fadeIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Our Execution Workflow</p>
          <h2 className="text-4xl font-heading font-black">Our EPC Process</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-[32px] border border-white/10 group hover:bg-white/10 transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold font-heading mb-4">Step {idx + 1}: {step.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EPCProcess;
