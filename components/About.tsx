const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "WordPress",
  "Figma",
  "Node.js",
  "UI/UX",
  "Elementor",
  "n8n",
  "RAG",
  "MCP",
  "AI Agents",
  "Automation",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-sticker reveal">
        HELLO!
        <br />
        <span>✦</span>
      </div>
      <div className="about-copy reveal">
        <span className="num">02</span>
        <p className="eyebrow">ABOUT ME</p>
        <h2>
          נעים מאוד,
          <br />
          אני <em>ליז.</em>
        </h2>
        <p className="big-text">
          אני ליז חאג׳ג׳, מפתחת Full‑Stack, מומחית ומיישמת AI, עם לב של מעצבת. אני מחברת קוד, עיצוב ובינה מלאכותית כדי
          להפוך רעיונות לאתרים, כלים ותהליכים שמשרתים אנשים ועסקים.
        </p>
        <p>
          אני בעלת תואר בהנדסת חשמל ואלקטרוניקה, עם כשלוש שנות ניסיון בפיתוח ב־Deloitte והסמכות Workato ו־MuleSoft.
          הניסיון שלי בפיתוח מערכות ואינטגרציות הוא הבסיס לעבודה שלי היום. היום אני משלבת React, WordPress וכלי AI בפיתוח
          ובפתרונות מותאמים — מתוך הבנה של הצורך העסקי, ולא רק של הטכנולוגיה.
        </p>
        <p>
          אני עובדת עם בעלי עסקים ויזמים בפרויקטי פרילנס, ומשתלבת גם בצוותי פיתוח. מאתר תדמית ודף נחיתה ועד ממשק מותאם או
          תהליך אוטומטי — עם קשר ישיר, חשיבה משותפת וליווי לאורך הדרך.
        </p>
        <a className="text-link" href="#contact">
          בואו ניצור משהו יחד <span>←</span>
        </a>
      </div>
      <div className="skills-cloud reveal">
        {SKILLS.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </section>
  );
}
