import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const WhoWeAre = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  } as const;

  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT → CONTENT */}
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-5">
              <Building2 size={18} />
              <span className="uppercase tracking-widest text-xs">Who we are</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              Driving Change <br />
              <span className="text-blue-600">As A Disruptor</span>
            </h2>

            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                Servotech Renewable Power System Ltd. (NSE: SERVOTECH), a leading Indian clean energy solutions provider, specializes in solar innovations and EV charging solutions.
              </p>

              <p>
                With a pan-India presence, agile manufacturing, and strong R&D capabilities, Servotech is driving India’s transition toward a sustainable, energy-independent, and technologically empowered future.
              </p>

              <p>
                Through continuous innovation, strategic collaborations, and large-scale deployments, the company delivers reliable, high-performance solutions that support the nation’s clean energy goals.
              </p>
            </div>
          </motion.div>

          {/* RIGHT → IMAGE */}
          <motion.div {...fadeIn} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-orange-400/20 blur-2xl rounded-[40px]" />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
              className="relative shadow-2xl object-cover h-[520px] w-full"
              alt="Team"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;