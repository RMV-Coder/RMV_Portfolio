"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

interface MagneticProps {
  children: React.ReactNode
  className?: string
  /** Fraction of the pointer offset the element follows (0.2–0.5 feels good). */
  strength?: number
  /** Max px the element can be pulled from its rest position. */
  cap?: number
}

/**
 * Pulls its child toward the pointer while hovered, then springs back on leave —
 * the "magnetic button" interaction. No-op under reduced motion / coarse
 * pointers (the pull only fires from real pointer movement over the element).
 */
export function Magnetic({ children, className, strength = 0.35, cap = 16 }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 160, damping: 15, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 160, damping: 15, mass: 0.3 })

  const handleMove = (e: React.PointerEvent) => {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    const clamp = (v: number) => Math.max(-cap, Math.min(cap, v * strength))
    x.set(clamp(dx))
    y.set(clamp(dy))
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
