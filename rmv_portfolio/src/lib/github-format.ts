// Client-safe GitHub display helpers (no API access, no server env).

// Programming language colors (GitHub's color scheme)
export const LANGUAGE_COLORS: Record<string, string> = {
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
