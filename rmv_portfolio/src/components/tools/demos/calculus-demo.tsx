"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { DemoShell } from "@/components/tools/demo-shell"

const C = {
  surface: "#FFFFFF",
  surface2: "#F2F4F7",
  accentSoft: "#EEF1FE",
  accentBorder: "#C5CEF8",
  ok: "#0D7355",
  okBg: "#EAF7F2",
}

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--demo-accent)]"

/** Sets maths in serif, with single-letter variables in italic. */
function M({ children }: { children: string }) {
  return (
    <span className="font-serif">
      {children.split(/([xuvfC])/).map((part, i) => (/^[xuvfC]$/.test(part) ? <i key={i}>{part}</i> : part))}
    </span>
  )
}

interface Step {
  rule: string
  explain: string
  before: string
  after: string
}

interface Series {
  name: string
  color: string
  fn: (x: number) => number
}

interface Problem {
  chip: string
  task: string
  expr: React.ReactNode
  steps: Step[]
  answer: string
  y: [number, number]
  series: Series[]
  /** Removable discontinuity to mark with an open circle and a guide line. */
  hole?: [number, number]
}

const INDIGO = "#3450C9"

const PROBLEMS: Problem[] = [
  {
    chip: "d/dx x²·sin(x)",
    task: "Differentiate",
    expr: <M>f(x) = x²·sin(x)</M>,
    steps: [
      { rule: "Product rule", explain: "When two things are multiplied, differentiate each in turn and add.", before: "(u·v)′", after: "u′·v + u·v′, with u = x², v = sin x" },
      { rule: "Power rule", explain: "Bring the power down in front, then lower the power by one.", before: "u′ = (x²)′", after: "2x" },
      { rule: "Derivative of sine", explain: "The rate of change of sine is cosine.", before: "v′ = (sin x)′", after: "cos x" },
    ],
    answer: "f′(x) = 2x·sin(x) + x²·cos(x)",
    y: [-16, 16],
    series: [
      { name: "f(x)", color: INDIGO, fn: (x) => x * x * Math.sin(x) },
      { name: "f′(x)", color: C.ok, fn: (x) => 2 * x * Math.sin(x) + x * x * Math.cos(x) },
    ],
  },
  {
    chip: "∫ 2x·cos(x²) dx",
    task: "Integrate",
    expr: <M>∫ 2x·cos(x²) dx</M>,
    steps: [
      { rule: "u-substitution", explain: "Name the inner part u when its derivative also appears outside.", before: "u = x²", after: "du = 2x dx" },
      { rule: "Rewrite", explain: "Swap every piece written in x for its version in u.", before: "∫ cos(x²) · 2x dx", after: "∫ cos(u) du" },
      { rule: "Integral of cosine", explain: "Cosine integrates to sine, plus a constant.", before: "∫ cos(u) du", after: "sin(u) + C" },
      { rule: "Substitute back", explain: "Put x² back wherever u appears.", before: "sin(u) + C", after: "sin(x²) + C" },
    ],
    answer: "sin(x²) + C",
    y: [-8, 8],
    series: [
      { name: "2x·cos(x²)", color: INDIGO, fn: (x) => 2 * x * Math.cos(x * x) },
      { name: "sin(x²)", color: C.ok, fn: (x) => Math.sin(x * x) },
    ],
  },
  {
    chip: "lim sin(x)/x",
    task: "Evaluate the limit",
    expr: (
      <span className="font-serif">
        lim
        <sub className="text-[0.7em]">
          <M>x → 0</M>
        </sub>{" "}
        <M>sin(x) / x</M>
      </span>
    ),
    steps: [
      { rule: "Direct substitution", explain: "Try plugging the value straight in first.", before: "sin(0) / 0", after: "0 / 0, indeterminate" },
      { rule: "L’Hôpital’s rule", explain: "For 0/0, take the limit of the top’s derivative over the bottom’s.", before: "sin(x) / x", after: "cos(x) / 1" },
      { rule: "Evaluate", explain: "The new expression is continuous at 0, so plug 0 in.", before: "cos(0) / 1", after: "1" },
    ],
    answer: "1",
    y: [-0.5, 1.5],
    series: [{ name: "sin(x)/x", color: INDIGO, fn: (x) => (Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x) }],
    hole: [0, 1],
  },
]

