import Image from "next/image";
import { cn } from "@/lib/ui/cn";

/** The phone's camera island, shared with the brand-world phones. */
export const island =
  "absolute start-1/2 top-[9px] z-2 h-[5%] w-[28%] rounded-[99px] bg-[#05060a] [transform:translateX(50%)]";
/** A screenshot filling a device screen. */
const screenImg = "[&_img]:block [&_img]:w-full [&_img]:object-cover [&_img]:object-top";

/** A desktop monitor with a phone in front of it, both built in CSS around real screenshots of the site.
 *  Inside a project card (`group/pw`) the phone lifts on hover. */
export default function Devices({
  mock,
  alt,
  priority,
  className,
}: {
  mock: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-[16/10.6] w-full", className)} role="img" aria-label={alt}>
      <div className="absolute start-0 top-0 w-[84%]" aria-hidden="true">
        <div
          className={cn(
            "rounded-[14px] p-[9px] shadow-[0_30px_50px_-22px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.16)] [background:linear-gradient(160deg,#3a3d4a,#14151b)] [&_img]:aspect-[16/10] [&_img]:h-auto [&_img]:rounded-[6px] [&_img]:bg-black",
            screenImg,
          )}
        >
          <Image
            src={`/mock/${mock}-d.webp`}
            alt=""
            width={1440}
            height={900}
            sizes="(max-width: 900px) 92vw, 620px"
            priority={priority}
            loading={priority ? undefined : "lazy"}
          />
        </div>
        <div className="[margin:0_auto] aspect-[3/2] h-[7%] w-[14%] [background:linear-gradient(90deg,#8d909c,#d7d9e0,#8d909c)]" />
        <div className="[margin:0_auto] h-[9px] w-[34%] rounded-[99px_99px_4px_4px] shadow-[0_10px_14px_-4px_rgba(0,0,0,0.6)] [background:linear-gradient(#c9ccd6,#8d909c)]" />
      </div>
      <div
        className={cn(
          "absolute end-[1%] bottom-[-2%] aspect-[9/19] w-[25%] [transform:rotate(5deg)] rounded-[22px] p-[5px] shadow-[0_26px_40px_-14px_rgba(0,0,0,0.85),inset_0_0_0_1px_rgba(255,255,255,0.22)] [background:linear-gradient(160deg,#3a3d4a,#101118)] [transition:transform_0.6s_var(--ease-spring)] group-hover/pw:[transform:rotate(2deg)_translateY(-10px)] [&_img]:h-full [&_img]:rounded-[17px]",
          screenImg,
        )}
        aria-hidden="true"
      >
        <i className={island} />
        <Image
          src={`/mock/${mock}-m.webp`}
          alt=""
          width={560}
          height={1213}
          sizes="180px"
          loading={priority ? undefined : "lazy"}
        />
      </div>
    </div>
  );
}
