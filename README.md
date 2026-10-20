# Liz Code & Color — Next.js

Portfolio website for **Liz Hajage**: web development, UI/UX and AI automation.
Migrated from the static site at https://github.com/lizamir/liz-code-color-portfolio to React + Next.js (App Router, TypeScript).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx`: Hebrew RTL layout, fonts, metadata, global CSS
- `app/page.tsx`: the home page, composed from section components
- `app/styles/`: the original stylesheets, imported globally
- `components/`: one component per section. Interactive parts are client components:
  - `Header`: mobile menu
  - `WaveBackground`: WebGL hero waves and the pause/play toggle
  - `Automation`: the automation flow picker
  - `PageEffects`: scroll reveal, cursor glow, mockup tilt, scroll progress
- `lib/`: shared links and the `useReducedMotion` hook
- `public/demos/`: the demo sites, still static HTML for now
- `public/assets/`: images

The WaveBackground and CurvedWhatsApp code is adapted from React Bits (see `public/licenses/react-bits.txt`).

## Publish

The site is a static export, hosted on GitHub Pages at https://lizamir.github.io (repo `lizamir/lizamir.github.io` holds the built files; this repo holds the source).

```bash
npm run publish:site
```

builds, copies `out/` into `../lizamir.github.io`, commits and pushes. The Ganli demo inside it is built from the `ganli` repo with `npm run build:portfolio` (demo mode, no Supabase keys).
