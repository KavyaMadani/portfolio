import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Hackathons } from "@/components/Hackathons";
import { Github } from "@/components/Github";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";
import { MouseGlow } from "@/components/MouseGlow";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      
      <main className="flex flex-col w-full relative">
        <Particles quantity={80} color="#9333ea" />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Github />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
