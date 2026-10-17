import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// Photos are not available, so each card shows a monogram of the member's
// initials. `credentials` render as small tags next to the name (e.g. FCA,
// CISA); `badge` is an optional dark pill (e.g. "Ex-Big4"); `summary` is
// clamped to 3 lines on the card with a "Show more" link when longer.
type Member = {
  name:        string;
  credentials: string[];
  role:        string;
  badge?:      string;
  summary:     string;
};

const TEAM_MEMBERS: Member[] = [
  {
    name:        "Bishnu Kumar Agarwal",
    credentials: ["FCA", "CS", "CISA"],
    role:        "Chartered Accountant",
    badge:       "Ex-Big4",
    summary:     "With over 17 years of experience, Bishnu Kumar Agarwal brings expertise in indirect taxation, internal financial controls, assurance, and CFO services. His experience includes four years at PwC and advising Fortune 500 companies. He represents clients in GST investigations, including search, seizure, and summons proceedings, and regularly conducts training on GST.",
  },
  {
    name:        "Pramod Kumar Goenka",
    credentials: ["FCA"],
    role:        "Chartered Accountant",
    summary:     "With over 43 years of experience, Pramod Kumar Goenka brings extensive expertise in taxation and accountancy, assisting clients with direct and indirect tax matters, including those before the Supreme Court. His current focus is GST advisory, and he regularly shares his insights as a speaker on GST.",
  },
  {
    name:        "Ashish Agarwal",
    credentials: ["FCA", "DISA"],
    role:        "Chartered Accountant",
    summary:     "With over 18 years of experience, Ashish Agarwal brings expertise in accounting, auditing, taxation, and corporate law compliance. He represents clients before the Income Tax Department in scrutiny assessments and search and seizure proceedings, and has served as a CFO advisor to several companies.",
  },
  {
    name:        "Arpit Malik",
    credentials: ["CA"],
    role:        "Partner",
    summary:     "With over 8 years of experience, Arpit Malik advises early and growth-stage enterprises on financial structuring, investor readiness, and compliance. He has supported businesses from incorporation through the successful closure of multi-million-dollar funding rounds.",
  },
  {
    name:        "Abdul Hameed",
    credentials: ["FCA", "CMA"],
    role:        "Chartered Accountant",
    summary:     "With over 31 years of professional experience, Abdul Hameed brings extensive expertise in taxation, internal audit, and financial reporting across diverse industries. His experience includes audits of complex manufacturing and IT companies, along with CFO advisory and support services.",
  },
  {
    name:        "Gauri Kumari",
    credentials: ["FCA", "CISA"],
    role:        "Chartered Accountant",
    summary:     "With over 16 years of experience, Gauri Kumari brings expertise in audit support, internal financial controls, SOX compliance, and statutory audit. Her experience includes three years at PwC and engagements with several Fortune 500 companies.",
  },
  {
    name:        "Ishita Kharbanda",
    credentials: ["ACA"],
    role:        "Chartered Accountant",
    badge:       "Ex-Big4",
    summary:     "With 13 years of experience, Ishita Kharbanda brings expertise in audit support, statutory and tax audits, and internal controls over financial reporting. Her experience includes working with a Big Four firm and auditing complex manufacturing and IT companies.",
  },
  {
    name:        "Tousif Rahman",
    credentials: ["FCA"],
    role:        "Chartered Accountant",
    summary:     "With over 16 years of experience, Tousif Rahman brings expertise in audit and taxation. A Fellow Chartered Accountant and commerce graduate, he supports businesses with their audit, tax, and compliance requirements.",
  },
  {
    name:        "Sachi Agarwal",
    credentials: ["FCA"],
    role:        "Chartered Accountant",
    summary:     "With 9 years of post-qualification experience, Sachi Agarwal brings expertise in assurance, taxation, and regulatory services. A Fellow Chartered Accountant, she supports businesses in meeting their reporting and compliance requirements.",
  },
  {
    name:        "Venkat Krishnamoorthy",
    credentials: ["ACA", "DICA"],
    role:        "Chartered Accountant",
    summary:     "With over 6 years of experience, Venkat Krishnamoorthy brings expertise in audit and assurance. A Chartered Accountant with a B.M.S. degree and the DICA qualification from ICAI, he supports businesses with their audit and financial reporting requirements.",
  },
];

const cardVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity:    1,
    y:          0,
    transition: { duration: 0.55, delay: (i % 3) * 0.1, ease: "easeOut" as const },
  }),
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

type TeamCardProps = Member & {
  index:     number;
  className?: string;
  expanded:  boolean;
  onToggle:  () => void;
};

function TeamCard({ name, credentials, role, badge, summary, index, className = "", expanded, onToggle }: TeamCardProps) {
  // Show the "Show more" link only when the clamped summary is actually cut off.
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const [clamped, setClamped] = useState(false);

  useLayoutEffect(() => {
    const el = summaryRef.current;
    if (!el || expanded) return;
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [expanded, summary]);

  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative flex flex-col h-full rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {/* Header: monogram + name, credentials, role */}
      <div className="flex items-start gap-5">
        <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8952b] flex items-center justify-center shadow-md ring-4 ring-[#D4AF37]/10">
          <span className="text-xl font-sans font-extrabold text-white tracking-wide select-none">
            {initials(name)}
          </span>
        </div>

        <div className="min-w-0 space-y-2 pt-1">
          <h3 className="text-xl sm:text-lg xl:text-xl font-sans font-bold text-slate-950 leading-snug break-words">{name}</h3>
          {credentials.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {credentials.map((c) => (
                <span key={c} className="px-2 py-0.5 rounded-md bg-[#D4AF37]/10 text-[10px] font-mono font-bold tracking-wider text-[#a8871f]">
                  {c}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <p className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">{role}</p>
            {badge && <span className="whitespace-nowrap px-1.5 py-0.5 rounded bg-slate-900 text-[9px] font-mono font-bold tracking-wider text-[#e6c65c] uppercase">{badge}</span>}
          </div>
        </div>
      </div>

      <div className="my-6 h-px bg-gradient-to-r from-[#D4AF37]/40 via-slate-200 to-transparent" />

      {/* Summary - clamped to 3 lines so every card is the same height */}
      <p
        ref={summaryRef}
        className={`text-sm text-slate-600 font-sans leading-relaxed ${expanded ? "" : "line-clamp-3"}`}
      >
        {summary}
      </p>
      {(clamped || expanded) && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className="self-start mt-3 text-[11px] font-mono font-bold tracking-widest uppercase text-[#a8871f] hover:text-slate-900 transition-colors duration-200 cursor-pointer"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}

      {/* Gold underline sweep */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Team() {
  // Only one card is expanded at a time. `rowHeight` remembers the shared
  // collapsed card height so the other cards keep it while one is expanded.
  const [expanded, setExpanded] = useState<number | null>(null);
  const [rowHeight, setRowHeight] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const toggle = (i: number) => {
    if (expanded === null) {
      const first = gridRef.current?.firstElementChild as HTMLElement | null;
      setRowHeight(first?.getBoundingClientRect().height ?? 0);
    }
    setExpanded(expanded === i ? null : i);
  };

  return (
    <section id="team" className="relative bg-[#FAFAFA] pt-0 pb-24 sm:pb-32 border-b border-slate-100 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">Our Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-950 leading-[1.1]">
            The people behind{" "}
            <span className="font-serif italic font-normal text-slate-700">the practice</span>
          </h2>
          <p className="text-base text-slate-500 font-sans leading-relaxed">
            Seasoned professionals who bring decades of combined experience across audit, tax, and advisory.
          </p>
        </motion.div>

        {/* auto-rows-fr makes every row (and so every card) the same height while
            all cards are collapsed. While one card is expanded, rows keep that
            height as a minimum so only the expanded card's row grows. */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch ${expanded === null ? "auto-rows-fr" : ""}`}
          style={expanded !== null && rowHeight ? { gridAutoRows: `minmax(${rowHeight}px, auto)` } : undefined}
        >
          {TEAM_MEMBERS.map((member, i) => {
            // On the 3-column layout, centre a lone card on the last row.
            const isLoneLast = i === TEAM_MEMBERS.length - 1 && TEAM_MEMBERS.length % 3 === 1;
            return (
              <TeamCard
                key={i}
                {...member}
                index={i}
                className={isLoneLast ? "lg:col-start-2" : ""}
                expanded={expanded === i}
                onToggle={() => toggle(i)}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
