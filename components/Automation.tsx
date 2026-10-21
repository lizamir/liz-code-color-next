"use client";

import { useState } from "react";
import Robot from "./Robot";
import WhatsAppIcon from "./WhatsAppIcon";
import { AUTOMATION_FLOWS, AUTOMATION_STEPS, AUTOMATION_USES, INTEGRATIONS, SITE } from "@/lib/content";
import { useMotionOff } from "@/lib/a11y";

type FlowKey = keyof typeof AUTOMATION_FLOWS;
const STAGES = ["01 / TRIGGER", "02 / INTELLIGENCE", "03 / ACTION"];
const WA = `${SITE.whatsapp}?text=${encodeURIComponent("היי ליז, אשמח לפגישת אפיון: מה אפשר להעביר לאוטומציה אצלי בעסק?")}`;

const ICONS: Record<string, React.ReactNode> = {
  lead: <path d="M4 5h16v10H8l-4 4V5zm4 4h8m-8 3h5" />,
  bot: <path d="M7 8h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3zm5-4v4m-3 6h.01M15 14h.01" />,
  cal: <path d="M5 6h14v13H5zM5 10h14M9 4v4m6-4v4m-6 6h2m2 0h2" />,
  doc: <path d="M7 3h7l4 4v14H7zM14 3v4h4M9 12h7m-7 3h7m-7 3h4" />,
  file: <path d="M4 7h16v12H4zM4 7l3-3h10l3 3M9 12h6m-6 3h3" />,
  bell: <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2zm4 4h4" />,
};

export default function Automation() {
  const [key, setKey] = useState<FlowKey>("leads");
  const osMotionOff = useMotionOff();
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? osMotionOff;
  const flow = AUTOMATION_FLOWS[key];

  return (
    <section id="automation" className="section automation on-deep" aria-labelledby="automation-title">
      <div className="container">
        <div className="auto-hero">
          <div className="auto-hero-copy reveal">
            <p className="eyebrow">
              <b>01</b> AI &amp; AUTOMATION
            </p>
            <h2 id="automation-title" className="title">
              אתרים שעובדים בשבילכם.
              <br />
              <em>גם כשאתם לא שם.</em>
            </h2>
            <p className="lead">
              אני בונה אתרים עם אוטומציות, בוטים וסוכני AI שמחוברים לוואטסאפ, ליומן גוגל, ל‑CRM ולמערכות שכבר יש לכם. פניות, תורים ותזכורות מנוהלים לבד, ואתם מתפנים לעבודה עצמה.
            </p>
            <div className="auto-cta">
              <a className="btn btn-wa" href={WA} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> לפגישת אפיון
              </a>
              <a className="btn btn-ghost" href="#auto-uses">
                <span>מה אפשר לבנות ↓</span>
              </a>
            </div>
            <ul className="integrations" aria-label="מערכות שאפשר לחבר">
              {INTEGRATIONS.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          <Robot />
        </div>

        <h3 className="auto-sub reveal" id="auto-uses">
          מה אפשר להעביר לאוטומציה?
        </h3>
        <div className="uses">
          {AUTOMATION_USES.map((u, i) => (
            <article className="use reveal" key={u.title} style={{ ["--d" as string]: i % 3 }}>
              <svg className="use-icon" viewBox="0 0 24 24" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[u.icon]}
                </g>
              </svg>
              <h4>{u.title}</h4>
              <p>{u.text}</p>
              <small dir="ltr">{u.tools}</small>
            </article>
          ))}
        </div>

        <div className={`flow-lab reveal${paused ? " paused" : ""}`}>
          <div className="flow-toolbar">
            <span>THE AUTOMATION STUDIO · איך זה עובד מאחורי הקלעים</span>
            <button type="button" aria-pressed={!paused} onClick={() => setUserPaused(!paused)}>
              {paused ? "הפעלת התנועה ▶" : "השהיית התנועה ⏸"}
            </button>
          </div>
          <div className="flow-options" role="group" aria-label="בחירת תהליך">
            {(Object.keys(AUTOMATION_FLOWS) as FlowKey[]).map((k) => (
              <button key={k} type="button" aria-pressed={k === key} className={k === key ? "selected" : undefined} onClick={() => setKey(k)}>
                {AUTOMATION_FLOWS[k].label}
              </button>
            ))}
          </div>
          <div className="flow-diagram" role="group" aria-label="שלבי התהליך">
            {flow.steps.map((s, i) => (
              <div className="flow-step" key={i}>
                <div className={`flow-node${i === 1 ? " central" : ""}`}>
                  <small>{STAGES[i]}</small>
                  <b>{s.title}</b>
                  <span>{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flow-caption">
            <span>n8n / APIs / AI AGENTS</span>
            <p aria-live="polite">{flow.note}</p>
          </div>
        </div>

        <div className="auto-steps reveal">
          <h3 className="auto-sub">איך מתחילים פרויקט AI</h3>
          <ol>
            {AUTOMATION_STEPS.map((s, i) => (
              <li key={s.title}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="auto-note">
            רוצים לראות את זה עובד? <a href="/demos/ganli/#meet">בגנלי</a> אפשר לקבוע פגישה עם המנהלת ולקבל זימון ליומן, ובאזור המנהלת יש מרכז אוטומציות עם תזכורות הרשמה להורים.
          </p>
        </div>
      </div>
    </section>
  );
}
