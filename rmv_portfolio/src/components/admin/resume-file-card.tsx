"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { FileText, Loader2, TriangleAlert } from "lucide-react"
import { Button } from "@/components/ui/button"

/** What the admin page knows about the stored file. Dates arrive as text from the server component. */
export interface ResumeFileSummary {
  size: number
  sha256: string
  fileName: string
  uploadedAt: string
}

const kilobytes = (bytes: number) => `${Math.max(1, Math.round(bytes / 1024))} KB`

/**
 * The résumé itself: what is stored, and a way to replace it. The file is
 * kept in the database, not in the repository, so this is the only place it
 * is ever put in.
 */
export function ResumeFileCard({ file, maxBytes }: { file: ResumeFileSummary | null; maxBytes: number }) {
  const router = useRouter()
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [busy, setBusy] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [done, setDone] = React.useState(false)

  const upload = async (event: React.FormEvent) => {
    event.preventDefault()
    const chosen = inputRef.current?.files?.[0]
    setDone(false)
    if (!chosen) {
      setError("Choose a PDF first.")
      return
    }
    if (chosen.size > maxBytes) {
      setError(`That file is too large. Keep it under ${maxBytes / 1024 / 1024} MB.`)
      return
    }
    setBusy(true)
    setError(null)
    try {
      const body = new FormData()
      body.append("file", chosen)
      const response = await fetch("/api/admin/resume-file", { method: "POST", body })
      const result = (await response.json().catch(() => ({}))) as { error?: string }
      if (!response.ok) {
        setError(result.error ?? "That didn't upload. Try again.")
        return
      }
      if (inputRef.current) inputRef.current.value = ""
      setDone(true)
      router.refresh()
    } catch {
      setError("Couldn't reach the server. Try again.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <section aria-labelledby="resume-file-heading" className="mb-8 rounded-xl border border-border bg-card p-5">
      <h2 id="resume-file-heading" className="flex items-center gap-2 font-medium">
        <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
        The résumé people receive
      </h2>

      {file ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          <span className="text-foreground">{file.fileName}</span> · {kilobytes(file.size)} · uploaded {file.uploadedAt}.{" "}
          <a
            href="/api/admin/resume-file"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Open it
          </a>
          <span className="mt-1 block font-mono text-[11px]">fingerprint {file.sha256.slice(0, 16)}</span>
        </p>
      ) : (
        <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-amber-700 dark:text-amber-300">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Nothing is uploaded yet, so requests can&apos;t be approved. Upload your résumé as a PDF.
        </p>
      )}

      <form onSubmit={upload} className="mt-4 flex flex-wrap items-center gap-3" noValidate>
        <label htmlFor="resume-file" className="sr-only">
          {file ? "Replace it with another PDF" : "Choose a PDF"}
        </label>
        <input
          ref={inputRef}
          id="resume-file"
          type="file"
          accept="application/pdf,.pdf"
          onChange={() => {
            setError(null)
            setDone(false)
          }}
          aria-describedby={error ? "resume-file-error" : undefined}
          className="min-w-0 flex-1 text-sm file:mr-3 file:rounded-md file:border file:border-border file:bg-background file:px-3 file:py-1.5 file:text-sm file:font-medium"
        />
        <Button type="submit" size="sm" disabled={busy}>
          {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
          {busy ? "Uploading…" : file ? "Replace" : "Upload"}
        </Button>
      </form>
      {error && (
        <p id="resume-file-error" role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
      {done && !error && (
        <p role="status" className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
          Uploaded. Links already sent now serve this file.
        </p>
      )}
    </section>
  )
}
