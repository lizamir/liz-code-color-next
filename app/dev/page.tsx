import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Ribbon from "@/components/sections/Ribbon";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Automation from "@/components/features/automation/Automation";
import AboutDev from "@/components/sections/dev/AboutDev";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Motion from "@/components/motion/Motion";
import BottomNav from "@/components/layout/BottomNav";
import DevContact from "@/components/sections/dev/DevContact";
import DevHero from "@/components/sections/dev/DevHero";
import { DEV_MARQUEE, DEV_NAV, DEV_SERVICES, SITE } from "@/content";

const TITLE = "למגייסים ולצוותי פיתוח";
const DESCRIPTION = "ליז חג׳ג׳, מפתחת Full‑Stack, יישום AI ואוטומציות: React, Next.js, TypeScript, Supabase, n8n, סוכני AI ואינטגרציות. פרויקטים, קוד וקורות חיים.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/dev/" },
  openGraph: { title: `${TITLE} | ${SITE.person}`, description: DESCRIPTION, url: "/dev/" },
};

const BOTTOM = [
  { href: "#dev-projects", label: "פרויקטים" },
  { href: "#stack", label: "סטאק" },
  { href: "#experience", label: "ניסיון" },
];

/** The technical half of the site: for recruiters and dev teams. Code, stack and experience up front. */
export default function DevPage() {
  return (
    <>
      <ScrollProgress />
      <Header nav={DEV_NAV} other={{ href: "/", label: "לבעלי עסקים" }} />
      <main id="main" className="dev">
        <DevHero />
        <Ribbon words={DEV_MARQUEE} />
        <Work tech />
        <Services items={DEV_SERVICES} id="dev-services" eyebrow="HOW I WORK" ghost="dev" lead="איך אני עובדת בפרויקטים ובצוותים, ומה מקבלים מזה." />
        <Automation dev />
        <AboutDev />
        <DevContact />
      </main>
      <Footer nav={DEV_NAV} />
      <BottomNav items={BOTTOM} />
      <Reveal />
      <Motion />
    </>
  );
}
