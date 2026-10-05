import { motion } from "motion/react";

// Photos are not available, so each card shows a monogram of the member's
// initials. `credentials` render as small tags next to the name (e.g. FCA,
// CISA); `badge` is an optional dark pill (e.g. "Ex-Big4"); `summary` is a
// short 2-3 line description.
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
    summary:     "17+ years in indirect tax, internal financial control, audit and CFO services, including four years at PwC. Serves Fortune 500 clients and regularly trains on GST.",
  },
  {
    name:        "Pramod Kumar Goenka",
    credentials: ["FCA"],
    role:        "Chartered Accountant",
    summary:     "43+ years in taxation and accountancy, handling direct and indirect tax matters up to the Supreme Court. Currently active in GST advisory and a regular speaker on GST.",
  },
  {
    name:        "Ashish Agarwal",
    credentials: ["FCA"],
    role:        "Chartered Accountant",
    summary:     "18+ years across accounting, audit, taxation and company law. Expert in income tax matters and scrutiny cases, and has provided CFO support to various companies.",
  },
  {
    name:        "Arpit Malik",
    credentials: ["CA"],
    role:        "Partner",
    summary:     "Advises early and growth-stage enterprises on financial structuring, investor readiness and compliance, supporting businesses from incorporation to multi-million-dollar funding closures.",
  },
  {
    name:        "Abdul Hameed",
    credentials: ["FCA", "CMA"],
    role:        "Chartered Accountant",
    summary:     "Senior-level experience across industries in indirect taxes, internal audit and financial reporting, including audits of complex manufacturing and IT companies, plus CFO support.",
  },
  {
    name:        "Gauri Kumari",
    credentials: ["FCA", "CISA"],
    role:        "Chartered Accountant",
    summary:     "16+ years in audit support, internal financial control, SOX and statutory audit, including three years at PwC. Has served several Fortune 500 companies.",
  },
  {
    name:        "Ishita Kharbanda",
    credentials: ["ACA"],
    role:        "Chartered Accountant",
    badge:       "Ex-Big4",
    summary:     "13 years in audit support, statutory and tax audits and internal controls over financial reporting, including audits of complex manufacturing and IT companies.",
  },
  {
    name:        "Sachi Agarwal",
    credentials: ["FCA"],
    role:        "Chartered Accountant",
    summary:     "9 years of post-qualification experience in assurance, tax and regulatory services.",
  },
  {
    name:        "Venkat Krishnamoorthy",
    credentials: ["ACA", "DICA"],
    role:        "Chartered Accountant",
    summary:     "Holds a B.M.S. degree and the DICA (ICAI) qualification, with 2.5 years of post-qualification experience in audit and assurance.",
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

function TeamCard({ name, credentials, role, badge, summary, index }: Member & { index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex flex-col h-full rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Header: monogram + name, credentials, role */}
      <div className="flex items-start gap-5">
        <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8952b] flex items-center justify-center shadow-md ring-4 ring-[#D4AF37]/10">
          <span className="text-xl font-sans font-extrabold text-white tracking-wide select-none">
            {initials(name)}
          </span>
        </div>

        <div className="min-w-0 space-y-2 pt-1">
          <h3 className="text-xl font-sans font-bold text-slate-950 leading-snug">{name}</h3>
          {credentials.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {credentials.map((c) => (
                <span key={c} className="px-2 py-0.5 rounded-md bg-[#D4AF37]/10 text-[10px] font-mono font-bold tracking-wider text-[#a8871f]">
                  {c}
                </span>
              ))}
            </div>
          )}
          <p className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
            {role}
            {badge && <span className="ml-2 px-1.5 py-0.5 rounded bg-slate-900 text-[9px] font-bold tracking-wider text-[#e6c65c]">{badge}</span>}
          </p>
        </div>
      </div>

      <div className="my-6 h-px bg-gradient-to-r from-[#D4AF37]/40 via-slate-200 to-transparent" />

      {/* Summary */}
      <p className="text-sm text-slate-600 font-sans leading-relaxed">{summary}</p>

      {/* Gold underline sweep */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Team() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard key={i} {...member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
