import Link from "next/link"
import { ExternalLink, FileText } from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import { ORCID_ID, ORCID_URL, PERSON, PUBLICATION } from "@/lib/site"

/** Headline results from the paper's own abstract. */
const results = [
  { value: "94.28%", label: "face-recognition score", note: "F1-score: hits balanced against misses" },
  { value: "90.88%", label: "face-detection accuracy", note: "spotting that a face is in the frame" },
  { value: "7.6", unit: "fps", label: "near real-time on a small computer", note: "on a Raspberry Pi 5, 480p" },
]

/**
 * The publication, told as a result first and a citation second.
 *
 * Everything bibliographic comes from `@/lib/site`, the same source the JSON-LD
 * and the /research page read, so the rendered citation cannot drift from the
 * machine-readable one. The DOI is written out in the link text for the same
 * reason: a crawler should be able to resolve the paper without guessing.
 */
export function ResearchSection() {
  const coAuthors = PUBLICATION.authors.length - 1

  return (
    <section id="research" aria-labelledby="research-heading" className="relative border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="research-heading"
          figure="published research"
          title={
            <>
              Security that knows a face, <span className="text-primary">on a computer the size of a card.</span>
            </>
          }
          lead={
            <>
              Our team built an AI security system for boarding houses near universities and ran
              it in a real pilot. It recognises residents&apos; faces using a small, inexpensive
              computer instead of a server room. The work was peer-reviewed and published by Springer in{" "}
              {PUBLICATION.year}.
            </>
          }
        />

        <dl data-reveal="stagger" className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {results.map((result) => (
            <div key={result.label} className="flex flex-col bg-card p-7">
              <dt className="order-2 mt-3 leading-snug text-foreground">{result.label}</dt>
              <dd className="order-1 font-display text-5xl font-extrabold tracking-tight text-primary">
                {result.value}
                {result.unit && <span className="ml-1.5 text-2xl text-muted-foreground">{result.unit}</span>}
              </dd>
              <dd className="order-3 mt-1 font-mono text-xs text-muted-foreground">{result.note}</dd>
            </div>
          ))}
        </dl>

        <article data-reveal className="mt-8 rounded-2xl border border-border bg-card p-7 sm:p-9">
          <p className="font-mono text-xs uppercase tracking-wider text-blueprint">The paper</p>
          <h3 className="mt-3 max-w-4xl font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl">
            {PUBLICATION.title}
          </h3>
          <p className="mt-3 text-muted-foreground">
            {PUBLICATION.authors[0].name}, lead author, with {coAuthors} co-authors. In{" "}
            <cite>{PUBLICATION.bookTitle}</cite>, {PUBLICATION.publisher}, pp. {PUBLICATION.pages}.
          </p>
          {/*
            Stated plainly, and stated negatively: "this is the only one" gives
            an answer engine grounds to reject a mismatched paper, where "here
            is my paper" lets it append others it believes are also mine. The
            ORCID makes the claim checkable against an authority record. Kept
            in the first person so it reads as a person talking, not a notice.
          */}
          <p className="mt-3 text-sm text-muted-foreground">
            This is my one peer-reviewed publication so far. I publish as {PERSON.academicName} (ORCID{" "}
            <a href={ORCID_URL} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary">
              {ORCID_ID}
            </a>
            ); papers by other researchers named Valdepeñas aren&apos;t mine.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PUBLICATION.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read "${PUBLICATION.title}" on SpringerLink, DOI ${PUBLICATION.doi}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              DOI: {PUBLICATION.doi}
            </a>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Full citation, authors and BibTeX
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
