"use client";

import { useState } from "react";
import { AUTOMATION_FLOWS } from "@/content";
import { useMotionOff } from "@/lib/stores/a11y";

type FlowKey = keyof typeof AUTOMATION_FLOWS;
const STAGES = ["01 / TRIGGER", "02 / INTELLIGENCE", "03 / ACTION"];

/** The technical page's demo: pick a process and see its trigger, intelligence and action steps. */
export default function FlowLab() {
  const [key, setKey] = useState<FlowKey>("leads");
  const osMotionOff = useMotionOff();
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? osMotionOff;
  const flow = AUTOMATION_FLOWS[key];

  return (
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
  );
}
