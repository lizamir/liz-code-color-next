import { PROCESS, SITE } from "@/content";
import GhostWord from "@/components/ui/GhostWord";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

/** How working together goes: a sample first chat, then four steps joined by a dashed path that draws in. */
export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head reveal">
          <GhostWord word="process" />
          <div>
            <p className="eyebrow">HOW IT WORKS</p>
            <h2 id="process-title" className="title">
              איך עובדים <em>איתי</em>
            </h2>
          </div>
          <p className="lead">ארבעה שלבים, בלי הפתעות: יודעים מה נבנה, מתי, ובכמה, לפני שמתחילים.</p>
        </div>

        <div className="grid grid-cols-[1fr_1.6fr] [align-items:start] gap-10 mobile:grid-cols-[1fr]">
          <div
            className="reveal rounded-[28px] border border-line bg-[#e7ded3] [padding:18px_16px_20px] shadow-[0_30px_50px_-34px_rgba(16,16,16,0.6)]"
            role="img"
            aria-label="דוגמה לשיחת היכרות: בעלת סטודיו מספרת על העסק, ליז שואלת על הלקוחות ומציעה את הצעד הבא"
          >
            <div
              className="flex items-center gap-2.5 [padding:4px_6px_14px] [font:800_0.95rem/1.1_var(--font-display)]"
              aria-hidden="true"
            >
              <i className="grid h-[34px] w-[34px] place-items-center rounded-[50%] bg-accent font-black text-on-accent not-italic">
                L
              </i>
              <span>
                ליז · Code &amp; Color <small className="block font-semibold text-muted">דוגמה לשיחת היכרות</small>
              </span>
            </div>
            <div aria-hidden="true">
              <p className="bub me" style={{ ["--k" as string]: 0 }}>
                היי ליז, יש לי סטודיו לפילאטיס ואין לי אתר שמרגיש כמו שאני
              </p>
              <p className="bub liz" style={{ ["--k" as string]: 1 }}>
                היי! ספרי לי: מי הלקוחות שלך, ומה הן מחפשות בגוגל?
              </p>
              <p className="bub me" style={{ ["--k" as string]: 2 }}>
                נשים באזור. “פילאטיס מכשירים ברמת גן”
              </p>
              <p className="bub liz" style={{ ["--k" as string]: 3 }}>
                מעולה. אשלח הצעה עם מבנה הדף, התוכן והלו״ז, וקישור חי לבדיקה אחרי יומיים.
              </p>
            </div>
          </div>
          <div className="steps-wrap reveal relative">
            <svg
              className="pointer-events-none absolute [inset:-10px] z-0 h-[calc(100%_+_20px)] w-[calc(100%_+_20px)] overflow-visible mobile:hidden"
              viewBox="0 0 600 420"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <mask id="pp-draw">
                  <path
                    className="pp-reveal"
                    d="M560 40C460 30 380 70 330 120S250 200 150 190 30 230 40 300s140 70 260 60 230 10 260 60"
                    pathLength="1"
                  />
                </mask>
              </defs>
              <path
                className="fill-none stroke-accent [stroke-width:3.5] [stroke-dasharray:10_10] [stroke-linecap:round] [vector-effect:non-scaling-stroke]"
                d="M560 40C460 30 380 70 330 120S250 200 150 190 30 230 40 300s140 70 260 60 230 10 260 60"
                mask="url(#pp-draw)"
              />
            </svg>
            <ol className="relative z-1 grid list-none grid-cols-[repeat(2,1fr)] gap-x-10 gap-y-11 p-0 [counter-reset:step] small:grid-cols-[1fr]">
              {PROCESS.map((p, i) => (
                <li
                  className="step relative grid [align-content:start] gap-2.5 rounded-[28px] bg-paper-2 [padding:26px_24px_28px] hover:[transform:translateY(-6px)_rotate(-0.6deg)] hover:bg-[color-mix(in_srgb,var(--accent)_14%,var(--paper-2))]"
                  key={p.no}
                  style={{ ["--d" as string]: i }}
                >
                  <span className="relative text-right tracking-[-0.06em] text-accent-ink [direction:ltr] [font:900_4.4rem/1_var(--font-display)] after:absolute after:end-0 after:text-[1.1rem] after:text-accent after:content-['✦']">
                    {p.no}
                  </span>
                  <h3 className="text-[1.35rem] tracking-[-0.03em]">{p.title}</h3>
                  <p className="text-[1rem] text-muted">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="reveal mt-10 flex justify-center">
          <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> בואו נבין מה מתאים לכם
          </a>
        </div>
      </div>
    </section>
  );
}
