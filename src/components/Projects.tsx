"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Phone } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Webchat LumyBot",
    subtitle: "Production SaaS Chatbot",
    image: "/images/project-lumybot.svg",
    description:
      "Scalable SaaS chatbot built on FastAPI with Hybrid RAG (BM25 + Semantic Search + Vector embeddings) for context-aware retrieval. Deployed in production with optimized latency for real business workloads.",
    tags: ["FastAPI", "Hybrid RAG", "BM25", "Vector DB", "LangChain", "Python"],
    year: "2025",
    highlight: true,
  },
  {
    title: "ERP LumyBot",
    subtitle: "Multi-Agent Enterprise AI",
    image: "/images/project-erp.svg",
    description:
      "Multi-Agent AI ERP assistant with RAG knowledge retrieval, conversational memory, and intelligent query routing for enterprise automation. Handles complex business queries across departments.",
    tags: ["Multi-Agent", "LangChain", "RAG", "Memory", "Query Routing", "FastAPI"],
    year: "2025",
    highlight: true,
  },
  {
    title: "Telegram Job Bot",
    subtitle: "N8N Automation for Job Seekers",
    image: "/images/project-telegram.svg",
    description:
      "End-to-end Telegram automation built on N8N — scrapes, filters, deduplicates, and pushes curated fresher openings to subscribers in real time. Running a live community of active job seekers.",
    tags: ["N8N", "Telegram API", "Automation", "Web Scraping", "Real-time"],
    year: "2025",
    link: null,
  },
  {
    title: "AI Outbound Calling Agent",
    subtitle: "Voice AI · Autonomous Calls",
    image: "/images/project-voiceai.svg",
    description:
      "Fully autonomous voice agent using N8N, Vapi, ElevenLabs, and OmniDimension with real-time STT/TTS and conversational LLM routing for lead qualification & outreach. Try calling it live.",
    tags: ["Vapi", "ElevenLabs", "OmniDimension", "STT/TTS", "N8N", "Voice AI"],
    year: "2025",
    callNumber: "+91 80487 99687",
  },
  {
    title: "VisualAid",
    subtitle: "Image Analysis for the Visually Impaired",
    image: "/images/project-visualaid.svg",
    description:
      "Accessibility web app that extracts text, generates descriptive image captions, and converts results to audio output for blind users. Built to bridge the visual gap through AI.",
    tags: ["OpenCV", "OCR", "Image Captioning", "Text-to-Speech", "Accessibility"],
    year: "Apr – Jun 2025",
  },
  {
    title: "Rose Crop Disease Detection",
    subtitle: "VGG16 · Real-time Diagnosis",
    image: "/images/project-rosedisease.svg",
    description:
      "Real-time crop disease detection using VGG16 deep learning with a web interface for instant leaf-image diagnosis and fertilizer recommendation. Designed for agricultural field use.",
    tags: ["VGG16", "Deep Learning", "Computer Vision", "Flask", "Transfer Learning"],
    year: "Oct 2024 – Mar 2025",
  },
];

const freelance = [
  {
    name: "Lead To Enroll",
    domain: "leadtoenroll.com",
    href: "https://leadtoenroll.com",
    desc: "Education lead generation & student enrollment platform",
    dot: "#4A90D9",
  },
  {
    name: "The Eco Ranch Kanakpura",
    domain: "theecoranchkanakapura.in",
    href: "https://theecoranchkanakapura.in",
    desc: "Eco resort & farm stay experience near Bangalore",
    dot: "#5BA85C",
  },
  {
    name: "Nova Logic Studio",
    domain: "novalogicstudio.in",
    href: "https://novalogicstudio.in",
    desc: "Digital creative studio & web design agency",
    dot: "#8B5CF6",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20">
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
            <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C1410] font-['Space_Grotesk'] mb-12">
            Things I&apos;ve Built
          </h2>

          {/* Bento project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className={`group bg-white rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col ${
                  p.highlight
                    ? "border-[#C4943A]/40 ring-1 ring-[#C4943A]/10"
                    : "border-[#E8DDD0]"
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-[#F5EDE0] h-44">
                  {p.highlight && (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 bg-[#C4943A] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                      ⚡ Live in Production
                    </div>
                  )}
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={340}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs text-[#8B7355] mb-1">{p.year}</div>
                  <h3 className="font-bold text-[#1C1410] text-lg font-['Space_Grotesk'] mb-0.5 group-hover:text-[#C4943A] transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#C4943A] mb-2">{p.subtitle}</div>
                  <p className="text-sm text-[#5C4A32] leading-relaxed flex-1 mb-4">{p.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#F5EDE0] text-[#8B7355] text-[11px] font-medium rounded-md border border-[#E8DDD0] group-hover:border-[#C4943A]/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    {p.callNumber && (
                      <a
                        href={`tel:${p.callNumber.replace(/\s/g, "")}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C4943A] text-white text-xs font-semibold rounded-lg hover:bg-[#A07A2E] transition-colors"
                      >
                        <Phone size={12} />
                        Try Live: {p.callNumber}
                      </a>
                    )}
                    {!p.callNumber && (
                      <span className="text-xs text-[#8B7355] italic">
                        {p.year}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Freelance section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <ExternalLink size={16} className="text-[#C4943A]" />
              <h3 className="font-semibold text-[#1C1410] font-['Space_Grotesk'] text-lg">
                Freelance Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {freelance.map((f, i) => (
                <motion.a
                  key={f.domain}
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden hover:shadow-xl hover:-translate-y-1.5 hover:border-[#C4943A]/40 transition-all duration-300 flex flex-col"
                >
                  {/* Browser chrome */}
                  <div className="bg-[#F5EDE0] px-3 py-2 flex items-center gap-2 border-b border-[#E8DDD0] flex-shrink-0">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex-1 bg-white/70 rounded px-2 py-0.5 text-[10px] text-[#8B7355] truncate ml-1 font-mono">
                      {f.domain}
                    </div>
                    <ExternalLink size={11} className="text-[#8B7355] group-hover:text-[#C4943A] transition-colors flex-shrink-0" />
                  </div>

                  {/* Website screenshot via thum.io (free, no API key) */}
                  <div className="relative h-44 overflow-hidden bg-[#F5EDE0]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://image.thum.io/get/width/600/crop/800/${f.href}`}
                      alt={`${f.name} preview`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Colored accent dot overlay */}
                    <div
                      className="absolute top-2 left-2 w-2 h-2 rounded-full opacity-80"
                      style={{ backgroundColor: f.dot }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="font-bold text-[#1C1410] text-sm font-['Space_Grotesk'] mb-1 group-hover:text-[#C4943A] transition-colors">
                      {f.name}
                    </div>
                    <p className="text-xs text-[#8B7355] leading-relaxed flex-1">{f.desc}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#C4943A]">
                      View Live <ExternalLink size={11} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
