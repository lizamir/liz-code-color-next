import { INTEGRATIONS } from "@/content";
import Robot from "@/components/features/robot/Robot";
import Arrow from "@/components/ui/Arrow";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/links";
import { ghostOnDeep } from "./automationClasses";

const WA = whatsappLink("היי ליז, אשמח לפגישת אפיון: מה אפשר להעביר לאוטומציה אצלי בעסק?");

// what a business owner recognizes; the full list with the plumbing lives on the technical page
const BIZ_INTEGRATIONS = ["WhatsApp", "Google Calendar", "Gmail", "Google Sheets", "CRM"];

/** The section's opening: title, text, buttons and connected tools, next to the 3D robot. */
export default function AutomationIntro({ dev }: { dev: boolean }) {
  return (
    <div className="mb-[clamp(48px,7vw,96px)] grid grid-cols-[1.15fr_0.85fr] items-center gap-[clamp(24px,4vw,64px)] mobile:grid-cols-[1fr]">
      <div className="reveal grid justify-items-start gap-[22px]">
        <p className="eyebrow">{dev ? "AI AGENTS · n8n · INTEGRATIONS" : "AI & AUTOMATION"}</p>
        <h2 id="automation-title" className="title [font-size:clamp(2.4rem,5vw,4.4rem)]">
          אתרים שעובדים בשבילכם.
          <br />
          <em>גם כשאתם לא שם.</em>
        </h2>
        <p className="lead max-w-[36rem]">
          {dev
            ? "סוכני AI ב‑n8n, מערכות RAG וחיבורי MCP, ואינטגרציות בין מערכות (Workato, MuleSoft, APIs ו‑Webhooks). עם בקרה אנושית בנקודות החשובות ותיעוד שאפשר להמשיך ממנו."
            : "פניות, תורים ותזכורות מנוהלים לבד: הלקוח כותב, מקבל תשובה וקובע תור, ואתם מקבלים סיכום מסודר בוואטסאפ. מתחברים לכלים שכבר יש לכם, ואתם מתפנים לעבודה עצמה."}
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-wa" href={WA} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> לפגישת אפיון
          </a>
          <a className={ghostOnDeep} href="#auto-uses">
            <span>
              מה אפשר לבנות <Arrow dir="down" />
            </span>
          </a>
        </div>
        <ul
          className="flex max-w-[36rem] list-none flex-wrap justify-end gap-2 p-0 [direction:ltr] mobile:justify-start"
          aria-label="מערכות שאפשר לחבר"
        >
          {(dev ? INTEGRATIONS : BIZ_INTEGRATIONS).map((n) => (
            <li
              key={n}
              className="rounded-[999px] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.06)] px-[14px] py-[7px] text-on-deep [font:700_0.82rem_var(--font-display)]"
            >
              {n}
            </li>
          ))}
        </ul>
      </div>
      <Robot />
    </div>
  );
}
