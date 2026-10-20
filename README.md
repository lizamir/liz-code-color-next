# Liz Code & Color — portfolio

Portfolio of **Liz Hajage**: full-stack, AI and automation. Next.js (App Router, static export), React, TypeScript.
Live: https://lizamir.github.io

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

## What is in it

- **Home** (`/`): a short hero (two real desktop views of the work), one gallery of nine projects on their own brand surfaces, business solutions, an interactive AI solution map, a four-step process, about (with the flip business card) and a short contact section.
- **Case studies** (`/work/<slug>/`): who it is for, what was built, UX decisions with the reason, and desktop and mobile screenshots of the built page.
- **CV** (`/resume/`), **accessibility statement** (`/accessibility/`), 404, sitemap, robots, manifest, social image, JSON-LD.
- **Five brand pages** in `public/demos/` (GLOW, AURA, SCOOP, STACK, PLAYDAY). Each has its own HTML, stylesheet and script in `public/demos/brand/` on top of a small shared `base.css/base.js`. Hero photographs come from the redesign kit and are served as responsive WebP from `public/assets/brands/`.

Motion is small and optional: entrance is opacity and at most 16px; `prefers-reduced-motion` and the accessibility menu switch it off and keep all content and actions.

## Brand pages: what is real
Each page has one main interaction (GLOW treatment tabs, AURA item dialog with controlled zoom, SCOOP flavor filter and combination, STACK burger builder, PLAYDAY schedule builder with print and download). Contact buttons open a prefilled WhatsApp message to Liz; nothing is submitted to a server and no order, payment or registration is confirmed on screen.

## Editing content

All portfolio copy and data is in `lib/content.ts` (`SITE`, `PROJECTS`, `SOLUTIONS`, `AI_FLOWS`, `PROCESS`, `CREDENTIALS`, `CV_*`, `STACK`). Gallery screenshots are real captures of the built pages in `public/work/<shot>-d.webp` (1440x900) and `-m.webp` (390x844); retake them after changing a page.

## Structure

- `app/` routes, `globals.css` (tokens, base, buttons, a11y modes), `site.css` (all sections, case pages, CV)
- `components/` one file per section, plus `Header`, `ThemePicker`, `AccessibilityToolbar`, `SmoothScroll`, `Cursor`, `Reveal`
- `lib/` content, theme and accessibility stores

The WaveBackground shader and the curved CTA are adapted from React Bits (see `public/licenses/react-bits.txt`).

## Publish

The site is a static export hosted on GitHub Pages at https://lizamir.github.io (repo `lizamir/lizamir.github.io` holds the built files; this repo holds the source).

```bash
npm run publish:site
```

builds, copies `out/` into `../lizamir.github.io`, commits and pushes. It goes live about a minute later.
