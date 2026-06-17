"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Globe, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl animated-border p-[1px]">
                <div className="w-full h-full rounded-[10px] bg-[#0A0B14] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">AiS</span>
                </div>
              </div>
              <div>
                <div className="text-base font-bold text-white">AiS Academy</div>
                <div className="text-[10px] text-[#5C6795] tracking-widest uppercase">Avabodham Institute of Science</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-4">
              Pune&apos;s trusted science coaching institute. Expert faculty, small batches,
              exceptional results.
            </p>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className={i < 4 ? "fill-[#F0A500] text-[#F0A500]" : "fill-[#F0A500]/50 text-[#F0A500]/50"} />
              ))}
              <span className="text-xs text-gray-400 ml-1">4.6 / 53+ Reviews</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Navigation</div>
            <div className="space-y-3">
              {["Home", "About", "Courses", "Faculty", "Reviews", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Contact</div>
            <div className="space-y-4">
              <a href="tel:08989903131" className="flex items-start gap-2.5 group">
                <Phone size={14} className="text-[#5C6795] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">089899 03131</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#5C6795] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Second floor, Parth Enclave,<br />
                  Canal Rd, behind D Mart,<br />
                  Warje, Pune 411052
                </span>
              </div>
              <a href="https://aisacademy.in" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 group">
                <Globe size={14} className="text-[#5C6795]" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">aisacademy.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-600">
            © 2024 AiS Academy — Avabodham Institute of Science. All rights reserved.
          </div>
          <div className="text-xs text-gray-600">
            Karvenagar · Warje · Pune, Maharashtra 411052
          </div>
        </div>
      </div>
    </footer>
  );
}
