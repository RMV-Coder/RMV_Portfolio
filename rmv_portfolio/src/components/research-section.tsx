"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Calendar, Users, FileText, Tag, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { Parallax } from "@/components/motion/parallax"
import { scrollTo } from "@/lib/smooth-scroll"
import { PUBLICATION } from "@/lib/site"

// ORCID Icon Component following official guidelines
const ORCIDIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24" 
    viewBox="0 0 24 24"
    className={className}
    aria-label="ORCID iD"
  >
    <path
      fill="#A6CE39"
      d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.525 0-.947-.422-.947-.947 0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.644-1.506 3.644-3.722 0-2.016-1.285-3.722-3.644-3.722h-2.297z"
    />
  </svg>
)

// Expandable Abstract Component
const ExpandableAbstract = ({ abstract }: { abstract: string }) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const words = abstract.split(' ')
  const previewLength = 25 // Number of words to show in preview
  const previewText = words.slice(0, previewLength).join(' ')
  const hasMoreText = words.length > previewLength

  return (
    <div className="space-y-2">
      <div className="text-muted-foreground leading-relaxed text-justify">
        {!isExpanded && hasMoreText ? (
          <>
            {previewText}
            <span className="text-muted-foreground/60">...</span>
          </>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={isExpanded ? 'full' : 'preview'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {abstract}
            </motion.span>
          </AnimatePresence>
        )}
      </div>
      
      {hasMoreText && (
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Read More
            </>
          )}
        </motion.button>
      )}
    </div>
  )
}

/**
 * Sourced from `@/lib/site` so the rendered citation, the JSON-LD, the /research
 * page, and the citation meta tags cannot disagree. The publication data used
 * to live here as a second copy — and a citation that contradicts itself across
 * a site is exactly what makes a crawler distrust all of it.
 */
const publications = [{ ...PUBLICATION, journal: PUBLICATION.bookTitle }]

export function ResearchSection() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Parallax speed={0.25} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Research Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to academic research in Artificial Intelligence of Things (AIoT), edge computing security, and intelligent surveillance systems
          </p>
          {/*
            Stated plainly, and stated negatively, because this is the sentence
            that fixes the wrong-citation problem. "Here is my paper" lets an
            answer engine append others it believes are also mine; "this is the
            only one" gives it grounds to reject a mismatched candidate. The
            ORCID is inline so the claim is checkable against an authority
            record rather than taken on the site's word.
          */}
          <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto mt-4">
            {PUBLICATION.authors[0].name} (ORCID{" "}
            <a
              href={`https://orcid.org/${PUBLICATION.authors[0].orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {PUBLICATION.authors[0].orcid}
            </a>
            ) has one peer-reviewed publication, listed below. Any other paper
            attributed to this name is by a different author.
          </p>
        </Parallax>

        {/* Publications */}
        <div className="space-y-8">
          {publications.map((publication, index) => (
            <Parallax key={index} speed={0.15}>
            <article
              className="group relative bg-card rounded-xl border border-border hover:border-primary/50 overflow-hidden transition-colors duration-300"
            >
              <div className="p-8">
                {/* Title and DOI */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                    {publication.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{publication.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{publication.publisher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Pages {publication.pages}</span>
                    </div>
                  </div>
                </div>

                {/* Authors */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Authors</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {publication.authors.map((author, authorIndex) => (
                      <div
                        key={authorIndex}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          author.isMainAuthor
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <span className="font-medium">{author.name}</span>
                        {author.orcid && (
                          <a
                            href={`https://orcid.org/${author.orcid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors ml-1"
                            title="View ORCID Profile"
                            aria-label={`View ${author.name}'s ORCID record`}
                          >
                            <ORCIDIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              {/* Abstract */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Abstract</h4>
                <ExpandableAbstract abstract={publication.abstract} />
              </div>

                {/* Keywords */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Keywords</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword, keywordIndex) => (
                      <span
                        key={keywordIndex}
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-full border border-secondary/30 transition-colors"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

              {/* Publication Details and Links */}
              <div className="pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium text-foreground mb-1">
                      {publication.journal}
                    </div>
                    <div>
                      Published: {new Date(publication.datePublished).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {/*
                      The DOI is written out rather than hidden behind link
                      text. A crawler reading "View Publication" learns nothing
                      about which publication; a crawler reading the DOI can
                      resolve it unambiguously.
                    */}
                    <motion.a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Read "${publication.title}" on SpringerLink, DOI ${publication.doi}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      DOI: {publication.doi}
                    </motion.a>
                    <Link
                      href="/research"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      Full citation &amp; BibTeX
                    </Link>
                  </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </article>
            </Parallax>
          ))}
        </div>

        {/* Call to Action */}
        <Parallax speed={0.2} className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Interested in collaboration or discussing research opportunities?
          </p>
          <motion.button
            className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("#contact")}
          >
            Get in Touch
          </motion.button>
        </Parallax>
      </div>
    </section>
  )
}