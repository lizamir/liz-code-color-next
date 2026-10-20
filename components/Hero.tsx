import Image from "next/image";
import { SITE } from "@/lib/content";

/** Short and clear: the promise, one main action, and two real desktop views of the work. */
export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span>
              עיצוב עם <em>אופי.</em>
            </span>
            <span>קוד עם עומק.</span>
          </h1>
          <p className="hero-sub">אתרים, מערכות וסוכני AI לעסקים.</p>
          <p className="hero-text">אני מחברת עיצוב, פיתוח ואוטומציה כדי לבנות חוויות דיגיטליות ותהליכים שמתאימים לעסק שלכם.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              בואו נדבר <span className="arrow" aria-hidden="true">←</span>
            </a>
            <a className="btn btn-ghost" href="#work">
              העבודות שלי
            </a>
          </div>
          <p className="hero-line" aria-hidden="true">
            DESIGN <i /> CODE <i /> AI <b />
          </p>
        </div>

        <div className="hero-shots">
          <figure className="shot shot-a">
            <Image src="/work/scoop-gelato-d.webp" alt="אתר SCOOP: המילה SCOOP באדום ענק על רקע צהוב ושלושה כדורי גלידה" width={1440} height={900} sizes="(max-width: 900px) 0px, 44vw" priority />
          </figure>
          <figure className="shot shot-b">
            <Image src="/work/glow-studio-d.webp" alt="אתר GLOW: צילום פנים באור יום וכותרת ״העור שלך. הקצב שלך.״" width={1440} height={900} sizes="(max-width: 900px) 100vw, 40vw" priority />
          </figure>
          <svg className="hero-path" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M24 54 C 24 30, 30 22, 40 22 L 46 22" />
          </svg>
        </div>
      </div>
    </section>
  );
}
