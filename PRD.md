# Fullstack Developer Portfolio - Product Requirements Document

## Project Overview
A modern, high-performance Next.js portfolio website for a fullstack developer, featuring GitHub repository integration, contact form with Nodemailer, and dark/light theme toggle. Deployed on Vercel.

**Tech Stack:** Next.js 14+, React, TypeScript, Tailwind CSS, Nodemailer, GitHub API, Vercel

---

## Design Principles
1. **Dark/Minimalist Theme** - Primary dark design with clean aesthetics
2. **Light Mode Toggle** - User preference switcher with persistence
3. **Clean & Professional** - Easy-to-read fonts, consistent color schemes, guided layout
4. **One-Page Layout** - Smooth scrolling sections
5. **Animated Backgrounds** - Subtle motion graphics without performance impact

---

## Epic 1: Project Setup & Infrastructure
**Priority:** P0 (Critical) | **Duration:** 1-2 days

### Task 1.1: Initialize Next.js Project
**Priority:** P0 | **Dependencies:** None
- **Subtasks:**
  - [ ] Create Next.js 14+ project with App Router
  - [ ] Configure TypeScript
  - [ ] Set up Tailwind CSS
  - [ ] Configure ESLint and Prettier
  - [ ] Initialize Git repository
  - [ ] Create project folder structure (`/components`, `/app`, `/lib`, `/public`, `/styles`)
- **Test Strategy:**
  - Verify dev server runs without errors
  - Check TypeScript compilation
  - Validate Tailwind CSS is working

### Task 1.2: Environment & Deployment Setup
**Priority:** P0 | **Dependencies:** Task 1.1
- **Subtasks:**
  - [ ] Create `.env.local` file structure
  - [ ] Set up environment variables (GitHub Token, Email credentials)
  - [ ] Configure Vercel project
  - [ ] Set up continuous deployment from GitHub
  - [ ] Add environment variables to Vercel dashboard
- **Test Strategy:**
  - Deploy test build to Vercel
  - Verify environment variables are accessible
  - Test production build locally

---

## Epic 2: Theme System & Layout
**Priority:** P0 (Critical) | **Duration:** 2-3 days

### Task 2.1: Implement Dark/Light Mode Toggle
**Priority:** P0 | **Dependencies:** Task 1.1
- **Subtasks:**
  - [ ] Install and configure `next-themes` package
  - [ ] Create ThemeProvider component
  - [ ] Build theme toggle button component
  - [ ] Implement localStorage persistence
  - [ ] Set up Tailwind dark mode classes
  - [ ] Define color palette for both themes (CSS variables)
- **Test Strategy:**
  - Toggle between themes and verify persistence
  - Test system preference detection
  - Validate no flash of unstyled content (FOUC)
  - Test across different browsers

### Task 2.2: Create Base Layout & Navigation
**Priority:** P0 | **Dependencies:** Task 2.1
- **Subtasks:**
  - [ ] Build responsive navigation bar component
  - [ ] Implement smooth scroll navigation
  - [ ] Add active section highlighting
  - [ ] Create mobile hamburger menu
  - [ ] Add navigation animation on scroll (hide/show)
  - [ ] Include theme toggle in navigation
- **Test Strategy:**
  - Test navigation on mobile/tablet/desktop
  - Verify smooth scrolling works on all sections
  - Test hamburger menu open/close functionality
  - Validate active section highlighting accuracy

### Task 2.3: Design System & Typography
**Priority:** P1 | **Dependencies:** Task 2.1
- **Subtasks:**
  - [ ] Define typography scale (h1-h6, body, caption)
  - [ ] Create reusable button components
  - [ ] Build card component system
  - [ ] Define spacing/padding standards
  - [ ] Create animation utility classes
  - [ ] Set up custom Tailwind config
- **Test Strategy:**
  - Visual review of all components in both themes
  - Test component reusability
  - Validate accessibility (color contrast, font sizes)

---

## Epic 3: Hero Section
**Priority:** P0 (Critical) | **Duration:** 1-2 days

### Task 3.1: Hero Component Development
**Priority:** P0 | **Dependencies:** Task 2.2, Task 2.3
- **Subtasks:**
  - [ ] Create hero section layout
  - [ ] Add animated background (particles/gradient)
  - [ ] Implement typing animation for tagline
  - [ ] Add profile image with subtle animation
  - [ ] Include CTA buttons (View Projects, Contact Me)
  - [ ] Add social media icon links
  - [ ] Implement scroll down indicator
