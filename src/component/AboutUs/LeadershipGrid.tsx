import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react"; // Assuming lucide-react is used

const leaders = [
  {
    name: "Raman Bhatia",
    role: "Founder & MD",
    bio: "A visionary with 20+ years in power electronics, leading the green energy shift.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sarika Bhatia",
    role: "Whole Time Director",
    bio: "Driving organizational excellence and strategic partnerships across India.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Pawan Saxena",
    role: "CTO",
    bio: "Tech expert focusing on next-gen EV charging and smart solar integration.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  },
];

const LeadershipGrid = () => {
  return (
    <section className="py-28 bg-[#fdfdfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase block mb-3"
            >
              The Executive Team
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Visionaries.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 md:max-w-xs text-sm leading-relaxed"
          >
            Our leadership brings decades of collective experience to solve the world's most pressing energy challenges.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-slate-200"
            >
              {/* Image with Parallax-like scale */}
              <img
                src={leader.img}
                alt={leader.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Static Content (Always visible) */}
              <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 transform group-hover:-translate-y-24">
                <h4 className="text-2xl font-bold text-white mb-1">{leader.name}</h4>
                <p className="text-blue-400 font-medium text-sm uppercase tracking-wider">{leader.role}</p>
                
                {/* Social Icons */}
                <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <Linkedin size={18} className="text-white hover:text-blue-400 cursor-pointer transition-colors" />
                  <Twitter size={18} className="text-white hover:text-blue-400 cursor-pointer transition-colors" />
                  <Mail size={18} className="text-white hover:text-blue-400 cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Hidden Content (Reveals on hover) */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="h-[2px] w-12 bg-blue-500 mb-4" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipGrid;