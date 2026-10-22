# Liz Code & Color — portfolio

Portfolio of **Liz Hajage**: full-stack, AI and automation. Next.js (App Router, static export), React, TypeScript.
Live: https://lizhajage.co.il

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

## What is in it

- **Home** (`/`): hero with a WebGL wave background, selected work with filters, five brand worlds, services and how I work, an automation studio demo, about with a credentials timeline and tool stack, and a contact section.
- **Case studies** (`/work/<slug>/`): challenge, approach, what was built, screens and next project, for each of the five projects.
- **CV** (`/resume/`): one printable page (Print or Cmd/Ctrl+P saves a PDF).
- **Accessibility statement** (`/accessibility/`), **404**, sitemap, robots, manifest, favicon, social image (`public/og.png`), JSON-LD (Person, WebSite).

Details that matter to visitors:
- **Four color themes** (violet, pink, teal, sun) switch the whole site, including the WebGL waves. Saved in localStorage; first paint is handled by the boot script in `app/layout.tsx`.
- **Project brief** in the contact section builds a ready message for WhatsApp, email or copy. Nothing is sent to a server.
- **Accessibility**: menu with text size, high contrast, stop animations, underline links and spacing; skip link; landmarks; keyboard use; `prefers-reduced-motion`. Contrast was checked for every theme with axe-core (WCAG 2.1 A/AA).
- **Motion is optional**: smooth scroll (Lenis), cursor ring and reveal animations all switch off with reduced motion or the in-page switch.

## Editing content

All copy and data is in `lib/content.ts`: `SITE` (contact details and the availability badge), `PROJECTS` (cards and case studies), `SERVICES`, `PROCESS`, `CREDENTIALS`, `STACK`, `BRIEF`. Items marked "edit me" are meant to be adapted. Nothing there is an invented client, quote or metric; add real testimonials when you have them.

Project covers are screenshots in `public/work/` (webp). The demos live in `public/demos/`; the Ganli demo is built from the `ganli` repo with `npm run build:portfolio` (demo mode, no Supabase keys).

## Structure

- `app/` routes, `globals.css` (tokens, themes, base, a11y modes), `site.css` (all sections, case pages, CV)
- `components/` one file per section, plus `Header`, `ThemePicker`, `AccessibilityToolbar`, `SmoothScroll`, `Cursor`, `Reveal`
- `lib/` content, theme and accessibility stores

The WaveBackground shader and the curved CTA are adapted from React Bits (see `public/licenses/react-bits.txt`).

## Publish

The site is a static export hosted on GitHub Pages at https://lizhajage.co.il (repo `lizamir/lizamir.github.io` holds the built files; this repo holds the source).

```bash
npm run publish:site
```

builds, copies `out/` into `../lizamir.github.io`, commits and pushes. It goes live about a minute later.
