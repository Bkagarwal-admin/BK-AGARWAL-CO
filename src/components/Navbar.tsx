import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data/services";

const NAV_LINKS = [
  { label: "Home",         href: "#"             },
  { label: "About Us",     href: "#about"        },
  { label: "Why Us",       href: "#why-us"       },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us",   href: "#contact"      },
] as const;

function selectService(index: number) {
  window.dispatchEvent(new CustomEvent("selectService", { detail: { index } }));
  // Give the event a tick to register before scrolling
  setTimeout(() => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [servicesOpen,   setServicesOpen]   = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-4 md:px-12">

          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group select-none">
            <img
              src="https://res.cloudinary.com/deyyfnfxq/image/upload/v1780005295/Screenshot_2026-03-27_at_7.40.54_AM-removebg-preview_uypeq3_okqfsg.png"
              alt="BK Agarwal & Co logo"
              className="h-10 w-auto object-contain select-none"
            />
            <div className="leading-none">
              <span className="block font-sans font-extrabold tracking-tight text-base text-slate-900 transition-colors duration-500">
                B K AGARWAL &amp; CO
              </span>
              <span
                className={`block text-[9px] font-mono tracking-[0.18em] uppercase mt-0.5 transition-colors duration-500 ${
                  scrolled ? "text-[#b8962e]" : "text-[#D4AF37]/80"
                }`}
              >
                Chartered Accountants
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">

            {/* Home */}
            <li>
              <a href="#" className="relative text-[11px] font-sans font-semibold tracking-widest uppercase text-slate-900 hover:text-slate-700 transition-colors duration-300 group">
                Home
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>

            {/* Services — with dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="relative flex items-center gap-1 text-[11px] font-sans font-semibold tracking-widest uppercase text-slate-900 hover:text-slate-700 transition-colors duration-300 group cursor-pointer"
              >
                Services
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden z-50"
                  >
                    {/* Arrow */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />

                    <div className="p-2">
                      <p className="px-3 pt-2 pb-1.5 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                        Service Categories
                      </p>
                      {SERVICES.map((s, i) => {
                        const Icon = s.icon;
                        return (
                          <button
                            key={s.id}
                            onClick={() => { selectService(i); setServicesOpen(false); }}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-slate-50 transition-colors duration-150 cursor-pointer group/item"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                            </div>
                            <span className="text-[12px] font-sans font-medium text-slate-700 group-hover/item:text-slate-900 transition-colors leading-snug">
                              {s.category}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Other links */}
            {NAV_LINKS.filter(l => l.label !== "Home").map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative text-[11px] font-sans font-semibold tracking-widest uppercase text-slate-900 hover:text-slate-700 transition-colors duration-300 group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded transition-colors hover:bg-[#D4AF37]/10"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-slate-900" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-screen" : "max-h-0"
          } bg-white backdrop-blur-md border-t border-[#D4AF37]/20`}
        >
          <ul className="flex flex-col px-6 py-4 gap-1">
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}
                className="text-sm font-sans font-semibold text-slate-700 hover:text-[#D4AF37] transition-colors block py-2">
                Home
              </a>
            </li>

            {/* Services with expandable sub-list on mobile */}
            <li>
              <button
                onClick={() => setMobileServices(v => !v)}
                className="w-full flex items-center justify-between py-2 text-sm font-sans font-semibold text-slate-700 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServices ? "rotate-180 text-[#D4AF37]" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileServices && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden pl-3 border-l-2 border-[#D4AF37]/30 ml-1 space-y-1 mb-1"
                  >
                    {SERVICES.map((s, i) => (
                      <li key={s.id}>
                        <button
                          onClick={() => { selectService(i); setMenuOpen(false); setMobileServices(false); }}
                          className="w-full text-left text-[12px] font-sans text-slate-600 hover:text-[#D4AF37] transition-colors py-1.5 cursor-pointer"
                        >
                          {s.category}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {NAV_LINKS.filter(l => l.label !== "Home").map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={() => setMenuOpen(false)}
                  className="text-sm font-sans font-semibold text-slate-700 hover:text-[#D4AF37] transition-colors block py-2">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  );
}
