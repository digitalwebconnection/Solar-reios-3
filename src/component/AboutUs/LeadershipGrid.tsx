import { motion } from "framer-motion";

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
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Our Visionaries
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Meet Our Leaders
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition"
            >
              {/* IMAGE (Top - 70%) */}
              <div className="h-52 w-full">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-fill"
                />
              </div>

              {/* CONTENT (Bottom - 30%) */}
              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-slate-900">
                  {leader.name}
                </h4>

                <p className="text-blue-600 text-sm font-medium mb-2">
                  {leader.role}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
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