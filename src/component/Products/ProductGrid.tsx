import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  specs: string[];
  img: string;
  badge: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {products.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-blue-600/50"
            >
              <div className="h-64 relative overflow-hidden bg-slate-50">
                <img src={p.img} className="w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" alt={p.name} />
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {p.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-8 text-center md:text-left">
                <h3 className="text-xl font-heading font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors line-clamp-1">{p.name}</h3>
                <div className="space-y-3 mb-8">
                  {p.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-500 text-sm justify-center md:justify-start font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-grow bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                    View Details
                  </button>
                  <button className="w-14 h-14 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 hover:text-blue-600 transition-all border border-slate-100 hover:bg-white hover:shadow-lg">
                    <FileText size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductGrid;
