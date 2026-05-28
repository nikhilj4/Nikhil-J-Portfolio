"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    // Reset to 0 on cleanup — fires when inView becomes false
    return () => {
      cancelAnimationFrame(rafId);
      setCount(0);
    };
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-[#C4943A] font-['Space_Grotesk']">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { target: 3, suffix: "", label: "Companies", sub: "Haystek · Avijo · Microsoft" },
  { target: 6, suffix: "+", label: "Projects", sub: "SaaS · Voice · Healthcare · CV" },
  { target: 2, suffix: "", label: "Hackathon Awards", sub: "SIH 2025 · BioMed 2024" },
  { target: 1, suffix: "", label: "National Finalist", sub: "SIH 2025 · Top 5 Teams" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#C4943A]" />
            <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">About Me</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Bio text */}
            <div className="space-y-5">
              <h2 className="text-4xl font-bold text-[#1C1410] font-['Space_Grotesk'] leading-tight">
                Building AI that ships to{" "}
                <span className="text-[#C4943A]">production</span>
              </h2>
              <p className="text-[#5C4A32] leading-relaxed">
                I&apos;m a final-year B.Tech Computer Science (AI & ML) student at GITAM Deemed University, Bengaluru,
                passionate about building AI systems that solve real business problems at scale.
              </p>
              <p className="text-[#5C4A32] leading-relaxed">
                My work spans from building a production SaaS chatbot with{" "}
                <span className="text-[#C4943A] font-medium">Hybrid RAG</span> (BM25 + Semantic + Vector)
                at Haystek, to crafting an{" "}
                <span className="text-[#C4943A] font-medium">autonomous voice agent</span> using Vapi and
                ElevenLabs for real-time lead qualification. I&apos;ve also developed a{" "}
                <span className="text-[#C4943A] font-medium">healthcare AI assistant</span> with BioBERT
                and a multi-agent ERP automation system — all deployed on FastAPI.
              </p>
              <p className="text-[#5C4A32] leading-relaxed">
                I was a <span className="text-[#C4943A] font-medium">National Finalist at Smart India Hackathon 2025</span>,
                leading a team to build a data-analysis solution for the National Investigation Agency at KIET, Delhi NCR.
                I also won the <span className="text-[#C4943A] font-medium">Runner-Up at BioMed Bharat 2024</span> as team lead.
              </p>

            </div>

            {/* Right: Bento stat grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Large featured stat — National Finalist */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="col-span-2 bg-[#C4943A] rounded-2xl p-6 text-white hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-bold font-['Space_Grotesk'] mb-1">🏆</div>
                <div className="text-xl font-bold font-['Space_Grotesk']">National Finalist</div>
                <div className="text-sm opacity-80 mt-1">Smart India Hackathon 2025 · Top 5 Teams · KIET Delhi NCR</div>
              </motion.div>

              {/* Stats 2-up */}
              {stats.slice(0, 3).map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.42 + i * 0.1, duration: 0.5 }}
                  className={`bg-white rounded-2xl border border-[#E8DDD0] p-5 hover:shadow-lg hover:border-[#C4943A]/40 transition-all text-center ${i === 2 ? "col-span-2" : ""}`}
                >
                  <Counter target={s.target} suffix={s.suffix} />
                  <div className="text-sm font-semibold text-[#1C1410] mt-1 font-['Space_Grotesk']">{s.label}</div>
                  <div className="text-xs text-[#8B7355] mt-0.5">{s.sub}</div>
                </motion.div>
              ))}

              {/* Quote block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="col-span-2 bg-[#C4943A]/10 border border-[#C4943A]/20 rounded-2xl p-5"
              >
                <p className="text-[#5C4A32] text-sm italic leading-relaxed">
                  &ldquo;Driven by shipping scalable, low-latency AI for real business problems.
                  Not just theory — production-grade systems that run.&rdquo;
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
