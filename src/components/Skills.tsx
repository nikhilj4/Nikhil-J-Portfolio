"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    color: "#C4943A",
    skills: ["Python", "Java", "SQL"],
  },
  {
    category: "AI / ML",
    color: "#C4943A",
    skills: [
      "LangChain",
      "Hybrid RAG",
      "BM25 Retrieval",
      "Semantic Search",
      "Vector Embeddings",
      "LLM Orchestration",
      "Multi-Agent Systems",
      "NLP",
      "Deep Learning",
      "OpenCV",
      "Scikit-Learn",
      "BioBERT",
    ],
  },
  {
    category: "Voice & Automation",
    color: "#C4943A",
    skills: ["N8N", "Vapi", "ElevenLabs", "OmniDimension", "EasyOCR"],
  },
  {
    category: "Backend",
    color: "#C4943A",
    skills: ["FastAPI", "Flask", "Node.js", "REST APIs", "Postman"],
  },
  {
    category: "DevOps / MLOps",
    color: "#C4943A",
    skills: ["Git", "Docker", "Azure", "Vercel", "CVAT"],
  },
  {
    category: "Web & Data",
    color: "#C4943A",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "HTML / CSS",
      "Vector Databases",
      "SQL",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 section-alt">
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
            <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C1410] font-['Space_Grotesk'] mb-12">
            Technical Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + gi * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-[#E8DDD0] p-6 hover:shadow-lg hover:border-[#C4943A]/30 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{group.icon}</span>
                  <h3
                    className="font-bold text-base font-['Space_Grotesk']"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.2 + gi * 0.08 + si * 0.04,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="px-3 py-1.5 bg-[#F5EDE0] text-[#5C4A32] text-xs font-medium rounded-lg border border-[#E8DDD0] hover:bg-[#C4943A]/10 hover:border-[#C4943A]/40 hover:text-[#1C1410] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-[#8B7355]">
              Always learning — currently deepening expertise in{" "}
              <span className="text-[#C4943A] font-semibold">Agentic AI architectures</span>,{" "}
              <span className="text-[#C4943A] font-semibold">LLM fine-tuning</span>, and{" "}
              <span className="text-[#C4943A] font-semibold">production MLOps</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
