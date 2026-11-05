import Link from "next/link";
import { PROJECTS, type Project } from "@/content";
import Arrow from "@/components/ui/Arrow";

/** The top of a project page: title, summary, year, role and the links to the live work. */
export default function CaseHero({ p, links }: { p: Project; links: Project["links"] }) {
  return (
    <section className="case-hero" data-tone={p.tone}>
      <div className="container">
        <Link className="case-back" href="/#work">
          <Arrow dir="right" size={16} /> כל העבודות
        </Link>
        <p className="eyebrow">
          CASE STUDY · {p.no} / {String(PROJECTS.length).padStart(2, "0")}
        </p>
        <h1 className="display" dir="ltr">
          {p.title}
        </h1>
        <p className="lead">
          {p.kicker}. {p.summary}
        </p>
        <dl className="meta">
          <div>
            <dt>שנה</dt>
            <dd>{p.year}</dd>
          </div>
          <div>
            <dt>תפקיד</dt>
            <dd>{p.role.join(" · ")}</dd>
          </div>
        </dl>
        <div className="case-actions">
          {links.map((l, k) => (
            <a
              key={l.href}
              className={`btn ${k === 0 ? "btn-ink" : "btn-ghost"}`}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span>
                {l.label} <Arrow dir={l.external ? "out" : "in"} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
