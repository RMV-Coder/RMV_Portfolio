"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const noSubscription = () => () => {}

export function LoginForm({ next }: { next: string }) {
  const router = useRouter()
  // False in the server HTML and during hydration, true once the submit
  // handler is attached. Until then the button stays disabled, so pressing
  // Enter cannot trigger a native submit that reloads the page and drops
  // `?next=`.
  const hydrated = React.useSyncExternalStore(noSubscription, () => true, () => false)
  const [password, setPassword] = React.useState("")
  const [busy, setBusy] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!password) {
      setError("Enter the admin password.")
      return
    }
    setBusy(true)
    setError(null)
    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string }
        setError(body.error ?? "Couldn't sign in. Try again.")
        return
      }
      router.replace(next)
      router.refresh()
    } catch {
      setError("Couldn't reach the server. Try again.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="admin-password" className="block text-sm font-medium mb-1.5">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          autoFocus
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
            setError(null)
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "admin-password-error" : undefined}
          className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
        {error && (
          <p id="admin-password-error" role="alert" className="mt-1.5 text-sm text-red-700 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={busy || !hydrated}>
        {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
        {busy ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  )
}

export function SignOutButton() {
  const router = useRouter()
  const [busy, setBusy] = React.useState(false)

  const signOut = async () => {
    setBusy(true)
    try {
      await fetch("/api/admin/session", { method: "DELETE" })
    } finally {
      router.replace("/admin/login")
      router.refresh()
    }
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={signOut} disabled={busy}>
      Sign out
    </Button>
  )
}
