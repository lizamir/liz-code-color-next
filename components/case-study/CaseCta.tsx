import Link from "next/link";
import { SITE } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/ui/cn";
import { caseActions } from "./caseClasses";

/** The closing call to action of a project page. */
export default function CaseCta() {
  return (
    <section className="on-deep [padding:110px_0] text-center">
      <div className="container grid justify-items-center gap-[18px]">
        <h2 className="title">
          יש לכם פרויקט <em>דומה?</em>
        </h2>
        <p className="lead mx-auto">ספרו לי בכמה שורות מה צריך, ואחזור עם כיוון ראשוני.</p>
        <div className={cn(caseActions, "justify-center")}>
          <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> בואו נדבר בוואטסאפ
          </a>
          <Link className="btn btn-ghost text-white hover:bg-white [&:hover>span]:text-deep" href="/#contact">
            <span>לטופס הקצר</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
