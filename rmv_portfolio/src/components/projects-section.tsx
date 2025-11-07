"use client"

import * as React from "react"
import { motion } from "framer-motion"
import useSWR from "swr"
import { Search, Github, Loader2, AlertCircle, RefreshCw, Filter } from "lucide-react"
import { githubService } from "@/lib/github"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { EnhancedProject } from "@/app/interface/github"

const fetcher = () => githubService.getEnhancedProjects()

export function ProjectsSection() {
  const { data: projects, error, isLoading, mutate } = useSWR<EnhancedProject[]>(
    'github-projects',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes
    }
  )

  const [filters, setFilters] = React.useState<{
    search: string
    language: string[]
  }>({
    search: '',
    language: []
  })

  // Filter projects based on current filters
  const filteredProjects = React.useMemo(() => {
    if (!projects) return []

    return projects.filter(project => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        const matchesName = project.name.toLowerCase().includes(searchTerm)
        const matchesDescription = project.description?.toLowerCase().includes(searchTerm) || false
        const matchesLanguage = project.primaryLanguage?.toLowerCase().includes(searchTerm) || false
        
        if (!matchesName && !matchesDescription && !matchesLanguage) {
          return false
        }
      }

      // Language filter
      if (filters.language && filters.language.length > 0) {
        if (!project.primaryLanguage || !filters.language.includes(project.primaryLanguage)) {
          return false
        }
      }

      return true
    })
  }, [projects, filters])

  // Get unique languages for filter options
  const availableLanguages = React.useMemo(() => {
    if (!projects) return []
    const languages = projects
      .map(p => p.primaryLanguage)
      .filter((lang): lang is string => Boolean(lang))
      .filter((lang, index, arr) => arr.indexOf(lang) === index)
    return languages.sort()
  }, [projects])

  const handleLanguageFilter = (language: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      language: checked
        ? [...prev.language, language]
        : prev.language.filter(lang => lang !== language)
    }))
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      language: []
    })
  }

  const featuredProjects = filteredProjects.filter(p => p.metadata?.featured)
  const regularProjects = filteredProjects.filter(p => !p.metadata?.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="p-4 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of my recent work, showcasing various technologies and problem-solving approaches
          </p>

          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Language Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Languages
                  {filters.language.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                      {filters.language.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {availableLanguages.length > 0 ? (
                  availableLanguages.map(language => (
                    <DropdownMenuCheckboxItem
                      key={language}
                      checked={filters.language.includes(language)}
                      onCheckedChange={(checked) => handleLanguageFilter(language, checked)}
                    >
                      {language}
                    </DropdownMenuCheckboxItem>
                  ))
                ) : (
                  <div className="px-2 py-1.5 text-sm text-muted-foreground">
                    No languages available
                  </div>
                )}
                {filters.language.length > 0 && (
                  <>
                    <DropdownMenuSeparator />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-muted-foreground"
                      onClick={clearFilters}
                    >
                      Clear all filters
                    </Button>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Refresh Button */}
            <Button
              onClick={() => mutate()}
              disabled={isLoading}
              variant="default"
              className="flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {/* Results info */}
          <div className="text-center text-sm text-muted-foreground mt-4">
            {/* Showing {filteredProjects.length} of {projects?.length || 0} projects */}
            {(filters.search || filters.language.length > 0) && (
              <span className="ml-2">
                <button
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-primary/80 transition-colors"
                >
                  Clear filters
                </button>
              </span>
            )}
          </div>


        </motion.div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Loading projects...</span>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Failed to load projects</h3>
            <p className="text-muted-foreground mb-4">
              {error.message || 'Something went wrong while fetching GitHub data.'}
            </p>
            <button
              onClick={() => mutate()}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Results Info */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                Showing {filteredProjects.length} of {projects?.length || 0} projects
              </p>
            </div>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">⭐ Featured Projects</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      featured={true}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Regular Projects */}
            {regularProjects.length > 0 && (
              <div>
                {featuredProjects.length > 0 && (
                  <h3 className="text-2xl font-bold mb-6 text-center">🚀 Other Projects</h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {regularProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index + featuredProjects.length}
                      featured={false}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredProjects.length === 0 && projects && projects.length > 0 && (
              <div className="text-center py-12">
                <Github className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or clearing the filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* GitHub Link */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="https://github.com/RMV-Coder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                View all projects on GitHub
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}