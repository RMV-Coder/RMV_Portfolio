"use client"

import * as React from "react"
import { createScope, createTimeline, onScroll, stagger, svg, utils } from "animejs"

const steps = [
  {
    title: "It starts with a sketch",
    detail:
      "You tell me what's slowing your business down. A message, a call, a drawing on a napkin. No technical brief needed.",
  },
  {
    title: "I turn it into a plan",
    detail:
      "Before any code is written you get a clear picture, in plain language, of what will be built and what it will do for your customers.",
  },
  {
    title: "You watch it take shape",
    detail:
      "A working version goes online early. Click through it, show your team, and change your mind while that's still cheap.",
  },
  {
    title: "It ships, and I stay",
    detail:
      "Launch is the start. I keep it running, fix what real use uncovers, and build what you need next.",
  },
]

/** Seven bars for the little revenue chart, as heights in SVG units. */
const BARS = [30, 44, 38, 56, 48, 62, 74]

/**
 * How a project goes, told by scrolling.
 *
 * The section is four screens tall with one screen pinned inside it. As the
 * page scrolls, an anime.js timeline scrubs a single drawing through its
 * life: a rough sketch draws itself, firms up into a measured blueprint, fills
 * in as a working interface, and goes live. The four steps beside it light up
 * in time.
 *
 * The markup is the finished state in ordinary page flow, so it reads
 * correctly before the script arrives, with no script at all, and under
 * reduced motion: four steps as a list beside the finished drawing. Pinning
 * is switched on only once the timeline is actually wired up, and switched
 * back off if the pinned panel turns out taller than the screen below the
 * header (a pinned panel cannot be scrolled, so the overflow would be lost).
 */
