import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Ribbon from "@/components/sections/Ribbon";
import ForWho from "@/components/sections/ForWho";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import BrandWorlds from "@/components/features/brand-worlds/BrandWorlds";
import Automation from "@/components/features/automation/Automation";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Motion from "@/components/motion/Motion";
import BottomNav from "@/components/layout/BottomNav";

/** The business site: what I build for business owners, in their words. The technical side lives on /dev/. */
export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Ribbon />
        <ForWho />
        <Services />
        <Work />
        <BrandWorlds />
        <Automation />
        <Testimonials />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      <Reveal />
      <Motion />
    </>
  );
}
