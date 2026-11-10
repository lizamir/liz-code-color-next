import { PROJECTS, SITE, STACK } from "@/content";
import { bareUrl } from "@/lib/format";
import { cvItem, cvItemHead, cvItemMeta, cvItemText, cvItemTitle, cvList } from "./cvClasses";

/** Selected projects and the tools list of the CV. */
export default function ResumeProjects() {
  return (
    <>
      <section>
        <h2>פרויקטים נבחרים</h2>
        <ul className={cvList}>
          {PROJECTS.filter((p) => !p.cv).map((p) => (
            <li key={p.slug} className={cvItem}>
              <div className={cvItemHead}>
                <b className={cvItemTitle} dir="ltr">
                  {p.title}
                </b>
                <span className={cvItemMeta}>
                  <bdi>{p.kicker}</bdi> · {p.year}
                </span>
              </div>
              <p className={cvItemText}>{p.summary}</p>
              <small dir="ltr" className="mt-[2px] block text-[0.82rem] text-muted">
                {p.stack.join(" · ")} · {bareUrl(SITE.url)}/work/{p.slug}/
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>כלים וטכנולוגיות</h2>
        <dl className="m-0 grid gap-2">
          {STACK.map((g) => (
            <div key={g.group} className="grid grid-cols-[150px_1fr] gap-4 mobile:grid-cols-[1fr] mobile:gap-0">
              <dt className="[font:800_0.92rem_var(--font-display)]">{g.group}</dt>
              <dd dir="ltr" className="m-0">
                {g.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
