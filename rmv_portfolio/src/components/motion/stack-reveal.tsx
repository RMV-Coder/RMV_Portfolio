"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

interface StackRevealProps {
  children: React.ReactNode
  /** Stacking order. index 0 = first section (no overlap); higher = on top. */
  index: number
}

/**
 * Wraps a full section so it overlaps and covers the section before it (rounded
 * top edge + upward shadow + negative margin), and — as it scrolls up out of
 * view — recedes: it lags the scroll, scales down from its top edge, and a
 * black scrim rises over it so it appears to sink into shadow behind the section
 * now on screen. Content stays fully scrollable (no pinning). Reduced motion
 * keeps only the static overlap.
 */
export function StackReveal({ children, index }: StackRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    // The whole time the section is scrolling up out of the top of the viewport.
    offset: ["start start", "end start"],
  })

  // Lag grows non-linearly → "slows down more" the further out it goes.
  const y = useTransform(scrollYProgress, [0, 0.6, 1], [0, 26, 104])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const scrimOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [0, 0.45, 0.6])

  const isStacked = index > 0
  const coverClass = isStacked
    ? "-mt-[7vh] rounded-t-[2.25rem] overflow-hidden bg-background shadow-[0_-26px_55px_-22px_rgba(0,0,0,0.55)]"
    : ""

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={`relative ${coverClass}`} style={{ zIndex: index + 1 }}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${coverClass}`}
      style={{ zIndex: index + 1, y, scale, transformOrigin: "50% 0%" }}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: scrimOpacity }}
      />
    </motion.div>
  )
}

export default StackReveal
