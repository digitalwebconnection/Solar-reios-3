import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Solar Sales Executive",
    location: "Ahmedabad",
    type: "Full Time",
    experience: "1-3 Years",
  },
  {
    title: "Solar Design Engineer",
    location: "Ahmedabad",
    type: "Full Time",
    experience: "2-5 Years",
  },
  {
    title: "Site Installation Supervisor",
    location: "Gujarat",
    type: "Full Time",
    experience: "3-6 Years",
  },
  {
    title: "Electrical Engineer (Solar Projects)",
    location: "Ahmedabad",
    type: "Full Time",
    experience: "2-4 Years",
  },
  {
    title: "Solar Project Manager",
    location: "Gujarat",
    type: "Full Time",
    experience: "5+ Years",
  },
  {
    title: "Business Development Executive (Solar)",
    location: "Remote / Field",
    type: "Full Time",
    experience: "1-4 Years",
  },
];
export default function CareersSection() {
  return (
    <section className=" py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team 
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            WeÃ¢â‚¬â„¢re always looking for passionate people who want to grow, innovate,
            and make an impact.
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-400"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h3>
                <Briefcase className="text-[#1E559D]" />
              </div>

              <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <MapPin size={16} /> {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} /> {job.type}
                </div>
                <div>Experience: {job.experience}</div>
              </div>

              <button className="flex items-center gap-2 text-white bg-[#1E559D] hover:bg-[#153A7A] px-5 py-2 rounded-xl transition-all">
                Apply Now <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-4">
            DidnÃ¢â‚¬â„¢t find a suitable role?
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all">
            Send Your Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}
