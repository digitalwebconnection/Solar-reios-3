import { motion } from "framer-motion";
import { Award } from "lucide-react";

const awards = [
  { title: "Best Solar Brand 2023", body: "Economic Times", year: "2023" },
  { title: "Innovation in EV Tech", body: "NITI Aayog", year: "2024" },
  { title: "Fastest Growing Company", body: "MSME India", year: "2022" },
  { title: "Top 100 EPC Players", body: "Solar Quarter", year: "2023" },
];

const AwardsSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4 text-center md:text-left">
          <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">Awards & Felicitations</h2>
          <div className="h-0.5 flex-grow bg-slate-100 mx-8 hidden md:block"></div>
          <Award className="text-blue-600" size={40} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-slate-100 rounded-[32px] text-center hover:shadow-2xl transition-all hover:border-blue-600 group bg-slate-50/50"
            >
              <div className="text-blue-600 font-black text-3xl mb-4 group-hover:scale-110 transition-transform">{award.year}</div>
              <h5 className="font-bold text-slate-900 mb-2 truncate">{award.title}</h5>
              <p className="text-sm text-slate-500">{award.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
