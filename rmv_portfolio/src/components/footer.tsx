"use client"

import * as React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PERSON, PROFILES } from "@/lib/site"

// The rating form (and Radix Dialog with it) is only fetched once a visitor
// reaches for it (hover or focus on the button), not on every page load.
// The import() is written inside dynamic(), as Next.js documents; the preload
// imports the same module, so both share one chunk.
const RatingModal = dynamic(() => import("@/components/rating-modal").then((m) => m.RatingModal), { ssr: false })
const preloadRatingModal = () => {
  // A failed preload is retried by the real load on click.
  import("@/components/rating-modal").catch(() => {})
}

const pages = [
  { name: "Work", href: "/#work" },
  { name: "Tools", href: "/tools" },
  { name: "Services", href: "/#services" },
  { name: "Experience", href: "/#experience" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/#contact" },
]

const elsewhere = [
  { name: "GitHub", href: PROFILES.github },
  { name: "LinkedIn", href: PROFILES.linkedin },
  { name: "npm", href: PROFILES.npm },
]

const linkClass = "text-muted-foreground transition-colors hover:text-primary"

export function Footer() {
  const [showRatingModal, setShowRatingModal] = React.useState(false)
  // Mounted on first open and kept mounted, so the closing animation still plays.
  const [ratingModalMounted, setRatingModalMounted] = React.useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_auto]">
            <div className="max-w-sm">
              <p className="font-display text-2xl font-extrabold tracking-tight">
                RMV<span className="text-primary">.</span>
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {PERSON.name} builds and ships software, from the circuit board to the cloud.
              </p>
            </div>

            <nav aria-label="Site">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">On this site</p>
              <ul className="mt-3 space-y-2 text-sm">
                {pages.map((page) => (
                  <li key={page.name}>
                    <Link href={page.href} className={linkClass}>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Profiles">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Elsewhere</p>
              <ul className="mt-3 space-y-2 text-sm">
                {elsewhere.map((profile) => (
                  <li key={profile.name}>
                    <a href={profile.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {profile.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <Button
                onClick={() => {
                  setRatingModalMounted(true)
                  setShowRatingModal(true)
                }}
                onPointerEnter={preloadRatingModal}
                onFocus={preloadRatingModal}
                variant="outline"
                className="group border-border bg-background text-foreground hover:border-primary hover:bg-background"
              >
                <Star className="mr-2 h-4 w-4 transition-colors group-hover:fill-brass group-hover:text-brass" />
                Rate this portfolio
              </Button>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {PERSON.name}
            </p>
            <p className="font-mono text-xs">Built with Next.js, three.js and anime.js</p>
          </div>
        </div>
      </footer>

      {ratingModalMounted && <RatingModal open={showRatingModal} onOpenChange={setShowRatingModal} />}
    </>
  )
}
