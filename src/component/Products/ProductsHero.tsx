// import { Link } from "react-router-dom";
// import { ChevronRight } from "lucide-react";

const ProductsHero = () => {
  return (
    <section className="relative h-150 flex items-center overflow-hidden bg-blue-500 ">     
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-white">
        <h1 className="text-5xl md:text-8xl font-heading font-black text-slate-900 leading-tight">Our Products</h1>
      </div>
    </section>
  );
};

export default ProductsHero;
