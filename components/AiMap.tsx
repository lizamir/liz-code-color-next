"use client";

import { useState } from "react";
import { AI_FLOWS, CAPABILITIES } from "@/lib/content";

/** A solution map, not a live run: three flows, each a short path. Clicking a step shows what it receives and what it makes. */
export default function AiMap() {
  const [flow, setFlow] = useState(0);
  const [step, setStep] = useState(0);
  const f = AI_FLOWS[flow];
  const n = f.steps.length;
  const s = f.steps[step];
  const progress = n > 1 ? step / (n - 1) : 0;

  return (
    <section className="section ai on-deep" id="ai" aria-labelledby="ai-title">
      <div className="container">
        <div className="ai-top">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">
              <b>03</b> AI &amp; AUTOMATION
            </p>
            <h2 id="ai-title" className="title">
              איך נראה <em>תהליך חכם</em>
            </h2>
          </div>
          <div className="ai-tabs" role="tablist" aria-label="בחירת תהליך">
            {AI_FLOWS.map((x, i) => (
              <button
                key={x.id}
                type="button"
                role="tab"
                id={`ai-tab-${x.id}`}
                aria-selected={flow === i}
                aria-controls="ai-panel"
                onClick={() => {
                  setFlow(i);
                  setStep(0);
                }}
              >
                {x.label}
              </button>
            ))}
          </div>
        </div>

        <div id="ai-panel" role="tabpanel" aria-labelledby={`ai-tab-${f.id}`}>
          <p className="ai-note">{f.note}</p>
          <div className="ai-map">
            <svg className="ai-line" viewBox="0 0 100 36" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              {/* horizontal on wide screens; the CSS turns it vertical on narrow ones */}
              <line x1="12.5" y1="18" x2="87.5" y2="18" />
              <line className="on" x1="12.5" y1="18" x2="87.5" y2="18" style={{ ["--p" as string]: progress }} />
            </svg>
            <ol className="ai-steps">
              {f.steps.map((x, i) => (
                <li key={x.title}>
                  <button type="button" className="ai-step" aria-pressed={step === i} onClick={() => setStep(i)} style={{ width: "100%" }}>
                    <small>0{i + 1}</small>
                    <b>{x.title}</b>
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="ai-detail" aria-live="polite">
            <div>
              <h3>מקבל</h3>
              <p>{s.gets}</p>
            </div>
            <div>
              <h3>מפיק</h3>
              <p>{s.makes}</p>
            </div>
          </div>
          <p className="ai-disclaimer">זו מפת פתרון להמחשה ולא הרצה חיה של סוכן. אין כאן חיבור לשירות חיצוני.</p>
        </div>

        <ul className="cap-list" aria-label="יכולות">
          {CAPABILITIES.map((c) => (
            <li key={c.name}>
              <b>{c.name}</b>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
