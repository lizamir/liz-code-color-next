import { SITE } from "@/content";
import { formatPhone } from "@/lib/format";

type Props = { flipped: boolean; copied: string; onCopy: (label: string, text: string) => void };

/** The back of the card: contact details with copy buttons. */
export default function CardBack({ flipped, copied, onCopy }: Props) {
  return (
    <div className="bc-face bc-back" inert={!flipped} aria-hidden={!flipped}>
      <p className="bc-tag" dir="ltr">
        SAY HELLO
      </p>
      <ul>
        <li>
          <a href={`tel:${SITE.phone}`} dir="ltr">
            {formatPhone(SITE.phone)}
          </a>
          <button type="button" onClick={() => onCopy("phone", SITE.phone)} aria-label="העתקת מספר הטלפון">
            {copied === "phone" ? "✓" : "העתק"}
          </button>
        </li>
        <li>
          <a href={`mailto:${SITE.email}`} dir="ltr">
            {SITE.email}
          </a>
          <button type="button" onClick={() => onCopy("mail", SITE.email)} aria-label="העתקת כתובת המייל">
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
        שלחו הודעה בוואטסאפ
      </a>
    </div>
  );
}
