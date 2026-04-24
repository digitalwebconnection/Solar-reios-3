import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const FlipCard = ({
  title,
  content,
  image,
  cardVariants,
}: {
  title: string;
  content: string;
  image: string;
  cardVariants: Variants;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="h-80 w-full perspective-[1000px] group"
    >
      <motion.div
        variants={cardVariants}
        animate={isFlipped ? { rotateY: 180 } : { rotateY: 0 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        className="relative w-full h-full transform-3d cursor-pointer"
      >
        {/* FRONT */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-8 left-8">
            <div className="w-12 h-1 bg-[#1E559D] mb-3 rounded-full" />
            <h2 className="text-3xl font-semibold text-white">{title}</h2>
            <p className="text-[#1E559D] text-sm font-medium mt-1">
              Discover more
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 w-full h-full backface-hidden transform rotate-y-180 rounded-2xl bg-white border border-[#1E559D] p-8 flex flex-col justify-center shadow-xl">
          <h2 className="text-2xl font-semibold text-[#1E559D] mb-4">
            {title}
          </h2>

          <p className="text-[15px] leading-[1.7] text-gray-700 whitespace-pre-line">
            {content}
          </p>

        

          {/* Bottom line */}
          <div className="mt-6 flex items-center gap-2 text-[#1E559D] text-xs font-semibold">
            <span>Our Commitment</span>
            <div className="h-px flex-1 bg-[#1E559D]/20" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LegacySection = () => {
  const textVariants: Variants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const cardEntranceVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* HEADER */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h4
            variants={textVariants}
            className="text-sm font-medium text-[#1E559D] mb-3"
          >
            Our Legacy
          </motion.h4>

          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl font-semibold text-[#000000]"
          >
            How We <span className="text-[#1E559D]">Started</span>
          </motion.h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          <FlipCard
            title="Mission"
  image="https://lh6.googleusercontent.com/proxy/qHDMgz_31WtRAe_iFrQHlZQk9QkVXCHbZjlRkj0esVBwgbSlhVvDuygsj0_wWYDxhQwbAlFOnYwBKQQe9i3u_GJqhaUdEW_hfm5LekDYz85EgRz7sg"
            cardVariants={cardEntranceVariants}
            content={`We donÃ¢â‚¬â„¢t just install solar Ã¢â‚¬â€ we engineer long-term energy independence.

Ã¢â‚¬Â¢ Deliver high-performance solar systems with maximum ROI  
Ã¢â‚¬Â¢ Reduce operational costs for industries & businesses  
Ã¢â‚¬Â¢ Accelerate India  shift toward clean, reliable energy  

Every project we build is designed for efficiency, durability, and measurable savings.`}
          />

          <FlipCard
            title="Vision"
            image="https://thumbs.dreamstime.com/b/our-vision-drawn-white-brick-wall-d-inscription-modern-illustation-blue-arrow-hand-icons-around-brickwall-89018617.jpg"
            cardVariants={cardEntranceVariants}
            content={`Clean energy isnÃ¢â‚¬â„¢t the future Ã¢â‚¬â€ it  the present weÃ¢â‚¬â„¢re building.

Ã¢â‚¬Â¢ Become a leading force in India  renewable energy revolution  
Ã¢â‚¬Â¢ Enable businesses to achieve net-zero goals faster  
Ã¢â‚¬Â¢ Create scalable solar solutions that grow with your needs  

Our vision is simple: smarter energy, stronger businesses, greener planet.`}
          />
        </div>
      </div>
    </section>
  );
};

export default LegacySection;