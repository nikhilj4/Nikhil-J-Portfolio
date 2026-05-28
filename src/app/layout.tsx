import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil J — AI & ML Engineer",
  description:
    "Final-year B.Tech AI & ML engineer building production-grade AI — RAG-powered SaaS chatbots, multi-agent ERP automation, voice/Telegram AI agents, and FastAPI deployments.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "LangChain",
    "RAG",
    "Multi-Agent",
    "FastAPI",
    "Nikhil J",
  ],
  authors: [{ name: "Nikhil J" }],
  openGraph: {
    title: "Nikhil J — AI & ML Engineer",
    description:
      "Building production-grade AI for real business problems — RAG, Multi-Agent Systems, Voice AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
