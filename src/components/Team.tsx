import { motion } from "motion/react";
import { Linkedin, Mail, User } from "lucide-react";

// Replace `photo` with Cloudinary URLs and update names, roles, and
// descriptions when the client shares final member details (5-8 members).
// `photo`, `linkedin`, and `email` are optional - leave "" to hide them.
type Member = {
  name:     string;
  role:     string;
  photo:    string;
  body:     string;
  linkedin: string;
  email:    string;
};

// NOTE: photos below are temporary stock placeholders. Swap each `photo`
// with the member's Cloudinary URL when the client shares final details.
const TEAM_MEMBERS: Member[] = [
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
    linkedin: "",
    email:    "",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
    linkedin: "",
    email:    "",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
    linkedin: "",
    email:    "",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
    linkedin: "",
    email:    "",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
    linkedin: "",
    email:    "",
  },
  {
    name:  "Member Name",
    role:  "Designation",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    body:  "A short professional description of this team member - their qualifications, areas of expertise, and years of experience will go here.",
    linkedin: "",
    email:    "",
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

function TeamCard({ name, role, photo, body, linkedin, email, index }: Member & { index: number }) {
  const hasSocials = Boolean(linkedin || email);
  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex flex-col rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Portrait */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200">
            <User className="w-12 h-12 text-slate-300" strokeWidth={1.25} />
            <span className="text-3xl font-sans font-extrabold text-slate-300 select-none tracking-wide">
              {initials(name)}
            </span>
          </div>
        )}

        {/* Gradient scrim - deepens on hover for readable overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Index badge */}
        <span className="absolute top-4 right-4 text-[11px] font-mono font-bold text-white/70 select-none">
          0{index + 1}
        </span>

        {/* Name + role over image */}
        <div className="absolute bottom-0 left-0 right-0 p-5 space-y-0.5">
          <h3 className="text-lg font-sans font-bold text-white leading-snug drop-shadow-sm">{name}</h3>
          <p className="text-[11px] font-mono tracking-widest text-[#e6c65c] uppercase">{role}</p>
        </div>

        {/* Social icons - slide in on hover */}
        {hasSocials && (
          <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}
                className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-[#D4AF37] hover:text-white text-slate-700 transition-colors duration-200">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} aria-label={`Email ${name}`}
                className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-[#D4AF37] hover:text-white text-slate-700 transition-colors duration-200">
                <Mail className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="p-6">
        <p className="text-sm text-slate-500 font-sans leading-relaxed">{body}</p>
      </div>

      {/* Gold underline sweep */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-100 overflow-hidden">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard key={i} {...member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
