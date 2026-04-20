const MapSection = () => {
  return (
    <section className="h-[500px] w-full bg-slate-100 relative overflow-hidden">
       <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.197473729864!2d77.108605!3d28.710777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015c61300001%3A0xe1043fbb3644919d!2sCrown%20Heights!5e0!3m2!1sen!2sin!4v1713580000000!5m2!1sen!2sin"
         className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
         loading="lazy"
         title="Corporate Office"
       ></iframe>
       <div className="absolute top-10 right-10 bg-white p-8 rounded-[32px] shadow-2xl md:max-w-xs pointer-events-none border border-slate-100">
          <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Corporate HQ</h4>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Sector 10, Rohini, New Delhi</p>
       </div>
    </section>
  );
};

export default MapSection;
