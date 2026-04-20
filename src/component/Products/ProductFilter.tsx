import { Filter, Search } from "lucide-react";

interface ProductFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const ProductFilter = ({ categories, activeCategory, setActiveCategory }: ProductFilterProps) => {
  return (
    <section className="sticky top-16 md:top-24 z-40 bg-[#F8FAFC] border-b border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 py-1 px-4 bg-white rounded-full overflow-x-auto no-scrollbar max-w-full shadow-sm border border-slate-100">
            <Filter size={18} className="text-slate-400 shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "text-slate-500 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
             <input 
               type="text" 
               placeholder="Search products..." 
               className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all border border-slate-100 font-bold text-slate-700"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
