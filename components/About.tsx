import Image from "next/image";
import Arrow from "./Arrow";
import GhostWord from "./GhostWord";

/** The business site's about: short and personal. The career details live on /dev/ and /resume/. */
export default function About() {
  return (
    <section className="section about about-biz" id="about" aria-labelledby="about-title">
      <div className="container about-biz-grid">
        <figure className="about-photo reveal">
          <Image src="/liz.webp" alt="ליז חג׳ג׳" width={720} height={960} sizes="(max-width: 900px) 70vw, 380px" />
        </figure>
        <div className="about-copy reveal" style={{ ["--d" as string]: 1 }}>
          <GhostWord word="hello" />
          <p className="eyebrow">ABOUT ME</p>
          <h2 id="about-title" className="title">
            נעים מאוד,
            <br />
            אני <em>ליז.</em>
          </h2>
          <p className="big-text">אני בונה אתרים ודפי נחיתה לעסקים, ומחברת אותם לוואטסאפ, ליומן ולכלים שחוסכים לכם זמן.</p>
          <p>
            יש לי מעל 4 שנות ניסיון בפיתוח, אבל מה שחשוב לי באמת הוא להבין את העסק שלכם לפני שמתחילים לבנות: מי הלקוחות, מה הם מחפשים, ומה יגרום להם לפנות.
          </p>
          <p>אתם עובדים ישירות איתי, מהשיחה הראשונה ועד שהאתר באוויר, וגם אחרי.</p>
          <div className="about-links">
            <a className="btn btn-ink" href="#contact">
              <span>
                בואו נדבר <Arrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
