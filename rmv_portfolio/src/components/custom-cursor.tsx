"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

type SectionId = "home" | "about" | "skills" | "research" | "projects" | "contact"
type CursorMode = "default" | "link" | "label" | "text"

// Per-section accent colour — the cursor's only identity signal now (the old
// embedded icon was dropped as clutter). Tuned to read on light and dark.
const SECTION_COLOR: Record<SectionId, string> = {
  home: "#3b82f6",
  about: "#f59e0b",
  skills: "#06b6d4",
  research: "#22c55e",
  projects: "#8b5cf6",
  contact: "#f43f5e",
}

const KNOWN_SECTIONS = new Set(Object.keys(SECTION_COLOR))

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor]'
const TEXT_SELECTOR = "input, textarea"

export function CustomCursor() {
  const [enabled, setEnabled] = React.useState(false)
  const [section, setSection] = React.useState<SectionId>("home")
  const [mode, setMode] = React.useState<CursorMode>("default")
  const [label, setLabel] = React.useState("")

  // Dot tracks 1:1; ring lags behind via a spring.
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringXRaw = useMotionValue(-100)
  const ringYRaw = useMotionValue(-100)
  const ringX = useSpring(ringXRaw, { stiffness: 380, damping: 30, mass: 0.4 })
  const ringY = useSpring(ringYRaw, { stiffness: 380, damping: 30, mass: 0.4 })

  // Decide whether the custom cursor should run at all.
  React.useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")

    const evaluate = () => setEnabled(finePointer.matches && !reduced.matches)
    evaluate()

    finePointer.addEventListener("change", evaluate)
    reduced.addEventListener("change", evaluate)
    return () => {
      finePointer.removeEventListener("change", evaluate)
      reduced.removeEventListener("change", evaluate)
    }
  }, [])

  // Toggle the html class that hides the native cursor — only while active.
  React.useEffect(() => {
    const root = document.documentElement
    if (enabled) {
      root.classList.add("custom-cursor")
      return () => root.classList.remove("custom-cursor")
    }
    root.classList.remove("custom-cursor")
  }, [enabled])

  // Pointer tracking + CSS variable publishing (rAF-throttled).
  React.useEffect(() => {
    if (!enabled) return
    const root = document.documentElement
    const latest = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let dirty = false
    let frame = 0

    const publish = () => {
      if (dirty) {
        root.style.setProperty("--cursor-x", `${latest.x}px`)
        root.style.setProperty("--cursor-y", `${latest.y}px`)
        dirty = false
      }
      frame = requestAnimationFrame(publish)
    }
    frame = requestAnimationFrame(publish)

    const onMove = (e: PointerEvent) => {
      latest.x = e.clientX
      latest.y = e.clientY
      dirty = true
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      ringXRaw.set(e.clientX)
      ringYRaw.set(e.clientY)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(frame)
    }
  }, [enabled, dotX, dotY, ringXRaw, ringYRaw])

  // Interactive-element awareness: text inputs → I-beam, elements with a
  // data-cursor="Label" → morph to that label, other interactives → grow ring.
  React.useEffect(() => {
    if (!enabled) return
    const resolve = (target: Element | null) => {
      if (!target || !target.closest) return { mode: "default" as CursorMode, label: "" }
      if (target.closest(TEXT_SELECTOR)) return { mode: "text" as CursorMode, label: "" }
      const labelled = target.closest("[data-cursor]") as HTMLElement | null
      if (labelled) return { mode: "label" as CursorMode, label: labelled.dataset.cursor || "" }
      if (target.closest(INTERACTIVE_SELECTOR)) return { mode: "link" as CursorMode, label: "" }
      return { mode: "default" as CursorMode, label: "" }
    }
    const onOver = (e: PointerEvent) => {
      const next = resolve(e.target as Element | null)
      setMode(next.mode)
      setLabel(next.label)
    }
    const onOut = (e: PointerEvent) => {
      const related = e.relatedTarget as Element | null
      if (!related || !related.closest || !related.closest(INTERACTIVE_SELECTOR)) {
        setMode("default")
        setLabel("")
      }
    }
    window.addEventListener("pointerover", onOver, { passive: true })
    window.addEventListener("pointerout", onOut, { passive: true })
    return () => {
      window.removeEventListener("pointerover", onOver)
      window.removeEventListener("pointerout", onOut)
    }
  }, [enabled])

  // Active-section tracking via a single IntersectionObserver.
  React.useEffect(() => {
    if (!enabled) return
    const root = document.documentElement
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("section[id]")).filter(
      (el) => KNOWN_SECTIONS.has(el.id)
    )
    if (nodes.length === 0) return

    const ratios = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        let best: SectionId | null = null
        let bestRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id as SectionId
          }
        }
        if (best) {
          setSection(best)
          root.setAttribute("data-active-section", best)
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [enabled])

  if (!enabled) return null

  const color = SECTION_COLOR[section]
  const isLink = mode === "link"
  const isLabel = mode === "label"
  const isText = mode === "text"
  const hideDot = isLink || isLabel

  return (
    <>
      {/* Trailing ring (spring-followed) */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center whitespace-nowrap font-medium"
          style={{ borderColor: color, color: isLabel ? "#fff" : color }}
          animate={{
            width: isText ? 3 : isLabel ? "auto" : isLink ? 52 : 34,
            height: isText ? 26 : isLabel ? 34 : isLink ? 52 : 34,
            paddingLeft: isLabel ? 16 : 0,
            paddingRight: isLabel ? 16 : 0,
            borderRadius: isText ? 2 : 999,
            borderWidth: isLabel || isText ? 0 : 1.5,
            backgroundColor: isLabel
              ? color
              : isLink
                ? `${color}1f`
                : isText
                  ? color
                  : "rgba(0,0,0,0)",
          }}
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
        >
          <AnimatePresence mode="popLayout">
            {isLabel && (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.14 }}
                className="text-xs tracking-wide"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Dot (1:1) */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            width: hideDot ? 0 : 6,
            height: hideDot ? 0 : 6,
            opacity: hideDot ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </motion.div>
    </>
  )
}

export default CustomCursor
