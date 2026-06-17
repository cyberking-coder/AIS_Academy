"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowRight, MapPin, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Students Enrolled" },
  { icon: Star, value: "4.6★", label: "Average Rating" },
  { icon: Award, value: "10+", label: "Years of Excellence" },
  { icon: Clock, value: "9 AM–9:30 PM", label: "Daily Classes" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Ambient light blobs */}
      <motion.div
        style={{ y, background: "radial-gradient(ellipse, #6698D2 0%, transparent 70%)" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-[120px]"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
        style={{ background: "radial-gradient(ellipse, #F0A500 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 left-10 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
        style={{ background: "radial-gradient(ellipse, #89B0E0 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-[#6698D2]/30 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#F0A500] animate-pulse" />
          <span className="text-sm text-gray-300 font-medium">Rated 4.6★ by 53+ Students in Pune</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-white">Where Science</span>
          <br />
          <span className="gradient-text">Meets Brilliance</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AiS Academy — Avabodham Institute of Science brings{" "}
          <span className="text-[#89B0E0] font-medium">world-class coaching</span> to
          Pune's brightest minds. Expert faculty, personalized attention, exceptional results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(102,152,210,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white animated-border"
          >
            Start Your Journey
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-gray-300 glass border border-white/10 hover:border-[#6698D2]/50 transition-all"
          >
            Explore Courses
          </motion.a>
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-20"
        >
          <MapPin size={14} className="text-[#6698D2]" />
          <span>Parth Enclave, Canal Rd, Warje Jakat Naka, Karvenagar, Pune 411052</span>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              whileHover={{ scale: 1.04, borderColor: "rgba(102,152,210,0.4)" }}
              className="glass rounded-2xl p-5 border border-white/5 card-hover"
            >
              <stat.icon size={20} className="text-[#6698D2] mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-[#6698D2]/40 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-[#6698D2]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
