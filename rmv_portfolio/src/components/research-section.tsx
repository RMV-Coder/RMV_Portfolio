"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Calendar, Users, FileText, Tag, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { Parallax } from "@/components/motion/parallax"
import { scrollTo } from "@/lib/smooth-scroll"

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

interface Publication {
  title: string
  authors: {
    name: string
    orcid?: string
    isMainAuthor?: boolean
  }[]
  abstract: string
  doi: string
  keywords: string[]
  publisher: string
  journal: string
  pages: string
  datePublished: string
  year: number
}

const publications: Publication[] = [
  {
    title: "My.BoardHub: Development of a Single-Board Computer-Based Security System Using Artificial Intelligence of Things for Boarding Houses",
    authors: [
      { name: "Raymond M. Valdepeñas", orcid: "0009-0008-8680-3694", isMainAuthor: true }, // Add your ORCID manually
      { name: "Marie Glo C. Generalao", orcid: "0009-0001-3964-4570" }, // Add ORCID manually if available
      { name: "Selena B. Suario", orcid: "0009-0002-8525-5354" }, // Add ORCID manually if available
      { name: "Apple Rose B. Alce", orcid: "0000-0001-6672-8772" }, // Add ORCID manually if available
      { name: "Paul Rodolf P. Castor", orcid: "0000-0001-5609-5334" }, // Add ORCID manually if available
      { name: "Jomari Francis B. Villanueva", orcid: "0009-0000-6515-2169" }, // Add ORCID manually if available
      { name: "Leah A. Alindayo", orcid: "0009-0007-5990-971X" }, // Add ORCID manually if available
      { name: "Ernesto E. Empig", orcid: "0000-0001-8044-3124" } // Add ORCID manually if available
    ],
    abstract: "Boarding houses near universities in the Philippines face growing security challenges inadequately met by traditional methods. This study details the development, short implementation, and technical performance evaluation of my.BoardHub, a prototype Artificial Intelligence of Things (AIoT) system designed to enhance safety through facial recognition. The system utilizes a Raspberry Pi 5 edge device, Multi-Task Cascaded Convolutional Networks (MTCNN) for real-time face detection, and a fine-tuned Inception-ResNet-V1 model for facial recognition. Development followed a layered architecture and Rapid Application Development (RAD) methodology. During a pilot deployment, technical performance was evaluated via system logs, hardware stress tests, network latency measurements, and AI model benchmarks. The system achieved a high technical accuracy (90.88% face detection accuracy; 94.28% facial recognition F1-score) and a near real-time processing with an average of 7.6 FPS at 480p. Network performance met responsiveness targets. Ethical considerations were addressed through informed consent, technical data anonymization, and implemented security measures, although moderate user privacy concerns persisted, highlighting the need for clearer data-handling communication and governance. my.BoardHub demonstrates the technical feasibility of deploying edge AIoT for enhanced boarding house security. Future work should prioritize edge optimization, adaptive algorithms, privacy-preserving techniques, and longer-term technical evaluations.",
    doi: "10.1007/978-3-032-06634-3_6",
    keywords: ["AIoT", "Security Systems", "Boarding Houses", "Facial Recognition", "MTCNN", "Inception-ResNet"],
    publisher: "Springer, Cham",
    journal: "Novel and Intelligent Digital Systems: Proceedings of the 5th International Conference (NiDS 2025)",
    pages: "59–70",
    datePublished: "2025-10-03",
    year: 2025
  }
]

export function ResearchSection() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

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
        </Parallax>

        {/* Publications */}
        <div className="space-y-8">
          {publications.map((publication, index) => (
            <Parallax key={index} speed={0.15}>
            <motion.article
              className="group relative bg-card rounded-xl border border-border hover:border-primary/50 overflow-hidden transition-all duration-300"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
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
                    <motion.a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Publication
                    </motion.a>
                  </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{ opacity: hoveredCard === index ? 1 : 0 }}
              />
            </motion.article>
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