import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { RequestCard } from "@/components/admin/request-card"
import { canView, hasAdminSession } from "@/lib/resume/admin-auth"
import { getResumeRequestStore, type ResumeRequestRecord } from "@/lib/resume/store"
import { verifyReviewToken } from "@/lib/resume/tokens"

export const dynamic = "force-dynamic"

/**
 * A single request, reachable two ways: signed in, or straight from the
 * "Review request" button in the notification email (`?t=` is a signed token
 * scoped to this one request, so it works from a phone without signing in).
 */
export default async function ReviewRequestPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ t?: string | string[] }>
}) {
  const { id } = await params
  const rawToken = (await searchParams).t
  const token = Array.isArray(rawToken) ? rawToken[0] : rawToken

  if (!(await canView(id, token))) {
    redirect(`/admin/login?next=${encodeURIComponent(`/admin/resume-requests/${id}`)}`)
  }

  let record: ResumeRequestRecord | null = null
  try {
    record = await getResumeRequestStore().findById(id)
  } catch (error) {
    console.error("[admin] could not load résumé request:", error instanceof Error ? error.message : error)
  }
  if (!record) notFound()

  // Only hand the token to the client when it is the thing granting access.
  const reviewToken = verifyReviewToken(id, token) ? token : undefined
  // The emailed link decides once, while the request is pending. After that
  // the page is read-only until the owner signs in.
  const signedIn = await hasAdminSession()
  const canChange = signedIn || (record.status === "pending" && Boolean(reviewToken))

  return (
    <div className="mx-auto w-full max-w-3xl">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Résumé request</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Approving emails {record.name.split(" ")[0]} a private link. Declining sends nothing unless you
          ask it to.{" "}
          <Link href="/admin" className="underline underline-offset-4 hover:text-foreground">
            All requests
          </Link>
        </p>
      </header>
      <RequestCard record={record} reviewToken={reviewToken} canChange={canChange} />
    </div>
  )
}
