const clients = [
  { name: "HP", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F1.png&w=256&q=75" },
  { name: "Indian Oil", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F2.png&w=256&q=75" },
  { name: "Bharat Petroleum", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F3.png&w=256&q=75" },
  { name: "Indian Railway", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F4.png&w=256&q=75" },
  { name: "MP Urja Vikas", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F5.png&w=256&q=75" },
  { name: "Kempegowda Airport", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F6.png&w=256&q=75" },
  { name: "Nayara Energy", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F9.png&w=256&q=75" },
  { name: "Adani Gas", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F10.png&w=256&q=75" },
  { name: "TATA Power", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F11.png&w=256&q=75    " },
  { name: "TATA Motors", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F12.png&w=256&q=75" },
  { name: "MG", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F13.png&w=256&q=75" },
  { name: "Maruti Suzuki", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F14.png&w=256&q=75" },
  { name: "Airtel Foundation", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F15.png&w=256&q=75" },
  { name: "ITC Hotels", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F16.png&w=256&q=75" },
  { name: "Oberoi", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F17.png&w=256&q=75" },
  { name: "Ginger", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F18.png&w=256&q=75" },
  { name: "Electra EV", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F19.png&w=256&q=75" },
  { name: "StatIQ", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F20.png&w=256&q=75" },
  { name: "NCC", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F21.png&w=256&q=75" },
  { name: "Sublime Ventures", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F22.png&w=256&q=75" },
  { name: "SV Gold", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F23.png&w=256&q=75" },
  { name: "TCI Express", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F24.png&w=256&q=75" },
  { name: "Holiday Inn", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F26.png&w=256&q=75" },
   { name: "", logo: "https://www.servotech.in/_next/image?url=https%3A%2F%2Fwww.servotech.in%2Fblog%2Fwp-content%2Fuploads%2F2026%2F02%2F8.png&w=256&q=75" },
];

const ClientsSection = () => {
  return (
    <section className="bg-linear-to-b my-4 from-blue-900 to-blue-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-white mb-14">
          Our Clients
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">

          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-transparent border border-white/50 rounded-lg flex items-center justify-center p-2 h-28 transition hover:bg-white/10"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-full object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ClientsSection;