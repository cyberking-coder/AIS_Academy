"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Atom, FlaskConical, Calculator, BookOpen, Zap, Globe } from "lucide-react";

const courses = [
  {
    icon: Atom,
    title: "Physics",
    grades: "Std. VIII – XII",
    description:
      "From Mechanics to Modern Physics — master concepts with clarity through visual demonstrations and problem-solving workshops.",
    color: "#5C6795",
    tag: "Most Popular",
  },
  {
    icon: FlaskConical,
    title: "Chemistry",
    grades: "Std. VIII – XII",
    description:
      "Organic, Inorganic, and Physical Chemistry taught with real-world context. Lab-based approach for deeper understanding.",
    color: "#F0A500",
    tag: null,
  },
  {
    icon: Calculator,
    title: "Mathematics",
    grades: "Std. VI – XII",
    description:
      "Build strong mathematical foundations. Covers Algebra, Geometry, Calculus, and board exam strategy.",
    color: "#7B85B4",
    tag: null,
  },
  {
    icon: BookOpen,
    title: "Biology",
    grades: "Std. VIII – XII",
    description:
      "Comprehensive Biology coaching aligned with HSC, NEET and competitive exam syllabi.",
    color: "#4ECDC4",
    tag: null,
  },
  {
    icon: Zap,
    title: "JEE / NEET Prep",
    grades: "Std. XI – XII",
    description:
      "Intensive preparation program with mock tests, previous year papers, and mentorship from experienced faculty.",
    color: "#FF6B6B",
    tag: "New Batch",
  },
  {
    icon: Globe,
    title: "Foundation Course",
    grades: "Std. VI – VIII",
    description:
      "Early science foundation to build curiosity and analytical thinking before competitive exam preparation begins.",
    color: "#95E1D3",
    tag: null,
  },
];

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="courses" ref={ref} className="py-32 relative overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #F0A500 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#5C6795]/30 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F0A500]" />
            <span className="text-xs text-[#F0A500] font-medium uppercase tracking-widest">Our Programs</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Courses Designed for{" "}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From middle school foundations to competitive exam mastery — every program is crafted
            to maximize your potential.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, borderColor: `${course.color}40` }}
              className="group relative glass rounded-3xl p-7 border border-white/5 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${course.color}15 0%, transparent 70%)` }}
              />

              {/* Tag */}
              {course.tag && (
                <div
                  className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-semibold text-white"
                  style={{ background: `${course.color}30`, border: `1px solid ${course.color}40` }}
                >
                  {course.tag}
                </div>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${course.color}15`, border: `1px solid ${course.color}30` }}
              >
                <course.icon size={22} style={{ color: course.color }} />
              </div>

              {/* Content */}
              <div className="text-xs text-gray-500 mb-2 font-medium">{course.grades}</div>
              <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{course.description}</p>

              {/* CTA */}
              <motion.div
                className="mt-5 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                style={{ color: course.color }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
