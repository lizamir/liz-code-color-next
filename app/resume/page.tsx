import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { CV_EDU, CV_JOBS, PROJECTS, SITE, STACK } from "@/lib/content";

export const metadata: Metadata = {
  title: "קורות חיים",
  description: "קורות החיים של ליז חאג׳ג׳: מפתחת Full‑Stack, יישום AI ואוטומציות.",
  alternates: { canonical: "/resume/" },
};

/** A one-page résumé that prints well (the Print button, or Cmd/Ctrl+P, saves it as a PDF). */
export default function CV() {
  return (
    <div className="cv-wrap">
      <nav className="cv-bar" aria-label="פעולות">
        <Link className="btn btn-ghost btn-sm" href="/">
          <span>← חזרה לאתר</span>
        </Link>
        <PrintButton />
      </nav>

      <main id="main" className="cv">
        <header className="cv-head">
          <div>
            <h1>{SITE.person}</h1>
            <p className="cv-role">{SITE.role}</p>
          </div>
          <ul className="cv-contact">
            <li>
              <bdi>{SITE.phone}</bdi>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a href={SITE.linkedin}>linkedin.com/in/liz-hajage</a>
            </li>
            <li>
              <a href={SITE.github}>github.com/lizamir</a>
            </li>
            <li>{SITE.city}</li>
          </ul>
        </header>

        <section>
          <h2>בקצרה</h2>
          <p>
            מפתחת Full‑Stack עם מעל 4 שנות ניסיון בפיתוח, מומחית ומיישמת AI, עם לב של מעצבת. מחברת קוד, עיצוב ובינה מלאכותית כדי להפוך רעיונות לאתרים, כלים ותהליכים שמשרתים אנשים ועסקים. עובדת עם בעלי עסקים ויזמים בפרויקטי פרילנס, ומשתלבת גם בצוותי פיתוח.
          </p>
        </section>

        <section>
          <h2>ניסיון תעסוקתי</h2>
          <ul className="cv-list">
            {CV_JOBS.map((j) => (
              <li key={j.title + j.where}>
                <div>
                  <b>
                    {j.title} · {j.where}
                  </b>
                  <span>{j.when}</span>
                </div>
                <p>{j.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>השכלה, הסמכות והכשרה</h2>
          <ul className="cv-list">
            {CV_EDU.map((e) => (
              <li key={e.title}>
                <div>
                  <b>{e.title}</b>
                  <span>{e.where}</span>
                </div>
                <p>{e.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>פרויקטים נבחרים</h2>
          <ul className="cv-list">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <div>
                  <b dir="ltr">{p.title}</b>
                  <span>
                    {p.kicker} · {p.year}
                  </span>
                </div>
                <p>{p.summary}</p>
                <small dir="ltr">
                  {p.stack.join(" · ")} · {SITE.url.replace("https://", "")}/work/{p.slug}/
                </small>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>כלים וטכנולוגיות</h2>
          <dl className="cv-stack">
            {STACK.map((g) => (
              <div key={g.group}>
                <dt>{g.group}</dt>
                <dd dir="ltr">{g.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </div>
  );
}
