import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import { CREDENTIALS, STACK } from "@/content";
import { aboutCopy, aboutLinks, aboutText, aboutTitle } from "@/components/sections/aboutClasses";

/** The technical page: who I am as a developer, the path so far, and the toolbox. */
export default function AboutDev() {
  return (
    <section className="section" id="experience" aria-labelledby="about-title">
      <div className="container">
        <div className="grid grid-cols-[1.1fr_0.9fr] [align-items:start] gap-20 tablet:grid-cols-[1fr] tablet:gap-[50px]">
          <div className={aboutCopy}>
            <p className="eyebrow">EXPERIENCE</p>
            <h2 id="about-title" className={aboutTitle}>
              נעים מאוד,
              <br />
              אני <em>ליז.</em>
            </h2>
            <p className="big-text">
              אני ליז חג׳ג׳, מפתחת Full‑Stack, מומחית ומיישמת AI, עם לב של מעצבת. אני מחברת קוד, עיצוב ובינה מלאכותית
              כדי להפוך רעיונות לאתרים, כלים ותהליכים שמשרתים אנשים ועסקים.
            </p>
            <p className={aboutText}>
              הניסיון שלי בפיתוח מערכות ואינטגרציות הוא הבסיס לעבודה שלי היום. אני בונה ב‑React ו‑Next.js, מפתחת בעזרת
              Claude Code ומשלבת כלי AI ואוטומציות בפתרונות מותאמים, מתוך הבנה של הצורך העסקי ולא רק של הטכנולוגיה.
            </p>
            <p className={aboutText}>
              אני עובדת עם בעלי עסקים ויזמים בפרויקטי פרילנס, ומשתלבת גם בצוותי פיתוח. מאתר תדמית ודף נחיתה ועד ממשק
              מותאם או תהליך אוטומטי, עם קשר ישיר, חשיבה משותפת וליווי לאורך הדרך.
            </p>
            <div className={aboutLinks}>
              <Link className="btn btn-ink" href="/resume/">
                קורות חיים
              </Link>
              <a className="text-link" href="#dev-contact">
                ליצירת קשר <Arrow />
              </a>
            </div>
          </div>

          <div
            className="reveal rounded-[36px] border border-line bg-card [padding:34px_32px] mobile:rounded-[28px] mobile:[padding:26px_20px]"
            style={{ ["--d" as string]: 2 }}
          >
            <h3 className="mb-6 text-[1.6rem] tracking-[-0.04em]">הדרך עד כאן</h3>
            <ol className="relative grid list-none gap-0 p-0 before:absolute before:inset-y-3 before:start-[19px] before:w-[2px] before:opacity-30 before:content-[''] before:[background:repeating-linear-gradient(180deg,var(--ink)_0_6px,transparent_6px_11px)]">
              {CREDENTIALS.map((c, i) => (
                <li className="tl-item relative grid grid-cols-[40px_1fr] gap-[18px] py-[14px]" key={c.title}>
                  <span
                    className="relative z-1 grid h-10 w-10 place-items-center rounded-[50%] bg-accent text-on-accent shadow-[0_0_0_5px_#fff] [font:900_1rem_var(--font-display)]"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <b className="block tracking-[-0.02em] [font:800_1.2rem/1.2_var(--font-display)]">{c.title}</b>
                    <small className="[margin:3px_0_6px] block tracking-[0.06em] text-accent-ink [font:700_0.82rem_var(--font-display)]">
                      {c.sub}
                    </small>
                    <p className="text-[1rem] text-muted">{c.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-[110px] mobile:mt-[70px]" id="stack" aria-labelledby="stack-title">
          <h3
            id="stack-title"
            className="reveal mb-[30px] [font-size:clamp(2rem,3.6vw,3.2rem)] font-black tracking-[-0.045em]"
          >
            ארגז הכלים
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
            {STACK.map((g, i) => (
              <div
                className="stack-group reveal rounded-[28px] bg-paper-2 p-[26px]"
                key={g.group}
                style={{ ["--d" as string]: i % 3 }}
              >
                <h4 className="mb-[14px] tracking-[0.1em] text-accent-ink [font:800_0.9rem_var(--font-display)]">
                  {g.group}
                </h4>
                <ul className="flex list-none flex-wrap gap-2 p-0">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-[999px] bg-card px-[15px] py-2 shadow-[0_2px_0_rgba(16,16,16,0.12)] [direction:ltr] [font:700_0.92rem/1.2_var(--font-display)]"
                    >
                      {it}
                    </li>
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
