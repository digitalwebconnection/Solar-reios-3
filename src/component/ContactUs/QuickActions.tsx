import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const QuickActions = () => {
  const actions = [
    { 
      href: "tel:+9141183116", 
      icon: <Phone size={28} />, 
      title: "Call Us", 
      desc: "Talk to our experts for a free consultation.", 
      val: "+91 11 4118 3116",
      theme: "blue"
    },
    { 
      href: "mailto:info@solarreios.com", 
      icon: <Mail size={28} />, 
      title: "Email Us", 
      desc: "Drop us a line and we'll get back shortly.", 
      val: "info@solarreios.com",
      theme: "slate"
    },
    { 
      href: "https://wa.me/91XXXXXXXXXX", 
      icon: <MessageCircle size={28} />, 
      title: "WhatsApp", 
      desc: "Quick chat support for immediate queries.", 
      val: "Chat with Us Now",
      theme: "green"
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {actions.map((action, idx) => (
          <motion.a 
            key={idx}
            href={action.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-10 md:p-14 bg-white border border-slate-100 rounded-[48px] text-center shadow-xl shadow-slate-200/40 hover:shadow-3xl hover:border-blue-600/30 transition-all duration-500 overflow-hidden"
          >
            {/* Hover Background Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className={`relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
              action.theme === 'blue' ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : 
              action.theme === 'slate' ? "bg-slate-900 text-white shadow-lg shadow-slate-200" : 
              "bg-green-600 text-white shadow-lg shadow-green-200"
            }`}>
              {action.icon}
            </div>

            <div className="relative z-10">
              <h4 className="text-2xl font-heading font-black text-slate-900 mb-3 uppercase tracking-tight flex items-center justify-center gap-2">
                {action.title}
                <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-blue-600" />
              </h4>
              <p className="text-slate-500 mb-8 text-sm font-medium leading-relaxed max-w-[200px] mx-auto">
                {action.desc}
              </p>
              <div className="pt-6 border-t border-slate-50">
                <span className={`block font-black uppercase tracking-[0.25em] text-[10px] ${
                  action.theme === 'blue' ? "text-blue-600" : 
                  action.theme === 'slate' ? "text-slate-900" : 
                  "text-green-600"
                }`}>
                  {action.val}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
