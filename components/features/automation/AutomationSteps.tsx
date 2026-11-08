import { AUTOMATION_STEPS } from "@/content";

import { autoSub } from "./automationClasses";

/** How an automation project starts, with a pointer to a working example in the Ganli demo. */
export default function AutomationSteps({ dev }: { dev: boolean }) {
  return (
    <div className="reveal mt-[clamp(40px,6vw,72px)]">
      <h3 className={autoSub}>{dev ? "איך מתחילים פרויקט AI" : "איך מתחילים"}</h3>
      <ol className="grid list-none grid-cols-[repeat(4,1fr)] gap-0 border-t border-t-[rgba(255,255,255,0.25)] p-0 [counter-reset:none] upto-820:grid-cols-[1fr_1fr] xs:grid-cols-[1fr]">
        {AUTOMATION_STEPS.map((s, i) => (
          <li
            key={s.title}
            className="grid [align-content:start] gap-[6px] border-s border-s-[rgba(255,255,255,0.14)] [padding:20px_clamp(12px,2vw,24px)_6px] first:ps-0 first:[border-inline-start:0] upto-820:odd:ps-0 upto-820:odd:[border-inline-start:0] xs:ps-0 xs:[border-inline-start:0]"
          >
            <b className="text-right text-accent-light [direction:ltr] [font:900_1.8rem/1_var(--font-display)]">
              {String(i + 1).padStart(2, "0")}
            </b>
            <h4 className="text-white [font:800_1.15rem_var(--font-display)]">{s.title}</h4>
            <p className="text-[0.98rem] text-on-deep-2">{s.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-[26px] text-[0.98rem] text-on-deep-2 [&_a]:text-white [&_a]:underline [&_a]:underline-offset-[3px]">
        רוצים לראות את זה עובד? <a href="/demos/ganli/#meet">בגנלי</a> אפשר לקבוע פגישה עם המנהלת ולקבל זימון ליומן,
        ובאזור המנהלת יש מרכז אוטומציות עם תזכורות הרשמה להורים.
      </p>
    </div>
  );
}
