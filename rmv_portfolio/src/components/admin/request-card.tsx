import { Building2, CalendarClock, Download, Mail, MapPin } from "lucide-react"
import { DecisionControls } from "@/components/admin/decision-controls"
import { RESUME_PURPOSES } from "@/lib/validations"
import type { ResumeRequestRecord } from "@/lib/resume/store"

const statusStyle: Record<string, string> = {
  pending: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  approved: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  declined: "bg-muted text-muted-foreground",
}

const dateTime = (date: Date) =>
  date.toLocaleString("en-US", {
    timeZone: "Asia/Manila",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })

const purposeLabel = (value: string) =>
  RESUME_PURPOSES.find((purpose) => purpose.value === value)?.label ?? value

/** One résumé request with everything needed to decide on it. */
export function RequestCard({
  record,
  reviewToken,
  canChange = true,
}: {
  record: ResumeRequestRecord
  reviewToken?: string
  /** False when opened from an emailed link whose one decision is spent. */
  canChange?: boolean
}) {
  const location = [record.city, record.country].filter(Boolean).join(", ")
  const expired =
    record.status === "approved" && record.tokenExpiresAt !== null && record.tokenExpiresAt < new Date()

  return (
    <article className="rounded-xl border border-border bg-card p-5 sm:p-6">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold leading-tight">{record.name}</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">{purposeLabel(record.purpose)}</p>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusStyle[record.status] ?? statusStyle.declined}`}
        >
          {expired ? "Approved · link expired" : record.status}
        </span>
      </header>

      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Email</dt>
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <dd>
            <a href={`mailto:${record.email}`} className="text-foreground underline-offset-4 hover:underline">
              {record.email}
            </a>
          </dd>
        </div>
        {record.company && (
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Company</dt>
            <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <dd>{record.company}</dd>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Location</dt>
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <dd>{location}</dd>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Requested</dt>
          <CalendarClock className="h-4 w-4 shrink-0" aria-hidden="true" />
          <dd>{dateTime(record.createdAt)}</dd>
        </div>
        {record.status === "approved" && (
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Downloads</dt>
            <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
            <dd>
              {record.downloadCount} of {record.maxDownloads} downloads
              {record.tokenExpiresAt && ` · until ${dateTime(record.tokenExpiresAt)}`}
            </dd>
          </div>
        )}
      </dl>

      <p className="mt-4 whitespace-pre-wrap rounded-lg bg-muted/60 p-3.5 text-sm leading-relaxed">
        {record.message}
      </p>

      {record.adminNote && (
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Your note:</span> {record.adminNote}
        </p>
      )}

      <div className="mt-5 border-t border-border pt-5">
        <DecisionControls
          id={record.id}
          status={record.status}
          requesterName={record.name.split(" ")[0] || record.name}
          reviewToken={reviewToken}
          canChange={canChange}
        />
      </div>
    </article>
  )
}
