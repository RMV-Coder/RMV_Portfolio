import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import { StatusBadge, toolIcons } from "@/components/tools/tool-meta"
import { flagship, tools } from "@/data/tools"


/**
 * What has actually been built. Leads with the full platform, shown as it
 * really looks, then the tools a visitor can try for themselves.
 */
export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="work-heading"
          figure="what I've built"
          title={
            <>
              Real products, <span className="text-primary">each with a demo you can click.</span>
            </>
          }
          lead="Not class exercises. Every one has a small interactive demo on this site, and the ones that are released you can install or open for real."
        />

        {/* Flagship: the full platform */}
        <article
          data-reveal="scale"
          className="relative mt-14 overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge tone={flagship.status.tone} label={flagship.status.label} />
                <span className="font-mono text-xs text-muted-foreground">{flagship.kind}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {flagship.name}
              </h3>
              <p className="mt-2 text-xl text-foreground">{flagship.tagline}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{flagship.pitch}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {flagship.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-snug">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={flagship.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Visit"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                {flagship.hrefLabel}
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            {/* The real thing, as it looks today, mounted on the drawing sheet. */}
            <div className="bp-grid relative flex items-center justify-center border-t border-border p-6 sm:p-8 lg:border-l lg:border-t-0">
              <figure className="m-0 w-full max-w-lg">
                <a
                  href={flagship.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Visit"
                  className="group block overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-black/40 transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="flex h-8 items-center gap-2 border-b border-border bg-muted px-3" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <span className="ml-2 flex-1 truncate rounded bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      myboardhub.com
                    </span>
                  </span>
                  <Image
                    src={flagship.screenshot.src}
                    alt={flagship.screenshot.alt}
                    width={flagship.screenshot.width}
                    height={flagship.screenshot.height}
                    sizes="(max-width: 1024px) 90vw, 512px"
                    className="h-auto w-full"
                  />
                </a>
                <figcaption className="fig-label mt-4 flex items-center gap-3">
                  <span className="dim-rule w-8" aria-hidden="true" />
                  the real site, as it looks today
                </figcaption>
              </figure>
            </div>
          </div>
        </article>

        {/* Tools to try */}
        <div className="mt-16 flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl" data-reveal>
            And the tools, each with its own demo
          </h3>
          <Link
            href="/tools"
            data-reveal
            className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
          >
            Open the shelf
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul data-reveal="stagger" className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool) => {
            const Icon = toolIcons[tool.slug]
            return (
              <li key={tool.slug}>
                <Link
                  href={`/tools#${tool.slug}`}
                  data-cursor="Try"
                  style={{ "--tool": tool.accent } as React.CSSProperties}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[var(--tool)]"
                >
                  {/* The product's own colour, as a glow from the corner. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-50"
                    style={{ background: "var(--tool)" }}
                  />
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background"
                      style={{ color: "var(--tool)" }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">fig. {tool.figure}</span>
                  </div>
                  <h4 className="mt-5 font-display text-xl font-bold tracking-tight">{tool.name}</h4>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{tool.kind}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{tool.tagline}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <StatusBadge tone={tool.status.tone} label={tool.status.label} />
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                      Try it
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
