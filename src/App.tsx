import { useState } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Service } from "./types";

// ── Services data ────────────────────────────────────────────────────────────
const SERVICES: Service[] = [
  {
    id: "audit-1",
    title: "Statutory & Internal Audit",
    category: "Audit",
    description:
      "Independent, risk-based audit engagements for companies of all sizes — ensuring accuracy, credibility, and full regulatory alignment.",
    features: ["Statutory audit under Companies Act", "Tax audit (Sec 44AB)", "Internal control reviews"],
  },
  {
    id: "tax-1",
    title: "Direct & Indirect Taxation",
    category: "Tax",
    description:
      "End-to-end tax planning, advisory, and compliance across income tax, GST, TDS, and international tax assignments.",
    features: ["Income Tax returns & planning", "GST compliance & filing", "Transfer pricing advisory"],
  },
  {
    id: "comp-1",
    title: "Corporate Compliance & Secretarial",
    category: "Compliance",
    description:
      "ROC filings, company incorporation, annual compliances, and MCA advisory ensuring your company stays in good standing.",
    features: ["Company incorporation (MCA)", "ROC annual filings", "FEMA / RBI compliances"],
  },
  {
    id: "adv-1",
    title: "Advisory & Consulting",
    category: "Advisory",
    description:
      "Strategic financial advisory including business valuations, due diligence, restructuring, and start-up advisory.",
    features: ["Business valuations", "M&A due diligence", "Start-up & ESOP structuring"],
  },
];

const CATEGORIES = ["All", "Audit", "Tax", "Compliance", "Advisory"] as const;

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 overflow-x-hidden selection:bg-slate-900 selection:text-white">

      {/* ── Global Fixed Navbar ─────────────────────────────────────────── */}
      <Navbar />

      {/* ── 1. Hero (scroll-mapped video) ───────────────────────────────── */}
      <Hero />

      {/* ── 2. About Us ─────────────────────────────────────────────────── */}
      <About />

      {/* ── 3. Services Suite ───────────────────────────────────────────── */}
      <section id="services" className="py-24 sm:py-32 bg-[#FAFAFA] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-[#D4AF37]" />
                <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-slate-950 leading-[1.1]">
                Comprehensive{" "}
                <span className="font-serif italic font-normal text-slate-700">
                  advisory solutions
                </span>
              </h2>
            </div>

            {/* Filter Category Bar */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold border transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-slate-950 text-white border-slate-950"
                      : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col justify-between p-8 rounded-xl bg-white border border-slate-200/50 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Card Top */}
                  <div className="flex items-start justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#D4AF37]/10 text-[#b8962e]">
                      {service.category.toUpperCase()}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-sans font-bold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                  {service.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-2.5 text-xs text-slate-600 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. Why Us ───────────────────────────────────────────────────── */}
      <WhyUs />

      {/* ── 5. Testimonials ─────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── 6. Contact ──────────────────────────────────────────────────── */}
      <Contact />

      {/* ── 7. Footer ───────────────────────────────────────────────────── */}
      <Footer />

    </div>
  );
}
