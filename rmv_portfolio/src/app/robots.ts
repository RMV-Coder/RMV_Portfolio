import { MetadataRoute } from 'next'
import { SITE_URL, absoluteUrl } from '@/lib/site'

/**
 * Crawler rules.
 *
 * The answer-engine crawlers are named explicitly rather than left to the `*`
 * rule. They already match `*`, so this changes no behaviour — it makes the
 * intent auditable, and it means a future decision to exclude one of them is a
 * one-line edit against a list that is already correct and complete.
 *
 * Access is deliberately open: an AI overview that cannot fetch the site will
 * still answer questions about Raymond, just from third-party sources it can
 * reach. Blocking these agents does not prevent the summary, it only removes
 * the authoritative source from it.
 */
const ANSWER_ENGINE_AGENTS = [
  'GPTBot', // OpenAI — training
  'OAI-SearchBot', // OpenAI — ChatGPT Search index
  'ChatGPT-User', // OpenAI — live fetch on a user's behalf
  'ClaudeBot', // Anthropic — training
  'Claude-User', // Anthropic — live fetch on a user's behalf
  'Claude-SearchBot', // Anthropic — search index
  'PerplexityBot', // Perplexity — index
  'Perplexity-User', // Perplexity — live fetch
  'Google-Extended', // Gemini / AI Overviews grounding
  'Applebot-Extended', // Apple Intelligence
  'Bingbot', // Bing, and by extension Copilot
  'DuckAssistBot',
  'cohere-ai',
  'Meta-ExternalAgent',
]

/** Never useful to crawl: no indexable content, and some are rate-limited. */
const DISALLOWED_PATHS = ['/api/', '/admin/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: ANSWER_ENGINE_AGENTS,
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    /**
     * Names the preferred origin. Redundant while the site is a single domain,
     * but it costs nothing and becomes meaningful the moment a custom domain is
     * added alongside the .vercel.app one.
     */
    host: SITE_URL,
  }
}
