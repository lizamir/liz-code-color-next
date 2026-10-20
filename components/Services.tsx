import { PROCESS, SERVICES, SITE } from "@/lib/content";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">
              <b>03</b> WEB · AI · AUTOMATION
            </p>
            <h2 id="services-title" className="title">
              מה נבנה <em>יחד?</em>
            </h2>
          </div>
          <p className="lead">ארבעה תחומים שאני עובדת בהם, ומה תקבלו בכל אחד.</p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <article className="svc reveal" key={s.tag} style={{ ["--d" as string]: i % 2 }}>
              <span className="svc-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.gets.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="process" aria-labelledby="process-title">
          <h3 id="process-title" className="process-title reveal">
            איך עובדים <em>איתי</em>
          </h3>
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
            <ol className="steps">
              {PROCESS.map((p, i) => (
                <li className="step reveal" key={p.no} style={{ ["--d" as string]: i }}>
                  <span className="step-no">{p.no}</span>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="process-cta reveal">
            <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> בואו נבין מה מתאים לכם
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
