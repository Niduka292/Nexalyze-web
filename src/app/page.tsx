import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

/**
 * Nexalyze — single-page marketing site.
 * All sections are composed here in order.
 * The Team section lives on its own dedicated page at /team.
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
