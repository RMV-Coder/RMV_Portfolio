"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Route } from "lucide-react"
import { DemoShell } from "@/components/tools/demo-shell"

type Layer = "page" | "api" | "service" | "db"

interface GraphNode {
  id: string
  label: string
  layer: Layer
  x: number
  y: number
}

const PALETTE = { bg: "#0B0F14", chrome: "#121821", border: "#1F2937", text: "#E6EDF3", muted: "#7D8896", accent: "#7FD6E8" }
const FOCUS = "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--demo-accent)]"
const TRACE_MS = 1500

const LAYERS: { key: Layer; name: string; noun: string; color: string }[] = [
  { key: "page", name: "Pages", noun: "page", color: "#8C9EF5" },
  { key: "api", name: "API", noun: "API route", color: "#7FD6E8" },
  { key: "service", name: "Services", noun: "service", color: "#E8B86D" },
  { key: "db", name: "Database", noun: "database table", color: "#8FD694" },
]
const LAYER_BY_KEY = Object.fromEntries(LAYERS.map((l, i) => [l.key, { ...l, index: i }])) as Record<Layer, (typeof LAYERS)[number] & { index: number }>

// Hand-placed so the layout is identical on server and client and reads as a graph, not a grid.
const NODES: GraphNode[] = [
  { id: "checkout", label: "Checkout page", layer: "page", x: 78, y: 70 },
  { id: "invoicesPage", label: "Invoices page", layer: "page", x: 96, y: 160 },
  { id: "signin", label: "Sign-in page", layer: "page", x: 70, y: 250 },
  { id: "dashboard", label: "Dashboard", layer: "page", x: 92, y: 326 },
  { id: "postOrders", label: "POST /orders", layer: "api", x: 232, y: 58 },
  { id: "getInvoices", label: "GET /invoices", layer: "api", x: 248, y: 150 },
  { id: "postLogin", label: "POST /login", layer: "api", x: 226, y: 248 },
  { id: "getStats", label: "GET /stats", layer: "api", x: 244, y: 322 },
  { id: "payments", label: "Payments", layer: "service", x: 392, y: 78 },
  { id: "email", label: "Email", layer: "service", x: 410, y: 172 },
  { id: "auth", label: "Auth", layer: "service", x: 386, y: 254 },
  { id: "reports", label: "Reports", layer: "service", x: 404, y: 330 },
  { id: "orders", label: "orders", layer: "db", x: 532, y: 108 },
  { id: "invoices", label: "invoices", layer: "db", x: 546, y: 214 },
  { id: "users", label: "users", layer: "db", x: 528, y: 300 },
]
const NODE_BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n])) as Record<string, GraphNode>

// [from, to] where "to" is what "from" relies on. The first edge out of a node is its main thread.
const EDGES: [string, string][] = [
  ["checkout", "postOrders"], ["invoicesPage", "getInvoices"], ["signin", "postLogin"],
  ["dashboard", "getStats"], ["dashboard", "getInvoices"],
  ["postOrders", "payments"], ["postOrders", "auth"], ["getInvoices", "reports"], ["getInvoices", "auth"],
  ["postLogin", "auth"], ["getStats", "reports"], ["getStats", "auth"],
  ["payments", "orders"], ["payments", "invoices"], ["payments", "email"],
  ["email", "users"], ["auth", "users"], ["reports", "invoices"], ["reports", "orders"],
]

/** Everything reachable from `start` following edges downstream (what it uses) or upstream (what uses it). */
function reach(start: string, dir: "up" | "down"): Set<string> {
  const seen = new Set<string>()
  const queue = [start]
  for (let i = 0; i < queue.length; i++) {
    for (const [from, to] of EDGES) {
      const next = dir === "down" ? (from === queue[i] ? to : null) : (to === queue[i] ? from : null)
      if (next && !seen.has(next)) {
        seen.add(next)
        queue.push(next)
      }
    }
  }
  return seen
}

