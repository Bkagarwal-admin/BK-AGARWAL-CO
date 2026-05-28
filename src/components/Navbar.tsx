import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",         href: "#"             },
  { label: "About Us",     href: "#about"        },
  { label: "Services",     href: "#services"     },
  { label: "Why Us",       href: "#why-us"       },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us",   href: "#contact"      },
] as const;

const GOLD   = "#D4AF37";
const GOLD_D = "#b8962e"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            {NAV_LINKS.map(({ label, href }) => (
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
            className={`md:hidden p-2 rounded transition-colors ${
              scrolled ? "hover:bg-[#D4AF37]/10" : "hover:bg-[#D4AF37]/10"
            }`}
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
          } bg-white/97 backdrop-blur-md border-t border-[#D4AF37]/20`}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-sans font-semibold text-[#b8962e] hover:text-[#D4AF37] transition-colors block py-1"
                >
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
