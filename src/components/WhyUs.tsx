import { motion } from "motion/react";
import { ShieldCheck, Layers, Globe2, Cpu, LucideIcon } from "lucide-react";
import { useTilt } from "../hooks/useTilt";

const WHY_CARDS = [
  {
    icon:  ShieldCheck,
    title: "Experienced Professionals, Trusted Advice",
    body:  "Your engagement is led by seasoned professionals with decades of experience in Indian financial, regulatory, and taxation frameworks. The person who understands your business is the person who signs the opinion.",
  },
  {
    icon:  Layers,
    title: "End-to-End Expertise, One Trusted Partner",
    body:  "Accounting, audit, tax, regulatory, and advisory support - seamlessly integrated under one roof.",
  },
  {
    icon:  Globe2,
    title: "We Understand Your Industry",
    body:  "From Real Estate to Manufacturing, IT to Education, Startups to MNCs, our cross-sector experience means advice grounded in how your industry actually functions, not generic interpretations of the law.",
  },
  {
    icon:  Cpu,
    title: "Traditional Rigour, Modern Speed",
    body:  "Modern accounting platforms and digital workflows enable faster turnarounds, fewer errors, and complete transparency into where your work stands - without compromising the diligence every signature demands.",
  },
];

const cardVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity:    1,
    y:          0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

function WhyCard({ icon: Icon, title, body, index }: { icon: LucideIcon; title: string; body: string; index: number }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8, 1.02);
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative flex flex-col gap-5 p-7 rounded-xl bg-white border border-slate-100 shadow-sm transition-all duration-200 ease-out will-change-transform"
    >
      <div className="w-11 h-11 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#D4AF37]" />
      </div>

      <span className="absolute top-5 right-5 text-[11px] font-mono text-slate-200 font-bold select-none">
        0{index + 1}
      </span>

      <div className="space-y-3">
        <h3 className="text-base font-sans font-bold text-slate-900 leading-snug">{title}</h3>
        <p className="text-sm text-slate-500 font-sans leading-relaxed">{body}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] rounded-full group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-950 leading-[1.1]">
            The BKA{" "}
            <span className="font-serif italic font-normal text-slate-700">difference</span>
          </h2>
          <p className="text-base text-slate-500 font-sans leading-relaxed">
            Why over 1000 businesses - from listed companies to first-time founders - choose to stay with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CARDS.map(({ icon, title, body }, i) => (
            <WhyCard key={title} icon={icon} title={title} body={body} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
