export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex justify-center">

          {/* Brand */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <img
                src="https://res.cloudinary.com/deyyfnfxq/image/upload/e_trim/v1791571060/Screenshot_2026-10-10_at_12.05.09_AM-removebg-preview_ebxoj0.png"
                alt="BK Agarwal & Co logo"
                className="h-8 w-[49px] object-contain"
              />
              <span className="font-sans font-extrabold text-slate-900 tracking-tight text-base">
                B K AGARWAL &amp; CO
              </span>
            </div>
            <p className="text-[10px] font-mono tracking-[0.18em] text-[#D4AF37] uppercase pl-11">
              Chartered Accountants
            </p>
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
