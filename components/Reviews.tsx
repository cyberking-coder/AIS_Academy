"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Hrishikesh Nagthane",
    time: "2 years ago",
    rating: 5,
    text: "I recently enrolled my child in a tuition class and I have been extremely pleased with the results. The teacher is highly knowledgeable and passionate about the subject, which has really helped my child grasp difficult concepts.",
    initial: "HN",
    color: "#6698D2",
  },
  {
    name: "Samrat Kadam",
    time: "1 year ago",
    rating: 5,
    text: "Every teacher is more interactive and very supportive towards all the children which is good for the educational development of the child. All the teachers clear all the doubts of the children and help the students to clear the concepts of the syllabus.",
    initial: "SK",
    color: "#F0A500",
  },
  {
    name: "Parth Machewar",
    time: "2 years ago",
    rating: 5,
    text: "Studying at AiS has been an enriching experience. The dedicated faculty, conducive learning environment, and comprehensive support system make it an exceptional place to pursue education. Highly recommended for anyone seeking quality learning and academic growth.",
    initial: "PM",
    color: "#89B0E0",
  },
  {
    name: "Priya Sharma",
    time: "8 months ago",
    rating: 5,
    text: "Good Environment. Mahesh sir and Sumit sir are very knowledgeable people. The way they explain concepts is truly remarkable. My daughter's grades improved significantly in just 3 months!",
    initial: "PS",
    color: "#4ECDC4",
  },
  {
    name: "Rahul Desai",
    time: "6 months ago",
    rating: 5,
    text: "Highly recommend this coaching institute! The faculty is patient, dedicated, and truly invested in every student's success. The study material is excellent and well-structured.",
    initial: "RD",
    color: "#FF6B6B",
  },
  {
    name: "Sneha Patil",
    time: "4 months ago",
    rating: 5,
    text: "AiS Academy transformed my son's approach to science. The interactive sessions and regular assessments keep students engaged. Best coaching institute in Warje area!",
    initial: "SP",
    color: "#95E1D3",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="fill-[#F0A500] text-[#F0A500]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Split into two columns for masonry
  const col1 = reviews.filter((_, i) => i % 2 === 0);
  const col2 = reviews.filter((_, i) => i % 2 !== 0);

  return (
    <section id="reviews" ref={ref} className="py-32 relative overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #F0A500 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#F0A500]/30 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F0A500]" />
            <span className="text-xs text-[#F0A500] font-medium uppercase tracking-widest">Student Love</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Students{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>

          {/* Overall rating display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 px-6 py-4 glass rounded-2xl border border-white/8 mb-12"
          >
            <div className="text-5xl font-bold gradient-text-primary">4.6</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < 4 ? "fill-[#F0A500] text-[#F0A500]" : "fill-[#F0A500]/60 text-[#F0A500]/60"} />
                ))}
              </div>
              <div className="text-xs text-gray-400">Based on 53+ Google Reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -5, borderColor: `${review.color}30` }}
              className="group glass rounded-3xl p-6 border border-white/5 transition-all duration-500 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 100% 0%, ${review.color}10, transparent 60%)`, inset: 0, position: 'absolute' }}
              />

              {/* Quote icon */}
              <Quote size={20} className="mb-4 opacity-20" style={{ color: review.color }} />

              {/* Stars */}
              <StarRow rating={review.rating} />

              {/* Review text */}
              <p className="text-sm text-gray-300 leading-relaxed my-4">{review.text}</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `${review.color}30`, border: `1px solid ${review.color}40` }}
                >
                  {review.initial}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.time}</div>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-30" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
