import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ProductCategory {
  id: number;
  name: string;
  description: string;
  image: string;
  gradient: string;
  layout: "featured" | "medium" | "small";
}

const AllProductsSection = () => {
  const categories: ProductCategory[] = [
    {
      id: 1,
      name: "EV Charger",
      description: "Next-gen electric vehicle charging solutions",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
      gradient: "from-blue-600 to-cyan-600",
      layout: "featured"
    },
    {
      id: 2,
      name: "Solar Products",
      description: "Complete solar energy systems",
      image: "https://images.unsplash.com/photo-1509391366360-2e938d440220?w=800&q=80",
      gradient: "from-yellow-600 to-orange-600",
      layout: "featured"
    },
    {
      id: 3,
      name: "Power & Backup",
      description: "Battery backup & storage",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      gradient: "from-green-600 to-emerald-600",
      layout: "medium"
    },
    {
      id: 4,
      name: "Electric 3W Solutions",
      description: "Three-wheeler charging",
      image: "https://images.unsplash.com/photo-1619405399517-d4dc2500eaa0?w=600&q=80",
      gradient: "from-purple-600 to-pink-600",
      layout: "medium"
    },
    {
      id: 5,
      name: "LEDS",
      description: "Smart LED lighting",
      image: "https://images.unsplash.com/photo-1565636192335-14f82652de9f?w=600&q=80",
      gradient: "from-indigo-600 to-purple-600",
      layout: "small"
    },
    {
      id: 6,
      name: "Others",
      description: "Additional solutions",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
      gradient: "from-slate-600 to-slate-700",
      layout: "small"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4"
          >
            All Product Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Discover our complete range of renewable energy and smart solutions
          </motion.p>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {categories.map((category, index) => {
            let colSpan = "md:col-span-2";
            let rowSpan = "md:row-span-2";
            
            if (category.layout === "medium") {
              colSpan = "md:col-span-2";
              rowSpan = "md:row-span-1";
            } else if (category.layout === "small") {
              colSpan = "md:col-span-1";
              rowSpan = "md:row-span-1";
            }

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all ${colSpan} ${rowSpan}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-heading font-black mb-2 group-hover:translate-x-2 transition-transform">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explore</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/30 group-hover:border-white/60 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllProductsSection;
