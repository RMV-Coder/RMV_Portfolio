import {
  ORCID_ID,
  ORCID_URL,
  PERSON,
  PUBLICATION,
  SAME_AS,
  SITE,
  SITE_URL,
  absoluteUrl,
} from '@/lib/site'

/**
 * JSON-LD for the site, emitted as one linked `@graph` rather than several
 * standalone blocks.
 *
 * The previous version shipped three disconnected objects, each re-declaring a
 * bare `{"@type":"Person","name":"..."}`. A crawler has no way to know those
 * are the same person, so it saw four weakly-described entities instead of one
 * well-described one. Giving every node a stable `@id` and referencing those
 * ids turns the graph into a single assertion: this person, this site, this
 * paper, all the same subject.
 */

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`
const WEBPAGE_ID = `${SITE_URL}/#webpage`
const PUBLICATION_ID = `${SITE_URL}/research#publication`

/** Reusable reference to the Person node — never re-describe, always point. */
const personRef = { '@id': PERSON_ID }

const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: PERSON.name,
  /**
   * Alternate spellings a search engine may encounter. The ñ is routinely
   * transliterated, and the academic byline carries a middle initial — without
   * these, the portfolio and the paper look like two different people.
   */
  alternateName: [PERSON.academicName, 'Raymond Valdepenas', 'Raymond M. Valdepenas'],
  givenName: PERSON.givenName,
  familyName: PERSON.familyName,
  jobTitle: PERSON.jobTitle,
  description: SITE.description,
  url: SITE_URL,
  mainEntityOfPage: { '@id': WEBPAGE_ID },
  image: {
    '@type': 'ImageObject',
    url: PERSON.image,
    caption: `${PERSON.name} — ${PERSON.jobTitle}`,
  },
  email: `mailto:${PERSON.email}`,
  telephone: PERSON.telephone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: PERSON.locality,
    addressRegion: PERSON.region,
    addressCountry: 'PH',
  },
  /**
   * ORCID as a first-class identifier, not just another link. This is the
   * strongest disambiguation signal available for anyone who has published:
   * it ties the portfolio to an authority record that lists the real paper.
   */
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'ORCID',
    value: ORCID_ID,
    url: ORCID_URL,
  },
  sameAs: SAME_AS,
  knowsAbout: [
    'Full Stack Web Development',
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Tailwind CSS',
    'Artificial Intelligence of Things',
    'Edge Computing',
    'Computer Vision',
    'Facial Recognition',
    'Internet of Things',
    'Raspberry Pi',
  ],
  /** Authorship stated on the Person node as well as the article node. */
  author: { '@id': PUBLICATION_ID },
  nationality: { '@type': 'Country', name: PERSON.country },
}

/**
 * The publication, as a citable scholarly work.
 *
 * This node is the direct fix for AI summaries linking to the wrong paper.
 * Previously the site described the publication only in prose and a bare
 * anchor tag, so an answer engine asked "what did he publish?" had to infer
 * the link — and inferred one that did not exist. Stating the DOI, the exact
 * title, the full author list, and the container as structured data removes
 * the guesswork.
 */
const publicationNode = {
  '@type': 'ScholarlyArticle',
  '@id': PUBLICATION_ID,
  headline: PUBLICATION.title,
  name: PUBLICATION.title,
  abstract: PUBLICATION.abstract,
  /** The DOI is the canonical, permanent identifier for this work. */
  identifier: [
    {
      '@type': 'PropertyValue',
      propertyID: 'DOI',
      value: PUBLICATION.doi,
      url: PUBLICATION.doiUrl,
    },
  ],
  /** The DOI plus every index that carries the same record. */
  sameAs: [PUBLICATION.doiUrl, ...PUBLICATION.mirrors],
  url: PUBLICATION.doiUrl,
  mainEntityOfPage: absoluteUrl('/research'),
  datePublished: PUBLICATION.datePublished,
  inLanguage: 'en',
  keywords: PUBLICATION.keywords,
  pageStart: PUBLICATION.pagination.start,
  pageEnd: PUBLICATION.pagination.end,
  pagination: PUBLICATION.pages,
  publisher: { '@type': 'Organization', name: 'Springer Nature' },
  /**
   * Co-authors are listed in publication order with their ORCIDs. Raymond's
   * entry references the Person node instead of duplicating it, so the graph
   * links the portfolio subject to the first author explicitly.
   */
  author: PUBLICATION.authors.map((author) =>
    author.isMainAuthor
      ? personRef
      : {
          '@type': 'Person',
          name: author.name,
          ...(author.orcid
            ? { identifier: author.orcid, sameAs: `https://orcid.org/${author.orcid}` }
            : {}),
        },
  ),
  isPartOf: {
    '@type': 'PublicationVolume',
    name: PUBLICATION.bookTitle,
    publisher: { '@type': 'Organization', name: 'Springer Nature' },
  },
}

