"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { BookOpen, ChevronDown, X } from "lucide-react"
import { DemoShell } from "@/components/tools/demo-shell"

type VerseKey = "rom8_28" | "rom8_29" | "gen50_20"
type Label = "explicit" | "inferred" | "disputed"

interface Claim {
  label: Label
  text: string
  refs: VerseKey[]
}

const C = {
  surface: "#FFFFFF",
  accentMuted: "#C7B28A",
  success: "#3F6B4A",
  warning: "#8A6A12",
  danger: "#A8452F",
}

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--demo-accent)]"

// King James Version, public domain. Quoted exactly.
const VERSES: Record<VerseKey, { short: string; full: string; text: string }> = {
  rom8_28: {
    short: "Rom 8:28",
    full: "Romans 8:28",
    text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
  },
  rom8_29: {
    short: "Rom 8:29",
    full: "Romans 8:29",
    text: "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren.",
  },
  gen50_20: {
    short: "Gen 50:20",
    full: "Genesis 50:20",
    text: "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.",
  },
}

const LABELS: Record<Label, { name: string; color: string }> = {
  explicit: { name: "Explicit", color: C.success },
  inferred: { name: "Inferred", color: C.warning },
  disputed: { name: "Disputed", color: C.danger },
}

const QUESTION = "Does Romans 8:28 mean everything happens for a reason?"

// Quotations inside claims follow the KJV wording so they match the drawer.
const CLAIMS: Claim[] = [
  {
    label: "explicit",
    text: "The verse says all things work together for good “to them that love God”, those “called according to his purpose”. The promise is addressed to a particular group, not stated as a general rule.",
    refs: ["rom8_28"],
  },
  {
    label: "explicit",
    text: "The next verse names the good in view: to be “conformed to the image of his Son”.",
    refs: ["rom8_29"],
  },
  {
    label: "inferred",
    text: "So the passage is about God bringing good out of events, not a claim that every event is itself good. Joseph says something similar of his brothers’ betrayal.",
    refs: ["rom8_28", "gen50_20"],
  },
  {
    label: "disputed",
    text: "How God’s purpose here relates to human freedom, especially the words “foreknow” and “predestinate”, is read differently across traditions.",
    refs: ["rom8_29"],
  },
]

// Listed side by side and never ranked: the real app does not pick a winner.
const TRADITIONS = [
  {
    name: "Reformed",
    reading: "Reads “foreknow” as God’s prior, personal choosing of people, so predestination rests on his decision alone.",
  },
  {
    name: "Wesleyan-Arminian",
    reading: "Reads “foreknow” as God knowing in advance who would freely respond in faith, with predestination following from that.",
  },
  {
    name: "Catholic",
    reading: "Holds that God’s grace always comes first, and that human freedom truly cooperates with it rather than being overridden.",
  },
]

type Phase = "idle" | "reading" | "answering"

/**
 * Simulates the Emmaus "ask" flow: the tutor answers claim by claim, each
 * claim carrying an epistemic label and the verses it rests on, with verse
 * text one tap away and disputed points shown across traditions.
 */
