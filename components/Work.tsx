import Image from "next/image";
import Link from "next/link";
import { PROJECTS, type Project } from "@/lib/content";

function Item({ p, i }: { p: Project; i: number }) {
  const [caseLink, siteLink] = p.links;
  return (
    <article className="proj reveal" style={{ ["--surface" as string]: p.surface, ["--on-surface" as string]: p.onSurface }}>
      <div className="plate">
        <span className="plate-no" aria-hidden="true">
          {p.no}
        </span>
        <div className="plate-img">
          <Image src={`/work/${p.shot}-d.webp`} alt={p.alt} width={1440} height={900} sizes="(max-width: 820px) 92vw, (max-width: 1320px) 54vw, 700px" loading={i < 2 ? "eager" : "lazy"} />
        </div>
      </div>
      <div className="proj-body">
        <p className="proj-kicker">
          {p.kicker} · {p.year}
        </p>
        <h3>{p.title}</h3>
        <p className="proj-line">{p.line}</p>
        <div className="proj-links">
          <Link href={caseLink.href} aria-label={`${p.title}: מקרה בוחן`}>
            {caseLink.label} <span className="arrow" aria-hidden="true">←</span>
          </Link>
          <a href={siteLink.href} aria-label={`${p.title}: ${siteLink.label}`}>
            {siteLink.label} <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

/** One gallery: every project as a real screenshot of the page that was built, on the brand's own surface. */
export default function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">
            <b>01</b> SELECTED WORK
          </p>
          <h2 id="work-title" className="title">
            עבודות <em>נבחרות</em>
          </h2>
          <p className="lead">כל אתר נבנה סביב המותג שלו. לכל פרויקט יש מקרה בוחן עם ההחלטות, ואפשר לפתוח גם את האתר עצמו.</p>
        </div>
        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <Item key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
