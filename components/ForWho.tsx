import { FOR_WHO } from "@/lib/content";
import GhostWord from "./GhostWord";

/** Three situations business owners recognize, each with what changes. */
export default function ForWho() {
  return (
    <section className="section for-who" id="for-who" aria-labelledby="for-who-title">
      <div className="container">
        <div className="section-head reveal">
          <GhostWord word="you" />
          <div>
            <p className="eyebrow">FOR WHO</p>
            <h2 id="for-who-title" className="title">
              מכירים את <em>זה?</em>
            </h2>
          </div>
          <p className="lead">רוב בעלי העסקים שפונים אליי נמצאים באחד משלושת המצבים האלה.</p>
        </div>
        <ul className="fw-grid">
          {FOR_WHO.map((f, i) => (
            <li className="fw reveal" key={f.title} style={{ ["--d" as string]: i }}>
              <p className="fw-q">{f.title}</p>
              <p className="fw-a">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
