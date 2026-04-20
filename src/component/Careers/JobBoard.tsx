import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const jobs = [
  { title: "Solar Site Engineer", dept: "Operations", loc: "Delhi NCR", type: "Full-time" },
  { title: "EV Sales Executive", dept: "Sales", loc: "Mumbai", type: "Full-time" },
  { title: "Project Manager", dept: "EPC", loc: "Ahmedabad", type: "Full-time" },
  { title: "Solar Design Engineer", dept: "Engineering", loc: "Remote/Delhi", type: "Full-time" },
];

const JobBoard = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-black text-slate-900">Current Openings</h2>
        <p className="text-slate-500 mt-4 font-medium uppercase tracking-widest text-xs">Join our growing tribe</p>
      </div>

      <div className="grid gap-6">
        {jobs.map((job, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ x: 10 }}
            className="bg-white border border-slate-100 hover:border-blue-600 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 group transition-all shadow-xl shadow-slate-200/40 hover:shadow-2xl"
          >
             <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all capitalize shrink-0 font-black text-xl shadow-sm border border-slate-100">
                  {job.title.charAt(0)}
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-heading text-slate-900 mb-2">{job.title}</h4>
                  <div className="flex flex-wrap gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-600" /> {job.loc}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-600" /> {job.type}</span>
                    <span className="text-blue-600 tracking-tighter">{job.dept}</span>
                  </div>
                </div>
             </div>
             <button className="bg-slate-900 group-hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg whitespace-nowrap uppercase tracking-widest text-xs">
               Apply Now
             </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobBoard;
