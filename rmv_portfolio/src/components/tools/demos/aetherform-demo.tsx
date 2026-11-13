"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Pause, Play, StepForward } from "lucide-react"
import { DemoShell } from "@/components/tools/demo-shell"

// AetherForm's mobile theme, "First light" (mobile/src/index.css).
const PALETTE = { bg: "#0f131a", chrome: "#161b24", border: "#283041", text: "#eceff4", muted: "#8e98a9", accent: "#ffb648" }
const C = { panel2: "#1d2430", onAccent: "#2a1a00", ok: "#4fd69c", warn: "#ff9466", camera: "#000000" }
const FOCUS = "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--demo-accent)]"

// The real squat counter's thresholds (backend/aetherform/exercises.yaml): knee angle in degrees.
const ENTER_BOTTOM = 100
const EXIT_TOP = 155
const KNEE_TOP = 175
const KNEE_RANGE = 95
const TARGET_DEPTH = (KNEE_TOP - ENTER_BOTTOM) / KNEE_RANGE
const TARGET_REPS = 5
const CYCLE_MS = 2600
const SHALLOW = 0.5
/** Key poses for reduced motion: halfway down, bottom, halfway up, standing. */
const STEPS = [0.45, 1, 0.45, 0]

type Camera = "side" | "front"
type Form = "good" | "mistake"
type Pt = [number, number]
interface Cue { text: string; tone: "idle" | "ok" | "warn" }
interface Dot { p: Pt; faint?: boolean; hot?: boolean }
interface Figure { bones: [Pt, Pt, boolean][]; dots: Dot[] }

const IDLE: Cue = { text: "The coach is ready. Press Start set.", tone: "idle" }
const kneeAngle = (d: number) => KNEE_TOP - KNEE_RANGE * d
const rad = (deg: number) => (deg * Math.PI) / 180
/** A point `len` away from `p`, at `deg` measured clockwise from straight up (+x faces forward). */
const add = (p: Pt, len: number, deg: number): Pt => [p[0] + len * Math.sin(rad(deg)), p[1] - len * Math.cos(rad(deg))]

function chain(fig: Figure, pts: Pt[], faint = false) {
  pts.forEach((p, i) => {
    fig.dots.push({ p, faint })
    if (i > 0) fig.bones.push([pts[i - 1], p, faint])
  })
}

/** Side-on joints from one depth value (0 standing, 1 bottom). Bone lengths never change. */
function sidePoints(d: number) {
  const shin = 2 + 33 * d
  const thigh = 3 + 62 * d
  const lean = 8 + 37 * d
  const reach = 20 + 65 * d
  const leg = (x: number) => {
    const ankle: Pt = [x, 200]
    const knee = add(ankle, 48, shin)
    return { toe: [x + 15, 202] as Pt, ankle, knee, hip: add(knee, 48, -thigh) }
  }
  const near = leg(92)
  const shoulder = add(near.hip, 58, lean)
  const arm = (from: Pt) => {
    const elbow = add(from, 30, 180 - reach)
    return { elbow, wrist: add(elbow, 28, 170 - reach) }
  }
  const ear = add(shoulder, 15, lean - 4)
  return { near, far: leg(87), shoulder, arm, ear, nose: add(ear, 9, 100) }
}

