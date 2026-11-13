"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { animate, createScope, onScroll, stagger, svg, splitText, utils } from "animejs"

/**
 * Scroll-triggered motion for the whole page, driven by anime.js.
 *
 * Sections stay server-rendered and simply declare what they want:
 *
 *   data-reveal            fade up
 *   data-reveal="stagger"  children fade up one after another
 *   data-reveal="words"    headline words rise out of a clip
 *   data-reveal="draw"     an SVG's strokes draw themselves
 *   data-reveal="scale"    settle in from slightly small
 *   data-reveal-delay      extra delay in ms
 *   data-drift="N"         drifts by up to N px as the page scrolls past
 *
 * Two rules keep this honest. Content is never hidden in the HTML — a start
 * state is applied here, in script, and only to elements still below the
 * fold, so nothing a visitor is already looking at blinks out. And reduced
 * motion skips all of it: the page is simply there.
 */
export function ScrollMotion() {
  const pathname = usePathname()

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const scope = createScope().add(() => {
      const fold = window.innerHeight * 0.92
      const targets = Array.from(document.querySelectorAll<HTMLElement | SVGElement>("[data-reveal]"))

      targets.forEach((element) => {
        if (element.getBoundingClientRect().top < fold) return

        const kind = element.getAttribute("data-reveal")
        const delay = Number(element.getAttribute("data-reveal-delay") ?? 0)
        // Fires once, when the element's top crosses 88% of the viewport height.
        const trigger = () => onScroll({ target: element, enter: "bottom-=12% top", repeat: false })

        if (kind === "stagger") {
          const children = Array.from(element.children)
          utils.set(children, { opacity: 0, translateY: 28 })
          animate(children, {
            opacity: 1,
            translateY: 0,
            duration: 720,
            delay: stagger(90, { start: delay }),
            ease: "out(3)",
            autoplay: trigger(),
          })
          return
        }

        if (kind === "words") {
          const split = splitText(element as HTMLElement, { words: { wrap: "clip" } })
          utils.set(split.words, { translateY: "110%" })
          animate(split.words, {
            translateY: "0%",
            duration: 820,
            delay: stagger(45, { start: delay }),
            ease: "out(4)",
            autoplay: trigger(),
            // Once the words have landed, put the original markup back: the
            // per-word clip wrappers would otherwise shave descenders for good,
            // and the hidden screen-reader copy would double any copied text.
            onComplete: () => split.revert(),
          })
          return
        }

        if (kind === "draw") {
          const strokes = svg.createDrawable(
            element.querySelectorAll<SVGGeometryElement>("path, line, polyline, circle, rect, ellipse")
          )
          utils.set(strokes, { draw: "0 0" })
          animate(strokes, {
            draw: "0 1",
            duration: 1400,
            delay: stagger(140, { start: delay }),
            ease: "inOut(3)",
            autoplay: trigger(),
          })
          return
        }

        if (kind === "scale") {
          utils.set(element, { opacity: 0, scale: 0.94 })
          animate(element, { opacity: 1, scale: 1, duration: 800, delay, ease: "out(3)", autoplay: trigger() })
          return
        }

        utils.set(element, { opacity: 0, translateY: 32 })
        animate(element, { opacity: 1, translateY: 0, duration: 760, delay, ease: "out(3)", autoplay: trigger() })
      })

      // Elements that drift at their own speed as the page scrolls past.
      document.querySelectorAll<HTMLElement>("[data-drift]").forEach((element) => {
        const distance = Number(element.getAttribute("data-drift") ?? 40)
        animate(element, {
          translateY: [distance, -distance],
          ease: "linear",
          autoplay: onScroll({ target: element, sync: 0.4 }),
        })
      })
    })

    return () => scope.revert()
  }, [pathname])

  return null
}

export default ScrollMotion
