import { SOLUTIONS } from "@/lib/content";

export default function Solutions() {
  return (
    <section className="section solutions" id="solutions" aria-labelledby="sol-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">
            <b>02</b> SOLUTIONS
          </p>
          <h2 id="sol-title" className="title">
            פתרונות <em>לעסקים</em>
          </h2>
          <p className="lead">שלושה תחומים, כולם בנויים בקוד ובעזרת Claude Code. בכל אחד מהם מגדירים מראש מה אמורה להיות התוצאה.</p>
        </div>
        <div className="sol-grid">
          {SOLUTIONS.map((s, i) => (
            <article className="sol reveal" key={s.no} style={{ ["--d" as string]: i }}>
              <span className="sol-no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <p className="sol-result">
                <b>התוצאה</b>
                {s.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
