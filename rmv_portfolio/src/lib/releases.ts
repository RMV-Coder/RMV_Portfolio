// Server-only. Latest published release of a tool, read from GitHub.
import "server-only"

export interface ReleaseFile {
  name: string
  url: string
  sizeMb: number
}

export interface LatestRelease {
  /** Human version, e.g. "0.2.1" from the tag "desktop-v0.2.1". */
  version: string
  publishedAt: string
  pageUrl: string
  files: ReleaseFile[]
}

interface GitHubRelease {
  tag_name?: string
  published_at?: string
  html_url?: string
  assets?: { name: string; browser_download_url: string; size: number }[]
}

/**
 * What GitHub said about the latest release.
 *
 * `none` means GitHub answered 404: nothing is published yet. `error` means it
 * could not be asked (rate limit, outage, timeout, an odd reply), so whether a
 * release exists is unknown and the page must not say there is none.
 */
export type ReleaseLookup =
  | { state: "ok"; release: LatestRelease }
  | { state: "none" }
  | { state: "error" }

/**
 * The newest published release for `owner/name`.
 *
 * Failures are returned, never thrown, so the page always renders: on `none`
 * it says nothing is out yet (or links to the releases list), on `error` it
 * links to the releases list. The request gives up after five seconds, and a
 * successful answer is cached for an hour, so a slow GitHub holds the page up
 * for seconds at most and a download button appears on its own once a release
 * is published.
 */
export async function getLatestRelease(repo: string): Promise<ReleaseLookup> {
  try {
    const token = process.env.GITHUB_TOKEN
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    })
    if (response.status === 404) return { state: "none" }
    if (!response.ok) return { state: "error" }

    const release = (await response.json()) as GitHubRelease
    if (!release.tag_name) return { state: "error" }

    return {
      state: "ok",
      release: {
        version: release.tag_name.replace(/^[^\d]*/, ""),
        publishedAt: release.published_at ?? "",
        pageUrl: release.html_url ?? `https://github.com/${repo}/releases`,
        files: (release.assets ?? []).map((asset) => ({
          name: asset.name,
          url: asset.browser_download_url,
          sizeMb: Math.round((asset.size / 1048576) * 10) / 10,
        })),
      },
    }
  } catch {
    return { state: "error" }
  }
}
