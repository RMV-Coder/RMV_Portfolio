"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

/** A one-line install command with a copy button. */
export function CopyCommand({ label, command }: { label: string; command: string }) {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked: the command is selectable text, so it can still be copied by hand.
    }
  }

  return (
    <div>
      <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-1.5 pl-3">
        <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-foreground [scrollbar-width:none]">
          <span className="select-none text-primary">$ </span>
          {command}
        </code>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : `Copy the ${label} install command`}
          className="flex shrink-0 items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
        >
          {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  )
}
