import Link from "next/link";
import { SITE } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

/** The closing call to action of a project page. */
export default function CaseCta() {
  return (
    <section className="case-cta on-deep">
      <div className="container">
        <h2 className="title">
          יש לכם פרויקט <em>דומה?</em>
        </h2>
        <p className="lead">ספרו לי בכמה שורות מה צריך, ואחזור עם כיוון ראשוני.</p>
        <div className="case-actions">
          <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> בואו נדבר בוואטסאפ
          </a>
          <Link className="btn btn-ghost" href="/#contact">
            <span>לטופס הקצר</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
