"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CATEGORIES, PROJECTS, type Category, type Project } from "@/lib/content";

function Card({ p, featured }: { p: Project; featured?: boolean }) {
  const caseHref = `/work/${p.slug}/`;
  return (
    <article className={`card${featured ? " card-featured" : ""}`} data-tone={p.tone}>
      <div className="card-media">
        <Image src={p.cover} alt={p.coverAlt} width={1600} height={1000} sizes={featured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 50vw"} priority={featured} />
        <span className="card-no" aria-hidden="true">
          {p.no}
        </span>
        {featured && <span className="card-badge">פרויקט מוביל</span>}
      </div>
      <div className="card-body">
        <p className="card-kicker">
          {p.kicker} · {p.year}
        </p>
        <h3>
          <Link href={caseHref} className="card-link" data-cursor="לפרטים">
            {p.title}
          </Link>
        </h3>
        <p className="card-summary">{p.summary}</p>
        <ul className="tags" aria-label="טכנולוגיות">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="card-actions">
          {p.links.map((l) => (
            <a key={l.href} className="chip-link" href={l.href} {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {l.label} {l.external ? "↗" : "↙"}
            </a>
          ))}
          <span className="card-more" aria-hidden="true">
            Case study ←
          </span>
        </div>
      </div>
    </article>
  );
}

/** The selected work: a flagship project, then the rest in a grid, filterable by kind of work. */
export default function Work() {
  const [cat, setCat] = useState<"all" | Category>("all");
  const shown = PROJECTS.filter((p) => cat === "all" || p.categories.includes(cat));
  const [first, ...rest] = shown;

  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">
              <b>01</b> SELECTED WORK
            </p>
            <h2 id="work-title" className="title">
              פרויקטים <em>נבחרים</em>
            </h2>
          </div>
          <p className="lead">עיצוב, פיתוח וחוויית משתמש. לכל פרויקט יש עמוד שמסביר את האתגר, את ההחלטות ומה נבנה בפועל.</p>
        </div>

        <div className="filters reveal" role="group" aria-label="סינון עבודות">
          {CATEGORIES.map((c) => ({ ...c, count: c.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.categories.includes(c.id as Category)).length }))
            .filter((c) => c.count > 0) /* a category with no project yet is not offered */
            .map((c) => (
              <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
                {c.label}
                <small>{c.count}</small>
              </button>
            ))}
        </div>
        <p className="sr-only" aria-live="polite">
          מוצגים {shown.length} פרויקטים
        </p>

        <div className="work-grid" key={cat}>
          {first && <Card p={first} featured={first.featured} />}
          {rest.map((p) => (
            <Card key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
