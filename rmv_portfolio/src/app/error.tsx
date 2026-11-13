"use client"

import * as React from "react"
import Link from "next/link"

// No framer-motion here. The root error boundary loads with every page, so
// anything it imports ships on first load everywhere; the entrance uses the
// site's CSS .forge-rise class instead.

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Portfolio Error:', error)
  }, [error])

  return (
    <main id="main" className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="forge-rise text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-4">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Something went wrong
          </h1>
          <p className="text-muted-foreground mb-6">
            The page hit an unexpected error. You can try again, or go back to the start.
          </p>
        </div>

        <div className="space-y-4">
          <button
            type="button"
            onClick={reset}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Try again
          </button>

          <div>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Back to the start
            </Link>
          </div>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-muted p-4 rounded-lg">
            <summary className="cursor-pointer text-sm font-medium mb-2">
              Error details (development only)
            </summary>
            <pre className="text-xs text-muted-foreground overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </main>
  )
}