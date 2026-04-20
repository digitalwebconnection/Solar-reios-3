import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Anil Sharma", city: "New Delhi", quote: "The solar installation process was seamless. My electricity bills have dropped by 80%!", type: "Residential" },
  { name: "Megha Gupta", city: "Gurugram", quote: "Reliable EV charging solutions for our housing society. The app integration is excellent.", type: "Commercial" },
  { name: "Rajesh V.", city: "Ahmedabad", quote: "Top-notch industrial solar setup. Their team is professional and highly skilled.", type: "Industrial" },
];

const TestimonialsSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <Quote size={400} className="text-white absolute -top-20 -left-20" />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Our Happy Clients</p>
          <h2 className="text-4xl font-heading font-black text-white">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors shadow-2xl"
            >
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#2563eb" className="text-blue-600" />)}
              </div>
              <p className="text-slate-300 italic mb-8">"{t.quote}"</p>
              <div className="border-t border-white/10 pt-6">
                <h5 className="text-white font-bold">{t.name}</h5>
                <p className="text-blue-400 text-xs uppercase font-black tracking-wider">{t.city} | {t.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
