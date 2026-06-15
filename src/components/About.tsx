import { motion } from "motion/react";
import { Award, Globe, Users } from "lucide-react";

const STATS = [
  { icon: Award,  value: "Decades",  label: "of Professional Practice" },
  { icon: Globe,  value: "6+",       label: "Industries Served"        },
  { icon: Users,  value: "1000+",    label: "Clients Across India"     },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0  },
};

export default function About() {
  return (
    <section id="about" className="relative z-10 -mt-[100dvh] bg-white pt-24 sm:pt-32 pb-6 sm:pb-8 border-b border-slate-100 overflow-hidden">

      {/* Subtle decorative gold accent */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="block w-8 h-px bg-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">About Us</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── Left: Headline ────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-950 leading-[1.1]">
              The firm behind{" "}
              <span className="font-serif italic font-normal text-slate-700">
                confident
              </span>{" "}
              decisions.
            </h2>

            {/* Gold rule */}
            <div className="w-12 h-1 rounded-full bg-[#D4AF37]" />

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <p className="text-2xl font-sans font-extrabold text-slate-900">{value}</p>
                  <p className="text-[11px] font-sans text-slate-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Body Text ──────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Founded on the principles of <span className="font-semibold text-slate-900">integrity, expertise, and client-centricity</span>,{" "}
              <span className="font-semibold text-slate-900">B K Agarwal &amp; Co., Chartered Accountants (BKA)</span> delivers
              comprehensive Accounting, Tax and Regulatory Services to organisations navigating dynamic and competitive landscapes.
            </p>

            <p className="text-base text-slate-600 font-sans leading-relaxed">
              BKA's practice spans{" "}
              <span className="text-slate-800 font-medium">Real Estate, Manufacturing, Information Technology, BPOs, KPOs, Healthcare and Education</span>{" "}
              — sectors that demand both technical precision and strategic insight. Our distinguished client base includes
              publicly listed entities, multinational corporations, high-growth start-ups, SMEs, Hospitals and educational
              institutions, each relying on us for advice that is as actionable as it is sound.
            </p>

            <p className="text-base text-slate-600 font-sans leading-relaxed">
              We are guided by a leadership team of seasoned professionals who bring{" "}
              <span className="text-slate-800 font-medium">clarity to complexity</span> and long-term perspective to every
              client engagement.
            </p>
          </motion.div>

        </div>

        {/* Industry Tags — full width below both columns */}
        <div className="flex flex-wrap gap-5 mt-12">
          {["Real Estate", "Manufacturing", "Information Technology", "BPOs", "KPOs", "Healthcare", "Education", "Hospitals", "Startups", "MNCs"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 20, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08, y: -3, backgroundColor: "#D4AF3712", borderColor: "#D4AF37", color: "#b8962e", transition: { duration: 0.2, ease: "easeOut" } }}
              whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
              className="px-5 py-2 rounded-full text-sm font-sans font-semibold bg-slate-50 border border-slate-200 text-slate-700 cursor-default transition-colors duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
}
