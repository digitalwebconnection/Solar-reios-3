import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[48px] p-10 md:p-16 shadow-2xl border border-slate-100"
    >
       <h3 className="text-3xl font-heading font-black text-slate-900 mb-10 uppercase tracking-tight">Send us a Message</h3>
       <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name *" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-700" required />
            <input type="email" placeholder="Email Address *" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-700" required />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="tel" placeholder="Phone Number *" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-700" required />
            <input type="text" placeholder="City / State" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-700" />
          </div>
          <select className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-500">
            <option>Enquiry Type</option>
            <option>Solar Installation</option>
            <option>EV Charger</option>
            <option>Partnership</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Message / Requirements *" rows={4} className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-700" required></textarea>
          
          <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-slate-900 transition-all">
            <Send size={20} /> Submit Enquiry
          </button>
          <p className="text-center text-[10px] font-black text-slate-400 mt-4 flex items-center justify-center gap-2 uppercase tracking-widest">
            <CheckCircle2 size={14} className="text-green-500" /> We respond within 24 hours
          </p>
       </form>
    </motion.div>
  );
};

export default ContactForm;
