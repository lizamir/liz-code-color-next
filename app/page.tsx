import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import Work from "@/components/Work";
import BrandWorlds from "@/components/BrandWorlds";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Motion from "@/components/Motion";
import { SITE } from "@/lib/content";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Ribbon />
        <Work />
        <BrandWorlds />
        <Services />
        <Automation />
        <About />
        <Contact />
      </main>
      <Footer />
      <div className="mobile-bar">
        <a className="btn btn-ghost btn-sm" href={`tel:+972${SITE.phone.slice(1)}`}>
          <span>התקשרו</span>
        </a>
        <a className="btn btn-wa btn-sm" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={18} /> וואטסאפ
        </a>
      </div>
      <Reveal />
      <Motion />
    </>
  );
}
