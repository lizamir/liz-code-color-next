"use client";

import { useState } from "react";
import { AUTOMATION_CARDS, AUTOMATION_FLOWS, SITE } from "@/lib/content";
import { useMotionOff } from "@/lib/a11y";

type FlowKey = keyof typeof AUTOMATION_FLOWS;
const STAGES = ["01 / TRIGGER", "02 / INTELLIGENCE", "03 / ACTION"];
const WA = `${SITE.whatsapp}?text=${encodeURIComponent("היי ליז, נדבר על אוטומציה לעסק?")}`;

export default function Automation() {
  const [key, setKey] = useState<FlowKey>("leads");
  const osMotionOff = useMotionOff();
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? osMotionOff;
  const flow = AUTOMATION_FLOWS[key];

  return (
    <section id="automation" className="section automation on-deep" aria-labelledby="automation-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">
              <b>04</b> CONNECTED SYSTEMS. HUMAN THINKING.
            </p>
            <h2 id="automation-title" className="title">
              העסק עובד.
              <br />
              <em>גם בין הקליקים.</em>
            </h2>
          </div>
          <p className="lead">
            אני מאפיינת ובונה אוטומציות וסוכני AI שמחברים בין המידע, הכלים והאנשים בעסק. מתחילים בתהליך שגוזל זמן, ובונים לו דרך טובה יותר.
          </p>
        </div>

        <div className={`flow-lab reveal${paused ? " paused" : ""}`}>
          <div className="flow-toolbar">
            <span>THE AUTOMATION STUDIO</span>
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
                {i > 0 && (
                  <div className="flow-wire" aria-hidden="true">
                    <i />
                  </div>
                )}
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

        <div className="auto-grid">
          {AUTOMATION_CARDS.map((c, i) => (
            <article className="auto-card reveal" key={c.title} style={{ ["--d" as string]: i }}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <small>{c.stack}</small>
            </article>
          ))}
        </div>

        <div className="training reveal">
          <span>FOCUS AI / BOTCAMP</span>
          <p>
            בוגרת BotCamp של Focus AI: בניית סוכנים ב־n8n, מערכות RAG, חיבורי MCP ואפיון פתרונות AI עסקיים. את ההכשרה אני מחברת לניסיון שלי בפיתוח ואינטגרציות.
          </p>
          <a className="btn btn-lime" href={WA} target="_blank" rel="noreferrer">
            איזה תהליך נוכל לקצר אצלכם? ↗
          </a>
        </div>
      </div>
    </section>
  );
}
