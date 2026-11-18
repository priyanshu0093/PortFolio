import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hackathon from "@/components/Hackathon";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08090A] text-[#d6c8b2] selection:bg-[#e97f61] selection:text-[#08090A]">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Hackathon />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
