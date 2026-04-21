import { motion } from "framer-motion";
import { Building2, Target, Eye } from "lucide-react";

const CompanyStory = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div {...fadeIn}>
        <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
          <Building2 size={20} />
          <span className="uppercase tracking-widest text-sm">Our Legacy</span>
        </div>
        <h2 className="text-4xl font-heading font-black text-slate-900 mb-8">Empowering India since 2004</h2>
        <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
          <p>
            Founded with a mission to simplify power backup, SolarReios has evolved into a leading 
            manufacturer of end-to-end solar solutions and EV charging infrastructure in India.
          </p>
          <p>
            With state-of-the-art manufacturing facilities in Delhi-NCR, we serve thousands of 
            customers through a robust distribution network, ensuring the highest quality standards 
            and reliable post-installation support.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-slate-50 rounded-3xl border-l-4 border-blue-600">
            <Target className="text-blue-600 mb-4" size={32} />
            <h4 className="text-xl font-bold font-heading text-slate-900 mb-2">Our Mission</h4>
            <p className="text-sm text-slate-500">To accelerate sustainable living by providing affordable and efficient clean energy products.</p>
          </div>
          <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-200">
            <Eye className="text-orange-400 mb-4" size={32} />
            <h4 className="text-xl font-bold font-heading mb-2 text-white">Our Vision</h4>
            <p className="text-sm text-slate-400">To be India's most trusted brand for eco-friendly power and electric vehicle charging solutions.</p>
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeIn} className="relative">
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" 
          className="rounded-[40px] shadow-2xl object-cover h-125 w-full border border-slate-100"
          alt="Team Meeting"
        />
      </motion.div>
    </section>
  );
};

export default CompanyStory;
