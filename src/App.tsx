import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SolarEPC from "./pages/solutions/SolarEPC";
import SolarCalculator from "./pages/solutions/SolarCalculator";
import EVCalculator from "./pages/solutions/EVCalculator";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import "./App.css";

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
