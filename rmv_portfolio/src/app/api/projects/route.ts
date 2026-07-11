import { NextResponse } from 'next/server'
import { getEnhancedProjects, GitHubApiError } from '@/lib/github'

// Cache the whole route response; Next serves the cached copy (and stale
// content while revalidating), so visitors never hit GitHub directly and a
// single upstream call per window serves everyone.
export const revalidate = 900

export async function GET() {
  try {
    const projects = await getEnhancedProjects()
    return NextResponse.json(projects, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=3600',
      },
    })
  } catch (error) {
    console.error('[api/projects] Failed to fetch projects:', error)
    const status = error instanceof GitHubApiError && error.status === 403 ? 503 : 502
    return NextResponse.json(
      { error: 'Failed to load projects. Please try again later.' },
      { status }
    )
  }
}
