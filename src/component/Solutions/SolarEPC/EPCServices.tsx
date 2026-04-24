import { motion } from "framer-motion";
import { CheckCircle2} from "lucide-react";


const EPCServices = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-28 bg-linear-to-b from-white via-slate-50 to-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#1E559D]/100/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">

        {/* SECTION 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div {...fadeUp}>

            <h2 className="text-02xl md:text-4xl font-black text-[#000000] mb-6 leading-tight">
              Complete Solar EPC <br />
              <span className="text-[#1E559D]">From Concept to Connection</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              We manage your entire solar journey Ã¢â‚¬â€ design, procurement, installation,
              and commissioning Ã¢â‚¬â€ ensuring maximum ROI and zero hassle.
            </p>

            <div className="space-y-4">
              {[
                "Custom system design for maximum output",
                "Tier-1 solar components & trusted sourcing",
                "Safe & efficient installation process",
                "Grid connection & full commissioning"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <CheckCircle2 className="text-[#1E559D] group-hover:scale-110 transition" />
                  <span className="text-slate-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE WITH EFFECT */}
          <motion.div {...fadeUp} className="relative group">

            {/* GLOW BORDER */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-blue-500 rounded-[40px] blur opacity-30 group-hover:opacity-60 transition"></div>

            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
              alt="Solar EPC"
              className="relative rounded-xl shadow-2xl h-120 w-full object-cover"
            />

            {/* FLOATING BADGE */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
              <p className="text-sm font-bold text-[#000000]">25+ Years Performance</p>
              <p className="text-xs text-slate-500">Guaranteed Output</p>
            </div>
          </motion.div>
        </div>

   
      </div>
    </section>
  );
};

export default EPCServices;