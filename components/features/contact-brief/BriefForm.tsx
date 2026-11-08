"use client";

import { useMemo, useState } from "react";
import { BRIEF } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { briefMessage, briefSubject } from "@/lib/brief";
import { copyText } from "@/lib/clipboard";
import { mailLink, whatsappLink } from "@/lib/links";
import ChoiceGroup from "./ChoiceGroup";
import { cn } from "@/lib/ui/cn";

const field = "grid gap-[6px] [font:800_0.92rem_var(--font-display)]";
const input =
  "min-h-[52px] rounded-[16px] border-2 border-line bg-paper px-4 py-[14px] [font:400_1.05rem_var(--font-body)] text-ink [transition:border-color_0.2s,background_0.2s] focus:border-accent-ink focus:bg-white focus:outline-none";
// The buttons sit in the contact section, where they follow the pointer (lib/effects/magnetButtons).
const magnet = "[transition:transform_0.25s_var(--ease-out),background_0.2s,color_0.2s,border-color_0.2s]";
const ghost = cn("btn btn-ghost btn-sm text-ink hover:bg-ink [&:hover>span]:text-white", magnet);

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
      className="brief reveal grid gap-[18px] rounded-[36px] bg-white p-9 text-ink shadow-[0_40px_80px_-36px_rgba(0,0,0,0.6)] mobile:rounded-[28px] mobile:[padding:24px_18px]"
      aria-labelledby="brief-title"
      style={{ ["--d" as string]: 2 }}
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 id="brief-title" className="text-[1.9rem] tracking-[-0.045em]">
        ספרו לי בקצרה
      </h3>

      <ChoiceGroup legend="מה מתכננים?" name="type" options={BRIEF.types} value={type} onChange={setType} />
      <ChoiceGroup legend="מתי צריך?" name="when" options={BRIEF.timelines} value={when} onChange={setWhen} />

      <div>
        <label className={field}>
          איך קוראים לכם? <small className="font-semibold text-muted">(לא חובה)</small>
          <input className={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
      </div>
      <label className={field}>
        בכמה שורות, מה הרעיון?
        <textarea
          className={cn(input, "min-h-[96px] resize-y")}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={3}
          placeholder="למשל: אתר לקליניקה, עם קביעת תורים"
        />
      </label>

      <div className="grid gap-2 rounded-[20px] bg-ink px-[18px] py-4 text-on-ink" aria-live="polite">
        <span className="tracking-[0.16em] text-accent-light [font:800_0.72rem_var(--font-display)]">
          ההודעה שתישלח
        </span>
        <pre className="m-0 whitespace-pre-wrap [font:500_0.98rem/1.6_var(--font-body)]">{message}</pre>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <a className={cn("btn btn-wa", magnet)} href={whatsappLink(message)} target="_blank" rel="noreferrer">
          <WhatsAppIcon /> שליחה בוואטסאפ
        </a>
        <a className={ghost} href={mailLink(briefSubject(type), message)}>
          <span>שליחה במייל</span>
        </a>
        <button type="button" className={ghost} onClick={copy}>
          <span>{copied ? "הועתק ✓" : "העתקת ההודעה"}</span>
        </button>
      </div>
      <p className="text-[0.85rem] text-muted">
        הטופס רק מנסח הודעה. שום דבר לא נשמר ולא נשלח עד שתלחצו על אחת הדרכים לשליחה.
      </p>
    </form>
  );
}