// Plot geometry in viewBox units; x always spans [-4, 4].
const W = 320
const H = 168
const L = 26
const R = 312
const T = 8
const B = 150
const SAMPLES = 320

const px = (x: number) => L + ((x + 4) / 8) * (R - L)
const pyFor = (y: [number, number]) => (v: number) => T + ((y[1] - v) / (y[1] - y[0])) * (B - T)

/** Samples f and breaks the line where it leaves the plot, so nothing draws outside it. */
function trace(fn: (x: number) => number, y: [number, number]) {
  const py = pyFor(y)
  const pt = (x: number, v: number) => `${px(x).toFixed(1)} ${py(Math.min(y[1], Math.max(y[0], v))).toFixed(1)}`
  let d = ""
  let pen = false
  let prev: [number, number] | null = null
  for (let i = 0; i <= SAMPLES; i++) {
    const x = -4 + (8 * i) / SAMPLES
    const v = fn(x)
    const inside = v >= y[0] && v <= y[1]
    if (inside && !pen) {
      d += prev ? `M${pt(prev[0], prev[1])}L${pt(x, v)}` : `M${pt(x, v)}`
      pen = true
    } else if (pen) {
      d += `L${pt(x, v)}`
      pen = inside
    }
    prev = [x, v]
  }
  return d
}

/**
 * Simulates the Calculus Solver: a posed problem comes back as a worked
 * solution where each step names its rule and shows the algebra before and
 * after, followed by a cross-checked answer and a plotted graph.
 */
