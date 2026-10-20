import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Solutions from "@/components/Solutions";
import AiMap from "@/components/AiMap";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE } from "@/lib/content";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Solutions />
        <AiMap />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <div className="mobile-bar">
        <a className="btn btn-ghost btn-sm" href={`tel:+972${SITE.phone.slice(1)}`}>
          התקשרו
        </a>
        <a className="btn btn-primary btn-sm" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          וואטסאפ
        </a>
      </div>
      <Reveal />
    </>
  );
}
