import Link from "next/link";
import Arrow from "./Arrow";
import Devices from "./Devices";
import { PROJECTS, type Project } from "@/lib/content";
import GhostWord from "./GhostWord";

function Showcase({ p, i, tech }: { p: Project; i: number; tech: boolean }) {
  // business visitors get the story; the code link and the stack belong to the technical page
  const code = p.links.find((l) => l.href.includes("github.com"));
  const second = tech ? (code ?? p.links[0]) : p.links.find((l) => l !== code);
  return (
    <article className="pw" data-tone={p.tone} style={{ ["--i" as string]: i }}>
      <div className="pw-media">
        <span className="pw-no" aria-hidden="true">
          {p.no}
        </span>
        <Devices mock={p.mock} alt={p.coverAlt} priority={i === 0} />
      </div>
      <div className="pw-body">
        <p className="pw-kicker">
          {p.kicker} · {p.year}
        </p>
        <h3 dir="ltr">
          <Link href={`/work/${p.slug}/`} className="pw-link" data-cursor="לפרטים">
            {p.title}
          </Link>
        </h3>
        <p className="pw-summary">{p.summary}</p>
        {tech && (
          <ul className="tags" aria-label="טכנולוגיות">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
        <div className="pw-actions">
          <Link className="btn btn-lime" href={`/work/${p.slug}/`}>
            <span>{tech ? "למקרה הבוחן" : "לסיפור המלא"} <Arrow /></span>
          </Link>
          {[second].filter((l) => l !== undefined).map((l) => (
            <a key={l.href} className="btn btn-ghost" href={l.href} {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}>
              <span>
                {l.label} <Arrow dir={l.external ? "out" : "in"} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/** Selected work as a stack of full-width cards: each project sits on a monitor with a phone in front. */
export default function Work({ tech = false }: { tech?: boolean }) {
  const id = tech ? "dev-projects" : "work";
  return (
    <section className="section work" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-head reveal">
          <GhostWord word={tech ? "code" : "work"} />
          <div>
            <p className="eyebrow">{tech ? "PROJECTS · STACK · CODE" : "SELECTED WORK"}</p>
            <h2 id={`${id}-title`} className="title">
              {tech ? (
                <>
                  פרויקטים <em>מבפנים</em>
                </>
              ) : (
                <>
                  פרויקטים <em>נבחרים</em>
                </>
              )}
            </h2>
          </div>
          <p className="lead">
            {tech
              ? "כל פרויקט עם הסטאק, ההחלטות הטכניות וקישור לקוד או לדמו חי."
              : "כל אתר נבנה סביב העסק שלו, ונבדק על מסך גדול ועל טלפון. לכל פרויקט יש עמוד שמספר מה היה צריך ומה נבנה."}
          </p>
        </div>
        <div className="pw-stack">
          {PROJECTS.map((p, i) => (
            <Showcase key={p.slug} p={p} i={i} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