/** One readable thread through `id`, from a page to a table, following each node's main edge. */
function threadThrough(id: string): string[] {
  const back: string[] = []
  const fwd: string[] = []
  let up = EDGES.find((e) => e[1] === id)
  while (up) {
    const parent: string = up[0]
    back.unshift(parent)
    up = EDGES.find((e) => e[1] === parent)
  }
  let down = EDGES.find((e) => e[0] === id)
  while (down) {
    const child: string = down[1]
    fwd.push(child)
    down = EDGES.find((e) => e[0] === child)
  }
  return [...back, id, ...fwd]
}

const plainName = (id: string) => (NODE_BY_ID[id].layer === "db" ? `${NODE_BY_ID[id].label} table` : NODE_BY_ID[id].label)

function describe(id: string): string {
  const thread = threadThrough(id).map(plainName).join(" → ")
  const up = reach(id, "up").size
  const down = reach(id, "down").size
  const tail = up > 0
    ? `${up} ${up === 1 ? "thing depends" : "things depend"} on ${plainName(id)}.`
    : `Nothing depends on it. It relies on ${down} parts underneath.`
  return `${thread}. ${tail}`
}

function edgePath(a: GraphNode, b: GraphNode): string {
  const dx = b.x - a.x
  // Same-column links would collapse to a straight line, so bow them outward to stay readable.
  if (Math.abs(dx) < 60) return `M${a.x},${a.y} C${a.x + 55},${a.y} ${b.x + 55},${b.y} ${b.x},${b.y}`
  return `M${a.x},${a.y} C${a.x + dx / 2},${a.y} ${b.x - dx / 2},${b.y} ${b.x},${b.y}`
}

const TRACE_THREAD = threadThrough("checkout")
const TRACE_PATH = TRACE_THREAD.slice(1).map((id, i) => edgePath(NODE_BY_ID[TRACE_THREAD[i]], NODE_BY_ID[id])).join(" ")
const TRACE_LAYERS = new Set(TRACE_THREAD.map((id) => NODE_BY_ID[id].layer))

/**
 * Miniature of OmniGraph: a scanned project drawn as a dependency graph. Pointing at any part lights
 * up everything it relies on and everything that relies on it, the way the real tool traces a
 * button on a page down to the database table it eventually writes to.
 */
