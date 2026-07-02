import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappCTA from "./components/WhatsappCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 overflow-x-hidden selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsappCTA />
    </div>
  );
}
