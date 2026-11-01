import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import ForWho from "@/components/ForWho";
import Services from "@/components/Services";
import Work from "@/components/Work";
import BrandWorlds from "@/components/BrandWorlds";
import Automation from "@/components/Automation";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Motion from "@/components/Motion";
import BottomNav from "@/components/BottomNav";

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
