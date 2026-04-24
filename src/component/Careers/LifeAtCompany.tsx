import { motion } from "framer-motion";

const LifeAtCompany = () => {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#1E559D] text-xs font-bold uppercase tracking-widest mb-3">
              Our Culture
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] leading-tight">
              Life at <span className="text-[#1E559D]">SolarReios</span>
            </h2>

            <p className="text-slate-500 mt-6 leading-relaxed max-w-md">
              We believe in building more than just solar solutions Ã¢â‚¬â€ we build
              careers, ideas, and a culture driven by innovation and purpose.
            </p>

            {/* CULTURE POINTS */}
            <div className="mt-10 space-y-4">

              {[
                "Collaborative & supportive environment",
                "Fast growth & learning opportunities",
                "Work on real-world clean energy impact",
                "Innovation-first mindset",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1E559D] rounded-full"></div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}

            </div>

            {/* CTA */}
            <button className="mt-10 bg-[#000000] text-white px-6 py-3 rounded-full hover:bg-[#1E559D] transition">
              Explore Careers
            </button>
          </motion.div>

          {/* RIGHT VISUAL COLLAGE */}
          <div className="relative h-[500px]">

            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute top-0 left-0 w-[70%] h-[60%] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>

            {/* TOP RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute top-0 right-0 w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>

            {/* BOTTOM LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 left-0 w-[50%] h-[35%] rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>

            {/* BOTTOM RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute bottom-0 right-0 w-[40%] h-[45%] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://t4.ftcdn.net/jpg/05/37/63/83/360_F_537638398_O2DaLphkJcAddquBClekkpXX4EIoFsjI.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LifeAtCompany;