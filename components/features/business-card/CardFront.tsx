import { SITE } from "@/content";
import { bareUrl } from "@/lib/format";

/** The front of the card: photo, name and role. */
export default function CardFront({ flipped }: { flipped: boolean }) {
  return (
    <div className="bc-face bc-front" inert={flipped} aria-hidden={flipped}>
      <span className="bc-hole" aria-hidden="true" />
      <svg className="bc-spark" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 0c1.5 10 9.5 18.5 20 20-10.5 1.5-18.5 10-20 20C18.5 30 10.5 21.5 0 20 10.5 18.5 18.5 10 20 0z" fill="currentColor" />
      </svg>
      <p className="bc-tag" dir="ltr">
        CODE &amp; COLOR
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bc-photo" src="/liz.webp" alt="ליז חג׳ג׳" width={720} height={960} draggable={false} />
      <div className="bc-id">
        <h2>{SITE.person}</h2>
        <p>{SITE.role}</p>
      </div>
      <p className="bc-foot" dir="ltr">
        <span>Nº 001</span>
        <span>{bareUrl(SITE.url)}</span>
      </p>
      <span className="bc-glare" aria-hidden="true" />
    </div>
  );
}
