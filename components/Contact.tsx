"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BRIEF, SITE } from "@/lib/content";
import WhatsAppIcon from "./WhatsAppIcon";

/** A project brief that builds a ready message (WhatsApp, email or copy). Nothing is sent to a server. */
export default function Contact() {
  const [type, setType] = useState("");
  const [when, setWhen] = useState("");
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => {
    const lines = [`היי ליז, ${name.trim() ? `אני ${name.trim()}.` : "הגעתי מהפורטפוליו."}`];
    if (type) lines.push(`אני מחפש/ת: ${type}.`);
    if (when) lines.push(`לוח זמנים: ${when}.`);
    if (idea.trim()) lines.push("", idea.trim());
    else lines.push("", "אשמח לשמוע מה אפשר לעשות ביחד.");
    return lines.join("\n");
  }, [type, when, name, idea]);

  const wa = `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
  const mail = `mailto:${SITE.email}?subject=${encodeURIComponent("פנייה מהפורטפוליו" + (type ? `: ${type}` : ""))}&body=${encodeURIComponent(message)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard blocked: the message is visible in the preview anyway.
    }
  };

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">
            <b>07</b> HAVE A PROJECT IN MIND?
          </p>
          <h2 id="contact-title" className="title">
            יש לכם רעיון?
            <br />
            <em>בואו נעשה ממנו וואו.</em>
          </h2>
          <p className="lead">אתר לעסק, רעיון למוצר, יישום AI או חיזוק לצוות? ספרו לי בכמה שורות מה צריך, ואני חוזרת עם כיוון ראשוני.</p>
          <ul className="channels">
            <li>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <span className="wa-chip"><WhatsAppIcon size={14} /> וואטסאפ</span> <bdi>{SITE.phone.replace(/^(\d{3})(\d{7})$/, "$1-$2")}</bdi>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>
                <span>מייל</span> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span> liz-hajage ↗
              </a>
            </li>
            <li>
              <a href={SITE.github} target="_blank" rel="noreferrer">
                <span>GitHub</span> lizamir ↗
              </a>
            </li>
            <li>
              <Link href="/resume/">
                <span>קורות חיים</span> לצפייה ולהדפסה ←
              </Link>
            </li>
          </ul>
        </div>

        <form className="brief reveal" aria-labelledby="brief-title" style={{ ["--d" as string]: 2 }} onSubmit={(e) => e.preventDefault()}>
          <h3 id="brief-title">ספרו לי בקצרה</h3>

          <fieldset>
            <legend>מה מתכננים?</legend>
            <div className="opts">
              {BRIEF.types.map((t) => (
                <label key={t} className={type === t ? "on" : undefined}>
                  <input type="radio" name="type" value={t} checked={type === t} onChange={() => setType(t)} />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>מתי צריך?</legend>
            <div className="opts">
              {BRIEF.timelines.map((t) => (
                <label key={t} className={when === t ? "on" : undefined}>
                  <input type="radio" name="when" value={t} checked={when === t} onChange={() => setWhen(t)} />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="brief-row">
            <label>
              איך קוראים לכם? <small>(לא חובה)</small>
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
          </div>
          <label>
            בכמה שורות, מה הרעיון?
            <textarea value={idea} onChange={(e) => setIdea(e.target.value)} rows={3} placeholder="למשל: אתר לקליניקה, עם קביעת תורים" />
          </label>

          <div className="preview" aria-live="polite">
            <span>ההודעה שתישלח</span>
            <pre>{message}</pre>
          </div>

          <div className="brief-actions">
            <a className="btn btn-wa" href={wa} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> שליחה בוואטסאפ
            </a>
            <a className="btn btn-ghost btn-sm" href={mail}>
              <span>שליחה במייל</span>
            </a>
            <button type="button" className="btn btn-ghost btn-sm" onClick={copy}>
              <span>{copied ? "הועתק ✓" : "העתקת ההודעה"}</span>
            </button>
          </div>
          <p className="brief-note">הטופס רק מנסח הודעה. שום דבר לא נשמר ולא נשלח עד שתלחצו על אחת הדרכים לשליחה.</p>
        </form>
      </div>
    </section>
  );
}
