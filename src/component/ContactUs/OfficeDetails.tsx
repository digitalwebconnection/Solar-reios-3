import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const offices = [
  { city: "Mumbai Branch", addr: "Unit 304, Business Park, Andheri East, Mumbai, Maharashtra 400069", phone: "+91-22-6789 4321" },
  { city: "Ahmedabad Branch", addr: "102, Solar Plaza, SG Highway, Ahmedabad, Gujarat 380054", phone: "+91-79-4567 8901" },
];

const OfficeDetails = () => {
  return (
    <div className="space-y-12">
       {/* HQ */}
       <div className="p-10 bg-slate-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden border border-white/5">
          <MapPin className="absolute top-10 right-10 opacity-5" size={100} />
          <h4 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-6">Registered Office</h4>
          <div className="space-y-6">
            <div className="flex gap-4">
               <MapPin className="text-blue-600 shrink-0" size={24} />
               <p className="text-slate-400 leading-relaxed font-medium">
                 802, 8th Floor, Crown Heights, Sector 10, Rohini, New Delhi, Delhi 110085
               </p>
            </div>
            <div className="flex gap-4">
               <Phone className="text-blue-600 shrink-0" size={24} />
               <p className="text-lg font-black">+91-11-4118 3116 / 4118 3117</p>
            </div>
            <div className="flex gap-4">
               <Mail className="text-blue-600 shrink-0" size={24} />
               <p className="text-lg font-black">info@solarreios.com</p>
            </div>
            <div className="flex gap-4 border-t border-white/5 pt-6">
               <Clock className="text-blue-400 shrink-0" size={24} />
               <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Mon–Sat, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
       </div>

       {/* Branch Offices */}
       <div className="grid sm:grid-cols-2 gap-6">
          {offices.map((office, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
               <h5 className="font-heading font-black text-slate-900 mb-4 uppercase tracking-tight">{office.city}</h5>
               <p className="text-sm text-slate-500 mb-4 font-medium">{office.addr}</p>
               <p className="text-sm font-black text-blue-600 tracking-tight">{office.phone}</p>
            </div>
          ))}
       </div>

       {/* Socials */}
       <div className="p-10 bg-[#F8FAFC] border border-slate-100 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
          <h5 className="font-black text-slate-400 uppercase tracking-widest text-[10px]">Follow the Movement</h5>
          <div className="flex gap-3">
             {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
               <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                 <Icon size={20} />
               </a>
             ))}
          </div>
       </div>
    </div>
  );
};

export default OfficeDetails;
