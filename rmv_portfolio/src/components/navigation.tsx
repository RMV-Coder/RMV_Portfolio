"use client"

import * as React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { scrollTo } from "@/lib/smooth-scroll"

// The résumé form (Radix Dialog, react-hook-form, zod) is only fetched once a
// visitor reaches for it (hover or focus on a trigger), not on every page load.
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

interface NavItem {
  name: string
  /** A section on the home page (`#work`) or a page of its own (`/tools`). */
  href: string
}

// Contact is not listed here: "Start a project" on the right is that link.
const navItems: NavItem[] = [
  { name: "Work", href: "#work" },
  { name: "Tools", href: "/tools" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "About", href: "#about" },
]

const CONTACT = "#contact"
const sectionIds = [...navItems.filter((item) => item.href.startsWith("#")).map((item) => item.href.slice(1)), "contact"]

/**
 * Site header, shared by every public page.
 *
 * Section links scroll in place on the home page and navigate to `/#section`
 * from anywhere else, so the same bar works on /tools and /research. The one
 * filled button is the thing a client came to do; the résumé request sits
 * beside it, quieter, for recruiters.
 */
export function Navigation() {
  const pathname = usePathname()
  const onHome = pathname === "/"
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [showResumeDialog, setShowResumeDialog] = React.useState(false)
  // Mounted on first open and kept mounted, so the closing animation still plays.
  const [resumeDialogMounted, setResumeDialogMounted] = React.useState(false)
  const progressRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
      // How far down the page: written straight to the element, no re-render.
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0})`
      }
      if (!onHome) return
      let current = ""
      for (const id of sectionIds) {
        const rect = document.getElementById(id)?.getBoundingClientRect()
        if (rect && rect.top <= 120 && rect.bottom >= 120) {
          current = id
          break
        }
      }
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [onHome])

  // Close the mobile menu when the route changes.
  React.useEffect(() => setIsOpen(false), [pathname])

  const isActive = (item: NavItem) =>
    item.href.startsWith("#") ? onHome && activeSection === item.href.slice(1) : pathname.startsWith(item.href)

  const hrefFor = (href: string) => (href.startsWith("#") ? `/${href}` : href)

  const openResumeDialog = () => {
    setResumeDialogMounted(true)
    setShowResumeDialog(true)
  }

  /**
   * Same-page section links scroll smoothly instead of jumping. Focus moves to
   * the section too, as a plain fragment link would do, so the next Tab starts
   * there and a screen reader follows; preventScroll leaves the scrolling to the
   * smooth scroll.
   */
  const handleClick = (event: React.MouseEvent, href: string) => {
    setIsOpen(false)
    if (onHome && href.startsWith("#")) {
      event.preventDefault()
      scrollTo(href)
      window.history.replaceState(null, "", href)
      const target = document.querySelector<HTMLElement>(href)
      if (target) {
        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1")
          // Like <main> in globals.css: a section that only takes focus from these
          // links gets no focus ring drawn around the whole of it.
          target.classList.add("outline-none")
        }
        target.focus({ preventScroll: true })
      }
    }
  }

  const linkClass = (item: NavItem, mobile = false) => {
    const base = mobile
      ? "flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-base font-medium transition-colors"
      : "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors"
    return isActive(item)
      ? `${base} bg-foreground/10 text-foreground`
      : `${base} text-muted-foreground hover:bg-foreground/5 hover:text-foreground`
  }

  const renderLink = (item: NavItem, mobile = false) => (
    <Link
      key={item.name}
      href={hrefFor(item.href)}
      onClick={(event) => handleClick(event, item.href)}
      // A section of the home page is a "location" within it, not a page of its own.
      aria-current={isActive(item) ? (item.href.startsWith("#") ? "location" : "page") : undefined}
      className={linkClass(item, mobile)}
    >
      {item.name}
      {/* A small ember marks the page worth visiting, without looking "selected". */}
      {item.href === "/tools" && <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />}
    </Link>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        isScrolled || isOpen
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* One "Main" landmark holds the bar and the mobile menu, so the page links are inside it at every width. */}
      <nav aria-label="Main">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={(event) => {
              if (onHome) {
                event.preventDefault()
                scrollTo(0)
              }
            }}
            className="font-display text-xl font-extrabold tracking-tight text-foreground transition-colors hover:text-primary"
            aria-label="Raymond Valdepeñas — home"
          >
            RMV<span className="text-primary">.</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">{navItems.map((item) => renderLink(item))}</div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={openResumeDialog}
              onPointerEnter={preloadResumeDialog}
              onFocus={preloadResumeDialog}
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Résumé
            </button>
            <Link
              href={hrefFor(CONTACT)}
              onClick={(event) => handleClick(event, CONTACT)}
              data-cursor="Say hi"
              className="hidden items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground lg:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-nav" className="border-t border-border bg-background px-3 pb-4 pt-2 lg:hidden">
            {navItems.map((item) => renderLink(item, true))}
            <div className="mt-3 grid gap-2 border-t border-border pt-3 sm:hidden">
              <Link
                href={hrefFor(CONTACT)}
                onClick={(event) => handleClick(event, CONTACT)}
                className="flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 text-base font-semibold text-primary-foreground"
              >
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  openResumeDialog()
                  setIsOpen(false)
                }}
                onPointerEnter={preloadResumeDialog}
                onFocus={preloadResumeDialog}
                className="rounded-md border border-border px-3 py-3 text-base font-medium text-foreground"
              >
                Request my résumé
              </button>
            </div>
          </div>
        )}
      </nav>

      <span
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary"
      />

      {resumeDialogMounted && <ResumeRequestDialog open={showResumeDialog} onOpenChange={setShowResumeDialog} />}
    </header>
  )
}
