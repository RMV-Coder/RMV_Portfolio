// Server-only GitHub data layer. Do NOT import from client components —
// use the /api/projects route (data) or lib/github-format (display helpers).
import type {
  GitHubRepository,
  GitHubLanguages,
  EnhancedProject,
  ProjectMetadata
} from '@/app/interface/github'
import { LANGUAGE_COLORS } from '@/lib/github-format'

const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_USERNAME = 'RMV-Coder'

// Optional server-side token (never NEXT_PUBLIC_*). Without it the server's
// quota is 60 req/h — fine behind Next's data cache; with it, 5,000 req/h.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

// How long GitHub responses stay in Next's data cache before revalidating.
const REVALIDATE_SECONDS = 900

class GitHubApiError extends Error {
  constructor(message: string, public status: number) {
    super(message)
    this.name = 'GitHubApiError'
  }
}

async function githubFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
    },
    // Cached in Next's data cache and shared across visitors — the browser
    // never talks to GitHub directly, so visitor IP rate limits can't break
    // the projects section.
    next: { revalidate: REVALIDATE_SECONDS },
  })

  if (!response.ok) {
    let message = `GitHub API error (${response.status})`
    try {
      const body = (await response.json()) as { message?: string }
      if (body.message) message = body.message
    } catch {
      // Non-JSON error body — keep the generic message.
    }
    throw new GitHubApiError(message, response.status)
  }

  return response.json() as Promise<T>
}

// Project metadata (customize for your projects)
const PROJECT_METADATA: Record<string, ProjectMetadata> = {
  'RMV_Portfolio': {
    id: 1,
    featured: true,
    status: 'ongoing',
    category: 'personal',
    techStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Nodemailer'],
      database: [],
      tools: ['Vercel', 'GitHub', 'VS Code']
    },
    priority: 1,
    highlights: ['Responsive Design', 'Dark/Light Theme', 'Smooth Animations', 'GitHub Integration']
  },
  // Add more project metadata as needed
}

async function fetchUserRepositories(): Promise<GitHubRepository[]> {
  const repos = await githubFetch<GitHubRepository[]>(
    `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc`
  )

  return repos.filter(
    (repo) =>
      !repo.fork && // Exclude forked repositories
      !repo.archived && // Exclude archived repositories
      repo.visibility === 'public' && // Only public repositories
      repo.name !== GITHUB_USERNAME // Exclude profile README repository
  )
}

async function fetchRepositoryLanguages(repoName: string): Promise<GitHubLanguages> {
  try {
    return await githubFetch<GitHubLanguages>(
      `/repos/${GITHUB_USERNAME}/${repoName}/languages`
    )
  } catch (error) {
    console.warn(`Failed to fetch languages for ${repoName}:`, error)
    return {}
  }
}

function calculateLanguagePercentages(languages: GitHubLanguages) {
  const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0)
  if (total === 0) return []

  return Object.entries(languages)
    .map(([name, bytes]) => ({
      name,
      percentage: Math.round((bytes / total) * 100),
      color: LANGUAGE_COLORS[name] || '#858585'
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5) // Top 5 languages
}

export async function getEnhancedProjects(): Promise<EnhancedProject[]> {
  const repositories = await fetchUserRepositories()

  const enhancedProjects = await Promise.all(
    repositories.map(async (repo) => {
      const languages = await fetchRepositoryLanguages(repo.name)
      const languagePercentages = calculateLanguagePercentages(languages)
      const primaryLanguage =
        languagePercentages[0]?.name || repo.language || 'Unknown'

      const enhanced: EnhancedProject = {
        ...repo,
        languages,
        primaryLanguage,
        languagePercentages,
        metadata: PROJECT_METADATA[repo.name]
      }

      return enhanced
    })
  )

  // Sort by priority (featured first), then by update date
  return enhancedProjects.sort((a, b) => {
    const aPriority = a.metadata?.priority || 999
    const bPriority = b.metadata?.priority || 999

    if (aPriority !== bPriority) {
      return aPriority - bPriority
    }

    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  })
}

export { GitHubApiError }
