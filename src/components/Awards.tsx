"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, MapPin, Calendar } from "lucide-react";

const awards = [
  {
    title: "Smart India Hackathon 2025",
    subtitle: "National Finalist — Top 5 Teams",
    org: "KIET, Delhi NCR",
    date: "Dec 2025",
    icon: "🏆",
    badge: "National Finalist",
    badgeColor: "#C4943A",
    description:
      "Led a team to build a scalable data-analysis solution for the National Investigation Agency (NIA) to process suspect mobile & digital device datasets. Presented the solution at the National Finals, New Delhi — ranked in the Top 5 teams nationwide.",
    highlights: [
      "Top 5 Teams Nationally",
      "NIA Digital Forensics Challenge",
      "Presented at KIET, Delhi NCR",
      "Team Leader",
    ],
  },
  {
    title: "BioMed Bharat 2024 Hackathon",
    subtitle: "Runner-Up · Team Lead",
    org: "AMTZ, Andhra Pradesh",
    date: "Mar 2024",
    icon: "🥈",
    badge: "Runner-Up",
    badgeColor: "#8B7355",
    description:
      'Led team to design and prototype (TRL-3) a "Shield to reduce discomfort/pain during IM injection." Developed a physical + technological solution addressing a common healthcare pain point, achieving Runner-Up at this national biomedical innovation competition.',
    highlights: [
      "Runner-Up Award",
      "TRL-3 Prototype Built",
      "Healthcare Innovation",
      "Team Leader",
    ],
  },
];

export default function Awards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="awards" className="py-20 section-alt">
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
            <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">Awards</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C1410] font-['Space_Grotesk'] mb-12">
            Recognition & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl border border-[#E8DDD0] p-7 hover:shadow-xl hover:border-[#C4943A]/30 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-4xl">{award.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#1C1410] font-['Space_Grotesk'] text-lg leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-[#C4943A] font-semibold text-sm mt-0.5">{award.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 text-white text-xs font-bold rounded-full flex-shrink-0"
                    style={{ backgroundColor: award.badgeColor }}
                  >
                    {award.badge}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-[#8B7355] mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#C4943A]" />
                    {award.org}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#C4943A]" />
                    {award.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#5C4A32] leading-relaxed mb-5">{award.description}</p>

                {/* Highlight chips */}
                <div className="flex flex-wrap gap-2">
                  {award.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1 px-2.5 py-1 bg-[#F5EDE0] text-[#8B7355] text-xs font-medium rounded-lg border border-[#E8DDD0] group-hover:border-[#C4943A]/30 transition-colors"
                    >
                      <Trophy size={10} className="text-[#C4943A]" />
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
