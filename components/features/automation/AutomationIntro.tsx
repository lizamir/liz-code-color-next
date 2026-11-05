import { INTEGRATIONS } from "@/content";
import Robot from "@/components/features/robot/Robot";
import Arrow from "@/components/ui/Arrow";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/links";

const WA = whatsappLink("היי ליז, אשמח לפגישת אפיון: מה אפשר להעביר לאוטומציה אצלי בעסק?");

// what a business owner recognizes; the full list with the plumbing lives on the technical page
const BIZ_INTEGRATIONS = ["WhatsApp", "Google Calendar", "Gmail", "Google Sheets", "CRM"];

/** The section's opening: title, text, buttons and connected tools, next to the 3D robot. */
export default function AutomationIntro({ dev }: { dev: boolean }) {
  return (
    <div className="auto-hero">
      <div className="auto-hero-copy reveal">
        <p className="eyebrow">{dev ? "AI AGENTS · n8n · INTEGRATIONS" : "AI & AUTOMATION"}</p>
        <h2 id="automation-title" className="title">
          אתרים שעובדים בשבילכם.
          <br />
          <em>גם כשאתם לא שם.</em>
        </h2>
        <p className="lead">
          {dev
            ? "סוכני AI ב‑n8n, מערכות RAG וחיבורי MCP, ואינטגרציות בין מערכות (Workato, MuleSoft, APIs ו‑Webhooks). עם בקרה אנושית בנקודות החשובות ותיעוד שאפשר להמשיך ממנו."
            : "פניות, תורים ותזכורות מנוהלים לבד: הלקוח כותב, מקבל תשובה וקובע תור, ואתם מקבלים סיכום מסודר בוואטסאפ. מתחברים לכלים שכבר יש לכם, ואתם מתפנים לעבודה עצמה."}
        </p>
        <div className="auto-cta">
          <a className="btn btn-wa" href={WA} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> לפגישת אפיון
          </a>
          <a className="btn btn-ghost" href="#auto-uses">
            <span>
              מה אפשר לבנות <Arrow dir="down" />
            </span>
          </a>
        </div>
        <ul className="integrations" aria-label="מערכות שאפשר לחבר">
          {(dev ? INTEGRATIONS : BIZ_INTEGRATIONS).map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
      <Robot />
    </div>
  );
}
