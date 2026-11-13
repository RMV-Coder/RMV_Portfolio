"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Check, FileCode, History, TriangleAlert, Undo2 } from "lucide-react"
import { DemoShell } from "@/components/tools/demo-shell"

// Veyra's terminal palette, so the demo looks like the real tool rather than the portfolio.
const C = {
  bg: "#0E0D0C", chrome: "#171513", border: "#2A2622", text: "#EDE6DA", muted: "#8F867A",
  accent: "#FF7A1A", ok: "#8FD694", danger: "#FF8F87", cyan: "#7FD6E8",
}
const PALETTE = { bg: C.bg, chrome: C.chrome, border: C.border, text: C.text, muted: C.muted, accent: C.accent }
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A1A]"
const TYPE_MS = 25

type Stage = "start" | "typing-reset" | "wiped" | "typing-undo" | "restored"
type Tone = "out" | "hint" | "file"
interface Block { cmd: string; comment?: string; out: { tone: Tone; text: string }[] }

// Wording taken verbatim from the Veyra README's signature example.
const RESET: Block = {
  cmd: "veyra reset --hard",
  comment: "# oops: four hours of uncommitted work",
  out: [
    { tone: "out", text: "HEAD is now at 3c15442 feat: totals" },
    { tone: "hint", text: "hint: local changes were checkpointed first; `veyra undo` brings them back" },
  ],
}
const UNDO: Block = {
  cmd: "veyra undo",
  out: [
    { tone: "out", text: "Undid reset 131f50e9 reset --hard to 3c15442" },
    { tone: "file", text: "total.ts" },
  ],
}

const CODE = [
  "export function total(items: Item[]) {",
  "  const subtotal = sum(items.map((i) => i.price))",
  "  const tax = round(subtotal * TAX_RATE)",
  "  const discount = applyCoupon(subtotal, code)",
  "  return subtotal + tax - discount",
  "}",
]

const JOURNAL = {
  checkpoint: { op: "checkpoint", note: "working files saved first", color: C.cyan },
  reset: { op: "reset --hard", note: "131f50e9", color: C.danger },
  undo: { op: "undo reset", note: "total.ts brought back", color: C.ok },
}

function Prompt() {
  return <span aria-hidden="true" style={{ color: C.accent }}>$ </span>
}

/**
 * Simulates Veyra's headline feature: every command is journaled and the
 * working tree is checkpointed before destructive ones, so `veyra undo` can
 * reverse even `reset --hard` and bring back uncommitted work.
 */
