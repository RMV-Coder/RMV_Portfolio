"use client"

import * as React from "react"
import { LayoutGroup, MotionConfig, motion, useReducedMotion } from "framer-motion"
import { Archive, ChevronDown, Moon, Search, Volume2 } from "lucide-react"
import { DemoShell } from "@/components/tools/demo-shell"

type TabState = "open" | "sleeping" | "archived"
type Filter = "all" | TabState

interface Tab {
  id: string
  title: string
  host: string
  dot: string
  state: TabState
  /** Whether the page is held in memory. Where a tab sits in the sidebar is a separate matter. */
  loaded: boolean
  /** Recency rank: higher means used more recently. */
  used: number
  audio?: boolean
}

// Measured in the real app (v0.1.0 memory benchmark): the empty browser holds about 255 MB, and an
// unloaded tab frees about 34 MB. Moving a tab to Sleeping without unloading it frees nothing.
const BASE_MB = 255
const MB_PER_TAB = 34
const SCALE_MB = 600
const STEP_MS = 250
const TIDY_COUNT = 5

const PALETTE = { bg: "#0F1012", chrome: "#17181B", border: "#26282D", text: "#E7E9EC", muted: "#8B9099", accent: "#9DB4D6" }
const C = { sidebar: "#131417", sleeping: "#B9A26A", archived: "#8E97A4", success: "#86C9A1" }
const FOCUS = "outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color:var(--demo-accent)]"

// Open tabs start loaded; archived ones start unloaded.
const INITIAL_TABS: Tab[] = ([
  { id: "kyoto", title: "Kyoto in four days: an unhurried itinerary", host: "kyoto.example", dot: "#C8645C", state: "open", used: 10 },
  { id: "report", title: "Quarterly report — Docs", host: "docs.example", dot: "#6A8FD8", state: "open", used: 9 },
  { id: "flight", title: "Flight to Cebu — Skyline Air", host: "skyline.example", dot: "#5AA8B2", state: "open", used: 8 },
  { id: "mix", title: "Rainy day focus mix", host: "tunebox.example", dot: "#9A82C4", state: "open", used: 1, audio: true },
  { id: "sourdough", title: "Sourdough starter guide", host: "sourdough.example", dot: "#C99055", state: "open", used: 5 },
  { id: "trail", title: "Trail running for beginners", host: "trails.example", dot: "#62A57C", state: "open", used: 3 },
  { id: "ramen", title: "Weeknight miso ramen", host: "ramen.example", dot: "#C9A646", state: "open", used: 4 },
  { id: "budget", title: "Household budget 2026", host: "budget.example", dot: "#7380C8", state: "open", used: 2 },
  { id: "film", title: "Film photography: exposure notes for overcast days", host: "filmphoto.example", dot: "#A878B8", state: "archived", used: 0 },
  { id: "plant", title: "What to plant in November", host: "garden.example", dot: "#7FA867", state: "archived", used: 0 },
] satisfies Omit<Tab, "loaded">[]).map((t) => ({ ...t, loaded: t.state === "open" }))

const BADGE: Record<TabState, { label: string; color: string; Icon: typeof Moon | null }> = {
  open: { label: "Open", color: PALETTE.accent, Icon: null },
  sleeping: { label: "Sleeping", color: C.sleeping, Icon: Moon },
  archived: { label: "Archived", color: C.archived, Icon: Archive },
}

const memoryFor = (loadedCount: number) => BASE_MB + MB_PER_TAB * loadedCount
const tabsWord = (n: number) => `${n} tab${n === 1 ? "" : "s"}`

/** Tabs the last Tidy up moved to Sleeping, and which of them it had to unload (the rest were already unloaded). */
interface TidyResult {
  ids: string[]
  unloaded: string[]
}

const tidyReport = (moved: number, unloaded: number, mb: number) =>
  unloaded === moved
    ? `${tabsWord(moved)} unloaded and moved to Sleeping. Memory in use is now ${mb} MB.`
    : unloaded === 0
      ? `${tabsWord(moved)} moved to Sleeping. ${moved === 1 ? "It was" : "They were"} already unloaded, so memory in use stays at ${mb} MB.`
      : `${tabsWord(moved)} moved to Sleeping, ${unloaded} of them unloaded just now. Memory in use is now ${mb} MB.`

