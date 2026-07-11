"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Parallax } from "@/components/motion/parallax"
import {
  skills,
  languages,
  categories,
  totalTechnologies,
  type CategoryId,
  type SkillLevel,
} from "@/data/skills"

type TabId = "all" | CategoryId

const tabs: { id: TabId; label: string }[] = [
  { id: "all", label: "All" },
  ...categories.map((c) => ({ id: c.id as TabId, label: c.label })),
]

// Small colored dot conveying proficiency without the old bulky progress bars.
const levelDot: Record<SkillLevel, string> = {
  Beginner: "bg-muted-foreground/50",
  Intermediate: "bg-sky-500",
  Advanced: "bg-emerald-500",
  Expert: "bg-primary",
}

function SkillChip({ name, icon: Icon, color, level }: {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  level: SkillLevel
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 32, mass: 0.6 }}
      whileHover={{ y: -4, scale: 1.06 }}
      className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors cursor-default"
    >
      <Icon className={`w-5 h-5 shrink-0 ${color}`} />
      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
        {name}
      </span>
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${levelDot[level]}`}
        title={level}
        aria-label={level}
      />
    </motion.div>
  )
}

export function SkillsSection() {
  const [active, setActive] = React.useState<TabId>("all")
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])

  const visibleSkills = React.useMemo(() => {
    if (active === "all") return skills
    return skills.filter((s) => s.categories.includes(active))
  }, [active])

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") {
      return
    }
    e.preventDefault()
    let next = index
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length
    else if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length
    else if (e.key === "Home") next = 0
    else if (e.key === "End") next = tabs.length - 1
    setActive(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Parallax speed={0.25} className="text-center mb-12">
          <h2 className="p-4 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills &amp; Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development
          </p>
        </Parallax>

        {/* Language strip — cuts across every domain */}
        <Parallax speed={0.15} className="mb-10">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/70 mb-4">
            Languages
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {languages.map((lang) => (
              <motion.span
                key={lang.name}
                whileHover={{ y: -3, scale: 1.06 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-sm font-medium"
              >
                <lang.icon className={`w-4 h-4 ${lang.color}`} />
                {lang.name}
              </motion.span>
            ))}
          </div>
        </Parallax>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab, index) => {
            const selected = active === tab.id
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el
                }}
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  selected
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="skillTabPill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skills grid */}
        <div
          role="tabpanel"
          className="flex flex-wrap justify-center gap-3 min-h-[8rem]"
        >
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill) => (
              <SkillChip
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                level={skill.level}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Summary Stats */}
        <Parallax speed={0.2} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">{totalTechnologies}+</div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
        </Parallax>
      </div>
    </section>
  )
}
