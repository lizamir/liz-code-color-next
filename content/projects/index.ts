// All projects, in the order they appear on the site. Each one lives in its own file.

import type { Category, Project } from "./types";
import { ganli } from "./ganli";
import { telegramBot } from "./telegram-bot";
import { communityOs } from "./community-os";
import { glowStudio } from "./glow-studio";
import { signatureEngine } from "./signature-engine";
import { contentDesign } from "./content-design";

export type { Category, Project };

export const CATEGORIES: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "הכל" },
  { id: "web", label: "אתרים ומערכות" },
  { id: "brand", label: "מיתוג ועיצוב" },
  { id: "ai", label: "AI ואוטומציה" },
];

export const PROJECTS: Project[] = [ganli, telegramBot, communityOs, glowStudio, signatureEngine, contentDesign];
