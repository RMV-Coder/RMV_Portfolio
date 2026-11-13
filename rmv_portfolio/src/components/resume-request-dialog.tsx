"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RESUME_PURPOSES, resumeRequestSchema, type ResumeRequestData } from "@/lib/validations"
import { trackResumeRequest } from "@/lib/analytics"

interface ResumeRequestDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const fieldClass = (invalid: boolean) =>
  `w-full px-3.5 py-2.5 rounded-lg border bg-background text-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
    invalid ? "border-red-500" : "border-border hover:border-primary/50"
  }`

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1 text-sm text-red-700 dark:text-red-400">
      {message}
    </p>
  )
}

/**
 * The résumé is not a public file. Visitors ask for it here; the request is
 * reviewed, and an approval emails them a private, expiring link.
 */
export function ResumeRequestDialog({ open, onOpenChange }: ResumeRequestDialogProps) {
  const [sentTo, setSentTo] = React.useState<string | null>(null)
  const [serverError, setServerError] = React.useState<string | null>(null)
  const honeypot = React.useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ResumeRequestData>({
    resolver: zodResolver(resumeRequestSchema),
    defaultValues: { name: "", email: "", company: "", purpose: "hiring", message: "" },
  })

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next)
    if (!next) {
      // Reset after the close animation so the form doesn't flash back in.
      window.setTimeout(() => {
        setSentTo(null)
        setServerError(null)
        reset()
      }, 200)
    }
  }

  const onSubmit = async (data: ResumeRequestData) => {
    setServerError(null)
    try {
      const response = await fetch("/api/resume-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypot.current?.value ?? "" }),
      })
      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string }
        setServerError(body.error ?? "That didn't go through. Try again in a moment.")
        return
      }
      trackResumeRequest(data.purpose)
      setSentTo(data.email)
    } catch {
      setServerError("Couldn't reach the server. Check your connection and try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[480px] max-h-[90vh] overflow-y-auto">
        {sentTo ? (
          <div className="py-4 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-emerald-500" aria-hidden="true" />
            <DialogHeader>
              <DialogTitle className="text-center text-xl">Request sent</DialogTitle>
              <DialogDescription className="text-center pt-2">
                I read every request myself. Once I&apos;ve approved it, a private link will arrive at{" "}
                <span className="font-medium text-foreground">{sentTo}</span>.
              </DialogDescription>
            </DialogHeader>
            <Button className="mt-6" onClick={() => handleOpenChange(false)}>
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Request my résumé</DialogTitle>
              <DialogDescription className="pt-1">
                I share it personally instead of posting it publicly. Tell me who you are and
                I&apos;ll email you a private link.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="resume-name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="resume-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Alex Santos"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "resume-name-error" : undefined}
                    className={fieldClass(Boolean(errors.name))}
                    {...register("name")}
                  />
                  <FieldError id="resume-name-error" message={errors.name?.message} />
                </div>
                <div>
                  <label htmlFor="resume-email" className="block text-sm font-medium mb-1.5">
                    Work email
                  </label>
                  <input
                    id="resume-email"
                    type="email"
                    autoComplete="email"
                    placeholder="alex@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "resume-email-error" : undefined}
                    className={fieldClass(Boolean(errors.email))}
                    {...register("email")}
                  />
                  <FieldError id="resume-email-error" message={errors.email?.message} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="resume-company" className="block text-sm font-medium mb-1.5">
                    Company <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="resume-company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Northwind Labs"
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={errors.company ? "resume-company-error" : undefined}
                    className={fieldClass(Boolean(errors.company))}
                    {...register("company")}
                  />
                  <FieldError id="resume-company-error" message={errors.company?.message} />
                </div>
                <div>
                  <label htmlFor="resume-purpose" className="block text-sm font-medium mb-1.5">
                    What it&apos;s for
                  </label>
                  <select
                    id="resume-purpose"
                    aria-invalid={Boolean(errors.purpose)}
                    aria-describedby={errors.purpose ? "resume-purpose-error" : undefined}
                    className={fieldClass(Boolean(errors.purpose))}
                    {...register("purpose")}
                  >
                    {RESUME_PURPOSES.map((purpose) => (
                      <option key={purpose.value} value={purpose.value}>
                        {purpose.label}
                      </option>
                    ))}
                  </select>
                  <FieldError id="resume-purpose-error" message={errors.purpose?.message} />
                </div>
              </div>

              <div>
                <label htmlFor="resume-message" className="block text-sm font-medium mb-1.5">
                  A little context
                </label>
                <textarea
                  id="resume-message"
                  rows={4}
                  placeholder="We're hiring a full-stack developer for our logistics platform and your tools caught my eye."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "resume-message-error" : undefined}
                  className={`${fieldClass(Boolean(errors.message))} resize-y`}
                  {...register("message")}
                />
                <FieldError id="resume-message-error" message={errors.message?.message} />
              </div>

              {/* Honeypot — invisible to people, irresistible to form bots. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="resume-website">Website</label>
                <input
                  id="resume-website"
                  ref={honeypot}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {serverError && (
                <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-700 dark:text-red-300">
                  {serverError}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Used only to reply to this request.
                </p>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                  {isSubmitting ? "Sending…" : "Send request"}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
