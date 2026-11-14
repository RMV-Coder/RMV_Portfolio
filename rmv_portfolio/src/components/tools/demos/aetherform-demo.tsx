"use client"

import * as React from "react"
import { ExternalLink, RotateCcw } from "lucide-react"

/**
 * The real AetherForm Android app, running in the page. AetherForm's own `npm run build:demo`
 * builds it from the app's source with sample data, and a sample video where the camera
 * would be; every release copies that build to public/demos/aetherform (scripts/publish-demo.mjs
 * in the AetherForm repo). Nothing here imitates the app, so the demo can't drift from it.
 */
export const AETHERFORM_HINT = "The real app with sample data. Open Log, then Count with camera."

const SRC = "/demos/aetherform/index.html"
/** The app is laid out for a phone this size, in CSS pixels; the frame shows it at SCALE. */
const PHONE = { width: 360, height: 740 }
const SCALE = 0.78

export default function AetherFormDemo() {
  const [loaded, setLoaded] = React.useState(false)
  const [run, setRun] = React.useState(0)
  const [version, setVersion] = React.useState<string | null>(null)

  React.useEffect(() => {
    let live = true
    fetch("/demos/aetherform/version.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((v: { version?: string } | null) => live && v?.version && setVersion(v.version))
      .catch(() => undefined)
    return () => {
      live = false
    }
  }, [])

  const restart = () => {
    setLoaded(false)
    setRun((n) => n + 1)
  }

  return (
    <figure className="m-0">
      <div className="flex justify-center">
        <div
          className="relative overflow-hidden rounded-[2.25rem] border-[6px] border-[#283041] bg-[#0f131a] shadow-2xl shadow-black/40"
          style={{ width: PHONE.width * SCALE + 12, height: PHONE.height * SCALE + 12 }}
          data-lenis-prevent
        >
          <iframe
            key={run}
            src={SRC}
            title="AetherForm, the Android app, running with sample data"
            onLoad={() => setLoaded(true)}
            className="absolute left-0 top-0 origin-top-left border-0"
            style={{ width: PHONE.width, height: PHONE.height, transform: `scale(${SCALE})` }}
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0f131a]">
              <span className="font-mono text-xs text-[#8e98a9] motion-safe:animate-pulse">Starting AetherForm…</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-4 font-mono text-xs text-muted-foreground">
        <span>{version ? `Version ${version}, as on the phone` : "Built from the app's source"}</span>
        <button type="button" onClick={restart} aria-label="Restart the AetherForm demo" className="inline-flex items-center gap-1.5 hover:text-foreground">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          Restart
        </button>
        <a href={SRC} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          Full screen
        </a>
      </div>
      <figcaption className="mt-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <span className="h-px w-6 bg-current opacity-50" aria-hidden="true" />
        {AETHERFORM_HINT}
      </figcaption>
    </figure>
  )
}
