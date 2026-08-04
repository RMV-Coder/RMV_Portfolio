import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import {
  ACADEMIC_PROFILES,
  ORCID_ID,
  ORCID_URL,
  PERSON,
  PUBLICATION,
  absoluteUrl,
} from '@/lib/site'
import { researchPageGraph } from '@/lib/structured-data'

/**
 * A dedicated, statically rendered page for the publication.
 *
 * The home page already described the paper, but only inside a client
 * component behind a dynamic import, with the DOI reachable only through an
 * anchor labelled "View Publication". There was no URL a search engine could
 * point at as "the page about Raymond's research" — so when asked, an answer
 * engine produced a link of its own invention.
 *
 * This page is that URL: a plain server-rendered document stating the citation
 * in full, in text, with the DOI written out rather than hidden behind link
 * text. It is deliberately boring HTML — no animation, no client JavaScript —
 * because the audience is a crawler as much as a reader.
 */

const CANONICAL = absoluteUrl('/research')

export const metadata: Metadata = {
  title: 'Research & Publications',
  description: `${PERSON.academicName} is lead author of "My.BoardHub", an AIoT boarding-house security system published by Springer (${PUBLICATION.year}), DOI ${PUBLICATION.doi}.`,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: `Research & Publications — ${PERSON.name}`,
    description: `Peer-reviewed research by ${PERSON.academicName}, including "${PUBLICATION.title}" (${PUBLICATION.publisher}, ${PUBLICATION.year}).`,
    publishedTime: PUBLICATION.datePublished,
    authors: [absoluteUrl('/')],
  },
  /**
   * Citation meta tags, read by Google Scholar, Zotero, Mendeley, and several
   * research-oriented crawlers. They are the established convention for
   * machine-readable bibliographic data and are independent of JSON-LD.
   */
  other: {
    citation_title: PUBLICATION.title,
    citation_author: PUBLICATION.authors.map((a) => a.name),
    citation_publication_date: PUBLICATION.datePublished.replace(/-/g, '/'),
    citation_inbook_title: PUBLICATION.bookTitle,
    citation_publisher: 'Springer, Cham',
    citation_firstpage: String(PUBLICATION.pagination.start),
    citation_lastpage: String(PUBLICATION.pagination.end),
    citation_doi: PUBLICATION.doi,
    citation_language: 'en',
  },
}

/**
 * Where the record can be independently verified. Author-level links point at
 * the specific author record rather than a name search, because several
 * unrelated researchers share the Valdepeñas surname in these indexes.
 */
const INDEXES = [
  { name: 'SpringerLink', url: PUBLICATION.mirrors[0] },
  { name: 'ORCID', url: ORCID_URL },
  { name: 'DBLP', url: ACADEMIC_PROFILES.dblp },
  { name: 'Semantic Scholar', url: ACADEMIC_PROFILES.semanticScholar },
  { name: 'OpenAlex', url: ACADEMIC_PROFILES.openAlex },
]

