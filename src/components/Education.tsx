"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Design & Analysis of Algorithms",
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-[#C4943A]" />
            <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">Education</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C1410] font-['Space_Grotesk'] mb-10">
            Academic Background
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl border border-[#C4943A]/30 p-8 hover:shadow-lg transition-all max-w-2xl"
          >
            {/* University header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#C4943A]/10 flex items-center justify-center flex-shrink-0 border border-[#C4943A]/20">
                <GraduationCap size={28} className="text-[#C4943A]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1C1410] text-xl font-['Space_Grotesk']">
                  GITAM Deemed University
                </h3>
                <p className="text-[#C4943A] font-semibold mt-0.5">
                  B.Tech, Computer Science (AI & ML)
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#8B7355]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    Aug 2022 – Aug 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    Bengaluru
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E8DDD0] mb-5" />

            {/* Coursework */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={15} className="text-[#C4943A]" />
                <span className="text-sm font-semibold text-[#1C1410]">Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                    className="px-3 py-1.5 bg-[#F5EDE0] text-[#5C4A32] text-xs font-medium rounded-lg border border-[#E8DDD0] hover:border-[#C4943A]/30 transition-colors"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
