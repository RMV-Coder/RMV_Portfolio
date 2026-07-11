"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

interface StackRevealProps {
  children: React.ReactNode
  /** Stacking order — later sections get a higher z-index and cover earlier ones. */
  index: number
  /** Background tone of the section's parallax panel. */
  tone?: "base" | "muted"
}

/**
 * Treats each section as a fixed-ish stacking layer. Sections cover the ones
 * before them purely by z-index (no shrink, no fade). As a section scrolls up
 * out of the top it *clamps*: once ~25% is clipped it lags the scroll hard, so
 * it takes extra scroll to fully leave while the next section slides over it.
 * The background panel lags markedly more than the content for depth. Reduced
 * motion keeps the static overlap only.
 */
export function StackReveal({ children, index, tone = "base" }: StackRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    // 0 = section top at viewport top; 1 = section fully above the viewport.
    offset: ["start start", "end start"],
  })

  // Positional clamp only. Flat until 25% clipped, then the layer lags the
  // scroll (positive y counteracts the upward scroll → "needs more scroll").
  // The background lags far more than the content.
  const contentY = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, shouldReduceMotion ? 0 : 130])
  const bgY = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, shouldReduceMotion ? 0 : 320])

  return (
    <div ref={ref} className="relative isolate" style={{ zIndex: index }}>
      {/* Parallax background panel — opaque so it covers the previous section,
          with a faint dot pattern so its slower motion is perceptible. */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 -top-[14%] -z-10 h-[128%] overflow-hidden rounded-t-[2.25rem] shadow-[0_-26px_55px_-22px_rgba(0,0,0,0.55)]"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-background" />
        {tone === "muted" && <div className="absolute inset-0 bg-muted/40" />}
        <div className="stack-reveal-pattern absolute inset-0" />
      </motion.div>

      {/* Content layer — the section itself (now transparent). */}
      <motion.div style={{ y: contentY }}>{children}</motion.div>
    </div>
  )
}

export default StackReveal