/** Projects the same pose for the chosen camera. From the front, knees track out, or cave in on a mistake. */
function figure(d: number, camera: Camera, cave: boolean): Figure {
  const k = sidePoints(d)
  const fig: Figure = { bones: [], dots: [] }
  const arm = k.arm(k.shoulder)
  if (camera === "side") {
    const farShoulder: Pt = [k.shoulder[0] - 4, k.shoulder[1]]
    const farArm = k.arm(farShoulder)
    chain(fig, [k.far.toe, k.far.ankle, k.far.knee, k.far.hip], true)
    chain(fig, [farShoulder, farArm.elbow, farArm.wrist], true)
    chain(fig, [k.near.toe, k.near.ankle, k.near.knee, k.near.hip, k.shoulder, arm.elbow, arm.wrist])
    chain(fig, [k.ear, k.nose])
    return fig
  }
  const kneeOff = cave ? 16 - 18 * d : 16 + 12 * d
  const x = (side: number, off: number) => 100 + side * off
  for (const s of [-1, 1]) {
    chain(fig, [[x(s, 21), 203], [x(s, 16), 200], [x(s, kneeOff), k.near.knee[1]], [x(s, 13), k.near.hip[1]], [x(s, 23), k.shoulder[1]], [x(s, 22), arm.elbow[1]], [x(s, 14), arm.wrist[1]]])
    if (cave && d > 0.3) fig.dots.push({ p: [x(s, kneeOff), k.near.knee[1]], hot: true })
  }
  fig.bones.push([[87, k.near.hip[1]], [113, k.near.hip[1]], false], [[77, k.shoulder[1]], [123, k.shoulder[1]], false])
  chain(fig, [[93, k.ear[1]], [100, k.ear[1] + 3], [107, k.ear[1]]])
  return fig
}

function Meter({ depth }: { depth: number }) {
  const reached = depth >= TARGET_DEPTH
  return (
    <div className="min-w-0 flex-1">
      <div className="flex justify-between text-xs" style={{ color: PALETTE.muted }}>
        <span>Squat depth</span>
        <span className="tabular-nums">Knee {Math.round(kneeAngle(depth))}°</span>
      </div>
      <div className="relative mt-1.5 h-2 rounded-full" style={{ background: C.panel2 }}>
        <div className="h-full rounded-full" style={{ width: `${depth * 100}%`, background: reached ? C.ok : PALETTE.accent }} />
        <span className="absolute -top-1 h-4 w-0.5 rounded-full" style={{ left: `${TARGET_DEPTH * 100}%`, background: PALETTE.text }} aria-hidden="true" />
      </div>
      <p className="mt-1 text-right text-[11px]" style={{ color: PALETTE.muted }}>Marker: target depth, knee below {ENTER_BOTTOM}°</p>
    </div>
  )
}

/**
 * Simulates AetherForm's live squat tracking: a pose-estimation skeleton seen by one of several
 * cameras, the hub's knee-angle rep counter (a rep counts only after the knee passes 100° and the
 * lifter stands back past 155°), and its form cues, using the cue wording from the real exercise file.
 */
