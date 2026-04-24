import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import {
  IndianRupee,
  MapPin,
  Maximize2,
  Leaf,
  Calendar,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react";

const states = ["Delhi","Maharashtra","Gujarat","Karnataka","Tamil Nadu","Uttar Pradesh","Rajasthan","Haryana","Punjab","West Bengal"];

const CalcLayout = () => {
  const [bill, setBill] = useState(5000);
  const [state, setState] = useState("Delhi");
  const [area, setArea] = useState(500);

  const systemSize = (bill / 800 * 1.2).toFixed(1);
  const annualSavings = (bill * 12 * 0.9);
  const cost = (parseFloat(systemSize) * 60000);
  const payback = (cost / annualSavings).toFixed(1);
  const co2 = (parseFloat(systemSize) * 1200).toFixed(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-to-b from-slate-50 via-white to-blue-50">
      
      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E559D]/20 rounded-full">
            <Zap className="w-4 h-4 text-[#1E559D]" />
            <span className="text-sm font-semibold text-[#1E559D]">AI-Powered Calculator</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#000000]">
            Discover Your Solar <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1E559D] to-cyan-600">Savings</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get an instant estimate of your solar system size, investment, and long-term savings.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* LEFT - INPUTS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-blue-100/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-[#000000] mb-8">Calculator Inputs</h3>

            <div className="space-y-8">

              {/* MONTHLY BILL */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <div className="p-2 bg-[#1E559D]/20 rounded-lg">
                      <IndianRupee size={18} className="text-[#1E559D]" />
                    </div>
                    Monthly Electricity Bill
                  </label>
                  <motion.span
                    key={bill}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-black text-[#1E559D]"
                  >
                    Ã¢â€šÂ¹{bill.toLocaleString()}
                  </motion.span>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={bill}
                  onChange={(e) => setBill(parseInt(e.target.value))}
                  className="w-full h-3 bg-linear-to-r from-blue-200 to-blue-600 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  style={{
                    background: `linear-gradient(to right, rgb(191, 219, 254) 0%, rgb(37, 99, 235) ${(bill / 50000) * 100}%, rgb(219, 234, 254) ${(bill / 50000) * 100}%, rgb(219, 234, 254) 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>Ã¢â€šÂ¹1,000</span>
                  <span>Ã¢â€šÂ¹50,000</span>
                </div>
              </motion.div>

              {/* STATE & AREA */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MapPin size={18} className="text-green-600" />
                    </div>
                    State
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border-2 border-slate-200 hover:border-blue-400 focus:border-[#1E559D] rounded-xl p-3 font-medium text-slate-700 bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    {states.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Maximize2 size={18} className="text-orange-600" />
                    </div>
                    Area (sqft)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(parseInt(e.target.value))}
                    className="w-full border-2 border-slate-200 hover:border-blue-400 focus:border-[#1E559D] rounded-xl p-3 font-medium text-slate-700 bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

              </motion.div>

              {/* CTA BUTTON */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-linear-to-r from-[#1E559D] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/40"
              >
                <Zap size={20} />
                Calculate My Savings
                <ArrowRight size={20} />
              </motion.button>

            </div>
          </motion.div>

          {/* RIGHT - RESULTS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >

            {/* MAIN SYSTEM SIZE */}
            <motion.div
              variants={itemVariants}
              className="relative bg-linear-to-br from-[#1E559D] to-blue-800 rounded-2xl p-8 sm:p-10 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">
                  Recommended System Size
                </p>
                <motion.h1
                  key={systemSize}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl sm:text-7xl font-black mb-2 leading-none"
                >
                  {systemSize}
                  <span className="text-2xl sm:text-3xl font-bold ml-3">kW</span>
                </motion.h1>
                <p className="text-blue-100">Based on your monthly electricity bill and location</p>
              </div>
            </motion.div>

            {/* METRICS GRID */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">

              {/* ANNUAL SAVINGS */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100/50 hover:shadow-xl hover:border-green-200 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium mb-2">Annual Savings</p>
                <motion.h3
                  key={annualSavings}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-2xl sm:text-3xl font-black text-green-600"
                >
                  Ã¢â€šÂ¹{annualSavings.toLocaleString()}
                </motion.h3>
              </div>

              {/* INVESTMENT */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl hover:border-blue-200 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-[#1E559D]/20 rounded-lg">
                    <IndianRupee className="w-6 h-6 text-[#1E559D]" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium mb-2">Total Investment</p>
                <motion.h3
                  key={cost}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-2xl sm:text-3xl font-black text-[#1E559D]"
                >
                  Ã¢â€šÂ¹{(cost/100000).toFixed(2)}L
                </motion.h3>
              </div>

              {/* PAYBACK */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100/50 hover:shadow-xl hover:border-purple-200 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium mb-2">Payback Period</p>
                <motion.h3
                  key={payback}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-2xl sm:text-3xl font-black text-purple-600"
                >
                  {payback} <span className="text-lg">yrs</span>
                </motion.h3>
              </div>

              {/* CO2 SAVINGS */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100/50 hover:shadow-xl hover:border-emerald-200 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium mb-2">COÃ¢â€šâ€š Saved (Annual)</p>
                <motion.h3
                  key={co2}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-2xl sm:text-3xl font-black text-emerald-600"
                >
                  {co2} <span className="text-lg">kg</span>
                </motion.h3>
              </div>

            </motion.div>

            {/* DETAILED REPORT CTA */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-linear-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-slate-500/40"
            >
              <ArrowRight size={20} />
              Get Detailed Report & Consultation
            </motion.button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CalcLayout;