import { useEffect, useState } from "react";
import { ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80  backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm text-gray-700 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-6 text-xs">

            <div className="flex items-center gap-2 hover:text-blue-600 transition">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-2 hover:text-blue-600 transition">
              <Mail size={14} />
              <span>info@solarreios.com</span>
            </div>

            <div className="flex items-center gap-2 hover:text-blue-600 transition">
              <MapPin size={14} />
              <span>Ahmedabad, India</span>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 transition-all duration-300">

        {/* Logo */}
        <div className="flex items-center transform hover:scale-105 transition duration-300">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">

          {["About Us", "Products", "Solutions", "Media"].map((item, i) => (
            <div
              key={i}
              className="relative group cursor-pointer flex items-center gap-1"
            >
              <span className="transition duration-300 group-hover:text-blue-600">
                {item}
              </span>
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          {["Investors", "Careers", "Contact"].map((item, i) => (
            <div
              key={i}
              className="relative group cursor-pointer"
            >
              <span className="transition duration-300 group-hover:text-blue-600">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          {/* Animated Button */}
          <button className="relative overflow-hidden bg-black text-white px-6 py-2 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105">
            <span className="relative z-10">Shop Now</span>
            <span className="absolute inset-0 bg-blue-600 translate-y-full hover:translate-y-0 transition-all duration-300"></span>
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Header;