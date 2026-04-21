import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Layout & Home
import Layout from "./component/Layout";
import Home from "./component/home/Homemain";

// About Us
import AboutHero from "./component/AboutUs/AboutHero";
import CompanyStory from "./component/AboutUs/CompanyStory";
import LeadershipGrid from "./component/AboutUs/LeadershipGrid";
import AwardsSection from "./component/AboutUs/AwardsSection";
import TestimonialsSection from "./component/AboutUs/TestimonialsSection";

// Products

import ProductFilter from "./component/Products/ProductFilter";
import ProductGrid from "./component/Products/ProductGrid";
import ProductCTA from "./component/Products/ProductCTA";

// Solutions - Solar EPC
import SolarEPCHero from "./component/Solutions/SolarEPC/SolarEPCHero";
import EPCServices from "./component/Solutions/SolarEPC/EPCServices";
import EPCProcess from "./component/Solutions/SolarEPC/EPCProcess";
import ProjectTypes from "./component/Solutions/SolarEPC/ProjectTypes";

// Solutions - Calculators
import SolarCalculator from "./component/home/SolarCalculator";
import EVHero from "./component/Solutions/EVCalculator/EVHero";
import EVCalcLayout from "./component/Solutions/EVCalculator/EVCalcLayout";

// Careers
import CareersHero from "./component/Careers/CareersHero";
import LifeAtCompany from "./component/Careers/LifeAtCompany";
import BenefitsSection from "./component/Careers/BenefitsSection";
import JobBoard from "./component/Careers/JobBoard";
import AppForm from "./component/Careers/AppForm";

// Blogs
import BlogHero from "./component/Blogs/BlogHero";
import BlogFilter from "./component/Blogs/BlogFilter";
import BlogGrid from "./component/Blogs/BlogGrid";

// Contact Us
import ContactHero from "./component/ContactUs/ContactHero";
import ContactForm from "./component/ContactUs/ContactForm";
import OfficeDetails from "./component/ContactUs/OfficeDetails";
import MapSection from "./component/ContactUs/MapSection";
import QuickActions from "./component/ContactUs/QuickActions";
import ProductsHero from "./component/Products/ProductsHero";

// --- Local Page Aggregators ---

const AboutUs = () => (
  <>
    <AboutHero />
    <CompanyStory />
    <LeadershipGrid />
    <AwardsSection />
    <TestimonialsSection />
  </>
);

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Solar Panels", "Inverters", "Batteries", "EV Chargers"];
  
  return (
    <>
      <ProductsHero />
      <ProductFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <ProductGrid products={[]} /> {/* Passes empty array for now */}
      <ProductCTA />
    </>
  );
};

const SolarEPC = () => (
  <>
    <SolarEPCHero />
    <EPCServices />
    <EPCProcess />
    <ProjectTypes />
  </>
);

const EVCalculator = () => (
  <>
    <EVHero />
    <EVCalcLayout />
  </>
);

const Careers = () => (
  <>
    <CareersHero />
    <LifeAtCompany />
    <BenefitsSection />
    <JobBoard />
    <AppForm />
  </>
);

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Solar", "Energy", "Tech", "News"];

  return (
    <>
      <BlogHero />
      <BlogFilter 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <BlogGrid posts={[]} setActiveCategory={setActiveCategory} />
    </>
  );
};

const ContactUs = () => (
  <>
    <ContactHero />
    <QuickActions />
    <section className="bg-slate-50/50 py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <OfficeDetails />
          <ContactForm />
        </div>
      </div>
    </section>
    <MapSection />
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions/solar-epc" element={<SolarEPC />} />
          <Route path="/solutions/solar-calculator" element={<SolarCalculator />} />
          <Route path="/solutions/ev-calculator" element={<EVCalculator />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