export function ProcessSection() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const panelRef = React.useRef<HTMLDivElement>(null)
  // Where the section sat just before pinning made it taller, so the visitor's
  // place on the page can be kept (see the second layout effect).
  const pinFrom = React.useRef<{ rect: DOMRect; y: number } | null>(null)
  // Undoes the timeline's start state; set while the timeline is wired up.
  const rewind = React.useRef<(() => void) | null>(null)
  const [active, setActive] = React.useState(0)
  const [scrubbing, setScrubbing] = React.useState(false)

  // A layout effect, so pinning (and the scroll fix-up below) lands before the
  // first paint instead of shifting the page after it.
  React.useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const scope = createScope({ root: section }).add(() => {
      const sketch = svg.createDrawable('[data-layer="sketch"] path')
      const blueprint = svg.createDrawable('[data-layer="blueprint"] :is(rect, line)')
      const counterElement = section.querySelector("[data-counter]")
      const finalCount = counterElement?.textContent ?? ""
      const counter = { value: 0 }

      // Rewind the finished drawing to a blank sheet.
      utils.set('[data-layer="sketch"]', { opacity: 1 })
      utils.set('[data-layer="blueprint"]', { opacity: 1 })
      utils.set('[data-layer="labels"]', { opacity: 0 })
      utils.set(sketch, { draw: "0 0" })
      utils.set(blueprint, { draw: "0 0" })
      utils.set("[data-build]", { opacity: 0, translateY: 12 })
      utils.set("[data-bar]", { scaleY: 0 })
      utils.set("[data-ship]", { opacity: 0, translateY: -8 })
      utils.set("[data-toast]", { opacity: 0, translateX: 22 })
      if (counterElement) counterElement.textContent = "0"

      // One second of timeline per step; scroll position is the playhead.
      createTimeline({
        defaults: { ease: "linear" },
        autoplay: onScroll({ target: section, enter: "top top", leave: "bottom bottom", sync: 0.4 }),
        onUpdate: (timeline) => setActive(Math.min(steps.length - 1, Math.floor(timeline.progress * steps.length))),
      })
        // 1 — the sketch draws itself
        .add(sketch, { draw: "0 1", duration: 620, delay: stagger(45) }, 80)
        // 2 — it firms up into a blueprint
        .add('[data-layer="sketch"]', { opacity: 0.1, duration: 300 }, 1000)
        .add(blueprint, { draw: "0 1", duration: 600, delay: stagger(30) }, 1000)
        .add('[data-layer="labels"]', { opacity: 1, duration: 300 }, 1500)
        // 3 — the interface fills in
        .add('[data-layer="blueprint"], [data-layer="labels"]', { opacity: 0.16, duration: 300 }, 2000)
        .add("[data-build]", { opacity: 1, translateY: 0, duration: 420, delay: stagger(55) }, 2000)
        .add("[data-bar]", { scaleY: 1, duration: 420, delay: stagger(50) }, 2350)
        // 4 — it goes live
        .add("[data-ship]", { opacity: 1, translateY: 0, duration: 360, delay: stagger(110) }, 3000)
        .add(
          counter,
          {
            value: 128,
            duration: 600,
            onUpdate: () => {
              if (counterElement) counterElement.textContent = String(Math.round(counter.value))
            },
          },
          3100
        )
        .add("[data-toast]", { opacity: 1, translateX: 0, duration: 300 }, 3450)
        // A short hold, so the finished state gets a moment before the page moves on.
        .add("[data-toast]", { opacity: 1, duration: 250 }, 3750)

      // Reverting the scope restores the animated styles but not the counter's
      // text, so put the finished figure back (the drawing goes back to its
      // finished state when the panel turns out too tall to pin).
      return () => {
        if (counterElement) counterElement.textContent = finalCount
      }
    })
    pinFrom.current = { rect: section.getBoundingClientRect(), y: window.scrollY }
    rewind.current = () => scope.revert()
    setScrubbing(true)

    return () => {
      rewind.current = null
      pinFrom.current = null
      scope.revert()
      setScrubbing(false)
    }
  }, [])

  React.useLayoutEffect(() => {
    if (!scrubbing) return
    const section = sectionRef.current
    const panel = panelRef.current
    const from = pinFrom.current
    pinFrom.current = null
    if (!section || !panel) return

    // Too tall to pin: undo the timeline and go back to the plain list, which
    // scrolls like the rest of the page.
    if (panel.scrollHeight > panel.clientHeight) {
      rewind.current?.()
      rewind.current = null
      setScrubbing(false)
      return
    }

    // Pinning grew the section by a few screens. If it was entirely above the
    // viewport (for example after arriving at /#contact), everything the
    // visitor is looking at just moved down by that much, so follow it. An
    // absolute position is right whether or not the browser's own scroll
    // anchoring has already adjusted.
    if (from && from.rect.bottom <= 0) {
      window.scrollTo({ top: from.y + section.offsetHeight - from.rect.height, behavior: "instant" })
    }
  }, [scrubbing])

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-heading"
      className={`relative ${scrubbing ? "h-[340vh]" : ""}`}
    >
      <div
        ref={panelRef}
        className={`flex items-center ${
          // Pinned below the fixed h-16 header, so nothing slides under it.
          scrubbing ? "sticky top-16 h-[calc(100svh-4rem)] overflow-hidden" : "py-24 sm:py-32"
        }`}
      >
        <div aria-hidden="true" className="bp-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_50%,#000_5%,transparent_70%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
          <div className="max-lg:order-2">
            <p className="fig-label flex items-center gap-3">
              <span className="dim-rule w-10" aria-hidden="true" />
              how a project goes
            </p>
            <h2
              id="process-heading"
              className="mt-3 font-display text-3xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:mt-4"
            >
              From a sketch to <span className="text-primary">something people use.</span>
            </h2>

            {/* A ruler: one segment per step. */}
            <div aria-hidden="true" className="mt-6 flex gap-1.5 lg:mt-8">
              {steps.map((step, index) => (
                <span
                  key={step.title}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    !scrubbing || index <= active ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <ol
              className={`mt-6 space-y-5 lg:mt-8 lg:space-y-6 ${
                // While scrubbing, a phone stacks all four steps in one grid cell (see the li below).
                scrubbing ? "max-lg:grid max-lg:space-y-0" : ""
              }`}
            >
              {steps.map((step, index) => {
                const current = index === active
                return (
                  <li
                    key={step.title}
                    aria-current={scrubbing && current ? "step" : undefined}
                    className={`flex gap-4 transition-opacity duration-300 ${
                      // While scrubbing, a wide screen dims the steps that are not current. A phone
                      // stacks all four in the same place and shows only the current one: the others
                      // are transparent, not removed, so screen readers still read all four, and the
                      // stack is as tall as the longest step, so the pinned panel never changes height
                      // (and the fit check below measures the worst case).
                      scrubbing
                        ? `max-lg:col-start-1 max-lg:row-start-1 ${
                            current ? "opacity-100" : "opacity-35 max-lg:pointer-events-none max-lg:opacity-0"
                          }`
                        : ""
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-300 ${
                        scrubbing && current
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight">{step.title}</h3>
                      <p className="mt-1 max-w-md leading-relaxed text-muted-foreground">{step.detail}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="max-lg:order-1">
            <svg
              viewBox="0 0 520 380"
              role="img"
              aria-label="A drawing that goes from a rough sketch, to a blueprint, to a working booking app, to a live website"
              className="mx-auto h-auto w-full max-w-[600px] max-lg:max-h-[34svh] max-lg:w-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* 3 — the working interface */}
              <g>
                <rect data-build x="40" y="52" width="440" height="300" rx="10" className="fill-card stroke-border" />
                <g data-build>
                  <line x1="40" y1="92" x2="480" y2="92" className="stroke-border" />
                  <line x1="150" y1="92" x2="150" y2="352" className="stroke-border" />
                  <circle cx="62" cy="72" r="7" className="fill-primary" />
                  <rect x="80" y="66" width="44" height="12" rx="6" className="fill-muted-foreground/30" />
                  <rect x="130" y="66" width="44" height="12" rx="6" className="fill-muted-foreground/30" />
                </g>
                <g data-build>
                  <rect x="360" y="61" width="100" height="22" rx="6" className="fill-primary" />
                  <text x="410" y="76" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-primary-foreground font-sans">
                    Book now
                  </text>
                </g>
                <g data-build>
                  <rect x="56" y="110" width="78" height="14" rx="7" className="fill-primary/30" />
                  <rect x="56" y="136" width="62" height="14" rx="7" className="fill-muted-foreground/25" />
                  <rect x="56" y="162" width="70" height="14" rx="7" className="fill-muted-foreground/25" />
                  <rect x="56" y="188" width="54" height="14" rx="7" className="fill-muted-foreground/25" />
                </g>
                <g data-build>
                  <rect x="170" y="112" width="140" height="96" rx="8" className="fill-background stroke-border" />
                  <text x="184" y="134" fontSize="10" className="fill-muted-foreground font-mono">
                    bookings today
                  </text>
                  <text data-counter x="184" y="174" fontSize="34" fontWeight="800" className="fill-foreground font-display">
                    128
                  </text>
                  <text x="184" y="194" fontSize="10" className="fill-emerald-500 font-mono">
                    +12 this week
                  </text>
                </g>
                <g data-build>
                  <rect x="326" y="112" width="134" height="96" rx="8" className="fill-background stroke-border" />
                  <text x="340" y="134" fontSize="10" className="fill-muted-foreground font-mono">
                    customers
                  </text>
                  <circle cx="352" cy="168" r="12" className="fill-brass" />
                  <circle cx="374" cy="168" r="12" className="fill-blueprint" />
                  <circle cx="396" cy="168" r="12" className="fill-primary" />
                  <circle cx="418" cy="168" r="12" className="fill-muted-foreground" />
                  <text x="340" y="198" fontSize="10" className="fill-muted-foreground font-mono">
                    and 86 more
                  </text>
                </g>
                <g data-build>
                  <rect x="170" y="226" width="290" height="106" rx="8" className="fill-background stroke-border" />
                  <text x="184" y="246" fontSize="10" className="fill-muted-foreground font-mono">
                    paid online
                  </text>
                  {BARS.map((height, index) => (
                    <rect
                      key={index}
                      data-bar
                      x={188 + index * 38}
                      y={322 - height}
                      width="22"
                      height={height}
                      rx="3"
                      style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
                      className={index === BARS.length - 1 ? "fill-primary" : "fill-brass/70"}
                    />
                  ))}
                </g>
              </g>

              {/* 2 — the blueprint */}
              <g data-layer="blueprint" opacity="0.16" className="stroke-blueprint" strokeWidth="1.2">
                <rect x="40" y="52" width="440" height="300" />
                <line x1="40" y1="92" x2="480" y2="92" />
                <line x1="150" y1="92" x2="150" y2="352" />
                <rect x="170" y="112" width="140" height="96" />
                <rect x="326" y="112" width="134" height="96" />
                <rect x="170" y="226" width="290" height="106" />
                <rect x="360" y="61" width="100" height="22" />
                <line x1="40" y1="36" x2="480" y2="36" />
                <line x1="40" y1="30" x2="40" y2="42" />
                <line x1="480" y1="30" x2="480" y2="42" />
                <line x1="498" y1="52" x2="498" y2="352" />
                <line x1="492" y1="52" x2="504" y2="52" />
                <line x1="492" y1="352" x2="504" y2="352" />
              </g>
              <g data-layer="labels" opacity="0.16" fontSize="10" textAnchor="middle" className="fill-blueprint font-mono">
                <text x="260" y="30">fits any screen</text>
                <text x="95" y="250">accounts</text>
                <text x="240" y="222">bookings</text>
                <text x="393" y="222">customers</text>
                <text x="315" y="346">payments</text>
                <text x="410" y="100">the one button that matters</text>
              </g>

              {/* 1 — the sketch */}
              <g data-layer="sketch" opacity="0.1" className="stroke-foreground" strokeWidth="1.6">
                <path d="M42 56 C160 48 370 50 482 55 C484 150 480 260 479 350 C360 356 150 355 43 351 C40 250 41 150 42 56" />
                <path d="M43 93 C180 88 340 96 480 91" />
                <path d="M151 92 C147 180 153 270 150 351" />
                <path d="M172 114 C215 110 270 115 311 113 C313 140 309 180 310 208 C265 211 215 207 171 209 C169 180 173 140 172 114" />
                <path d="M327 113 C370 110 420 115 461 112 C463 145 459 180 460 207 C420 210 370 207 326 209 C324 175 328 140 327 113" />
                <path d="M171 228 C260 223 370 230 461 226 C463 260 459 300 460 332 C370 336 260 331 170 333 C168 300 172 260 171 228" />
                <path d="M58 116 C75 112 100 120 132 114" />
                <path d="M58 142 C80 138 100 146 124 141" />
                <path d="M58 168 C72 164 98 172 118 166" />
                <path d="M362 64 C390 60 430 66 459 63 C461 70 459 78 460 83 C430 86 390 82 361 84 C360 78 362 70 362 64" />
                <path d="M190 318 L215 290 L245 302 L280 268 L315 282 L350 252 L390 262 L440 240" />
                <path d="M508 24 C498 40 484 50 468 58" />
                <path d="M468 58 L479 57 M468 58 L472 48" />
              </g>

              {/* 4 — live */}
              <g data-ship>
                <path d="M40 52 V32 a10 10 0 0 1 10 -10 H470 a10 10 0 0 1 10 10 V52 Z" className="fill-muted stroke-border" />
                <circle cx="58" cy="37" r="3.5" className="fill-muted-foreground/50" />
                <circle cx="70" cy="37" r="3.5" className="fill-muted-foreground/50" />
                <circle cx="82" cy="37" r="3.5" className="fill-muted-foreground/50" />
                <rect x="104" y="28" width="230" height="18" rx="9" className="fill-background" />
                <text x="118" y="41" fontSize="10" className="fill-muted-foreground font-mono">
                  yourbusiness.com
                </text>
              </g>
              <g data-ship>
                <rect x="404" y="28" width="62" height="18" rx="9" className="fill-emerald-500/15 stroke-emerald-500/60" />
                <circle cx="418" cy="37" r="3.5" className="fill-emerald-500 motion-safe:animate-pulse" />
                <text x="427" y="41" fontSize="10" fontWeight="700" className="fill-emerald-500 font-sans">
                  Live
                </text>
              </g>
              <g data-toast>
                <rect x="318" y="302" width="184" height="46" rx="9" className="fill-card stroke-primary" />
                <circle cx="338" cy="325" r="7" className="fill-primary" />
                <text x="354" y="321" fontSize="11" fontWeight="700" className="fill-foreground font-sans">
                  New booking
                </text>
                <text x="354" y="336" fontSize="10" className="fill-muted-foreground font-mono">
                  just now · paid online
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
