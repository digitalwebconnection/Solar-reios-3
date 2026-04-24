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
  posts?: Post[];
  setActiveCategory: (cat: string) => void;
}

/* Ã¢Å“â€¦ Default Blog Data (Solar Focused) */
const samplePosts: Post[] = [
  {
    id: 1,
    title: "How Solar Can Reduce Your Electricity Bill by 90%",
    category: "Solar",
    date: "April 10, 2026",
    readTime: "5 min read",
    excerpt: "Switching to solar can drastically cut electricity costs and give long-term savings.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    author: "Admin",
  },
  {
    id: 2,
    title: "Net Metering Explained: Earn From Your Solar Power",
    category: "Policy",
    date: "April 5, 2026",
    readTime: "6 min read",
    excerpt: "Understand how net metering works and earn credits from excess solar energy.",
    img: "https://images.unsplash.com/photo-1584277261846-c6a1672ed979",
    author: "Energy Expert",
  },
  {
    id: 3,
    title: "Commercial Solar Installation ROI Guide",
    category: "Business",
    date: "March 28, 2026",
    readTime: "7 min read",
    excerpt: "Businesses are saving lakhs every year using solar systems.",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634",
    author: "Solar Team",
  },
  {
    id: 4,
    title: "Top Government Subsidies for Solar in India",
    category: "Subsidy",
    date: "March 20, 2026",
    readTime: "4 min read",
    excerpt: "Explore all solar subsidies and how to claim maximum benefits.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
    author: "Policy Advisor",
  },
  {
    id: 5,
    title: "Is Solar Worth It for Homes in 2026?",
    category: "Guide",
    date: "March 15, 2026",
    readTime: "5 min read",
    excerpt: "Everything homeowners should know before installing solar.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    author: "Consultant",
  },
  {
    id: 6,
    title: "Solar vs Electricity: Cost Comparison",
    category: "Comparison",
    date: "March 10, 2026",
    readTime: "6 min read",
    excerpt: "Compare long-term savings between solar and traditional electricity.",
    img: "https://cpimg.tistatic.com/08851117/b/4/SOLAR-PANEL-PROVIDER-COMPANY-IN-JAIPUR.png",
    author: "Analyst",
  },
];

const BlogGrid = ({ posts = [], setActiveCategory }: BlogGridProps) => {
  const displayPosts = posts.length ? posts : samplePosts;

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      
      {/* Ã°Å¸â€Â¥ Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
          Latest <span className="text-[#1E559D]">Solar Insights</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Explore expert articles on solar energy, savings, government policies, and smart decisions.
        </p>
      </div>

      {/* Ã°Å¸â€Â¥ Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {displayPosts.map((post) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:border-[#1E559D]/30"
            >
              {/* Image */}
              <div className="h-60 relative overflow-hidden">
                <img
                  src={post.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#000000] px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#000000] mb-3 group-hover:text-[#1E559D] transition">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <User size={16} className="text-slate-400" />
                    <span className="text-slate-700 font-medium">{post.author}</span>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-1 text-[#1E559D] text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {displayPosts.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
          <h3 className="text-2xl font-black text-[#000000]">
            No articles found.
          </h3>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-6 text-[#1E559D] font-bold underline"
          >
            View All Posts
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogGrid;  