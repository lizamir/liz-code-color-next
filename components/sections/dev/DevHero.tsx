import Link from "next/link";
import { DEV_PROOF, SITE } from "@/content";
import Arrow from "@/components/ui/Arrow";
import { devActions, devGhost } from "./devClasses";

/** The opening of the technical page: who Liz is as a developer, with GitHub, LinkedIn and the CV. */
export default function DevHero() {
  return (
    <section
      className="on-deep [padding:170px_0_110px] text-on-deep mobile:[padding:130px_0_80px]"
      aria-labelledby="dev-title"
    >
      <div className="container grid grid-cols-[1.45fr_0.55fr] [align-items:end] gap-[60px] mobile:grid-cols-[1fr] mobile:gap-9">
        <div className="reveal grid gap-6">
          <p
            className="[justify-self:end] text-left text-on-deep-2 [font:600_0.95rem/1.4_ui-monospace,'SF_Mono',Menlo,Consolas,monospace]"
            dir="ltr"
          >
            <span className="text-accent-light">liz@code-and-color</span> ~ $ whoami
            <i
              aria-hidden="true"
              className="ms-1 inline-block h-[1.1em] w-[0.6em] animate-[blink_1.1s_steps(2,start)_infinite] bg-idea align-[-0.2em]"
            />
          </p>
          <h1 id="dev-title" className="display [font-size:clamp(2.5rem,5.4vw,4.8rem)] leading-[1.02]">
            {SITE.person}, <em className="text-accent-light">מפתחת</em> Full‑Stack
          </h1>
          <p className="lead">
            מעל 4 שנות ניסיון בפיתוח מערכות, אינטגרציות ואתרים. היום אני בונה ב‑React, Next.js ו‑TypeScript, עם Supabase
            בצד הנתונים, ומיישמת סוכני AI ואוטומציות ב‑n8n. פתוחה למשרה ולשילוב בצוותים.
          </p>
          <div className={devActions}>
            <a className="btn btn-accent" href={SITE.github} target="_blank" rel="noreferrer">
              <span>
                GitHub <Arrow dir="out" />
              </span>
            </a>
            <a className={devGhost} href={SITE.linkedin} target="_blank" rel="noreferrer">
              <span>
                LinkedIn <Arrow dir="out" />
              </span>
            </a>
            <Link className={devGhost} href="/resume/">
              <span>
                קורות חיים <Arrow dir="in" />
              </span>
            </Link>
          </div>
        </div>
        <ul className="reveal m-0 grid list-none gap-3 p-0" style={{ ["--d" as string]: 2 }} aria-label="בקצרה">
          {DEV_PROOF.map((p) => (
            <li
              key={p.label}
              className="grid gap-1 rounded-[20px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-5 py-4"
            >
              <b dir="ltr" className="text-right text-idea [font:900_1.9rem/1_var(--font-display)]">
                {p.value}
                {p.unit && <small className="text-[0.9rem] text-on-deep-2"> {p.unit}</small>}
              </b>
              <span className="text-[0.98rem] text-on-deep-2">{p.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
