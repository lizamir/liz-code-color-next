import WaveBackground from "./WaveBackground";
import BusinessCard from "./BusinessCard";
import { PROOF, SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <WaveBackground />
      <div className="hero-shade" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy" data-in>
          {SITE.available && (
            <p className="avail reveal">
              <span className="live-dot" aria-hidden="true" /> {SITE.availableText}
            </p>
          )}
          <p className="eyebrow reveal" style={{ ["--d" as string]: 1 }}>
            WEB DESIGN · DEVELOPMENT · AI
          </p>
          <h1 id="hero-title" className="display">
            <span className="mask">
              <span style={{ ["--i" as string]: 0, ["--base" as string]: "120ms" }}>אני הופכת</span>
            </span>
            <span className="mask">
              <span style={{ ["--i" as string]: 1, ["--base" as string]: "120ms" }}>
                <em>רעיונות</em> לאתרים
              </span>
            </span>
            <span className="mask">
              <span style={{ ["--i" as string]: 2, ["--base" as string]: "120ms" }}>שאי אפשר לפספס.</span>
            </span>
          </h1>
          <p className="lead reveal" style={{ ["--d" as string]: 4 }}>
            אתרים עם אופי, פיתוח מותאם אישית ויישום AI, לעסקים עצמאיים, מותגים וצוותים שרוצים לקחת את הדיגיטל שלהם קדימה.
          </p>
          <div className="hero-actions reveal" style={{ ["--d" as string]: 5 }}>
            <a className="btn btn-lime" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              בואו נדבר בוואטסאפ ↗
            </a>
            <a className="btn btn-ghost" href="#work">
              <span>לצפייה בעבודות ↓</span>
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
        <BusinessCard />
      </div>

      <a className="scroll-cue" href="#work" aria-label="לגלול לעבודות">
        <span>SCROLL</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
