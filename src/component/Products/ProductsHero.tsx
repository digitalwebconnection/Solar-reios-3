import { motion } from "framer-motion";

const ProductsHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://enpossibilities.com/assets/images/about/solar-product-distributors.webp"
          alt="Solar Products"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

      

        {/* HEADING */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Our <span className="text-blue-500">Products</span>
          </motion.h1>
        </div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 mt-4 text-lg"
        >
          Powering your future with innovative solar & energy solutions
        </motion.p>

        {/* CTA BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Explore Products
        </motion.button>

      </div>
    </section>
  );
};

export default ProductsHero;