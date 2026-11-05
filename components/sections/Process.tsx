import { PROCESS, SITE } from "@/content";
import GhostWord from "@/components/ui/GhostWord";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

/** How working together goes: a sample first chat, then four steps joined by a dashed path that draws in. */
export default function Process() {
  return (
    <section className="section process-sec" id="process" aria-labelledby="process-title">
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

        <div className="process-grid">
          <div className="chat reveal" role="img" aria-label="דוגמה לשיחת היכרות: בעלת סטודיו מספרת על העסק, ליז שואלת על הלקוחות ומציעה את הצעד הבא">
            <div className="chat-bar" aria-hidden="true">
              <i>L</i>
              <span>
                ליז · Code &amp; Color <small>דוגמה לשיחת היכרות</small>
              </span>
            </div>
            <div aria-hidden="true">
              <p className="bub me" style={{ ["--k" as string]: 0 }}>היי ליז, יש לי סטודיו לפילאטיס ואין לי אתר שמרגיש כמו שאני</p>
              <p className="bub liz" style={{ ["--k" as string]: 1 }}>היי! ספרי לי: מי הלקוחות שלך, ומה הן מחפשות בגוגל?</p>
              <p className="bub me" style={{ ["--k" as string]: 2 }}>נשים באזור. “פילאטיס מכשירים ברמת גן”</p>
              <p className="bub liz" style={{ ["--k" as string]: 3 }}>מעולה. אשלח הצעה עם מבנה הדף, התוכן והלו״ז, וקישור חי לבדיקה אחרי יומיים.</p>
            </div>
          </div>
          <div className="steps-wrap reveal">
            <svg className="process-path" viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <defs>
                <mask id="pp-draw">
                  <path className="pp-reveal" d="M560 40C460 30 380 70 330 120S250 200 150 190 30 230 40 300s140 70 260 60 230 10 260 60" pathLength="1" />
                </mask>
              </defs>
              <path className="pp-line" d="M560 40C460 30 380 70 330 120S250 200 150 190 30 230 40 300s140 70 260 60 230 10 260 60" mask="url(#pp-draw)" />
            </svg>
            <ol className="steps">
              {PROCESS.map((p, i) => (
                <li className="step" key={p.no} style={{ ["--d" as string]: i }}>
                  <span className="step-no">{p.no}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="process-cta reveal">
          <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> בואו נבין מה מתאים לכם
          </a>
        </div>
      </div>
    </section>
  );
}
