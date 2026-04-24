import { Link } from "react-router-dom";
import { Cpu, MessageSquare } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-[#000000] rounded-[48px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <Cpu size={400} className="text-white absolute -top-20 -right-20" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">Need help choosing the <span className="text-[#1E559D]">right product?</span></h2>
            <p className="text-slate-400 text-lg font-light">Our experts are available to guide you based on your energy requirements and budget.</p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
             <Link to="/contact" className="bg-[#1E559D] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-white hover:text-[#000000] transition-all font-heading uppercase tracking-widest">
               <MessageSquare size={20} /> Talk to Expert
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
