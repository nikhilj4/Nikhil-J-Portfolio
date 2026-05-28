"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Haystek Technology",
    role: "AI / ML Intern",
    period: "Present",
    location: "Hyderabad · Hybrid",
    color: "#C4943A",
    current: true,
    bullets: [
      {
        bold: "Webchat LumyBot",
        text: " — Scalable SaaS chatbot on FastAPI with Hybrid RAG (BM25 + Semantic Search + Vector embeddings) for context-aware retrieval across large knowledge bases.",
      },
      {
        bold: "ERP LumyBot",
        text: " — Multi-Agent AI ERP assistant with RAG knowledge retrieval, conversational memory, and intelligent query routing for enterprise automation workflows.",
      },
      {
        bold: "Performance Optimization",
        text: " — Optimized retrieval latency, response generation, and LLM orchestration pipelines for production SaaS deployment.",
      },
    ],
    tags: ["FastAPI", "LangChain", "Hybrid RAG", "BM25", "Multi-Agent", "LLM Orchestration"],
  },
  {
    company: "Avijo",
    role: "AI / ML Intern",
    period: "Aug – Oct 2025",
    location: "Remote",
    color: "#8B7355",
    current: false,
    bullets: [
      {
        bold: "Healthcare AI Chatbot",
        text: " — Developed a personalized medical conversation assistant using BioBERT, RAG, LangChain, and LLMs for tailored health guidance.",
      },
      {
        bold: "Medical Record Parsing",
        text: " — Integrated EasyOCR to extract and process uploaded medical records, delivering actionable health insights through a virtual assistant interface.",
      },
    ],
    tags: ["BioBERT", "RAG", "LangChain", "EasyOCR", "Healthcare AI"],
  },
  {
    company: "Microsoft (Edunet Foundation)",
    role: "Summer Intern",
    period: "May – Jun 2025",
    location: "Remote",
    color: "#C4943A",
    current: false,
    bullets: [
      {
        bold: "Job Salary & Role Predictor",
        text: " — Built an end-to-end AI system predicting job salary and role from user skills & experience, benchmarking XGBoost and Random Forest models through an interactive interface.",
      },
    ],
    tags: ["XGBoost", "Random Forest", "Scikit-Learn", "Python", "Interactive UI"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 section-alt">
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
            <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C1410] font-['Space_Grotesk'] mb-12">
            Where I&apos;ve Worked
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E8DDD0] hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-white shadow-md hidden sm:block"
                    style={{ backgroundColor: exp.color }}
                  />

                  {/* Card */}
                  <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6 hover:shadow-lg hover:border-[#C4943A]/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={16} className="text-[#C4943A]" />
                          <span className="font-bold text-[#1C1410] font-['Space_Grotesk'] text-lg">
                            {exp.role}
                          </span>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-[#C4943A] font-semibold text-base">{exp.company}</div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-[#8B7355] flex-shrink-0">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-4">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-[#5C4A32]">
                          <ChevronRight size={15} className="text-[#C4943A] mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold text-[#1C1410]">{b.bold}</span>
                            {b.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#F5EDE0] text-[#8B7355] text-xs font-medium rounded-lg border border-[#E8DDD0] group-hover:border-[#C4943A]/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
