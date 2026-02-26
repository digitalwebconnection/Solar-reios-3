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

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#0f172a] via-[#111827] to-[#1e293b] mt-20 text-gray-300 pt-16 pb-8 relative">

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* About */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">About Us</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Awards & Felicitations",
              "Our Capabilities",
              "Our Company",
              "Leadership",
              "Projects",
              "Testimonials",
            ].map((item, i) => (
              <li key={i} className="hover:text-blue-400 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Products</h3>
          <ul className="space-y-3 text-sm">
            {["EV Charger", "Solar Products", "Power & Backup", "LEDs"].map(
              (item, i) => (
                <li key={i} className="hover:text-blue-400 cursor-pointer transition">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Solar Calculator",
              "EV Calculator",
              "EV Charging App",
              "Vendor Registration",
              "Site Map",
            ].map((item, i) => (
              <li key={i} className="hover:text-blue-400 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3 hover:text-blue-400 transition">
              <Phone size={16} />
              <span>+91 4118 3116</span>
            </div>
            <div className="flex items-start gap-3 hover:text-blue-400 transition">
              <Mail size={16} />
              <span>info@company.com</span>
            </div>
            <div className="flex items-start gap-3 hover:text-blue-400 transition">
              <MapPin size={16} />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Follow Us</h3>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="p-3 bg-white/10 rounded-full hover:bg-blue-600 hover:scale-110 transition duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              )
            )}
          </div>

          {/* Newsletter */}
          <div className="mt-8">
            <p className="text-sm mb-3 text-gray-400">
              Subscribe to our newsletter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-l-md bg-white/10 border border-white/20 text-sm focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>
            © 2026 Servotech Renewable Power System Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-blue-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-blue-400 cursor-pointer">Legal Disclaimer</span>
            <span className="hover:text-blue-400 cursor-pointer">Terms of Use</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;