/** Eases the displayed number toward `target` so freed memory reads as a count-down, not a jump. */
function useTweenedNumber(target: number, instant: boolean) {
  const [value, setValue] = React.useState(target)
  const current = React.useRef(target)
  React.useEffect(() => {
    const from = current.current
    let frame = 0
    let start = 0
    const step = (now: number) => {
      if (!start) start = now
      const p = instant ? 1 : Math.min((now - start) / 500, 1)
      current.current = Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3)))
      setValue(current.current)
      if (p < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, instant])
  return value
}

function Highlight({ text, query }: { text: string; query: string }) {
  const i = query ? text.toLowerCase().indexOf(query) : -1
  if (i < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded-sm" style={{ background: "rgba(157,180,214,0.25)", color: "inherit" }}>{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  )
}

function StateBadge({ state }: { state: TabState }) {
  const { label, color, Icon } = BADGE[state]
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[11px]" style={{ color, borderColor: color + "55" }}>
      {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
      {label}
    </span>
  )
}

/** Simulates Veltriva's memory palette: one search box across open, sleeping and archived pages. */
function MemoryPalette({ tabs, onPick, onClose }: { tabs: Tab[]; onPick: (id: string) => void; onClose: () => void }) {
  const [query, setQuery] = React.useState("")
  const [filter, setFilter] = React.useState<Filter>("all")
  const [cursor, setCursor] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const dialogRef = React.useRef<HTMLDivElement>(null)
  const listId = React.useId()
  React.useEffect(() => inputRef.current?.focus(), [])

  const q = query.trim().toLowerCase()
  const results = tabs.filter((t) => (filter === "all" || t.state === filter) && t.title.toLowerCase().includes(q))
  const active = Math.min(cursor, Math.max(results.length - 1, 0))
  const optionId = (id: string) => `${listId}-opt-${id}`
  const activeOptionId = results[active] ? optionId(results[active].id) : undefined

  // Keep the highlighted result in view as the arrow keys move it.
  React.useEffect(() => {
    if (activeOptionId) document.getElementById(activeOptionId)?.scrollIntoView({ block: "nearest" })
  }, [activeOptionId])

  // The dialog is modal: Tab and Shift+Tab cycle through its controls instead of leaving it.
  const trapTab = (e: React.KeyboardEvent) => {
    const items = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("input, button") ?? [])
    if (items.length === 0) return
    const first = items[0]
    const last = items[items.length - 1]
    const current = document.activeElement
    if (!items.some((el) => el === current)) { e.preventDefault(); (e.shiftKey ? last : first).focus() }
    else if (e.shiftKey && current === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && current === last) { e.preventDefault(); first.focus() }
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose()
    else if (e.key === "Tab") trapTab(e)
    else if (e.key === "ArrowDown") { e.preventDefault(); setCursor(Math.min(active + 1, results.length - 1)) }
    else if (e.key === "ArrowUp") { e.preventDefault(); setCursor(Math.max(active - 1, 0)) }
    else if (e.key === "Enter" && e.target === inputRef.current && results[active]) onPick(results[active].id)
  }

  return (
    <div className="absolute inset-0 z-20 flex items-start justify-center p-3 pt-5" onKeyDown={onKeyDown}>
      <div className="absolute inset-0" style={{ background: "rgba(8,9,10,0.62)" }} onClick={onClose} aria-hidden="true" />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-label="Memory palette" tabIndex={-1} className="relative flex max-h-full w-full max-w-[460px] flex-col overflow-hidden rounded-lg border shadow-2xl shadow-black/60 outline-none" style={{ background: PALETTE.chrome, borderColor: PALETTE.border }}>
        <label className="flex items-center gap-2 border-b px-3 py-2.5" style={{ borderColor: PALETTE.border }}>
          <Search className="h-4 w-4 shrink-0" style={{ color: PALETTE.muted }} aria-hidden="true" />
          <span className="sr-only">Search memory</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setCursor(0) }}
            placeholder='Try "film"'
            role="combobox"
            aria-expanded="true"
            aria-autocomplete="list"
            aria-controls={listId}
            aria-activedescendant={activeOptionId}
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#8B9099]"
          />
          <kbd className="hidden text-[11px] sm:inline" style={{ color: PALETTE.muted }}>Esc</kbd>
        </label>
        <div className="flex flex-wrap gap-1.5 px-3 py-2" role="group" aria-label="Filter by state">
          {(["all", "open", "sleeping", "archived"] as const).map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => { setFilter(f); setCursor(0) }}
              className={`rounded-full border px-2.5 py-0.5 text-xs capitalize ${FOCUS}`}
              style={filter === f ? { background: PALETTE.text, color: PALETTE.bg, borderColor: PALETTE.text } : { borderColor: PALETTE.border, color: PALETTE.muted }}>
              {f}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{results.length} {results.length === 1 ? "result" : "results"}</p>
        {results.length === 0 && <p className="px-3 py-4 text-xs" style={{ color: PALETTE.muted }}>No page matches that. Try another word.</p>}
        {/* Focus stays in the search box; aria-activedescendant tells screen readers which option Enter opens. */}
        <ul id={listId} role="listbox" aria-label="Results" className="min-h-0 flex-1 overflow-y-auto px-1.5 pb-1.5">
          {results.map((t, i) => (
            <li key={t.id} id={optionId(t.id)} role="option" aria-selected={i === active}
              onClick={() => onPick(t.id)} onMouseEnter={() => setCursor(i)} onMouseDown={(e) => e.preventDefault()}
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-left"
              style={{ background: i === active ? PALETTE.border : "transparent" }}>
              <span className="h-2.5 w-2.5 shrink-0 rounded-[3px]" style={{ background: t.dot }} aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px]"><Highlight text={t.title} query={q} /></span>
                <span className="block truncate text-[11px]" style={{ color: PALETTE.muted }}>{t.host}</span>
              </span>
              <StateBadge state={t.state} />
            </li>
          ))}
        </ul>
        <p className="border-t px-3 py-1.5 text-[11px]" style={{ borderColor: PALETTE.border, color: PALETTE.muted }}>Enter brings it back as an open tab</p>
      </div>
    </div>
  )
}

