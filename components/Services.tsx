import { WHATSAPP_URL } from "@/lib/links";

const SERVICES = [
  {
    tag: "01 / WEB",
    title: "אתר שעובד בשביל העסק",
    text: "אתרי תדמית, דפי נחיתה ו‑WordPress: מבנה ברור, עיצוב מותאם למותג וחוויית שימוש נעימה גם בנייד.",
  },
  {
    tag: "02 / AI",
    title: "AI עם מטרה ברורה",
    text: "אפיון ויישום פתרונות AI לפי הצורך: עוזרים חכמים, תהליכי תוכן וכלים פנימיים, עם בקרה אנושית והתייחסות לפרטיות.",
  },
  {
    tag: "03 / AUTOMATION",
    title: "פחות עבודה חוזרת",
    text: "חיבור בין מערכות ואוטומציה של תהליכים — כדי להעביר מידע בצורה מסודרת ולפנות זמן לעבודה החשובה.",
  },
  {
    tag: "04 / DEVELOPMENT",
    title: "שותפה טכנית לפרויקט",
    text: "ממשקים ב‑React ו‑Next.js, פיתוח מותאם והשתלבות בצוות. לפרויקט ממוקד או לשיתוף פעולה מתמשך.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <p className="eyebrow">WEB · AI · AUTOMATION</p>
      <h2>
        מה נבנה <em>יחד?</em>
      </h2>
      <div className="service-grid">
        {SERVICES.map((s) => (
          <article key={s.tag}>
            <span>{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
      <a className="pill" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        בואו נבין מה מתאים לכם ↙
      </a>
    </section>
  );
}
