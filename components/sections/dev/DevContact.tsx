import Link from "next/link";
import { SITE } from "@/content";
import Arrow from "@/components/ui/Arrow";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { intlPhone } from "@/lib/format";
import { devActions, devGhost } from "./devClasses";

const linkLabel = "[font:700_0.78rem/1_var(--font-display)] tracking-[0.1em] text-on-deep-2";
const link =
  "[font:800_1.08rem/1.3_var(--font-display)] text-right text-white [overflow-wrap:anywhere] hover:text-accent-light";

/** The closing of the technical page: direct contact details for recruiters and teams. */
export default function DevContact() {
  return (
    <section className="section on-deep" id="dev-contact" aria-labelledby="dev-contact-title">
      <div className="reveal container grid justify-items-start gap-5">
        <p className="eyebrow">LET&apos;S TALK</p>
        <h2 id="dev-contact-title" className="title">
          יש לכם <em>משרה</em> או צוות?
        </h2>
        <p className="lead">אשמח לשמוע על התפקיד, הצוות והמוצר.</p>
        <ul className="[margin:10px_0] grid w-[min(760px,100%)] list-none grid-cols-[repeat(2,minmax(0,1fr))] gap-3 p-0 mobile:grid-cols-[1fr]">
          <li className="grid min-w-0 gap-1 rounded-[18px] border border-[rgba(255,255,255,0.14)] px-[18px] py-[14px]">
            <span className={linkLabel}>מייל</span>
            <a className={link} href={`mailto:${SITE.email}`} dir="ltr">
              {SITE.email}
            </a>
          </li>
          <li className="grid min-w-0 gap-1 rounded-[18px] border border-[rgba(255,255,255,0.14)] px-[18px] py-[14px]">
            <span className={linkLabel}>טלפון</span>
            <a className={link} href={`tel:${intlPhone(SITE.phone)}`} dir="ltr">
              {SITE.phone}
            </a>
          </li>
          <li className="grid min-w-0 gap-1 rounded-[18px] border border-[rgba(255,255,255,0.14)] px-[18px] py-[14px]">
            <span className={linkLabel}>LinkedIn</span>
            <a className={link} href={SITE.linkedin} target="_blank" rel="noreferrer" dir="ltr">
              in/liz-hajage
            </a>
          </li>
          <li className="grid min-w-0 gap-1 rounded-[18px] border border-[rgba(255,255,255,0.14)] px-[18px] py-[14px]">
            <span className={linkLabel}>GitHub</span>
            <a className={link} href={SITE.github} target="_blank" rel="noreferrer" dir="ltr">
              github.com/lizamir
            </a>
          </li>
        </ul>
        <div className={devActions}>
          <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> וואטסאפ
          </a>
          <Link className={devGhost} href="/resume/">
            <span>
              לקורות החיים <Arrow dir="in" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