- **Test Strategy:**
  - Verify animations perform smoothly (60fps)
  - Test responsive layout on all screen sizes
  - Validate CTA button functionality
  - Check loading performance impact

---

## Epic 4: About/Bio Section
**Priority:** P1 (High) | **Duration:** 1 day

### Task 4.1: About Section Component
**Priority:** P1 | **Dependencies:** Task 2.3
- **Subtasks:**
  - [ ] Create two-column layout (text + image)
  - [ ] Add professional photo with styling
  - [ ] Write compelling bio copy
  - [ ] Add personality highlights/interests
  - [ ] Include resume download button
  - [ ] Add fade-in animation on scroll
- **Test Strategy:**
  - Review content for grammar/spelling
  - Test resume download functionality
  - Verify mobile responsiveness
  - Validate animation triggers correctly

---

## Epic 5: Tech Stack/Skills Display
**Priority:** P1 (High) | **Duration:** 1-2 days

### Task 5.1: Skills Grid Component
**Priority:** P1 | **Dependencies:** Task 2.3
- **Subtasks:**
  - [ ] Create categorized skill sections (Frontend, Backend, Tools, Database, DevOps)
  - [ ] Build skill card component with icon + name
  - [ ] Implement hover effects on skill cards
  - [ ] Add stagger animation on scroll
  - [ ] Source and optimize tech stack icons/logos
  - [ ] Make grid responsive
- **Test Strategy:**
  - Verify all icons load correctly
  - Test hover effects in both themes
  - Validate responsive grid behavior
  - Check animation performance

---

## Epic 6: GitHub Projects Integration
**Priority:** P0 (Critical) | **Duration:** 3-4 days

### Task 6.1: GitHub API Integration
**Priority:** P0 | **Dependencies:** Task 1.2
- **Subtasks:**
  - [ ] Create GitHub API service (`/lib/github.ts`)
  - [ ] Implement fetch for user repositories
  - [ ] Add error handling and retry logic
  - [ ] Set up API response caching (SWR or React Query)
  - [ ] Create TypeScript interfaces for GitHub data
  - [ ] Implement rate limit handling
- **Test Strategy:**
  - Test with valid/invalid GitHub tokens
  - Verify error handling for API failures
  - Test rate limit scenarios
  - Validate data structure matches interfaces

### Task 6.2: Project Card Component
**Priority:** P0 | **Dependencies:** Task 2.3, Task 6.1
- **Subtasks:**
  - [ ] Design project card layout
  - [ ] Display tech stack icons (grouped: Frontend, Backend, Tools, DB)
  - [ ] Add status badges (Ongoing, Completed, Archived)
  - [ ] Implement category tags (School, Personal, Freelance, Open Source)
  - [ ] Show project description and README excerpt
  - [ ] Add live demo + GitHub repo links
  - [ ] Display star count and last updated date
  - [ ] Include project thumbnail/screenshot placeholder
  - [ ] Add hover effects and animations
- **Test Strategy:**
  - Test card rendering with various data scenarios
  - Verify tech stack icons render correctly
  - Test external links open properly
  - Validate responsive card layout

### Task 6.3: Project Metadata Management
**Priority:** P0 | **Dependencies:** Task 6.2
- **Subtasks:**
  - [ ] Create JSON configuration file for project metadata
  - [ ] Define schema for custom project data (status, tags, tech stack grouping)
  - [ ] Implement merge function (GitHub data + custom metadata)
  - [ ] Add fallback for missing metadata
  - [ ] Create admin interface or simple config file documentation
- **Test Strategy:**
  - Verify metadata correctly merges with GitHub data
  - Test with missing/incomplete metadata
  - Validate default fallback behavior

### Task 6.4: Filtering & Search System
**Priority:** P1 | **Dependencies:** Task 6.2, Task 6.3
- **Subtasks:**
  - [ ] Build filter dropdown/chips (Status, Category, Tech Stack)
  - [ ] Implement search bar for project names/descriptions
  - [ ] Add multi-filter support
  - [ ] Create "Clear All Filters" functionality
  - [ ] Add filter state management
  - [ ] Implement URL query params for shareable filtered views
  - [ ] Add animation for filtering transitions
- **Test Strategy:**
  - Test single and multiple filter combinations
  - Verify search functionality
  - Test URL sharing with filters
  - Validate filter persistence and clearing

