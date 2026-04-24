import { motion } from "framer-motion";
import { Rocket, Heart, DollarSign, BookOpen } from "lucide-react";

const benefits = [
  { title: "Growth Culture", icon: <Rocket size={20} />, desc: "Rapid advancement opportunities in the green energy sector." },
  { title: "Mission Driven", icon: <Heart size={20} />, desc: "Work that contributes directly to a healthier planet." },
  { title: "Competitive Pay", icon: <DollarSign size={20} />, desc: "Top-tier compensation and performance-linked incentives." },
  { title: "Continuous Learning", icon: <BookOpen size={20} />, desc: "Regular training sessions and professional development." },
];

const BenefitsSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="text-[#1E559D] text-xs font-bold uppercase tracking-widest mb-3">
              Build Your Future
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] leading-tight">
              Why Work <br /> With Us?
            </h2>

            <p className="text-slate-500 mt-6 max-w-md leading-relaxed">
              Join a team that  not just building a company Ã¢â‚¬â€ but shaping the
              future of clean energy in India.
            </p>

            <button className="mt-10 bg-[#000000] text-white px-6 py-3 rounded-full hover:bg-[#1E559D] transition">
              View Open Roles
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="divide-y border-t border-slate-200">

            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="py-8 flex items-start justify-between gap-6 group"
              >

                {/* LEFT CONTENT */}
                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="w-10 h-10 flex items-center justify-center bg-[#1E559D]/10 text-[#1E559D] rounded-lg group-hover:bg-[#1E559D] group-hover:text-white transition">
                    {b.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#000000] group-hover:text-[#1E559D] transition">
                      {b.title}
                    </h4>
                    <p className="text-sm text-slate-500 mt-2 max-w-sm">
                      {b.desc}
                    </p>
                  </div>
                </div>

                {/* NUMBER */}
                <div className="text-3xl font-bold text-slate-200 group-hover:text-[#1E559D] transition">
                  0{i + 1}
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;