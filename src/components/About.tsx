import { motion } from "motion/react";
import { Award, Globe, Users } from "lucide-react";

const STATS = [
  { icon: Award,  value: "Decades",  label: "of Excellence"       },
  { icon: Globe,  value: "4",        label: "Industry Verticals Served" },
  { icon: Users,  value: "1000+",    label: "Clients Across India"      },
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
              A trusted advisory{" "}
              <span className="font-serif italic font-normal text-slate-700">
                partner,
              </span>{" "}
              at every stage.
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
            {/* Decorative large quote mark */}
            <div className="text-[80px] leading-none font-serif text-[#D4AF37]/20 select-none -mb-4">&ldquo;</div>

            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              <span className="font-semibold text-slate-900">B K AGARWAL &amp; CO., Chartered Accountants (BKA)</span> is a
              contemporary Accounting and Regulatory Services firm committed to delivering excellence across a diverse range
              of industries. With deep-rooted expertise spanning{" "}
              <span className="text-slate-800 font-medium">Infrastructure, Manufacturing, Construction, and Information Technology</span>,
              BKA has established itself as a trusted advisory partner for organisations at every stage of their growth journey.
            </p>

            <p className="text-base text-slate-600 font-sans leading-relaxed">
              Our distinguished client portfolio encompasses publicly listed companies, prominent multinational corporations,
              and high-potential start-ups - reflecting the breadth of our capabilities and the confidence our clients place in us.
            </p>

            <p className="text-base text-slate-600 font-sans leading-relaxed">
              At the helm of BKA is a team of seasoned professionals driven by a singular commitment: to deliver{" "}
              <span className="text-slate-800 font-medium">informed, pragmatic, and high-quality solutions</span> that create
              tangible value for our clients.
            </p>

            {/* Industry Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Infrastructure", "Manufacturing", "Construction", "Information Technology"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold bg-slate-50 border border-slate-200 text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
