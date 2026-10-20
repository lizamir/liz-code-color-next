import Image from "next/image";

const RAISED =
  "0,79.98 36,75.51 72,69.63 108,73.03 144,63.78 180,57.4 216,61.8 252,70.01 288,55.38 324,52.57 360,49.76 396,41.6";
const SPENT =
  "0,86.9 36,82.81 72,77.89 108,80.61 144,73.21 180,68.1 216,70.98 252,78.4 288,65.13 324,64.08 360,61.5 396,54";

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="section-head reveal">
        <div>
          <span className="num">01</span>
          <p className="eyebrow">SELECTED WORK</p>
        </div>
        <h2>
          פרויקטים
          <br />
          <em>נבחרים</em>
        </h2>
        <p>עיצוב, פיתוח וחוויית משתמש. מאתרי מותג עשירים ועד כלים אינטראקטיביים — כל פרויקט והאופי שלו.</p>
      </div>

      <article className="project project-purple reveal">
        <div className="project-info">
          <span className="project-no">01 / 05</span>
          <h3>COMMUNITY OS</h3>
          <p>
            מערכת לניתוח פעילות קהילתית: תקציבים, השתתפות ושעות התנדבות. פילוחים אינטראקטיביים, גרפים ותובנות שמחושבים
            יחד.
          </p>
          <Tags items={["Data Visualization", "Analytics", "JavaScript"]} />
          <a className="case-btn" href="/demos/community.html">
            לפרויקט ↙
          </a>
        </div>
        <div className="mockup stage-purple">
          <a className="mini-os" href="/demos/community.html" aria-label="פתיחת מערכת Community OS">
            <div className="mini-os-top">
              <b>COMMUNITY OS</b>
              <span>2026 / OVERVIEW</span>
            </div>
            <div className="mini-os-body">
              <h4>כל העשייה. תמונה אחת.</h4>
              <div className="mini-os-kpis">
                <div>
                  <b>₪899k</b>
                  <span>גיוס לתקופה</span>
                </div>
                <div>
                  <b>11,827</b>
                  <span>שעות התנדבות</span>
                </div>
                <div>
                  <b>6</b>
                  <span>יוזמות קהילתיות</span>
                </div>
              </div>
              <div className="mini-os-chart">
                <p>תזרים גיוס והוצאות · 2026</p>
                <svg viewBox="0 0 400 125" aria-hidden="true">
                  <path d="M0 20H400 M0 60H400 M0 100H400" stroke="#efebf5" />
                  <polyline points={RAISED} fill="none" stroke="#7655e9" strokeWidth="3" />
                  <polyline points={SPENT} fill="none" stroke="#32c6a2" strokeWidth="3" />
                </svg>
                <div className="mini-os-foot">
                  <span>סינון לפי רבעון</span>
                  <span>פילוח לפי תחום</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </article>

      <article className="project project-coral reveal">
        <div className="mockup stage-coral">
          <div className="phone">
            <div className="phone-top"></div>
            <div className="beauty-ui">
              <span>Glow.</span>
              <small>SKIN STUDIO</small>
              <Image className="beauty-photo" src="/assets/glow.webp" alt="GLOW Skin Studio" width={1122} height={1402} sizes="300px" />
              <h4>
                העור שלך.
                <br />
                בגרסה הזוהרת.
              </h4>
              <button>לכל הטיפולים</button>
            </div>
          </div>
          <div className="floating-card">
            <span>NEW</span>
            <b>Hydra Glow</b>
            <small>טיפול פנים מתקדם</small>
          </div>
        </div>
        <div className="project-info">
          <span className="project-no">02 / 05</span>
          <h3>GLOW STUDIO</h3>
          <p>עיצוב ופיתוח אתר ביוטי — שילוב בין רכות, נוכחות ותנועה שמרגישה יוקרתית.</p>
          <Tags items={["Branding", "Web Development", "Motion"]} />
          <a className="case-btn" href="/demos/glow.html">
            לכניסה לאתר ↙
          </a>
        </div>
      </article>

      <article className="project project-lime reveal">
        <div className="project-info">
          <span className="project-no">03 / 05</span>
          <h3>SIGNATURE ENGINE</h3>
          <p>מערכת חכמה ליצירה וניהול של חתימות מייל אחידות, עם תצוגה חיה וחוויית עריכה פשוטה.</p>
          <Tags items={["TypeScript", "React", "Node.js"]} />
          <a className="case-btn" href="/demos/signature.html">
            נסו את עורך החתימות ↙
          </a>{" "}
          <a className="case-btn" href="https://github.com/lizamir/signatureEngine" target="_blank" rel="noreferrer">
            לצפייה בקוד <span>↗</span>
          </a>
        </div>
        <div className="mockup stage-lime">
          <div className="browser dark">
            <div className="browser-bar">
              <i></i>
              <i></i>
              <i></i>
              <small>signature.engine</small>
            </div>
            <div className="signature-ui">
              <div className="controls">
                <b>Build your signature</b>
                <label>
                  Name <span>Liz Amir</span>
                </label>
                <label>
                  Role <span>Frontend Developer</span>
                </label>
                <label>
                  Brand color <i></i>
                </label>
              </div>
              <div className="preview">
                <small>LIVE PREVIEW</small>
                <div className="sig-card">
                  <div className="avatar">L</div>
                  <div>
                    <b>Liz Amir</b>
                    <span>Frontend Developer</span>
                    <p>
                      CODE <i>&amp;</i> COLOR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="project project-blue reveal">
        <div className="mockup stage-blue">
          <div className="poster">
            <span>04</span>
            <p>קמפיין דיגיטלי</p>
            <h4>
              עיצוב
              <br />
              שעוצר
              <br />
              את הגלילה.
            </h4>
            <div className="poster-dot"></div>
          </div>
          <div className="social-card">
            <small>@liz.code.color</small>
            <b>
              MAKE
              <br />
              IT BOLD.
            </b>
            <i>●</i>
          </div>
        </div>
        <div className="project-info">
          <span className="project-no">04 / 05</span>
          <h3>CONTENT &amp; DESIGN</h3>
          <p>קריאייטיב לרשתות, דפי נחיתה, באנרים ושפה גרפית שממשיכה את המותג בכל נקודת מפגש.</p>
          <Tags items={["Social", "Landing pages", "Creative"]} />
          <a className="case-btn" href="/demos/creative.html">
            פתיחת אתר הקריאייטיב ↙
          </a>
        </div>
      </article>

      <article className="project project-ganli reveal">
        <div className="project-info">
          <span className="project-no">05 / 05</span>
          <h3>GANLI DAYCARE</h3>
          <p>
            מיתוג, אתר ומערכת ניהול למשפחתון: אזור אישי להורים, לצוות ולמנהלת עם איסוף בקוד QR, תפריט עם התראות אלרגיה,
            יומן טיפול, תשלומים והודעות. הרשאות Supabase ברמת השורה, נגישות מלאה, וטירת קוביות תלת ממדית שנבנית בגלילה.
          </p>
          <Tags items={["Next.js", "Supabase", "Three.js", "Accessibility", "Branding"]} />
          <a className="case-btn" href="/demos/ganli/">
            לכניסה לאתר ↙
          </a>{" "}
          <a className="case-btn" href="/demos/ganli/login/">
            לאזור האישי (דמו) ↙
          </a>{" "}
          <a className="case-btn" href="https://github.com/lizamir/ganli" target="_blank" rel="noreferrer">
            לצפייה בקוד <span>↗</span>
          </a>
        </div>
        <div className="mockup stage-ganli">
          <a className="ganli-mini" href="/demos/ganli/" aria-label="פתיחת אתר גנלי">
            <div className="browser-bar">
              <i></i>
              <i></i>
              <i></i>
              <small>ganli.co.il</small>
            </div>
            <div className="ganli-mini-body">
              <div className="ganli-mini-copy">
                <span>גן ומעון לגיל הרך</span>
                <b>
                  כאן משחקים,
                  <br />
                  לומדים <em>וגדלים ביחד.</em>
                </b>
                <i>בואו לבקר אותנו ←</i>
              </div>
              <svg viewBox="0 0 64 56" aria-hidden="true">
                <path d="M44 4l7 10H37z" fill="#f3a59b" />
                <rect x="38" y="14" width="12" height="11" rx="2.5" fill="#d9c3a3" />
                <path d="M20 25a6 6 0 0 1 12 0z" fill="#eaa23a" />
                <rect x="10" y="25" width="44" height="6" rx="2" fill="#d9c3a3" />
                <path d="M17 31h30v24h-9V46a6 6 0 0 0-12 0v9h-9z" fill="#b89b76" />
                <path d="M2 38l10-10v10z" fill="#2e9ea0" />
                <rect x="2" y="39" width="10" height="16" rx="2.5" fill="#5b4a40" />
                <path d="M52 31l10 9H52z" fill="#eb5a3b" />
                <rect x="52" y="41" width="10" height="14" rx="2.5" fill="#5b4a40" />
              </svg>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
}