const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE.name,
  alternateName: `${PERSON.name} Portfolio`,
  description: SITE.description,
  url: SITE_URL,
  inLanguage: 'en-US',
  publisher: personRef,
  copyrightHolder: personRef,
  /**
   * `about` names the subject of the site. A portfolio's subject is its owner,
   * and saying so removes an inference step for anything reading the graph.
   */
  about: personRef,
}

/**
 * ProfilePage rather than plain WebPage.
 *
 * ProfilePage is the type Google documents for "a page about one person or
 * organisation", and it tells an answer engine that `mainEntity` is the thing
 * the page is actually about — the exact question an AI overview is answering
 * when someone searches a name.
 */
const webPageNode = {
  '@type': 'ProfilePage',
  '@id': WEBPAGE_ID,
  url: SITE_URL,
  name: SITE.title,
  description: SITE.description,
  isPartOf: { '@id': WEBSITE_ID },
  about: personRef,
  mainEntity: personRef,
  inLanguage: 'en-US',
  primaryImageOfPage: { '@type': 'ImageObject', url: SITE.ogImage },
}

/**
 * Site-wide identity, emitted from the root layout on every route.
 *
 * Deliberately limited to claims that are true regardless of which page is
 * being viewed: who this person is, what this site is, and what he published.
 * Page-specific nodes belong to their pages — see `homePageGraph` and
 * `researchPageGraph`.
 */
export const identityGraph = {
  '@context': 'https://schema.org',
  '@graph': [personNode, websiteNode, publicationNode],
}

/**
 * Home-page node, emitted by the home page rather than the layout.
 *
 * It describes one specific URL, so emitting it site-wide would assert a node
 * about the home page while the visitor is on /research — legal JSON-LD, but
 * noise that /research's own WebPage node then has to compete with.
 *
 * Note there is deliberately no FAQPage here. Google restricted FAQ rich
 * results to authoritative government and health sites in 2023, so the markup
 * earns a personal site nothing, and carrying it obliges every future edit to
 * keep hidden schema in sync with visible copy. The disambiguating facts it
 * would have carried are stated as prose in the research section instead,
 * where they are readable by people and extractable by answer engines without
 * a second copy to maintain.
 */
export const homePageGraph = {
  '@context': 'https://schema.org',
  '@graph': [webPageNode],
}

/**
 * Nodes specific to /research.
 *
 * Person and ScholarlyArticle are not repeated here — the layout already
 * emits them on every route, and this graph refers to them by `@id`. JSON-LD
 * merges nodes sharing an id, so referencing is equivalent to restating and
 * removes any chance of the two copies drifting apart.
 */
export const researchPageGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl('/research')}#webpage`,
      url: absoluteUrl('/research'),
      name: `Research & Publications — ${PERSON.name}`,
      description: `The complete, citable record of ${PERSON.academicName}'s peer-reviewed research.`,
      isPartOf: { '@id': WEBSITE_ID },
      about: personRef,
      /** The page's subject is the paper — this is the "which paper?" answer. */
      mainEntity: { '@id': PUBLICATION_ID },
      inLanguage: 'en-US',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: PERSON.name, item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Research',
            item: absoluteUrl('/research'),
          },
        ],
      },
    },
  ],
}

/**
 * Services offered, kept separate from the identity graph.
 *
 * Note this is `ProfessionalService`, not `LocalBusiness` — there is no
 * storefront, no opening hours, and no service area beyond "remote", so
 * claiming local-business markup would be an unsupported signal.
 */
export const professionalServiceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#services`,
  name: `${PERSON.name} — Web Development Services`,
  description:
    'Freelance web and software development: full stack applications, frontend and backend engineering, and AI/IoT integration.',
  url: SITE_URL,
  image: SITE.ogImage,
  provider: personRef,
  areaServed: { '@type': 'Country', name: PERSON.country },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${SITE_URL}/#contact`,
    availableLanguage: ['en', 'fil'],
  },
  serviceType: [
    'Web Development',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'AI Integration',
    'IoT Development',
  ],
}

