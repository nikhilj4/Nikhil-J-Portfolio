import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import HowIBuild from "@/components/HowIBuild";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <GridBackground>
      <Navbar />
      <Hero />
      <ToolsMarquee />
      <About />
      <Experience />
      <Projects />
      <HowIBuild />
      <Skills />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </GridBackground>
  );
}
