import { motion } from "framer-motion";

const leaders = [
  { name: "Raman Bhatia", role: "Founder & MD", bio: "A visionary with 20+ years in power electronics, leading the green energy shift.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" },
  { name: "Sarika Bhatia", role: "Whole Time Director", bio: "Driving organizational excellence and strategic partnerships across India.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
  { name: "Pawan Saxena", role: "CTO", bio: "Tech expert focusing on next-gen EV charging and smart solar integration.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" },
];

const LeadershipGrid = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">The Minds Behind SolarReios</p>
          <h2 className="text-4xl font-heading font-black text-slate-900">Meet Our Leaders</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[40px] shadow-xl shadow-slate-200/60 text-center group hover:bg-slate-900 transition-colors duration-500 border border-slate-100"
            >
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-600 p-1 group-hover:border-white transition-colors">
                <img src={leader.img} className="w-full h-full object-cover rounded-full" alt={leader.name} />
              </div>
              <h4 className="text-2xl font-heading font-bold text-slate-900 group-hover:text-white mb-1 transition-colors">{leader.name}</h4>
              <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider group-hover:text-blue-400">{leader.role}</p>
              <p className="text-slate-500 group-hover:text-slate-400 text-sm italic transition-colors">"{leader.bio}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipGrid;
