"use client";

import { useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Step = { title: string; detail: string };
type Flow = { label: string; steps: [Step, Step, Step]; note: string };

const FLOWS: Record<"leads" | "knowledge" | "documents", Flow> = {
  leads: {
    label: "טיפול בפניות",
    steps: [
      { title: "פנייה חדשה", detail: "טופס באתר או הודעה" },
      { title: "סיווג והבנת הצורך", detail: "סוכן AI + כללים עסקיים" },
      { title: "המידע מגיע לאדם הנכון", detail: "עדכון מערכת ויצירת משימה" },
    ],
    note: "פנייה נכנסת, מנותבת לפי סוג הבקשה וממשיכה למשימת מעקב מסודרת.",
  },
  knowledge: {
    label: "סוכן ידע",
    steps: [
      { title: "שאלה נכנסת", detail: "ערוץ תקשורת מחובר" },
      { title: "שליפה ממאגר הידע", detail: "RAG + מקורות רלוונטיים" },
      { title: "מענה עם מקורות", detail: "או העברה לאדם להמשך" },
    ],
    note: "הסוכן מחפש במאגר שהוגדר לו ומבסס את המענה על המידע שנשלף.",
  },
  documents: {
    label: "עיבוד מסמכים",
    steps: [
      { title: "מסמך נכנס", detail: "חשבונית, טופס או קובץ" },
      { title: "חילוץ ובדיקת שדות", detail: "Parser + כללי אימות" },
      { title: "מידע מסודר במערכת", detail: "אישור אנושי במידת הצורך" },
    ],
    note: "המסמך הופך לנתונים מובנים, עם מסלול בדיקה לפרטים חסרים או חריגים.",
  },
};

const STAGES = ["01 / TRIGGER", "02 / INTELLIGENCE", "03 / ACTION"];

const CARDS = [
  {
    title: "סוכנים שמכירים את העסק",
    text: "חיבור מסמכים ומאגרי ידע לסוכן באמצעות RAG, עם מקורות למענה והעברה לאדם כשצריך.",
    stack: "RAG · Pinecone · LlamaParse",
  },
  {
    title: "מערכות שמדברות ביניהן",
    text: "חיבור טפסים, מערכות ניהול וערוצי תקשורת. נתונים מובנים, ניתוב, הרשאות וטיפול בתקלות.",
    stack: "n8n · Webhooks · APIs · MCP",
  },
  {
    title: "מידע שהופך לפעולה",
    text: "תהליכים לסיכום שיחות, חילוץ פרטים ממסמכים, מחקר ואיסוף מידע — עם נקודות בקרה לאורך הדרך.",
    stack: "Claude · OpenAI · HTTP · Parsers",
  },
];

const AUTOMATION_WHATSAPP =
  "https://wa.me/972546887442?text=" + encodeURIComponent("היי ליז, נדבר על אוטומציה לעסק?");

export default function Automation() {
  const [flowKey, setFlowKey] = useState<keyof typeof FLOWS>("leads");
  const reducedMotion = useReducedMotion();
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reducedMotion;
  const flow = FLOWS[flowKey];

  return (
    <section id="automation" className="automation">
      <div className="auto-heading">
        <p className="eyebrow">CONNECTED SYSTEMS. HUMAN THINKING.</p>
        <h2>
          העסק עובד.
          <br />
          <em>גם בין הקליקים.</em>
        </h2>
        <p>
          אני מאפיינת ובונה אוטומציות וסוכני AI שמחברים בין המידע, הכלים והאנשים בעסק. מתחילים בתהליך שגוזל זמן — ובונים
          לו דרך טובה יותר.
        </p>
      </div>

      <div className={`flow-lab${paused ? " paused" : ""}`}>
        <div className="flow-toolbar">
          <span>THE AUTOMATION STUDIO</span>
          <button id="flow-play" type="button" aria-pressed={!paused} onClick={() => setUserPaused(!paused)}>
            {paused ? "הפעלת התנועה ▶" : "השהיית התנועה ⏸"}
          </button>
        </div>
        <div className="flow-options" aria-label="בחירת תהליך">
          {(Object.keys(FLOWS) as (keyof typeof FLOWS)[]).map((key) => (
            <button
              key={key}
              className={key === flowKey ? "selected" : undefined}
              aria-pressed={key === flowKey}
              onClick={() => setFlowKey(key)}
            >
              {FLOWS[key].label}
            </button>
          ))}
        </div>
        <div className="flow-diagram" aria-label="שלבי התהליך">
          {flow.steps.map((step, i) => (
            <FlowStep key={i} index={i} stage={STAGES[i]} step={step} />
          ))}
        </div>
        <div className="flow-caption">
          <span>n8n / APIs / AI AGENTS</span>
          <p aria-live="polite">{flow.note}</p>
        </div>
      </div>

      <div className="automation-grid">
        {CARDS.map((card, i) => (
          <article key={card.title}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <small>{card.stack}</small>
          </article>
        ))}
      </div>

      <div className="training">
        <span>FOCUS AI / BOTCAMP</span>
        <p>
          בוגרת BotCamp של Focus AI: בניית סוכנים ב־n8n, מערכות RAG, חיבורי MCP ואפיון פתרונות AI עסקיים. את ההכשרה אני
          מחברת לניסיון שלי בפיתוח ואינטגרציות.
        </p>
        <a className="pill" href={AUTOMATION_WHATSAPP} target="_blank" rel="noreferrer">
          איזה תהליך נוכל לקצר אצלכם? ↗
        </a>
      </div>
    </section>
  );
}

function FlowStep({ index, stage, step }: { index: number; stage: string; step: Step }) {
  return (
    <>
      {index > 0 && (
        <div className="flow-wire">
          <i></i>
        </div>
      )}
      <div className={`flow-node${index === 1 ? " central" : ""}`}>
        <small>{stage}</small>
        <b>{step.title}</b>
        <span>{step.detail}</span>
      </div>
    </>
  );
}
