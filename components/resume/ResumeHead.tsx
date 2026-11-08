import { SITE } from "@/content";

/** Name, role and contact details at the top of the CV. */
export default function ResumeHead() {
  return (
    <header className="flex flex-wrap [align-items:end] justify-between gap-6 border-b-4 border-b-ink pb-[22px]">
      <div>
        <h1 className="text-[3rem] tracking-[-0.05em] print:text-[26pt]">{SITE.person}</h1>
        <p className="mt-1 text-accent-ink [font:700_1.2rem_var(--font-display)]">{SITE.role}</p>
      </div>
      <ul className="grid list-none gap-[2px] p-0 text-[0.95rem]">
        <li>
          <bdi>{SITE.phone}</bdi>
        </li>
        <li>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>
          <a href={SITE.linkedin}>linkedin.com/in/liz-hajage</a>
        </li>
        <li>
          <a href={SITE.github}>github.com/lizamir</a>
        </li>
        <li>{SITE.city}</li>
      </ul>
    </header>
  );
}
