import Link from "next/link";
import Devices from "./Devices";
import { PROJECTS, type Project } from "@/lib/content";

function Showcase({ p, i }: { p: Project; i: number }) {
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
        <ul className="tags" aria-label="טכנולוגיות">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="pw-actions">
          <Link className="btn btn-lime" href={`/work/${p.slug}/`}>
            <span>למקרה הבוחן ←</span>
          </Link>
          {p.links.slice(0, 1).map((l) => (
            <a key={l.href} className="btn btn-ghost" href={l.href} {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}>
              <span>
                {l.label} {l.external ? "↗" : "↙"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/** Selected work as a stack of full-width cards: each project sits on a monitor with a phone in front. */
export default function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">
              <b>02</b> SELECTED WORK
            </p>
            <h2 id="work-title" className="title">
              פרויקטים <em>נבחרים</em>
            </h2>
          </div>
          <p className="lead">כל אתר נבנה סביב המותג שלו, ונבדק על מסך גדול ועל טלפון. לכל פרויקט יש עמוד שמסביר את האתגר, את ההחלטות ומה נבנה בפועל.</p>
        </div>
        <div className="pw-stack">
          {PROJECTS.map((p, i) => (
            <Showcase key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
