# Changelog

All notable changes to this project are listed here. The format follows
[Keep a Changelog](https://keepachangelog.com), and versions follow [SemVer](https://semver.org).

## [1.2.0] - 2026-11-08

### Changed

- Moved the design to Tailwind CSS v4: every page is styled with utility classes. No visual change, checked by comparing the computed style of every element on every page, in day and night mode, at three widths.
- Regrouped the remaining CSS into `base/`, `components/` and `motion/` with cascade layers. The accessibility modes sit in their own layer, above the components.

### Removed

- About 100 unused CSS rules from earlier versions of the site (old project grid, SVG robot, filters, orbits).

### Fixed

- The header blur works again in Chrome (an old minifier step had dropped the standard `backdrop-filter`).

## [1.1.0] - 2026-11-05

### Changed

- Reorganized the code by responsibility: routes, content, UI components and logic are now separate.
- Split large files into small components and functions, each with a short comment.
- Split the stylesheet into ordered files. No visual change.

### Added

- Unit tests (Vitest) and browser tests (Playwright).
- Prettier, commit message checks, CI and Dependabot.

## [1.0.0] - 2026-11-01

### Added

- A business site and a separate technical page for recruiters.
- Rose palette with a day/night switch.
- Headline written letter by letter with React Bits TechText.
