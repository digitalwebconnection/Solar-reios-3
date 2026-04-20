import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ProductsHero = () => {
  return (
    <section className="relative h-[300px] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Products Hero"
      />
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-white">
        <div className="flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span>Products</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-black">Our Products</h1>
      </div>
    </section>
  );
};

export default ProductsHero;
