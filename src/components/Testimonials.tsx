import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTilt } from "../hooks/useTilt";

// ── Add more testimonials here ──────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:  "As a first-time founder, I had very little understanding of compliance requirements. BKA held our hand right from company incorporation, ESOP structuring, and various tax registration to our statutory audit. They are true business partners.",
    author: "Saurabh",
    role:   "CEO & Founder",
    company: "Start-up Client",
  },
  {
    quote:  "BKA has been our trusted compliance partner for over five years. Their expertise in corporate taxation and regulatory filings has saved us countless hours and ensured we've never missed a deadline. Highly professional team.",
    author: "Ramesh Nair",
    role:   "CFO",
    company: "Listed Manufacturing Company",
  },
  {
    quote:  "The team at BK Agarwal & Co. provided exceptional guidance during our merger and acquisition process. Their due diligence work and balance-sheet advisory were thorough, accurate, and delivered well within timelines.",
    author: "Priya Mehta",
    role:   "Director – Finance",
    company: "MNC Subsidiary",
  },
  {
    quote:  "We have been working with BKA for our GST and income tax compliance for three years. They are proactive, responsive, and always keep us updated on regulatory changes that affect our business. Truly reliable advisors.",
    author: "Arjun Sharma",
    role:   "Managing Director",
    company: "Infrastructure Group",
  },
];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [index, setIndex]       = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex(next);
  }, []);

  const prev = () => {
    const next = (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    goTo(next, -1);
  };

  const next = () => {
    const next = (index + 1) % TESTIMONIALS.length;
    goTo(next, 1);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index]);

  const current = TESTIMONIALS[index];
  const { ref: cardRef, onMouseMove, onMouseLeave } = useTilt(6, 1.01);

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d * 48 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d * -48 }),
  };

  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="block w-8 h-px bg-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">Client Stories</span>
          <h2 className="sr-only">What Our Clients Say About B K Agarwal &amp; Co</h2>
        </motion.div>

        {/* Slideshow Container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Large decorative open-quote (static, always visible) */}
          <div
            className="absolute -top-6 -left-4 md:-left-8 text-[120px] md:text-[160px] leading-none font-serif text-[#D4AF37] select-none pointer-events-none z-0"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Slide Card */}
          <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="relative z-10 bg-[#FAFAFA] border border-slate-100 rounded-2xl px-10 pt-16 pb-10 md:px-16 md:pt-20 md:pb-12 shadow-sm overflow-hidden min-h-[320px] transition-transform duration-200 ease-out will-change-transform"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <blockquote>
                  <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-slate-700 leading-relaxed">
                    {current.quote}
                  </p>
                </blockquote>

                {/* Divider */}
                <div className="my-8 w-12 h-px bg-[#D4AF37]" />

                {/* Attribution */}
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-sans font-bold text-lg select-none shrink-0">
                    {current.author[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans font-bold text-slate-900 text-base">{current.author}</p>
                    <p className="font-sans text-sm text-slate-500 truncate">
                      {current.role}
                      {current.company && (
                        <span className="text-slate-400"> · {current.company}</span>
                      )}
                    </p>
                  </div>

                  {/* Closing quote floated right */}
                  <div className="ml-auto text-[60px] leading-none font-serif text-[#D4AF37] select-none shrink-0" aria-hidden="true">
                    &rdquo;
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between mt-8">

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === index
                      ? "w-6 h-2 bg-[#D4AF37]"
                      : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200 cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200 cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Auto-progress bar */}
          <div className="mt-4 h-0.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              key={index}
              className="h-full bg-[#D4AF37] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
            />
          </div>

        </motion.div>

        {/* Bottom trust badge row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-16 text-[11px] font-mono tracking-widest text-slate-400 uppercase"
        >
          {["Listed Companies", "MNC Clients", "High-Growth Start-ups", "Public Sector Entities"].map((tag) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
              {tag}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
