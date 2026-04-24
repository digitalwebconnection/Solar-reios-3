import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Zap, Leaf, ArrowRight, TrendingDown, Gauge, Wallet, Edit3 } from "lucide-react";

const EVCalcLayout = () => {
  const [distance, setDistance] = useState(60);
  const [fuelPrice, setFuelPrice] = useState(102);
  const [mileage, setMileage] = useState(15);

  const evEfficiency = 0.15; // units per km
  const electricityRate = 8; // per unit

  const fuelCostPerDay = (distance / mileage) * fuelPrice;
  const evCostPerDay = distance * evEfficiency * electricityRate;
  const dailySavings = fuelCostPerDay - evCostPerDay;
  const monthlySavings = dailySavings * 30;
  const yearlySavings = dailySavings * 365;
  const savingsPercent = ((fuelCostPerDay - evCostPerDay) / fuelCostPerDay) * 100;

  return (
    <section className="py-24 bg-[#F8FAFC] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT - CONTROL PANEL */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#1E559D] font-bold uppercase tracking-widest text-[10px] mb-6">
                <Gauge size={14} fill="currentColor" /> Smart Input Console
              </div>
              <h2 className="text-4xl font-black text-[#000000] leading-tight mb-10">
                Calculate Your <span className="text-[#1E559D]">EV ROI</span>
              </h2>

              <div className="space-y-10">
                {/* Daily Distance - Input + Slider */}
                <div className="group space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-tighter">Daily Commute (KM)</label>
                    <div className="relative">
                        <input 
                            type="number"
                            value={distance}
                            onChange={(e) => setDistance(Number(e.target.value))}
                            className="w-24 text-right pr-2 py-1 bg-slate-50 border-b-2 border-slate-200 font-black text-xl text-[#1E559D] outline-none focus:border-[#1E559D] transition-colors"
                        />
                        <Edit3 size={12} className="absolute -left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    </div>
                  </div>
                  <input
                    type="range" min="1" max="500" step="1" value={distance}
                    onChange={(e) => setDistance(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Fuel Price - Input + Slider */}
                <div className="group space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-tighter">Petrol Price (Ã¢â€šÂ¹/L)</label>
                    <div className="relative">
                        <input 
                            type="number"
                            value={fuelPrice}
                            onChange={(e) => setFuelPrice(Number(e.target.value))}
                            className="w-24 text-right pr-2 py-1 bg-slate-50 border-b-2 border-slate-200 font-black text-xl text-[#1E559D] outline-none focus:border-[#1E559D] transition-colors"
                        />
                    </div>
                  </div>
                  <input
                    type="range" min="80" max="150" step="1" value={fuelPrice}
                    onChange={(e) => setFuelPrice(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Mileage - Input + Slider */}
                <div className="group space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-tighter">Current Mileage (KM/L)</label>
                    <div className="relative">
                        <input 
                            type="number"
                            value={mileage}
                            onChange={(e) => setMileage(Number(e.target.value))}
                            className="w-24 text-right pr-2 py-1 bg-slate-50 border-b-2 border-slate-200 font-black text-xl text-[#1E559D] outline-none focus:border-[#1E559D] transition-colors"
                        />
                    </div>
                  </div>
                  <input
                    type="range" min="5" max="50" step="1" value={mileage}
                    onChange={(e) => setMileage(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#1E559D]/10 rounded-2xl border border-blue-100 flex items-center gap-4">
               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Wallet size={20} className="text-[#1E559D]"/>
               </div>
               <div>
                  <p className="text-[10px] font-black text-[#1E559D] uppercase tracking-widest">Monthly Savings</p>
                  <p className="text-lg font-black text-blue-900">Ã¢â€šÂ¹{Math.round(monthlySavings).toLocaleString()}</p>
               </div>
            </div>
          </motion.div>

          {/* RIGHT - ANALYTICS BOARD */}
          <div className="lg:col-span-7 grid gap-6">
            
            <motion.div 
              layout
              className="bg-[#000000] rounded-[2.5rem] p-12 text-white relative overflow-hidden flex flex-col justify-center border border-slate-800"
            >
              <div className="relative z-10">
                <p className="text-[#1E559D] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Projected Yearly Benefit</p>
                <motion.h1 
                  key={yearlySavings}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-7xl md:text-8xl font-black tracking-tighter mb-6"
                >
                  Ã¢â€šÂ¹{Math.round(yearlySavings).toLocaleString()}
                </motion.h1>
                <div className="inline-flex items-center gap-2 bg-[#1E559D]/100/10 text-[#1E559D] px-4 py-2 rounded-full text-sm font-bold border border-blue-500/20">
                  <TrendingDown size={18} /> Costs reduced by {savingsPercent.toFixed(0)}%
                </div>
              </div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E559D]/10 blur-[120px] rounded-full -mr-40 -mt-40" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Petrol Card */}
              <div className="bg-white rounded-4xl p-8 border border-slate-100 shadow-lg relative group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                    <Fuel size={20} />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Petrol Monthly</span>
                </div>
                <h3 className="text-4xl font-black text-[#000000]">Ã¢â€šÂ¹{Math.round(fuelCostPerDay * 30).toLocaleString()}</h3>
                <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 w-full" />
                </div>
              </div>

              {/* EV Card */}
              <div className="bg-white rounded-4xl p-8 border border-blue-100 shadow-lg relative group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#1E559D] rounded-xl flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  <span className="text-[10px] font-black text-[#1E559D] uppercase tracking-widest">EV Monthly</span>
                </div>
                <h3 className="text-4xl font-black text-[#1E559D]">Ã¢â€šÂ¹{Math.round(evCostPerDay * 30).toLocaleString()}</h3>
                <div className="mt-4 h-1 w-full bg-[#1E559D]/10 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(evCostPerDay / fuelCostPerDay) * 100}%` }}
                        className="h-full bg-[#1E559D]" 
                    />
                </div>
              </div>
            </div>

            {/* Eco CTA */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="bg-[#000000] text-white rounded-4xl p-8 flex items-center justify-between group overflow-hidden relative"
            >
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                        <Leaf size={24} />
                    </div>
                    <div className="text-left">
                        <p className="text-lg font-bold">Plant {(Math.floor((distance * 365 * 0.2) / 20)).toString()} Trees Worth of COÃ¢â€šâ€š</p>
                        <p className="text-xs text-white/50 uppercase font-black tracking-widest">Switch to electric today</p>
                    </div>
                </div>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVCalcLayout;