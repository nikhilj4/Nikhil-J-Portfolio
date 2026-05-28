"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Copy, Check, CalendarDays } from "lucide-react";
import { LinkedInIcon } from "@/components/BrandIcons";
import { GitHubCalendar } from "react-github-calendar";
import BookingModal from "@/components/BookingModal";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-md text-[#8B7355] hover:text-[#C4943A] hover:bg-[#F5EDE0] transition-all"
      title="Copy"
    >
      {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
    </button>
  );
}

const actionCards = [
  {
    icon: Phone,
    iconColor: "#22C55E",
    iconBg: "#22C55E18",
    label: "Phone",
    value: "+91 84311 25025",
    copyValue: "+918431125025",
    primaryLabel: "Call Me",
    primaryHref: "tel:+918431125025",
    secondaryLabel: "Send Hi 💬",
    secondaryHref: "https://wa.me/918431125025?text=Hi%20Nikhil!%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect.",
    secondaryIsWhatsApp: true,
  },
  {
    icon: Mail,
    iconColor: "#C4943A",
    iconBg: "#C4943A18",
    label: "Email",
    value: "nikhiljram4@gmail.com",
    copyValue: "nikhiljram4@gmail.com",
    primaryLabel: "Send a mail",
    primaryHref: "mailto:nikhiljram4@gmail.com",
    secondaryLabel: null,
    secondaryHref: null,
    secondaryIsWhatsApp: false,
  },
  {
    icon: LinkedInIcon,
    iconColor: "#0A66C2",
    iconBg: "#0A66C218",
    label: "LinkedIn",
    value: "nikhil-j-ram",
    copyValue: "https://linkedin.com/in/nikhil-j-ram",
    primaryLabel: "Let's Connect",
    primaryHref: "https://linkedin.com/in/nikhil-j-ram",
    secondaryLabel: null,
    secondaryHref: null,
    secondaryIsWhatsApp: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-0.5 bg-[#C4943A]" />
            <span className="text-[#C4943A] font-semibold text-sm uppercase tracking-widest">Contact</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Heading + Book CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1C1410] font-['Space_Grotesk'] leading-tight mb-6">
                Let&apos;s build something{" "}
                <span className="text-[#C4943A]">meaningful</span>{" "}
                together.
              </h2>
              <p className="text-[#5C4A32] leading-relaxed mb-8 max-w-sm">
                Open to AI/ML roles, freelance AI projects, collaborations, and product builds.
                Pick how you&apos;d like to reach out.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3.5 bg-[#C4943A] text-white font-semibold rounded-xl hover:bg-[#A07A2E] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <CalendarDays size={18} />
                Book a Call
              </button>
            </motion.div>

            {/* Right: Action cards */}
            <div className="space-y-3">
              {actionCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl border border-[#E8DDD0] px-5 py-4 flex items-center gap-4 hover:border-[#C4943A]/40 hover:shadow-md transition-all"
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <card.icon size={18} style={{ color: card.iconColor }} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#8B7355] font-medium mb-0.5">{card.label}</div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-[#1C1410] truncate">{card.value}</span>
                      <CopyButton text={card.copyValue} />
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {card.secondaryLabel && card.secondaryHref && (
                      <a
                        href={card.secondaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                          card.secondaryIsWhatsApp
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "border border-[#E8DDD0] text-[#5C4A32] hover:border-[#C4943A] hover:text-[#C4943A]"
                        }`}
                      >
                        {card.secondaryLabel}
                      </a>
                    )}
                    <a
                      href={card.primaryHref}
                      target={card.primaryHref.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[#E8DDD0] text-[#5C4A32] text-xs font-semibold rounded-lg hover:border-[#C4943A] hover:text-[#C4943A] transition-all"
                    >
                      {card.primaryLabel}
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* GitHub calendar */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="bg-white rounded-2xl border border-[#E8DDD0] p-5 mt-1 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#1C1410] font-['Space_Grotesk']">
                    GitHub Activity
                  </span>
                  <a
                    href="https://github.com/nikhilj4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C4943A] hover:underline font-medium"
                  >
                    @nikhilj4
                  </a>
                </div>
                {/*
                  dir="rtl" makes the overflow scroll start at the RIGHT edge,
                  showing the most recent weeks without any JS. The inner div
                  resets direction so the calendar content renders normally.
                */}
                <div className="overflow-x-auto" dir="rtl">
                  <div dir="ltr">
                  <GitHubCalendar
                    username="nikhilj4"
                    colorScheme="light"
                    theme={{ light: ["#F5EDE0", "#F0D9B5", "#D4A853", "#C4943A", "#8B7355"] }}
                    fontSize={11}
                    blockSize={11}
                    blockMargin={3}
                  />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
