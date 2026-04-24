import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import video from "../../assets/5.mp4"
const expertisePoints = [
  "10+ Years of Proven Excellence in Solar EPC & Renewable Projects.",
  "Successfully Delivered Projects Across Residential, Commercial & Industrial Segments.",
  "Dedicated In-House Engineering, Procurement & Execution Teams.",
  "Advanced Technology Integration for Maximum Energy Efficiency.",
  "Strict Quality Control & Safety Compliance Standards.",
  "Strong Government Liaisoning & Statutory Approval Expertise.",
  "Strategic Partnerships with Globally Recognized Tier-1 Manufacturers.",
  "Robust Supply Chain & Logistics Network for Timely Project Completion.",
  "Comprehensive After-Sales Service & 24/7 Technical Support.",
];
const ExpertiseSection = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side - Map */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-sm object-contain"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-2">
              Our <span className="text-[#1E559D]">Expertise</span>
            </h2>

            <ul className="space-y-5">
              {expertisePoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 group"
                >
                  <CheckCircle
                    size={20}
                    className="text-[#1E559D] mt-1 group-hover:scale-110 transition"
                  />
                  <span className="leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;