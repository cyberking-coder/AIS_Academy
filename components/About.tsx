"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const pillars = [
  "Small Batch Sizes for Personalised Attention",
  "Concept-First Teaching Methodology",
  "Weekly Tests & Performance Tracking",
  "Doubt-Clearing Sessions Daily",
  "Parent Progress Reports",
  "Comprehensive Study Material Included",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #6698D2 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Visual */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          {/* Main card */}
          <div className="relative rounded-3xl overflow-hidden glass border border-white/8 p-8 glow-primary">
            {/* Decorative grid */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl animated-border p-[1px]">
                  <div className="w-full h-full rounded-[14px] bg-[#0A0B14] flex items-center justify-center">
                    <Sparkles size={20} className="text-[#F0A500]" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Est. in Pune</div>
                  <div className="text-white font-semibold">Avabodham Institute of Science</div>
                </div>
              </div>

              {/* Large number display */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[["4.6", "Star Rating"], ["53+", "Reviews"], ["500+", "Students"]].map(([val, lbl]) => (
                  <div key={lbl} className="bg-white/3 rounded-2xl p-4 border border-white/5">
                    <div className="text-3xl font-bold gradient-text-primary">{val}</div>
                    <div className="text-xs text-gray-500 mt-1">{lbl}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-[#6698D2]/10 rounded-2xl p-5 border border-[#6698D2]/20">
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  &quot;Studying at AiS has been an enriching experience. The dedicated faculty,
                  conducive learning environment, and comprehensive support system make it an
                  exceptional place to pursue education.&quot;
                </p>
                <div className="mt-3 text-xs text-[#6698D2]">— Parth Machewar, Student</div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 -right-5 glass border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
          >
            <div className="text-xs text-gray-400">Located at</div>
            <div className="text-sm font-medium text-white">Warje, Pune</div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#6698D2]/30 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6698D2]" />
            <span className="text-xs text-[#89B0E0] font-medium uppercase tracking-widest">About Us</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Building Tomorrow&apos;s{" "}
            <span className="gradient-text">Scientists & Leaders</span>
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-4">
            At AiS Academy, we believe every student carries the potential for greatness.
            Our mission is to unlock that potential through{" "}
            <span className="text-white font-medium">rigorous academics</span>,
            personalized mentorship, and a culture of curiosity.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Founded in the heart of Pune's Karvenagar, we&apos;ve grown into a trusted institution
            where students not just pass exams—they develop a{" "}
            <span className="text-white font-medium">deep love for science</span>.
          </p>

          <div className="grid grid-cols-1 gap-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.07 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 size={16} className="text-[#6698D2] flex-shrink-0" />
                <span className="text-sm text-gray-300">{p}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
