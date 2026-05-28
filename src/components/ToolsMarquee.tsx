"use client";

const tools = [
  { name: "Python",       emoji: "🐍", color: "#3776AB" },
  { name: "FastAPI",      emoji: "⚡", color: "#009688" },
  { name: "LangChain",    emoji: "🔗", color: "#1C3C5F" },
  { name: "RAG / LLM",   emoji: "🧠", color: "#7C3AED" },
  { name: "N8N",          emoji: "🔄", color: "#EA4B71" },
  { name: "Vapi",         emoji: "🎙️", color: "#5B5BF6" },
  { name: "ElevenLabs",   emoji: "🔊", color: "#1B1B2F" },
  { name: "Docker",       emoji: "🐳", color: "#2496ED" },
  { name: "Git",          emoji: "🌿", color: "#F05032" },
  { name: "Azure",        emoji: "☁️", color: "#0078D4" },
  { name: "Vercel",       emoji: "▲",  color: "#000000" },
  { name: "Next.js",      emoji: "◆",  color: "#000000" },
  { name: "Tailwind CSS", emoji: "🎨", color: "#06B6D4" },
  { name: "VS Code",      emoji: "💻", color: "#007ACC" },
  { name: "Claude API",   emoji: "✦",  color: "#C4943A" },
  { name: "Scikit-Learn", emoji: "📊", color: "#F7931E" },
  { name: "OpenCV",       emoji: "👁️", color: "#5C3EE8" },
  { name: "Flask",        emoji: "🧪", color: "#000000" },
  { name: "Node.js",      emoji: "🟢", color: "#339933" },
  { name: "BioBERT",      emoji: "🏥", color: "#E53E3E" },
  { name: "Vector DB",    emoji: "📦", color: "#8B5CF6" },
  { name: "SQL",          emoji: "🗄️", color: "#336791" },
  { name: "Postman",      emoji: "📮", color: "#FF6C37" },
  { name: "Railway",      emoji: "🚂", color: "#0B0D0E" },
];

const doubled = [...tools, ...tools];

export default function ToolsMarquee() {
  return (
    <section className="py-10 overflow-hidden border-y border-[#E8DDD0]">
      <div className="max-w-6xl mx-auto px-6 mb-5">
        <div className="flex items-center gap-3">
          <span className="w-8 h-0.5 bg-[#C4943A]" />
          <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">
            Tools & Technologies
          </span>
        </div>
      </div>

      <div className="marquee-container relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FAF7F2] to-transparent pointer-events-none" />

        <div className="animate-marquee gap-3 px-4">
          {doubled.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E8DDD0] rounded-full shadow-sm hover:border-[#C4943A]/50 hover:shadow-md transition-all cursor-default flex-shrink-0 mx-1.5"
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                style={{ backgroundColor: `${tool.color}18` }}
              >
                {tool.emoji}
              </span>
              <span className="text-sm font-medium text-[#1C1410] whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
