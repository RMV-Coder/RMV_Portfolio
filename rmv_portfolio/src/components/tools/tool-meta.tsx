import {
  BookOpen,
  Dumbbell,
  KeyRound,
  ListTree,
  PanelLeft,
  Sigma,
  Undo2,
  Waypoints,
  type LucideIcon,
} from "lucide-react"
import type { StatusTone, ToolSlug } from "@/data/tools"

/** A recognisable glyph per tool, for cards and navigation. */
export const toolIcons: Record<ToolSlug, LucideIcon> = {
  localpass: KeyRound,
  veltriva: PanelLeft,
  emmaus: BookOpen,
  syntaxlab: ListTree,
  "calculus-solver": Sigma,
  veyra: Undo2,
  omnigraph: Waypoints,
  aetherform: Dumbbell,
}

const toneClass: Record<StatusTone, string> = {
  live: "border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
  beta: "border-primary/40 bg-primary/10 text-primary",
  preview: "border-blueprint/40 bg-blueprint/10 text-blueprint",
  building: "border-border bg-muted text-muted-foreground",
}

/** How finished a tool is, said honestly. */
export function StatusBadge({ tone, label }: { tone: StatusTone; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${toneClass[tone]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {label}
    </span>
  )
}
