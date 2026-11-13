// Namespace import, the form zod v4 documents. Bundlers can drop unused exports
// from it; the re-exported `z` object may instead keep every export, error
// messages in ~40 languages included.
import * as z from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/** Why someone wants the résumé — the first thing looked at when reviewing. */
export const RESUME_PURPOSES = [
  { value: "hiring", label: "Hiring for a role" },
  { value: "freelance", label: "A freelance or contract project" },
  { value: "collaboration", label: "A collaboration or partnership" },
  { value: "other", label: "Something else" },
] as const

export type ResumePurpose = (typeof RESUME_PURPOSES)[number]["value"]

/** No line breaks or control characters: these fields end up in an email subject. */
const SINGLE_LINE = /^[^\u0000-\u001f\u007f]*$/

export const resumeRequestSchema = z.object({
  name: z
    .string()
    .min(2, "Enter your name")
    .max(80, "Keep the name under 80 characters")
    .regex(SINGLE_LINE, "Use a single line"),
  email: z
    .string()
    .email("Enter an email address I can reply to")
    .max(254, "That email address is too long"),
  company: z
    .string()
    .max(120, "Keep this under 120 characters")
    .regex(SINGLE_LINE, "Use a single line"),
  purpose: z.enum(
    RESUME_PURPOSES.map((p) => p.value) as [ResumePurpose, ...ResumePurpose[]],
    { message: "Pick the closest reason" }
  ),
  message: z
    .string()
    .min(20, "A sentence or two about the role or project helps me say yes faster")
    .max(1000, "Keep the note under 1,000 characters"),
})

export type ResumeRequestData = z.infer<typeof resumeRequestSchema>