"use client"

import * as React from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion"

type ParallaxProps = {
  children: React.ReactNode
  className?: string
  /**
   * Parallax depth. Positive values make the element translate up slower than
   * the scroll (it drifts upward as you scroll past), negative reverses the
   * direction. A larger magnitude = a deeper / more pronounced effect.
   * @default 0.3
   */
  speed?: number
  /** Optional element tag override (defaults to a div). */
  as?: keyof typeof motion
} & Omit<HTMLMotionProps<"div">, "children" | "style" | "ref">

/**
 * Scroll-linked parallax wrapper. Elements are ALWAYS fully visible (opacity 1)
 * — this is a depth/layering effect, not a fade-in reveal. Respects the user's
 * reduced-motion preference by rendering a plain, untransformed element.
 */
export function Parallax({
  children,
  className,
  speed = 0.3,
  as = "div",
  ...rest
}: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const distance = speed * 100
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion[as] as any

  if (shouldReduceMotion) {
    // No transform for reduced-motion users — content stays put, fully visible.
    return (
      <MotionTag ref={ref} className={className} {...rest}>
        {children}
      </MotionTag>
    )
  }

  return (
    <MotionTag ref={ref} className={className} style={{ y }} {...rest}>
      {children}
    </MotionTag>
  )
}

export default Parallax
