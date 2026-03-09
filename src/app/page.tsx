import GridBackground from "@/components/GridBackground";
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
// import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GridBackground />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        {/* <Resume /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
