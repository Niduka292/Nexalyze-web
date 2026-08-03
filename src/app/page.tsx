import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

/**
 * Nexora Solutions — single-page marketing site.
 * All sections are composed here in order.
 * Content lives in src/lib/data.ts for easy editing.
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
