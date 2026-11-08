import Image from "next/image";
import Arrow from "@/components/ui/Arrow";
import GhostWord from "@/components/ui/GhostWord";
import { aboutCopy, aboutLinks, aboutText, aboutTitle } from "./aboutClasses";

/** The business site's about: short and personal. The career details live on /dev/ and /resume/. */
export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container grid grid-cols-[0.75fr_1.25fr] items-center gap-20 mobile:grid-cols-[1fr] mobile:gap-12">
        <figure className="reveal m-0 aspect-[3/4] w-[min(380px,70vw)] [rotate:-2.5deg] justify-self-center overflow-hidden rounded-[30px] border-8 border-card shadow-[0_40px_70px_-40px_rgba(36,22,29,0.6)] [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
          <Image src="/liz.webp" alt="ליז חג׳ג׳" width={720} height={960} sizes="(max-width: 900px) 70vw, 380px" />
        </figure>
        <div className={aboutCopy} style={{ ["--d" as string]: 1 }}>
          <GhostWord word="hello" className="top-[-0.4em]" />
          <p className="eyebrow">ABOUT ME</p>
          <h2 id="about-title" className={aboutTitle}>
            נעים מאוד,
            <br />
            אני <em>ליז.</em>
          </h2>
          <p className="big-text">
            אני בונה אתרים ודפי נחיתה לעסקים, ומחברת אותם לוואטסאפ, ליומן ולכלים שחוסכים לכם זמן.
          </p>
          <p className={aboutText}>
            יש לי מעל 4 שנות ניסיון בפיתוח, אבל מה שחשוב לי באמת הוא להבין את העסק שלכם לפני שמתחילים לבנות: מי הלקוחות,
            מה הם מחפשים, ומה יגרום להם לפנות.
          </p>
          <p className={aboutText}>אתם עובדים ישירות איתי, מהשיחה הראשונה ועד שהאתר באוויר, וגם אחרי.</p>
          <div className={aboutLinks}>
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
