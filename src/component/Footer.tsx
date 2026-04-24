import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#000000] text-gray-300 pt-20 pb-10 relative overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-tr from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">

          {/* LOGO + ABOUT */}
          <div className="lg:col-span-2 ">
            <img
              src={logo} // <-- Replace with your logo path
              alt="Company Logo"
              className="h-20 mb-6"
            />
            {/* <h1 className=" text-5xl mb-10  font-bold">Solar Reios</h1> */}

            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Powering the future with smart energy solutions. Delivering
              innovation in solar, EV charging, and sustainable infrastructure
              across India.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-full hover:bg-[#1E559D] hover:scale-110 transition duration-300 cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              {[
                "About Us",
                "Leadership",
                "Projects",
                "Testimonials",
                "Awards",
              ].map((item, i) => (
                <li key={i} className="hover:text-[#1E559D] cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Solutions</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Solar Products",
                "EV Chargers",
                "Power Backup",
                "LED Solutions",
              ].map((item, i) => (
                <li key={i} className="hover:text-[#1E559D] cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact</h3>
            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3 hover:text-[#1E559D] transition">
                <Phone size={16} />
                <span>+91 4118 3116</span>
              </div>

              <div className="flex items-start gap-3 hover:text-[#1E559D] transition">
                <Mail size={16} />
                <span>info@company.com</span>
              </div>

              <div className="flex items-start gap-3 hover:text-[#1E559D] transition">
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </div>
            </div>

   
          </div>
        </div>

      

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>Ã‚Â© 2026 Servotech Renewable Power System Limited</p>

          <div className="flex gap-6">
            <span className="hover:text-[#1E559D] cursor-pointer">Privacy</span>
            <span className="hover:text-[#1E559D] cursor-pointer">Terms</span>
            <span className="hover:text-[#1E559D] cursor-pointer">Disclaimer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;