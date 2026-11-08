import { TESTIMONIALS } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/ui/cn";

/** What clients wrote, shown the way it arrived: as WhatsApp messages. A typing dot plays before each bubble. */
export default function Testimonials() {
  return (
    <section className="section" id="voices" aria-labelledby="voices-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">KIND WORDS</p>
            <h2 id="voices-title" className="title">
              מה לקוחות <em>כתבו לי</em>
            </h2>
          </div>
          <p className="lead">הודעות שקיבלתי בוואטסאפ אחרי שהאתר עלה לאוויר. בלי עריכה, רק תיקוני כתיב קטנים.</p>
        </div>

        <ul className="grid list-none grid-cols-[repeat(3,1fr)] [align-items:start] gap-6 p-0 mobile:mx-auto mobile:max-w-[460px] mobile:grid-cols-[1fr]">
          {TESTIMONIALS.map((t, i) => (
            <li
              className={cn("chat-card reveal", i === 1 && "mt-10 mobile:mt-0")}
              key={t.name}
              style={{ ["--d" as string]: i, ["--k" as string]: i }}
            >
              <figure className="m-0 overflow-hidden rounded-[26px] border border-line bg-[#efe7dd] shadow-[0_30px_50px_-36px_rgba(36,22,29,0.45)]">
                <div className="flex items-center gap-2.5 bg-[#075e54] px-4 py-3 text-white" aria-hidden="true">
                  <span
                    className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[50%] text-[#24161d] [font:800_1rem_var(--font-display)]"
                    style={{ background: t.color }}
                  >
                    {t.initial}
                  </span>
                  <span className="grid leading-[1.15]">
                    <b className="[font:700_1rem_var(--font-display)]">{t.name}</b>
                    <small className="text-[0.78rem] opacity-85">{t.role}</small>
                  </span>
                  <WhatsAppIcon size={18} className="ms-auto opacity-85" />
                </div>
                <div className="relative min-h-[170px] bg-[#efe7dd] [background-image:radial-gradient(rgba(7,94,84,0.07)_1.2px,transparent_1.4px)] [background-size:16px_16px] [padding:22px_16px_26px]">
                  <span className="chat-typing" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <blockquote className="chat-bubble">
                    <p>{t.text}</p>
                    <span
                      className="absolute end-2.5 bottom-1 text-[0.72rem] tracking-[-2px] text-[#34b7f1]"
                      aria-hidden="true"
                    >
                      ✓✓
                    </span>
                  </blockquote>
                </div>
                <figcaption className="sr-only">
                  {t.name}, {t.role}, על {t.project}
                </figcaption>
                <p
                  className="bg-white [padding:10px_16px_12px] tracking-[0.08em] text-muted [font:700_0.75rem_var(--font-display)]"
                  aria-hidden="true"
                >
                  {t.role} · {t.project}
                </p>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
