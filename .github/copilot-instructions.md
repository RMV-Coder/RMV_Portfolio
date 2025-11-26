# GitHub Copilot Custom Instructions - RMV_PORTFOLIO

## Project Overview
RMV_PORTFOLIO is a modern, high-performance Next.js portfolio website for a fullstack developer. The platform showcases GitHub projects, skills, experience, and provides a contact form for potential clients/employers.

**Tech Stack:**
- Frontend & Backend: Next.js 15+ (App Router), React 18+, TypeScript (strict mode)
- Styling: Tailwind CSS, Shadcn UI
- State Management: Zustand (theme, filters), Zod (validation)
- Email: Nodemailer
- External APIs: GitHub REST API
- Deployment: Vercel
- CDN: Cloudflare (optional)

## TypeScript Standards

### CRITICAL: Type Safety Rules
**NEVER use `any` type under any circumstances.** This is a zero-tolerance rule.

**Required practices:**
1. **Create explicit types or interfaces** for all data structures
2. Use `unknown` when the type is truly unknown and requires runtime type checking
3. Use `undefined` for optional values or values that may not exist
4. Use union types (`string | null`) when a value can be multiple types
5. Use generics (`T`, `K extends keyof T`) for reusable type-safe functions
6. Use type guards (`typeof`, `instanceof`, custom type predicates) to narrow `unknown` types

**Examples:**
```typescript
// ❌ NEVER do this
const data: any = await fetchGitHubRepos();
function process(input: any) { }

// ✅ ALWAYS do this
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
}

const data: unknown = await fetchGitHubRepos();
if (isGitHubRepoArray(data)) {
  // Type guard narrows unknown to GitHubRepo[]
  processRepos(data);
}

function isGitHubRepoArray(value: unknown): value is GitHubRepo[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === 'object' &&
        item !== null &&
        'id' in item &&
        'name' in item &&
        'html_url' in item
    )
  );
}
```

**Project-specific types:**
```typescript
// Custom project metadata
interface ProjectMetadata {
  repoName: string;
  status: 'ongoing' | 'completed' | 'archived';
  category: 'school' | 'personal' | 'freelance' | 'open-source';
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  featured: boolean;
  demoUrl?: string;
  thumbnailUrl?: string;
}

// Contact form data
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  attachment?: File;
}

// Theme
type Theme = 'light' | 'dark' | 'system';
```

**When encountering third-party libraries without types:**
- Create a `types/` directory with `.d.ts` declaration files
- Example: `types/nodemailer.d.ts`, `types/github.d.ts`

## Git Workflow & Branch Management

### Branch Strategy
**ALWAYS create a new branch when working on:**
- New features (`feat/feature-name`)
- Bug fixes (`fix/issue-description`)
- Refactoring (`refactor/component-name`)
- Documentation (`docs/what-changed`)
- Performance improvements (`perf/optimization-area`)
- Content updates (`content/section-name`)

**Branch naming convention:**
```
<type>/<short-description>
```

**Examples:**
- `feat/github-integration`
- `feat/contact-form`
- `fix/theme-flash-issue`
- `refactor/project-card`
- `docs/readme-setup`
- `perf/image-optimization`
- `content/about-section`

**Workflow:**
1. Create branch from `main`: `git checkout -b feat/feature-name`
2. Make commits following Conventional Commits (see below)
3. Before merging, check for conflicts: `git fetch origin main && git merge origin/main`
4. If conflicts exist, resolve them locally before pushing
5. Only merge when there are **zero conflicts**
6. Use pull requests for code review (if team project) or direct merge for solo work

### Commit Message Format (Conventional Commits)

**Structure:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Required commit types (maps to Semantic Versioning):**
- `feat:` - New feature (MINOR version bump: 1.x.0)
- `fix:` - Bug fix (PATCH version bump: 1.0.x)
- `BREAKING CHANGE:` - Breaking API change (MAJOR version bump: x.0.0)