export default function CalculusDemo() {
  const reduce = useReducedMotion() === true
  const [pi, setPi] = React.useState(0)
  const [revealed, setRevealed] = React.useState(-1)
  const [used, setUsed] = React.useState(false)
  const timers = React.useRef<number[]>([])
  const col = React.useRef<HTMLDivElement>(null)

  const p = PROBLEMS[pi]
  const answerAt = p.steps.length + 1
  const graphAt = p.steps.length + 2

  const clearTimers = React.useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }, [])

  React.useEffect(() => clearTimers, [clearTimers])

  // Scroll the results column itself; scrollIntoView could also move the page.
  // With reduced motion everything appears at once, so stay at the top where
  // solve() left the column and let the visitor read from the problem down.
  React.useEffect(() => {
    if (reduce) return
    const box = col.current
    const el = box?.querySelector<HTMLElement>(`[data-reveal="${revealed}"]`)
    if (!box || !el) return
    const delta = el.getBoundingClientRect().bottom - box.getBoundingClientRect().bottom
    if (delta > 0) box.scrollTo({ top: box.scrollTop + delta + 12, behavior: "smooth" })
  }, [revealed, reduce])

  const plot = React.useMemo(() => {
    const py = pyFor(p.y)
    const step = (p.y[1] - p.y[0]) / 4
    return {
      paths: p.series.map((s) => ({ ...s, d: trace(s.fn, p.y) })),
      yTicks: [0, 1, 2, 3, 4].map((k) => p.y[0] + k * step).map((v) => ({ v, y: py(v) })),
      zeroY: py(0),
      hole: p.hole ? { x: px(p.hole[0]), y: py(p.hole[1]) } : null,
    }
  }, [p])

  const solve = () => {
    clearTimers()
    setUsed(true)
    col.current?.scrollTo({ top: 0 })
    if (reduce) {
      setRevealed(graphAt)
      return
    }
    setRevealed(0)
    for (let k = 1; k <= graphAt; k++) {
      timers.current.push(window.setTimeout(() => setRevealed(k), k * 450))
    }
  }

  const choose = (i: number) => {
    clearTimers()
    setPi(i)
    setRevealed(-1)
  }

  const reset = () => {
    choose(0)
    setUsed(false)
  }

  const enter = reduce ? false : { opacity: 0, y: 6 }
  const card = "rounded-lg border px-3 py-2.5"
  const cardStyle = { background: C.surface, borderColor: "var(--demo-border)" }

  return (
    <DemoShell
      variant="browser"
      title="Calculus Solver"
      address="calculus solver — every step, shown"
      palette={{ bg: "#F6F7F9", chrome: C.surface, border: "#E2E5EA", text: "#14171C", muted: "#5D6470", accent: INDIGO }}
      hint="Press Solve to see every step."
      onReset={reset}
    >
      <div className="@container h-full">
        <div className="flex h-full flex-col @lg:flex-row">
          <div
            className="shrink-0 border-b p-3 @lg:w-[40%] @lg:border-r @lg:border-b-0"
            style={{ background: C.surface, borderColor: "var(--demo-border)" }}
          >
            <p className="hidden items-center gap-2 text-sm font-semibold @lg:flex">
              <span className="grid h-6 w-6 place-items-center rounded-md font-serif text-sm italic" style={{ background: INDIGO, color: C.surface }} aria-hidden="true">
                ∫
              </span>
              Calculus Solver
            </p>
            <h2 className="text-xs font-medium @lg:mt-4" style={{ color: "var(--demo-muted)" }}>
              Pose a problem
            </h2>
            <div className="mt-1.5 flex flex-wrap gap-1.5 @lg:flex-col" role="group" aria-label="Problems">
              {PROBLEMS.map((q, i) => (
                <button
                  key={q.chip}
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={pi === i}
                  className={`rounded-md border px-2.5 py-1.5 text-left text-sm ${FOCUS}`}
                  style={
                    pi === i
                      ? { background: C.accentSoft, borderColor: C.accentBorder, color: INDIGO }
                      : { background: C.surface2, borderColor: "var(--demo-border)", color: "var(--demo-text)" }
                  }
                >
                  <M>{q.chip}</M>
                </button>
              ))}
            </div>
            <span className="relative mt-2.5 flex">
              {!used && !reduce && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-1 rounded-lg border-2"
                  style={{ borderColor: INDIGO }}
                  animate={{ opacity: [0.7, 0], scale: [1, 1.05] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <button
                type="button"
                onClick={solve}
                className={`relative w-full rounded-md px-3 py-2 text-sm font-semibold hover:opacity-90 ${FOCUS}`}
                style={{ background: INDIGO, color: C.surface }}
              >
                Solve
              </button>
            </span>
          </div>

          <div ref={col} className="min-h-0 flex-1 overflow-y-auto p-3" aria-live="polite">
            {revealed < 0 ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <p className="font-serif text-base italic">Type a function, get the reasoning.</p>
                  <p className="mt-1 text-xs" style={{ color: "var(--demo-muted)" }}>
                    Pick a problem, then press Solve.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5" key={pi}>
                <motion.div data-reveal={0} initial={enter} animate={{ opacity: 1, y: 0 }} className={card} style={cardStyle}>
                  <p className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--demo-muted)" }}>
                    {p.task}
                  </p>
                  <p className="mt-0.5 text-lg">{p.expr}</p>
                </motion.div>

                <ol className="flex flex-col gap-2">
                  {p.steps.slice(0, Math.max(0, revealed)).map((s, i) => (
                    <motion.li key={s.rule} data-reveal={i + 1} initial={enter} animate={{ opacity: 1, y: 0 }} className={card} style={cardStyle}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] tabular-nums" style={{ color: "var(--demo-muted)" }}>
                          Step {i + 1}
                        </span>
                        <span
                          className="rounded-full border px-2 py-0.5 text-[11px] font-medium"
                          style={{ background: C.accentSoft, borderColor: C.accentBorder, color: INDIGO }}
                        >
                          {s.rule}
                        </span>
                      </div>
                      <p className="mt-1 text-xs" style={{ color: "var(--demo-muted)" }}>
                        {s.explain}
                      </p>
                      <p className="mt-1.5 flex flex-wrap items-center gap-x-2 rounded px-2 py-1 text-[15px]" style={{ background: C.surface2 }}>
                        <M>{s.before}</M>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--demo-muted)" }} aria-label="becomes" />
                        <M>{s.after}</M>
                      </p>
                    </motion.li>
                  ))}
                </ol>

                {revealed >= answerAt && (
                  <motion.div data-reveal={answerAt} initial={enter} animate={{ opacity: 1, y: 0 }} className={card} style={{ background: C.accentSoft, borderColor: C.accentBorder }}>
                    <p className="text-[11px] font-medium uppercase tracking-wider" style={{ color: INDIGO }}>
                      Answer
                    </p>
                    <p className="mt-0.5 text-lg">
                      <M>{p.answer}</M>
                    </p>
                    <p className="mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: C.okBg, color: C.ok }}>
                      <Check className="h-3 w-3" aria-hidden="true" />
                      Checked by a direct calculation
                    </p>
                  </motion.div>
                )}

                {revealed >= graphAt && (
                  <motion.div data-reveal={graphAt} initial={enter} animate={{ opacity: 1, y: 0 }} className={card} style={cardStyle}>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]" style={{ color: "var(--demo-muted)" }}>
                      {p.series.map((s) => (
                        <span key={s.name} className="inline-flex items-center gap-1.5">
                          <span className="h-0.5 w-3.5 rounded" style={{ background: s.color }} aria-hidden="true" />
                          <M>{s.name}</M>
                        </span>
                      ))}
                      {p.hole && <span>Open circle: undefined at x = 0, approaches 1</span>}
                    </div>
                    <svg viewBox={`0 0 ${W} ${H}`} className="mt-1.5 block h-auto w-full" role="img" aria-label={`Graph of ${p.series.map((s) => s.name).join(" and ")} for x from -4 to 4`}>
                      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((x) => (
                        <line key={x} x1={px(x)} x2={px(x)} y1={T} y2={B} stroke={x === 0 ? "#5D6470" : "#E2E5EA"} strokeWidth={x === 0 ? 1 : 0.75} />
                      ))}
                      {plot.yTicks.map((t) => (
                        <g key={t.v}>
                          <line x1={L} x2={R} y1={t.y} y2={t.y} stroke="#E2E5EA" strokeWidth={0.75} />
                          <text x={L - 4} y={t.y + 3} textAnchor="end" fontSize={8} fill="#5D6470">
                            {t.v}
                          </text>
                        </g>
                      ))}
                      <line x1={L} x2={R} y1={plot.zeroY} y2={plot.zeroY} stroke="#5D6470" strokeWidth={1} />
                      {[-4, -2, 2, 4].map((x) => (
                        <text key={x} x={px(x)} y={B + 12} textAnchor="middle" fontSize={8} fill="#5D6470">
                          {x}
                        </text>
                      ))}
                      {plot.hole && (
                        <line x1={L} x2={R} y1={plot.hole.y} y2={plot.hole.y} stroke="#5D6470" strokeWidth={0.75} strokeDasharray="4 3" />
                      )}
                      {plot.paths.map((s) => (
                        <motion.path
                          key={s.name}
                          d={s.d}
                          fill="none"
                          stroke={s.color}
                          strokeWidth={1.75}
                          strokeLinejoin="round"
                          initial={reduce ? false : { pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.1, ease: "easeInOut" }}
                        />
                      ))}
                      {plot.hole && <circle cx={plot.hole.x} cy={plot.hole.y} r={3.5} fill={C.surface} stroke={INDIGO} strokeWidth={1.5} />}
                    </svg>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </DemoShell>
  )
}
