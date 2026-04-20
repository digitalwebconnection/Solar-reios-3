import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  { 
    city: "Mumbai Branch", 
    addr: "Unit 304, Business Park, Andheri East, Mumbai, Maharashtra 400069", 
    phone: "+91-22-6789 4321",
    label: "Sales & Support"
  },
  { 
    city: "Ahmedabad Branch", 
    addr: "102, Solar Plaza, SG Highway, Ahmedabad, Gujarat 380054", 
    phone: "+91-79-4567 8901",
    label: "Regional Operations"
  },
];

const OfficeDetails = () => {
  return (
    <div className="space-y-12">
       {/* HQ */}
       <motion.div 
         initial={{ opacity: 0, x: -30 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         className="p-10 md:p-14 bg-white rounded-[48px] text-slate-900 shadow-2xl relative overflow-hidden border border-slate-100 group"
       >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          <MapPin className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12" size={240} />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-[9px]">Registered HQ</span>
            </div>
            
            <h3 className="text-4xl font-heading font-black text-slate-900 mb-8 uppercase tracking-tight">Corporate Office</h3>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex gap-5 group/item">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all shadow-sm">
                    <MapPin size={22} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Our Address</p>
                     <p className="text-slate-600 leading-relaxed font-semibold text-base max-w-[280px]">
                       802, 8th Floor, Crown Heights, Sector 10, Rohini, New Delhi, Delhi 110085
                     </p>
                   </div>
                </div>
                <div className="flex gap-5 group/item">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all shadow-sm">
                    <Phone size={22} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone Line</p>
                     <p className="text-xl font-black text-slate-900 tracking-tight">+91-11-4118 3116 / 17</p>
                   </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5 group/item">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all shadow-sm">
                    <Mail size={22} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                     <p className="text-xl font-black text-slate-900 tracking-tight hover:text-blue-600 cursor-pointer transition-colors">info@solarreios.com</p>
                   </div>
                </div>
                <div className="flex gap-5 group/item">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all shadow-sm">
                    <Clock size={22} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Working Hours</p>
                     <p className="text-slate-600 font-bold">Mon–Sat, 9:00 AM – 6:00 PM</p>
                     <p className="text-[10px] text-slate-400 mt-1">Closed on Sundays & Public Holidays</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
       </motion.div>

       {/* Branch Offices */}
       <div className="grid sm:grid-cols-2 gap-8">
          {offices.map((office, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
               <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">{office.label}</span>
               <h5 className="font-heading font-black text-2xl text-slate-900 mb-4 uppercase tracking-tight flex items-center gap-2">
                 {office.city}
                 <ArrowRight size={18} className="translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-blue-600" />
               </h5>
               <p className="text-sm text-slate-500 mb-6 font-medium leading-relaxed">{office.addr}</p>
               <p className="text-base font-black text-slate-900 tracking-tight flex items-center gap-2">
                 <Phone size={16} className="text-blue-600" />
                 {office.phone}
               </p>
            </motion.div>
          ))}
       </div>

       {/* Socials */}
       <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="p-10 bg-[#F8FAFC] border border-slate-100 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-10"
       >
          <div className="text-center lg:text-left">
            <h5 className="font-black text-slate-900 text-lg uppercase tracking-tight mb-1">Join the Solar Community</h5>
            <p className="text-slate-400 font-medium text-sm">Stay Updated with latest green energy innovations</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
             {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
               <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm hover:shadow-lg hover:shadow-blue-200 active:scale-95">
                 <Icon size={24} />
               </a>
             ))}
          </div>
       </motion.div>
    </div>
  );
};

export default OfficeDetails;
