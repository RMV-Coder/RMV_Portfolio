"use client"

import { usePathname } from "next/navigation"

/** Routes that are not part of the public site: the admin area and private résumé links. */
const PRIVATE_PREFIXES = ["/admin", "/resume/"]

export function isPrivatePath(pathname: string | null): boolean {
  return PRIVATE_PREFIXES.some((prefix) => pathname?.startsWith(prefix))
}

/**
 * Renders its children only on public pages.
 *
 * Wraps the analytics scripts and the site footer. A private résumé link
 * carries its access token in the URL, and analytics records page URLs — so
 * on those routes the trackers must not load at all.
 */
export function SiteOnly({ children }: { children: React.ReactNode }) {
  return isPrivatePath(usePathname()) ? null : <>{children}</>
}
