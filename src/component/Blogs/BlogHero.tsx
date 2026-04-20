import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center text-center overflow-hidden bg-slate-900 px-4">
      <div 
        className="absolute inset-0 w-full h-full object-cover bg-blue-500"
      >
      </div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      <div className="relative text-center px-4">
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-6"
           >
             <Bookmark size={12} /> Resource Center
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-4xl md:text-7xl font-heading font-black text-slate-900 mb-6 uppercase tracking-tighter"
           >
             Insights & <span className="text-blue-600">Updates</span>
           </motion.h1>
           <p className="text-slate-600 mt-6 text-[15px] font-black max-w-2xl mx-auto uppercase tracking-[0.2em]">
             Stay informed about the latest trends in Solar Energy, EV charging infrastructure, 
             and government policies in India.
           </p>
      </div>
    </section>
  );
};

export default BlogHero;
