import type { Metadata } from "next"
import { Download, FileText, LinkIcon } from "lucide-react"
import { PERSON } from "@/lib/site"
import { getResumeRequestStore, isLinkUsable, type ResumeRequestRecord } from "@/lib/resume/store"
import { ACCESS_MAX_DOWNLOADS, ACCESS_TTL_DAYS, hashAccessToken, looksLikeAccessToken } from "@/lib/resume/tokens"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Résumé",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
}

/**
 * The page a private résumé link opens. Viewing it costs nothing — only the
 * download button spends one of the link's downloads — so a mail scanner that
 * pre-opens the link does not use it up.
 */
export default async function ResumeAccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>
  searchParams: Promise<{ failed?: string | string[] }>
}) {
  const { token } = await params
  // Set by the download route when the download failed for a reason on this side.
  const downloadFailed = (await searchParams).failed !== undefined

  let record: ResumeRequestRecord | null = null
  // Kept apart from "no such link": when the lookup itself fails, the page
  // cannot tell whether the link is good, so it must not call it inactive.
  let lookupFailed = false
  if (looksLikeAccessToken(token)) {
    try {
      record = await getResumeRequestStore().findByTokenHash(hashAccessToken(token))
    } catch (error) {
      lookupFailed = true
      console.error("[resume] lookup failed:", error instanceof Error ? error.message : error)
    }
  }

  const usable = record !== null && isLinkUsable(record, new Date())

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center">
        {usable && record ? (
          <>
            <FileText className="mx-auto mb-5 h-10 w-10 text-primary" aria-hidden="true" />
            <h1 className="text-2xl font-semibold">Hi {record.name.split(" ")[0]}, here&apos;s my résumé</h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Thanks for asking. This copy is for you, so please don&apos;t pass the link on.
            </p>
            {downloadFailed && (
              <p role="alert" className="mt-5 rounded-lg border border-border bg-background px-4 py-3 text-sm leading-relaxed">
                The download didn&apos;t start, and that&apos;s a fault on my end. Try again in a few minutes.
              </p>
            )}
            {/* A form post, not a link: only a deliberate press spends a download. */}
            <form method="post" action={`/api/resume/${token}`} className="mt-7">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download résumé (PDF)
              </button>
            </form>
            <p className="mt-5 text-sm text-muted-foreground">
              {record.maxDownloads - record.downloadCount} of {record.maxDownloads} downloads left
              {record.tokenExpiresAt &&
                ` · works until ${record.tokenExpiresAt.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}`}
            </p>
          </>
        ) : lookupFailed ? (
          <>
            <LinkIcon className="mx-auto mb-5 h-10 w-10 text-muted-foreground" aria-hidden="true" />
            <h1 className="text-2xl font-semibold">Something went wrong on my end</h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              I couldn&apos;t check this link just now. Try it again in a few minutes.
            </p>
          </>
        ) : (
          <>
            <LinkIcon className="mx-auto mb-5 h-10 w-10 text-muted-foreground" aria-hidden="true" />
            <h1 className="text-2xl font-semibold">This link is no longer active</h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Résumé links work for {ACCESS_TTL_DAYS} days or {ACCESS_MAX_DOWNLOADS} downloads. Ask for a
              fresh one from the portfolio and I&apos;ll send it over.
            </p>
          </>
        )}
        <p className="mt-8 border-t border-border pt-6 text-sm">
          {/*
            A full page load on purpose. Analytics is not loaded on this page;
            a client-side navigation would keep this URL — and its token — in
            the same document that then loads the tracker.
          */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="text-muted-foreground underline underline-offset-4 hover:text-foreground">
            {PERSON.name}&apos;s portfolio
          </a>
        </p>
      </div>
    </main>
  )
}
