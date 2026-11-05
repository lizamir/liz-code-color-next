"use client";

import { useRef, useState } from "react";
import { copyText } from "@/lib/clipboard";
import { useMotionOff } from "@/lib/stores/a11y";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import CursorTag from "./CursorTag";
import { useCardPointer } from "./useCardPointer";
import { useCardSwing } from "./useCardSwing";

/**
 * A business card that hangs from a cord. It swings like a pendulum, can be dragged and let go,
 * tilts toward the pointer, and flips over to the contact details.
 */
export default function BusinessCard() {
  const card = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState("");
  const motionOff = useMotionOff();
  const { rig, sim, kick } = useCardSwing(motionOff);
  const pointer = useCardPointer({ rig, card, sim, kick, motionOff, onTap: () => setFlipped((f) => !f) });

  // If the clipboard is blocked nothing shows as copied; the link next to the button still works.
  const copy = async (label: string, text: string) => {
    if (!(await copyText(text))) return;
    setCopied(label);
    setTimeout(() => setCopied(""), 1800);
  };

  return (
    <div className="bc" aria-label="כרטיס הביקור שלי">
      <CursorTag className="fc-a" label="React" />
      <CursorTag className="fc-b" label="AI" />
      <div className="bc-rig" ref={rig}>
        <span className="bc-cord" aria-hidden="true" />
        <span className="bc-ring" aria-hidden="true" />
        <div className="bc-card" ref={card} data-flipped={flipped} {...pointer}>
          <div className="bc-inner">
            <CardFront flipped={flipped} />
            <CardBack flipped={flipped} copied={copied} onCopy={copy} />
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
