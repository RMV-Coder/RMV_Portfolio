"use client"

import type * as React from "react"

/**
 * "Skip to content": the first thing a keyboard user reaches on every public
 * page, so they need not tab through the whole header to get to the page.
 * Hidden until it has focus.
 *
 * Pages mark their <main> with id="main", and without JavaScript the plain
 * #main link does the job. With JavaScript the click handler also falls back
 * to the first <main> on pages that have no id, and moves focus into it, so
 * the next Tab continues from the content rather than from the header. The
 * tabindex it adds for that is removed again when focus leaves, so clicking
 * inside the page does not keep focusing <main>.
 */
export function SkipLink() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("main") ?? document.querySelector("main")
    if (!target) return
    event.preventDefault()
    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1")
      target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true })
    }
    target.focus()
  }

  return (
    <a
      href="#main"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
    >
      Skip to content
    </a>
  )
}
