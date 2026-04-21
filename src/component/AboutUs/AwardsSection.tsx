import { motion } from "framer-motion";

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
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Moments & <span className="text-blue-600">Highlights</span>
          </h2>
          <p className="text-gray-500 mt-3">
            A glimpse of our achievements and journey
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition"
            >

              {/* IMAGE */}
              <img
                src={img}
                alt="Gallery"
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                <p className="text-sm font-medium">
                  Project Highlight
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AwardsSection;