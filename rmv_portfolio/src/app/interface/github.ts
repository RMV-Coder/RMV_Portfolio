// GitHub API Response Types
export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  languages_url: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  pushed_at: string
  topics: string[]
  visibility: "public" | "private"
  archived: boolean
  disabled: boolean
  fork: boolean
}

export interface GitHubLanguages {
  [key: string]: number
}

// Enhanced Project Data (GitHub + Custom Metadata)
export interface ProjectMetadata {
  id: number
  featured: boolean
  status: "ongoing" | "completed" | "archived" | "maintained"
  category: "personal" | "professional" | "open-source" | "client" | "school"
  techStack: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
  demoUrl?: string
  screenshots?: string[]
  highlights?: string[]
  priority: number // For sorting featured projects
}

export interface EnhancedProject extends GitHubRepository {
  metadata?: ProjectMetadata
  languages?: GitHubLanguages
  primaryLanguage?: string
  languagePercentages?: { name: string; percentage: number; color: string }[]
}

// Filtering and Search Types
export interface ProjectFilters {
  status?: string[]
  category?: string[]
  language?: string[]
  featured?: boolean
  search?: string
}

export interface ProjectsState {
  repositories: EnhancedProject[]
  loading: boolean
  error: string | null
  filters: ProjectFilters
  filteredProjects: EnhancedProject[]
}

// API Response Types
export interface GitHubApiResponse {
  repositories: GitHubRepository[]
  totalCount: number
  rateLimit: {
    limit: number
    remaining: number
    reset: number
  }
}

export interface GitHubApiError {
  message: string
  status: number
  type: "rate_limit" | "auth_error" | "not_found" | "server_error"
}