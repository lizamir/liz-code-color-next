import WaveBackground from "./WaveBackground";

export default function Hero() {
  return (
    <section className="hero">
      <WaveBackground />
      <div className="hero-copy reveal">
        <p className="eyebrow">
          <span></span> WEB DESIGN · DEVELOPMENT · AI
        </p>
        <h1>
          אני הופכת
          <br />
          <em>רעיונות</em> לאתרים
          <br />
          שאי אפשר לפספס.
        </h1>
        <p className="lead">
          אתרים עם אופי, פיתוח מותאם אישית ויישום AI — לעסקים עצמאיים, מותגים וצוותים שרוצים לקחת את הדיגיטל שלהם
          קדימה.
        </p>
        <div className="hero-actions">
          <a className="pill" href="#work">
            לצפייה בפרויקטים <span>↓</span>
          </a>
          <a className="text-link" href="#about">
            מי אני בכלל? <span>←</span>
          </a>
        </div>
      </div>
      <div className="hero-art reveal" aria-label="קומפוזיציה תלת ממדית צבעונית">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="core">
          <span>CODE</span>
          <b>&amp;</b>
          <span>COLOR</span>
        </div>
        <div className="chip chip-a">
          AI
          <br />
          AGENTS
        </div>
        <div className="chip chip-b">REACT</div>
        <div className="chip chip-c">n8n</div>
        <div className="chip chip-d">AUTOMATIONS</div>
      </div>
      <div className="scroll-note">
        SCROLL TO EXPLORE <span>↙</span>
      </div>
    </section>
  );
}
