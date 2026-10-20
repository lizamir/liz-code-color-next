import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">
            <b>04</b> PROCESS
          </p>
          <h2 id="process-title" className="title">
            איך <em>עובדים</em> איתי
          </h2>
        </div>
        <ol className="process-list">
          {PROCESS.map((p, i) => (
            <li className="reveal" key={p.no} style={{ ["--d" as string]: i }}>
              <span>{p.no}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