function Meter({ shownMb, loadedCount, freed, compact }: { shownMb: number; loadedCount: number; freed: number; compact?: boolean }) {
  const bar = (
    <div className="h-1.5 overflow-hidden rounded-full" style={{ background: PALETTE.border }}>
      <div className="h-full rounded-full" style={{ width: `${Math.min(shownMb / SCALE_MB, 1) * 100}%`, background: PALETTE.accent }} />
    </div>
  )
  if (compact) {
    return (
      <div className="border-b px-3 py-2 sm:hidden" style={{ borderColor: PALETTE.border }}>
        <div className="mb-1.5 flex justify-between text-xs"><span style={{ color: PALETTE.muted }}>Memory in use</span><span className="tabular-nums">{shownMb} MB</span></div>
        {bar}
      </div>
    )
  }
  return (
    <div className="rounded-lg border p-3.5" style={{ background: PALETTE.chrome, borderColor: PALETTE.border }}>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs" style={{ color: PALETTE.muted }}>Memory in use</span>
        {freed > 0 && <span className="text-xs tabular-nums" style={{ color: C.success }}>{freed} MB freed</span>}
      </div>
      <p className="mb-2.5 mt-0.5 text-3xl font-semibold tabular-nums tracking-tight">{shownMb}<span className="ml-1 text-base font-normal" style={{ color: PALETTE.muted }}>MB</span></p>
      {bar}
      <p className="mt-2 text-[11px] leading-snug" style={{ color: PALETTE.muted }}>{tabsWord(loadedCount)} loaded at about {MB_PER_TAB} MB each. Unloading a tab gives that back. Moving it to Sleeping alone frees nothing.</p>
    </div>
  )
}

/**
 * Miniature of Veltriva Browser. "Tidy up" does in one step what the app's automation does over time:
 * the least-recently-used tabs (skipping one playing audio) are unloaded and moved to Sleeping. The
 * memory meter follows unloading, not the move, at 34 MB per tab. A tab loads again when it is
 * selected. The memory palette finds any page — open, sleeping or archived — and brings it back.
 */
