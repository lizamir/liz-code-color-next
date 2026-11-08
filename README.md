# Liz Code & Color — portfolio

Portfolio of **Liz Hajage**: full-stack, AI and automation. Next.js (App Router, static export), React, TypeScript.
Live: https://lizhajage.co.il

## Getting started

```bash
nvm use
npm install
npm run dev
```

## Scripts

| Command                | What it does                                                    |
| ---------------------- | --------------------------------------------------------------- |
| `npm run dev`          | Development server                                              |
| `npm run build`        | Static export to `out/`                                         |
| `npm run check`        | Lint, types, formatting and unit tests                          |
| `npm test`             | Unit tests (Vitest)                                             |
| `npm run test:e2e`     | Browser tests of the built site (Playwright); run `build` first |
| `npm run publish:site` | Builds and publishes to GitHub Pages                            |

## Conventions

- **Commits** follow [Conventional Commits](https://www.conventionalcommits.org); a hook checks each message.
- **Versions** follow [SemVer](https://semver.org). Changes are listed in `CHANGELOG.md`.
- **CI** runs every check and the browser tests on each pull request (`.github/workflows/ci.yml`).
- **Formatting** is Prettier and ESLint, run on staged files before each commit. Prettier also sorts Tailwind classes.
- **Styling** is [Tailwind CSS](https://tailwindcss.com) v4. Components carry utility classes; class lists used by several parts live in small modules next to them (e.g. `components/sections/aboutClasses.ts`, `components/resume/cvClasses.ts`), joined with `cn()` (`lib/ui/cn.ts`). Brand colors, fonts and breakpoints (`tablet`, `carousel`, `mobile`, `small`, `xs`, `night`, `touch`…) are Tailwind tokens in `app/styles/theme.css`. Plain CSS is kept for what reads better as CSS: tokens and element defaults, the type system, buttons, keyframes and the animated pieces (business card, hero title, chat bubbles, automation studio).

## What is in it

- **Business site** (`/`): for business owners, in plain words. Who it is for, services, work, brand demos, the digital assistant, testimonials, process, FAQ and contact.
- **Technical page** (`/dev/`): for recruiters and dev teams. Projects with stack and code, how I work, AI and automation in depth, experience and tools.
- **Project pages** (`/work/<slug>/`): the story first, technical details folded at the end.
- **CV** (`/resume/`): printable (Print or Cmd/Ctrl+P saves a PDF).
- **Accessibility statement** (`/accessibility/`), **404**, sitemap, robots, manifest, favicon, social image, JSON-LD (Person, WebSite).

Details that matter to visitors:

- **One rose palette with a day/night switch.** Saved in localStorage; first paint is handled by the boot script in `lib/siteHead.ts`.
- **Project brief** in the contact section builds a ready message for WhatsApp, email or copy. Nothing is sent to a server.
- **Accessibility**: menu with text size, high contrast, stop animations, underline links and spacing; skip link; landmarks; keyboard use; `prefers-reduced-motion`. Contrast was checked in day and night modes with axe-core (WCAG 2.1 A/AA).
- **Motion is optional**: smooth scroll (Lenis), cursor ring, the headline animation and reveal animations all switch off with reduced motion or the in-page switch.

## Editing content

All copy and data is in `content/`, one file per topic: `site.ts` (contact details and the availability badge), `projects/` (one file per project), `services.ts`, `process.ts`, `faq.ts`, `career.ts`, `brief.ts`. Import from `@/content`. Items marked "edit me" are meant to be adapted. Nothing there is an invented client, quote or metric; add real testimonials when you have them.

Project covers are screenshots in `public/work/` (webp). The demos live in `public/demos/`; the Ganli demo is built from the `ganli` repo with `npm run build:portfolio` (demo mode, no Supabase keys).

## Structure

```
app/                 routes only: metadata and composing a page
  styles/            index.css (cascade layers and imports), theme.css (Tailwind tokens and breakpoints)
    base/            brand tokens, element defaults, type system, print
    components/      buttons, sections, cursor, accessibility menu
    motion/          keyframes, reveals, background, hero title, business card, chat and steps, automation
    accessibility-modes.css   contrast, no motion, underlined links, spacing (a layer above components)
content/             all copy and data, by topic (projects/ has one file per project)
components/
  layout/            header, mobile menu, footer, bottom nav, logo, day/night, accessibility menu
  sections/          sections of the home page (dev/ for the technical page)
  features/          larger pieces, each in its own folder with its hooks:
                     automation, brand-worlds, business-card, contact-brief, hero-title, robot
  case-study/        parts of a project page
  resume/            parts of the CV
  motion/            page-wide motion: reveal, smooth scroll, cursor, grid glow, Motion (attaches lib/effects)
  ui/                small shared pieces: arrows, icons, devices
  vendor/react-bits/ TechText, third-party and kept close to the original on purpose
lib/                 logic with no UI
  stores/            accessibility and day/night state
  hooks/             shared React hooks
  effects/           one micro-interaction per file; each returns its cleanup
  brief.ts, links.ts, format.ts, clipboard.ts, scroll.ts, siteHead.ts
```

The site is fully static and makes no server calls, so there is no API layer. WhatsApp and mail links are built in `lib/links.ts`.

TechText comes from React Bits (see `public/licenses/react-bits.txt`).

## Publish

The site is a static export hosted on GitHub Pages at https://lizhajage.co.il (repo `lizamir/lizamir.github.io` holds the built files; this repo holds the source).

```bash
npm run publish:site
```

builds, copies `out/` into `../lizamir.github.io`, commits and pushes. It goes live about a minute later.