### Task 6.5: Projects Section Layout
**Priority:** P0 | **Dependencies:** Task 6.2, Task 6.4
- **Subtasks:**
  - [ ] Create responsive grid layout
  - [ ] Add section header with description
  - [ ] Implement pagination or "Load More" button
  - [ ] Add empty state for no results
  - [ ] Include loading skeleton components
  - [ ] Add sort options (Recent, Stars, Name)
- **Test Strategy:**
  - Test grid responsiveness across devices
  - Verify pagination/load more functionality
  - Test loading states
  - Validate empty state displays correctly

---

## Epic 7: Contact Form with Nodemailer
**Priority:** P0 (Critical) | **Duration:** 2-3 days

### Task 7.1: Contact Form UI Component
**Priority:** P0 | **Dependencies:** Task 2.3
- **Subtasks:**
  - [ ] Build form layout with fields (Name, Email, Subject, Message)
  - [ ] Add client-side validation (required fields, email format)
  - [ ] Implement loading state during submission
  - [ ] Add success/error message display
  - [ ] Include optional file attachment field (resume/portfolio)
  - [ ] Add character count for message field
  - [ ] Implement form reset after successful submission
- **Test Strategy:**
  - Test all validation rules
  - Verify form accessibility (labels, ARIA attributes)
  - Test keyboard navigation
  - Validate responsive layout

### Task 7.2: Nodemailer API Route
**Priority:** P0 | **Dependencies:** Task 1.2
- **Subtasks:**
  - [ ] Create API route `/app/api/contact/route.ts`
  - [ ] Set up Nodemailer configuration
  - [ ] Implement server-side validation
  - [ ] Add rate limiting (prevent spam)
  - [ ] Implement email template with HTML formatting
  - [ ] Add error logging
  - [ ] Configure SMTP settings (Gmail/SendGrid/etc.)
  - [ ] Handle file attachments if included
- **Test Strategy:**
  - Test email sending with valid data
  - Verify rate limiting works
  - Test with invalid/malicious inputs
  - Validate email formatting and delivery
  - Test error scenarios (SMTP failure, network issues)

### Task 7.3: Contact Information Display
**Priority:** P1 | **Dependencies:** Task 7.1
- **Subtasks:**
  - [ ] Add social media links section
  - [ ] Display email address with copy button
  - [ ] Include LinkedIn, GitHub, Twitter links
  - [ ] Add location (city/country) if desired
  - [ ] Style links with hover effects
- **Test Strategy:**
  - Test all external links
  - Verify copy-to-clipboard functionality
  - Test responsive layout

---

## Epic 8: Additional Sections
**Priority:** P2 (Medium) | **Duration:** 2-3 days

### Task 8.1: Experience/Timeline Section (Optional)
**Priority:** P2 | **Dependencies:** Task 2.3
- **Subtasks:**
  - [ ] Create vertical timeline component
  - [ ] Add work experience entries
  - [ ] Include company logos and descriptions
  - [ ] Add date ranges and technologies used
  - [ ] Implement scroll-triggered animations
- **Test Strategy:**
  - Verify timeline renders correctly
  - Test animations on scroll
  - Validate responsive layout

### Task 8.2: Education/Certifications Section
**Priority:** P2 | **Dependencies:** Task 2.3
- **Subtasks:**
  - [ ] Create education card components
  - [ ] Add degree, institution, dates
  - [ ] Include certification badges
  - [ ] Add links to credential verification
- **Test Strategy:**
  - Verify all information displays correctly
  - Test external credential links
  - Validate responsive layout

### Task 8.3: Testimonials/Recommendations
**Priority:** P3 | **Dependencies:** Task 2.3
- **Subtasks:**
  - [ ] Build testimonial card component
  - [ ] Create carousel/slider for multiple testimonials
  - [ ] Add author name, title, company, photo
  - [ ] Implement auto-play with pause on hover
- **Test Strategy:**
  - Test carousel navigation
  - Verify auto-play functionality
  - Test responsive behavior

---

## Epic 9: Footer
**Priority:** P1 (High) | **Duration:** 0.5 day

### Task 9.1: Footer Component
**Priority:** P1 | **Dependencies:** Task 2.2
- **Subtasks:**
  - [ ] Create footer layout
  - [ ] Add social media links
  - [ ] Include copyright notice
  - [ ] Add "Back to Top" button
  - [ ] Include quick navigation links
  - [ ] Display last updated date (auto-generated)
