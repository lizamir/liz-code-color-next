"use client";

import { useState } from "react";
import { SITE } from "@/lib/content";

/** A business card that tilts toward the pointer and flips over to the contact details. */
export default function BusinessCard() {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState("");

  const tilt = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--tx", `${(-y * 8).toFixed(2)}deg`);
    e.currentTarget.style.setProperty("--ty", `${(x * 10).toFixed(2)}deg`);
  };
  const level = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--tx", "0deg");
    e.currentTarget.style.setProperty("--ty", "0deg");
  };
  const onClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a,button")) return;
    setFlipped((f) => !f);
  };
  const copy = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      /* clipboard blocked: the link still works */
    }
  };

  return (
    <div className="bc" aria-label="כרטיס הביקור שלי">
      <div className="bc-card" data-flipped={flipped} onPointerMove={tilt} onPointerLeave={level} onClick={onClick}>
        <div className="bc-inner">
          <div className="bc-face bc-front" inert={flipped} aria-hidden={flipped}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="bc-photo" src="/liz.webp" alt="ליז חאג׳ג׳" width={720} height={960} draggable={false} />
            <p className="bc-tag" dir="ltr">
              CODE &amp; COLOR
            </p>
            <div className="bc-id">
              <h2>{SITE.person}</h2>
              <p>{SITE.role}</p>
            </div>
            <p className="bc-foot" dir="ltr">
              {SITE.url.replace("https://", "")}
            </p>
          </div>
          <div className="bc-face bc-back" inert={!flipped} aria-hidden={!flipped}>
            <p className="bc-tag" dir="ltr">
              SAY HELLO
            </p>
            <ul>
              <li>
                <a href={`tel:${SITE.phone}`} dir="ltr">
                  {SITE.phone.replace(/^(\d{3})(\d{7})$/, "$1-$2")}
                </a>
                <button type="button" onClick={() => copy("phone", SITE.phone)} aria-label="העתקת מספר הטלפון">
                  {copied === "phone" ? "✓" : "העתק"}
                </button>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} dir="ltr">
                  {SITE.email}
                </a>
                <button type="button" onClick={() => copy("mail", SITE.email)} aria-label="העתקת כתובת המייל">
                  {copied === "mail" ? "✓" : "העתק"}
                </button>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noreferrer" dir="ltr">
                  linkedin.com/in/liz-hajage
                </a>
              </li>
            </ul>
            <a className="bc-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              שלחו הודעה בוואטסאפ ↗
            </a>
          </div>
        </div>
      </div>
      <button type="button" className="bc-flip" onClick={() => setFlipped((f) => !f)} aria-pressed={flipped}>
        <span aria-hidden="true">↻</span> {flipped ? "חזרה לחזית" : "הפכו את הכרטיס"}
      </button>
      <p className="sr-only" aria-live="polite">
        {copied ? "הועתק" : ""}
      </p>
    </div>
  );
}
