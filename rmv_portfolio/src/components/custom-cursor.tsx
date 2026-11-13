"use client"

import * as React from "react"
import dynamic from "next/dynamic"

// The real cursor lives in its own chunk, together with framer-motion, so
// phones and tablets (which never show it) do not download either.
const CustomCursorImpl = dynamic(() => import("./custom-cursor-impl"), { ssr: false })

const FINE_POINTER = "(pointer: fine)"

function subscribe(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER)
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

const getSnapshot = () => window.matchMedia(FINE_POINTER).matches
// The server, and the first client render during hydration, assume no fine
// pointer, so the implementation is only requested after mount.
const getServerSnapshot = () => false

/**
 * Loads the custom cursor only after mount and only on a device with a fine
 * pointer (a mouse or trackpad). Renders nothing otherwise.
 */
export function CustomCursor() {
  const finePointer = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return finePointer ? <CustomCursorImpl /> : null
}

export default CustomCursor
