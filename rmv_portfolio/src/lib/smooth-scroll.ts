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
 * Scroll to a section selector, element, or absolute Y. Uses the shared Lenis
 * instance when available. Otherwise it falls back to native scrolling: an
 * instant jump for reduced-motion users (who never get Lenis), and native
 * smooth scrolling for everyone else before Lenis mounts.
 */
export function scrollTo(target: string | HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === "number" ? 0 : NAV_OFFSET })
    return
  }

  const behavior: ScrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "instant"
    : "smooth"

  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior })
    return
  }

  // Same offset as the Lenis path, so the target is not hidden under the fixed header.
  const element = typeof target === "string" ? document.querySelector(target) : target
  if (!element) return
  window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY + NAV_OFFSET, behavior })
}
