"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/content";
import { useMotionOff } from "@/lib/a11y";

/**
 * A business card that hangs from a cord. It swings like a pendulum (a small spring simulation),
 * can be dragged and let go, tilts toward the pointer, and flips over to the contact details.
 */
export default function BusinessCard() {
  const rig = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState("");
  const motionOff = useMotionOff();
  const sim = useRef({ a: 13, w: 0, drag: false, raf: 0, last: 0, moved: 0 });

  useEffect(() => {
    const el = rig.current;
    if (!el) return;
    const s = sim.current;
    if (motionOff) {
      el.style.transform = "none";
      return;
    }
    const step = (t: number) => {
      const dt = Math.min(0.032, (t - s.last) / 1000 || 0.016);
      s.last = t;
      if (!s.drag) {
        s.w += (-22 * s.a - 1.05 * s.w) * dt;
        s.a += s.w * dt;
      }
      el.style.transform = `rotate(${s.a.toFixed(3)}deg)`;
      if (!s.drag && Math.abs(s.a) < 0.03 && Math.abs(s.w) < 0.03) {
        s.a = 0;
        el.style.transform = "rotate(0deg)";
        s.raf = 0;
        return;
      }
      s.raf = requestAnimationFrame(step);
    };
    const kick = () => {
      if (!s.raf) {
        s.last = performance.now();
        s.raf = requestAnimationFrame(step);
      }
    };
    (el as HTMLElement & { _kick?: () => void })._kick = kick;
    kick();
    return () => cancelAnimationFrame(s.raf);
  }, [motionOff]);

  const kick = () => (rig.current as (HTMLElement & { _kick?: () => void }) | null)?._kick?.();

  const onDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("a,button")) return;
    const s = sim.current;
    s.drag = true;
    s.moved = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    kick();
  };
  const onMove = (e: React.PointerEvent) => {
    const s = sim.current;
    const r = card.current?.getBoundingClientRect();
    if (r && !motionOff && e.pointerType === "mouse") {
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.current!.style.setProperty("--tx", `${(-y * 10).toFixed(2)}deg`);
      card.current!.style.setProperty("--ty", `${(x * 12).toFixed(2)}deg`);
      card.current!.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.current!.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
    }
    if (!s.drag || !rig.current) return;
    const pr = rig.current.getBoundingClientRect();
    const px = pr.left + pr.width / 2; // pivot: top centre of the rig (cord end)
    const py = pr.top;
    const ang = (Math.atan2(e.clientX - px, Math.max(40, e.clientY - py)) * 180) / Math.PI;
    const next = Math.max(-38, Math.min(38, -ang));
    s.w = (next - s.a) * 40;
    s.a = next;
    s.moved += Math.abs(e.movementX) + Math.abs(e.movementY);
  };
  const onUp = () => {
    const s = sim.current;
    s.drag = false;
    kick();
    if (s.moved < 6) setFlipped((f) => !f);
  };
  const onLeave = () => {
    const c = card.current;
    if (!c) return;
    c.style.setProperty("--tx", "0deg");
    c.style.setProperty("--ty", "0deg");
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
      <div className="bc-rig" ref={rig}>
        <span className="bc-cord" aria-hidden="true" />
        <span className="bc-ring" aria-hidden="true" />
        <div className="bc-card" ref={card} data-flipped={flipped} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} onPointerLeave={onLeave}>
          <div className="bc-inner">
            <div className="bc-face bc-front" inert={flipped} aria-hidden={flipped}>
              <span className="bc-hole" aria-hidden="true" />
              <svg className="bc-spark" viewBox="0 0 40 40" aria-hidden="true">
                <path d="M20 0c1.5 10 9.5 18.5 20 20-10.5 1.5-18.5 10-20 20C18.5 30 10.5 21.5 0 20 10.5 18.5 18.5 10 20 0z" fill="currentColor" />
              </svg>
              <p className="bc-tag" dir="ltr">
                CODE &amp; COLOR
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="bc-photo" src="/liz.webp" alt="ליז חאג׳ג׳" width={720} height={960} draggable={false} />
              <div className="bc-id">
                <h2>{SITE.person}</h2>
                <p>{SITE.role}</p>
              </div>
              <p className="bc-foot" dir="ltr">
                <span>Nº 001</span>
                <span>{SITE.url.replace("https://", "")}</span>
              </p>
              <span className="bc-glare" aria-hidden="true" />
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
                <li>
                  <a href={SITE.github} target="_blank" rel="noreferrer" dir="ltr">
                    github.com/lizamir
                  </a>
                </li>
              </ul>
              <a className="bc-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                שלחו הודעה בוואטסאפ ↗
              </a>
            </div>
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