export default function VeyraDemo() {
  const reduced = useReducedMotion() ?? false
  const [stage, setStage] = React.useState<Stage>("start")
  const [typed, setTyped] = React.useState(0)
  const [started, setStarted] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const typingCmd = stage === "typing-reset" ? RESET.cmd : stage === "typing-undo" ? UNDO.cmd : null

  // Types one character per tick, then a short beat before the output lands, like a real command running.
  React.useEffect(() => {
    if (!typingCmd) return
    const done = typed >= typingCmd.length
    const t = window.setTimeout(() => {
      if (!done) { setTyped((n) => n + 1); return }
      setStage(stage === "typing-reset" ? "wiped" : "restored")
      setTyped(0)
    }, done ? (reduced ? 0 : 280) : TYPE_MS)
    return () => window.clearTimeout(t)
  }, [typingCmd, typed, stage, reduced])

  React.useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [stage, typed])

  const run = (next: "typing-reset" | "typing-undo") => {
    setStarted(true)
    setTyped(reduced ? (next === "typing-reset" ? RESET.cmd : UNDO.cmd).length : 0)
    setStage(next)
  }
  const act = () => {
    if (stage === "start" || stage === "restored") run("typing-reset")
    else if (stage === "wiped") run("typing-undo")
  }
  const reset = () => { setStage("start"); setTyped(0); setStarted(false) }

  const blocks = stage === "restored" ? [RESET, UNDO] : stage === "wiped" || stage === "typing-undo" ? [RESET] : []
  const wiped = stage === "wiped" || stage === "typing-undo"
  const restored = stage === "restored"
  const journal = restored
    ? [JOURNAL.undo, JOURNAL.reset, JOURNAL.checkpoint]
    : wiped ? [JOURNAL.reset, JOURNAL.checkpoint] : []
  const busy = typingCmd !== null
  const label = stage === "restored" ? "Replay" : stage === "start" || stage === "typing-reset" ? "Make the mistake" : "Undo it"
  const status = restored
    ? "Every command is journaled, so a mistake like this one can be undone."
    : wiped ? "Four hours of work, gone. Or is it?" : "Four hours of work, not yet saved to history."
  const accentButton = stage !== "restored"
  const cardTone = wiped ? C.danger : restored ? C.ok : C.border

  return (
    <DemoShell variant="terminal" name="Veyra" title="veyra — ~/projects/invoice-app" palette={PALETTE}
      hint="Try it: make the mistake, then undo it" onReset={reset}>
      <div className="flex h-full flex-col sm:flex-row">
        <div className="flex min-h-0 flex-1 flex-col sm:basis-3/5">
          <div ref={scrollRef} role="log" aria-live="polite" aria-label="Terminal"
            className="min-h-0 flex-1 overflow-y-auto px-3 py-3 font-mono text-[11.5px] leading-relaxed sm:text-xs">
            {blocks.map((b) => (
              <div key={b.cmd} className="mb-3">
                <p className="whitespace-pre-wrap break-words">
                  <Prompt />{b.cmd}
                  {b.comment && <span style={{ color: C.muted }}>{"  "}{b.comment}</span>}
                </p>
                {b.out.map((line) => (
                  <p key={line.text} className="whitespace-pre-wrap break-words"
                    style={{ color: line.tone === "hint" ? C.cyan : C.text }}>
                    {line.tone === "file" ? <><span style={{ color: C.muted }}>{"  file     "}</span>{line.text}</> : line.text}
                  </p>
                ))}
              </div>
            ))}
            {/* Hidden from screen readers so the log doesn't announce each typed character;
                the finished command and its output arrive as one block above. */}
            <p aria-hidden="true" className="whitespace-pre-wrap break-words">
              <Prompt />
              {typingCmd ? typingCmd.slice(0, typed) : ""}
              {busy || reduced ? (
                <span aria-hidden="true" className="inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em]" style={{ background: C.text }} />
              ) : (
                <motion.span aria-hidden="true" className="inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em]"
                  style={{ background: C.text }} animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1.05, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }} />
              )}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 border-t px-3 py-2.5" style={{ borderColor: C.border, background: C.chrome }}>
            <div className="relative shrink-0">
              {!started && !reduced && (
                <motion.span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md"
                  animate={{ boxShadow: ["0 0 0 0 rgba(255,122,26,0.5)", "0 0 0 8px rgba(255,122,26,0)"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} />
              )}
              {/* aria-disabled rather than disabled: a disabled button drops keyboard focus mid-command.
                  act() already ignores presses while a command is typing. */}
              <button type="button" onClick={act} aria-disabled={busy}
                className={`relative flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-semibold transition-opacity hover:opacity-90 aria-disabled:cursor-wait aria-disabled:opacity-60 ${FOCUS}`}
                style={accentButton
                  ? { background: C.accent, borderColor: C.accent, color: C.bg }
                  : { background: "transparent", borderColor: C.border, color: C.text }}>
                {label === "Undo it" && <Undo2 className="h-3.5 w-3.5" aria-hidden="true" />}
                {label === "Replay" && <History className="h-3.5 w-3.5" aria-hidden="true" />}
                {label}
              </button>
            </div>
            <p className="min-w-0 text-xs leading-snug" aria-live="polite" style={{ color: restored ? C.text : C.muted }}>
              {busy ? "Running…" : status}
            </p>
          </div>
        </div>

        <aside aria-label="Your work"
          className="flex h-[150px] shrink-0 flex-col gap-3 overflow-y-auto border-t p-3 sm:h-auto sm:basis-2/5 sm:border-l sm:border-t-0"
          style={{ background: C.chrome, borderColor: C.border }}>
          <p className="text-xs font-medium" style={{ color: C.muted }}>Your work</p>

          <motion.div className="rounded-lg border transition-colors duration-300"
            style={{ borderColor: cardTone, background: C.bg }}
            animate={wiped && !reduced ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
            transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-2 border-b px-2.5 py-2" style={{ borderColor: C.border }}>
              <FileCode className="h-3.5 w-3.5 shrink-0" aria-hidden="true" style={{ color: C.muted }} />
              <span className="font-mono text-xs">total.ts</span>
              <span aria-live="polite"
                className="ml-auto flex items-center gap-1 rounded px-1.5 py-0.5 text-[10.5px] font-semibold"
                style={wiped
                  ? { color: C.danger, background: "rgba(255,143,135,0.12)" }
                  : restored ? { color: C.ok, background: "rgba(143,214,148,0.12)" }
                    : { color: C.accent, background: "rgba(255,122,26,0.12)" }}>
                {wiped && <TriangleAlert className="h-3 w-3" aria-hidden="true" />}
                {restored && <Check className="h-3 w-3" aria-hidden="true" />}
                {wiped ? "Work wiped" : restored ? "Restored" : "4 hours of unsaved work"}
              </span>
            </div>
            <pre className="overflow-hidden px-2.5 py-2 font-mono text-[10.5px] leading-[1.6]" aria-hidden={wiped ? "true" : undefined}>
              {CODE.map((line, i) => (
                <span key={line} className={`block truncate transition-all duration-300 motion-reduce:transition-none ${i > 3 ? "hidden sm:block" : ""}`}
                  style={{
                    color: wiped ? C.danger : C.text,
                    opacity: wiped ? 0.35 : 1,
                    textDecoration: wiped ? "line-through" : "none",
                    transitionDelay: wiped && !reduced ? `${i * 60}ms` : "0ms",
                  }}>
                  {line}
                </span>
              ))}
            </pre>
          </motion.div>

          <div>
            <p className="mb-2 text-xs font-medium" style={{ color: C.muted }}>Journal</p>
            {journal.length === 0 ? (
              <p className="text-xs" style={{ color: C.muted }}>Nothing recorded yet.</p>
            ) : (
              <ol className="relative space-y-2.5 border-l pl-3" style={{ borderColor: C.border }} aria-live="polite">
                {journal.map((e) => (
                  <motion.li key={e.op} className="relative"
                    initial={reduced ? false : { opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}>
                    <span aria-hidden="true" className="absolute -left-[16.5px] top-1 h-2 w-2 rounded-full" style={{ background: e.color }} />
                    <p className="font-mono text-xs">{e.op}</p>
                    <p className="text-[11px]" style={{ color: C.muted }}>{e.note}</p>
                  </motion.li>
                ))}
              </ol>
            )}
          </div>
        </aside>
      </div>
    </DemoShell>
  )
}