- **Test Strategy:**
  - Test all footer links
  - Verify "Back to Top" functionality
  - Validate responsive layout

---

## Epic 10: Performance & Optimization
**Priority:** P0 (Critical) | **Duration:** 2-3 days

### Task 10.1: Image Optimization
**Priority:** P0 | **Dependencies:** All component tasks
- **Subtasks:**
  - [ ] Use Next.js Image component for all images
  - [ ] Optimize and compress all assets
  - [ ] Implement lazy loading for below-fold images
  - [ ] Add proper alt texts for accessibility
  - [ ] Convert images to WebP format
  - [ ] Set up blur placeholders
- **Test Strategy:**
  - Run Lighthouse performance audit
  - Verify lazy loading behavior
  - Check image quality across devices
  - Validate accessibility with screen readers

### Task 10.2: Code Splitting & Loading Optimization
**Priority:** P0 | **Dependencies:** All component tasks
- **Subtasks:**
  - [ ] Implement dynamic imports for heavy components
  - [ ] Add loading skeletons for async content
  - [ ] Optimize bundle size (analyze with `@next/bundle-analyzer`)
  - [ ] Remove unused dependencies
  - [ ] Implement font optimization with `next/font`
  - [ ] Add preloading for critical resources
- **Test Strategy:**
  - Run bundle size analysis
  - Test loading states
  - Measure First Contentful Paint (FCP) and Time to Interactive (TTI)
  - Verify no layout shift (CLS)

### Task 10.3: SEO Optimization
**Priority:** P1 | **Dependencies:** All component tasks
- **Subtasks:**
  - [ ] Add metadata to all pages (title, description, OG tags)
  - [ ] Create `robots.txt` and `sitemap.xml`
  - [ ] Implement structured data (JSON-LD)
  - [ ] Add canonical URLs
  - [ ] Optimize page titles and meta descriptions
  - [ ] Add Open Graph images
- **Test Strategy:**
  - Validate metadata with social media preview tools
  - Test structured data with Google Rich Results Test
  - Verify sitemap generation
  - Run SEO audit with Lighthouse

### Task 10.4: Accessibility (a11y) Audit
**Priority:** P1 | **Dependencies:** All component tasks
- **Subtasks:**
  - [ ] Ensure keyboard navigation works throughout site
  - [ ] Add ARIA labels where needed
  - [ ] Verify color contrast ratios (WCAG AA)
  - [ ] Test with screen readers
  - [ ] Add skip navigation link
  - [ ] Ensure focus indicators are visible
- **Test Strategy:**
  - Run axe DevTools accessibility scan
  - Test with keyboard only (no mouse)
  - Test with NVDA/JAWS screen readers
  - Validate WCAG 2.1 Level AA compliance

---

## Epic 11: Testing & Quality Assurance
**Priority:** P0 (Critical) | **Duration:** 2-3 days

### Task 11.1: Cross-Browser Testing
**Priority:** P0 | **Dependencies:** All UI tasks
- **Subtasks:**
  - [ ] Test on Chrome, Firefox, Safari, Edge
  - [ ] Test on mobile browsers (iOS Safari, Chrome Android)
  - [ ] Document and fix browser-specific issues
  - [ ] Verify polyfills for older browsers (if needed)
- **Test Strategy:**
  - Use BrowserStack or similar for testing
  - Create compatibility matrix
  - Test critical user flows on each browser

### Task 11.2: Responsive Design Testing
**Priority:** P0 | **Dependencies:** All UI tasks
- **Subtasks:**
  - [ ] Test on mobile (320px-480px)
  - [ ] Test on tablet (768px-1024px)
  - [ ] Test on desktop (1280px-1920px+)
  - [ ] Test on ultra-wide displays
  - [ ] Fix responsive issues
- **Test Strategy:**
  - Use Chrome DevTools device emulation
  - Test on real devices
  - Validate touch interactions on mobile

### Task 11.3: Performance Testing
**Priority:** P0 | **Dependencies:** Task 10.1, Task 10.2
- **Subtasks:**
  - [ ] Run Lighthouse audits (aim for 90+ scores)
  - [ ] Test Core Web Vitals (LCP, FID, CLS)
  - [ ] Measure page load times
  - [ ] Test with throttled network (3G/4G)
  - [ ] Optimize based on findings
- **Test Strategy:**
  - Test in production environment
  - Use WebPageTest for detailed analysis
  - Monitor performance over time

