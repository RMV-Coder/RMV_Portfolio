"use client"

import * as React from "react"
import Lenis from "lenis"
import { useReducedMotion } from "framer-motion"
import { setLenis } from "@/lib/smooth-scroll"

/**
 * Installs Lenis smooth scrolling for the whole page and exposes the instance
 * via the smooth-scroll singleton. Renders nothing. Skipped entirely for
 * reduced-motion users so native scrolling is preserved.
 */
export function SmoothScroll() {
  const shouldReduceMotion = useReducedMotion()

  React.useEffect(() => {
    if (shouldReduceMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      // easeOutExpo — quick to react, gentle to settle ("buttery, not seasick").
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })
    setLenis(lenis)

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      setLenis(null)
    }
  }, [shouldReduceMotion])

  return null
}

export default SmoothScroll
