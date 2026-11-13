"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { DemoShell } from "@/components/tools/demo-shell"

type Upos = "DET" | "ADJ" | "NOUN" | "VERB" | "ADP" | "PRON"
type Rel = "det" | "amod" | "nsubj" | "root" | "case" | "obl" | "nmod:poss" | "iobj" | "obj"

interface Word {
  text: string
  upos: Upos
  /** 1-based index of the head word; 0 marks the root, as in CoNLL-U. */
  head: number
  rel: Rel
}

const C = {
  sheet: "#FFFFFF",
  ink: "#18233A",
  inkSoft: "#3A4660",
  graphite: "#5B6577",
  rule: "#D5DAE2",
  highlight: "#F5CF4A",
  highlightSoft: "#FBEAB0",
}

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--demo-accent)]"

const POS: Record<Upos, { name: string; color: string; about: string }> = {
  NOUN: { name: "noun", color: "#1F5FA8", about: "A noun names a person, place, thing or idea." },
  PRON: { name: "pronoun", color: "#1F5FA8", about: "A pronoun stands in for a noun, like she or her." },
  DET: { name: "determiner", color: "#1F5FA8", about: "A determiner, like the or a, introduces a noun." },
  VERB: { name: "verb", color: "#A23B24", about: "A verb names an action or a state." },
  ADJ: { name: "adjective", color: "#24663F", about: "An adjective describes a noun." },
  ADP: { name: "preposition", color: "#6B4FA0", about: "A preposition, like over or in, links a noun to the rest." },
}

const REL: Record<Rel, (head: string) => string> = {
  nsubj: (h) => `It is the subject of ‘${h}’: who or what does the action.`,
  obj: (h) => `It is the direct object of ‘${h}’: what the action is done to.`,
  iobj: (h) => `It is the indirect object of ‘${h}’: who receives it.`,
  det: (h) => `It is a determiner pointing at its noun, ‘${h}’.`,
  amod: (h) => `It is an adjective describing its noun, ‘${h}’.`,
  case: (h) => `It is a preposition marking how ‘${h}’ relates to the rest of the sentence.`,
  obl: (h) => `It is an oblique of ‘${h}’: an extra participant, usually introduced by a preposition.`,
  "nmod:poss": (h) => `It is the possessor of ‘${h}’: whose it is.`,
  root: () => "It is the root: the main word the rest of the sentence hangs from.",
}

// Hand-written example analyses in the Universal Dependencies format the real
// parser produces. They are not recorded parser output.
const SENTENCES: { label: string; words: Word[] }[] = [
  {
    label: "The quick fox jumps over the lazy dog",
    words: [
      { text: "The", upos: "DET", head: 3, rel: "det" },
      { text: "quick", upos: "ADJ", head: 3, rel: "amod" },
      { text: "fox", upos: "NOUN", head: 4, rel: "nsubj" },
      { text: "jumps", upos: "VERB", head: 0, rel: "root" },
      { text: "over", upos: "ADP", head: 8, rel: "case" },
      { text: "the", upos: "DET", head: 8, rel: "det" },
      { text: "lazy", upos: "ADJ", head: 8, rel: "amod" },
      { text: "dog", upos: "NOUN", head: 4, rel: "obl" },
    ],
  },
  {
    label: "She gave her brother a book",
    words: [
      { text: "She", upos: "PRON", head: 2, rel: "nsubj" },
      { text: "gave", upos: "VERB", head: 0, rel: "root" },
      { text: "her", upos: "PRON", head: 4, rel: "nmod:poss" },
      { text: "brother", upos: "NOUN", head: 2, rel: "iobj" },
      { text: "a", upos: "DET", head: 6, rel: "det" },
      { text: "book", upos: "NOUN", head: 2, rel: "obj" },
    ],
  },
]

const CHAR = 8.6
const GAP = 26
const PAD = 18
const TOP = 28

interface Arc {
  dep: number
  head: number
  rel: Rel
  h: number
}

function layout(words: Word[]) {
  const widths = words.map((w) => Math.max(w.text.length * CHAR, w.upos.length * 7.6))
  let cursor = PAD
  const xs = widths.map((w) => {
    const center = cursor + w / 2
    cursor += w + GAP
    return center
  })
  // Shorter arcs first so the draw-in reads from the inside out.
  const arcs: Arc[] = words
    .flatMap((w, i) =>
      w.head === 0 ? [] : [{ dep: i, head: w.head - 1, rel: w.rel, h: 20 + 20 * Math.abs(w.head - 1 - i) }],
    )
    .sort((a, b) => a.h - b.h)
  const baseY = TOP + Math.max(...arcs.map((a) => a.h)) * 0.75 + 6
  return { xs, widths, arcs, baseY, width: cursor - GAP + PAD, height: baseY + 42 }
}

