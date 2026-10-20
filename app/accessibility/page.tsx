import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של האתר של ליז חג׳ג׳: מה נעשה, מגבלות ידועות ואיך פונים.",
  alternates: { canonical: "/accessibility/" },
};

export default function AccessibilityStatement() {
  return (
    <div className="legal">
      <header className="legal-head">
        <div className="container">
          <Link href="/" className="brand" aria-label="Liz Code and Color, לדף הבית">
            <span>LIZ</span>
            <i />
            CODE&amp;COLOR
          </Link>
          <Link href="/" className="btn btn-ghost btn-sm">
            <span>חזרה לאתר</span>
          </Link>
        </div>
      </header>
      <main id="main" className="container legal-body">
        <p className="eyebrow">ACCESSIBILITY</p>
        <h1 className="title">הצהרת נגישות</h1>
        <p className="lead">אני רוצה שכל אחד ואחת יוכלו להכיר את העבודות שלי ולפנות אליי, בלי קשר ליכולות או למכשיר. כך האתר בנוי:</p>

        <section>
          <h2>מה נעשה</h2>
          <ul>
            <li>מבנה כותרות וסימון (landmarks) ברורים, קישור ״דילוג לתוכן הראשי״, וניווט מלא במקלדת עם סימון מיקוד בולט.</li>
            <li>ניגודיות צבעים נבדקה מול רמה AA של תקן WCAG 2.1, בכל ארבע ערכות הצבעים של האתר.</li>
            <li>תפריט נגישות בפינת המסך: הגדלת טקסט (ארבע דרגות), ניגודיות גבוהה, הדגשת קישורים, ריווח שורות ואותיות ועצירת אנימציות.</li>
            <li>האתר מכבד את הגדרת ״הפחתת תנועה״ של המכשיר: הגלילה החלקה, הרקע התנועתי והאנימציות נעצרים והתוכן זהה.</li>
            <li>כפתורים וקישורים בגודל נוח למגע (לפחות 44 פיקסלים), והאתר מותאם לטלפון, לטאבלט ולמחשב.</li>
            <li>אין חובה להשתמש בעכבר: גם סינון העבודות, החלפת הצבעים וטופס יצירת הקשר פועלים במקלדת.</li>
          </ul>
        </section>

        <section>
          <h2>מגבלות ידועות</h2>
          <ul>
            <li>הדמואים של הפרויקטים (בתיקייה demos) נבנו בזמנים שונים, ורמת הנגישות שלהם משתנה. בדמו של גנלי נעשתה בדיקה מלאה.</li>
            <li>הצהרה זו נכתבה על ידי בעלת האתר ואינה מחליפה בדיקה של גורם חיצוני. אם תיתקלו בבעיה, אשמח לתקן.</li>
          </ul>
        </section>

        <section>
          <h2>פנייה בנושא נגישות</h2>
          <ul>
            <li>
              מייל: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              וואטסאפ:{" "}
              <a href={SITE.whatsapp}>
                <bdi>{SITE.phone}</bdi>
              </a>
            </li>
            <li>עדכון אחרון של ההצהרה: אוקטובר 2026</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