### Task 11.4: Security Testing
**Priority:** P1 | **Dependencies:** Task 7.2
- **Subtasks:**
  - [ ] Test contact form against XSS attacks
  - [ ] Verify CSRF protection
  - [ ] Test rate limiting effectiveness
  - [ ] Validate environment variable security
  - [ ] Check for exposed sensitive data
  - [ ] Test input sanitization
- **Test Strategy:**
  - Use OWASP testing guidelines
  - Attempt common attack vectors
  - Review with security checklist

---

## Epic 12: Content & Polish
**Priority:** P1 (High) | **Duration:** 2-3 days

### Task 12.1: Content Writing & Review
**Priority:** P1 | **Dependencies:** All section tasks
- **Subtasks:**
  - [ ] Write compelling copy for all sections
  - [ ] Proofread for grammar and spelling
  - [ ] Ensure consistent tone and voice
  - [ ] Add personality and authenticity
  - [ ] Review with peers for feedback
- **Test Strategy:**
  - Use Grammarly or similar tools
  - Get external review
  - Read aloud to check flow

### Task 12.2: Visual Polish & Animations
**Priority:** P1 | **Dependencies:** All component tasks
- **Subtasks:**
  - [ ] Fine-tune all animations and transitions
  - [ ] Ensure consistent spacing and alignment
  - [ ] Add micro-interactions (button hovers, etc.)
  - [ ] Polish color scheme and gradients
  - [ ] Add subtle background effects
  - [ ] Ensure animations respect `prefers-reduced-motion`
- **Test Strategy:**
  - Visual review on all pages
  - Test with reduced motion preferences
  - Get design feedback from peers

### Task 12.3: Analytics & Monitoring Setup
**Priority:** P2 | **Dependencies:** Task 1.2
- **Subtasks:**
  - [ ] Set up Google Analytics or Plausible
  - [ ] Add event tracking for key interactions
  - [ ] Set up error monitoring (Sentry)
  - [ ] Configure Vercel Analytics
  - [ ] Add conversion tracking for contact form
- **Test Strategy:**
  - Verify analytics data collection
  - Test event triggers
  - Validate error reporting

---

## Launch Checklist
**Priority:** P0 | **Dependencies:** All epics

- [ ] Final Lighthouse audit (Performance, Accessibility, SEO, Best Practices)
- [ ] Test all forms and interactive elements
- [ ] Verify all external links work
- [ ] Check metadata and OG tags
- [ ] Test contact form email delivery
- [ ] Verify environment variables on Vercel
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate
- [ ] Test production deployment
- [ ] Create documentation for content updates
- [ ] Backup project metadata configuration
- [ ] Final cross-browser testing
- [ ] Mobile responsiveness check
- [ ] Share with peers for feedback
- [ ] Fix any last-minute issues
- [ ] Deploy to production!

---

## Priority Legend
- **P0 (Critical):** Must-have for launch, blocks other work
- **P1 (High):** Important for quality, should be included at launch
- **P2 (Medium):** Nice-to-have, can be added post-launch
- **P3 (Low):** Future enhancement, not required for MVP

---

## Success Metrics
- **Performance:** Lighthouse score 90+ (all categories)
- **Accessibility:** WCAG 2.1 Level AA compliance
- **Load Time:** First Contentful Paint < 1.5s
- **Mobile Experience:** Fully responsive, touch-optimized
- **Contact Form:** < 5% bounce rate on form page
- **GitHub Integration:** Real-time repo updates, < 2s load time
- **Theme Toggle:** Smooth transition, no FOUC
- **SEO:** Proper meta tags, structured data, sitemap

---

## Timeline Estimate
- **Weeks 1-2:** Setup, Theme System, Core Layout (Epics 1-2)
- **Weeks 3-4:** Hero, About, Skills, Projects (Epics 3-6)
- **Week 5:** Contact Form, Additional Sections (Epics 7-8)
- **Week 6:** Footer, Performance, Testing (Epics 9-11)
- **Week 7:** Content, Polish, Launch (Epic 12)

**Total Estimated Duration:** 6-7 weeks (part-time) or 3-4 weeks (full-time)

---

## Notes
- Keep commits small and atomic for easy rollback
- Write reusable components from the start
- Test accessibility at each stage, not just at the end
- Keep performance in mind during development, not as an afterthought
- Document complex logic and configuration
- Use TypeScript strictly (no `any` types)
- Follow Next.js best practices for App Router