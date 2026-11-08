import { cn } from "@/lib/ui/cn";
import { SITE } from "@/content";
import BriefForm from "@/components/features/contact-brief/BriefForm";
import Arrow from "@/components/ui/Arrow";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { formatPhone } from "@/lib/format";

// `contact` is only the hook for the magnetic buttons (lib/effects); the dark look comes from `on-deep`.
const channel =
  "inline-flex min-h-[44px] w-full items-center justify-between gap-4 border-b border-b-[rgba(255,255,255,0.25)] px-1 py-[14px] [font:700_1.05rem_var(--font-display)] [transition:padding_0.3s_var(--ease-out),color_0.2s] hover:px-[14px] hover:text-accent-light";
const channelLabel = "text-[0.78rem] tracking-[0.14em] text-accent-light uppercase";

/** The last section of the home page: direct ways to reach Liz, next to the brief form. */
export default function Contact() {
  return (
    <section
      className="section on-deep contact pb-[90px] text-white mobile:pb-[84px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container grid grid-cols-[0.95fr_1.05fr] [align-items:start] gap-[70px] tablet:grid-cols-[1fr] tablet:gap-[50px]">
        <div className="reveal">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2 id="contact-title" className="title [font-size:clamp(2.4rem,4.8vw,4.4rem)]">
            יש לכם רעיון?
            <br />
            <em>בואו נעשה ממנו וואו.</em>
          </h2>
          <p className="lead">
            אתר לעסק, דף נחיתה, או וואטסאפ ויומן שעובדים לבד? ספרו לי בכמה שורות מה צריך, ואני חוזרת עם כיוון ראשוני.
          </p>
          <ul className="mt-[34px] grid list-none gap-1 p-0">
            <li>
              <a className={channel} href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <span className={cn(channelLabel, "inline-flex items-center gap-[6px]")}>
                  <WhatsAppIcon size={14} /> וואטסאפ
                </span>{" "}
                <bdi>{formatPhone(SITE.phone)}</bdi>
              </a>
            </li>
            <li>
              <a className={channel} href={`mailto:${SITE.email}`}>
                <span className={channelLabel}>מייל</span> {SITE.email}
              </a>
            </li>
            <li>
              <a className={channel} href={SITE.linkedin} target="_blank" rel="noreferrer">
                <span className={channelLabel}>LinkedIn</span> liz-hajage <Arrow dir="out" size={16} />
              </a>
            </li>
          </ul>
        </div>

        <BriefForm />
      </div>
    </section>
  );
}
