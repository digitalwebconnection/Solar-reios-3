import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const FlipCard = ({ title, content, image, cardVariants }: { title: string, content: string, image: string, cardVariants: Variants }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="h-90 w-full perspective-[1000px] group"
    >
      <motion.div
        variants={cardVariants}
        animate={isFlipped ? { rotateY: 180 } : { rotateY: 0 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        className="relative w-full h-full transform-3d cursor-pointer"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover  transition-all duration-500" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="w-12 h-1 bg-blue-600 mb-3 rounded-full" />
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">{title}</h2>
            <p className="text-blue-400 text-sm font-semibold tracking-widest mt-1">HOVER TO REVEAL</p>
          </div>
        </div>

        {/* BACK SIDE (Rotated 180deg) */}
        <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] rounded-2xl bg-white border-2 border-blue-600 p-10 flex flex-col justify-center shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-bl-full" />
          </div>
          
          <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
          <p className="text-[16px] leading-[1.8] text-gray-700">
            {content}
          </p>
          
          <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-sm">
            <span>OUR COMMITMENT</span>
            <div className="h-px flex-1 bg-blue-100" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LegacySection = () => {
  const textVariants: Variants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const cardEntranceVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
    }
  };

  return (
    <section className="py-4 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* HEADER */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h4 variants={textVariants} className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-3">
            Our Legacy
          </motion.h4>
          <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-black text-slate-900">
            How We <span className="text-blue-600">Started</span>
          </motion.h2>
        </motion.div>

        {/* FLIP CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          <FlipCard 
            title="Mission"
            image="https://img.theweek.in/content/dam/week/magazine/the-week/Current-affairs/2017/june/image/42-Gujarat-Solar-Park.jpg"
            cardVariants={cardEntranceVariants}
            content="To provide the most advanced cutting-edge technological and innovative solutions for a sustainable future. To empower our skilled workforce through knowledge sharing, associations, and collaborations to help society embrace the change of energy transition."
          />
          
          <FlipCard 
            title="Vision"
            image="https://imagevision.ai/wp-content/uploads/2023/11/Solar-Panel-Inspections.jpg"
            cardVariants={cardEntranceVariants}
            content='Our vision, "Produce Green to Live Green," is to lead the global transition to net-zero emissions. We are committed to creating and introducing world-class renewable energy solutions that eliminate reliance on fossil fuels.'
          />
        </div>

      </div>
    </section>
  );
};

export default LegacySection;