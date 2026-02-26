import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  IndianRupee, Zap, TrendingUp, Calculator, Info, ArrowRight, ShieldCheck } from "lucide-react";
import saving from "../../assets/saving-removebg-preview.png"

interface ResultType {
  monthlyUnits: number;
  systemSizeKW: number;
  estimatedCost: number;
  yearlySavings: number;
  paybackYears: number;
}

const SolarCalculator: React.FC = () => {
  const [bill, setBill] = useState<string>("5000");
  const [rate, setRate] = useState<string>("8");
  const [result, setResult] = useState<ResultType | null>(null);

  // Auto-calculate on input change for a "live" feel
  useEffect(() => {
    handleCalculate();
  }, [bill, rate]);

  const handleCalculate = () => {
    const monthlyBill = parseFloat(bill);
    const electricityRate = parseFloat(rate);

    if (isNaN(monthlyBill) || monthlyBill <= 0) {
        setResult(null);
        return;
    };

    const monthlyUnits = monthlyBill / electricityRate;
    const systemSizeKW = monthlyUnits / 120; // 1kW = 120 units avg
    const roundedKW = parseFloat(systemSizeKW.toFixed(1));
    const costPerKW = 55000;
    const estimatedCost = roundedKW * costPerKW;
    const yearlySavings = monthlyBill * 12;
    const paybackYears = parseFloat((estimatedCost / yearlySavings).toFixed(1));

    setResult({
      monthlyUnits: Math.round(monthlyUnits),
      systemSizeKW: roundedKW,
      estimatedCost,
      yearlySavings,
      paybackYears,
    });
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-12 px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-sm mb-3"
            >
              <Calculator size={18} />
              <span>Investment Planner</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
            >
              Solar Savings Calculator
            </motion.h1>
            <p className="text-slate-500 mt-4 text-lg">
              Find out how much you can save by switching to solar. Input your current expenses to see your projected ROI.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
             <div className="bg-green-100 p-2 rounded-full text-green-600">
                <ShieldCheck size={24} />
             </div>
             <div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Market Accuracy</p>
                <p className="text-sm font-bold text-slate-700">Updated Feb 2026</p>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Inputs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                Configure Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Monthly Electricity Bill (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">₹</span>
                  <input
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="w-full bg-slate-50 border-none rounded-xl pl-10 pr-4 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-lg font-semibold text-slate-800"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Electricity Rate (₹ / Unit)
                </label>
                <div className="relative">
                   <Zap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                   <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full bg-slate-50 border-none rounded-xl pl-11 pr-4 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-lg font-semibold text-slate-800"
                  />
                </div>
                <div className="flex justify-between mt-2 px-1">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Standard: ₹8</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Commercial: ₹12+</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="p-4 bg-blue-50 rounded-xl flex gap-3">
                    <Info size={20} className="text-blue-600 shrink-0" />
                    <p className="text-xs text-blue-800 leading-relaxed">
                        Calculations are based on average sunlight hours in India (approx. 300 sunny days/year).
                    </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Dashboard Results */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Hero Result Card */}
                  <div className="md:col-span-2 bg-linear-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-lg shadow-blue-200 relative overflow-hidden">
                    <img src={saving} alt="Saving" className="absolute right-0 -top-5 text-white/10 w-64 h-64" />
                    <div className="relative z-10">
                        <p className="text-blue-100 font-medium mb-1 uppercase tracking-wider text-sm">Recommended System</p>
                        <h2 className="text-5xl md:text-6xl font-black mb-4">{result.systemSizeKW} <span className="text-2xl">kW</span></h2>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                                <p className="text-xs text-blue-100">Monthly Generation</p>
                                <p className="text-lg font-bold">~{result.monthlyUnits} Units</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                                <p className="text-xs text-blue-100">Annual Savings</p>
                                <p className="text-lg font-bold text-yellow-300">₹{(result.yearlySavings).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* Payback Card */}
                  <div className="bg-white p-3 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                            <TrendingUp size={24} />
                        </div>
                        <h4 className="text-slate-500 font-semibold mb-1">Payback Period</h4>
                        <p className="text-3xl font-bold text-slate-800">{result.paybackYears} Years</p>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                        After this period, your electricity becomes practically <span className="text-green-600 font-bold">FREE</span> for the next 20+ years.
                    </p>
                  </div>

                  {/* Investment Card */}
                  <div className="bg-white p-3 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <IndianRupee size={24} />
                        </div>
                        <h4 className="text-slate-500 font-semibold mb-1">Estimated Investment</h4>
                        <p className="text-3xl font-bold text-slate-800">₹{result.estimatedCost.toLocaleString()}</p>
                    </div>
                    <button className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors group">
                        Get Final Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </motion.div>
              ) : (
                <div className="h-full min-h-100 flex flex-col items-center justify-center bg-slate-100/50 rounded-3xl border-2 border-dashed border-slate-200 text-slate-400 p-10 text-center">
                    <Calculator size={48} className="mb-4 opacity-20" />
                    <p className="text-lg font-medium">Please enter your bill details to see your solar potential.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;