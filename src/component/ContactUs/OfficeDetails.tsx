import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  {
    city: "Mumbai",
    addr: "Andheri East, Mumbai, Maharashtra",
    phone: "+91-22-6789 4321",
    tag: "Financial Hub"
  },
  {
    city: "Ahmedabad",
    addr: "SG Highway, Ahmedabad, Gujarat",
    phone: "+91-79-4567 8901",
    tag: "Industrial Center"
  },
];

const OfficeDetails = () => {
  return (
    <section className="py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT - PRIMARY HQ PANEL (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden"
          >
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-400" />
            
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">
              Official Headquarters
            </span>

            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
              Corporate <br /> <span className="text-blue-600">Operations</span>
            </h2>

            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Address", value: "802, Crown Heights, Rohini, New Delhi – 110085" },
                { icon: Phone, label: "Direct Line", value: "+91-11-4118 3116 / 17", color: "text-blue-600 font-bold" },
                { icon: Mail, label: "Inquiries", value: "info@solarreios.com" },
                { icon: Clock, label: "Working Hours", value: "Mon–Sat, 9 AM – 6 PM" },
              ].map((item, idx) => (
                <div key={idx} className="group flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter mb-1">{item.label}</p>
                    <p className={`text-slate-700 leading-relaxed ${item.color || ''}`}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - BRANCH BENTO GRID (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-slate-900">Regional Centers</h3>
              <div className="h-[1px] flex-1 bg-slate-200" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {offices.map((office, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative"
                >
                  <div className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-100 transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                  
                  <span className="text-[10px] font-bold text-blue-500/60 uppercase mb-2 block">{office.tag}</span>
                  <h4 className="text-2xl font-black text-slate-900 mb-4">{office.city}</h4>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-slate-500 leading-relaxed">{office.addr}</p>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <Phone size={14} className="text-blue-600" />
                      {office.phone}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Optional Empty Slot for "Future Growth" or a CTA */}
              <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center text-center opacity-50">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Expansion</p>
                 <p className="text-sm text-slate-400 mt-1">Coming Soon to UAE</p>
              </div>
            </div>

            {/* CONNECTIVITY / SOCIAL DOCK */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 bg-slate-900 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg">Digital Ecosystem</h4>
                <p className="text-slate-400 text-sm mt-1">Follow our journey across platforms</p>
              </div>

              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OfficeDetails;