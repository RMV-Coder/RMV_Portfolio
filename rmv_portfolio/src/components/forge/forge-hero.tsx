"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowDown, ArrowRight } from "lucide-react"
import type { BenchItem } from "@/components/forge/office-scene"
import { useSceneReady } from "@/components/forge/use-scene-ready"
import { scrollTo } from "@/lib/smooth-scroll"

// WebGL has no server render; the headline does not wait for it.
const OfficeScene = dynamic(() => import("@/components/forge/office-scene"), { ssr: false })

interface ForgeHeroProps {
  /** Everything in the study: the platform and the tools. `gist` says what each one is, in a word or two. */
  items: (BenchItem & { href: string; gist: string })[]
  facts: string[]
}

/**
 * The opening screen. The headline, the calls to action and the list of
 * products are plain HTML, readable at once and without JavaScript; the 3D
 * study arrives beside them (above them on a phone) once the page has loaded.
 * The chips and the 3D objects are two views of the same list: pointing at
 * either one lights up the other.
 *
 * `--band` is the height kept clear above the text for the scene on screens
 * too narrow to put it beside the text. It collapses to header clearance when
 * there is no scene to show (no WebGL, Save-Data) or no room for one (a
 * phone held sideways).
 */
export function ForgeHero({ items, facts }: ForgeHeroProps) {
  const router = useRouter()
  const readiness = useSceneReady()
  const [failed, setFailed] = React.useState(false)
  const sceneOff = readiness === "off" || failed
  const [fromScene, setFromScene] = React.useState<string | null>(null)
  const [fromChips, setFromChips] = React.useState<string | null>(null)
  const hrefBySlug = React.useMemo(() => new Map(items.map((item) => [item.slug, item.href])), [items])

  const open = React.useCallback(
    (slug: string) => {
      const href = hrefBySlug.get(slug)
      if (!href) return
      if (href.startsWith("#")) scrollTo(href)
      else router.push(href)
    },
    [hrefBySlug, router]
  )

  return (
    <section
      id="home"
      className={`relative isolate flex min-h-[100svh] items-center overflow-hidden ${
        sceneOff ? "[--band:7rem]" : "[--band:38svh] sm:[--band:46svh] [@media(max-height:480px)]:[--band:6.5rem]"
      }`}
    >
      {readiness === "ready" && !failed && (
        <>
          <OfficeScene
            items={items}
            activeSlug={fromChips}
            onHover={setFromScene}
            onSelect={open}
            onUnavailable={() => setFailed(true)}
            className="absolute inset-0 -z-10"
          />
          {/* Says the picture can be touched. Decorative for screen readers: the chips below do the same job. */}
          <p
            aria-hidden="true"
            className="fig-label pointer-events-none absolute right-4 top-[calc(var(--band)-30px)] lg:right-8 lg:top-24 max-lg:[@media(max-height:480px)]:hidden"
          >
            fig. 01 — the study
            <span className="pointer-coarse:hidden"> · point at anything</span>
            <span className="hidden pointer-coarse:inline"> · tap anything</span>
          </p>
        </>
      )}
      {/*
        Clean ground for the text: under the scene's band on a phone, left of
        the room on a desktop. On a phone the fade runs over the last 48px of
        the band, which is where the scene stops (FADE_STRIP in office-scene.tsx).
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_calc(var(--band)-48px),var(--background)_calc(var(--band)-4px))] lg:bg-[linear-gradient(to_right,var(--background)_30%,transparent_50%)]"
      />

      {/* pointer-events-none lets the mouse reach the 3D objects through the gaps. */}
      <div className="pointer-events-none mx-auto w-full max-w-7xl px-4 pb-20 pt-[var(--band)] sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        {/* data-bench-clear: on narrow screens the 3D scene fits itself above this block. */}
        <div
          data-bench-clear
          className="max-w-2xl lg:max-w-[29rem] xl:max-w-2xl [&_a]:pointer-events-auto [&_button]:pointer-events-auto"
        >
          <h1>
            <span
              className="forge-rise block font-mono text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              Raymond Valdepeñas
              {/* One line where there is room; the role drops to its own line on a phone. */}
              <span aria-hidden="true" className="max-sm:hidden"> · </span>
              <span className="sr-only">, </span>
              <span className="max-sm:block">software developer</span>
            </span>
            <span
              className="forge-rise mt-3 block font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl xl:text-8xl"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              I build things that <span className="text-primary">ship.</span>
            </span>
          </h1>
          <p
            className="forge-rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Platforms built to take bookings and payments. Apps for your desktop and phone. AI that
            explains its answers. I design, build and launch whole products, and eight of them are
            here, each with a demo you can click through.
          </p>

          <div className="forge-rise mt-8 flex flex-wrap gap-3" style={{ "--i": 3 } as React.CSSProperties}>
            <Link
              href="/tools"
              data-cursor="Try"
              className="ember-pulse inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Try the tools
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                scrollTo("#contact")
              }}
              data-cursor="Say hi"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-6 py-3.5 font-semibold text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Work with me
            </a>
          </div>

          <div className="forge-rise mt-8" style={{ "--i": 4 } as React.CSSProperties}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">In the study</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => {
                const lit = fromScene === item.slug || fromChips === item.slug
                return (
                  <li key={item.slug}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setFromChips(item.slug)}
                      onMouseLeave={() => setFromChips(null)}
                      onFocus={() => setFromChips(item.slug)}
                      onBlur={() => setFromChips(null)}
                      onClick={(event) => {
                        if (item.href.startsWith("#")) {
                          event.preventDefault()
                          scrollTo(item.href)
                        }
                      }}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                        lit
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full" style={{ background: item.accent }} aria-hidden="true" />
                      <span className="text-foreground">{item.name}</span>
                      {/* A product name means nothing on its own; this says what the thing is. */}
                      <span className="text-xs">{item.gist}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <ul
          className="forge-rise mt-8 flex max-w-2xl flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5 font-mono text-xs text-muted-foreground sm:text-sm lg:max-w-[29rem] xl:max-w-2xl"
          style={{ "--i": 5 } as React.CSSProperties}
        >
          {facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-brass" aria-hidden="true" />
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => scrollTo("#work")}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground lg:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
      </button>
    </section>
  )
}
