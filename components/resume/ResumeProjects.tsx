import { PROJECTS, SITE, STACK } from "@/content";
import { bareUrl } from "@/lib/format";

/** Selected projects and the tools list of the CV. */
export default function ResumeProjects() {
  return (
    <>
    <section>
      <h2>פרויקטים נבחרים</h2>
      <ul className="cv-list">
        {PROJECTS.map((p) => (
          <li key={p.slug}>
            <div>
              <b dir="ltr">{p.title}</b>
              <span>
                <bdi>{p.kicker}</bdi> · {p.year}
              </span>
            </div>
            <p>{p.summary}</p>
            <small dir="ltr">
              {p.stack.join(" · ")} · {bareUrl(SITE.url)}/work/{p.slug}/
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
    </>
  );
}
