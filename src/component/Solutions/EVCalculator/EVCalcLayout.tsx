import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fuel, Leaf, TrendingUp, Navigation, BatteryCharging, ArrowRight, IndianRupee, Zap, Info } from "lucide-react";

const EVCalcLayout = () => {
  const [distance, setDistance] = useState(50);
  const [fuelPrice, setFuelPrice] = useState(96);
  const [mileage, setMileage] = useState(15);

  // Constants
  const evEfficiency = 0.15; // units per km
  const electricityRate = 8; // per unit
  
  // Calculations
  const fuelCostPerDay = (distance / mileage) * fuelPrice;
  const evCostPerDay = distance * evEfficiency * electricityRate;
  const dailySavings = fuelCostPerDay - evCostPerDay;
  const monthlySavings = dailySavings * 30;
  const yearlySavings = dailySavings * 365;

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
             <Navigation className="text-blue-600" size={24} /> Journey Details
           </h3>
           
           <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-slate-700 text-sm uppercase">Daily Distance (km)</label>
                  <span className="text-blue-600 font-black text-xl">{distance} km</span>
                </div>
                <input 
                  type="range" min="10" max="300" step="5"
                  value={distance} onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-slate-700 text-sm uppercase">Fuel Price (₹/L)</label>
                  <span className="text-blue-600 font-black text-xl">₹{fuelPrice}</span>
                </div>
                <input 
                  type="range" min="80" max="120" step="1"
                  value={fuelPrice} onChange={(e) => setFuelPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-slate-700 text-sm uppercase">Vehicle Mileage (km/L)</label>
                  <span className="text-blue-600 font-black text-xl">{mileage} kmpl</span>
                </div>
                <input 
                  type="range" min="8" max="25" step="1"
                  value={mileage} onChange={(e) => setMileage(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-2 text-blue-600">
                    <Zap size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">EV Benchmark</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Electricity Rate: ₹{electricityRate} / Unit</p>
                  <p className="text-xs text-slate-500 font-medium">EV Efficiency: {evEfficiency} units/km</p>
              </div>
           </div>
        </motion.div>

        {/* Right: Dashboard */}
        <div className="lg:col-span-8 space-y-6">
           <motion.div 
             {...fadeIn}
             className="bg-slate-900 rounded-[40px] shadow-2xl p-10 text-white relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                 <TrendingUp size={400} className="absolute -top-20 -right-20 text-white" />
              </div>
              <div className="relative z-10">
                <p className="text-blue-400 font-black uppercase tracking-widest text-xs mb-8">Estimated Annual Savings</p>
                <h2 className="text-6xl md:text-8xl font-black text-white mb-10">₹{Math.round(yearlySavings).toLocaleString()}</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2">
                        <Fuel size={14} className="text-slate-400" /> Petrol Cost / Month
                      </div>
                      <h4 className="text-3xl font-black text-slate-400 group-hover:text-white transition-colors">₹{Math.round(fuelCostPerDay * 30).toLocaleString()}</h4>
                   </div>
                   <div className="bg-blue-600 p-8 rounded-3xl shadow-xl group hover:scale-105 transition-transform">
                      <div className="flex items-center gap-2 text-blue-100 font-black text-[10px] uppercase tracking-widest mb-2">
                        <Zap size={14} className="text-white" /> EV Cost / Month
                      </div>
                      <h4 className="text-3xl font-black text-white">₹{Math.round(evCostPerDay * 30).toLocaleString()}</h4>
                   </div>
                </div>
              </div>
           </motion.div>

           <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl flex flex-col justify-between group hover:border-blue-600 transition-colors">
                <div>
                   <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <TrendingUp size={28} />
                   </div>
                   <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">Monthly Savings</h4>
                   <p className="text-4xl font-black text-slate-900">₹{Math.round(monthlySavings).toLocaleString()}</p>
                </div>
                <p className="text-xs text-slate-400 mt-6 leading-relaxed">Save enough each month to pay for your car's <span className="text-blue-600 font-bold uppercase">Insurance or EMI</span>.</p>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl flex flex-col justify-between group hover:border-blue-600 transition-colors">
                <div>
                   <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Leaf size={28} />
                   </div>
                   <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">CO₂ Prevented</h4>
                   <p className="text-4xl font-black text-slate-900">{Math.round(distance * 0.2 * 365)} <span className="text-xl">kg/yr</span></p>
                </div>
                <button className="mt-8 flex items-center justify-center gap-2 w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors group/btn shadow-xl">
                    Inquire EV Chargers <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EVCalcLayout;
