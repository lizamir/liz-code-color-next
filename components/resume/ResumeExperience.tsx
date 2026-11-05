import { CV_EDU, CV_JOBS } from "@/content";

/** The summary, work history and education of the CV. */
export default function ResumeExperience() {
  return (
    <>
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
    </>
  );
}
