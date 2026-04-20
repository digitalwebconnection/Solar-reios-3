import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const QuickActions = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
       <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              href: "tel:+9141183116", 
              icon: <Phone size={32} />, 
              title: "Call Us", 
              desc: "Talk to our experts for a free consultation.", 
              val: "+91 11 4118 3116",
              color: "blue"
            },
            { 
              href: "mailto:info@solarreios.com", 
              icon: <Mail size={32} />, 
              title: "Email Us", 
              desc: "Drop us a line and we'll get back shortly.", 
              val: "info@solarreios.com",
              color: "slate"
            },
            { 
              href: "https://wa.me/91XXXXXXXXXX", 
              icon: <MessageCircle size={32} />, 
              title: "WhatsApp", 
              desc: "Quick chat support for immediate queries.", 
              val: "Chat with Us",
              color: "green"
            },
          ].map((action, idx) => (
            <motion.a 
              key={idx}
              href={action.href}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="p-12 bg-white border border-slate-100 rounded-[48px] text-center shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-blue-600 transition-all group"
            >
               <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform ${
                 action.color === 'blue' ? "bg-blue-50 text-blue-600" : 
                 action.color === 'slate' ? "bg-slate-50 text-slate-900" : 
                 "bg-green-50 text-green-600"
               }`}>
                  {action.icon}
               </div>
               <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{action.title}</h4>
               <p className="text-slate-400 mb-6 text-sm font-medium">{action.desc}</p>
               <span className={`font-black uppercase tracking-widest text-[10px] ${
                 action.color === 'blue' ? "text-blue-600" : 
                 action.color === 'slate' ? "text-slate-900" : 
                 "text-green-600"
               }`}>{action.val}</span>
            </motion.a>
          ))}
       </div>
    </section>
  );
};

export default QuickActions;
