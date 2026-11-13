"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import type { ToolSlug } from "@/data/tools"

/**
 * Each demo's caption, as passed to DemoShell's `hint`. The placeholder sets the
 * same text invisibly so it wraps to the same number of lines at every width.
 * Keep these in step with the `hint` in each demo file.
 */
const HINTS: Record<ToolSlug, string> = {
  localpass: "Try it: unlock the vault, then reveal a password",
  veltriva: "Press Tidy up, then search memory for film",
  emmaus: "Tap the highlighted question, then a verse reference.",
  syntaxlab: "Press Analyze, then tap or point at any word.",
  "calculus-solver": "Press Solve to see every step.",
  veyra: "Try it: make the mistake, then undo it",
  omnigraph: "Trace a checkout, then tap any circle to follow it",
  aetherform: "Press Start set, then try Common mistake.",
}

/** Holds the demo's exact footprint, caption included, so nothing jumps when it loads. */
function DemoPlaceholder({ slug }: { slug: ToolSlug }) {
  return (
    <div>
      <div className="flex h-[440px] items-center justify-center rounded-xl border border-border bg-card sm:h-[460px]">
        <span className="font-mono text-xs text-muted-foreground motion-safe:animate-pulse">Loading the demo…</span>
      </div>
      {/* Same markup as DemoShell's figcaption, hidden: it only reserves the caption's height. */}
      <div className="invisible mt-3 flex items-center gap-2 font-mono text-xs" aria-hidden="true">
        <span className="h-px w-6 bg-current opacity-50" />
        {HINTS[slug]}
      </div>
    </div>
  )
}

const load = (slug: ToolSlug, importer: () => Promise<{ default: React.ComponentType }>) =>
  dynamic(importer, { ssr: false, loading: () => <DemoPlaceholder slug={slug} /> })

// Each demo is its own chunk, fetched only when its exhibit comes near.
const demos: Record<ToolSlug, React.ComponentType> = {
  localpass: load("localpass", () => import("@/components/tools/demos/localpass-demo")),
  veltriva: load("veltriva", () => import("@/components/tools/demos/veltriva-demo")),
  emmaus: load("emmaus", () => import("@/components/tools/demos/emmaus-demo")),
  syntaxlab: load("syntaxlab", () => import("@/components/tools/demos/syntaxlab-demo")),
  "calculus-solver": load("calculus-solver", () => import("@/components/tools/demos/calculus-demo")),
  veyra: load("veyra", () => import("@/components/tools/demos/veyra-demo")),
  omnigraph: load("omnigraph", () => import("@/components/tools/demos/omnigraph-demo")),
  aetherform: load("aetherform", () => import("@/components/tools/demos/aetherform-demo")),
}

/**
 * Mounts a tool's interactive demo once it is about to scroll into view, so a
 * page of seven working miniatures costs a first-time visitor only the one
 * they are looking at.
 */
export function ToolDemo({ slug }: { slug: ToolSlug }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [near, setNear] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true)
          observer.disconnect()
        }
      },
      { rootMargin: "500px 0px" }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const Demo = demos[slug]
  return <div ref={ref}>{near ? <Demo /> : <DemoPlaceholder slug={slug} />}</div>
}
