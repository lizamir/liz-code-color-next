import Link from "next/link";
import { DEV_PROOF, SITE } from "@/content";
import Arrow from "@/components/ui/Arrow";

/** The opening of the technical page: who Liz is as a developer, with GitHub, LinkedIn and the CV. */
export default function DevHero() {
  return (
    <section className="dev-hero on-deep" aria-labelledby="dev-title">
      <div className="container dev-hero-grid">
        <div className="dev-hero-copy reveal">
          <p className="dev-prompt" dir="ltr">
            <span>liz@code-and-color</span> ~ $ whoami
            <i aria-hidden="true" />
          </p>
          <h1 id="dev-title" className="display">
            {SITE.person}, <em>מפתחת</em> Full‑Stack
          </h1>
          <p className="lead">
            מעל 4 שנות ניסיון בפיתוח מערכות, אינטגרציות ואתרים. היום אני בונה ב‑React, Next.js ו‑TypeScript, עם Supabase
            בצד הנתונים, ומיישמת סוכני AI ואוטומציות ב‑n8n. פתוחה למשרה ולשילוב בצוותים.
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
  );
}
