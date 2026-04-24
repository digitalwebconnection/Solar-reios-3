import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-sm text-[#1E559D] font-semibold uppercase tracking-widest">
              Contact Us
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
              Let  Build Your <br /> Energy Solution
            </h2>

            <p className="text-gray-600 mt-6 max-w-md">
              Fill out the form and our team will get back to you with the best
              solution for your requirements.
            </p>

            <div className="mt-8 text-sm text-gray-500">
              Ã¢Å“â€ Quick response within 24 hours <br />
              Ã¢Å“â€ Expert consultation <br />
              Ã¢Å“â€ Customized solutions
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
              <input
                type="text"
                placeholder="City / State"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <textarea
              rows={4}
              placeholder="How can we help you? *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              required
            />

            <button className="w-full bg-[#1E559D] text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#153A7A] transition">
              Submit Message <Send size={16} />
            </button>

            <p className="text-xs text-gray-400 text-center">
              We respond within 24 business hours
            </p>
          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;