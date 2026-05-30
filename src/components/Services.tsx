import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "../data/services";

const ACCORDION_KEY = (cat: number, item: number) => `${cat}-${item}`;

export default function Services() {
  const [activeCat, setActiveCat]   = useState(0);
  const [openKey,   setOpenKey]     = useState<string | null>(null);
  const sectionRef                  = useRef<HTMLElement>(null);

  // Listen for category selection dispatched by the Navbar dropdown
  useEffect(() => {
    const handler = (e: Event) => {
      const idx = (e as CustomEvent<{ index: number }>).detail.index;
      setActiveCat(idx);
      setOpenKey(null);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("selectService", handler);
    return () => window.removeEventListener("selectService", handler);
  }, []);

  const switchCategory = (idx: number) => {
    setActiveCat(idx);
    setOpenKey(null);
  };

  const toggleAccordion = (key: string) =>
    setOpenKey((prev) => (prev === key ? null : key));

  const cat = SERVICES[activeCat];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-8 h-px bg-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">Our Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-14"
        >
          What we{" "}
          <span className="font-serif italic font-normal text-slate-700">do</span>
        </motion.h2>

        {/* ── Master-Detail Layout ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">

          {/* ── LEFT SIDEBAR ────────────────────────────────────────────────── */}
          <nav className="lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100">

            {/* Mobile: horizontal scroll tabs */}
            <ul className="flex lg:hidden overflow-x-auto scrollbar-hide gap-1 p-3">
              {SERVICES.map((s, i) => (
                <li key={s.id} className="shrink-0">
                  <button
                    onClick={() => switchCategory(i)}
                    className={`relative px-4 py-2 rounded-lg text-[11px] font-sans font-semibold tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                      activeCat === i
                        ? "bg-slate-900 text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {s.category}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop: vertical list with animated pill */}
            <ul className="hidden lg:flex flex-col gap-1 p-3">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                const isActive = activeCat === i;
                return (
                  <li key={s.id} className="relative">
                    {isActive && (
                      <motion.div
                        layoutId="activeServicePill"
                        className="absolute inset-0 bg-slate-900 rounded-xl"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <button
                      onClick={() => switchCategory(i)}
                      className={`relative z-10 w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors duration-200 cursor-pointer ${
                        isActive ? "text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 shrink-0 ${isActive ? "text-[#D4AF37]" : "text-slate-400"}`}
                      />
                      <span className="text-[13px] font-sans font-semibold leading-snug">{s.category}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ── RIGHT DETAIL PANEL ──────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="p-6 md:p-10"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <cat.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-sans font-bold text-slate-900 leading-tight">{cat.category}</h3>
                    <p className="text-sm text-slate-500 font-sans mt-1 leading-relaxed">{cat.tagline}</p>
                  </div>
                </div>

                {/* Accordion Sub-Services */}
                <ul className="space-y-2">
                  {cat.items.map((item, j) => {
                    const key    = ACCORDION_KEY(activeCat, j);
                    const isOpen = openKey === key;
                    return (
                      <li key={key} className="rounded-xl border border-slate-100 overflow-hidden">
                        <button
                          onClick={() => toggleAccordion(key)}
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors duration-150 cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] font-mono text-slate-300 select-none">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[13px] sm:text-sm font-sans font-semibold text-slate-900">
                              {item.title}
                            </span>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.22 }}
                            className="shrink-0"
                          >
                            <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-slate-400"}`} />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-1">
                                <div className="ml-7 pl-3 border-l-2 border-[#D4AF37]/40">
                                  <p className="text-sm text-slate-600 font-sans leading-relaxed">{item.brief}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D4AF37] text-white font-sans text-xs font-bold tracking-wider hover:bg-[#b8962e] transition-colors duration-200 shadow-sm"
                  >
                    Enquire About This Service
                  </a>
                  <span className="text-xs text-slate-400 font-sans">
                    {cat.items.length} services in this category
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