export default function OmniGraphDemo() {
  const reduce = useReducedMotion() ?? false
  const [hoverId, setHoverId] = React.useState<string | null>(null)
  const [selectedId, setSelectedId] = React.useState<string | null>(null)
  const [hidden, setHidden] = React.useState<Layer[]>([])
  const [tracing, setTracing] = React.useState(false)
  const [traceRun, setTraceRun] = React.useState(0)
  const [tracedOnce, setTracedOnce] = React.useState(false)
  const [drawKey, setDrawKey] = React.useState(0)
  const pathRef = React.useRef<SVGPathElement>(null)
  const dotRef = React.useRef<SVGCircleElement>(null)

  const focusId = hoverId ?? selectedId
  const chain = React.useMemo(() => {
    if (!focusId) return null
    const up = reach(focusId, "up")
    const down = reach(focusId, "down")
    return { up, down, lit: new Set([focusId, ...up, ...down]) }
  }, [focusId])

  // Moves the dot imperatively so a 1.5 s trace doesn't re-render the whole graph every frame.
  React.useEffect(() => {
    if (!tracing) return
    const path = pathRef.current
    const dot = dotRef.current
    if (!path || !dot) return
    const total = path.getTotalLength()
    let frame = 0
    let start = 0
    const step = (now: number) => {
      if (!start) start = now
      const p = Math.min((now - start) / TRACE_MS, 1)
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
      const pt = path.getPointAtLength(total * eased)
      dot.setAttribute("cx", String(pt.x))
      dot.setAttribute("cy", String(pt.y))
      if (p < 1) frame = requestAnimationFrame(step)
      else setTracing(false)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [tracing, traceRun])

  const trace = () => {
    setHoverId(null)
    // The trace runs through every layer on its thread, so bring back any of those that were hidden;
    // otherwise it would select a node that is out of the Tab order and the accessibility tree.
    setHidden((prev) => prev.filter((l) => !TRACE_LAYERS.has(l)))
    setSelectedId("checkout")
    setTracedOnce(true)
    if (!reduce) {
      setTracing(true)
      setTraceRun((r) => r + 1)
    }
  }

  const reset = () => {
    setHoverId(null)
    setSelectedId(null)
    setHidden([])
    setTracing(false)
    setTracedOnce(false)
    setDrawKey((k) => k + 1)
  }

  const toggleLayer = (layer: Layer) => {
    // A part in a layer being hidden can no longer be pointed at, so drop it from the selection too.
    if (!hidden.includes(layer)) {
      if (selectedId && NODE_BY_ID[selectedId].layer === layer) setSelectedId(null)
      if (hoverId && NODE_BY_ID[hoverId].layer === layer) setHoverId(null)
    }
    setHidden((prev) => (prev.includes(layer) ? prev.filter((l) => l !== layer) : [...prev, layer]))
  }

  const edgeOnChain = (from: string, to: string) => {
    if (!chain || !focusId) return false
    const below = (id: string) => id === focusId || chain.down.has(id)
    const above = (id: string) => id === focusId || chain.up.has(id)
    return (below(from) && below(to)) || (above(from) && above(to))
  }

  return (
    <DemoShell variant="browser" title="OmniGraph" address="localhost:4000 — invoice-app" palette={PALETTE} hint="Trace a checkout, then tap any circle to follow it" onReset={reset}>
      <div className="flex h-full flex-col text-[13px]">
        <div className="flex flex-wrap items-center gap-2 border-b px-3 py-2" style={{ borderColor: PALETTE.border, background: PALETTE.chrome }}>
          <button type="button" onClick={trace} className={`relative flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium ${FOCUS}`} style={{ background: PALETTE.accent, color: PALETTE.bg }}>
            {!tracedOnce && !reduce && (
              <motion.span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md" style={{ boxShadow: `0 0 0 2px ${PALETTE.accent}` }}
                animate={{ opacity: [0.7, 0], scale: [1, 1.1] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }} />
            )}
            <Route className="h-3.5 w-3.5" aria-hidden="true" />
            Trace a checkout
          </button>
          <div className="ml-auto flex flex-wrap gap-1.5" role="group" aria-label="Show layers">
            {LAYERS.map((l) => {
              const on = !hidden.includes(l.key)
              return (
                <button key={l.key} type="button" aria-pressed={on} onClick={() => toggleLayer(l.key)}
                  className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors ${FOCUS}`}
                  style={{ borderColor: on ? l.color + "66" : PALETTE.border, color: on ? PALETTE.text : PALETTE.muted }}>
                  <span className="h-2 w-2 rounded-full border" style={{ background: on ? l.color : "transparent", borderColor: l.color }} aria-hidden="true" />
                  {l.name}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative min-h-0 flex-1">
          <svg key={drawKey} viewBox="0 0 600 380" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full"
            role="group" aria-label="Dependency graph of invoice-app" onClick={() => setSelectedId(null)} onMouseLeave={() => setHoverId(null)}>
            <path ref={pathRef} d={TRACE_PATH} fill="none" stroke="none" aria-hidden="true" />
            <g aria-hidden="true">
              {EDGES.map(([from, to], i) => {
                const a = NODE_BY_ID[from]
                const b = NODE_BY_ID[to]
                const on = edgeOnChain(from, to)
                const off = hidden.includes(a.layer) || hidden.includes(b.layer)
                const opacity = off ? 0.15 : chain ? (on ? 1 : 0.12) : 0.5
                return (
                  <motion.path key={`${from}-${to}`} d={edgePath(a, b)} fill="none" strokeLinecap="round"
                    stroke={on ? PALETTE.accent : PALETTE.muted} strokeWidth={on ? 2.2 : 1.2}
                    style={{ opacity, transition: "opacity 200ms, stroke 200ms" }}
                    initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.025, ease: "easeOut" }} />
                )
              })}
            </g>
            {NODES.map((n, i) => {
              const layer = LAYER_BY_KEY[n.layer]
              const lit = chain?.lit.has(n.id) ?? false
              const off = hidden.includes(n.layer)
              const opacity = off ? 0.15 : chain && !lit ? 0.28 : 1
              const select = () => setSelectedId((prev) => (prev === n.id ? null : n.id))
              return (
                <g key={n.id} transform={`translate(${n.x} ${n.y})`} style={{ opacity, transition: "opacity 200ms" }}>
                  <motion.g initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 + layer.index * 0.15 + (i % 4) * 0.04 }}>
                    <motion.g animate={reduce ? undefined : { y: [0, -2.5, 0] }}
                      transition={{ duration: 3.6 + (i % 5) * 0.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 + (i % 7) * 0.15 }}>
                      {/* A hidden layer's parts leave the Tab order, the accessibility tree and pointer hit-testing. */}
                      <g role="button" tabIndex={off ? -1 : 0} aria-hidden={off || undefined} aria-label={`${n.label}, ${layer.noun}`} aria-pressed={selectedId === n.id}
                        className="group cursor-pointer outline-none" style={{ pointerEvents: off ? "none" : undefined }}
                        onMouseEnter={() => setHoverId(n.id)} onMouseLeave={() => setHoverId(null)}
                        onFocus={() => setHoverId(n.id)} onBlur={() => setHoverId(null)}
                        onClick={(e) => { e.stopPropagation(); select() }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select() }
                          else if (e.key === "Escape") setSelectedId(null)
                        }}>
                        <circle r={24} fill="transparent" />
                        <circle r={13} fill="none" stroke={PALETTE.text} strokeWidth={1.5} className="opacity-0 group-focus-visible:opacity-100" />
                        {lit && <circle r={10} fill="none" stroke={PALETTE.accent} strokeWidth={n.id === focusId ? 2 : 1.2} />}
                        <circle r={7} fill={layer.color} />
                        {/* dy is in em so the label's top stays clear of the ring when phones enlarge lit labels
                            (the viewBox shrinks to about half size there). At 12 units it lands where y=23 did. */}
                        <text y={13} dy="0.83em" textAnchor="middle" fontSize={12} fill={PALETTE.text} stroke={PALETTE.bg} strokeWidth={3} paintOrder="stroke"
                          className={lit ? "max-sm:text-[20px]" : "max-sm:hidden"}>
                          {n.label}
                        </text>
                      </g>
                    </motion.g>
                  </motion.g>
                </g>
              )
            })}
            {tracing && (
              <circle ref={dotRef} r={5} cx={NODE_BY_ID.checkout.x} cy={NODE_BY_ID.checkout.y} fill={PALETTE.accent} stroke={PALETTE.bg} strokeWidth={2} aria-hidden="true" />
            )}
          </svg>
        </div>

        <p className="min-h-[52px] border-t px-3 py-2.5 text-xs leading-relaxed" style={{ borderColor: PALETTE.border, background: PALETTE.chrome, color: focusId ? PALETTE.text : PALETTE.muted }}>
          {focusId ? describe(focusId) : "Hover or tap any circle to follow its thread from the screen down to the database."}
        </p>
        {/* The caption above follows every hover and Tab stop, so only an explicit selection or a trace is announced. */}
        <p className="sr-only" aria-live="polite">{selectedId ? describe(selectedId) : ""}</p>
      </div>
    </DemoShell>
  )
}
