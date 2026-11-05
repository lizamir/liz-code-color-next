import GridGlow from "@/components/motion/GridGlow";
import Arrow, { LoopArrow } from "@/components/ui/Arrow";
import BusinessCard from "@/components/features/business-card/BusinessCard";
import { PROOF, SITE } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import IdeaTitle from "@/components/features/hero-title/IdeaTitle";

/** The first screen of the home page: headline, buttons, short proof, and the business card. */
export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <GridGlow />

      <div className="container hero-grid">
        <div className="hero-copy" data-in>
          {SITE.available && (
            <p className="avail reveal">
              <span className="live-dot" aria-hidden="true" /> {SITE.availableText}
            </p>
          )}
          <p className="eyebrow reveal" style={{ ["--d" as string]: 1 }}>
            WEBSITES · AUTOMATIONS · FOR BUSINESS
          </p>
          <IdeaTitle before="אני הופכת" word="רעיונות" rest="לאתרים שאי אפשר לפספס." />
          <p className="lead sel reveal" style={{ ["--d" as string]: 4 }}>
            אתרים ודפי נחיתה שנראים בדיוק כמו העסק שלכם, ומחוברים לוואטסאפ וליומן, כדי שלקוחות יפנו, יקבעו ויחזרו.
          </p>
          <div className="hero-actions reveal" style={{ ["--d" as string]: 5 }}>
            <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> בואו נדבר בוואטסאפ
            </a>
            <a className="btn btn-ghost" href="#work">
              <span>לצפייה בעבודות <Arrow dir="down" /></span>
            </a>
          </div>
          <ul className="proof reveal" style={{ ["--d" as string]: 6 }} aria-label="בקצרה עליי">
            {PROOF.map((p) => (
              <li key={p.label}>
                <b>
                  {p.value}
                  {p.unit && <small> {p.unit}</small>}
                </b>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-card">
          <LoopArrow className="hero-loop" />
          <BusinessCard />
        </div>
      </div>

      <a className="scroll-cue" href="#work" aria-label="לגלול לעבודות">
        <span>SCROLL</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
