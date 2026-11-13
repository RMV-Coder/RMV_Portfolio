import { ChevronDown } from "lucide-react"
import { stack } from "@/data/stack"

/**
 * How the work gets done, each claim tied to a product where it can be checked.
 * Written so a founder can follow it and an engineering lead can verify it.
 */
const principles = [
  {
    title: "Tested like it matters",
    detail:
      "Emmaus ships with about 2,850 automated tests and LocalPass with about 820. Things that hold people's data get checked every time they change.",
  },
  {
    title: "Measured, not guessed",
    detail:
      "Veltriva's memory savings and SyntaxLab's parsing accuracy are published with the method used to get them, so the numbers can be repeated.",
  },
  {
    title: "Private by default",
    detail:
      "LocalPass keeps your data on your own devices, and AetherForm never uploads your workout video. Even this site shares my résumé only by a personal link that expires.",
  },
  {
    title: "Usable by everyone",
    detail:
      "SyntaxLab is audited against accessibility standards on every page, and this site works by keyboard, on a phone, and with motion turned off.",
  },
]

/**
 * The working principles, in view, and the technology list, folded away.
 *
 * The site used to open with a wall of 54 logos. The products make the case
 * now; the stack is here for the technical reader who wants to check it, one
 * click from open and fully in the HTML, with each entry tied to the product
 * that uses it.
 */
export function StackSection() {
  return (
    <section aria-labelledby="stack-heading" className="relative pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*
          The section's heading is this label, so it comes before the principle
          h3s below. The title inside <summary> is a paragraph: browsers expose
          <summary> as a button, and a heading inside it may not be reachable
          by heading navigation.
        */}
        <h2 id="stack-heading" className="fig-label flex items-center gap-3" data-reveal>
          <span className="dim-rule w-10" aria-hidden="true" />
          how I build
        </h2>
        <ul
          data-reveal="stagger"
          className="mb-6 mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {principles.map((principle) => (
            <li key={principle.title} className="bg-card p-6">
              <h3 className="font-display text-lg font-bold tracking-tight">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.detail}</p>
            </li>
          ))}
        </ul>

        <details data-reveal className="group rounded-2xl border border-border bg-card">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 sm:p-8 [&::-webkit-details-marker]:hidden">
            <div>
              <p className="fig-label">under the hood</p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                For the technically curious
              </p>
              <p className="mt-1 text-muted-foreground">What it&apos;s all built with, and where you can see each one in use.</p>
            </div>
            <ChevronDown
              className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>

          <div className="grid gap-x-10 gap-y-8 border-t border-border p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {stack.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-blueprint">{group.label}</h3>
                <ul className="mt-3 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="text-sm leading-snug">
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="block text-muted-foreground">{item.usedIn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
