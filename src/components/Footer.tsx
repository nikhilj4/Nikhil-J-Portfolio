import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#E8DDD0]" style={{ backgroundColor: "rgba(242,235,224,0.55)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#C4943A] flex items-center justify-center">
            <span className="text-white font-bold text-xs font-['Space_Grotesk']">NJ</span>
          </div>
          <span className="text-sm text-[#8B7355]">
            Designed & Built by{" "}
            <span className="text-[#C4943A] font-semibold">Nikhil J</span> · 2026
          </span>
        </div>

        {/* Right: Social */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:nikhiljram4@gmail.com"
            className="p-2 text-[#8B7355] hover:text-[#C4943A] transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://linkedin.com/in/nikhil-j-ram"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#8B7355] hover:text-[#C4943A] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href="https://github.com/nikhilj4"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#8B7355] hover:text-[#C4943A] transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
