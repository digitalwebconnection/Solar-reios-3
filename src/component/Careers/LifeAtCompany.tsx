const LifeAtCompany = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
           <div>
             <p className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-2">Our Culture</p>
             <h2 className="text-4xl font-heading font-black text-slate-900 uppercase tracking-tight">Life at SolarReios</h2>
           </div>
           <p className="text-slate-500 max-w-md md:text-right font-medium text-sm leading-relaxed">Transparency, innovation, and a shared passion for a greener world define our workplace.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 h-150">
          <div className="col-span-2 row-span-2 rounded-[40px] overflow-hidden group border border-slate-100 shadow-xl">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Team Work" />
          </div>
          <div className="rounded-[40px] overflow-hidden group border border-slate-100 shadow-xl">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Office Culture" />
          </div>
          <div className="rounded-[40px] overflow-hidden group border border-slate-100 shadow-xl">
             <img src="https://images.unsplash.com/photo-1557426272-fc759fbbad95?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Meetings" />
          </div>
          <div className="col-span-2 rounded-[40px] overflow-hidden group h-70 border border-slate-100 shadow-xl">
             <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Office Events" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtCompany;
