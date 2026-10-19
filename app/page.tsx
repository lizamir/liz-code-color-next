import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import BrandWorlds from "@/components/BrandWorlds";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PageEffects from "@/components/PageEffects";

export default function Home() {
  return (
    <>
      <div className="cursor-glow" aria-hidden="true"></div>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Projects />
        <BrandWorlds />
        <Services />
        <Automation />
        <About />
        <Contact />
      </main>
      <PageEffects />
    </>
  );
}
