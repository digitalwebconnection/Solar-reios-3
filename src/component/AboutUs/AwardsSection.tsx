import { motion } from "framer-motion";
import { Award } from "lucide-react";


const galleryImages = [
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
];

const AwardsSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ===== Gallery Section ===== */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
            Moments & <span className="text-blue-600">Highlights</span>
          </h2>
          <p className="text-slate-500 mt-2">
            A glimpse of our achievements and journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden rounded-xl border border-slate-200 group"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;