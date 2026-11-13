"use client"

import * as React from "react"
import { RotateCcw } from "lucide-react"

/**
 * The colours of the product being demonstrated — not the portfolio's. Each
 * demo wears its own app's skin, so a visitor sees what the real thing looks
 * like rather than a re-themed imitation.
 */
export interface DemoPalette {
  /** Window body background. */
  bg: string
  /** Title bar / chrome background. */
  chrome: string
  border: string
  text: string
  muted: string
  accent: string
}

interface DemoShellProps {
  /** `app` = desktop window, `browser` = address bar, `terminal` = console. */
  variant: "app" | "browser" | "terminal"
  /** Window title, or the tab title for `browser`. */
  title: string
  /**
   * The product's plain name, used to tell the Reset buttons apart for screen
   * readers ("Reset the LocalPass demo"). Defaults to the title up to any " — ".
   */
  name?: string
  /** `browser` only: the address shown in the URL field. */
  address?: string
  palette: DemoPalette
  /** One short line telling a first-time visitor what to try. */
  hint: string
  /** Restores the demo to its opening state. */
  onReset?: () => void
  children: React.ReactNode
  className?: string
}

/**
 * Window frame shared by every tool demo: title bar, a fixed-height stage, and
 * a caption underneath. The stage never grows, so a demo can change state
 * freely without pushing the page around.
 *
 * Demos read the palette through CSS variables (`--demo-bg`, `--demo-chrome`,
 * `--demo-border`, `--demo-text`, `--demo-muted`, `--demo-accent`).
 */
export function DemoShell({
  variant,
  title,
  name,
  address,
  palette,
  hint,
  onReset,
  children,
  className = "",
}: DemoShellProps) {
  const style = {
    "--demo-bg": palette.bg,
    "--demo-chrome": palette.chrome,
    "--demo-border": palette.border,
    "--demo-text": palette.text,
    "--demo-muted": palette.muted,
    "--demo-accent": palette.accent,
  } as React.CSSProperties
  // A terminal title such as "veyra — ~/projects/invoice-app" names the product before the dash.
  const productName = name ?? (title.split(" — ")[0].trim() || title)

  return (
    <figure className={`m-0 ${className}`} style={style}>
      <div
        className="flex h-[440px] flex-col overflow-hidden rounded-xl border shadow-2xl shadow-black/40 sm:h-[460px]"
        style={{
          background: "var(--demo-bg)",
          borderColor: "var(--demo-border)",
          color: "var(--demo-text)",
        }}
      >
        <div
          className="flex h-10 shrink-0 items-center gap-3 border-b px-3.5"
          style={{ background: "var(--demo-chrome)", borderColor: "var(--demo-border)" }}
        >
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--demo-border)" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--demo-border)" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--demo-border)" }} />
          </span>
          {variant === "browser" ? (
            <span
              className="min-w-0 flex-1 truncate rounded-md px-3 py-1 text-xs"
              style={{ background: "var(--demo-bg)", color: "var(--demo-muted)" }}
            >
              {address ?? title}
            </span>
          ) : (
            <span
              className={`min-w-0 flex-1 truncate text-xs ${variant === "terminal" ? "font-mono" : "font-medium"}`}
              style={{ color: "var(--demo-muted)" }}
            >
              {title}
            </span>
          )}
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              aria-label={`Reset the ${productName} demo`}
              className="flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: "var(--demo-muted)", outlineColor: "var(--demo-accent)" }}
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset
            </button>
          )}
        </div>

        {/* data-lenis-prevent: let lists inside a demo scroll on their own. */}
        <div className="relative min-h-0 flex-1 overflow-hidden" data-lenis-prevent>
          {children}
        </div>
      </div>
      <figcaption className="mt-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <span className="h-px w-6 bg-current opacity-50" aria-hidden="true" />
        {hint}
      </figcaption>
    </figure>
  )
}
