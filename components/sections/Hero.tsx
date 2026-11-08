import { cn } from "@/lib/ui/cn";
import GridGlow from "@/components/motion/GridGlow";
import Arrow, { LoopArrow } from "@/components/ui/Arrow";
import BusinessCard from "@/components/features/business-card/BusinessCard";
import { PROOF, SITE } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import IdeaTitle from "@/components/features/hero-title/IdeaTitle";

// `hero` stays as the hook for the title, card and magnetic-button styles (and lib/effects/magnetButtons).
const heroSection =
  "hero relative isolate grid min-h-[100svh] items-center overflow-hidden [background:transparent] [padding:150px_0_110px] text-ink mobile:min-h-0 mobile:[padding:92px_0_90px]";
const magnet =
  "[transition:transform_0.25s_var(--ease-out),background_0.2s,color_0.2s,border-color_0.2s] mobile:flex-[1_1_100%]";
// The lead paragraph looks like a selected text box in a design tool: a frame with four square handles.
const selection =
  "relative border border-accent px-5 py-4 [&>*]:relative [&>*]:z-1 before:pointer-events-none before:absolute before:[inset:-4px] before:[background:linear-gradient(var(--accent),var(--accent))_top_left_/_8px_8px_no-repeat,linear-gradient(var(--accent),var(--accent))_top_right_/_8px_8px_no-repeat,linear-gradient(var(--accent),var(--accent))_bottom_left_/_8px_8px_no-repeat,linear-gradient(var(--accent),var(--accent))_bottom_right_/_8px_8px_no-repeat] before:content-[''] after:pointer-events-none after:absolute after:[inset:-3px] after:[background:linear-gradient(#fff,#fff)_top_left_/_6px_6px_no-repeat,linear-gradient(#fff,#fff)_top_right_/_6px_6px_no-repeat,linear-gradient(#fff,#fff)_bottom_left_/_6px_6px_no-repeat,linear-gradient(#fff,#fff)_bottom_right_/_6px_6px_no-repeat] after:content-['']";

/** The first screen of the home page: headline, buttons, short proof, and the business card. */
export default function Hero() {
  return (
    <section className={heroSection} id="top" aria-labelledby="hero-title">
      <GridGlow />

      <div className="container grid grid-cols-[1.05fr_0.95fr] items-center gap-10 tablet:grid-cols-[1fr] tablet:gap-[50px] mobile:gap-[26px]">
        <div data-in>
          {SITE.available && (
            <p className="reveal mb-[22px] inline-flex items-center gap-2.5 rounded-[999px] border border-line bg-card [padding:8px_16px_8px_18px] text-ink [font:700_0.9rem/1_var(--font-display)]">
              <span
                className="h-2.5 w-2.5 flex-none animate-[live-pulse_1.6s_infinite] rounded-[50%] bg-[#4fc08d]"
                aria-hidden="true"
              />{" "}
              {SITE.availableText}
            </p>
          )}
          <p className="eyebrow reveal mb-[18px] flex text-accent-ink" style={{ ["--d" as string]: 1 }}>
            WEBSITES · AUTOMATIONS · FOR BUSINESS
          </p>
          <IdeaTitle before="אני הופכת" word="רעיונות" rest="לאתרים שאי אפשר לפספס." />
          <p
            className={cn("lead reveal mt-[26px] max-w-[32rem] text-muted", selection)}
            style={{ ["--d" as string]: 4 }}
          >
            אתרים ודפי נחיתה שנראים בדיוק כמו העסק שלכם, ומחוברים לוואטסאפ וליומן, כדי שלקוחות יפנו, יקבעו ויחזרו.
          </p>
          <div className="reveal mt-[34px] flex flex-wrap gap-[14px]" style={{ ["--d" as string]: 5 }}>
            <a className={cn("btn btn-wa", magnet)} href={SITE.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> בואו נדבר בוואטסאפ
            </a>
            <a className={cn("btn btn-ghost text-ink hover:bg-ink [&:hover>span]:text-white", magnet)} href="#work">
              <span>
                לצפייה בעבודות <Arrow dir="down" />
              </span>
            </a>
          </div>
          <ul
            className="proof reveal mt-11 flex list-none flex-wrap gap-3 p-0"
            style={{ ["--d" as string]: 6 }}
            aria-label="בקצרה עליי"
          >
            {PROOF.map((p) => (
              <li
                key={p.label}
                className="grid min-w-[150px] gap-[2px] rounded-[20px] border border-line bg-card px-[18px] py-3 [backdrop-filter:none] mobile:min-w-0 mobile:flex-[1_1_30%] mobile:px-3 mobile:py-2.5"
              >
                <b className="tracking-[-0.04em] text-accent-ink [font:900_1.9rem/1_var(--font-display)] mobile:text-[1.5rem]">
                  {p.value}
                  {p.unit && <small className="text-[0.9rem] font-bold text-ink"> {p.unit}</small>}
                </b>
                <span className="text-[0.85rem] text-muted">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mobile:order-[-1]">
          <LoopArrow className="pointer-events-none absolute end-[-60px] bottom-10 z-5 h-auto w-[150px] [transform:rotate(18deg)] text-ink opacity-85 mobile:hidden" />
          <BusinessCard />
        </div>
      </div>

      <a
        className="absolute start-[4vw] [inset-block-end:22px] grid justify-items-center gap-2 tracking-[0.22em] text-muted [font:700_0.72rem_var(--font-display)] [writing-mode:vertical-rl] tablet:hidden"
        href="#work"
        aria-label="לגלול לעבודות"
      >
        <span>SCROLL</span>
        <i aria-hidden="true" className="h-[46px] w-[2px] animate-[cue_2.2s_ease-in-out_infinite] bg-accent" />
      </a>
    </section>
  );
}
