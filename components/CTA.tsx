"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-5xl mx-auto relative"
      >
        <div className="relative rounded-3xl overflow-hidden glass border border-[#5C6795]/20 p-12 md:p-16 text-center glow-primary">
          {/* BG gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(ellipse at 50% 50%, #5C679530, transparent 70%)" }}
          />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#F0A500]/30 mb-6"
            >
              <Sparkles size={12} className="text-[#F0A500]" />
              <span className="text-xs text-[#F0A500] font-medium">Admissions Open — Limited Seats</span>
            </motion.div>

            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Child&apos;s{" "}
              <span className="gradient-text">Bright Future</span>
              <br />
              Starts Here
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base leading-relaxed">
              Join hundreds of students who have unlocked their academic potential at AiS Academy.
              Expert guidance, proven methodology, real results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(92,103,149,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white animated-border"
              >
                Enroll Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:08989903131"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-gray-300 glass border border-white/10 hover:border-[#5C6795]/50 transition-all"
              >
                Call: 089899 03131
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
