import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
}

/** A wrong turn should still feel like the same workshop. */
export default function NotFound() {
  return (
    <main id="main" className="relative isolate flex min-h-[80svh] items-center justify-center px-4 py-24">
      <div
        aria-hidden="true"
        className="bp-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]"
      />
      <div className="max-w-xl text-center">
        <p className="fig-label">fig. 404 — missing part</p>
        <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
          This part isn&apos;t <span className="text-primary">on the bench.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          The page you were after was moved, renamed, or never built. Everything that was built is one
          click away.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Try the tools
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-border px-6 py-3.5 font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Back to the start
          </Link>
        </div>
      </div>
    </main>
  )
}