export default function EmmausDemo() {
  const reduce = useReducedMotion() === true
  const [phase, setPhase] = React.useState<Phase>("idle")
  const [shown, setShown] = React.useState(0)
  const [verse, setVerse] = React.useState<VerseKey | null>(null)
  const [traditionsOpen, setTraditionsOpen] = React.useState(false)
  const [used, setUsed] = React.useState(false)
  const timers = React.useRef<number[]>([])
  const scrollBox = React.useRef<HTMLDivElement>(null)
  // The verse button that opened the drawer. Closing the drawer unmounts its
  // close button, so focus goes back here instead of falling to the page body.
  const lastRefBtn = React.useRef<HTMLButtonElement | null>(null)

  const closeVerse = () => {
    setVerse(null)
    lastRefBtn.current?.focus()
  }

  const clearTimers = React.useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }, [])

  React.useEffect(() => clearTimers, [clearTimers])

  // Scroll only the conversation column, never the page around the demo.
  React.useEffect(() => {
    const box = scrollBox.current
    const last = box?.querySelector<HTMLElement>(`[data-claim="${shown - 1}"]`)
    if (!box || !last) return
    const delta = last.getBoundingClientRect().bottom - box.getBoundingClientRect().bottom
    if (delta > 0) box.scrollTo({ top: box.scrollTop + delta + 8, behavior: reduce ? "auto" : "smooth" })
  }, [shown, reduce])

  const ask = () => {
    clearTimers()
    setUsed(true)
    setVerse(null)
    setTraditionsOpen(false)
    if (reduce) {
      setPhase("answering")
      setShown(CLAIMS.length)
      return
    }
    setPhase("reading")
    setShown(0)
    timers.current.push(window.setTimeout(() => setPhase("answering"), 700))
    CLAIMS.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setShown(i + 1), 700 + i * 350))
    })
  }

  const reset = () => {
    clearTimers()
    setPhase("idle")
    setShown(0)
    setVerse(null)
    setTraditionsOpen(false)
    setUsed(false)
    scrollBox.current?.scrollTo({ top: 0 })
  }

  const open = verse ? VERSES[verse] : null

  return (
    <DemoShell
      variant="browser"
      title="Emmaus"
      address="emmaus — ask"
      palette={{
        bg: "#FAF7F0",
        chrome: C.surface,
        border: "#E4DFD3",
        text: "#1E1B16",
        muted: "#5C5648",
        accent: "#8A6D3B",
      }}
      hint="Tap the highlighted question, then a verse reference."
      onReset={reset}
    >
      <div className="@container flex h-full flex-col">
        <div className="shrink-0 border-b px-4 pb-3 pt-3" style={{ borderColor: "var(--demo-border)" }}>
          <h2 className="font-serif text-base">Ask about a passage</h2>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="relative inline-flex">
              {!used && !reduce && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-1 rounded-full border-2"
                  style={{ borderColor: "var(--demo-accent)" }}
                  animate={{ opacity: [0.7, 0], scale: [1, 1.06] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <button
                type="button"
                onClick={ask}
                className={`relative rounded-full px-3 py-1.5 text-left text-xs font-medium leading-snug transition-opacity hover:opacity-90 ${FOCUS}`}
                style={
                  phase === "idle"
                    ? { background: "var(--demo-accent)", color: C.surface }
                    : { background: C.surface, color: "var(--demo-accent)", boxShadow: `inset 0 0 0 1px ${C.accentMuted}` }
                }
              >
                {QUESTION}
              </button>
            </span>
            <span
              className="rounded-full border border-dashed px-3 py-1.5 text-xs"
              style={{ borderColor: "var(--demo-border)", color: "var(--demo-muted)" }}
            >
              More in the real app
            </span>
          </div>
        </div>

        <div ref={scrollBox} className="min-h-0 flex-1 overflow-y-auto px-4 py-3" aria-live="polite">
          {phase === "idle" ? (
            <p className="mt-6 text-center font-serif text-sm italic" style={{ color: "var(--demo-muted)" }}>
              Each claim in the answer will show the verses behind it, or say that it has none.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              <p
                className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 text-sm"
                style={{ background: "#F1EADB", color: "var(--demo-text)" }}
              >
                {QUESTION}
              </p>
              {phase === "reading" ? (
                <p className="flex items-center gap-2 text-xs" style={{ color: "var(--demo-muted)" }}>
                  <BookOpen className="h-3.5 w-3.5 motion-safe:animate-pulse" aria-hidden="true" />
                  Reading Romans 8…
                </p>
              ) : (
                <ol className="flex flex-col gap-3">
                  {CLAIMS.slice(0, shown).map((claim, i) => (
                    <motion.li
                      key={i}
                      data-claim={i}
                      initial={reduce ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-lg border px-3 py-2.5"
                      style={{ background: C.surface, borderColor: "var(--demo-border)" }}
                    >
                      <p className="font-serif text-[15px] leading-relaxed">{claim.text}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span
                          className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          style={{ color: LABELS[claim.label].color, background: `${LABELS[claim.label].color}14` }}
                        >
                          {LABELS[claim.label].name}
                        </span>
                        {claim.refs.map((ref) => (
                          <button
                            key={ref}
                            type="button"
                            onClick={(e) => {
                              lastRefBtn.current = e.currentTarget
                              setVerse(verse === ref ? null : ref)
                            }}
                            aria-pressed={verse === ref}
                            aria-label={`Read ${VERSES[ref].full}`}
                            className={`rounded-full border px-2 py-0.5 text-xs transition-colors ${FOCUS}`}
                            style={
                              verse === ref
                                ? { background: "var(--demo-accent)", borderColor: "var(--demo-accent)", color: C.surface }
                                : { borderColor: C.accentMuted, color: "var(--demo-accent)" }
                            }
                          >
                            {VERSES[ref].short}
                          </button>
                        ))}
                      </div>
                      {claim.label === "disputed" && (
                        <div className="mt-2">
                          <button
                            type="button"
                            onClick={() => setTraditionsOpen((v) => !v)}
                            aria-expanded={traditionsOpen}
                            aria-controls="emmaus-traditions"
                            className={`flex items-center gap-1 rounded text-xs font-medium underline-offset-2 hover:underline ${FOCUS}`}
                            style={{ color: "var(--demo-accent)" }}
                          >
                            See how traditions read this
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform ${traditionsOpen ? "rotate-180" : ""}`}
                              aria-hidden="true"
                            />
                          </button>
                          {traditionsOpen && (
                            <div id="emmaus-traditions" className="mt-2">
                              <ul className="grid grid-cols-1 gap-2 @lg:grid-cols-3">
                                {TRADITIONS.map((t) => (
                                  <li
                                    key={t.name}
                                    className="rounded-md border px-2 py-1.5"
                                    style={{ borderColor: "var(--demo-border)", background: "var(--demo-bg)" }}
                                  >
                                    <p className="text-xs font-semibold">{t.name}</p>
                                    <p className="mt-0.5 text-xs leading-snug" style={{ color: "var(--demo-muted)" }}>
                                      {t.reading}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                              <p className="mt-2 text-xs italic" style={{ color: "var(--demo-muted)" }}>
                                Emmaus shows the readings. It doesn&rsquo;t pick one for you.
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ol>
              )}
            </div>
          )}
        </div>

        <div className="shrink-0" aria-live="polite">
          {open && (
            <div
              className="max-h-36 overflow-y-auto border-t px-4 py-2.5"
              style={{ background: C.surface, borderColor: "var(--demo-border)" }}
            >
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold">{open.full}</p>
                <span
                  className="rounded px-1 text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--demo-muted)", boxShadow: "inset 0 0 0 1px var(--demo-border)" }}
                >
                  KJV
                </span>
                <button
                  type="button"
                  onClick={closeVerse}
                  aria-label="Close verse"
                  className={`ml-auto rounded p-1 ${FOCUS}`}
                  style={{ color: "var(--demo-muted)" }}
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
              <p className="mt-1 font-serif text-sm leading-relaxed">{open.text}</p>
            </div>
          )}
        </div>

        <p
          className="shrink-0 border-t px-4 py-2 text-[11px]"
          style={{ borderColor: "var(--demo-border)", color: "var(--demo-muted)" }}
        >
          A tutor, not an oracle. Claims show their sources, and unsupported ones are marked.
        </p>
      </div>
    </DemoShell>
  )
}
