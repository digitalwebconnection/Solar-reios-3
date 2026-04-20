<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone,
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  TrendingUp,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
=======
import { useEffect, useState } from "react";
import { ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> 06b67df3eb792ae1d6b2b25c5e70d5466a1339d5

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
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
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Stock Ticker Bar */}
      <div className="bg-slate-900 text-white text-[10px] py-1 px-4 md:px-8 hidden md:block border-b border-white/5 uppercase tracking-widest font-black">
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
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-blue-500" />
              <span>+91-11-4118 3116</span>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-blue-400 transition-colors"><Icon size={12} /></a>
              ))}
            </div>
=======
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

>>>>>>> 06b67df3eb792ae1d6b2b25c5e70d5466a1339d5
          </div>
        </div>
      </div>

      {/* Main Navbar */}
<<<<<<< HEAD
      <nav 
        className={`transition-all duration-500 py-4 px-4 md:px-8 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-2xl py-3" : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <Zap className="text-white" size={24} fill="white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-black text-xl tracking-tighter text-slate-900">SOLARREIOS</span>
              <span className="text-[10px] font-black text-blue-600 tracking-[3px] uppercase">Powering India</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 font-heading text-[13px] font-black uppercase tracking-widest text-slate-900">
            {navLinks.map((link, idx) => (
              <li key={idx} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer py-2 hover:text-blue-600 transition-colors">
                    {link.title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white shadow-2xl rounded-3xl border border-slate-100 w-64 py-4 overflow-hidden">
                        {link.dropdown.map((sub, sidx) => (
                          <Link 
                            key={sidx} 
                            to={sub.path}
                            className={`block px-8 py-4 hover:bg-slate-50 hover:text-blue-600 transition-colors font-bold normal-case text-sm ${
                              location.pathname === sub.path ? "text-blue-600 bg-blue-50" : "text-slate-600"
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
                    className={`py-2 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all ${
                      location.pathname === link.path 
                        ? "text-blue-600 after:w-full" 
                        : "hover:text-blue-600 after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-200 active:scale-95"
            >
              Get Free Quote
            </Link>
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-900 p-2"
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
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                  <Zap className="text-white" size={24} fill="white" />
                </div>
                <span className="font-heading font-black text-xl text-slate-900">SOLARREIOS</span>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-slate-50 rounded-2xl text-slate-900"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-grow">
              <ul className="space-y-6 text-2xl font-heading font-black text-slate-900 uppercase tracking-tighter">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    {link.dropdown ? (
                      <div>
                        <button 
                          onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                          className="flex items-center justify-between w-full"
                        >
                          {link.title} <ChevronDown className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180 text-blue-600" : ""}`} />
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
                className="bg-blue-600 text-white text-center py-5 rounded-3xl font-black text-xl shadow-2xl shadow-blue-300"
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
=======
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
>>>>>>> 06b67df3eb792ae1d6b2b25c5e70d5466a1339d5
    </header>
  );
};

export default Header;