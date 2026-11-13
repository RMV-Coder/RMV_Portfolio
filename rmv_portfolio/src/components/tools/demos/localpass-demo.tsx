"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowLeft, Check, Cloud, Copy, Dices, Eye, EyeOff, Landmark, Lock, Mail, RefreshCw, Vault, Wifi,
  type LucideIcon,
} from "lucide-react"
import { DemoShell } from "@/components/tools/demo-shell"

// The real app's dark theme, so the demo looks like LocalPass rather than the portfolio.
const C = {
  bg: "#121211", list: "#171716", pane: "#1C1C1A", border: "#2D2C29", text: "#EDEBE5",
  muted: "#9A978F", accent: "#E2B457", sel: "#3A2F17", ok: "#74D39A", warn: "#FF9E5E", ink: "#1A1917",
}
const PALETTE = { bg: C.bg, chrome: C.list, border: C.border, text: C.text, muted: C.muted, accent: C.accent }
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2B457]"

interface Item {
  id: string; name: string; kind: string; userLabel: string; user: string
  secret: string; site?: string; totp: boolean; icon: LucideIcon
}

const ITEMS: Item[] = [
  { id: "bank", name: "Acme Bank", kind: "Login", userLabel: "Username", user: "maya@example.com", secret: "tidal-Copper-48-lantern", site: "acmebank.example.com", totp: true, icon: Landmark },
  { id: "studio", name: "Studio email", kind: "Login", userLabel: "Username", user: "maya@studio.example.com", secret: "Quill!rain7-Harbor", site: "mail.studio.example.com", totp: true, icon: Mail },
  { id: "cloud", name: "Cloud console", kind: "Login", userLabel: "Username", user: "maya.ortiz@example.com", secret: "8vN#plume-Orbit-21", site: "console.cloud.example.com", totp: true, icon: Cloud },
  { id: "wifi", name: "Wi-Fi — office", kind: "Wi-Fi", userLabel: "Network", user: "Example-Office", secret: "maple-seventeen-quiet", totp: false, icon: Wifi },
]

// Fixed opening values keep the server and client renders identical; randomness only starts in handlers.
const INITIAL_CODES: Record<string, string> = { bank: "482913", studio: "905127", cloud: "360448" }
const INITIAL_PASSWORD = "Kn37Q&6k3nvpySAiaR@4"
// The same character sets as the app's generator: letters and digits always, symbols optional.
const ALNUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const SYMBOLS = "!@#$%^&*()-_=+[]{};:,.?"
// The app puts a revealed value back behind the mask after 30 seconds.
const REVEAL_SECONDS = 30
const RING = 2 * Math.PI * 9

function randomInts(count: number, max: number): number[] {
  const buf = new Uint32Array(count)
  crypto.getRandomValues(buf)
  return Array.from(buf, (v) => v % max)
}

function newCodes(): Record<string, string> {
  const out: Record<string, string> = {}
  for (const item of ITEMS) if (item.totp) out[item.id] = randomInts(6, 10).join("")
  return out
}

function charset(symbols: boolean): string {
  return ALNUM + (symbols ? SYMBOLS : "")
}

function generatePassword(length: number, symbols: boolean): string {
  const set = charset(symbols)
  return randomInts(length, set.length).map((i) => set[i]).join("")
}

/** The app's strength bands: 128 bits and up is Excellent, 80 Strong, 60 Fair, anything less Weak. */
function strength(length: number, symbols: boolean) {
  const bits = length * Math.log2(charset(symbols).length)
  const pct = Math.min(1, bits / 128)
  const word = bits >= 128 ? "Excellent" : bits >= 80 ? "Strong" : bits >= 60 ? "Fair" : "Weak"
  return { bits, pct, color: bits >= 80 ? C.ok : C.warn, word }
}

/** The LocalPass mark: a keyhole on a brass tile. It turns a quarter on unlock, like a key in a cylinder. */
function Mark({ size, turned = false, still = false }: { size: number; turned?: boolean; still?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
      <rect width="100" height="100" rx="23" fill="#D4A24C" />
      <g
        fill={C.ink}
        style={{
          transformBox: "view-box", transformOrigin: "46px 41px",
          transform: turned ? "rotate(-90deg)" : "none",
          transition: still ? "none" : "transform 520ms cubic-bezier(0.3, 0.7, 0.2, 1)",
        }}
      >
        <circle cx="46" cy="41" r="13.5" />
        <path d="M40.5 41V71.2a2.8 2.8 0 0 0 2.8 2.8H64.7a2.8 2.8 0 0 0 2.8-2.8V65.8a2.8 2.8 0 0 0-2.8-2.8H51.5V41z" />
      </g>
    </svg>
  )
}

