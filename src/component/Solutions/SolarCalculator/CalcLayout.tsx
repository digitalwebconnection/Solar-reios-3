import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IndianRupee, Sun, MapPin, Maximize2, TrendingDown, Leaf, Calendar, Calculator, ShieldCheck, Zap, Info, ArrowRight } from "lucide-react";
import savingImage from "../../../assets/saving-removebg-preview.png";

const states = [
  "Delhi", "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", 
  "Uttar Pradesh", "Rajasthan", "Haryana", "Punjab", "West Bengal"
];

const CalcLayout = () => {
  const [bill, setBill] = useState(5000);
  const [state, setState] = useState("Delhi");
  const [area, setArea] = useState(500);
  const [type, setType] = useState("Residential");

  // Logic
  const systemSize = (bill / 800 * 1.2).toFixed(1);
  const cost = (parseFloat(systemSize) * 60000);
  const annualSavings = (bill * 12 * 0.9);
  const payback = (cost / annualSavings).toFixed(1);
  const co2 = (parseFloat(systemSize) * 1200).toFixed(0);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-16 relative z-20 mb-24">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Inputs */}
        <motion.div 
          {...fadeIn}
          className="lg:col-span-4 bg-white rounded-[40px] shadow-2xl p-8 md:p-10 border border-slate-100"
        >
           <h3 className="text-xl font-black font-heading text-slate-900 mb-8 flex items-center gap-2 uppercase tracking-tight">
             <Calculator className="text-blue-600" size={24} /> Configure Units
           </h3>
           
           <div className="space-y-8">
             <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-slate-700 flex items-center gap-2 text-sm">
                    <IndianRupee size={16} className="text-blue-600" /> Monthly Bill
                  </label>
                  <span className="text-blue-600 font-black text-xl">₹{bill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="1000" max="50000" step="500"
                  value={bill} onChange={(e) => setBill(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
             </div>

             <div>
               <label className="block font-bold text-slate-700 mb-2 flex items-center gap-2 text-sm uppercase">
                 <MapPin size={16} className="text-blue-600" /> Your State
               </label>
               <select 
                 value={state} onChange={(e) => setState(e.target.value)}
                 className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-blue-600/20"
               >
                 {states.map(s => <option key={s} value={s}>{s}</option>)}
               </select>
             </div>

             <div>
               <label className="block font-bold text-slate-700 mb-2 flex items-center gap-2 text-sm uppercase">
                 <Maximize2 size={16} className="text-blue-600" /> Area (sq. ft.)
               </label>
               <input 
                 type="number" value={area} onChange={(e) => setArea(parseInt(e.target.value))}
                 className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-blue-600/20"
               />
             </div>

             <div>
               <p className="font-bold text-slate-700 mb-4 text-sm uppercase">Type</p>
               <div className="flex flex-wrap gap-2">
                 {["Residential", "Commercial", "Industrial"].map(t => (
                   <button
                     key={t}
                     onClick={() => setType(t)}
                     className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                       type === t ? "bg-slate-900 text-white shadow-lg" : "bg-slate-50 text-slate-500 border border-slate-100"
                     }`}
                   >
                     {t}
                   </button>
                 ))}
               </div>
             </div>

             <div className="pt-4">
                <div className="p-4 bg-blue-50 rounded-2xl flex gap-3">
                    <Info size={20} className="text-blue-600 shrink-0" />
                    <p className="text-[10px] text-blue-900 leading-relaxed font-bold uppercase tracking-tight">
                        Calculations are based on average sunlight hours in India (approx. 300 sunny days/year).
                    </p>
                </div>
              </div>
           </div>
        </motion.div>

        {/* Right: Results */}
        <div className="lg:col-span-8 space-y-6">
           <motion.div 
             {...fadeIn}
             className="bg-linear-to-br from-blue-600 to-blue-800 rounded-[40px] shadow-2xl p-10 text-white relative overflow-hidden"
           >
              <img src={savingImage} alt="Saving" className="absolute right-0 -top-10 opacity-10 w-96 h-96 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-blue-100 font-black uppercase tracking-widest text-xs mb-8">
                  <ShieldCheck size={16} /> Verified Estimate
                </div>
                
                <p className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-2">Recommended Capacity</p>
                <h2 className="text-6xl md:text-8xl font-black mb-10">{systemSize} <span className="text-2xl opacity-50">kW</span></h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                      <p className="text-blue-100 text-[10px] font-black uppercase mb-1">Annual Savings</p>
                      <h4 className="text-3xl font-black text-orange-300">₹{annualSavings.toLocaleString()}</h4>
                   </div>
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                      <p className="text-blue-100 text-[10px] font-black uppercase mb-1">Investment (Approx)</p>
                      <h4 className="text-3xl font-black">₹{(cost/100000).toFixed(2)} L*</h4>
                   </div>
                </div>
              </div>
           </motion.div>

           <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl flex flex-col justify-between group hover:border-blue-600 transition-colors">
                <div>
                   <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Calendar size={28} />
                   </div>
                   <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">Payback Period</h4>
                   <p className="text-4xl font-black text-slate-900">{payback} Years</p>
                </div>
                <p className="text-xs text-slate-400 mt-6 leading-relaxed">After this period, your power becomes practically <span className="text-blue-600 font-bold">FREE</span> for 25+ years.</p>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl flex flex-col justify-between group hover:border-blue-600 transition-colors">
                <div>
                   <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Leaf size={28} />
                   </div>
                   <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">CO₂ Reduction</h4>
                   <p className="text-4xl font-black text-slate-900">{co2} kg/yr</p>
                </div>
                <button className="mt-8 flex items-center justify-center gap-2 w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors group/btn shadow-xl">
                    Get Free Quote <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CalcLayout;
