import { ArrowUpRight, GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import { education, experience } from "@/data/experience"

/** Where the work has happened, newest first, on a single measured line. */
export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            id="experience-heading"
            figure="experience"
            title={
              <>
                Where I&apos;ve <span className="text-primary">done the work.</span>
              </>
            }
            lead="A day job as a software developer, and a bench full of my own products on the side."
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <div>
            <ol className="relative border-l border-dashed border-blueprint/50 pl-8" data-reveal="stagger">
              {experience.map((entry) => (
                <li key={`${entry.organisation}-${entry.role}`} className="relative pb-12 last:pb-0">
                  {/* Tick on the measuring line; the current role glows. */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[38.5px] top-1.5 h-3 w-3 rounded-full border-2 border-background ${
                      entry.current ? "ember-pulse bg-primary" : "bg-blueprint"
                    }`}
                  />
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {entry.current && <span className="mr-2 text-primary">Now</span>}
                    {entry.period}
                    {entry.location && ` · ${entry.location}`}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{entry.role}</h3>
                  <p className="mt-1 text-lg text-foreground">
                    {entry.link ? (
                      <a
                        href={entry.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                      >
                        {entry.organisation}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : (
                      entry.organisation
                    )}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.about}</p>
                  {entry.points.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {entry.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>

            <div data-reveal className="mt-12 flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-brass">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Education · {education.period}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight">{education.degree}</h3>
                <p className="mt-1 text-muted-foreground">
                  {education.school} · <span className="font-medium text-brass">{education.honour}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
