"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, CalendarDays } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Hero is min-h-screen; transition to pill after leaving it (~85% of vh)
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll(); // run on mount so server/client match
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-5xl mx-4 mt-3 pointer-events-auto">
        {/*
          Single container — always visible.
          In hero (scrolled=false): transparent, no border, no shadow.
          Past hero (scrolled=true): frosted glass pill with entrance-style fade.
          CSS transition handles the smooth visual morphing between the two states.
        */}
        <div
          className={`rounded-2xl border px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-md border-[#E8DDD0] shadow-lg"
              : "bg-transparent border-transparent shadow-none"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#C4943A]/60 shadow-sm group-hover:scale-105 transition-transform">
                <Image
                  src="/images/nikhil j.png"
                  alt="Nikhil J"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-[#1C1410] text-sm hidden sm:block font-['Space_Grotesk']">
                Nikhil J
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-0.5">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="px-3 py-1.5 text-sm text-[#5C4A32] hover:text-[#C4943A] hover:bg-[#F5EDE0] rounded-lg transition-all duration-200 font-medium"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="/Nikhil_J_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E8DDD0] text-[#5C4A32] text-sm rounded-xl font-semibold hover:border-[#C4943A] hover:text-[#C4943A] transition-all"
              >
                <Download size={13} />
                Resume
              </a>
              <button
                onClick={() => handleNav("#contact")}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-[#C4943A] text-white text-sm rounded-xl font-semibold hover:bg-[#A07A2E] transition-colors shadow-sm"
              >
                <CalendarDays size={13} />
                Book Call
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-1.5 text-[#5C4A32] hover:text-[#C4943A] transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu — shows in both hero and pill states */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
              >
                <div
                  className={`mt-2 pt-2 pb-1 flex flex-col gap-0.5 border-t ${
                    scrolled ? "border-[#E8DDD0]" : "border-[#E8DDD0]/40"
                  }`}
                >
                  {links.map((l) => (
                    <button
                      key={l.href}
                      onClick={() => handleNav(l.href)}
                      className="w-full text-left px-3 py-2 text-sm text-[#5C4A32] hover:text-[#C4943A] hover:bg-[#F5EDE0] rounded-lg transition-all font-medium"
                    >
                      {l.label}
                    </button>
                  ))}
                  <div className="flex gap-2 mt-2">
                    <a
                      href="/Nikhil_J_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-[#E8DDD0] text-[#5C4A32] text-sm rounded-xl font-semibold hover:border-[#C4943A] hover:text-[#C4943A] transition-all"
                    >
                      <Download size={13} />
                      Resume
                    </a>
                    <button
                      onClick={() => handleNav("#contact")}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#C4943A] text-white text-sm rounded-xl font-semibold hover:bg-[#A07A2E] transition-colors"
                    >
                      <CalendarDays size={13} />
                      Book Call
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
