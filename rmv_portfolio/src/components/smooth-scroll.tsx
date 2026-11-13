"use client"

import * as React from "react"
import Lenis from "lenis"
import { setLenis } from "@/lib/smooth-scroll"

/**
 * Installs Lenis smooth scrolling for the whole page and exposes the instance
 * via the smooth-scroll singleton. Renders nothing. Skipped entirely for
 * reduced-motion users so native scrolling is preserved, and torn down or
 * started again if that preference changes while the page is open.
 */
export function SmoothScroll() {
  React.useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let stop: (() => void) | null = null

    const start = () => {
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
    }

    const evaluate = () => {
      if (reducedMotion.matches) {
        stop?.()
        stop = null
      } else if (!stop) {
        stop = start()
      }
    }
    evaluate()

    reducedMotion.addEventListener("change", evaluate)
    return () => {
      reducedMotion.removeEventListener("change", evaluate)
      stop?.()
      stop = null
    }
  }, [])

  return null
}

export default SmoothScroll
