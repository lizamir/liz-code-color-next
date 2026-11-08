import { CV_EDU, CV_JOBS } from "@/content";
import { cvItem, cvItemHead, cvItemMeta, cvItemText, cvItemTitle, cvList } from "./cvClasses";

/** The summary, work history and education of the CV. */
export default function ResumeExperience() {
  return (
    <>
      <section>
        <h2>בקצרה</h2>
        <p>
          מפתחת Full‑Stack עם מעל 4 שנות ניסיון בפיתוח, מומחית ומיישמת AI, עם לב של מעצבת. מחברת קוד, עיצוב ובינה
          מלאכותית כדי להפוך רעיונות לאתרים, כלים ותהליכים שמשרתים אנשים ועסקים. עובדת עם בעלי עסקים ויזמים בפרויקטי
          פרילנס, ומשתלבת גם בצוותי פיתוח.
        </p>
      </section>

      <section>
        <h2>ניסיון תעסוקתי</h2>
        <ul className={cvList}>
          {CV_JOBS.map((j) => (
            <li key={j.title + j.where} className={cvItem}>
              <div className={cvItemHead}>
                <b className={cvItemTitle}>
                  {j.title} · {j.where}
                </b>
                <span className={cvItemMeta}>{j.when}</span>
              </div>
              <p className={cvItemText}>{j.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>השכלה, הסמכות והכשרה</h2>
        <ul className={cvList}>
          {CV_EDU.map((e) => (
            <li key={e.title} className={cvItem}>
              <div className={cvItemHead}>
                <b className={cvItemTitle}>{e.title}</b>
                <span className={cvItemMeta}>{e.where}</span>
              </div>
              <p className={cvItemText}>{e.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
