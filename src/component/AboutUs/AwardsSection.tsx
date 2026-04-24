import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const galleryImages = [
  {
    url: "https://www.nikhiltechnochem.com/wp-content/uploads/2024/10/Rooftop-Solar-Power-Plant.webp",
    title: "Utility Scale Solar Plant",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800",
    title: "Rooftop Solar Installation",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOACLBLYmPuFxm4RUJNB4tgvWEYoupAMdkRg&s",
    title: "Solar Panel Installation Process",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    url: "https://solar.upneda.in/storage/app/public/slider/1773143730_7.jpg",
    title: "Industrial Solar Setup",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200",
    title: "Commercial Solar Project",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800",
    title: "Solar Panel Maintenance",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800",
    title: "Solar Farm Expansion",
    span: "md:col-span-1 md:row-span-1"
  },
];

const AwardsSection = () => {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#1E559D] font-bold tracking-widest text-xs uppercase mb-3"
            >
              Gallery & Achievements
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#000000] leading-tight"
            >
              Moments that <span className="text-[#1E559D]">Defined Us.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 md:max-w-xs text-sm pb-2"
          >
            A visual journey through our most impactful projects and industry-leading breakthroughs.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full md:h-200">
          {galleryImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 cursor-pointer ${item.span}`}
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Floating Action Button (Icon) */}
              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                <Maximize2 size={18} className="text-white" />
              </div>

              {/* Bottom Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[#1E559D] text-xs font-bold uppercase tracking-widest mb-2">Project Case</p>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;