**Additional recommended types:**
- `docs:` - Documentation only changes
- `style:` - Code style/formatting (whitespace, semicolons, no logic change)
- `refactor:` - Code change that neither fixes bug nor adds feature
- `perf:` - Performance improvement
- `test:` - Adding or correcting tests
- `build:` - Build system or dependency changes
- `ci:` - CI/CD configuration changes
- `chore:` - Maintenance tasks, tooling, configs
- `content:` - Content updates (copy, images, projects data)

**Scope (optional but recommended):**
Use parentheses to specify what part of portfolio changed:
- `(hero)` - Hero section
- `(projects)` - Projects/GitHub integration
- `(contact)` - Contact form
- `(theme)` - Theme system
- `(skills)` - Skills/tech stack section
- `(about)` - About section
- `(nav)` - Navigation
- `(footer)` - Footer
- `(api)` - API routes
- `(ui)` - UI components
- `(seo)` - SEO/metadata

**Description rules:**
- Use imperative mood: "add feature" not "added feature"
- Lowercase first letter (except proper nouns)
- No period at the end
- Max 72 characters
- Be specific and concise

**Breaking changes:**
Indicate with `!` after type/scope OR in footer:
```
feat(api)!: change contact form response format

BREAKING CHANGE: API now returns `success` boolean instead of status code
```

**Commit message examples:**

```bash
# Feature addition (MINOR bump)
feat(projects): add GitHub API integration with repo metadata

# Bug fix (PATCH bump)
fix(theme): resolve FOUC on initial page load

# Breaking change (MAJOR bump)
feat(contact)!: restructure email template format

BREAKING CHANGE: Nodemailer configuration now requires SMTP_PORT env variable

# Refactoring (no version bump)
refactor(projects): extract filter logic into custom hook

# Documentation (no version bump)
docs(readme): add environment variables setup guide

# Performance (PATCH bump - technically a fix)
perf(images): implement next/image for all assets with blur placeholders

# Style/formatting (no version bump)
style(components): format all files with prettier

# Content update (no version bump)
content(about): update bio and professional photo

# Build/dependency (no version bump)
build(deps): upgrade next.js to v14.2.0 and react to v18.3.0

# With scope and body
feat(projects): add filtering by tech stack and project status

Implement multi-filter system with URL query params for shareable links.
Add clear filters button and animated transitions.

# Multi-line commit with footer
fix(contact): prevent duplicate email submissions

Add rate limiting and disable submit button during API call
to prevent users from submitting form multiple times.

Closes: #12
```

**Commit command examples:**
```bash
git commit -m "feat(hero): add animated typing effect for tagline"

git commit -m "fix(projects): correct tech stack icon alignment on mobile"

git commit -m "refactor(api): extract email validation into utility function"

git commit -m "content(projects): add new freelance project metadata"
```

## Code Style & Best Practices

### Next.js Specific
- Use App Router (`app/` directory), not Pages Router
- Server Components by default, use `'use client'` only when necessary
- API routes in `app/api/` directory (e.g., `app/api/contact/route.ts`)
- Use Server Actions for form submissions when appropriate
- Implement proper error boundaries
- Use Suspense boundaries for async components (GitHub data fetching)
- Optimize fonts with `next/font` (Google Fonts or local)
- Use `next/image` for all images with proper sizing and formats

### React Best Practices
- Functional components with hooks (no class components)
- Use `useCallback` for event handlers passed to children
- Use `useMemo` for expensive computations (filtering large project lists)
- Custom hooks prefix: `use` (e.g., `useGitHub`, `useTheme`, `useContactForm`)
- Keep components small and focused (single responsibility)
- Colocate related components (e.g., `ProjectCard/` folder with `index.tsx`, `ProjectCard.tsx`, `TechStackBadge.tsx`)

### TypeScript Conventions
- Interface names: PascalCase (e.g., `ProjectMetadata`, `ContactFormData`)
- Type names: PascalCase (e.g., `Theme`, `ProjectStatus`)
- Enum names: PascalCase with UPPER_SNAKE_CASE values
```typescript
enum ProjectStatus {
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  ARCHIVED = 'ARCHIVED',
}

enum ProjectCategory {
  SCHOOL = 'SCHOOL',
  PERSONAL = 'PERSONAL',
  FREELANCE = 'FREELANCE',
  OPEN_SOURCE = 'OPEN_SOURCE',
}
```

