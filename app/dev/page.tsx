import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Ribbon from "@/components/Ribbon";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import AboutDev from "@/components/AboutDev";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Motion from "@/components/Motion";
import BottomNav from "@/components/BottomNav";
import Arrow from "@/components/Arrow";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { DEV_MARQUEE, DEV_NAV, DEV_PROOF, DEV_SERVICES, SITE } from "@/lib/content";

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
        <section className="dev-hero on-deep" aria-labelledby="dev-title">
          <div className="container dev-hero-grid">
            <div className="dev-hero-copy reveal">
              <p className="dev-prompt" dir="ltr">
                <span>liz@code-and-color</span> ~ $ whoami<i aria-hidden="true" />
              </p>
              <h1 id="dev-title" className="display">
                {SITE.person}, <em>מפתחת</em> Full‑Stack
              </h1>
              <p className="lead">
                מעל 4 שנות ניסיון בפיתוח מערכות, אינטגרציות ואתרים. היום אני בונה ב‑React, Next.js ו‑TypeScript, עם Supabase בצד הנתונים, ומיישמת סוכני AI ואוטומציות ב‑n8n. פתוחה למשרה ולשילוב בצוותים.
              </p>
              <div className="dev-actions">
                <a className="btn btn-accent" href={SITE.github} target="_blank" rel="noreferrer">
                  <span>
                    GitHub <Arrow dir="out" />
                  </span>
                </a>
                <a className="btn btn-ghost" href={SITE.linkedin} target="_blank" rel="noreferrer">
                  <span>
                    LinkedIn <Arrow dir="out" />
                  </span>
                </a>
                <Link className="btn btn-ghost" href="/resume/">
                  <span>
                    קורות חיים <Arrow dir="in" />
                  </span>
                </Link>
              </div>
            </div>
            <ul className="dev-proof reveal" style={{ ["--d" as string]: 2 }} aria-label="בקצרה">
              {DEV_PROOF.map((p) => (
                <li key={p.label}>
                  <b dir="ltr">
                    {p.value}
                    {p.unit && <small> {p.unit}</small>}
                  </b>
                  <span>{p.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Ribbon words={DEV_MARQUEE} />
        <Work tech />
        <Services items={DEV_SERVICES} id="dev-services" eyebrow="HOW I WORK" ghost="dev" lead="איך אני עובדת בפרויקטים ובצוותים, ומה מקבלים מזה." />
        <Automation dev />
        <AboutDev />
        <section className="section dev-contact on-deep" id="dev-contact" aria-labelledby="dev-contact-title">
          <div className="container dev-contact-inner reveal">
            <p className="eyebrow">LET&apos;S TALK</p>
            <h2 id="dev-contact-title" className="title">
              יש לכם <em>משרה</em> או צוות?
            </h2>
            <p className="lead">אשמח לשמוע על התפקיד, הצוות והמוצר.</p>
            <ul className="dev-links">
              <li>
                <span>מייל</span>
                <a href={`mailto:${SITE.email}`} dir="ltr">
                  {SITE.email}
                </a>
              </li>
              <li>
                <span>טלפון</span>
                <a href={`tel:+972${SITE.phone.slice(1)}`} dir="ltr">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={SITE.linkedin} target="_blank" rel="noreferrer" dir="ltr">
                  in/liz-hajage
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a href={SITE.github} target="_blank" rel="noreferrer" dir="ltr">
                  github.com/lizamir
                </a>
              </li>
            </ul>
            <div className="dev-actions">
              <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> וואטסאפ
              </a>
              <Link className="btn btn-ghost" href="/resume/">
                <span>
                  לקורות החיים <Arrow dir="in" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer nav={DEV_NAV} />
      <BottomNav items={BOTTOM} />
      <Reveal />
      <Motion />
    </>
  );
}
