import { SITE } from "@/content";
import { intlPhone } from "@/lib/format";

// Runs before first paint: marks JS as on (so reveal animations may start hidden) and restores the
// visitor's day/night mode and accessibility choices, so nothing flashes.
export const BOOT = `(function(){var d=document.documentElement;try{d.classList.add('js');if(localStorage.getItem('liz-mode')==='night')d.dataset.mode='night';var s=JSON.parse(localStorage.getItem('liz-a11y')||'{}');if(s.size)d.dataset.size=s.size;if(s.contrast)d.classList.add('a11y-contrast');if(s.motion)d.classList.add('a11y-nomotion');if(s.links)d.classList.add('a11y-links');if(s.spacing)d.classList.add('a11y-spacing')}catch(e){d.classList.add('js')}})();`;

/** Who this site is about, for search engines (schema.org). */
export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#liz`,
      name: SITE.personEn,
      alternateName: SITE.person,
      jobTitle: "Full-Stack Developer, AI & Automation",
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      telephone: intlPhone(SITE.phone),
      address: { "@type": "PostalAddress", addressCountry: "IL" },
      sameAs: [SITE.linkedin, SITE.github],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Supabase",
        "n8n",
        "AI agents",
        "Workato",
        "MuleSoft",
        "Web accessibility",
      ],
      alumniOf: { "@type": "EducationalOrganization", name: "B.Sc. Electrical and Electronics Engineering" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#site`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "he",
      publisher: { "@id": `${SITE.url}/#liz` },
    },
  ],
};
