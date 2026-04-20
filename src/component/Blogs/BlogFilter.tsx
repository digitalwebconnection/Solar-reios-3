import { Search } from "lucide-react";

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const BlogFilter = ({ categories, activeCategory, setActiveCategory }: BlogFilterProps) => {
  return (
    <section className="sticky top-16 md:top-24 z-40 bg-white border-b border-slate-100 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 w-full lg:w-auto">
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                     activeCategory === cat 
                       ? "bg-blue-600 text-white shadow-lg" 
                       : "bg-slate-50 text-slate-500 hover:text-blue-600 border border-slate-100"
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
            <div className="relative w-full lg:w-72 shrink-0">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
               <input 
                 type="text" 
                 placeholder="Search articles..." 
                 className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl text-sm focus:outline-none ring-1 ring-slate-100 focus:ring-blue-600/20 transition-all font-bold text-slate-700 shadow-inner"
               />
            </div>
         </div>
      </div>
    </section>
  );
};

export default BlogFilter;
