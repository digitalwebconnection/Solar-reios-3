import { motion } from "framer-motion";
import { Battery, Clock, Shield, ArrowRight, Zap, Activity, Cpu } from "lucide-react";

const stats = [
  { icon: <Battery size={18} />, value: "50kWh+", label: "Max Capacity" },
  { icon: <Clock size={18} />, value: "15+ Years", label: "Lifecycle" },
  { icon: <Shield size={18} />, value: "10 Years", label: "Warranty" },
];

const PowerBackupSection = () => {
  return (
    <section className="py-20 bg-[#fafafa] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-6 space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              <Cpu size={14} className="text-blue-600" />
              <span className="text-xs font-medium text-blue-600">
                Energy Storage
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Smart Energy Backup <br />
              <span className="text-blue-600">Always Ready</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Solar Reios battery systems ensure uninterrupted power with intelligent energy management,
              reducing costs and improving efficiency for industrial and commercial applications.
            </p>

            {/* FEATURES */}
            <div className="space-y-3">
              {[
                { title: "Peak Optimization", desc: "Reduce cost during peak hours" },
                { title: "Instant Backup", desc: "Seamless power switching" },
                { title: "Smart Monitoring", desc: "Track usage in real-time" }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition"
                >
                  <Zap size={18} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-slate-900 transition">
              Configure System <ArrowRight size={16} />
            </button>
          </div>

          {/* LEFT IMAGE */}
          <div className="lg:col-span-6 relative">

            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1200"
                className="w-full h-[400px] md:h-[500px] object-cover"
                alt="Battery"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* FLOATING STATUS */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl flex items-center gap-3"
              >
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <Activity size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70">System</p>
                  <p className="text-sm text-white font-medium">Optimized</p>
                </div>
              </motion.div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-blue-600 flex justify-center mb-2">{item.icon}</div>
                  <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-24">

          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xl font-semibold text-slate-900">Storage Solutions</h3>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                name: "Li-Ion Ultra",
                cap: "20kWh",
                progress: "90%",
                color: "bg-blue-600",
                image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1200"
              },
              {
                name: "Lead Backup",
                cap: "5kWh",
                progress: "40%",
                color: "bg-slate-400",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxGjIJoEV6pavL9EHUmWsuZNT1TkRx-ytYA&s"
              },
              {
                name: "Micro Grid",
                cap: "50kWh",
                progress: "100%",
                color: "bg-emerald-500",
                image: "https://ornatesolar.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-23-at-13.23.15-1-1-1024x618.webp"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-xl h-56 bg-white border border-slate-200"
              >

                {/* IMAGE HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-6 group-hover:text-white transition">

                  <div className="flex justify-between mb-3">
                    <h4 className="font-medium">{item.name}</h4>
                    <span className="text-xs opacity-60">Capacity</span>
                  </div>

                  <div className="text-xl font-semibold mb-3">
                    {item.cap}
                  </div>

                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden group-hover:bg-white/20">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: item.progress }}
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