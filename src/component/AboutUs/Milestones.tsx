import { motion } from "framer-motion";

const milestones = [
  {
    year: "2004",
    title: "Company Founded",
    desc: "Entered the industry with Sine-Wave inverters for domestic and commercial use."
  },
  {
    year: "2010",
    title: "Product Expansion",
    desc: "Launched LED lighting solutions, Solar Street Lights, and Hybrid Inverters."
  },
  {
    year: "2017",
    title: "Stock Market Listing",
    desc: "Listed on the National Stock Exchange (NSE), marking a major milestone."
  },
  {
    year: "2020",
    title: "COVID Response",
    desc: "Supplied Oxygen Concentrators and UV-C disinfectant products nationwide."
  },
  {
    year: "Present",
    title: "Future Ready",
    desc: "Driving innovation in solar and EV charging solutions for a sustainable future."
  },
];

const MilestoneTimeline = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-slate-500 mt-4">
            Milestones that shaped our growth
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative overflow-x-auto">
          
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200" />

          <div className="flex items-center gap-16 min-w-[900px] px-4">

            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center w-60"
              >

                {/* Top Card (even) */}
                {index % 2 === 0 && (
                  <div className="mb-12 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition text-center">
                    <p className="text-blue-600 font-semibold text-sm">{item.year}</p>
                    <h4 className="font-bold text-slate-900 text-base mt-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-2">{item.desc}</p>
                  </div>
                )}

                {/* Bottom Card (odd) */}
                {index % 2 !== 0 && (
                  <div className="mt-12 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition text-center">
                    <p className="text-blue-600 font-semibold text-sm">{item.year}</p>
                    <h4 className="font-bold text-slate-900 text-base mt-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-2">{item.desc}</p>
                  </div>
                )}

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default MilestoneTimeline;