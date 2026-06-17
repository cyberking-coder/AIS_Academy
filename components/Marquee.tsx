"use client";

import { motion } from "framer-motion";

const items = [
  "Physics", "Chemistry", "Mathematics", "Biology",
  "JEE Preparation", "NEET Coaching", "HSC Board", "Foundation",
  "Small Batches", "Expert Faculty", "Pune's Best", "4.6★ Rated",
];

export default function MarqueeBanner() {
  return (
    <section className="py-8 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #0A0B14 0%, transparent 15%, transparent 85%, #0A0B14 100%)" }} />

      <div className="flex overflow-hidden">
        <div className="marquee-track flex gap-8 whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-[#89B0E0] transition-colors cursor-default"
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: i % 4 === 0 ? "#6698D2" : i % 4 === 1 ? "#F0A500" : i % 4 === 2 ? "#89B0E0" : "#4ECDC4" }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
