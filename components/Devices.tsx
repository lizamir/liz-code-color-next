import Image from "next/image";

/** A desktop monitor with a phone in front of it, both built in CSS around real screenshots of the site. */
export default function Devices({ mock, alt, priority, className = "" }: { mock: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`devices ${className}`} role="img" aria-label={alt}>
      <div className="dv-desktop" aria-hidden="true">
        <div className="dv-screen">
          <Image src={`/mock/${mock}-d.webp`} alt="" width={1440} height={900} sizes="(max-width: 900px) 92vw, 620px" priority={priority} loading={priority ? undefined : "lazy"} />
        </div>
        <div className="dv-neck" />
        <div className="dv-base" />
      </div>
      <div className="dv-phone" aria-hidden="true">
        <i className="dv-island" />
        <Image src={`/mock/${mock}-m.webp`} alt="" width={560} height={1213} sizes="180px" loading={priority ? undefined : "lazy"} />
      </div>
    </div>
  );
}
