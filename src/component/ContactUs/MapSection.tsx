
const MapSection = () => {
  return (
    <section className="h-100 w-full bg-slate-100 relative overflow-hidden">
        {/* Map iframe */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.197473729864!2d77.108605!3d28.710777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015c61300001%3A0xe1043fbb3644919d!2sCrown%20Heights!5e0!3m2!1sen!2sin!4v1713580000000!5m2!1sen!2sin"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 hover:opacity-100 ease-in-out"
          loading="lazy"
          title="Corporate Office"
        ></iframe>

  

        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/10 to-transparent"></div>
    </section>
  );
};

export default MapSection;
