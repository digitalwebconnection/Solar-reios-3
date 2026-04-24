import { motion } from "framer-motion";


const RAndCHm = () => {

  return (
    <section className="relative bg-white py-4 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#1E559D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-[#1E559D]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4"
          >
            Industrial & Commercial <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-500">
              Solar Energy Services
            </span>
          </motion.h1>
        </div>

        {/* Residential Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-12">
          {/* Image with Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/5 relative"
          >
            <div className="overflow-hidden shadow-blue-100">
              <img
                src="https://www.somayasolar.com/assets/img/product/somaya-solar-solutions-solar-projects-installation-and-commissioning-iandc-a33.webp"
                alt="Residential Solar"
                className="w-full h-80 object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Empower Your Home
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Reduce electricity bills and increase property value with
              high-performance rooftop solar systems. Our residential solutions deliver 
               sustainable energy independence for modern families.
            </p>
            
           

            <button className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-[#153A7A] transition-all duration-300 shadow-lg hover:shadow-blue-200">
              Explore Residential
              <div className="w-6 h-px bg-white group-hover:w-8 transition-all"></div>
            </button>
          </motion.div>
        </div>

        {/* Commercial Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/5 relative"
          >
            <div className="overflow-hidden ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwalPnUeDDLfSJwF55PJgWfhp4a0dM4C6Dg&s"
                alt="Commercial Solar"
                className="w-full h-80 object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Scalable Enterprise Power
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Optimize operational costs with scalable solar power systems
              tailored for industrial facilities. Our turnkey EPC expertise ensures 
              seamless project execution and compliance.
            </p>

          

            <button className="group flex items-center gap-3 px-8 py-4 bg-[#153A7A] text-white rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg shadow-blue-100">
              Commercial Solutions
              <div className="w-6 h-px bg-white group-hover:w-8 transition-all"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RAndCHm;