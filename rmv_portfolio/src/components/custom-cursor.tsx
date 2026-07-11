"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Code2, User, Zap, BookOpen, FolderGit2, Mail, type LucideIcon } from "lucide-react"

type SectionId = "home" | "about" | "skills" | "research" | "projects" | "contact"

type CursorMode = "default" | "link" | "text"

interface SectionIdentity {
  color: string
  Icon: LucideIcon
  label: string
}

// Per-section cursor identity. Colors are picked to read well in light AND dark.
const SECTION_IDENTITY: Record<SectionId, SectionIdentity> = {
  home: { color: "#3b82f6", Icon: Code2, label: "home" },
  about: { color: "#f59e0b", Icon: User, label: "about" },
  skills: { color: "#06b6d4", Icon: Zap, label: "skills" },
  research: { color: "#22c55e", Icon: BookOpen, label: "research" },
  projects: { color: "#8b5cf6", Icon: FolderGit2, label: "projects" },
  contact: { color: "#f43f5e", Icon: Mail, label: "contact" },
}

const KNOWN_SECTIONS = new Set(Object.keys(SECTION_IDENTITY))

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor="link"]'
const TEXT_SELECTOR = "input, textarea"

export function CustomCursor() {
  const [enabled, setEnabled] = React.useState(false)
  const [section, setSection] = React.useState<SectionId>("home")
  const [mode, setMode] = React.useState<CursorMode>("default")

  // Dot tracks 1:1; ring lags behind via a spring.
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringXRaw = useMotionValue(-100)
  const ringYRaw = useMotionValue(-100)
  const ringX = useSpring(ringXRaw, { stiffness: 350, damping: 30, mass: 0.5 })
  const ringY = useSpring(ringYRaw, { stiffness: 350, damping: 30, mass: 0.5 })

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

  // Interactive-element awareness.
  React.useEffect(() => {
    if (!enabled) return
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null
      if (!target || !target.closest) return
      if (target.closest(TEXT_SELECTOR)) setMode("text")
      else if (target.closest(INTERACTIVE_SELECTOR)) setMode("link")
      else setMode("default")
    }
    const onOut = (e: PointerEvent) => {
      const related = e.relatedTarget as Element | null
      if (!related || !related.closest || !related.closest(INTERACTIVE_SELECTOR)) {
        setMode("default")
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

  const identity = SECTION_IDENTITY[section]
  const Icon = identity.Icon
  const isLink = mode === "link"
  const isText = mode === "text"

  return (
    <>
      {/* Trailing ring (spring-followed) */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: identity.color, color: identity.color }}
          animate={{
            width: isText ? 4 : isLink ? 56 : 40,
            height: isText ? 34 : isLink ? 56 : 40,
            borderRadius: isText ? 4 : 999,
            backgroundColor: isLink ? `${identity.color}1f` : "rgba(0,0,0,0)",
            opacity: isText ? 0.9 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        >
          <motion.span
            key={section}
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{
              scale: isText ? 0 : isLink ? 0 : 1,
              rotate: 0,
              opacity: isText || isLink ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 24 }}
            className="flex items-center justify-center"
          >
            <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
          </motion.span>
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
          style={{ backgroundColor: identity.color }}
          animate={{
            width: isLink ? 0 : 6,
            height: isLink ? 0 : 6,
            opacity: isLink ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </motion.div>
    </>
  )
}

export default CustomCursor
