import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2015",
    title: "Entering Solar Distribution",
    desc: "Started as a trusted distributor of high-quality solar panels, inverters, and electrical components across industrial and commercial segments.",
    image: "https://apnsolar.com/wp-content/uploads/2025/03/solar-distributorship.png",
  },
  {
    year: "2018",
    title: "Expanding Product Portfolio",
    desc: "Partnered with leading brands to supply complete solar solutions including panels, inverters, cables, and protection systems.",
    image: "https://news-images.dhan.co/insolation-energy-s-subsidiary-expands-solar-power-portfolio-with-new-spvs.jpg",
  },
  {
    year: "2020",
    title: "EPC Project Execution",
    desc: "Stepped into turnkey solar EPC projects delivering efficient rooftop and ground-mounted installations for businesses.",
    image: "https://usolar.in/wp-content/uploads/2024/03/7-4-1024x640.webp",
  },
  {
    year: "2022",
    title: "Scaling Industrial Solar",
    desc: "Successfully executed multiple MW-scale solar installations helping industries reduce energy costs and improve sustainability.",
    image: "https://www.novergysolar.com/wp-content/uploads/2020/08/1.jpg.webp",
  },
  {
    year: "Today",
    title: "Future-Ready Energy Solutions",
    desc: "Driving innovation in solar, energy storage, and EV infrastructure to power businesses with smarter, greener energy.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200",
  },
];

const MilestoneTimeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section className="py-24 bg-linear-to-b from-white via-slate-50 to-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 ">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#000000]">
            Our <span className="text-[#1E559D]">Journey</span>
          </h2>
          <p className="text-slate-500 mt-4">
            From humble beginnings to industry leadership
          </p>
        </div>

        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-200 hidden md:block" />

          {/* PROGRESS LINE */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-linear-to-b from-[#1E559D] to-[#1E559D] origin-top hidden md:block"
          />

          <div className="space-y-5">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="flex flex-col md:flex-row items-center relative">

                  {/* DOT */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#1E559D] border-4 border-white shadow-lg z-20" />

                  <div className={`flex w-full items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                    
                    <div className="hidden md:block w-1/2" />

                    {/* CARD */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                      className="w-full md:w-1/2 px-6"
                    >
                      <div className="group relative rounded-xl overflow-hidden shadow-lg">

                        {/* IMAGE */}
                        <img
                          src={item.image}
                          className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* GRADIENT OVERLAY */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                        {/* CONTENT */}
                        <div className="absolute bottom-0 p-6 text-white">
                          <span className="text-sm font-bold bg-[#1E559D] px-3 py-1 rounded-full">
                            {item.year}
                          </span>

                          <h3 className="text-2xl font-bold mt-3">
                            {item.title}
                          </h3>

                          <p className="text-sm opacity-90 mt-2">
                            {item.desc}
                          </p>
                        </div>

                        {/* HOVER GLOW */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-all duration-300" />
                      </div>
                    </motion.div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MilestoneTimeline;