import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BackToTop } from "@/components/back-to-top"
import { CustomCursor } from "@/components/custom-cursor"
import { Sparks } from "@/components/forge/sparks"
import { InteractiveBackground } from "@/components/interactive-background"
import { ScrollMotion } from "@/components/motion/scroll-motion"
import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ToolExhibit } from "@/components/tools/tool-exhibit"
import { ToolShelf } from "@/components/tools/tool-rail"
import { tools } from "@/data/tools"
import { PERSON, SITE, absoluteUrl } from "@/lib/site"

const CANONICAL = absoluteUrl("/tools")
const DESCRIPTION = `Software built by ${PERSON.name} with interactive previews in the browser, and downloads where they are released: a local password manager, a tab-taming browser, a Bible study companion, a grammar visualiser and more.`

export const metadata: Metadata = {
  title: "Tools",
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: `Tools — ${PERSON.name}`,
    description: DESCRIPTION,
    // A page-level openGraph replaces the layout's whole object, so these are restated.
    siteName: SITE.name,
    locale: SITE.locale,
  },
}

// Release data (versions, download files) is re-read from GitHub hourly.
export const revalidate = 3600

/** Each tool as a schema.org SoftwareApplication, so search engines can list them. */
const toolsGraph = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${CANONICAL}#tools`,
  name: `Tools by ${PERSON.name}`,
  itemListElement: tools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      "@id": `${CANONICAL}#${tool.slug}`,
      name: tool.name,
      description: tool.pitch,
      applicationCategory: tool.kind,
      operatingSystem: tool.platforms.join(", "),
      url: tool.links.web?.href ?? tool.links.source ?? `${CANONICAL}#${tool.slug}`,
      author: { "@id": `${absoluteUrl("/")}#person` },
    },
  })),
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsGraph) }} />

      <SmoothScroll />
      <ScrollMotion />
      <InteractiveBackground />
      <CustomCursor />
      <Sparks />
      <Navigation />

      <main id="main">
        <header className="relative isolate overflow-hidden pb-4 pt-36 sm:pt-44">
          <div
            aria-hidden="true"
            className="bp-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_30%_0%,#000_10%,transparent_70%)]"
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="fig-label forge-rise flex items-center gap-3" style={{ "--i": 0 } as React.CSSProperties}>
              <span className="dim-rule w-10" aria-hidden="true" />
              the shelf — {tools.length} tools
            </p>
            <h1
              className="forge-rise mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              Don&apos;t take my word for it. <span className="text-primary">Try them.</span>
            </h1>
            <p
              className="forge-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              Every tool here is something I designed and built myself. Each window below is an
              interactive preview of the tool, not the tool itself, so click around. Where the real
              thing is released, you can download it or open it.
            </p>
          </div>
        </header>

        <ToolShelf
          items={tools.map((tool) => ({
            slug: tool.slug,
            name: tool.name,
            kind: tool.kind,
            gist: tool.gist,
            accent: tool.accent,
          }))}
        />

        {tools.map((tool, index) => (
          <ToolExhibit key={tool.slug} tool={tool} index={index} />
        ))}

        <section aria-labelledby="tools-cta-heading" className="border-t border-border bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6" data-reveal>
            <p className="fig-label">next on the bench</p>
            <h2 id="tools-cta-heading" className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Need one built for <span className="text-primary">your business?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Each of these started as a problem someone had. Tell me yours and I&apos;ll tell you what it
              would take.
            </p>
            <Link
              href="/#contact"
              data-cursor="Say hi"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Start a conversation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <BackToTop />
    </div>
  )
}
