import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const EPCServices = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Simplified Solutions</p>
              <h2 className="text-4xl font-heading font-black text-slate-900 mb-8">What is Solar EPC?</h2>
              <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                <p>
                  Engineering, Procurement, and Construction (EPC) is a turnkey solution where we handle 
                  every aspect of your solar journey. From initial feasibility to final grid connection.
                </p>
                <ul className="space-y-4">
                  {[
                    "Customized Engineering for maximum yield",
                    "Tier-1 Procurement from trusted partners",
                    "Safety-first Construction by experts",
                    "Grid Integration & Commissioning"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1548337138-e87d889cc988?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-[48px] shadow-2xl h-[450px] w-full object-cover border border-slate-100"
                alt="Solar Engineering"
              />
            </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div {...fadeIn} className="bg-slate-900 p-12 rounded-[48px] text-white shadow-2xl order-2 lg:order-1 relative overflow-hidden">
                <ShieldCheck className="text-blue-400 w-16 h-16 mb-8 relative z-10" />
                <h3 className="text-3xl font-heading font-black mb-6 relative z-10">Quality Guarantee</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed relative z-10">
                  We use only Tier-1 components and follow international safety standards, 
                  ensuring your solar plant performs optimally for 25+ years.
                </p>
                <Link to="/contact" className="text-blue-400 font-bold flex items-center gap-2 group relative z-10 uppercase tracking-widest text-sm">
                  Contact Our Engineers
                </Link>
             </motion.div>
             <motion.div {...fadeIn} className="order-1 lg:order-2">
               <h2 className="text-4xl font-heading font-black text-slate-900 mb-8">Why Our EPC?</h2>
               <div className="grid sm:grid-cols-2 gap-6">
                 {[
                   { title: "Turnkey Solution", desc: "Start to finish" },
                   { title: "On-time Delivery", desc: "Rigid timelines" },
                   { title: "Post Support", desc: "24/7 Monitoring" },
                   { title: "Certified Experts", desc: "MNRE Approved" },
                 ].map((box, i) => (
                   <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:border-blue-600 transition-all shadow-sm">
                     <span className="font-black text-slate-900 block mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{box.title}</span>
                     <p className="text-xs text-slate-400 font-bold uppercase">{box.desc}</p>
                   </div>
                 ))}
               </div>
             </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EPCServices;
