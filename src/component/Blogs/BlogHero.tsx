import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import blogVideo from "../../assets/5.mp4";

const BlogHero = () => {
  return (
    <section className="bg-slate-900 pt-32 pb-20 px-4 relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={blogVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
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
           <p className="text-slate-600 max-w-2xl mx-auto text-sm font-black uppercase tracking-[0.3em]">
             Stay informed about the latest trends in Solar Energy, EV charging infrastructure, 
             and government policies in India.
           </p>
      </div>
    </section>
  );
};

export default BlogHero;
