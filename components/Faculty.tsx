"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, BookOpen, Award } from "lucide-react";

const faculty = [
  {
    name: "Mahesh Sir",
    designation: "Senior Faculty – Physics & Mathematics",
    specialization: "IIT-JEE & Board Excellence",
    experience: "12+ Years",
    rating: 5.0,
    bio: "Known for breaking down the most complex Physics concepts into intuitive, understandable ideas. Mahesh Sir's interactive teaching style has helped hundreds of students crack IIT-JEE and board exams.",
    subjects: ["Physics", "Mathematics", "JEE Prep"],
    color: "#6698D2",
    initials: "MS",
  },
  {
    name: "Sumit Sir",
    designation: "Senior Faculty – Chemistry & Biology",
    specialization: "NEET & HSC Board",
    experience: "10+ Years",
    rating: 5.0,
    bio: "A highly knowledgeable educator with a passion for Chemistry. Sumit Sir's real-world approach and patient teaching have made Chemistry accessible and enjoyable for all students.",
    subjects: ["Chemistry", "Biology", "NEET Prep"],
    color: "#F0A500",
    initials: "SS",
  },
];

export default function Faculty() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faculty" ref={ref} className="py-32 relative overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #6698D2 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#6698D2]/30 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6698D2]" />
            <span className="text-xs text-[#89B0E0] font-medium uppercase tracking-widest">Meet the Team</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Faculty That{" "}
            <span className="gradient-text">Inspires</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our educators aren&apos;t just teachers — they&apos;re mentors, motivators, and
            lifelong guides for every student.
          </p>
        </motion.div>

        {/* Faculty cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* BG glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 30% 0%, ${f.color}10 0%, transparent 60%)` }}
              />

              {/* Avatar + info */}
              <div className="flex items-start gap-5 mb-6 relative z-10">
                <div className="relative flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${f.color}40, ${f.color}20)`, border: `1px solid ${f.color}40` }}
                  >
                    {f.initials}
                  </div>
                  {/* Pulse ring */}
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-30 animate-pulse"
                    style={{ border: `1px solid ${f.color}` }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{f.name}</h3>
                  <div className="text-xs text-gray-500 mb-2">{f.designation}</div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                      style={{ background: `${f.color}20`, color: f.color, border: `1px solid ${f.color}30` }}
                    >
                      {f.specialization}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">{f.bio}</p>

              {/* Stats row */}
              <div className="flex items-center gap-5 mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <Award size={14} style={{ color: f.color }} />
                  <span className="text-sm text-white font-semibold">{f.experience}</span>
                  <span className="text-xs text-gray-500">Experience</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className="fill-current"
                      style={{ color: "#F0A500" }}
                    />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">{f.rating}</span>
                </div>
              </div>

              {/* Subject tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {f.subjects.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-300"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <BookOpen size={10} />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