### File Naming
- Components: PascalCase (e.g., `ProjectCard.tsx`, `ContactForm.tsx`)
- Utilities/helpers: camelCase (e.g., `formatDate.ts`, `validateEmail.ts`)
- Hooks: camelCase with `use` prefix (e.g., `useTheme.ts`, `useGitHub.ts`)
- Types/Interfaces: PascalCase (e.g., `types/Project.ts`, `types/Contact.ts`)
- API routes: kebab-case (e.g., `app/api/contact/route.ts`, `app/api/github/route.ts`)
- Config files: kebab-case (e.g., `project-metadata.json`, `tech-stack-icons.ts`)

### Error Handling
Always include proper error handling:
```typescript
// ❌ Never do this
const repos = await fetchGitHubRepos();

// ✅ Always do this
try {
  const repos = await fetchGitHubRepos();
  // Handle success
} catch (error) {
  if (error instanceof GitHubAPIError) {
    // Specific GitHub API error handling
    console.error('GitHub API error:', error.message);
  } else if (error instanceof NetworkError) {
    // Network error handling
    console.error('Network error:', error.message);
  } else {
    // Generic error handling
    console.error('Unexpected error:', error);
  }
  // Return fallback data or throw
}
```

### Async/Await
- Prefer `async/await` over `.then()` chains
- Always handle rejections
- Use `Promise.all()` for parallel operations (fetching multiple GitHub endpoints)
- Add timeout for external API calls (GitHub, email sending)

### Validation
- Use Zod schemas for all data validation
- Validate on both client and server
- Example:
```typescript
import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

const ProjectMetadataSchema = z.object({
  repoName: z.string(),
  status: z.enum(['ongoing', 'completed', 'archived']),
  category: z.enum(['school', 'personal', 'freelance', 'open-source']),
  techStack: z.object({
    frontend: z.array(z.string()),
    backend: z.array(z.string()),
    database: z.array(z.string()),
    tools: z.array(z.string()),
  }),
  featured: z.boolean().default(false),
  demoUrl: z.string().url().optional(),
  thumbnailUrl: z.string().url().optional(),
});

type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;
```

## API Integration

### GitHub API
- Use GitHub REST API v3 for repository data
- Authenticate with Personal Access Token (read-only scope)
- Cache responses to avoid rate limits (use Vercel Edge Config or in-memory cache)
- Handle rate limit errors gracefully
- Example endpoint: `/api/github/repos`

**Required data:**
- Repository name, description, URL
- Star count, fork count
- Last updated date
- Topics/tags
- Primary language

### Contact Form API
- Endpoint: `/app/api/contact/route.ts`
- Use Nodemailer for email sending
- Server-side validation with Zod
- Rate limiting (max 5 submissions per IP per hour)
- Return proper HTTP status codes
- Log all submissions (success and errors)

**Status codes:**
- 200: Email sent successfully
- 400: Validation error
- 429: Too many requests (rate limited)
- 500: Email sending failed

## Security Requirements

1. **Never commit sensitive data:**
   - API keys, tokens, passwords
   - Use environment variables (`.env.local`)
   - Add `.env.local` to `.gitignore`

2. **GitHub Token:**
   - Use fine-grained personal access token
   - Read-only permissions (public repositories)
   - Store in `GITHUB_TOKEN` environment variable

3. **Email Configuration:**
   - Use app-specific passwords (Gmail)
   - Store SMTP credentials in environment variables
   - Never expose credentials in client-side code

4. **Input validation:**
   - Sanitize all user inputs in contact form
   - Validate email format on server
   - Prevent XSS attacks (escape HTML in messages)
   - Rate limit contact form submissions

5. **API Route Security:**
   - Validate request methods (POST only for contact form)
   - Add CORS headers if needed
   - Implement CSRF protection for forms

## Testing Guidelines

- Write tests for critical business logic:
  - Contact form validation
  - GitHub API integration
  - Project metadata merging
  - Theme persistence
