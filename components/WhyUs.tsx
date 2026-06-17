"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users2, Target, TrendingUp, ShieldCheck, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Concept-First Learning",
    description: "We don&apos;t teach rote memorization. Every topic is explained with deep conceptual clarity and real-world application.",
    color: "#5C6795",
  },
  {
    icon: Users2,
    title: "Small Batches",
    description: "Limited students per batch ensures every student gets personalized attention and direct interaction with faculty.",
    color: "#F0A500",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Whether it&apos;s board exams, JEE, NEET, or scholarship tests — we tailor our teaching to your specific goals.",
    color: "#7B85B4",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Consistent excellence with hundreds of students achieving top ranks in boards and competitive examinations.",
    color: "#4ECDC4",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Parents",
    description: "A 4.6★ rating on Google from 53+ reviews reflects the trust Pune parents place in us for their children&apos;s future.",
    color: "#FF6B6B",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship & Support",
    description: "Beyond academics, we provide career guidance, mental wellness support, and motivation to keep students thriving.",
    color: "#95E1D3",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-8 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #5C6795 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#5C6795]/30 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5C6795]" />
            <span className="text-xs text-[#7B85B4] font-medium uppercase tracking-widest">Why AiS Academy</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The AiS Difference
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Six pillars that make AiS Academy the most trusted coaching institute in Pune&apos;s Karvenagar–Warje belt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.03 }}
              className="group relative glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-400 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 0% 0%, ${f.color}08, transparent 60%)` }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}
              >
                <f.icon size={20} style={{ color: f.color }} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p
                className="text-sm text-gray-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: f.description }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
