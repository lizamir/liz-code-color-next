"use client";

import { useMemo, useState } from "react";
import { BRIEF } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { briefMessage, briefSubject } from "@/lib/brief";
import { copyText } from "@/lib/clipboard";
import { mailLink, whatsappLink } from "@/lib/links";
import ChoiceGroup from "./ChoiceGroup";

/** A project brief that builds a ready message (WhatsApp, email or copy). Nothing is sent to a server. */
export default function BriefForm() {
  const [type, setType] = useState("");
  const [when, setWhen] = useState("");
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => briefMessage({ type, when, name, idea }), [type, when, name, idea]);

  // If the clipboard is blocked, the message is still visible in the preview.
  const copy = async () => {
    if (!(await copyText(message))) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <form
      className="brief reveal"
      aria-labelledby="brief-title"
      style={{ ["--d" as string]: 2 }}
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 id="brief-title">ספרו לי בקצרה</h3>

      <ChoiceGroup legend="מה מתכננים?" name="type" options={BRIEF.types} value={type} onChange={setType} />
      <ChoiceGroup legend="מתי צריך?" name="when" options={BRIEF.timelines} value={when} onChange={setWhen} />

      <div className="brief-row">
        <label>
          איך קוראים לכם? <small>(לא חובה)</small>
          <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
      </div>
      <label>
        בכמה שורות, מה הרעיון?
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={3}
          placeholder="למשל: אתר לקליניקה, עם קביעת תורים"
        />
      </label>

      <div className="preview" aria-live="polite">
        <span>ההודעה שתישלח</span>
        <pre>{message}</pre>
      </div>

      <div className="brief-actions">
        <a className="btn btn-wa" href={whatsappLink(message)} target="_blank" rel="noreferrer">
          <WhatsAppIcon /> שליחה בוואטסאפ
        </a>
        <a className="btn btn-ghost btn-sm" href={mailLink(briefSubject(type), message)}>
          <span>שליחה במייל</span>
        </a>
        <button type="button" className="btn btn-ghost btn-sm" onClick={copy}>
          <span>{copied ? "הועתק ✓" : "העתקת ההודעה"}</span>
        </button>
      </div>
      <p className="brief-note">הטופס רק מנסח הודעה. שום דבר לא נשמר ולא נשלח עד שתלחצו על אחת הדרכים לשליחה.</p>
    </form>
  );
}
