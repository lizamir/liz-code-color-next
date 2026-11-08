import type { Metadata } from "next";
import Arrow from "@/components/ui/Arrow";
import Link from "next/link";
import PrintButton from "@/components/ui/PrintButton";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeHead from "@/components/resume/ResumeHead";
import ResumeProjects from "@/components/resume/ResumeProjects";

export const metadata: Metadata = {
  title: "קורות חיים",
  description: "קורות החיים של ליז חג׳ג׳: מפתחת Full‑Stack, יישום AI ואוטומציות.",
  alternates: { canonical: "/resume/" },
};

/** A résumé that prints well (the Print button, or Cmd/Ctrl+P, saves it as a PDF). */
export default function CV() {
  return (
    <div className="min-h-[100vh] bg-paper-2 [padding:24px_16px_80px] print:bg-white print:p-0">
      <nav
        className="mx-auto mb-[18px] flex max-w-[860px] flex-wrap justify-between gap-3 print:hidden"
        aria-label="פעולות"
      >
        <Link className="btn btn-ghost btn-sm" href="/dev/">
          <span>
            <Arrow dir="right" /> חזרה לעמוד המקצועי
          </span>
        </Link>
        <PrintButton />
      </nav>

      {/* `cv` keeps the day colors in night mode (tokens file): the CV is a printable sheet. */}
      <main
        id="main"
        className="cv mx-auto grid max-w-[860px] gap-7 rounded-[22px] bg-white [padding:54px_58px] text-[1.02rem] leading-[1.6] shadow-[0_30px_70px_-40px_rgba(16,16,16,0.6)] print:max-w-none print:gap-4 print:rounded-none print:p-0 print:text-[10.5pt] print:[box-shadow:none] mobile:[padding:28px_20px] [&_h2]:mb-3 [&_h2]:tracking-[0.2em] [&_h2]:text-accent-ink [&_h2]:uppercase [&_h2]:[font:900_0.85rem_var(--font-display)] print:[&_h2]:[break-after:avoid]"
      >
        <ResumeHead />
        <ResumeExperience />
        <ResumeProjects />
      </main>
    </div>
  );
}