/**
 * Simulates the SyntaxLab analyzer: an example Universal Dependencies parse is
 * drawn as a dependency diagram, and the inspector explains whichever word
 * the visitor points at in plain English.
 */
export default function SyntaxLabDemo() {
  const reduce = useReducedMotion() === true
  const [sentence, setSentence] = React.useState(0)
  const [analyzed, setAnalyzed] = React.useState(false)
  const [run, setRun] = React.useState(0)
  const [selected, setSelected] = React.useState<number | null>(null)
  const [focused, setFocused] = React.useState<number | null>(null)
  const [used, setUsed] = React.useState(false)

  const words = SENTENCES[sentence].words
  const g = React.useMemo(() => layout(words), [words])

  const analyze = () => {
    setUsed(true)
    setAnalyzed(true)
    setSelected(null)
    setRun((r) => r + 1)
  }

  const pick = (i: number) => {
    setSentence(i)
    setSelected(null)
    setRun((r) => r + 1)
  }

  const reset = () => {
    setSentence(0)
    setAnalyzed(false)
    setSelected(null)
    setFocused(null)
    setUsed(false)
  }

  const onKey = (i: number) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setSelected(i)
    }
  }

  const sel = selected === null ? null : words[selected]
  const headIdx = sel && sel.head > 0 ? sel.head - 1 : null
  const rootIdx = words.findIndex((w) => w.head === 0)

  return (
    <DemoShell
      variant="browser"
      title="SyntaxLab"
      address="syntaxlab — analyzer"
      palette={{ bg: "#F6F7F9", chrome: C.sheet, border: C.rule, text: C.ink, muted: C.graphite, accent: C.ink }}
      hint="Press Analyze, then tap or point at any word."
      onReset={reset}
    >
      <div className="flex h-full flex-col">
        <div className="flex shrink-0 items-start gap-2 border-b px-3 py-2.5" style={{ borderColor: C.rule }}>
          <div className="flex min-w-0 flex-1 flex-wrap gap-1.5" role="group" aria-label="Example sentences">
            {SENTENCES.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => pick(i)}
                aria-pressed={sentence === i}
                className={`rounded-md border px-2 py-1 text-left text-xs ${FOCUS}`}
                style={
                  sentence === i
                    ? { background: C.highlightSoft, borderColor: C.highlight, color: C.ink }
                    : { background: C.sheet, borderColor: C.rule, color: C.inkSoft }
                }
              >
                {s.label}
              </button>
            ))}
          </div>
          <span className="relative inline-flex shrink-0">
            {!used && !reduce && (
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1 rounded-lg border-2"
                style={{ borderColor: C.highlight }}
                animate={{ opacity: [0.9, 0], scale: [1, 1.1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <button
              type="button"
              onClick={analyze}
              className={`relative rounded-md px-3 py-1.5 text-xs font-semibold hover:opacity-90 ${FOCUS}`}
              style={{ background: C.ink, color: C.sheet }}
            >
              Analyze
            </button>
          </span>
        </div>

        {/* Auto margins (not items-center) centre the diagram: they collapse to 0
            when it overflows, so its top can always be scrolled to. */}
        <div className="flex min-h-0 flex-1 overflow-auto px-2">
          <svg
            viewBox={`0 0 ${g.width} ${g.height}`}
            className="mx-auto my-auto block h-auto"
            style={{ width: "100%", minWidth: g.width * 0.85, maxWidth: g.width * 1.35 }}
            role="group"
            aria-label={`Dependency diagram of: ${SENTENCES[sentence].label}`}
          >
            {analyzed && (
              <g key={`${sentence}-${run}`}>
                <motion.g initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
                  <line x1={g.xs[rootIdx]} y1={16} x2={g.xs[rootIdx]} y2={g.baseY - 1} stroke={C.inkSoft} strokeWidth={1.25} />
                  <path
                    d={`M${g.xs[rootIdx] - 3.5} ${g.baseY - 7} L${g.xs[rootIdx]} ${g.baseY} L${g.xs[rootIdx] + 3.5} ${g.baseY - 7}Z`}
                    fill={C.inkSoft}
                  />
                  <text x={g.xs[rootIdx]} y={11} textAnchor="middle" fontSize={10} fill={C.graphite}>
                    root
                  </text>
                </motion.g>
                {g.arcs.map((a, n) => {
                  const dir = a.dep > a.head ? 1 : -1
                  const sx = g.xs[a.head] + dir * 5
                  const ex = g.xs[a.dep]
                  const y = g.baseY
                  const active = selected !== null && (a.dep === selected || a.head === selected)
                  const delay = reduce ? 0 : n * 0.16
                  const lw = a.rel.length * 5.6 + 8
                  return (
                    <g key={`${a.dep}`}>
                      <motion.path
                        d={`M${sx} ${y} C${sx} ${y - a.h} ${ex} ${y - a.h} ${ex} ${y}`}
                        fill="none"
                        stroke={active ? C.ink : C.inkSoft}
                        strokeWidth={active ? 2.4 : 1.25}
                        initial={reduce ? false : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay }}
                      />
                      <motion.g
                        initial={reduce ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: delay + 0.3 }}
                      >
                        <path d={`M${ex - 3.5} ${y - 7} L${ex} ${y} L${ex + 3.5} ${y - 7}Z`} fill={active ? C.ink : C.inkSoft} />
                        <g
                          role="button"
                          tabIndex={0}
                          aria-label={`${a.rel}: from ${words[a.head].text} to ${words[a.dep].text}`}
                          onClick={() => setSelected(a.dep)}
                          onFocus={() => setSelected(a.dep)}
                          onKeyDown={onKey(a.dep)}
                          className="cursor-pointer outline-none"
                        >
                          <rect
                            x={(sx + ex) / 2 - lw / 2}
                            y={y - a.h * 0.75 - 7}
                            width={lw}
                            height={14}
                            rx={3}
                            fill={active ? C.highlightSoft : "#F6F7F9"}
                          />
                          <text x={(sx + ex) / 2} y={y - a.h * 0.75 + 3.5} textAnchor="middle" fontSize={10} fill={C.ink}>
                            {a.rel}
                          </text>
                        </g>
                      </motion.g>
                    </g>
                  )
                })}
              </g>
            )}

            {words.map((w, i) => {
              // The soft fill keeps the coloured word and tag readable; the ink
              // outline is what sets the selected word apart from its head.
              const fill = selected === i || headIdx === i ? C.highlightSoft : "transparent"
              const interactive = analyzed
                ? {
                    role: "button",
                    tabIndex: 0,
                    // Just the word: focusing it updates the inspector live
                    // region, which reads out the part of speech and relation.
                    "aria-label": w.text,
                    onMouseEnter: () => setSelected(i),
                    onClick: () => setSelected(i),
                    onFocus: () => {
                      setSelected(i)
                      setFocused(i)
                    },
                    onBlur: () => setFocused(null),
                    onKeyDown: onKey(i),
                  }
                : {}
              return (
                <g key={`${sentence}-${i}`} {...interactive} className={analyzed ? "cursor-pointer outline-none" : undefined}>
                  <rect
                    x={g.xs[i] - g.widths[i] / 2 - 5}
                    y={g.baseY + 2}
                    width={g.widths[i] + 10}
                    height={38}
                    rx={4}
                    fill={fill}
                    stroke={selected === i || focused === i ? C.ink : "none"}
                    strokeWidth={1.5}
                  />
                  <text
                    x={g.xs[i]}
                    y={g.baseY + 19}
                    textAnchor="middle"
                    fontSize={15}
                    fontWeight={500}
                    fill={analyzed ? POS[w.upos].color : C.graphite}
                  >
                    {w.text}
                  </text>
                  {analyzed && (
                    <motion.text
                      key={run}
                      x={g.xs[i]}
                      y={g.baseY + 34}
                      textAnchor="middle"
                      fontSize={10.5}
                      letterSpacing="0.08em"
                      fill={POS[w.upos].color}
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: reduce ? 0 : 0.2 + i * 0.05 }}
                    >
                      {w.upos}
                    </motion.text>
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        <div
          className="min-h-[92px] shrink-0 border-t px-3.5 py-2.5 text-sm"
          style={{ background: C.sheet, borderColor: C.rule }}
          aria-live="polite"
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: C.graphite }}>
            Inspector
          </p>
          {!analyzed ? (
            <p className="mt-1" style={{ color: C.inkSoft }}>
              Press Analyze to draw the structure of the sentence.
            </p>
          ) : sel === null ? (
            <p className="mt-1" style={{ color: C.inkSoft }}>
              Hover, tap or tab to a word to see what it does.
            </p>
          ) : (
            <>
              <p className="mt-1 leading-snug">
                <span className="font-semibold" style={{ color: POS[sel.upos].color }}>
                  {sel.text}
                </span>{" "}
                — {POS[sel.upos].name}. {REL[sel.rel](headIdx === null ? "" : words[headIdx].text)}
              </p>
              <p className="mt-1 text-xs" style={{ color: C.graphite }}>
                <span className="font-semibold tracking-wider">{sel.upos}</span> · {POS[sel.upos].about} Relation:{" "}
                <span className="font-mono">{sel.rel}</span>
              </p>
            </>
          )}
        </div>

        <p className="shrink-0 border-t px-3.5 py-1.5 text-[11px]" style={{ borderColor: C.rule, color: C.graphite }}>
          Example analyses in the real parser&apos;s format. The real tool uses a grammar parser, not a chatbot.
        </p>
      </div>
    </DemoShell>
  )
}
