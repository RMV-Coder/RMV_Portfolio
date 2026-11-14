"use client"

import * as React from "react"
import { DemoShell } from "@/components/tools/demo-shell"

/**
 * The live SyntaxLab analyzer, framed as it is deployed: no account is needed, so visitors use
 * the real thing and the exhibit can never fall behind it. SyntaxLab allows this site in its
 * frame-ancestors (apps/web/next.config.ts in the SyntaxLab repo). Keep LIVE_URL in step with
 * links.web in data/tools.ts.
 */
const LIVE_URL = "https://syntaxlab-nine.vercel.app"

const C = { sheet: "#FFFFFF", ink: "#18233A", graphite: "#5B6577", rule: "#D5DAE2" }
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--demo-accent)]"

export default function SyntaxLabDemo() {
  const [loaded, setLoaded] = React.useState(false)
  const [run, setRun] = React.useState(0)

  return (
    <DemoShell
      variant="browser"
      title="SyntaxLab"
      address={LIVE_URL.replace("https://", "")}
      palette={{ bg: "#F6F7F9", chrome: C.sheet, border: C.rule, text: C.ink, muted: C.graphite, accent: C.ink }}
      hint="The live site. Type a sentence and press Analyze."
      onReset={() => {
        setLoaded(false)
        setRun((n) => n + 1)
      }}
    >
      <iframe
        key={run}
        src={LIVE_URL}
        title="SyntaxLab, the live sentence analyzer"
        onLoad={() => setLoaded(true)}
        referrerPolicy="strict-origin-when-cross-origin"
        className="h-full w-full border-0"
        style={{ background: "#F6F7F9" }}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#F6F7F9" }}>
          <span className="font-mono text-xs motion-safe:animate-pulse" style={{ color: C.graphite }}>
            Opening SyntaxLab…
          </span>
        </div>
      )}
      <a
        href={LIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute bottom-3 right-3 rounded-md px-2.5 py-1 text-xs font-medium shadow ${FOCUS}`}
        style={{ background: C.ink, color: C.sheet }}
      >
        Open in a new tab
      </a>
    </DemoShell>
  )
}
