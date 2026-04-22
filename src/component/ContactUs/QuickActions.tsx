import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const QuickActions = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-widest">
            Quick Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Reach Us Instantly
          </h2>
        </div>

        {/* ACTION STRIP */}
        <div className="bg-slate-50 rounded-2xl border border-gray-200 divide-y md:divide-y-0 md:divide-x flex flex-col md:flex-row overflow-hidden shadow-sm">

          {/* CALL */}
          <motion.a
            href="tel:+9141183116"
            whileHover={{ scale: 1.02 }}
            className="flex-1 p-6 flex items-center gap-4 hover:bg-white transition"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Phone size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">Call Us</p>
              <p className="text-sm text-gray-500">+91 11 4118 3116</p>
            </div>
          </motion.a>

          {/* EMAIL */}
          <motion.a
            href="mailto:info@solarreios.com"
            whileHover={{ scale: 1.02 }}
            className="flex-1 p-6 flex items-center gap-4 hover:bg-white transition"
          >
            <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Mail size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">Email Us</p>
              <p className="text-sm text-gray-500">info@solarreios.com</p>
            </div>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/91XXXXXXXXXX"
            whileHover={{ scale: 1.02 }}
            className="flex-1 p-6 flex items-center gap-4 hover:bg-white transition"
          >
            <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center">
              <MessageCircle size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">WhatsApp</p>
              <p className="text-sm text-gray-500">Chat with us instantly</p>
            </div>
          </motion.a>

        </div>

        {/* CTA BELOW */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow">
            Get Free Consultation →
          </button>
        </div>

      </div>
    </section>
  );
};

export default QuickActions;