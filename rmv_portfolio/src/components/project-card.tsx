"use client"

import { motion } from "framer-motion"
import { 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  Eye, 
  Calendar,
  Code,
  Zap
} from "lucide-react"
import type { EnhancedProject } from "@/app/interface/github"
import { formatDate, getStatusColor, getCategoryColor } from "@/lib/github-format"
import { trackProjectClick } from "@/lib/analytics"

interface ProjectCardProps {
  project: EnhancedProject
  index: number
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-card rounded-xl border border-border hover:border-primary/50 overflow-hidden transition-colors duration-300 ${
        featured ? 'lg:col-span-2 xl:col-span-2' : ''
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
            <Zap className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Status Badge */}
      {project.metadata?.status && (
        <div className="absolute top-4 right-4 z-10">
          <div className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(project.metadata.status)} bg-background/80 backdrop-blur-sm`}>
            {project.metadata.status}
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 truncate">
              {project.name.replace(/_/g, ' ').replace(/-/g, ' ')}
            </h3>
            
            {/* Category Tag */}
            {project.metadata?.category && (
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.metadata.category)}`}>
                {project.metadata.category}
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-3 text-muted-foreground text-sm ml-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {project.stargazers_count}
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {project.forks_count}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {project.description || 'No description available.'}
        </p>

        {/* Tech Stack */}
        {project.metadata?.techStack && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {[
                ...project.metadata.techStack.frontend,
                ...project.metadata.techStack.backend,
                ...project.metadata.techStack.database,
                ...project.metadata.techStack.tools
              ].slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Language Bar */}
        {project.languagePercentages && project.languagePercentages.length > 0 && (
          <div className="mb-4">
            <div className="flex h-2 rounded-full overflow-hidden bg-muted">
              {project.languagePercentages.map((lang) => (
                <div
                  key={lang.name}
                  className="h-full"
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color
                  }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Code className="w-3 h-3" />
                {project.primaryLanguage}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(project.updated_at)}
              </div>
            </div>
          </div>
        )}

        {/* Highlights */}
        {project.metadata?.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {project.metadata.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight}
                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
          <motion.a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => trackProjectClick(project.name)}
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">Code</span>
          </motion.a>

          {(project.homepage || project.metadata?.demoUrl) && (
            <motion.a
              href={project.homepage || project.metadata?.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => trackProjectClick(project.name)}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.a>
          )}

          <div className="ml-auto flex items-center gap-1 text-muted-foreground text-xs">
            <Eye className="w-3 h-3" />
            {project.watchers_count}
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}