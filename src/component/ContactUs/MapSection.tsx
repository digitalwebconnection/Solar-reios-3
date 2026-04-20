import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const MapSection = () => {
  return (
    <section className="h-[600px] w-full bg-slate-100 relative overflow-hidden">
        {/* Map iframe */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.197473729864!2d77.108605!3d28.710777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015c61300001%3A0xe1043fbb3644919d!2sCrown%20Heights!5e0!3m2!1sen!2sin!4v1713580000000!5m2!1sen!2sin"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 hover:opacity-100 ease-in-out"
          loading="lazy"
          title="Corporate Office"
        ></iframe>

        {/* Floating Info Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-10 right-4 md:right-10 bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[40px] shadow-3xl max-w-[320px] border border-white/50"
        >
           <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
             <MapPin size={24} />
           </div>
           
           <h4 className="font-heading font-black text-2xl text-slate-900 mb-2 uppercase tracking-tight">Corporate HQ</h4>
           <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.2em] mb-6">Sector 10, Rohini, New Delhi</p>
           
           <div className="space-y-4 mb-8">
             <p className="text-sm text-slate-500 font-medium leading-relaxed">
               802, Crown Heights, Near Rithala Metro, New Delhi, 110085
             </p>
           </div>

           <a 
             href="https://maps.app.goo.gl/91XXXXXXXXXX" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-colors shadow-xl group"
           >
             <Navigation size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             Get Directions
           </a>
        </motion.div>

        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/10 to-transparent"></div>
    </section>
  );
};

export default MapSection;
