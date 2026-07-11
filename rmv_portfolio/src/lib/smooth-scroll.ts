import type Lenis from "lenis"

// Module singleton so any component can drive the shared Lenis instance without
// prop-drilling or context. Set by <SmoothScroll />; null when smooth scrolling
// is disabled (reduced motion / not yet mounted).
let lenis: Lenis | null = null

// Fixed nav is h-16 (64px); offset anchor targets so headings aren't hidden.
const NAV_OFFSET = -72

export function setLenis(instance: Lenis | null) {
  lenis = instance
}

/**
 * Smoothly scroll to a section selector, element, or absolute Y. Uses the
 * shared Lenis instance when available and falls back to native smooth scroll
 * (reduced-motion users, or before Lenis mounts).
 */
export function scrollTo(target: string | HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === "number" ? 0 : NAV_OFFSET })
    return
  }

  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" })
  } else if (typeof target === "string") {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
  } else {
    target.scrollIntoView({ behavior: "smooth" })
  }
}
