import { motion, type Variants } from "framer-motion";

const AboutSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section className="relative py-20 px-6 md:py-32  overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-7 relative">
            {/* OUTLINE WATERMARK - "ABOUT" */}
            <div className="absolute -top-16 -left-4 select-none pointer-events-none">
              <h2 
                className="text-8xl md:text-[140px] font-black leading-none drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] opacity-[0.1]"
                style={{ WebkitTextStroke: "1px #000", color: "transparent" }}
              >
                ABOUT US
              </h2>
            </div>

            <motion.div variants={fadeInUp} className="relative z-10">
              {/* SECTION TAG */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-0.5 h-6 bg-blue-500"></span>
                <span className="text-blue-600 font-semibold text-lg">Who we are</span>
              </div>

              {/* MAIN HEADING */}
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Driving Change As A Disruptor
              </h3>

              {/* BODY TEXT */}
              <div className="space-y-6 text-slate-700 leading-relaxed text-base md:text-lg">
                <p>
                  <span className="font-bold text-slate-900">Servotech Renewable Power System Ltd. (NSE: SERVOTECH)</span>, 
                  a leading Indian clean energy solutions provider, specializing in solar innovations and EV charging solutions. 
                  With a pan-India presence, agile manufacturing, and strong R&D capabilities, Servotech is driving India's 
                  transition toward a sustainable, energy-independent, and technologically empowered future.
                </p>
                <p>
                  Through continuous innovation, strategic collaborations, and large-scale deployments, the company 
                  delivers reliable, high-performance solutions that support the nation's clean energy goals. 
                  Servotech's comprehensive portfolio spanning solar panels, inverters, batteries, and EV chargers 
                  reflects its commitment to engineering excellence and environmental stewardship.
                </p>
        
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL CARD */}
          <motion.div variants={fadeInUp} className="lg:col-span-5">
            <div className="relative group bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-100">
              {/* TOP BRANDED AREA (Dark Background) */}
              <div className="bg-[#d6d6d6]  p-1 flex items-center justify-center relative overflow-hidden">
                {/* 21+ Years Graphic (Placeholder for your specific SVG/Image) */}
                <div className="relative z-10 w-full ">
                   <img 
                    src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-01/25/full/1611598969-4853.jpg" 
                    alt="21 Years of Excellence" 
                    className="w-full h-auto"
                  />
                  {/* Note: I recommend using the specific 21+ Years SVG here 
                      to match the "green circle" design exactly as seen in the image. */}
                </div>
                
                {/* Subtle Leaf Background Icon (SVG) */}
               
              </div>

              {/* BOTTOM CAPTION AREA */}
             <div className="p-8 text-center bg-white">
  <p className="text-xl font-medium">
    <span className="text-orange-500 font-bold">10+ Years Of</span>{" "}
    <span className="font-extrabold text-slate-900">Solar Excellence</span>{" "}
    <span className="text-slate-600">&</span>{" "}
    <span className="text-orange-500 font-bold italic">Sustainable</span>{" "}
    <span className="font-extrabold text-slate-900">Energy Solutions</span>
  </p>
</div>
              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-green-500 w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;