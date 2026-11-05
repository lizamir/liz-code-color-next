import Link from "next/link";
import { SITE } from "@/content";
import Arrow from "@/components/ui/Arrow";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { intlPhone } from "@/lib/format";

/** The closing of the technical page: direct contact details for recruiters and teams. */
export default function DevContact() {
  return (
    <section className="section dev-contact on-deep" id="dev-contact" aria-labelledby="dev-contact-title">
      <div className="container dev-contact-inner reveal">
        <p className="eyebrow">LET&apos;S TALK</p>
        <h2 id="dev-contact-title" className="title">
          יש לכם <em>משרה</em> או צוות?
        </h2>
        <p className="lead">אשמח לשמוע על התפקיד, הצוות והמוצר.</p>
        <ul className="dev-links">
          <li>
            <span>מייל</span>
            <a href={`mailto:${SITE.email}`} dir="ltr">
              {SITE.email}
            </a>
          </li>
          <li>
            <span>טלפון</span>
            <a href={`tel:${intlPhone(SITE.phone)}`} dir="ltr">
              {SITE.phone}
            </a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" dir="ltr">
              in/liz-hajage
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={SITE.github} target="_blank" rel="noreferrer" dir="ltr">
              github.com/lizamir
            </a>
          </li>
        </ul>
        <div className="dev-actions">
          <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> וואטסאפ
          </a>
          <Link className="btn btn-ghost" href="/resume/">
            <span>
              לקורות החיים <Arrow dir="in" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
