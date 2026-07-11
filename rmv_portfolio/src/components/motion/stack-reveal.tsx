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
 * Each section is a fixed-ish stacking layer. Sections cover the ones before
 * them by z-index + a small negative-margin overlap (no shrink, no fade). As a
 * section scrolls up out of the top it clamps: flat until ~25% is clipped, then
 * it lags the scroll so it needs more scroll to leave while the next section
 * slides over it. The background panel lags far more than the content for depth.
 * The panel is flush with the content top (no empty lead-in) and its fill is
 * oversized so the lag never reveals a gap. Reduced motion keeps the static
 * overlap only.
 */
export function StackReveal({ children, index, tone = "base" }: StackRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, shouldReduceMotion ? 0 : 80])
  const bgY = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, shouldReduceMotion ? 0 : 220])

  return (
    <div
      ref={ref}
      className={`relative isolate ${index > 0 ? "-mt-[8vh]" : ""}`}
      style={{ zIndex: index }}
    >
      {/* Opaque background panel — clipped to the section box (rounded top flush
          with the content, no empty band); the oversized fill inside translates
          for the slower-than-content parallax without exposing a gap. */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-t-[2rem] shadow-[0_-24px_50px_-24px_rgba(0,0,0,0.5)]">
        <motion.div className="absolute -inset-y-[40%] inset-x-0" style={{ y: bgY }}>
          <div className="absolute inset-0 bg-background" />
          {tone === "muted" && <div className="absolute inset-0 bg-muted/40" />}
          <div className="stack-reveal-pattern absolute inset-0" />
        </motion.div>
      </div>

      {/* Content layer — the section itself (transparent background). */}
      <motion.div style={{ y: contentY }}>{children}</motion.div>
    </div>
  )
}

export default StackReveal
