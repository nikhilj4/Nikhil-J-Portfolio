"use client";
import { useEffect, useRef } from "react";

export default function GridBackground({ children }: { children: React.ReactNode }) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.background = `radial-gradient(circle 280px at ${e.clientX}px ${e.clientY}px, rgba(196,148,58,0.23), transparent 70%)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Mouse radial glow — pointer-events-none so it never blocks clicks */}
      <div
        ref={glowRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 60, transition: "background 0.15s ease-out" }}
      />
      <div className="relative" style={{ zIndex: 10 }}>{children}</div>
    </div>
  );
}
