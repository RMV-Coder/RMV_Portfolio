import Link from "next/link"
import { ArrowRight, Cpu, MonitorSmartphone, Sparkles, Store, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import { services } from "@/data/experience"

const icons: LucideIcon[] = [Store, MonitorSmartphone, Sparkles, Cpu]

/**
 * What a client can hire for — phrased as outcomes, each one backed by a link
 * to something that already exists. The proof does the persuading.
 */
export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          figure="what I can build for you"
          title={
            <>
              One person. <span className="text-primary">The whole product.</span>
            </>
          }
          lead="You don't need to know what any of it is called. Tell me what should exist; I'll take it from a sketch to something your customers can use."
        />

        <ol data-reveal="stagger" className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Sparkles
            const external = !service.proofHref.startsWith("#")
            return (
              <li key={service.title} className="group relative flex flex-col bg-card p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{service.detail}</p>
                <Link
                  href={external ? service.proofHref : `/${service.proofHref}`}
                  className="mt-6 inline-flex items-center gap-2 self-start border-t border-dashed border-blueprint/50 pt-4 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-blueprint">See it</span>
                  {service.proof}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
