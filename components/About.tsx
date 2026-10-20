import Link from "next/link";
import BusinessCard from "./BusinessCard";
import { CREDENTIALS, SITE } from "@/lib/content";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy reveal">
          <p className="eyebrow">
            <b>05</b> ABOUT
          </p>
          <h2 id="about-title" className="title">
            קצת <em>עליי</em>
          </h2>
          <p>
            אני ליז, מפתחת Full‑Stack עם לב של מעצבת. אני בונה אתרים, מערכות וסוכני AI בקוד, ועובדת ישירות עם בעלי עסקים וגם בתוך צוותים. הרקע שלי בהנדסה ובאינטגרציות הוא מה שמאפשר לי לחבר עיצוב נקי למערכת שבאמת עובדת.
          </p>
          <ul className="cred-list" aria-label="ניסיון והכשרה">
            {CREDENTIALS.map((c) => (
              <li key={c.title}>
                <b>{c.title}</b>
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
          <div className="about-links">
            <Link className="btn btn-primary" href="/resume/">
              קורות חיים
            </Link>
            <a className="btn btn-ghost" href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="reveal">
          <BusinessCard />
        </div>
      </div>
    </section>
  );
}
