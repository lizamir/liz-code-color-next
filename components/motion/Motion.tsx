"use client";

import { useEffect } from "react";
import { blurLeads } from "@/lib/effects/blurLeads";
import { clickSparks } from "@/lib/effects/clickSparks";
import { countUp } from "@/lib/effects/countUp";
import { magnetButtons } from "@/lib/effects/magnetButtons";
import { navPill } from "@/lib/effects/navPill";
import { ribbonLean } from "@/lib/effects/ribbonLean";
import { spotlightCards } from "@/lib/effects/spotlightCards";
import { tiltCards } from "@/lib/effects/tiltCards";

/**
 * Attaches the page's micro-interactions, in the spirit of React Bits (no markup changes, no extra package).
 * Everything is decorative, only runs with a fine pointer where it needs one, and stops with reduced motion.
 * Each effect lives in its own file in lib/effects and returns its cleanup.
 */
export default function Motion() {
  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const pointerEffects = fine ? [tiltCards(), magnetButtons(), spotlightCards()] : [];
    const cleanups = [...pointerEffects, clickSparks(), ribbonLean(), blurLeads(), navPill(), countUp()];
    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
