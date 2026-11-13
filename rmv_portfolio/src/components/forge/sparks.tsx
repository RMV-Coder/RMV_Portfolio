"use client"

import * as React from "react"

interface Spark {
  x: number
  y: number
  vx: number
  vy: number
  born: number
  life: number
}

/**
 * Sparks fly where you strike. A press anywhere on the page throws a few
 * embers from that spot — the one piece of pure play in the forge.
 *
 * One fixed canvas, drawn only while sparks are alive: the loop starts on a
 * press and stops itself when the last one fades. Skipped for reduced motion
 * and for presses inside form fields, where it would be a distraction.
 */
export function Sparks() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let sparks: Spark[] = []
    let frame = 0
    let last = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    resize()

    const draw = (now: number) => {
      const delta = Math.min(32, now - last) / 1000
      last = now
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      sparks = sparks.filter((spark) => now - spark.born < spark.life)

      const color = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#ff7a1a"
      context.fillStyle = color
      for (const spark of sparks) {
        const age = (now - spark.born) / spark.life
        spark.vy += 900 * delta // gravity
        spark.x += spark.vx * delta
        spark.y += spark.vy * delta
        context.globalAlpha = 1 - age
        const size = 2.6 * (1 - age * 0.6)
        context.fillRect(spark.x - size / 2, spark.y - size / 2, size, size)
      }
      context.globalAlpha = 1

      frame = sparks.length > 0 ? requestAnimationFrame(draw) : 0
    }

    const strike = (event: PointerEvent) => {
      if (event.button !== 0) return
      const target = event.target as Element | null
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return

      const now = performance.now()
      const count = 9 + Math.floor(Math.random() * 6)
      for (let i = 0; i < count; i++) {
        // Mostly upward, fanned out.
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.4
        const speed = 120 + Math.random() * 260
        sparks.push({
          x: event.clientX,
          y: event.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          born: now,
          life: 380 + Math.random() * 420,
        })
      }
      if (!frame) {
        last = now
        frame = requestAnimationFrame(draw)
      }
    }

    window.addEventListener("pointerdown", strike, { passive: true })
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("pointerdown", strike)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] h-full w-full" />
}

export default Sparks
