import { motion } from "framer-motion";

const ProductsHero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Cinematic Zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://www.electronicafinance.com/wp-content/uploads/2025/11/Is-the-Government-Really-Covering-the-Installation-Cost-for-Solar-Panel-Systems.docx2_.png"
          alt="Background"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center px-4">
        {/* Simple Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="h-1 bg-blue-500 mx-auto mb-8"
        />

        {/* Text Mask Animation */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Our  Products
          </motion.h1>
        </div>
        </div>
        <section className="relative h-150 flex items-center overflow-hidden bg-blue-500 ">
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-white">
            <h1 className="text-5xl md:text-8xl font-heading font-black text-slate-900 leading-tight">Our Products</h1>

          </div>

        </section>
        </section>
        );
};

        export default ProductsHero;