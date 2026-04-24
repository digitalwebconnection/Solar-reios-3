import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Send } from "lucide-react";

const AppForm = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white  "
        >

          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#000000]">
              Apply for a Position
            </h2>
            <p className="text-slate-500 mt-2">
              Fill out the form and our team will get back to you.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-8">

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                placeholder="Email Address *"
                className="w-full border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <select
                className="w-full border border-slate-200 rounded-lg p-4 text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E559D]"
              >
                <option>Select Department</option>
                <option>Operations</option>
                <option>Sales</option>
                <option>Engineering</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* MESSAGE */}
            <textarea
      
              placeholder="Why should we hire you?"
              className="w-full border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* RESUME UPLOAD */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Upload Resume (PDF)
              </label>

              <label className="flex items-center justify-between border-2 border-dashed border-slate-300 rounded-lg p-4 cursor-pointer hover:border-[#1E559D] transition">
                <div className="flex items-center gap-3 text-slate-500">
                  <Upload size={18} />
                  <span>
                    {fileName ? fileName : "Choose file or drag & drop"}
                  </span>
                </div>

                <span className="text-xs text-slate-400">
                  PDF only
                </span>

                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full bg-[#1E559D] hover:bg-[#153A7A] text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition"
            >
              Submit Application <Send size={18} />
            </button>

          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default AppForm;