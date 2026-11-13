"use client"

import * as React from "react"
import { SectionHeading } from "@/components/sections/section-heading"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FiMail, FiMapPin, FiSend, FiLoader, FiCheck, FiAlertCircle } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import { trackContactFormSubmit } from "@/lib/analytics"

/** The things people usually come here for, each with a sentence to finish. */
const starters = [
  {
    label: "A web platform",
    subject: "A web platform for my business",
    message: "I'd like a web platform where my customers can ",
  },
  {
    label: "An app",
    subject: "An app for desktop or phone",
    message: "I need an app that ",
  },
  {
    label: "Something with AI",
    subject: "Using AI in my business",
    message: "I'd like to use AI to ",
  },
  {
    label: "A smart device",
    subject: "A smart device or automation",
    message: "I want to connect cameras, sensors or machines to software so that ",
  },
  {
    label: "A role on our team",
    subject: "A role on our team",
    message: "We're hiring for ",
  },
  {
    label: "Just saying hello",
    subject: "Hello from your portfolio",
    message: "Hi Raymond, ",
  },
] as const

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

/** Shown when the server gives no usable reason, or the request never got there. */
const SEND_FAILED = "That didn't go through. Try again in a moment, or email me directly."

/** Form order, so a failed submit lands on the first field that needs fixing. */
const FIELD_ORDER = ["name", "email", "subject", "message"] as const

