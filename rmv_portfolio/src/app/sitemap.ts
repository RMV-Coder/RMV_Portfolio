import { MetadataRoute } from 'next'
import { PUBLICATION, SITE_URL, absoluteUrl } from '@/lib/site'

/**
 * A sitemap lists indexable URLs. Nothing else belongs in it.
 *
 * The previous version listed `/#about`, `/#skills`, `/#projects`, and
 * `/#contact`. A fragment is not a separate resource — the server returns the
 * identical document for all of them — so Google either discards the entries or
 * treats them as duplicates of `/`, which dilutes the signal for the one URL
 * that matters. They are removed here.
 *
 * `/research` is a real, separately-rendered page, so it earns an entry.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/research'),
      /**
       * Pinned to the publication date rather than build time. Claiming a
       * page changed on every deploy when its content did not trains crawlers
       * to ignore the timestamp.
       */
      lastModified: new Date(PUBLICATION.datePublished),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]
}