export default function AetherFormDemo() {
  const reduce = useReducedMotion() === true
  const [running, setRunning] = React.useState(false)
  const [used, setUsed] = React.useState(false)
  const [done, setDone] = React.useState(false)
  const [depth, setDepth] = React.useState(0)
  const [camera, setCamera] = React.useState<Camera>("side")
  const [form, setForm] = React.useState<Form>("good")
  const [reps, setReps] = React.useState(0)
  const [noReps, setNoReps] = React.useState(0)
  const [noRepNote, setNoRepNote] = React.useState(false)
  const [cue, setCue] = React.useState<Cue>(IDLE)

  const phase = React.useRef(0)
  const amp = React.useRef(1)
  const bottom = React.useRef(false)
  const low = React.useRef(180)
  const caveCued = React.useRef(false)
  const repsRef = React.useRef(0)
  const stepRef = React.useRef(0)
  const cameraRef = React.useRef<Camera>("side")
  const formRef = React.useRef<Form>("good")
  React.useEffect(() => {
    cameraRef.current = camera
    formRef.current = form
  }, [camera, form])

  /** The rep state machine, fed one depth sample at a time. */
  const observe = React.useCallback((d: number) => {
    const angle = kneeAngle(d)
    const front = cameraRef.current === "front"
    low.current = Math.min(low.current, angle)
    if (front && formRef.current === "mistake" && d > 0.3 && !caveCued.current) {
      caveCued.current = true
      setCue({ text: "Push your knees out", tone: "warn" })
    }
    if (angle < ENTER_BOTTOM && !bottom.current) {
      bottom.current = true
      setNoRepNote(false)
      setCue({ text: front ? "Knees tracking over your toes" : "Depth reached", tone: "ok" })
    } else if (angle > EXIT_TOP && low.current < EXIT_TOP - 5) {
      if (bottom.current) {
        repsRef.current += 1
        setReps(repsRef.current)
        if (repsRef.current >= TARGET_REPS) {
          setRunning(false)
          setDone(true)
          phase.current = 0
          setDepth(0)
        }
      } else {
        setNoReps((n) => n + 1)
        setNoRepNote(true)
        if (!front) setCue({ text: "Go a little deeper", tone: "warn" })
      }
      bottom.current = false
      caveCued.current = false
      low.current = 180
    }
  }, [])

  React.useEffect(() => {
    if (!running || reduce) return
    let frame = 0
    let last = performance.now()
    const tick = (now: number) => {
      // Cap the step so a hidden tab or a stalled frame pauses the squat instead of
      // jumping past the bottom, which would count a full-depth rep as a no-rep.
      const dt = Math.min(now - last, 50)
      phase.current = (phase.current + dt / CYCLE_MS) % 1
      last = now
      amp.current += ((formRef.current === "good" ? 1 : SHALLOW) - amp.current) * 0.06
      const d = (amp.current * (1 - Math.cos(2 * Math.PI * phase.current))) / 2
      setDepth(d)
      observe(d)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [running, reduce, observe])

  const step = () => {
    const d = STEPS[stepRef.current] * (formRef.current === "good" ? 1 : SHALLOW)
    stepRef.current = (stepRef.current + 1) % STEPS.length
    setDepth(d)
    observe(d)
  }

  const clearSet = () => {
    phase.current = 0
    bottom.current = false
    caveCued.current = false
    low.current = 180
    repsRef.current = 0
    stepRef.current = 0
    setDepth(0)
    setReps(0)
    setNoReps(0)
    setNoRepNote(false)
    setDone(false)
  }

  const primary = () => {
    setUsed(true)
    if (done) {
      clearSet()
      setCue({ text: "Watching your squat", tone: "idle" })
      setRunning(!reduce)
      return
    }
    if (cue.tone === "idle") setCue({ text: "Watching your squat", tone: "idle" })
    if (reduce) step()
    else setRunning((r) => !r)
  }

  const reset = () => {
    setRunning(false)
    clearSet()
    setUsed(false)
    setCamera("side")
    setForm("good")
    amp.current = 1
    setCue(IDLE)
  }

  const label = done ? "Start another set" : reduce ? (used ? "Next position" : "Start set") : running ? "Pause" : used ? "Resume" : "Start set"
  const Icon = reduce && used && !done ? StepForward : running ? Pause : Play
  const fig = figure(depth, camera, form === "mistake")
  const toneColor = cue.tone === "ok" ? C.ok : cue.tone === "warn" ? C.warn : PALETTE.muted
  const chip = "rounded-full border px-2.5 py-0.5 text-xs"

  return (
    <DemoShell variant="app" title="AetherForm" palette={PALETTE} hint="Press Start set, then try Common mistake." onReset={reset}>
      <div className="@container h-full text-sm">
        <div className="flex h-full flex-col @lg:flex-row">
          <section aria-label="Camera view" className="relative flex min-h-0 flex-1 flex-col pt-9" style={{ background: C.camera }}>
            {/* pt-9 keeps the figure below the camera chips, and the caption sits in flow underneath,
                so neither covers the figure and the caption can wrap instead of being cut off. */}
            <div className="relative min-h-0 flex-1">
              <svg viewBox="0 0 200 220" className="absolute inset-0 h-full w-full" role="img"
                aria-label={`Pose overlay of a person doing bodyweight squats, seen from the ${camera}`}>
                <line x1={16} x2={184} y1={204} y2={204} stroke={PALETTE.border} strokeWidth={1.5} />
                {fig.bones.map(([a, b, faint], i) => (
                  <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={PALETTE.accent} strokeWidth={3.2} strokeLinecap="round" opacity={faint ? 0.4 : 1} />
                ))}
                {fig.dots.map((dot, i) => (
                  <circle key={i} cx={dot.p[0]} cy={dot.p[1]} r={dot.hot ? 3.6 : 2.6} fill={dot.hot ? C.warn : "#ffffff"} stroke={C.onAccent} strokeWidth={1.2} opacity={dot.faint ? 0.45 : 1} />
                ))}
              </svg>
            </div>
            <span className="absolute left-2.5 top-2.5 rounded-md px-2 py-0.5 text-xs tabular-nums" style={{ background: "rgba(0,0,0,0.7)", color: PALETTE.muted }}>
              Cam {camera === "side" ? "1 · side" : "2 · front"}
            </span>
            <div role="group" aria-label="Camera" className="absolute right-2.5 top-2.5 flex gap-1.5">
              {(["side", "front"] as const).map((c) => (
                <button key={c} type="button" aria-pressed={camera === c} onClick={() => setCamera(c)} className={`${chip} capitalize ${FOCUS}`}
                  style={camera === c ? { background: PALETTE.accent, borderColor: PALETTE.accent, color: C.onAccent } : { background: C.panel2, borderColor: PALETTE.border, color: PALETTE.text }}>
                  {c}
                </button>
              ))}
              <span className={`${chip} border-dashed`} style={{ borderColor: PALETTE.border, color: PALETTE.muted }}>
                Cam 3<span className="sr-only"> slot available</span>
              </span>
            </div>
            <p className="shrink-0 px-2.5 pb-1.5 pt-1 text-[11px] leading-4" style={{ color: PALETTE.muted }}>
              Video stays on your home network. It is never uploaded.
            </p>
          </section>

          <div className="flex shrink-0 flex-col gap-2.5 border-t p-3 @lg:w-[42%] @lg:border-l @lg:border-t-0" style={{ background: PALETTE.chrome, borderColor: PALETTE.border }}>
            <div className="flex items-center gap-4 @lg:flex-col @lg:items-stretch">
              <div className="flex shrink-0 items-baseline gap-1.5" aria-live="polite" aria-atomic="true">
                <span className="text-5xl font-bold leading-none tabular-nums @lg:text-6xl" style={{ color: PALETTE.accent }}>{reps}</span>
                <span style={{ color: PALETTE.muted }}>of {TARGET_REPS} reps</span>
              </div>
              <Meter depth={depth} />
            </div>

            <div className="min-h-[48px] rounded-xl px-3 py-2" style={{ background: C.panel2 }} aria-live="polite">
              {done ? (
                <>
                  <p className="font-semibold" style={{ color: C.ok }}>{TARGET_REPS} reps · all to depth</p>
                  <p className="text-xs" style={{ color: PALETTE.muted }}>
                    {noReps > 0 ? `${noReps} shallow ${noReps === 1 ? "rep was" : "reps were"} not counted.` : "Every rep reached the target depth."}
                  </p>
                </>
              ) : (
                <>
                  <p className="flex items-center gap-2 font-medium">
                    <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: toneColor }} aria-hidden="true" />
                    <span style={{ color: cue.tone === "idle" ? PALETTE.text : toneColor }}>{cue.text}</span>
                  </p>
                  {noRepNote && <p className="mt-0.5 text-xs" style={{ color: C.warn }}>No rep: stopped above the target depth</p>}
                </>
              )}
            </div>

            <div className="flex flex-col gap-2 @lg:mt-auto">
              <div role="group" aria-label="Form" className="grid grid-cols-2 gap-1 rounded-xl p-1" style={{ background: C.panel2 }}>
                {([["good", "Good form", C.ok], ["mistake", "Common mistake", C.warn]] as const).map(([f, text, dot]) => (
                  <button key={f} type="button" aria-pressed={form === f} onClick={() => setForm(f)}
                    className={`flex items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium ${FOCUS}`}
                    style={form === f ? { background: PALETTE.border, color: PALETTE.text } : { color: PALETTE.muted }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} aria-hidden="true" />
                    {text}
                  </button>
                ))}
              </div>
              <span className="relative flex">
                {!used && !reduce && (
                  <motion.span aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-xl border-2" style={{ borderColor: PALETTE.accent }}
                    animate={{ opacity: [0.7, 0], scale: [1, 1.05] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }} />
                )}
                <button type="button" onClick={primary}
                  className={`relative flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 font-semibold hover:opacity-90 ${FOCUS}`}
                  style={{ background: PALETTE.accent, color: C.onAccent }}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </DemoShell>
  )
}
