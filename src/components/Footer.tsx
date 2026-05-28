const FOOTER_LINKS = [
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms of Service",  href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* Left: Brand */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <img
                src="https://res.cloudinary.com/deyyfnfxq/image/upload/v1780005295/Screenshot_2026-03-27_at_7.40.54_AM-removebg-preview_uypeq3_okqfsg.png"
                alt="BK Agarwal & Co logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-sans font-extrabold text-slate-900 tracking-tight text-base">
                B K AGARWAL &amp; CO
              </span>
            </div>
            <p className="text-[10px] font-mono tracking-[0.18em] text-[#D4AF37] uppercase pl-11">
              Chartered Accountants
            </p>
          </div>

          {/* Center: ICAI Compliance Tag */}
          <div className="text-center">
            <p className="text-xs font-mono text-slate-500">
              Firm Registration Number (FRN):{" "}
              <span className="text-slate-700 font-semibold">[Insert FRN Here]</span>
            </p>
            <p className="text-[10px] font-mono text-slate-400 mt-0.5 tracking-wider">
              Institute of Chartered Accountants of India
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs font-sans text-slate-500 hover:text-slate-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-mono text-slate-400 tracking-wide">
            &copy; 2026 B K AGARWAL &amp; CO. All Rights Reserved.
          </p>
          <p className="text-[11px] font-mono text-slate-300 tracking-widest uppercase">
            Professional. Trusted. Precise.
          </p>
        </div>
      </div>

    </footer>
  );
}
