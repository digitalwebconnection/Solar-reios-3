import { motion } from "framer-motion";
import { Upload, Send } from "lucide-react";

const AppForm = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
         <motion.div {...fadeIn} className="bg-white rounded-[48px] shadow-2xl p-10 md:p-16 border border-slate-100">
            <h3 className="text-3xl font-heading font-black text-slate-900 mb-12 text-center uppercase tracking-tight">Express Interest</h3>
            <form className="grid md:grid-cols-2 gap-8">
               <div className="space-y-6">
                  <input type="text" placeholder="Full Name *" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 text-slate-700" required />
                  <input type="email" placeholder="Email Address *" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 text-slate-700" required />
                  <input type="tel" placeholder="Phone Number *" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-600/20 text-slate-700" required />
               </div>
               <div className="space-y-6">
                  <select className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl font-bold outline-none text-slate-500">
                     <option>Select Department</option>
                     <option>Operations</option>
                     <option>Sales</option>
                     <option>Engineering</option>
                  </select>
                  <label className="flex items-center gap-4 bg-slate-50 border-2 border-dashed border-slate-200 p-5 rounded-2xl cursor-pointer hover:border-blue-600 transition-all group">
                    <Upload className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <span className="text-slate-400 font-bold group-hover:text-slate-700 transition-colors">Upload Resume (PDF)</span>
                    <input type="file" className="hidden" />
                  </label>
                  <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-slate-900 transition-all">
                     <Send size={20} /> Submit Application
                  </button>
               </div>
            </form>
         </motion.div>
      </div>
    </section>
  );
};

export default AppForm;
