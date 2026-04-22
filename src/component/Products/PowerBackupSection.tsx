import { motion } from "framer-motion";
import { Battery, Clock, Shield, ArrowRight, Zap, Activity, Cpu } from "lucide-react";

const stats = [
  { icon: <Battery size={20} />, value: "50kWh+", label: "Max Capacity" },
  { icon: <Clock size={20} />, value: "15+ Years", label: "Cycle Life" },
  { icon: <Shield size={20} />, value: "10 Years", label: "Full Warranty" },
];

const PowerBackupSection = () => {
  return (
    <section className="py-12 bg-[#fafafa] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-16 items-center">
  {/* 📝 RIGHT: CONTENT & FEATURES */}
          <div className="lg:col-span-6 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <Cpu size={16} className="text-blue-600" />
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Next-Gen Storage</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Smart Energy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                  Always Online.
                </span>
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed">
                Eliminate grid anxiety. Our intelligent battery ecosystems learn your habits to provide power precisely when it's needed most.
              </p>

              <div className="grid gap-4">
                {[
                  { title: "Peak Shaving", desc: "Reduces costs during high-tariff hours." },
                  { title: "0ms Switchover", desc: "Seamless transition during power failures." },
                  { title: "IoT Controlled", desc: "Monitor your storage from anywhere." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <div className="mt-1"><Zap size={18} className="text-emerald-500" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden transition-all shadow-2xl hover:shadow-blue-500/20">
                <span className="relative z-10 font-bold flex items-center gap-2">
                  Configure System <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
          {/* 🔋 LEFT: THE POWER HUB VISUAL */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative p-4 rounded-[2.5rem] bg-white shadow-2xl border border-slate-200"
            >
              <div className="overflow-hidden rounded-[2rem] relative">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200"
                  className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
                  alt="Battery Storage System"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>

              {/* FLOATING STATUS (THE "TOUCH") */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
              >
                <div className="p-2 bg-emerald-500 rounded-lg animate-pulse">
                  <Activity size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-white/70">System Health</p>
                  <p className="text-sm font-bold text-white">OPTIMIZED</p>
                </div>
              </motion.div>
            </motion.div>

            {/* DASHBOARD STATS OVERLAY */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] grid grid-cols-3 gap-3">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 text-center"
                >
                  <div className="text-blue-600 flex justify-center mb-2">{item.icon}</div>
                  <p className="text-lg font-black text-slate-900 leading-none">{item.value}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-tighter">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        
        </div>

        {/* 📊 BOTTOM: PRODUCT RANGE COMPARISON */}
        <div className="mt-40">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-black text-slate-900">Storage Solutions</h3>
            <div className="flex-1 h-[1px] bg-slate-200" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Li-Ion Ultra", cap: "20kWh", progress: "w-[90%]", color: "bg-blue-600" },
              { name: "Classic Lead", cap: "5kWh", progress: "w-[40%]", color: "bg-slate-400" },
              { name: "Micro Grid", cap: "50kWh", progress: "w-[100%]", color: "bg-emerald-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-black text-slate-900">{item.name}</h4>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Capacity</span>
                </div>
                
                <div className="space-y-4">
                  <div className="text-3xl font-black text-slate-900">{item.cap}</div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: (item.progress.match(/\d+/) || ["0"])[0] + "%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-full ${item.color}`} 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PowerBackupSection;