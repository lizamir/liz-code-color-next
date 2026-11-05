import { SITE } from "@/content";

/** Name, role and contact details at the top of the CV. */
export default function ResumeHead() {
  return (
    <header className="cv-head">
      <div>
        <h1>{SITE.person}</h1>
        <p className="cv-role">{SITE.role}</p>
      </div>
      <ul className="cv-contact">
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
