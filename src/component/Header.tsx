import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Zap,
  TrendingUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  }, [location]);

  const navLinks = [
    { title: "About Us", path: "/about" },
    { title: "Products", path: "/products" },
    {
      title: "Solutions",
      path: "#",
      dropdown: [
        { title: "Solar EPC", path: "/solutions/solar-epc" },
        { title: "Solar Calculator", path: "/solutions/solar-calculator" },
        { title: "EV Calculator", path: "/solutions/ev-calculator" },
      ]
    },
    { title: "Careers", path: "/careers" },
    { title: "Blogs", path: "/blogs" },
  ];

  const stockTicker = [
    { label: "SOLARREIOS", value: "245.10", change: "+4.2%", up: true },
    { label: "NIFTY ENR", value: "32,150.50", change: "+1.2%", up: true },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      {/* Top Bar / Stock Ticker */}
      <div className="bg-[#000000] text-white text-[10px] py-2 px-4 md:px-8 hidden md:block border-b border-white/5 uppercase tracking-widest font-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 overflow-hidden">
            {stockTicker.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 border-r border-white/10 pr-6">
                <span className="text-slate-400">{item.label}</span>
                <span className="font-black">{item.value}</span>
                <span className={item.up ? "text-green-400" : "text-red-400"}>{item.change}</span>
                <TrendingUp size={10} className="text-green-400" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-[#1E559D] transition-colors cursor-pointer">
              <Phone size={12} className="text-[#1E559D]" />
              <span>+91-11-4118 3116</span>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6 text-slate-400">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-[#1E559D] transition-colors"><Icon size={12} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-500 py-4 px-4 md:px-8 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-2xl py-3 border-b border-slate-100" : "bg-white py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center  group">
            <img src={logo} alt="" className="h-15" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-800">
            {navLinks.map((link, idx) => (
              <li key={idx} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer py-2 hover:text-[#1E559D] transition-colors group">
                    {link.title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white shadow-2xl rounded-3xl border border-slate-100 w-64 py-4 overflow-hidden">
                        {link.dropdown.map((sub, sidx) => (
                          <Link
                            key={sidx}
                            to={sub.path}
                            className={`block px-8 py-4 hover:bg-slate-50 hover:text-[#1E559D] transition-colors font-bold normal-case text-sm ${location.pathname === sub.path ? "text-[#1E559D] bg-[#1E559D]/5" : "text-slate-600"
                              }`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`py-2 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#1E559D] after:transition-all ${location.pathname === link.path
                      ? "text-[#1E559D] after:w-full"
                      : "hover:text-[#1E559D] after:w-0 hover:after:w-full"
                      }`}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
            <Link
              to="/contact"
              className="bg-[#1E559D] text-white px-10 py-4 rounded-2xl hover:bg-[#000000] transition-all shadow-xl shadow-[#1E559D]/30 active:scale-95 text-[11px] font-black uppercase tracking-widest"
            >
              Get Free Quote
            </Link>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#000000] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-60 lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#000000] rounded-xl flex items-center justify-center">
                  <Zap className="text-white" size={24} fill="white" />
                </div>
                <span className="font-heading font-black text-xl text-[#000000]">SOLARREIOS</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-slate-50 rounded-2xl text-[#000000]"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="grow">
              <ul className="space-y-6 text-2xl font-heading font-black text-[#000000] uppercase tracking-tighter">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                          className="flex items-center justify-between w-full"
                        >
                          {link.title} <ChevronDown className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180 text-[#1E559D]" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {isSolutionsOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-slate-50 rounded-3xl mt-4 space-y-4 px-6 overflow-hidden"
                            >
                              <li className="pt-6"></li>
                              {link.dropdown.map((sub, sidx) => (
                                <li key={sidx}>
                                  <Link
                                    to={sub.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg text-slate-500 font-bold normal-case block"
                                  >
                                    {sub.title}
                                  </Link>
                                </li>
                              ))}
                              <li className="pb-6"></li>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col gap-6">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#1E559D] text-white text-center py-5 rounded-3xl font-black text-xl shadow-2xl shadow-[#1E559D]/40"
              >
                Get Free Quote
              </Link>
              <div className="flex justify-center gap-8 text-slate-300">
                <Facebook /> <Twitter /> <Linkedin /> <Instagram />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;