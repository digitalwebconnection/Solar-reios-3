import { motion } from "framer-motion";
import { Send, CheckCircle2, User, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[48px] p-10 md:p-16 shadow-3xl border border-slate-100 relative overflow-hidden"
    >
       <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
       
       <div className="relative z-10">
         <div className="mb-12">
           <h3 className="text-4xl font-heading font-black text-slate-900 mb-4 uppercase tracking-tight">Send us a Message</h3>
           <p className="text-slate-500 font-medium">Fill out the form below and our solar experts will get back to you shortly.</p>
         </div>

         <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  className="w-full bg-slate-50 border border-slate-100 p-6 pl-16 rounded-[24px] font-bold outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/30 transition-all text-slate-700 placeholder:text-slate-400 placeholder:font-semibold" 
                  required 
                />
              </div>
              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  className="w-full bg-slate-50 border border-slate-100 p-6 pl-16 rounded-[24px] font-bold outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/30 transition-all text-slate-700 placeholder:text-slate-400 placeholder:font-semibold" 
                  required 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  className="w-full bg-slate-50 border border-slate-100 p-6 pl-16 rounded-[24px] font-bold outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/30 transition-all text-slate-700 placeholder:text-slate-400 placeholder:font-semibold" 
                  required 
                />
              </div>
              <div className="relative group">
                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="City / State" 
                  className="w-full bg-slate-50 border border-slate-100 p-6 pl-16 rounded-[24px] font-bold outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/30 transition-all text-slate-700 placeholder:text-slate-400 placeholder:font-semibold" 
                />
              </div>
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-6 top-7 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <textarea 
                placeholder="How can we help you? *" 
                rows={4} 
                className="w-full bg-slate-50 border border-slate-100 p-6 pl-16 rounded-[24px] font-bold outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/30 transition-all text-slate-700 placeholder:text-slate-400 placeholder:font-semibold resize-none" 
                required
              ></textarea>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
              <button className="w-full md:w-auto px-12 bg-blue-600 text-white py-6 rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-blue-200 hover:bg-slate-900 hover:shadow-slate-200 transition-all duration-300 active:scale-95 group">
                Submit Message 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Guaranteed Response</p>
                  <p className="text-xs text-slate-400 font-medium">Within 24 business hours</p>
                </div>
              </div>
            </div>
         </form>
       </div>
    </motion.div>
  );
};

export default ContactForm;
