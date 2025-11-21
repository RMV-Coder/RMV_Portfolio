import axios from 'axios'
import type { 
  GitHubRepository, 
  GitHubLanguages, 
  EnhancedProject, 
  GitHubApiError,
  ProjectMetadata 
} from '@/app/interface/github'

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_USERNAME = 'RMV-Coder' // Your GitHub username
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN // Optional for higher rate limits

// Create axios instance with default config
const githubApi = axios.create({
  baseURL: GITHUB_API_BASE,
  timeout: 10000,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    ...(GITHUB_TOKEN && { 'Authorization': `Bearer ${GITHUB_TOKEN}` })
  }
})

// Programming language colors (GitHub's color scheme)
const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  'C#': '#239120',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Swift: '#ffac45',
  Kotlin: '#F18E33',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#1572B6',
  Vue: '#4FC08D',
  React: '#61DAFB',
  Svelte: '#ff3e00',
  Shell: '#89e051',
  Dockerfile: '#384d54',
  Jupyter: '#DA5B0B',
  'Jupyter Notebook': '#DA5B0B'
}

// Project metadata (customize for your projects)
const PROJECT_METADATA: Record<string, ProjectMetadata> = {
  // Example entries - replace with your actual repositories
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

class GitHubService {
  private cache: Map<string, { data: unknown; timestamp: number }> = new Map()
  private readonly CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
  private readonly MAX_RETRIES = 3
  private readonly INITIAL_RETRY_DELAY = 1000 // 1 second

  private getCachedData<T>(key: string): T | null {
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data as T
    }
    this.cache.delete(key)
    return null
  }

  private setCachedData(key: string, data: unknown): void {
    this.cache.set(key, { data, timestamp: Date.now() })
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  private async retryWithBackoff<T>(
    fn: () => Promise<T>,
    retryCount = 0
  ): Promise<T> {
    try {
      return await fn()
    } catch (error) {
      // Check if it's a rate limit error
      const isRateLimit = error && 
        typeof error === 'object' && 
        'response' in error &&
        (error as { response: { status: number } }).response.status === 403

      if (isRateLimit && retryCount < this.MAX_RETRIES) {
        // Exponential backoff: 1s, 2s, 4s
        const delay = this.INITIAL_RETRY_DELAY * Math.pow(2, retryCount)
        console.warn(`[GitHub API] Rate limit hit, retrying in ${delay}ms (attempt ${retryCount + 1}/${this.MAX_RETRIES})`)
        await this.sleep(delay)
        return this.retryWithBackoff(fn, retryCount + 1)
      }

      // If not rate limit or max retries reached, throw error
      throw error
    }
  }

  private handleApiError(error: unknown): GitHubApiError {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as { response: { status: number; data?: { message?: string } } }
      const status = axiosError.response.status
      const message = axiosError.response.data?.message || 'Unknown error'
      
      let type: GitHubApiError['type'] = 'server_error'
      if (status === 403 && message.includes('rate limit')) {
        type = 'rate_limit'
      } else if (status === 401) {
        type = 'auth_error'
      } else if (status === 404) {
        type = 'not_found'
      }

      return { message, status, type }
    }
    
    const errorMessage = error instanceof Error ? error.message : 'Network error'
    return {
      message: errorMessage,
      status: 0,
      type: 'server_error'
    }
  }

  async fetchUserRepositories(): Promise<GitHubRepository[]> {
    const cacheKey = `repos-${GITHUB_USERNAME}`
    const cached = this.getCachedData<GitHubRepository[]>(cacheKey)
    if (cached) return cached

    try {
      const response = await this.retryWithBackoff(async () => {
        return await githubApi.get(`/users/${GITHUB_USERNAME}/repos`, {
          params: {
            per_page: 100,
            sort: 'updated',
            direction: 'desc'
          }
        })
      })

      const repositories: GitHubRepository[] = response.data
        .filter((repo: GitHubRepository) => 
          !repo.fork && // Exclude forked repositories
          !repo.archived && // Exclude archived repositories
          repo.visibility === 'public' && // Only public repositories
          repo.name !== GITHUB_USERNAME // Exclude profile README repository
        )

      this.setCachedData(cacheKey, repositories)
      return repositories
    } catch (error) {
      throw this.handleApiError(error)
    }
  }

  async fetchRepositoryLanguages(repoName: string): Promise<GitHubLanguages> {
    const cacheKey = `languages-${repoName}`
    const cached = this.getCachedData<GitHubLanguages>(cacheKey)
    if (cached) return cached

    try {
      const response = await this.retryWithBackoff(async () => {
        return await githubApi.get(`/repos/${GITHUB_USERNAME}/${repoName}/languages`)
      })
      
      const languages: GitHubLanguages = response.data
      
      this.setCachedData(cacheKey, languages)
      return languages
    } catch (error) {
      console.warn(`Failed to fetch languages for ${repoName}:`, error)
      return {}
    }
  }

  private calculateLanguagePercentages(languages: GitHubLanguages) {
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

  async getEnhancedProjects(): Promise<EnhancedProject[]> {
    try {
      const repositories = await this.fetchUserRepositories()
      
      // Enhance repositories with languages and metadata
      const enhancedProjects = await Promise.all(
        repositories.map(async (repo) => {
          const languages = await this.fetchRepositoryLanguages(repo.name)
          const languagePercentages = this.calculateLanguagePercentages(languages)
          const primaryLanguage = languagePercentages[0]?.name || repo.language || 'Unknown'
          
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
    } catch (error) {
      throw this.handleApiError(error)
    }
  }

  async getRateLimit() {
    try {
      const response = await this.retryWithBackoff(async () => {
        return await githubApi.get('/rate_limit')
      })
      return response.data.rate
    } catch (error) {
      throw this.handleApiError(error)
    }
  }
}

// Export singleton instance
export const githubService = new GitHubService()

// Export utility functions
export const getLanguageColor = (language: string): string => {
  return LANGUAGE_COLORS[language] || '#858585'
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'ongoing': return 'text-blue-500'
    case 'completed': return 'text-green-500'
    case 'archived': return 'text-gray-500'
    case 'maintained': return 'text-purple-500'
    default: return 'text-gray-500'
  }
}

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'personal': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    case 'professional': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
    case 'open-source': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    case 'client': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
    case 'school': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
  }
}