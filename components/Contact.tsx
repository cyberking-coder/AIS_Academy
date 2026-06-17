"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Clock, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const info = [
  {
    icon: Phone,
    label: "Call Us",
    value: "089899 03131",
    sub: "Mon – Sat, 9 AM – 9:30 PM",
    href: "tel:08989903131",
    color: "#6698D2",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Parth Enclave, Canal Rd",
    sub: "Warje Jakat Naka, Karvenagar, Pune 411052",
    href: "https://maps.google.com/?q=AiS+Academy+Pune",
    color: "#F0A500",
  },
  {
    icon: Clock,
    label: "Timings",
    value: "Open Daily",
    sub: "Closes 9:30 PM",
    href: null,
    color: "#89B0E0",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@aisacademy.in",
    sub: "Reply within 24 hours",
    href: "mailto:info@aisacademy.in",
    color: "#4ECDC4",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      <div
        className="absolute left-0 bottom-0 w-[600px] h-[600px] opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #6698D2 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#6698D2]/30 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6698D2] animate-pulse" />
            <span className="text-xs text-[#89B0E0] font-medium uppercase tracking-widest">Get in Touch</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Start Your{" "}
            <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have questions? Enroll today or visit us at Parth Enclave, Warje, Pune. We&apos;d love to meet you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-4"
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                      <div className="text-white font-semibold">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.sub}</div>
                    </div>
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-gray-300 transition-colors" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                      <div className="text-white font-semibold">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.sub}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Map embed placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl overflow-hidden border border-white/5 h-48 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 grid-pattern opacity-50" />
              <div className="relative z-10 text-center">
                <MapPin size={28} className="text-[#6698D2] mx-auto mb-2" />
                <div className="text-sm text-white font-medium">AiS Academy</div>
                <div className="text-xs text-gray-400 mt-1">Warje Jakat Naka, Pune</div>
                <a
                  href="https://maps.google.com/?q=AIS+Academy+Parth+Enclave+Warje+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#6698D2] hover:text-[#89B0E0] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full glass rounded-3xl p-8 border border-[#6698D2]/30 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#6698D2]/20 flex items-center justify-center mb-5">
                  <CheckCircle2 size={40} className="text-[#6698D2]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thank you for reaching out. Our team will contact you shortly to help you begin your journey at AiS Academy.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 border border-white/5 space-y-5"
              >
                <h3 className="text-xl font-bold text-white mb-1">Enquire / Enroll</h3>
                <p className="text-sm text-gray-400 mb-4">Fill in the form and we&apos;ll get back to you within 24 hours.</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#6698D2]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="089899 03131"
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#6698D2]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Subject / Course Interest</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#111223] border border-white/8 text-white text-sm focus:outline-none focus:border-[#6698D2]/60 transition-colors"
                  >
                    <option value="">Select a course</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Mathematics</option>
                    <option>Biology</option>
                    <option>JEE / NEET Prep</option>
                    <option>Foundation Course</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your child's current class and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#6698D2]/60 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(102,152,210,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-white animated-border flex items-center justify-center gap-2 group"
                >
                  Send Enquiry
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-xs text-gray-600 text-center">
                  Or call us directly at{" "}
                  <a href="tel:08989903131" className="text-[#6698D2] hover:underline">089899 03131</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
