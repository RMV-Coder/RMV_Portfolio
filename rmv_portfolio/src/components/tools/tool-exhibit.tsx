import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, Clock, Download, Github, Package } from "lucide-react"
import { CopyCommand } from "@/components/tools/copy-command"
import { ToolDemo } from "@/components/tools/tool-demo"
import { StatusBadge, toolIcons } from "@/components/tools/tool-meta"
import type { Tool } from "@/data/tools"
import { getLatestRelease, type ReleaseLookup } from "@/lib/releases"

const primaryButton =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
const secondaryButton =
  "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"

/** Every way to get the real thing: download, open, install, or read the source. */
function ToolActions({ tool, lookup }: { tool: Tool; lookup: ReleaseLookup | null }) {
  const release = lookup?.state === "ok" ? lookup.release : null
  // GitHub could not be reached (outage, rate limit, timeout). That says nothing
  // about whether a release exists, so never claim there isn't one.
  const unreachable = lookup?.state === "error"
  const downloads = (tool.releaseAssets ?? []).flatMap((asset) => {
    // Suffix match: ".exe" must not pick "Setup.exe.blockmap", nor "x64-setup.exe" its ".sig".
    const suffix = asset.match.toLowerCase()
    const file = release?.files.find((candidate) => candidate.name.toLowerCase().endsWith(suffix))
    return file ? [{ ...asset, file }] : []
  })
  const releasesUrl = tool.releaseRepo ? `https://github.com/${tool.releaseRepo}/releases` : null
  const hasPrimary = downloads.length > 0 || Boolean(tool.links.web)

  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        {tool.links.web && (
          <a href={tool.links.web.href} target="_blank" rel="noopener noreferrer" data-cursor="Open" className={primaryButton}>
            {tool.links.web.label}
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        )}

        {downloads.map((download, index) => (
          <a
            key={download.file.name}
            href={download.file.url}
            data-cursor="Get"
            className={index === 0 && !tool.links.web ? primaryButton : secondaryButton}
          >
            <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>
              {download.label}
              <span className="ml-2 font-mono text-xs font-normal opacity-75">{download.file.sizeMb} MB</span>
            </span>
          </a>
        ))}

        {/* A release exists but none of the expected files matched: send them to the list. */}
        {downloads.length === 0 && release && releasesUrl && (
          <a href={release.pageUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            <Download className="h-5 w-5" aria-hidden="true" />
            Get version {release.version}
          </a>
        )}

        {/* GitHub confirmed nothing is published yet (or the tool has no release repo). */}
        {downloads.length === 0 && !release && !unreachable && !tool.links.web && tool.unavailable && (
          <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {tool.unavailable}
          </span>
        )}
        {/* No release to point at, or GitHub could not be reached: send them to the list. */}
        {downloads.length === 0 &&
          !release &&
          releasesUrl &&
          (unreachable || (!tool.unavailable && !tool.install)) && (
          <a href={releasesUrl} target="_blank" rel="noopener noreferrer" className={tool.links.web ? secondaryButton : primaryButton}>
            <Download className="h-5 w-5" aria-hidden="true" />
            Downloads on GitHub
          </a>
        )}

        {!hasPrimary && !tool.install && !tool.links.source && (
          <Link href="/#contact" className={secondaryButton}>
            Ask me for a walkthrough
          </Link>
        )}

        {tool.links.npm && (
          <a href={tool.links.npm} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
            <Package className="h-4 w-4" aria-hidden="true" />
            View on npm
          </a>
        )}
        {tool.links.source && (
          <a href={tool.links.source} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
            <Github className="h-4 w-4" aria-hidden="true" />
            Source code
          </a>
        )}
      </div>

      {release && downloads.length > 0 && (
        <p className="font-mono text-xs text-muted-foreground">
          Version {release.version}
          {release.publishedAt &&
            ` · released ${new Date(release.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
          {" · "}
          <a href={release.pageUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
            all files
          </a>
        </p>
      )}

      {tool.install && (
        <div className="max-w-xl space-y-3">
          {/* Raw commands look alarming to anyone who is not the audience for them: say who they are for. */}
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            For developers: install from a terminal
          </p>
          {tool.install.map((entry) => (
            <CopyCommand key={entry.label} label={entry.label} command={entry.command} />
          ))}
        </div>
      )}

      {tool.note && <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{tool.note}</p>}
    </div>
  )
}

/**
 * One tool on the shelf: what it does for a person on one side, a working
 * miniature of it on the other. Sides alternate down the page.
 */
export async function ToolExhibit({ tool, index }: { tool: Tool; index: number }) {
  const lookup = tool.releaseRepo ? await getLatestRelease(tool.releaseRepo) : null
  const Icon = toolIcons[tool.slug]
  const flipped = index % 2 === 1
  const textColumn = flipped ? "lg:col-start-2" : "lg:col-start-1"

  return (
    <section
      id={tool.slug}
      aria-labelledby={`${tool.slug}-heading`}
      style={{ "--tool": tool.accent } as React.CSSProperties}
      className="relative scroll-mt-36 border-t border-border py-20 sm:py-28"
    >
      {/* The product's own colour, as light spilling from its side of the shelf. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-24 h-72 w-72 rounded-full opacity-[0.13] blur-[110px] ${flipped ? "left-0" : "right-0"}`}
        style={{ background: "var(--tool)" }}
      />

      {/*
        Three cells in reading order: the pitch, the demo, the details. On a
        phone that is exactly how they stack, so the thing to try comes right
        after the sentence that says what it is. On wide screens the demo takes
        its own column and stays in view while the text scrolls past it.
      */}
      {/* grid-cols-1 (a track that may shrink) and min-w-0 keep a long install command from widening the page on a phone. */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className={`min-w-0 lg:row-start-1 ${textColumn}`}>
          <p className="fig-label flex items-center gap-3" data-reveal>
            <span className="dim-rule w-10" aria-hidden="true" />
            fig. {tool.figure} — {tool.kind.toLowerCase()}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4" data-reveal>
            <span
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card"
              style={{ color: "var(--tool)" }}
            >
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 id={`${tool.slug}-heading`} className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              {tool.name}
            </h2>
            <StatusBadge tone={tool.status.tone} label={tool.status.label} />
          </div>
          <p className="mt-5 text-2xl leading-snug text-foreground" data-reveal>
            {tool.tagline}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground" data-reveal>
            {tool.pitch}
          </p>
        </div>

        <div className={`min-w-0 lg:row-span-2 lg:row-start-1 ${flipped ? "lg:col-start-1" : "lg:col-start-2"}`}>
          <div data-reveal="scale" className="lg:sticky lg:top-36">
            <ToolDemo slug={tool.slug} />

            {tool.screenshots && (
              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  The real app
                </p>
                <ul className="mt-3 flex gap-3">
                  {tool.screenshots.map((shot) => (
                    <li key={shot.src} className="min-w-0">
                      <a
                        href={shot.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="View"
                        className="block overflow-hidden rounded-lg border border-border transition-colors hover:border-[var(--tool)]"
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={shot.width}
                          height={shot.height}
                          sizes="(max-width: 1024px) 45vw, 300px"
                          className="h-36 w-auto max-w-full object-cover object-left-top"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={`min-w-0 lg:row-start-2 ${textColumn}`}>
          <ul className="space-y-5" data-reveal="stagger">
            {tool.benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--tool)" }} aria-hidden="true" />
                <div>
                  <h3 className="font-sans text-base font-semibold tracking-normal text-foreground">{benefit.title}</h3>
                  <p className="mt-0.5 leading-relaxed text-muted-foreground">{benefit.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-2" data-reveal>
            {tool.facts.map((fact) => (
              <li key={fact} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                {fact}
              </li>
            ))}
          </ul>

          <div data-reveal>
            <ToolActions tool={tool} lookup={lookup} />
          </div>

          {/* For the technical reader. Folded away so it never crowds the pitch. */}
          <details data-reveal className="group mt-8 max-w-xl rounded-lg border border-border bg-card/60">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
              <span>
                How it&apos;s built
                <span className="ml-2 font-mono text-[11px] font-normal text-muted-foreground">{tool.builtWith}</span>
              </span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <ul className="space-y-2.5 border-t border-border px-4 py-4">
              {tool.engineering.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blueprint" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  )
}
