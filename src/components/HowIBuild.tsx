"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Idea",
    desc: "Problem identification, user pain points, opportunity framing and market research.",
    tools: [],
  },
  {
    num: "02",
    title: "PRD",
    desc: "AI-assisted product requirements document — defining scope, success metrics, and user stories.",
    tools: ["Gemini", "Claude"],
  },
  {
    num: "03",
    title: "Planning",
    desc: "System architecture design, data flow diagrams, API contracts, and sprint planning.",
    tools: ["draw.io"],
  },
  {
    num: "04",
    title: "Design",
    desc: "UI/UX wireframes, component systems, prototyping, and design review.",
    tools: ["Sketch", "Figma", "Framer"],
  },
  {
    num: "05",
    title: "Coding",
    desc: "Full-stack implementation with AI pair-programming for rapid, production-quality output.",
    tools: ["VS Code", "Claude Code", "Antigravity"],
  },
  {
    num: "06",
    title: "Testing",
    desc: "Automated test suites, manual exploratory QA, edge case validation, and performance checks.",
    tools: ["Selenium", "Manual QA"],
  },
  {
    num: "07",
    title: "Deploying",
    desc: "CI/CD pipelines, cloud deployment, domain setup, and post-launch monitoring.",
    tools: ["Vercel", "Hostinger", "Railway", "GitHub"],
  },
];

export default function HowIBuild() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="how-i-build" className="py-20">
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
            <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">Process</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: sticky card */}
            <div className="lg:sticky lg:top-28">
              <h2 className="text-4xl font-bold text-[#1C1410] font-['Space_Grotesk'] leading-tight mb-4">
                How I Build{" "}
                <span className="text-[#C4943A]">Products</span>
              </h2>
              <p className="text-[#5C4A32] leading-relaxed mb-6">
                From early ambiguity to production-grade deployment — I follow a structured
                AI-assisted workflow that combines systematic planning with rapid iteration.
                Every project goes through these 7 stages.
              </p>
              {/* Summary chips */}
              <div className="flex flex-wrap gap-2">
                {["Idea → PRD", "Design → Code", "Test → Deploy"].map((c) => (
                  <span key={c} className="px-3 py-1.5 bg-[#C4943A]/10 text-[#8B7355] text-xs font-semibold rounded-full border border-[#C4943A]/20">
                    {c}
                  </span>
                ))}
              </div>

              {/* Vertical accent line (desktop) */}
              <div className="hidden lg:block mt-8 w-0.5 h-24 bg-gradient-to-b from-[#C4943A] to-transparent ml-1" />
            </div>

            {/* Right: step list */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E8DDD0] hidden sm:block" />

              <div className="space-y-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    className="relative sm:pl-16 group"
                  >
                    {/* Step dot */}
                    <div className="absolute left-3 top-5 w-6 h-6 rounded-full bg-white border-2 border-[#C4943A] hidden sm:flex items-center justify-center shadow-sm group-hover:bg-[#C4943A] transition-colors">
                      <span className="text-[10px] font-bold text-[#C4943A] group-hover:text-white transition-colors leading-none">
                        {i + 1}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-xl border border-[#E8DDD0] p-4 hover:border-[#C4943A]/40 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-[#C4943A] font-['Space_Grotesk']">{step.num}</span>
                            <h3 className="font-bold text-[#1C1410] font-['Space_Grotesk']">{step.title}</h3>
                          </div>
                          <p className="text-sm text-[#5C4A32] leading-relaxed mb-2">{step.desc}</p>
                          {step.tools.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {step.tools.map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-0.5 bg-[#F5EDE0] text-[#8B7355] text-[11px] font-medium rounded border border-[#E8DDD0]"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
