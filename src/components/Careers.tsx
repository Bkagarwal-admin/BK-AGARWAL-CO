import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Send, Upload, FileText, X, Briefcase } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const CLOUDINARY_CLOUD_NAME    = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME    as string;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string;

const DESIGNATIONS = [
  "Chartered Accountant",
  "Article Assistant",
  "Audit Executive",
  "Tax Consultant",
  "Accounts Executive",
  "Semi-Qualified / Paid Assistant",
  "Other",
];

const MAX_RESUME_BYTES = 2 * 1024 * 1024; // 2 MB
const ACCEPTED_TYPES = ".pdf,.doc,.docx";

// Resumes are uploaded to Cloudinary (unsigned preset) and only the link is
// emailed, keeping the EmailJS request within the free-tier size limit.
async function uploadResume(file: File): Promise<string> {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
    { method: "POST", body: data }
  );
  if (!res.ok) throw new Error(`Cloudinary upload failed: ${res.status}`);
  const json = await res.json();
  return json.secure_url as string;
}

export default function Careers() {
  const [form, setForm]       = useState({ name: "", email: "", mobile: "", designation: "", message: "" });
  const [resume, setResume]   = useState<File | null>(null);
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setError("");
    if (file && file.size > MAX_RESUME_BYTES) {
      setError("Resume must be under 2 MB. Please upload a smaller file.");
      e.target.value = "";
      setResume(null);
      return;
    }
    setResume(file);
  };

  const clearResume = () => {
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) {
      setError("Please attach your resume.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const resumeLink = await uploadResume(resume);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          from_mobile:  form.mobile,
          designation:  form.designation,
          message:      form.message,
          resume_link:  resumeLink,
          resume_name:  resume.name,
          to_email:     import.meta.env.VITE_ADMIN_EMAIL as string,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or email us your resume directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-all duration-200";

  return (
    <main className="bg-[#FAFAFA] pt-32 pb-24 sm:pb-32 min-h-screen border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">Careers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-950 leading-[1.1]">
            Build your career{" "}
            <span className="font-serif italic font-normal text-slate-700">with us</span>
          </h1>
          <p className="text-base text-slate-500 font-sans leading-relaxed">
            We are always looking for driven professionals who value rigour, integrity, and growth.
            Tell us about yourself and share your resume - we&rsquo;ll reach out when there&rsquo;s a fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: why join */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm space-y-5">
              <div className="w-11 h-11 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h2 className="text-lg font-sans font-bold text-slate-900">Why work at B K Agarwal &amp; Co?</h2>
              <ul className="space-y-3 text-sm text-slate-500 font-sans leading-relaxed list-none m-0 p-0">
                <li className="flex gap-3"><span className="text-[#D4AF37] shrink-0">—</span>Direct exposure to audit, tax, and advisory work across industries, from startups to listed companies.</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] shrink-0">—</span>Mentorship from senior professionals with decades of experience in Indian regulatory frameworks.</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] shrink-0">—</span>Modern digital workflows alongside the diligence of a traditional practice.</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] shrink-0">—</span>Offices in Bangalore, Chennai, Mumbai, and Sonepat.</li>
              </ul>
            </div>
          </motion.div>

          {/* Right: application form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className="flex flex-col items-start gap-3 p-8 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-lg">Application Received!</h3>
                <p className="text-sm text-slate-500 font-sans">
                  Thank you for your interest. Our team will review your application and get in touch.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", mobile: "", designation: "", message: "" });
                    clearResume();
                  }}
                  className="text-xs font-sans font-semibold text-[#D4AF37] hover:underline cursor-pointer mt-2"
                >
                  Submit another application →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                    placeholder="Your full name" className={inputClass} />
                </div>

                {/* Email + Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                      Email ID <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="mobile" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                      Mobile Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input id="mobile" name="mobile" type="tel" required value={form.mobile} onChange={handleChange}
                      placeholder="+91 00000 00000" className={inputClass} />
                  </div>
                </div>

                {/* Designation dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="designation" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                    Designation Applying For <span className="text-[#D4AF37]">*</span>
                  </label>
                  <select
                    id="designation"
                    name="designation"
                    required
                    value={form.designation}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer ${form.designation ? "" : "text-slate-400"}`}
                  >
                    <option value="" disabled>Select a designation</option>
                    {DESIGNATIONS.map((d) => (
                      <option key={d} value={d} className="text-slate-900">{d}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                    About You <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange}
                    placeholder="Tell us about your qualifications, experience, and why you'd like to join us"
                    className={`${inputClass} resize-none`} />
                </div>

                {/* Resume upload */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                    Resume <span className="text-[#D4AF37]">*</span>
                  </span>
                  <input
                    ref={fileInputRef}
                    id="resume"
                    type="file"
                    accept={ACCEPTED_TYPES}
                    onChange={handleFile}
                    className="hidden"
                  />
                  {resume ? (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/5">
                      <FileText className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="text-sm font-sans text-slate-700 truncate flex-1">{resume.name}</span>
                      <span className="text-xs font-mono text-slate-400 shrink-0">{(resume.size / 1024).toFixed(0)} KB</span>
                      <button type="button" onClick={clearResume} aria-label="Remove resume"
                        className="p-1 rounded hover:bg-[#D4AF37]/10 transition-colors cursor-pointer">
                        <X className="w-4 h-4 text-slate-500" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 px-4 py-6 rounded-lg border-2 border-dashed border-slate-200 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 text-sm font-sans text-slate-500 transition-all duration-200 cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-[#D4AF37]" />
                      Upload resume (PDF or Word, max 2 MB)
                    </button>
                  )}
                </div>

                {error && <p className="text-xs text-red-500 font-sans">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#b8962e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-sans font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {loading ? "Submitting…" : "Submit Application"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </main>
  );
}
