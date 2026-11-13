"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { FileLock2 } from "lucide-react"

// The résumé form (Radix Dialog, react-hook-form, zod) is only fetched once a
// visitor reaches for it (hover or focus on the button), not on every page load.
// The import() is written inside dynamic(), as Next.js documents; the preload
// imports the same module, so both share one chunk.
const ResumeRequestDialog = dynamic(
  () => import("@/components/resume-request-dialog").then((m) => m.ResumeRequestDialog),
  { ssr: false },
)
const preloadResumeDialog = () => {
  // A failed preload is retried by the real load on click.
  import("@/components/resume-request-dialog").catch(() => {})
}

/** A button that opens the résumé request form. Lets server-rendered sections offer it. */
export function ResumeRequestButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = React.useState(false)
  // Mounted on first open and kept mounted, so the closing animation still plays.
  const [mounted, setMounted] = React.useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setMounted(true)
          setOpen(true)
        }}
        onPointerEnter={preloadResumeDialog}
        onFocus={preloadResumeDialog}
        className={className}
      >
        <FileLock2 className="h-5 w-5" aria-hidden="true" />
        Request my résumé
      </button>
      {mounted && <ResumeRequestDialog open={open} onOpenChange={setOpen} />}
    </>
  )
}
