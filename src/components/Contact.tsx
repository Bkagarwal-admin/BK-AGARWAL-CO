import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const BRANCHES = [
  {
    city:    "Chennai",
    address: "Plot No 137, 6th Cross Street, 2nd Avenue, Vettuvankeni, Chennai - 600115",
  },
  {
    city:    "Mumbai",
    address: "1214 Crystal 86 A, Andheri Ghatkopar Link Rd, Lal Bahadur Shastri Marg, near Shreyas Signal, Gangawadi, Ghatkopar West, Mumbai, Maharashtra 400086",
  },
  {
    city:    "Sonepat",
    address: "#26, Omaxe Galleria, Omaxe City, Sonepat - 131001",
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity:    1,
    y:          0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });
  const [sent, setSent]  = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="block w-8 h-px bg-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">Get In Touch</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Left Column: Contact Form ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-950 leading-tight">
                Let&rsquo;s start a{" "}
                <span className="font-serif italic font-normal text-slate-700">conversation</span>
              </h2>
              <p className="text-slate-500 text-sm font-sans leading-relaxed max-w-sm">
                Fill in the form and our team will get back to you within one business day.
              </p>
            </div>

            {sent ? (
              <div className="flex flex-col items-start gap-3 p-8 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-lg">Message Received!</h3>
                <p className="text-sm text-slate-500 font-sans">
                  Thank you for reaching out. We&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", mobile: "", email: "", message: "" }); }}
                  className="text-xs font-sans font-semibold text-[#D4AF37] hover:underline cursor-pointer mt-2"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-all duration-200"
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-1.5">
                  <label htmlFor="mobile" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                    Mobile Number <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                    Email ID <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@yourcompany.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-mono tracking-wider text-slate-500 uppercase block">
                    Message <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#b8962e] text-white font-sans font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Right Column: Office Details ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >

            {/* Head Office Card */}
            <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <h3 className="font-sans font-bold text-slate-900 text-base uppercase tracking-widest text-[11px] font-mono">
                  Head Office — Bangalore
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-slate-600 font-sans">
                  <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">
                    No.18, S-1, 1st Floor, Near Banappa Park, 11th Cross, Cubbonpet, Bangalore, Karnataka 560002
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 font-sans">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a href="mailto:mail@bkagarwal.in" className="hover:text-[#D4AF37] transition-colors">
                    mail@bkagarwal.in
                  </a>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-600 font-sans">
                  <Phone className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    {["+91-9341551773", "+91-9916474589", "+91-9535500655"].map((num) => (
                      <a key={num} href={`tel:${num.replace(/-/g, "")}`} className="block hover:text-[#D4AF37] transition-colors">
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 font-sans">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Mon – Sat : 10:00 AM – 07:00 PM</span>
                </div>
              </div>
            </div>

            {/* Branch Offices Sub-Grid */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">Branch Offices</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BRANCHES.map(({ city, address }, i) => (
                  <motion.div
                    key={city}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-5 rounded-lg bg-white border border-slate-100 hover:border-[#D4AF37]/30 hover:shadow-sm transition-all duration-300 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <h4 className="font-sans font-bold text-slate-900 text-sm">{city}</h4>
                    </div>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">{address}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
