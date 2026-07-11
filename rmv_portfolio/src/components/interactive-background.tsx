"use client"

import * as React from "react"

/**
 * Fixed, behind-everything reactive layer. It reads the cursor position and the
 * active section straight from CSS custom properties / attributes on <html>
 * (published by <CustomCursor />), so it never re-renders on pointer move.
 *
 * Visible mainly in the hero and through section gaps; sections keep their own
 * backgrounds and blend over the top.
 */
export function InteractiveBackground() {
  return (
    <div className="interactive-bg" aria-hidden>
      <div className="interactive-bg__grid" />
      <div className="interactive-bg__spotlight" />
    </div>
  )
}

export default InteractiveBackground
