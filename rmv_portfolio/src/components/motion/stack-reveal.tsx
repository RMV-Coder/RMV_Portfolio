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

/** How far the next section overlaps the previous one once fully covering. */
const OVERLAP = "8vh"

/**
 * Each section is a stacking layer that covers the one before it (z-index) —
 * but only late: at rest the section sits translated down by exactly the
 * layout overlap, so none of the previous section's content is hidden until
 * it has been seen. Once the previous section's bottom reaches roughly the
 * middle of the viewport, the incoming section slides up over it. On exit the
 * section clamps (flat until ~25% clipped, then lags the scroll) and its
 * background panel lags far more than its content for depth.
 * Reduced motion renders plain flow: no overlap, no transforms.
 */
export function StackReveal({ children, index, tone = "base" }: StackRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Exit window: section top pinned at viewport top → section fully above.
  const { scrollYProgress: exitProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Entry window: begins when the section's (untranslated) top crosses ~45%
  // of the viewport — i.e. the previous section's visible bottom is at about
  // mid-screen — and completes by ~15%.
  const { scrollYProgress: entryProgress } = useScroll({
    target: ref,
    offset: ["start 0.45", "start 0.15"],
  })

  const contentY = useTransform(exitProgress, [0, 0.25, 1], [0, 0, 80])
  const bgY = useTransform(exitProgress, [0, 0.25, 1], [0, 0, 220])
  // Starts a full overlap lower (nothing covered), slides up to cover.
  const entryY = useTransform(entryProgress, [0, 1], [OVERLAP, "0vh"])

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className="relative isolate" style={{ zIndex: index }}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
          {tone === "muted" && <div className="absolute inset-0 bg-muted/60" />}
        </div>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`relative isolate ${index > 0 ? "-mt-[8vh]" : ""}`}
      style={{ zIndex: index }}
    >
      {/* Entry slide — carries the panel and content together. */}
      <motion.div className="relative" style={{ y: entryY }}>
        {/* Opaque background panel, flush with the content top; the oversized
            fill inside translates for the slower-than-content parallax
            without exposing a gap. */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-t-[2rem] border-t border-border/70 shadow-[0_-24px_50px_-24px_rgba(0,0,0,0.5)]">
          <motion.div className="absolute -inset-y-[40%] inset-x-0" style={{ y: bgY }}>
            <div className="absolute inset-0 bg-background" />
            {tone === "muted" && <div className="absolute inset-0 bg-muted/60" />}
            <div className="stack-reveal-pattern absolute inset-0" />
          </motion.div>
        </div>

        {/* Content layer — the section itself (transparent background). */}
        <motion.div style={{ y: contentY }}>{children}</motion.div>
      </motion.div>
    </div>
  )
}

export default StackReveal
