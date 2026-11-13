"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import type { BenchItem } from "@/components/forge/office-scene"
import { useSceneReady } from "@/components/forge/use-scene-ready"
import { scrollTo } from "@/lib/smooth-scroll"

// The shelf is WebGL; the bar of names below it is the same list in plain HTML.
const OfficeScene = dynamic(() => import("@/components/forge/office-scene"), { ssr: false })

/** Clears both sticky bars — the header and the rail — when jumping to a tool. */
const STICKY_OFFSET = 112

function jumpTo(slug: string) {
  const target = document.getElementById(slug)
  if (!target) return
  scrollTo(target.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET)
  window.history.replaceState(null, "", `#${slug}`)
}

/**
 * The top of the tools page: every tool as a 3D object on a shelf, and under
 * it a sticky bar of their names. Both do the same job — pick a tool, jump to
 * it — and they light each other up, so the shelf is never the only way in.
 *
 * The shelf is left out altogether for a visitor who gets no 3D scene (no
 * WebGL, or a browser asked to save data): an empty band would say nothing.
 */
export function ToolShelf({ items }: { items: (BenchItem & { gist?: string })[] }) {
  const [active, setActive] = React.useState<string | null>(null)
  const [fromScene, setFromScene] = React.useState<string | null>(null)
  const [fromRail, setFromRail] = React.useState<string | null>(null)
  const readiness = useSceneReady()
  const [failed, setFailed] = React.useState(false)
  const sceneOff = readiness === "off" || failed

  React.useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.slug))
      .filter((element): element is HTMLElement => element !== null)

    // A tool is "current" while it crosses a band just below the sticky bars.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  return (
    <>
      {!sceneOff && (
        <div className="relative h-[250px] sm:h-[300px]">
          {readiness === "ready" && (
            <>
              <OfficeScene
                arrangement="shelf"
                items={items}
                activeSlug={fromRail}
                onHover={setFromScene}
                onSelect={jumpTo}
                onUnavailable={() => setFailed(true)}
                // The fade is on the canvas alone, so a name tag near the top edge stays fully legible.
                className="absolute inset-0 [&>canvas]:[mask-image:linear-gradient(to_bottom,transparent,#000_16%,#000_88%,transparent)]"
              />
              {/* Decorative for screen readers: the bar of names below is the real control. */}
              <p
                aria-hidden="true"
                className="fig-label pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="pointer-coarse:hidden">point at one, then pick it up</span>
                <span className="hidden pointer-coarse:inline">tap one to see what it is</span>
              </p>
            </>
          )}
        </div>
      )}

      <nav
        aria-label="Tools on this page"
        className="sticky top-16 z-30 border-y border-border bg-background/85 backdrop-blur-md"
      >
        <ul className="mx-auto flex max-w-7xl gap-1.5 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] sm:px-6 lg:px-8">
          {items.map((item) => {
            const current = active === item.slug
            const lit = fromScene === item.slug || fromRail === item.slug
            return (
              <li key={item.slug} className="shrink-0">
                <a
                  href={`#${item.slug}`}
                  aria-current={current ? "true" : undefined}
                  onMouseEnter={() => setFromRail(item.slug)}
                  onMouseLeave={() => setFromRail(null)}
                  onFocus={() => setFromRail(item.slug)}
                  onBlur={() => setFromRail(null)}
                  onClick={(event) => {
                    event.preventDefault()
                    jumpTo(item.slug)
                  }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    current
                      ? "border-foreground/30 bg-foreground/10 text-foreground"
                      : lit
                        ? "border-primary/60 text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: item.accent }} aria-hidden="true" />
                  {item.name}
                  {/* What the thing is, for anyone to whom the name alone says nothing. */}
                  {item.gist && <span className="text-xs font-normal text-muted-foreground">{item.gist}</span>}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
