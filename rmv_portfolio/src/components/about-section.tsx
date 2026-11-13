import Image from "next/image"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"
import { ResumeRequestButton } from "@/components/resume-request-button"
import { SectionHeading } from "@/components/sections/section-heading"
import { education } from "@/data/experience"
import { PERSON } from "@/lib/site"

/** The person behind the bench, in his own words and without the buzzwords. */
export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div data-reveal="scale" className="relative mx-auto w-full max-w-sm lg:mx-0">
          {/* Corner ticks, like a photo mounted on a drawing sheet. */}
          <span aria-hidden="true" className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-blueprint" />
          <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-blueprint" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-card">
            <Image
              src="/1-3-01.jpeg"
              alt={`${PERSON.name}, software developer`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 416px) calc(100vw - 32px), 384px"
            />
          </div>
          <p className="fig-label mt-4">the maker</p>
        </div>

        <div>
          <SectionHeading
            id="about-heading"
            figure="about"
            title={
              <>
                I like building <span className="text-primary">the whole thing.</span>
              </>
            }
          />
          <div data-reveal="stagger" className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m <span className="font-semibold text-foreground">Raymond</span>, a software developer
              from Tangub City in the Philippines. I get the most out of building a product end to end:
              the idea, the design, the code, the launch, and the part where real people start using it.
            </p>
            <p>
              By day I&apos;m a software developer at Career Team. On my own time I build the tools on this site,
              most of them because I wanted them to exist.
            </p>
            <p>
              I studied the Internet of Things at university, which is why some of my software ends up
              attached to cameras, sensors and the occasional robot.
            </p>
          </div>

          <dl data-reveal className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Based in</dt>
                <dd className="mt-0.5 text-foreground">
                  {PERSON.locality}, {PERSON.country} · UTC+8
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Graduated</dt>
                <dd className="mt-0.5 text-foreground">{education.honour}, MSU-IIT</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:col-span-2">
              <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Right now</dt>
                {/* One plain sentence. Update it when your situation changes. */}
                <dd className="mt-0.5 text-foreground">
                  Working as a software developer at Career Team, and glad to talk about projects and roles.
                </dd>
              </div>
            </div>
          </dl>

          <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
            <ResumeRequestButton className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary" />
            <p className="max-w-xs text-sm text-muted-foreground">
              Shared personally, by email. I don&apos;t post it publicly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
