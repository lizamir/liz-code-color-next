import { PROCESS, SERVICES, SITE } from "@/lib/content";

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
          <ol className="steps">
            {PROCESS.map((p, i) => (
              <li className="step reveal" key={p.no} style={{ ["--d" as string]: i }}>
                <span className="step-no">{p.no}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
          <div className="process-cta reveal">
            <a className="btn btn-ink" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              בואו נבין מה מתאים לכם ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