export function ContactSection() {
  const [formState, setFormState] = React.useState<FormState>({
    status: 'idle',
    message: ''
  })

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setFocus,
    getValues,
    formState: { errors, isSubmitting, submitCount }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    // Focus is moved below instead, once the error text and aria-invalid are in
    // the page, so a screen reader announces the problem along with the field.
    shouldFocusError: false
  })

  // After each submit attempt, land on the first field that needs fixing.
  const focusedForSubmit = React.useRef(0)
  React.useEffect(() => {
    if (submitCount === focusedForSubmit.current) return
    focusedForSubmit.current = submitCount
    const firstInvalid = FIELD_ORDER.find((field) => errors[field])
    if (firstInvalid) setFocus(firstInvalid)
  }, [submitCount, errors, setFocus])

  // The submit button is disabled while sending, and a disabled button drops
  // focus to the page body. Once the send settles, put a keyboard user back on
  // the button rather than at the top of the page. Focus anywhere else (such as
  // an invalid field, above) is left alone.
  const busy = isSubmitting || formState.status === 'loading'
  const submitButton = React.useRef<HTMLButtonElement>(null)
  const wasBusy = React.useRef(false)
  React.useEffect(() => {
    if (wasBusy.current && !busy) {
      const active = document.activeElement
      if (!active || active === document.body) submitButton.current?.focus()
    }
    wasBusy.current = busy
  }, [busy])

  /**
   * Fills in a subject and an opening line. Someone who has never briefed a
   * developer shouldn't have to face an empty box; they pick the closest
   * thing and finish the sentence.
   */
  const startWith = (starter: (typeof starters)[number]) => {
    const message = getValues("message") ?? ""
    const untouched = message.trim() === "" || starters.some((item) => item.message === message)
    setValue("subject", starter.subject, { shouldValidate: true })
    // Validate too, so an earlier "too short" error (and aria-invalid) clears.
    if (untouched) setValue("message", starter.message, { shouldValidate: true })
    setFocus("message")
  }

  const onSubmit = async (data: ContactFormData) => {
    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      // A platform error page (HTML or plain text) is not JSON: treat it as no reason given.
      const result = (await response.json().catch(() => null)) as { error?: unknown } | null

      if (response.ok) {
        setFormState({
          status: 'success',
          message: "Message sent. I'll get back to you soon."
        })
        reset()

        // Analytics must never turn a delivered message into a "didn't go through".
        try {
          trackContactFormSubmit()
        } catch {
          // Ignore: tracking is optional.
        }

        // Clear the success message after 5 seconds, unless something newer replaced it.
        setTimeout(() => {
          setFormState((current) => (current.status === 'success' ? { status: 'idle', message: '' } : current))
        }, 5000)
      } else {
        // The route's own messages (rate limit, invalid data) are written for visitors.
        setFormState({
          status: 'error',
          message: typeof result?.error === 'string' && result.error ? result.error : SEND_FAILED
        })
      }
    } catch {
      // The request never completed (offline, blocked). The error stays until the
      // next attempt, so there is time to read it.
      setFormState({ status: 'error', message: SEND_FAILED })
    }
  }

  const statusBanner =
    formState.status === 'idle' ? null : (
      <div
        className={`p-4 rounded-lg mb-6 flex items-center space-x-3 animate-in fade-in-0 zoom-in-95 motion-reduce:animate-none ${
          formState.status === 'success'
            ? 'bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300'
            : formState.status === 'loading'
            ? 'bg-blue-50 border border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300'
            : 'bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
        }`}
      >
        {formState.status === 'success' ? (
          <FiCheck className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        ) : formState.status === 'loading' ? (
          <FiLoader className="w-5 h-5 flex-shrink-0 animate-spin" aria-hidden="true" />
        ) : (
          <FiAlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        )}
        <p className="text-sm">{formState.message || (formState.status === 'loading' ? 'Sending your message...' : '')}</p>
      </div>
    )

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          figure="start something"
          title={
            <>
              Have something that <span className="text-primary">should exist?</span>
            </>
          }
          lead="Tell me about it. A rough idea is enough to start a conversation, and I read every message myself."
          className="mb-16"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info. data-drift: <ScrollMotion /> moves it 15px either way as the page scrolls past. */}
          <div data-drift="15" className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Or reach me directly</h3>
              <p className="text-muted-foreground mb-8">
                Email works just as well as the form. I read both myself.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border hover:shadow-md transition-[box-shadow,scale] duration-200 motion-safe:hover:scale-[1.02]">
                <div className="p-3 rounded-full bg-primary/10">
                  <FiMail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:raymondvaldepenas.dev@gmail.com"
                    className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    raymondvaldepenas.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border hover:shadow-md transition-[box-shadow,scale] duration-200 motion-safe:hover:scale-[1.02]">
                <div className="p-3 rounded-full bg-primary/10">
                  <FiMapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Tangub City, Philippines · UTC+8</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Elsewhere</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: "https://github.com/RMV-Coder", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/raymond-mv002/", label: "LinkedIn" },
                  { icon: FaXTwitter, href: "https://x.com/mond_valdepenas", label: "X" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border hover:border-primary hover:shadow-md transition-[border-color,box-shadow,scale,translate] duration-300 motion-safe:hover:scale-110 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form. Drifts further than the column beside it, for depth. */}
          <div data-drift="35" className="bg-card border rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Send a message</h3>
            <p className="mb-3 text-sm text-muted-foreground">Not sure where to start? Pick the closest and finish the sentence.</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {starters.map((starter) => (
                <button
                  key={starter.label}
                  type="button"
                  onClick={() => startWith(starter)}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {starter.label}
                </button>
              ))}
            </div>
            
            {/*
              Form status. Both live regions are always in the page, empty when
              idle, so screen readers are already listening when a result lands:
              progress and success are read politely, a failure interrupts.
            */}
            <div role="status">
              {(formState.status === 'loading' || formState.status === 'success') && statusBanner}
            </div>
            <div role="alert">
              {formState.status === 'error' && statusBanner}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.name ? 'border-red-500' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1 text-sm text-red-700 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.email ? 'border-red-500' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1 text-sm text-red-700 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.subject ? 'border-red-500' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p id="contact-subject-error" className="mt-1 text-sm text-red-700 dark:text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="Tell me about your project, or just say hello."
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1 text-sm text-red-700 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                ref={submitButton}
                type="submit"
                disabled={busy}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 motion-safe:enabled:hover:scale-[1.02] motion-safe:enabled:active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                {formState.status === 'loading' ? (
                  <>
                    <FiLoader className="w-5 h-5 animate-spin" aria-hidden="true" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" aria-hidden="true" />
                    <span>Send message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}