function Switch({ label, note, on, onToggle }: { label: string; note: string; on: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 border-t py-3" style={{ borderColor: C.border }}>
      <div className="min-w-0">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs" style={{ color: C.muted }}>{note}</p>
      </div>
      <button type="button" role="switch" aria-checked={on} aria-label={label} onClick={onToggle}
        className={`relative h-6 w-10 shrink-0 rounded-full transition-colors ${FOCUS}`}
        style={{ background: on ? C.accent : C.border }}>
        <span className="absolute top-1 h-4 w-4 rounded-full bg-[#EDEBE5] transition-[left] motion-reduce:transition-none"
          style={{ left: on ? 20 : 4 }} />
      </button>
    </div>
  )
}

/**
 * Simulates LocalPass, a local-only password manager: unlocking the encrypted
 * vault, revealing a password that re-masks itself, a copy that would clear the
 * clipboard after 30 s, rotating two-factor (TOTP) codes, and the generator.
 */
export default function LocalPassDemo() {
  const reduced = useReducedMotion() ?? false
  const pwId = React.useId()
  const lenId = React.useId()
  const [phase, setPhase] = React.useState<"locked" | "unlocking" | "open">("locked")
  const [hasUnlocked, setHasUnlocked] = React.useState(false)
  const [view, setView] = React.useState<"vault" | "generator">("vault")
  const [selectedId, setSelectedId] = React.useState("bank")
  const [showDetail, setShowDetail] = React.useState(false)
  const [revealLeft, setRevealLeft] = React.useState(0)
  const [copied, setCopied] = React.useState(0)
  const [codes, setCodes] = React.useState(INITIAL_CODES)
  const [secondsLeft, setSecondsLeft] = React.useState(30)
  const [length, setLength] = React.useState(20)
  const [symbols, setSymbols] = React.useState(true)
  const [generated, setGenerated] = React.useState(INITIAL_PASSWORD)
  // Counts Regenerate presses, so only that button (not every slider step) is announced.
  const [regenerations, setRegenerations] = React.useState(0)

  // Unlock, Lock, opening an item and "All items" each remove or hide the control
  // that has focus. Handlers name where focus should land; the effect below moves
  // it there once that element has rendered.
  const pendingFocus = React.useRef<"vault" | "unlock" | "detail" | "item" | null>(null)
  const unlockRef = React.useRef<HTMLButtonElement>(null)
  const vaultNavRef = React.useRef<HTMLButtonElement>(null)
  const backRef = React.useRef<HTMLButtonElement>(null)
  const itemRefs = React.useRef(new Map<string, HTMLButtonElement>())

  React.useEffect(() => {
    const target = pendingFocus.current
    if (!target) return
    const el =
      target === "vault" ? vaultNavRef.current
      : target === "unlock" ? unlockRef.current
      : target === "detail" ? backRef.current
      : itemRefs.current.get(selectedId) ?? null
    // Not rendered yet: the vault only appears after the unlock animation.
    if (!el) return
    pendingFocus.current = null
    // "All items" only shows below the sm breakpoint. On wider screens the list
    // stays visible and the item that was pressed keeps focus.
    if (el.getClientRects().length > 0) el.focus()
  })

  React.useEffect(() => {
    if (phase !== "unlocking") return
    const t = window.setTimeout(() => setPhase("open"), reduced ? 0 : 600)
    return () => window.clearTimeout(t)
  }, [phase, reduced])

  // One shared 30-second window, like real TOTP: every code rolls over at the same moment.
  React.useEffect(() => {
    if (phase !== "open") return
    let left = 30
    const id = window.setInterval(() => {
      left = left <= 1 ? 30 : left - 1
      if (left === 30) setCodes(newCodes())
      setSecondsLeft(left)
    }, 1000)
    return () => window.clearInterval(id)
  }, [phase])

  React.useEffect(() => {
    if (revealLeft <= 0) return
    const t = window.setTimeout(() => setRevealLeft((s) => s - 1), 1000)
    return () => window.clearTimeout(t)
  }, [revealLeft])

  React.useEffect(() => {
    if (!copied) return
    const t = window.setTimeout(() => setCopied(0), 2500)
    return () => window.clearTimeout(t)
  }, [copied])

  // Reset is in the window frame and stays put, so focus stays on it.
  const reset = () => {
    pendingFocus.current = null
    setPhase("locked"); setHasUnlocked(false); setView("vault"); setSelectedId("bank")
    setShowDetail(false); setRevealLeft(0); setCopied(0); setCodes(INITIAL_CODES); setSecondsLeft(30)
    setLength(20); setSymbols(true); setGenerated(INITIAL_PASSWORD); setRegenerations(0)
  }
  const lock = () => {
    pendingFocus.current = "unlock"
    setPhase("locked"); setRevealLeft(0); setCopied(0); setShowDetail(false)
  }
  const unlock = () => {
    if (phase !== "locked") return
    pendingFocus.current = "vault"
    setHasUnlocked(true); setSecondsLeft(30); setPhase("unlocking")
  }
  const select = (id: string) => {
    pendingFocus.current = "detail"
    setSelectedId(id); setShowDetail(true); setRevealLeft(0); setCopied(0)
  }
  const showList = () => { pendingFocus.current = "item"; setShowDetail(false) }
  const regenerate = (len = length, sym = symbols) => setGenerated(generatePassword(len, sym))

  const item = ITEMS.find((i) => i.id === selectedId) ?? ITEMS[0]
  const code = codes[item.id] ?? "000000"
  const s = strength(length, symbols)
  const navBtn = (active: boolean) =>
    `flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors ${FOCUS} ${active ? "" : "hover:bg-[#1C1C1A]"}`

  return (
    <DemoShell variant="app" title="LocalPass" palette={PALETTE} hint="Try it: unlock the vault, then reveal a password" onReset={reset}>
      {phase !== "open" ? (
        <div className="flex h-full flex-col items-center justify-center gap-5 px-6" style={{ background: C.bg }}>
          <Mark size={56} turned={phase === "unlocking"} still={reduced} />
          <div className="text-center" aria-live="polite">
            <p className="text-base font-semibold">{phase === "unlocking" ? "Unlocking" : "Vault locked"}</p>
            <p className="mt-1 text-xs" style={{ color: C.muted }}>Personal vault, encrypted on this device</p>
          </div>
          <form className="flex w-full max-w-64 flex-col gap-2" onSubmit={(e) => { e.preventDefault(); unlock() }}>
            <label htmlFor={pwId} className="text-xs" style={{ color: C.muted }}>Master password</label>
            <input id={pwId} type="password" readOnly value="demo-master-key" autoComplete="off"
              className={`h-9 rounded-md border px-3 font-mono text-sm ${FOCUS}`}
              style={{ background: C.pane, borderColor: C.border, color: C.text }} />
            <div className="relative mt-1">
              {!hasUnlocked && !reduced && (
                <motion.span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md"
                  animate={{ boxShadow: ["0 0 0 0 rgba(226,180,87,0.45)", "0 0 0 8px rgba(226,180,87,0)"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} />
              )}
              {/* aria-disabled rather than disabled: a disabled button drops focus to the page body while the vault opens. unlock() ignores repeat presses. */}
              <button ref={unlockRef} type="submit" aria-disabled={phase === "unlocking"}
                className={`relative h-9 w-full rounded-md text-sm font-semibold transition-opacity hover:opacity-90 aria-disabled:opacity-70 ${FOCUS}`}
                style={{ background: C.accent, color: C.ink }}>
                Unlock
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex h-full" style={{ background: C.bg }}>
          <nav aria-label="LocalPass sections" className="flex w-12 shrink-0 flex-col gap-1 border-r p-1.5 sm:w-32 sm:p-2" style={{ borderColor: C.border }}>
            <div className="mb-2 flex items-center gap-2 px-1.5 py-1">
              <Mark size={22} still />
              <span className="hidden text-sm font-semibold sm:inline">LocalPass</span>
            </div>
            {([["vault", "Vault", Vault], ["generator", "Generator", Dices]] as const).map(([key, label, Icon]) => (
              <button key={key} ref={key === "vault" ? vaultNavRef : undefined} type="button" aria-label={label} aria-current={view === key ? "page" : undefined}
                onClick={() => { setView(key); if (key === "generator") regenerate() }}
                className={navBtn(view === key)} style={{ background: view === key ? C.sel : undefined }}>
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" style={{ color: view === key ? C.accent : C.muted }} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
            <button type="button" aria-label="Lock vault" onClick={lock} className={`mt-auto ${navBtn(false)}`} style={{ color: C.muted }}>
              <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Lock</span>
            </button>
          </nav>

          {view === "vault" ? (
            <>
              <section aria-label="Items" className={`${showDetail ? "hidden" : "flex"} min-w-0 flex-1 flex-col border-r sm:flex sm:w-44 sm:flex-none`} style={{ background: C.list, borderColor: C.border }}>
                <div className="flex items-baseline justify-between px-3 pb-2 pt-3">
                  <h3 className="text-sm font-semibold">Personal</h3>
                  <span className="text-xs" style={{ color: C.muted }}>{ITEMS.length} items</span>
                </div>
                <ul className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-1.5">
                  {ITEMS.map((it) => {
                    const active = it.id === selectedId
                    return (
                      <li key={it.id}>
                        <button type="button" onClick={() => select(it.id)} aria-current={active ? "true" : undefined}
                          ref={(el) => {
                            if (!el) return
                            itemRefs.current.set(it.id, el)
                            return () => { itemRefs.current.delete(it.id) }
                          }}
                          className={`flex w-full items-center gap-2.5 rounded-md px-2 py-2 text-left ${FOCUS} ${active ? "" : "hover:bg-[#1C1C1A]"}`}
                          style={{ background: active ? C.sel : undefined }}>
                          <it.icon className="h-4 w-4 shrink-0" aria-hidden="true" style={{ color: active ? C.accent : C.muted }} />
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium">{it.name}</span>
                            <span className="block truncate text-xs" style={{ color: C.muted }}>{it.kind}{it.totp ? " · 2FA" : ""}</span>
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
                <p className="flex items-center gap-1.5 border-t px-3 py-2.5 text-[11px] leading-tight" style={{ color: C.muted, borderColor: C.border }}>
                  <Lock className="h-3 w-3 shrink-0" aria-hidden="true" />
                  Stored only on this device. No cloud.
                </p>
              </section>

              <section aria-label={`${item.name} details`} className={`${showDetail ? "flex" : "hidden"} min-w-0 flex-1 flex-col overflow-y-auto px-4 py-3 sm:flex`} style={{ background: C.pane }}>
                <button ref={backRef} type="button" onClick={showList} className={`mb-2 flex items-center gap-1.5 self-start rounded text-xs sm:hidden ${FOCUS}`} style={{ color: C.muted }}>
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> All items
                </button>
                <div className="flex items-center gap-3 pb-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg" style={{ background: C.border }}>
                    <item.icon className="h-4 w-4" aria-hidden="true" style={{ color: C.accent }} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold">{item.name}</h3>
                    <p className="text-xs" style={{ color: C.muted }}>{item.kind}</p>
                  </div>
                </div>

                <div className="border-t py-2.5" style={{ borderColor: C.border }}>
                  <p className="text-xs" style={{ color: C.muted }}>{item.userLabel}</p>
                  <p className="truncate font-mono text-sm">{item.user}</p>
                </div>

                <div className="border-t py-2.5" style={{ borderColor: C.border }}>
                  <p className="text-xs" style={{ color: C.muted }}>Password</p>
                  <div className="flex items-center gap-2">
                    <p className="min-w-0 flex-1 truncate font-mono text-sm" aria-live="polite">
                      {revealLeft > 0 ? item.secret : (
                        <><span aria-hidden="true">••••••••••</span><span className="sr-only">Hidden</span></>
                      )}
                    </p>
                    <button type="button" onClick={() => setRevealLeft(revealLeft > 0 ? 0 : REVEAL_SECONDS)}
                      className={`flex items-center gap-1 rounded-md border px-2 py-1 text-xs ${FOCUS}`} style={{ borderColor: C.border }}>
                      {revealLeft > 0 ? <EyeOff className="h-3.5 w-3.5" aria-hidden="true" /> : <Eye className="h-3.5 w-3.5" aria-hidden="true" />}
                      {revealLeft > 0 ? "Hide" : "Reveal"}
                    </button>
                    <button type="button" onClick={() => setCopied((c) => c + 1)}
                      className={`flex items-center gap-1 rounded-md border px-2 py-1 text-xs ${FOCUS}`} style={{ borderColor: C.border }}>
                      {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" style={{ color: C.ok }} /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                      Copy
                    </button>
                  </div>
                  <div className="mt-1.5 h-4 text-[11px]" aria-live="polite" style={{ color: C.muted }}>
                    {copied ? <span style={{ color: C.ok }}>Copied — clears in 30s</span>
                      : revealLeft > 0 ? (
                        <span className="flex items-center gap-2">
                          <span className="h-0.5 w-16 overflow-hidden rounded-full" style={{ background: C.border }}>
                            {reduced ? (
                              <span className="block h-full" style={{ width: `${(revealLeft / REVEAL_SECONDS) * 100}%`, background: C.accent }} />
                            ) : (
                              // Starts from the time left, so it still matches the countdown when it remounts after "Copied".
                              <motion.span className="block h-full" style={{ background: C.accent }}
                                initial={{ width: `${(revealLeft / REVEAL_SECONDS) * 100}%` }}
                                animate={{ width: "0%" }} transition={{ duration: revealLeft, ease: "linear" }} />
                            )}
                          </span>
                          {/* The seconds change every second; screen readers get one fixed line instead.
                              It has no number because it is read again when it returns after "Copied". */}
                          <span aria-hidden="true">Hides in {revealLeft}s</span>
                          <span className="sr-only">Hides again on its own</span>
                        </span>
                      ) : null}
                  </div>
                </div>

                {item.site && (
                  <div className="border-t py-2.5" style={{ borderColor: C.border }}>
                    <p className="text-xs" style={{ color: C.muted }}>Website</p>
                    <p className="truncate font-mono text-sm">https://{item.site}</p>
                  </div>
                )}

                {item.totp && (
                  <div className="border-t py-2.5" style={{ borderColor: C.border }}>
                    <p className="text-xs" style={{ color: C.muted }}>Two-factor code</p>
                    <div className="flex items-center gap-3">
                      <p className="font-mono text-2xl tracking-wider" aria-live="polite" style={{ color: C.accent }}>
                        {code.slice(0, 3)} {code.slice(3)}
                      </p>
                      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="-rotate-90">
                        <circle cx="11" cy="11" r="9" fill="none" stroke={C.border} strokeWidth="2.5" />
                        <circle cx="11" cy="11" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round"
                          stroke={secondsLeft <= 5 ? C.warn : C.accent} strokeDasharray={RING}
                          strokeDashoffset={RING * (1 - secondsLeft / 30)}
                          style={{ transition: secondsLeft < 30 && !reduced ? "stroke-dashoffset 1s linear" : "none" }} />
                      </svg>
                      <span className="font-mono text-xs tabular-nums" style={{ color: secondsLeft <= 5 ? C.warn : C.muted }}>{secondsLeft}s</span>
                    </div>
                  </div>
                )}
              </section>
            </>
          ) : (
            <section aria-label="Password generator" className="min-w-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5" style={{ background: C.pane }}>
              <h3 className="mb-3 text-base font-semibold">Generator</h3>
              <div className="flex items-start gap-2 rounded-lg border p-3" style={{ borderColor: C.border, background: C.bg }}>
                <p className="min-w-0 flex-1 break-all font-mono text-base leading-snug sm:text-lg">{generated}</p>
                <button type="button" onClick={() => { regenerate(); setRegenerations((n) => n + 1) }}
                  className={`flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-1 text-xs ${FOCUS}`} style={{ borderColor: C.border }}>
                  <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" /> Regenerate
                </button>
              </div>
              {/* Announces Regenerate presses only; the slider and switch already report their own values.
                  The key swaps in a new node on every press, so a repeat press is announced again. */}
              <p className="sr-only" aria-live="polite">
                {regenerations > 0 && <span key={regenerations}>New password generated</span>}
              </p>
              <div className="mt-3 h-1 overflow-hidden rounded-full" style={{ background: C.border }}>
                <div className="h-full rounded-full transition-[width] motion-reduce:transition-none" style={{ width: `${s.pct * 100}%`, background: s.color }} />
              </div>
              <p className="mt-1.5 text-xs" style={{ color: C.muted }}>
                <span style={{ color: s.color }}>{s.word}</span> · {s.bits.toFixed(1)} bits of entropy
              </p>
              <div className="mt-4 flex items-center gap-3 border-t py-3" style={{ borderColor: C.border }}>
                <label htmlFor={lenId} className="text-sm font-medium">Length</label>
                <input id={lenId} type="range" min={8} max={64} value={length}
                  onChange={(e) => { const n = Number(e.target.value); setLength(n); regenerate(n) }}
                  className={`min-w-0 flex-1 accent-[#E2B457] ${FOCUS}`} />
                <span className="w-6 text-right font-mono text-sm tabular-nums">{length}</span>
              </div>
              <Switch label="Symbols" note="Some sites reject them." on={symbols}
                onToggle={() => { setSymbols(!symbols); regenerate(length, !symbols) }} />
            </section>
          )}
        </div>
      )}
    </DemoShell>
  )
}