- Test format: `describe` → `it` blocks
- Mock external APIs (GitHub, Nodemailer)
- Test file naming: `*.test.ts` or `*.spec.ts`
- Aim for 80%+ coverage on new features
- Test responsive design manually across devices

## Documentation

### Code Comments
- Use JSDoc for functions/components:
```typescript
/**
 * Fetches repositories from GitHub API and merges with custom metadata
 * @param username - GitHub username
 * @returns Array of enriched project data with custom metadata
 * @throws {GitHubAPIError} If API request fails
 */
async function fetchEnrichedProjects(username: string): Promise<EnrichedProject[]> {
  // Implementation
}
```

- Explain **why**, not **what** (code should be self-explanatory)
- Add TODO comments with context:
```typescript
// TODO: Implement caching to reduce GitHub API calls and avoid rate limits
// TODO: Add pagination for users with 50+ repositories
```

### Project Metadata Documentation
- Maintain `project-metadata.json` with clear schema
- Document custom fields and their purpose
- Provide examples for each project category

## Performance Optimization

- Use dynamic imports for heavy components (contact form, project filters)
- Optimize images:
  - Use WebP format with JPEG fallback
  - Implement lazy loading with `next/image`
  - Add blur placeholders for better UX
  - Proper sizing (srcset for responsive images)
- Minimize bundle size:
  - Check with `npm run build` and analyze
  - Use `@next/bundle-analyzer` if needed
  - Tree-shake unused dependencies
- Use React.memo for expensive renders (ProjectCard, TechStackBadge)
- Debounce search/filter inputs (300ms delay)
- Implement pagination or "Load More" for large project lists
- Prefetch GitHub API data on server (RSC)
- Cache GitHub API responses (in-memory or Redis for production)

## Accessibility (WCAG AA)

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels for interactive elements
- Keyboard navigation support:
  - Tab through all interactive elements
  - Enter/Space to activate buttons
  - Escape to close modals/menus
- Color contrast minimum 4.5:1 (use contrast checker)
- Focus indicators visible (custom focus styles)
- Alt text for all images (especially project thumbnails)
- Screen reader friendly:
  - Announce theme changes
  - Provide context for icon-only buttons
  - Use aria-live regions for dynamic content
- Skip to main content link
- Form labels and error messages

## Environment Variables

Required env vars (never hardcode):
```bash
# GitHub
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxx
GITHUB_USERNAME=your-username

# Email (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=your-email@gmail.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Sentry Error Tracking
SENTRY_DSN=https://xxxxxxxxxxxxx@sentry.io/xxxxxxx

# Optional: Vercel Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxxxxxxxxxxxx
```

**Environment variable naming:**
- `NEXT_PUBLIC_*` prefix for client-side variables
- No prefix for server-side only variables
- Use UPPER_SNAKE_CASE

## Common Patterns

### Theme Provider (Client Component)
```typescript
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
```

### GitHub API Fetch (Server-Side)
```typescript
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new GitHubAPIError(`GitHub API error: ${response.statusText}`);
  }

  const data: unknown = await response.json();
  if (!isGitHubRepoArray(data)) {
    throw new Error('Invalid GitHub API response format');
  }

  return data;
}
```

### Contact Form API Route
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/nodemailer';
import { rateLimit } from '@/lib/rate-limit';

const ContactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.ip ?? 'unknown';
    const { success } = await rateLimit(ip);
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate
    const body: unknown = await req.json();
    const data = ContactFormSchema.parse(body);

    // Send email
    await sendEmail({
      to: process.env.SMTP_TO!,
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
```

### Error Response Helper
```typescript
export function errorResponse(
  message: string,
  status: number = 500,
  details?: unknown
): NextResponse {
  return NextResponse.json(
    { error: message, ...(details && { details }) },
    { status }
  );
}
```

### Project Metadata Merge
```typescript
export function mergeProjectMetadata(
  githubRepos: GitHubRepo[],
  metadata: ProjectMetadata[]
): EnrichedProject[] {
  return githubRepos.map((repo) => {
    const meta = metadata.find((m) => m.repoName === repo.name);
    return {
      ...repo,
      status: meta?.status ?? 'completed',
      category: meta?.category ?? 'personal',
      techStack: meta?.techStack ?? { frontend: [], backend: [], database: [], tools: [] },
      featured: meta?.featured ?? false,
      demoUrl: meta?.demoUrl,
      thumbnailUrl: meta?.thumbnailUrl,
    };
  });
}
```

## Reminders

✅ **ALWAYS create types/interfaces** - never use `any`
✅ **ALWAYS create feature branches** - never commit directly to `main`
✅ **ALWAYS follow Conventional Commits** - enables semantic versioning
✅ **ALWAYS handle errors** - try/catch for async operations (GitHub API, email)
✅ **ALWAYS validate inputs** - use Zod schemas (contact form, project metadata)
✅ **ALWAYS check for merge conflicts** - resolve before pushing
✅ **ALWAYS optimize images** - use next/image with proper sizing
✅ **ALWAYS use environment variables** - never hardcode tokens/credentials
✅ **ALWAYS test responsive design** - mobile, tablet, desktop
✅ **ALWAYS respect GitHub API rate limits** - implement caching
✅ **ALWAYS test contact form** - validation, rate limiting, email delivery
✅ **ALWAYS add accessibility features** - keyboard nav, ARIA, alt text

❌ **NEVER use `any` type** - create proper types
❌ **NEVER commit to `main` directly** - use feature branches
❌ **NEVER hardcode sensitive data** - use env variables
❌ **NEVER skip input validation** - security risk (XSS, injection)
❌ **NEVER ignore TypeScript errors** - fix them properly
❌ **NEVER merge with conflicts** - resolve locally first
❌ **NEVER use `<img>` tags** - always use next/image
❌ **NEVER expose API keys client-side** - keep in server components/API routes
❌ **NEVER skip error handling** - especially for external APIs
❌ **NEVER commit `.env.local`** - add to .gitignore

## Questions or Clarifications

When suggesting code:
1. Explain the approach first
2. Show type-safe implementation with proper interfaces
3. Include error handling and edge cases
4. Mention any performance implications
5. Suggest accessibility improvements if applicable
6. Consider mobile responsiveness

If you need clarification on requirements, ask specific questions about:
- Project metadata structure (what fields to include)
- GitHub API data (which endpoints, what data to display)
- Contact form requirements (validation rules, rate limiting)
- Design preferences (dark/light theme, animations, layout)
- Performance constraints (caching strategy, image optimization)
- Content (bio, skills list, featured projects)

## Portfolio-Specific Best Practices

### Projects Section
- Merge GitHub API data with custom metadata from `project-metadata.json`
- Display tech stack icons in organized groups (Frontend, Backend, Database, Tools)
- Implement filtering by status, category, and tech stack
- Add "Featured" section for best projects
- Include external links (live demo, GitHub repo) with proper icons
- Show last updated date and star count
- Add project thumbnails with fallback to generic image

### Contact Form
- Clear, simple design with minimal fields
- Real-time validation feedback (inline errors)
- Loading state during submission
- Success/error messages with animations
- Disable submit button after successful submission
- Optional file attachment for resume (validate file type and size)
- Consider adding reCAPTCHA v3 for spam prevention

### Theme System
- Support dark, light, and system preference
- Persist user choice in localStorage
- Smooth transition animations (no FOUC)
- Theme toggle button in navigation (sun/moon icons)
- Ensure proper contrast in both themes
- Test all components in both themes

### Performance Targets
- Lighthouse Performance Score: 90+
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s
- Bundle size: Keep under 200KB (initial load)

### SEO Requirements
- Unique meta title and description for homepage
- Open Graph tags for social media sharing
- Structured data (JSON-LD) for Person schema
- Sitemap.xml generated automatically
- Robots.txt configured properly
- Canonical URLs set
- Alt text for all images
- Semantic HTML structure

---

**Last Updated:** November 26, 2025
**Project:** RMV_PORTFOLIO (Fullstack Developer Portfolio)
**Framework:** Next.js 15+ with App Router
**Deployment:** Vercel