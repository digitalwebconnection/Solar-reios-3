import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  img: string;
  author: string;
}

interface BlogGridProps {
  posts: Post[];
  setActiveCategory: (cat: string) => void;
}

const BlogGrid = ({ posts, setActiveCategory }: BlogGridProps) => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {posts.map((post) => (
            <motion.article 
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group flex flex-col bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all hover:border-blue-600/30"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={post.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={post.title} 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-blue-600" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-orange-400" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-heading font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden border border-slate-200 shadow-inner">
                         <User size={16} />
                      </div>
                      <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{post.author}</span>
                   </div>
                   <Link to="/blogs" className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-1 hover:gap-3 transition-all">
                     Read More <ArrowRight size={14} />
                   </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
          <h3 className="text-2xl font-black text-slate-900">No articles found.</h3>
          <button 
            onClick={() => setActiveCategory("All")}
            className="mt-6 text-blue-600 font-bold underline"
          >
            View All Posts
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogGrid;
