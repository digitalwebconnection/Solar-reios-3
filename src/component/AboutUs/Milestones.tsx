import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2004",
    title: "Company Founded",
    desc: "Entered the industry with Sine-Wave inverters.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    year: "2010",
    title: "Product Expansion",
    desc: "Launched LED lighting and solar solutions.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    year: "2017",
    title: "Stock Market Listing",
    desc: "Listed on NSE — major milestone.",
    image: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9",
  },
  {
    year: "2020",
    title: "COVID Response",
    desc: "Supplied oxygen & UV products nationwide.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    year: "Present",
    title: "Future Ready",
    desc: "Innovating solar & EV charging.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
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
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Our <span className="text-blue-600">Journey</span>
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
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 origin-top hidden md:block"
          />

          <div className="space-y-5">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="flex flex-col md:flex-row items-center relative">

                  {/* DOT */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg z-20" />

                  <div className={`flex w-full items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                    
                    <div className="hidden md:block w-1/2" />

                    {/* CARD */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                      className="w-full md:w-1/2 px-6"
                    >
                      <div className="group relative rounded-3xl overflow-hidden shadow-lg">

                        {/* IMAGE */}
                        <img
                          src={item.image}
                          className="w-full h-44 object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* GRADIENT OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* CONTENT */}
                        <div className="absolute bottom-0 p-6 text-white">
                          <span className="text-sm font-bold bg-blue-600 px-3 py-1 rounded-full">
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
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-3xl transition-all duration-300" />
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