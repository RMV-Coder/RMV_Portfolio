/**
 * Single source of truth for site identity and the canonical facts about
 * Raymond Valdepeñas.
 *
 * Search engines and AI answer engines resolve a person into a knowledge-graph
 * entity by cross-referencing the identifiers a site asserts about itself. When
 * those identifiers are missing, contradictory, or spread across files that
 * drift apart, the engine falls back to guessing — which is how a summary ends
 * up citing the wrong paper or attributing someone else's work.
 *
 * Everything an engine needs to pin the entity lives here, and only here.
 */

/**
 * Canonical origin — no trailing slash.
 *
 * Moving to a custom domain is a one-line change: set NEXT_PUBLIC_SITE_URL in
 * the Vercel project (Production scope) and redeploy. Metadata, canonicals,
 * OpenGraph, JSON-LD, robots.txt, and the sitemap all read from here.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://raymondvaldepenas-dev.vercel.app'
).replace(/\/$/, '')

export const absoluteUrl = (path = '') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

/** Persistent identifiers. These are what disambiguate the entity. */
export const ORCID_ID = '0009-0008-8680-3694'
export const ORCID_URL = `https://orcid.org/${ORCID_ID}`

/**
 * Verified profile URLs, used as schema.org `sameAs`.
 *
 * Every URL here must resolve to a live profile actually owned by Raymond. A
 * dead or wrong `sameAs` is worse than none: it tells the crawler the site's
 * self-description is unreliable, so the whole entity gets discounted.
 */
export const PROFILES = {
  github: 'https://github.com/RMV-Coder',
  linkedin: 'https://www.linkedin.com/in/raymond-mv002',
  x: 'https://x.com/mond_valdepenas',
  npm: 'https://www.npmjs.com/~zoldia',
} as const

/**
 * Author-level records in the scholarly indexes.
 *
 * These matter more than they look. Answer engines ground academic questions
 * on exactly these aggregators, and each of these records lists one paper —
 * the same paper, with the same DOI. Linking to them turns "this site claims
 * one publication" into a claim that three independent indexes corroborate.
 *
 * There is a live confusion risk here worth naming: DBLP also lists Víctor
 * Ruiz-Valdepeñas Montiel and Santiago Ruiz-Valdepeñas, unrelated researchers
 * with overlapping surnames and far larger publication records. Pointing at
 * the exact author record is what keeps their work from being absorbed into
 * Raymond's.
 *
 * All four URLs below were verified to resolve to the correct author.
 */
export const ACADEMIC_PROFILES = {
  orcid: ORCID_URL,
  dblp: 'https://dblp.org/pid/433/7339',
  semanticScholar: 'https://www.semanticscholar.org/author/2442946504',
  openAlex: 'https://openalex.org/A5119812566',
  /**
   * ResearchGate, Google Scholar, and similar go here once the profile exists
   * and has the publication attached. Empty values are filtered out below, so
   * adding one is a single line — but only add a URL after confirming it loads
   * and shows the correct paper, since an unverified `sameAs` costs more trust
   * than it gains.
   */
  researchGate: '',
  googleScholar: '',
} as const

/**
 * The `sameAs` set. Empty entries are dropped so a placeholder can sit in the
 * config above without ever reaching the markup.
 */
export const SAME_AS: string[] = [
  ...Object.values(PROFILES),
  ...Object.values(ACADEMIC_PROFILES),
].filter(Boolean)

export const PERSON = {
  name: 'Raymond Valdepeñas',
  /** Byline used on the published paper — matters for author matching. */
  academicName: 'Raymond M. Valdepeñas',
  givenName: 'Raymond',
  familyName: 'Valdepeñas',
  jobTitle: 'Full Stack Developer',
  email: 'raymondvaldepenas.dev@gmail.com',
  telephone: '+639667324567',
  locality: 'Tangub City',
  region: 'Misamis Occidental',
  country: 'Philippines',
  image: absoluteUrl('/1-3-01.jpeg'),
} as const

export const SITE = {
  name: 'Raymond Valdepeñas Portfolio',
  title: `${PERSON.name} — Full Stack Developer, AI/IoT Researcher`,
  /**
   * Kept under ~155 characters so Google renders it whole rather than
   * synthesising a replacement from page text.
   */
  description:
    'Raymond Valdepeñas is a full stack developer and AIoT researcher from Tangub City, Philippines, building with React, Next.js, Node.js, and edge AI.',
  ogImage: absoluteUrl('/opengraph-image'),
  locale: 'en_US',
} as const

