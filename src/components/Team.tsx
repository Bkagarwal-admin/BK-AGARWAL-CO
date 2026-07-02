import { motion } from "motion/react";

// Replace `photo` with Cloudinary URLs and update names, roles, and
// descriptions when the client shares final member details (5-8 members).
// Leave `photo` as "" to show an initials placeholder.
const TEAM_MEMBERS = [
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
  },
];

const cardVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity:    1,
    y:          0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
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

function TeamCard({ name, role, photo, body, index }: { name: string; role: string; photo: string; body: string; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex flex-col rounded-xl bg-white border border-slate-100 shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
            <span className="text-4xl font-sans font-extrabold text-slate-300 select-none">{initials(name)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="space-y-0.5">
          <h3 className="text-base font-sans font-bold text-slate-900 leading-snug">{name}</h3>
          <p className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">{role}</p>
        </div>
        <p className="text-sm text-slate-500 font-sans leading-relaxed">{body}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] rounded-full group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 sm:py-32 border-b border-slate-100">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard key={i} {...member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
