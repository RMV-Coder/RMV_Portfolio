import { redirect } from "next/navigation"
import { RequestCard } from "@/components/admin/request-card"
import { ResumeFileCard, type ResumeFileSummary } from "@/components/admin/resume-file-card"
import { SignOutButton } from "@/components/admin/login-form"
import { hasAdminSession } from "@/lib/resume/admin-auth"
import { getResumeFileStore, RESUME_MAX_BYTES } from "@/lib/resume/file-store"
import { getResumeRequestStore, type ResumeRequestRecord } from "@/lib/resume/store"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  if (!(await hasAdminSession())) redirect("/admin/login")

  let requests: ResumeRequestRecord[] = []
  let loadError = false
  try {
    requests = await getResumeRequestStore().list(100)
  } catch (error) {
    loadError = true
    console.error("[admin] could not load résumé requests:", error instanceof Error ? error.message : error)
  }

  // The file is looked up on its own: a failure here must not hide the requests.
  let file: ResumeFileSummary | null = null
  let fileError = false
  try {
    const info = await getResumeFileStore().info()
    if (info) {
      file = {
        size: info.size,
        sha256: info.sha256,
        fileName: info.fileName,
        uploadedAt: info.uploadedAt.toLocaleString("en-US", {
          timeZone: "Asia/Manila",
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }),
      }
    }
  } catch (error) {
    fileError = true
    console.error("[admin] could not read the stored résumé:", error instanceof Error ? error.message : error)
  }

  const pending = requests.filter((request) => request.status === "pending")
  const decided = requests.filter((request) => request.status !== "pending")

  // One flat, keyed array on purpose. Approving a request moves its card from
  // "Waiting" to "Decided"; as siblings in a single list the card keeps its
  // state through that move — including the private link it has just been
  // handed, which is shown exactly once. Two separate lists would remount it.
  const timeline = [
    pending.length > 0 && (
      <h2 key="heading-pending" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Waiting
      </h2>
    ),
    ...pending.map((request) => <RequestCard key={request.id} record={request} />),
    decided.length > 0 && (
      <h2 key="heading-decided" className={`text-sm font-medium uppercase tracking-wider text-muted-foreground ${pending.length > 0 ? "pt-6" : ""}`}>
        Decided
      </h2>
    ),
    ...decided.map((request) => <RequestCard key={request.id} record={request} />),
  ]

  return (
    <div className="mx-auto w-full max-w-3xl">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Résumé requests</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {pending.length === 0
              ? "Nothing waiting on you."
              : `${pending.length} waiting on you.`}{" "}
            {/* Full page load: keeps admin URLs out of the document that loads analytics. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="underline underline-offset-4 hover:text-foreground">
              View site
            </a>
          </p>
        </div>
        <SignOutButton />
      </header>

      {fileError ? (
        <p className="mb-8 rounded-xl border border-border bg-card p-6 text-sm leading-relaxed">
          Couldn&apos;t check the stored résumé. Make sure the <code className="font-mono">resume_file</code>{" "}
          migration has been applied.
        </p>
      ) : (
        <ResumeFileCard file={file} maxBytes={RESUME_MAX_BYTES} />
      )}

      {loadError ? (
        <p className="rounded-xl border border-border bg-card p-6 text-sm leading-relaxed">
          Couldn&apos;t load requests. Check that <code className="font-mono">PRISMA_DATABASE_URL</code> is
          set and the <code className="font-mono">resume_requests</code> migration has been applied.
        </p>
      ) : requests.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <h2 className="font-medium">Your requests will show up here</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            When someone asks for your résumé you&apos;ll get an email, and the request lands on this page.
          </p>
        </div>
      ) : (
        <div className="space-y-4">{timeline}</div>
      )}
    </div>
  )
}
