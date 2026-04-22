import { motion } from "framer-motion";
import { Quote, Star, CheckCircle2, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Anil Sharma",
    role: "Homeowner",
    company: "Residential Solar",
    quote: "The solar installation was completely seamless. My monthly energy bills have dropped by nearly 80% since the first month.",
    type: "Residential",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil",
  },
  {
    name: "Megha Gupta",
    role: "Society Manager",
    company: "Green Heights",
    quote: "Our housing society's EV charging setup is extremely reliable. The smart dashboard makes billing for residents effortless.",
    type: "Commercial",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Megha",
  },
  {
    name: "Rajesh Verma",
    role: "Operations Head",
    company: "Indus Tech Park",
    quote: "Implemented a massive industrial solar array with zero downtime during the switch. Their engineering team is world-class.",
    type: "Industrial",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
  },
  {
    name: "Sanjay K.",
    role: "CEO",
    company: "EcoLogistics",
    quote: "The most professional energy transition consultants we've worked with. They handled the subsidies and permissions perfectly.",
    type: "Corporate",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay",
  },
];

const duplicated = [...testimonials, ...testimonials, ...testimonials];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div className="group relative min-w-87.5 max-w-87.5 bg-white border border-slate-400 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:-translate-y-2">
    {/* Type Badge */}
    <div className="flex justify-between items-start mb-6">
      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
        {item.type}
      </span>
      <div className="flex gap-0.5">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} size={12} fill="#f59e0b" className="text-amber-500" />
        ))}
      </div>
    </div>

    <Quote size={32} className="text-slate-400 absolute top-12 right-8 group-hover:text-blue-50 transition-colors" />

    <p className="relative z-10 text-slate-600 leading-relaxed mb-8 italic">
      "{item.quote}"
    </p>

    <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
      <div className="relative">
        <img src={item.avatar} className="w-12 h-12 rounded-2xl bg-slate-100 object-cover" alt={item.name} />
        <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-0.5 border-2 border-white">
          <CheckCircle2 size={10} />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1">
          {item.name}
          <ShieldCheck size={14} className="text-blue-500" />
        </h4>
        <p className="text-[11px] text-slate-400 font-medium">
          {item.role} @ <span className="text-slate-600">{item.company}</span>
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase"
        >
          Social Proof
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6"
        >
          Trusted by <span className="text-blue-600">Industry Leaders</span>
        </motion.h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          From residential rooftops to massive industrial parks, we’ve empowered thousands of clients to make the switch to clean, sustainable energy.
        </p>
      </div>

      {/* MARQUEE CONTAINER WITH GRADIENT MASK */}
      <div className="relative">
        {/* Left Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-[#fafafa] to-transparent pointer-events-none" />
        {/* Right Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-8 py-10 cursor-grab active:cursor-grabbing"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
          whileHover={{ transition: { duration: 60 } }} // Slows down on hover for readability
        >
          {duplicated.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Trust Badges Bar */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          <span className="font-black text-xl text-slate-400">ISO 9001</span>
          <span className="font-black text-xl text-slate-400">NSE LISTED</span>
          <span className="font-black text-xl text-slate-400">MNRE APPROVED</span>
          <span className="font-black text-xl text-slate-400">BEE 5-STAR</span>
      </div>
    </section>
  );
};

export default TestimonialsSection;