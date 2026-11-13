"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Check, Copy, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Status = "pending" | "approved" | "declined"
type Action = "approve" | "decline"

interface DecisionControlsProps {
  id: string
  status: Status
  requesterName: string
  /** Present when the page was opened from the notification email. */
  reviewToken?: string
  /** False once an emailed link has made its one decision. */
  canChange: boolean
}

interface Result {
  action: Action
  email: string
  accessUrl?: string
}

const emailSummary: Record<string, string> = {
  sent: "They've been emailed.",
  logged: "No mail server is configured, so the email was printed to the server log.",
  skipped: "No mail server is configured, so nothing was emailed.",
  failed: "The email didn't send.",
  "not-sent": "They weren't notified.",
}

export function DecisionControls({ id, status, requesterName, reviewToken, canChange }: DecisionControlsProps) {
  const router = useRouter()
  const [note, setNote] = React.useState("")
  const [notifyOnDecline, setNotifyOnDecline] = React.useState(false)
  const [busy, setBusy] = React.useState<Action | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [result, setResult] = React.useState<Result | null>(null)
  const [copied, setCopied] = React.useState(false)

  const decide = async (action: Action) => {
    setBusy(action)
    setError(null)
    try {
      const response = await fetch(`/api/admin/resume-requests/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, note, notify: notifyOnDecline, token: reviewToken }),
      })
      const body = (await response.json().catch(() => ({}))) as {
        error?: string
        email?: string
        accessUrl?: string
      }
      if (!response.ok) {
        setError(body.error ?? "That didn't save. Try again.")
        // The request may have been decided elsewhere in the meantime, or the
        // link may no longer be enough: reload so the page shows where it stands.
        router.refresh()
        return
      }
      setResult({ action, email: body.email ?? "not-sent", accessUrl: body.accessUrl })
      setNote("")
      router.refresh()
    } catch {
      setError("Couldn't reach the server. Try again.")
    } finally {
      setBusy(null)
    }
  }

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setError("Couldn't copy. Select the link and copy it by hand.")
    }
  }

  const approveLabel =
    status === "approved" ? "Send a new link" : status === "declined" ? "Approve instead" : "Approve and send link"
  const declineLabel = status === "approved" ? "Revoke access" : "Decline"

  return (
    <div className="space-y-3">
      {result && (
        <div className="rounded-lg border border-border bg-muted/50 p-3.5 text-sm" role="status">
          <p className="font-medium">
            {result.action === "approve" ? `Approved for ${requesterName}.` : "Declined."}{" "}
            <span className="font-normal text-muted-foreground">
              {emailSummary[result.email] ?? ""}
            </span>
          </p>
          {result.accessUrl && (
            <div className="mt-3">
              <label htmlFor={`link-${id}`} className="block text-xs text-muted-foreground mb-1.5">
                Private link — shown once. Copy it now if you want to send it yourself.
              </label>
              <div className="flex gap-2">
                <input
                  id={`link-${id}`}
                  readOnly
                  value={result.accessUrl}
                  onFocus={(event) => event.currentTarget.select()}
                  className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 font-mono text-xs"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => copyLink(result.accessUrl!)}
                >
                  {copied ? <Check className="mr-1.5 h-4 w-4" /> : <Copy className="mr-1.5 h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {!canChange && (
        <p className="text-sm text-muted-foreground">
          This link has made its decision.{" "}
          <a
            href={`/admin/login?next=${encodeURIComponent(`/admin/resume-requests/${id}`)}`}
            className="text-foreground underline underline-offset-4 hover:text-primary"
          >
            Sign in
          </a>{" "}
          to change it or send a new link.
        </p>
      )}

      {canChange && (
      <>
      <div>
        <label htmlFor={`note-${id}`} className="block text-sm font-medium mb-1.5">
          Note to {requesterName}{" "}
          <span className="font-normal text-muted-foreground">(optional, added to the email)</span>
        </label>
        <textarea
          id={`note-${id}`}
          rows={2}
          value={note}
          maxLength={1000}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Happy to walk you through any of the projects on a call."
          className="w-full resize-y rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="button" onClick={() => decide("approve")} disabled={busy !== null}>
          {busy === "approve" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Check className="mr-2 h-4 w-4" aria-hidden="true" />
          )}
          {approveLabel}
        </Button>
        {status !== "declined" && (
          <>
            <Button
              type="button"
              variant="outline"
              onClick={() => decide("decline")}
              disabled={busy !== null}
            >
              {busy === "decline" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <X className="mr-2 h-4 w-4" aria-hidden="true" />
              )}
              {declineLabel}
            </Button>
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={notifyOnDecline}
                onChange={(event) => setNotifyOnDecline(event.target.checked)}
                className="h-4 w-4 rounded border-border"
              />
              Email them if declined
            </label>
          </>
        )}
      </div>
      </>
      )}
    </div>
  )
}