export default function VeltrivaDemo() {
  const reduce = useReducedMotion() ?? false
  const [tabs, setTabs] = React.useState(INITIAL_TABS)
  const [activeId, setActiveId] = React.useState("kyoto")
  const [tidying, setTidying] = React.useState(false)
  const [tidiedOnce, setTidiedOnce] = React.useState(false)
  const [toast, setToast] = React.useState<TidyResult | null>(null)
  const [audioNote, setAudioNote] = React.useState(false)
  const [sleepOpen, setSleepOpen] = React.useState(true)
  const [paletteOpen, setPaletteOpen] = React.useState(false)
  const [status, setStatus] = React.useState("")
  const timers = React.useRef<number[]>([])
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const returnFocus = React.useRef(false)
  /** Tabs a running Tidy up still means to put to sleep. Waking one mid-tidy takes it off this list. */
  const pending = React.useRef<string[]>([])
  /** The latest committed tabs, for the tidy timers, which outlive the render that started them. */
  const tabsRef = React.useRef(tabs)
  const tidyRef = React.useRef<HTMLButtonElement>(null)
  const undoRef = React.useRef<HTMLButtonElement>(null)
  const rowRefs = React.useRef(new Map<string, HTMLButtonElement>())
  /** Where keyboard focus goes after the next render: "tidy", "undo", or a tab id for its row button. */
  const focusNext = React.useRef<string | null>(null)

  const openCount = tabs.filter((t) => t.state === "open").length
  const loadedCount = tabs.filter((t) => t.loaded).length
  const shownMb = useTweenedNumber(memoryFor(loadedCount), reduce)
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0]

  React.useEffect(() => { tabsRef.current = tabs }, [tabs])

  // The Tidy up and Undo buttons replace each other, and a woken row moves to another list, so each
  // remounts. Put focus on the new element so a keyboard user is not dropped at the top of the page.
  React.useLayoutEffect(() => {
    const target = focusNext.current
    if (!target) return
    const el = target === "tidy" ? tidyRef.current : target === "undo" ? undoRef.current : rowRefs.current.get(target)
    if (el) {
      focusNext.current = null
      el.focus()
    }
  })

  const clearTimers = React.useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }, [])
  React.useEffect(() => clearTimers, [clearTimers])

  // The trigger sits under an inert layer while the palette is open, so focus can only return after it re-renders.
  React.useEffect(() => {
    if (!paletteOpen && returnFocus.current) {
      returnFocus.current = false
      triggerRef.current?.focus()
    }
  }, [paletteOpen])

  /** Unloads open tabs and moves them to Sleeping. */
  const sleepTabs = (ids: string[]) =>
    setTabs((prev) => prev.map((t): Tab => (ids.includes(t.id) && t.state === "open" ? { ...t, state: "sleeping", loaded: false } : t)))

  const tidyUp = () => {
    if (tidying) return
    const ids = tabs
      .filter((t) => t.state === "open" && t.id !== activeId && !t.audio)
      .sort((a, b) => a.used - b.used)
      .slice(0, TIDY_COUNT)
      .map((t) => t.id)
    setTidiedOnce(true)
    setToast(null)
    setAudioNote(tabs.some((t) => t.audio && t.state === "open"))
    if (ids.length === 0) {
      setStatus("Nothing to tidy. Every open tab is in use.")
      return
    }
    pending.current = ids
    // After an Undo, some of these may already be unloaded: moving them frees nothing, so only the
    // loaded ones count toward the memory freed. Only waking a tab changes this, and that drops it from pending.
    const loadedIds = ids.filter((id) => tabs.some((t) => t.id === id && t.loaded))
    // Reports only the tabs that actually went to sleep, and the memory as it is when the tidy ends.
    const finish = (loadedAfter: number) => {
      const slept = pending.current
      pending.current = []
      setTidying(false)
      if (slept.length === 0) return
      const unloaded = slept.filter((id) => loadedIds.includes(id))
      if (document.activeElement === tidyRef.current) focusNext.current = "undo"
      setToast({ ids: slept, unloaded })
      setStatus(tidyReport(slept.length, unloaded.length, memoryFor(loadedAfter)))
    }
    if (reduce) {
      sleepTabs(ids)
      finish(tabs.filter((t) => t.loaded && !ids.includes(t.id)).length)
      return
    }
    setTidying(true)
    ids.forEach((id, i) =>
      timers.current.push(window.setTimeout(() => { if (pending.current.includes(id)) sleepTabs([id]) }, i * STEP_MS)),
    )
    timers.current.push(window.setTimeout(() => finish(tabsRef.current.filter((t) => t.loaded).length), ids.length * STEP_MS))
  }

  // Undo only moves the tabs back; like the real app, each stays unloaded until it is selected.
  const undo = () => {
    if (!toast) return
    setTabs((prev) => prev.map((t): Tab => (toast.ids.includes(t.id) && t.state === "sleeping" ? { ...t, state: "open" } : t)))
    if (document.activeElement === undoRef.current) focusNext.current = "tidy"
    setToast(null)
    setAudioNote(false)
    setStatus(`Undone. ${tabsWord(toast.ids.length)} back in the open list. Each loads again when you select it.`)
  }

  const bringBack = (id: string) => {
    const tab = tabs.find((t) => t.id === id)
    pending.current = pending.current.filter((x) => x !== id)
    setToast((prev) => {
      const ids = prev?.ids.filter((x) => x !== id) ?? []
      return prev && ids.length ? { ids, unloaded: prev.unloaded.filter((x) => x !== id) } : null
    })
    setTabs((prev) => {
      const next = Math.max(...prev.map((t) => t.used)) + 1
      return prev.map((t): Tab => (t.id === id ? { ...t, state: "open", loaded: true, used: next } : t))
    })
    setActiveId(id)
    if (tab && tab.state !== "open") setStatus(`${tab.title} is open again.`)
    else if (tab && !tab.loaded) setStatus(`${tab.title} is loaded again.`)
  }

  const openPalette = () => setPaletteOpen(true)
  const closePalette = () => { returnFocus.current = true; setPaletteOpen(false) }

  const reset = () => {
    clearTimers()
    pending.current = []
    focusNext.current = null
    setTabs(INITIAL_TABS)
    setActiveId("kyoto")
    setTidying(false)
    setTidiedOnce(false)
    setToast(null)
    setAudioNote(false)
    setSleepOpen(true)
    setPaletteOpen(false)
    setStatus("Demo reset to eight open tabs.")
  }

  const row = (t: Tab) => {
    const isActive = t.state === "open" && t.id === activeId
    const base = t.state === "sleeping" ? `Wake ${t.title}` : t.state === "archived" ? `Restore ${t.title}` : t.title
    const unloadedOpen = t.state === "open" && !t.loaded
    const label = t.audio ? `${base}, playing audio` : unloadedOpen ? `${base}, unloaded` : base
    return (
      <motion.li key={t.id} layoutId={t.id} layout="position" transition={{ type: "spring", stiffness: 420, damping: 38 }}>
        <button type="button" onClick={() => { focusNext.current = t.id; bringBack(t.id) }} aria-label={label} aria-current={isActive ? "page" : undefined}
          ref={(el) => {
            if (!el) return
            rowRefs.current.set(t.id, el)
            return () => { if (rowRefs.current.get(t.id) === el) rowRefs.current.delete(t.id) }
          }}
          className={`relative flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left transition-colors hover:bg-[#1C1E22] ${FOCUS}`}
          style={{ background: isActive ? PALETTE.border : undefined, opacity: t.state === "open" ? 1 : 0.62 }}>
          {isActive && <span className="absolute inset-y-1.5 left-0 w-0.5 rounded-full" style={{ background: PALETTE.accent }} aria-hidden="true" />}
          <span className="h-2.5 w-2.5 shrink-0 rounded-[3px]" style={{ background: t.dot }} aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block truncate">{t.title}</span>
            {t.audio && audioNote && t.state === "open" && <span className="block text-[11px]" style={{ color: PALETTE.muted }}>left alone — playing audio</span>}
            {unloadedOpen && <span className="block text-[11px]" style={{ color: PALETTE.muted }}>unloaded — loads when selected</span>}
          </span>
          {t.audio && <Volume2 className="h-3.5 w-3.5 shrink-0" style={{ color: PALETTE.muted }} aria-hidden="true" />}
          {t.state === "sleeping" && <Moon className="h-3.5 w-3.5 shrink-0" style={{ color: C.sleeping }} aria-hidden="true" />}
        </button>
      </motion.li>
    )
  }

  const heading = "px-2.5 pb-1 pt-3 text-[11px] font-medium uppercase tracking-wide"
  const sleeping = tabs.filter((t) => t.state === "sleeping")
  const archived = tabs.filter((t) => t.state === "archived")

  return (
    <DemoShell variant="browser" title="Veltriva" address={active.host} palette={PALETTE} hint="Press Tidy up, then search memory for film" onReset={reset}>
      <MotionConfig reducedMotion="user">
        <div className="relative h-full text-[13px]"
          onKeyDown={(e) => { if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "k") { e.preventDefault(); openPalette() } }}>
          <div className="flex h-full" inert={paletteOpen}>
            <aside className="flex h-full w-full min-w-0 flex-col border-r sm:w-[44%] sm:shrink-0" style={{ background: C.sidebar, borderColor: PALETTE.border }}>
              <div className="p-2">
                <button ref={triggerRef} type="button" onClick={openPalette}
                  className={`flex w-full items-center gap-2 rounded-md border px-2.5 py-1.5 text-left ${FOCUS}`} style={{ borderColor: PALETTE.border, color: PALETTE.muted }}>
                  <Search className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="flex-1 truncate">Search memory</span>
                  <kbd className="hidden text-[10px] lg:inline">Ctrl+Shift+K</kbd>
                </button>
              </div>
              <Meter shownMb={shownMb} loadedCount={loadedCount} freed={0} compact />
              <LayoutGroup>
                <div className="min-h-0 flex-1 overflow-y-auto px-1.5 pb-2">
                  <p className={heading} style={{ color: PALETTE.muted }}>Open · {openCount}</p>
                  <ul>{tabs.filter((t) => t.state === "open").map(row)}</ul>
                  <button type="button" onClick={() => setSleepOpen((v) => !v)} aria-expanded={sleepOpen}
                    className={`flex w-full items-center gap-1 rounded ${heading} ${FOCUS}`} style={{ color: PALETTE.muted }}>
                    <ChevronDown className={`h-3 w-3 transition-transform ${sleepOpen ? "" : "-rotate-90"}`} aria-hidden="true" />
                    Sleeping · {sleeping.length}
                  </button>
                  {sleepOpen && (sleeping.length ? <ul>{sleeping.map(row)}</ul> : <p className="px-2.5 py-1 text-xs" style={{ color: PALETTE.muted }}>Nothing asleep yet</p>)}
                  <p className={heading} style={{ color: PALETTE.muted }}>Archive · {archived.length}</p>
                  <ul>{archived.map(row)}</ul>
                </div>
              </LayoutGroup>
              {/* Not a live region: the sr-only status below already announces every outcome. */}
              <div className="border-t p-2" style={{ borderColor: PALETTE.border }}>
                {toast ? (
                  <div className="flex items-center justify-between gap-2 rounded-md px-2.5 py-2" style={{ background: PALETTE.chrome }}>
                    <span>{tabsWord(toast.ids.length)} {toast.unloaded.length === toast.ids.length ? "unloaded, moved" : "moved"} to Sleeping</span>
                    <button ref={undoRef} type="button" onClick={undo} className={`rounded px-1.5 font-medium ${FOCUS}`} style={{ color: PALETTE.accent }}>Undo</button>
                  </div>
                ) : (
                  // aria-disabled rather than disabled, so a keyboard user's focus stays on the button while it works.
                  <button ref={tidyRef} type="button" onClick={tidyUp} aria-disabled={tidying || undefined}
                    className="relative flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 font-medium outline-none aria-disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--demo-accent)]"
                    style={{ background: PALETTE.accent, color: PALETTE.bg }}>
                    {!tidiedOnce && !reduce && (
                      <motion.span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md" style={{ boxShadow: `0 0 0 2px ${PALETTE.accent}` }}
                        animate={{ opacity: [0.7, 0], scale: [1, 1.08] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }} />
                    )}
                    <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                    {tidying ? "Tidying…" : "Tidy up"}
                  </button>
                )}
              </div>
            </aside>
            <section className="hidden min-w-0 flex-1 flex-col sm:flex" aria-label="Page">
              <div className="flex items-center gap-2 border-b px-4 py-2.5 text-xs" style={{ borderColor: PALETTE.border, color: PALETTE.muted }}>
                <span className="h-3 w-3 rounded-[3px]" style={{ background: active.dot }} aria-hidden="true" />
                {active.host}
              </div>
              <div className="min-h-0 flex-1 overflow-hidden px-4 py-4">
                <h3 className="font-serif text-lg font-semibold leading-snug">{active.title}</h3>
                <div className="mt-3 space-y-2" aria-hidden="true">
                  {[94, 100, 86, 58].map((w) => <div key={w} className="h-1.5 rounded-full" style={{ width: `${w}%`, background: PALETTE.border }} />)}
                </div>
              </div>
              <div className="p-3">
                <Meter shownMb={shownMb} loadedCount={loadedCount} freed={toast ? toast.unloaded.length * MB_PER_TAB : 0} />
              </div>
            </section>
          </div>
          {paletteOpen && <MemoryPalette tabs={tabs} onPick={(id) => { bringBack(id); closePalette() }} onClose={closePalette} />}
          <p className="sr-only" aria-live="polite">{status}</p>
        </div>
      </MotionConfig>
    </DemoShell>
  )
}