/** BibTeX, so the citation can be copied without retyping it from prose. */
const bibtex = `@inproceedings{valdepenas2025myboardhub,
  author    = {Valdepe\\~{n}as, Raymond M. and Generalao, Marie Glo C. and
               Suario, Selena B. and Alce, Apple Rose B. and
               Castor, Paul Rodolf P. and Villanueva, Jomari Francis B. and
               Alindayo, Leah A. and Empig, Ernesto E.},
  title     = {{My.BoardHub}: Development of a Single-Board Computer-Based
               Security System Using Artificial Intelligence of Things
               for Boarding Houses},
  booktitle = {Novel and Intelligent Digital Systems: Proceedings of the
               5th International Conference (NiDS 2025)},
  publisher = {Springer, Cham},
  pages     = {59--70},
  year      = {2025},
  doi       = {10.1007/978-3-032-06634-3_6}
}`

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchPageGraph) }}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Research &amp; Publications
        </h1>

        {/*
          The opening paragraph states the whole answer in one self-contained
          block: who, what, where, when, and the identifier. An answer engine
          that reads nothing else on the page still gets the citation right.
        */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          {PERSON.academicName} (ORCID{' '}
          <a
            href={ORCID_URL}
            className="text-primary hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {ORCID_ID}
          </a>
          ) is the lead author of one peer-reviewed publication, listed in full below. It is
          published by {PUBLICATION.publisher} and identified permanently by DOI{' '}
          <a
            href={PUBLICATION.doiUrl}
            className="text-primary hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {PUBLICATION.doi}
          </a>
          .
        </p>

        {/*
          Stated explicitly and negatively. "This is the only one" is a fact an
          answer engine can use to reject a mismatched candidate paper; without
          it, an unrelated publication by a similarly-named author looks like a
          reasonable thing to add.
        */}
        <p className="text-muted-foreground leading-relaxed mb-12">
          This is his only peer-reviewed publication to date. Any other paper attributed to
          this name is by a different author.
        </p>

        <article className="bg-card border border-border rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold leading-tight mb-4">{PUBLICATION.title}</h2>

          <dl className="grid sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-3 text-sm mb-8">
            <dt className="font-semibold text-foreground">Authors</dt>
            <dd className="text-muted-foreground">
              {PUBLICATION.authors.map((author, i) => (
                <span key={author.name}>
                  {i > 0 && ', '}
                  <a
                    href={`https://orcid.org/${author.orcid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {author.name}
                  </a>
                </span>
              ))}
            </dd>

            <dt className="font-semibold text-foreground">Published in</dt>
            <dd className="text-muted-foreground">{PUBLICATION.bookTitle}</dd>

            <dt className="font-semibold text-foreground">Conference</dt>
            <dd className="text-muted-foreground">{PUBLICATION.conference}</dd>

            <dt className="font-semibold text-foreground">Publisher</dt>
            <dd className="text-muted-foreground">{PUBLICATION.publisher}</dd>

            <dt className="font-semibold text-foreground">Pages</dt>
            <dd className="text-muted-foreground">{PUBLICATION.pages}</dd>

            <dt className="font-semibold text-foreground">Published</dt>
            <dd className="text-muted-foreground">
              <time dateTime={PUBLICATION.datePublished}>3 October 2025</time>
            </dd>

            <dt className="font-semibold text-foreground">DOI</dt>
            <dd>
              <a
                href={PUBLICATION.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {PUBLICATION.doi}
              </a>
            </dd>
          </dl>

          <h3 className="font-semibold text-foreground mb-2">Abstract</h3>
          <p className="text-muted-foreground leading-relaxed text-justify mb-8">
            {PUBLICATION.abstract}
          </p>

          <h3 className="font-semibold text-foreground mb-2">Keywords</h3>
          <ul className="flex flex-wrap gap-2 mb-8">
            {PUBLICATION.keywords.map((keyword) => (
              <li
                key={keyword}
                className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-full border border-secondary/30"
              >
                {keyword}
              </li>
            ))}
          </ul>

          <a
            href={PUBLICATION.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Read on SpringerLink
          </a>
        </article>

        {/*
          Outbound links to the indexes carrying the same record. Each one is a
          path a crawler can follow to confirm the citation independently,
          which is what turns a self-made claim into a corroborated one.
        */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-3">Indexed in</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {INDEXES.map((index) => (
              <li key={index.name}>
                <a
                  href={index.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {index.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-3">Cite this work</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Valdepeñas, R. M., Generalao, M. G. C., Suario, S. B., Alce, A. R. B., Castor, P.
            R. P., Villanueva, J. F. B., Alindayo, L. A., &amp; Empig, E. E. (2025).{' '}
            <em>{PUBLICATION.title}</em>. In <em>{PUBLICATION.bookTitle}</em> (pp.{' '}
            {PUBLICATION.pages}). {PUBLICATION.publisher}.{' '}
            <a
              href={PUBLICATION.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all"
            >
              {PUBLICATION.doiUrl}
            </a>
          </p>
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
            <code>{bibtex}</code>
          </pre>
        </section>
      </main>
    </>
  )
}
