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
    <div className="cv-wrap">
      <nav className="cv-bar" aria-label="פעולות">
        <Link className="btn btn-ghost btn-sm" href="/dev/">
          <span>
            <Arrow dir="right" /> חזרה לעמוד המקצועי
          </span>
        </Link>
        <PrintButton />
      </nav>

      <main id="main" className="cv">
        <ResumeHead />
        <ResumeExperience />
        <ResumeProjects />
      </main>
    </div>
  );
}
