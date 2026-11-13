import { AboutSection } from "@/components/about-section"
import { BackToTop } from "@/components/back-to-top"
import { ContactSection } from "@/components/contact-section"
import { CustomCursor } from "@/components/custom-cursor"
import { ForgeHero } from "@/components/forge/forge-hero"
import { Sparks } from "@/components/forge/sparks"
import { InteractiveBackground } from "@/components/interactive-background"
import { ScrollMotion } from "@/components/motion/scroll-motion"
import { Navigation } from "@/components/navigation"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { ResearchSection } from "@/components/research-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StackSection } from "@/components/sections/stack-section"
import { WorkSection } from "@/components/sections/work-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { flagship, tools } from "@/data/tools"
import { homePageGraph } from "@/lib/structured-data"

/**
 * Everything in the study, as the hero lists it: the platform
 * first, then the tools.
 */
const benchItems = [
  {
    slug: "myboardhub",
    name: flagship.name,
    kind: "Rental platform, launching soon",
    gist: "student rentals",
    accent: "#E8B86D",
    href: "#work",
  },
  ...tools.map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    kind: tool.kind,
    gist: tool.gist,
    accent: tool.accent,
    href: `/tools#${tool.slug}`,
  })),
]

/** Short, checkable facts under the headline. */
const facts = [
  `${tools.length} tools, each with a demo`,
  "A rental platform launching soon",
  "Published by Springer, 2025",
  "Magna cum laude",
]

/**
 * The home page is a server component: every word of it is in the HTML.
 * Interactivity arrives as islands — the 3D study, the scroll motion, the
 * contact form — none of which the content waits for.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/*
        ProfilePage node for this URL specifically — it names Raymond as the
        page's `mainEntity`, which is the question an AI overview is answering
        when someone searches his name. Emitted here rather than in the layout
        so it does not follow the visitor onto other pages.
      */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageGraph) }} />

      <SmoothScroll />
      <ScrollMotion />
      <InteractiveBackground />
      <CustomCursor />
      <Sparks />
      <PerformanceMonitor />
      <Navigation />

      <main id="main">
        <ForgeHero items={benchItems} facts={facts} />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <ExperienceSection />
        <ResearchSection />
        <AboutSection />
        <StackSection />
        <ContactSection />
      </main>

      <BackToTop />
    </div>
  )
}
