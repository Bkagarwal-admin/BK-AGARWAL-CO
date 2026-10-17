import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import WhatsappCTA from "./components/WhatsappCTA";

const NAV_OFFSET = 80;

function Home() {
  const { hash } = useLocation();

  // When arriving at /#section (e.g. from the Careers page), scroll to it
  // after the sections have rendered.
  useEffect(() => {
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAFAFA] text-slate-900 overflow-x-hidden selection:bg-slate-900 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
        <WhatsappCTA />
      </div>
    </BrowserRouter>
  );
}
