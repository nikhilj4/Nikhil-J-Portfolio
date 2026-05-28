"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import Image from "next/image";

const roles = [
  "AI & ML Engineer",
  "RAG & LLM Builder",
  "Multi-Agent Systems Dev",
  "Voice AI Creator",
  "FastAPI Deployer",
];

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 65);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((r) => (r + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <span className="text-[#C4943A] font-semibold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const stats = [
  { target: 3, suffix: "", label: "Internships" },
  { target: 6, suffix: "+", label: "Projects Built" },
  { target: 2, suffix: "", label: "Hackathon Awards" },
  { target: 1, suffix: "", label: "National Finalist" },
];

function HeroCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  // once: false → re-triggers every time element enters/leaves view
  const inView = useInView(ref, { once: false, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic: fast start, smooth deceleration
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
    <div ref={ref} className="text-2xl font-bold text-[#C4943A] font-['Space_Grotesk']">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-a absolute top-[15%] left-[8%] w-64 h-64 rounded-full bg-[#C4943A] opacity-[0.07]" />
        <div className="orb-b absolute top-[40%] right-[5%] w-80 h-80 rounded-full bg-[#8B7355] opacity-[0.06]" />
        <div className="orb-c absolute bottom-[10%] left-[30%] w-56 h-56 rounded-full bg-[#C4943A] opacity-[0.05]" />
        <div className="orb-a absolute top-[60%] right-[30%] w-40 h-40 rounded-full bg-[#D4A853] opacity-[0.08]" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C4943A]/10 border border-[#C4943A]/30 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#C4943A] animate-pulse" />
              <span className="text-[#8B7355] text-sm font-medium">Open to Opportunities</span>
            </motion.div>

            {/* Name */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1C1410] leading-none tracking-tight font-['Space_Grotesk'] whitespace-nowrap">
                Nikhil <span className="text-[#C4943A]">J</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="text-xl sm:text-2xl text-[#5C4A32] h-8">
              <Typewriter />
            </div>

            {/* Bio */}
            <p className="text-[#5C4A32] text-base leading-relaxed max-w-lg">
              Final-year B.Tech AI & ML engineer at GITAM, Bengaluru. Building production-grade AI —
              RAG-powered SaaS chatbots, multi-agent ERP automation, healthcare assistants,
              and voice/Telegram AI agents. Driven by shipping scalable, low-latency AI
              for real business problems.
            </p>

            {/* Location + Contact row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8B7355]">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#C4943A]" />
                Bengaluru, KA
              </span>
              <a href="mailto:nikhiljram4@gmail.com" className="flex items-center gap-1.5 hover:text-[#C4943A] transition-colors">
                <Mail size={14} className="text-[#C4943A]" />
                nikhiljram4@gmail.com
              </a>
              <a href="tel:+918431125025" className="flex items-center gap-1.5 hover:text-[#C4943A] transition-colors">
                <Phone size={14} className="text-[#C4943A]" />
                +91 84311 25025
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-[#C4943A] text-white font-semibold rounded-xl hover:bg-[#A07A2E] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <a
                href="/Nikhil_J_Resume.pdf"
                target="_blank"
                className="px-6 py-3 border-2 border-[#C4943A] text-[#C4943A] font-semibold rounded-xl hover:bg-[#C4943A] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/nikhil-j-ram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[#E8DDD0] text-[#8B7355] hover:text-[#C4943A] hover:border-[#C4943A] hover:bg-[#F5EDE0] transition-all"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://github.com/nikhilj4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[#E8DDD0] text-[#8B7355] hover:text-[#C4943A] hover:border-[#C4943A] hover:bg-[#F5EDE0] transition-all"
              >
                <GitHubIcon size={18} />
              </a>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-5 pt-2"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <HeroCounter target={s.target} suffix={s.suffix} />
                  <div className="text-xs text-[#8B7355] mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-[#C4943A]/30 flex items-center justify-center">
                {/* Inner ring */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-[#C4943A]/50 flex items-center justify-center bg-[#F2EBE0] overflow-hidden">
                  <Image
                    src="/images/nikhil j.png"
                    alt="Nikhil J"
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating badge: SIH */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-3 -right-4 bg-white border border-[#E8DDD0] rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="text-xs font-bold text-[#C4943A]">🏆 SIH 2025</div>
                <div className="text-[10px] text-[#8B7355]">National Finalist</div>
              </motion.div>
              {/* Floating badge: Haystek */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-4 bg-white border border-[#E8DDD0] rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="text-xs font-bold text-[#C4943A]">⚡ Haystek</div>
                <div className="text-[10px] text-[#8B7355]">AI/ML Intern</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-1 text-[#8B7355] hover:text-[#C4943A] transition-colors group"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
