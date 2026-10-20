import Link from "next/link";
import { CREDENTIALS, STACK } from "@/lib/content";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="eyebrow">
              <b>05</b> ABOUT ME
            </p>
            <h2 id="about-title" className="title">
              נעים מאוד,
              <br />
              אני <em>ליז.</em>
            </h2>
            <p className="big-text">
              אני ליז חאג׳ג׳, מפתחת Full‑Stack, מומחית ומיישמת AI, עם לב של מעצבת. אני מחברת קוד, עיצוב ובינה מלאכותית כדי להפוך רעיונות לאתרים, כלים ותהליכים שמשרתים אנשים ועסקים.
            </p>
            <p>
              הניסיון שלי בפיתוח מערכות ואינטגרציות הוא הבסיס לעבודה שלי היום. אני משלבת React, WordPress וכלי AI בפיתוח ובפתרונות מותאמים, מתוך הבנה של הצורך העסקי ולא רק של הטכנולוגיה.
            </p>
            <p>
              אני עובדת עם בעלי עסקים ויזמים בפרויקטי פרילנס, ומשתלבת גם בצוותי פיתוח. מאתר תדמית ודף נחיתה ועד ממשק מותאם או תהליך אוטומטי, עם קשר ישיר, חשיבה משותפת וליווי לאורך הדרך.
            </p>
            <div className="about-links">
              <Link className="btn btn-ink" href="/cv/">
                קורות חיים
              </Link>
              <a className="text-link" href="#contact">
                בואו ניצור משהו יחד ←
              </a>
            </div>
          </div>

          <div className="timeline reveal" style={{ ["--d" as string]: 2 }}>
            <h3 className="tl-title">הדרך עד כאן</h3>
            <ol>
              {CREDENTIALS.map((c, i) => (
                <li className="tl-item" key={c.title}>
                  <span className="tl-dot" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <b>{c.title}</b>
                    <small>{c.sub}</small>
                    <p>{c.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="stack" aria-labelledby="stack-title">
          <h3 id="stack-title" className="stack-title reveal">
            ארגז הכלים
          </h3>
          <div className="stack-grid">
            {STACK.map((g, i) => (
              <div className="stack-group reveal" key={g.group} style={{ ["--d" as string]: i % 3 }}>
                <h4>{g.group}</h4>
                <ul>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
