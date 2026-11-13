interface SectionHeadingProps {
  /** Blueprint annotation, e.g. "fig. 01 — shipped". */
  figure: string
  title: React.ReactNode
  lead?: React.ReactNode
  id?: string
  className?: string
}

/** Shared section opener: a blueprint label, a headline whose words rise in, and a lead. */
export function SectionHeading({ figure, title, lead, id, className = "" }: SectionHeadingProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      <p className="fig-label flex items-center gap-3" data-reveal>
        <span className="dim-rule w-10" aria-hidden="true" />
        {figure}
      </p>
      <h2
        id={id}
        data-reveal="words"
        className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {lead && (
        <p data-reveal data-reveal-delay="120" className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {lead}
        </p>
      )}
    </header>
  )
}
