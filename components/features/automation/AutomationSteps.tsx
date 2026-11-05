import { AUTOMATION_STEPS } from "@/content";

/** How an automation project starts, with a pointer to a working example in the Ganli demo. */
export default function AutomationSteps({ dev }: { dev: boolean }) {
  return (
    <div className="auto-steps reveal">
      <h3 className="auto-sub">{dev ? "איך מתחילים פרויקט AI" : "איך מתחילים"}</h3>
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
  );
}
