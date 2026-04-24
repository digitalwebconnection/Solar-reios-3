import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout & Home
import Layout from "./component/Layout";
import Home from "./component/home/Homemain";

// About Us
import AboutUsMain from "./component/AboutUs/AboutUsMain";

// Products
import ProductsMain from "./component/Products/ProductsMain";

// Solutions - Main Files
import SolarEPCMain from "./component/Solutions/SolarEPC/SolarEPCMain";
import SolarCalculatorMain from "./component/Solutions/SolarCalculator/SolarCalculatorMain";
import EVCalculatorMain from "./component/Solutions/EVCalculator/EVCalculatorMain";

// Careers - Main File
import CareersMain from "./component/Careers/CareersMain";

// Blogs - Main File
import BlogsMain from "./component/Blogs/BlogsMain";

// Contact Us
import ContactUsMain from "./component/ContactUs/ContactUsMain";
import WhatsAppChatbot from "./component/WhatsAppChatbot";

// --- Local Page Aggregators ---

const AboutUs = () => (
  <>
    <AboutUsMain/>
  </>
);

const Products = () => (
  <>
    <ProductsMain />
  </>
);

const SolarEPC = () => (
  <>
    <SolarEPCMain />
  </>
);

const SolarCalculator = () => (
  <>
    <SolarCalculatorMain />
  </>
);

const EVCalculator = () => (
  <>
    <EVCalculatorMain />
  </>
);

const Careers = () => (
  <>
    <CareersMain />
  </>
);

const Blogs = () => (
  <>
    <BlogsMain />
  </>
);

const ContactUs = () => (
  <>
    <ContactUsMain />
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
      <WhatsAppChatbot />
    </Router>
  );
}

export default App;