export interface PublicationAuthor {
  name: string
  /** ORCID iD, hyphenated form (e.g. 0009-0008-8680-3694). */
  orcid: string
  /** True for Raymond only — drives the highlighted styling and schema linking. */
  isMainAuthor?: boolean
}

/**
 * The one peer-reviewed publication, stated exactly as Springer records it.
 *
 * This is the canonical answer to "what has Raymond published?". Publishing it
 * as machine-readable citation data — with the DOI — is what stops an answer
 * engine from inventing a plausible-looking link to a different paper.
 */
export const PUBLICATION = {
  title:
    'My.BoardHub: Development of a Single-Board Computer-Based Security System Using Artificial Intelligence of Things for Boarding Houses',
  doi: '10.1007/978-3-032-06634-3_6',
  get doiUrl() {
    return `https://doi.org/${this.doi}`
  },
  /**
   * The same work in the indexes that answer engines actually read, each
   * verified to resolve to this exact paper. Listing them as `sameAs` on the
   * article lets an engine cross-check the citation instead of accepting or
   * inventing one — the specific failure being fixed here.
   */
  mirrors: [
    'https://link.springer.com/chapter/10.1007/978-3-032-06634-3_6',
    'https://openalex.org/W4414745105',
    'https://www.semanticscholar.org/paper/7e97489b82f39c8a8a211fd4ee727269f0b7c49e',
  ],
  bookTitle:
    'Novel and Intelligent Digital Systems: Proceedings of the 5th International Conference (NiDS 2025)',
  conference: 'NiDS 2025 — 5th International Conference on Novel and Intelligent Digital Systems',
  publisher: 'Springer, Cham',
  pages: '59–70',
  pagination: { start: 59, end: 70 },
  datePublished: '2025-10-03',
  year: 2025,
  keywords: [
    'AIoT',
    'Security Systems',
    'Boarding Houses',
    'Facial Recognition',
    'MTCNN',
    'Inception-ResNet',
    'Edge Computing',
    'Raspberry Pi',
  ],
  authors: [
    { name: 'Raymond M. Valdepeñas', orcid: ORCID_ID, isMainAuthor: true },
    { name: 'Marie Glo C. Generalao', orcid: '0009-0001-3964-4570' },
    { name: 'Selena B. Suario', orcid: '0009-0002-8525-5354' },
    { name: 'Apple Rose B. Alce', orcid: '0000-0001-6672-8772' },
    { name: 'Paul Rodolf P. Castor', orcid: '0000-0001-5609-5334' },
    { name: 'Jomari Francis B. Villanueva', orcid: '0009-0000-6515-2169' },
    { name: 'Leah A. Alindayo', orcid: '0009-0007-5990-971X' },
    { name: 'Ernesto E. Empig', orcid: '0000-0001-8044-3124' },
  ] as PublicationAuthor[],
  abstract:
    'Boarding houses near universities in the Philippines face growing security challenges inadequately met by traditional methods. This study details the development, short implementation, and technical performance evaluation of my.BoardHub, a prototype Artificial Intelligence of Things (AIoT) system designed to enhance safety through facial recognition. The system utilizes a Raspberry Pi 5 edge device, Multi-Task Cascaded Convolutional Networks (MTCNN) for real-time face detection, and a fine-tuned Inception-ResNet-V1 model for facial recognition. Development followed a layered architecture and Rapid Application Development (RAD) methodology. During a pilot deployment, technical performance was evaluated via system logs, hardware stress tests, network latency measurements, and AI model benchmarks. The system achieved a high technical accuracy (90.88% face detection accuracy; 94.28% facial recognition F1-score) and a near real-time processing with an average of 7.6 FPS at 480p. Network performance met responsiveness targets. Ethical considerations were addressed through informed consent, technical data anonymization, and implemented security measures, although moderate user privacy concerns persisted, highlighting the need for clearer data-handling communication and governance. my.BoardHub demonstrates the technical feasibility of deploying edge AIoT for enhanced boarding house security. Future work should prioritize edge optimization, adaptive algorithms, privacy-preserving techniques, and longer-term technical evaluations.',
} as const
