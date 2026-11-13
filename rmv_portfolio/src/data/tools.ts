/**
 * The tools on the bench.
 *
 * Written for someone who has never heard of the technology underneath: every
 * entry leads with what the thing does for a person. The stack is one line at
 * the very end, on purpose.
 *
 * Facts here (versions, statuses, links) were checked against each project's
 * repository and public releases. Keep them honest — "beta" stays "beta".
 */

export type ToolSlug =
  | "localpass"
  | "veltriva"
  | "emmaus"
  | "syntaxlab"
  | "calculus-solver"
  | "veyra"
  | "omnigraph"
  | "aetherform"

export type StatusTone = "live" | "beta" | "preview" | "building"

export interface ToolBenefit {
  title: string
  detail: string
}

/** A downloadable file, matched against the assets of the latest GitHub release. */
export interface ReleaseAsset {
  /** Suffix the asset file name must end with (matched with endsWith, so ".exe" never picks "x.exe.sig"). */
  match: string
  label: string
  platform: "Windows" | "Android" | "macOS" | "Linux"
}

export interface Tool {
  slug: ToolSlug
  /** Catalogue number shown as the blueprint figure label. */
  figure: string
  name: string
  /** What kind of thing it is, in two or three words. */
  kind: string
  /** The same, as short as it will go, to sit beside the name on a chip. Lower case. */
  gist: string
  /** One line a non-technical visitor understands immediately. */
  tagline: string
  /** Two sentences: what it does and for whom. */
  pitch: string
  benefits: [ToolBenefit, ToolBenefit, ToolBenefit]
  /** Short, checkable facts. */
  facts: string[]
  status: { tone: StatusTone; label: string }
  /** Candid caveat shown in small print, when there is one. */
  note?: string
  /** Where it runs, in plain words. */
  platforms: string[]
  /** GitHub repository with published releases (owner/name). */
  releaseRepo?: string
  releaseAssets?: ReleaseAsset[]
  /** Copy-paste install commands, for tools that install from a terminal. */
  install?: { label: string; command: string }[]
  links: {
    /** A deployed web app visitors can open. */
    web?: { label: string; href: string }
    source?: string
    npm?: string
  }
  /** Shown instead of a download when nothing is published yet. */
  unavailable?: string
  /** Real screenshots of the shipped app (demo data only). */
  screenshots?: { src: string; alt: string; width: number; height: number }[]
  /** The product's own brand colour — tints its exhibit. */
  accent: string
  /** One de-emphasised line for the technically curious. */
  builtWith: string
  /** How it is built, for readers who want the engineering. Folded away by default. */
  engineering: string[]
}

export const tools: Tool[] = [
  {
    slug: "localpass",
    figure: "01",
    name: "LocalPass",
    kind: "Password manager",
    gist: "passwords",
    tagline: "A password manager that never leaves your computer.",
    pitch:
      "LocalPass keeps your passwords, sign-in codes and secret keys in an encrypted vault on your own device. There is no cloud account and no subscription, so nobody else is ever holding your logins.",
    benefits: [
      {
        title: "Yours alone",
        detail: "The vault is encrypted on your device. There is no company server to be breached.",
      },
      {
        title: "Everything in one click",
        detail: "Passwords, live two-factor codes and a strong-password generator, with a report on weak or reused ones.",
      },
      {
        title: "Made for AI assistants",
        detail: "AI coding tools can use a secret to do a job without being shown what it is. Keep the vault locked when an assistant is reading untrusted content.",
      },
    ],
    facts: ["Windows and Android", "Open source", "800+ automated tests"],
    status: { tone: "preview", label: "Early release" },
    note: "An early version (0.2), not yet independently audited: fine to explore, not yet for your real passwords. Windows shows a SmartScreen prompt because the installer isn't code-signed yet.",
    platforms: ["Windows", "Android"],
    releaseRepo: "RMV-Coder/LocalPass",
    releaseAssets: [
      { match: "x64-setup.exe", label: "Download for Windows", platform: "Windows" },
      { match: ".apk", label: "Android app (APK)", platform: "Android" },
    ],
    links: { source: "https://github.com/RMV-Coder/LocalPass" },
    screenshots: [
      {
        src: "/tools/localpass-vault.png",
        alt: "LocalPass on Windows: a list of saved logins beside the details of one, with the password hidden",
        width: 1600,
        height: 1000,
      },
      {
        src: "/tools/localpass-android.png",
        alt: "LocalPass on Android showing a live two-factor sign-in code",
        width: 585,
        height: 1266,
      },
    ],
    accent: "#D4A24C",
    builtWith: "Rust, Tauri, Svelte",
    engineering: [
      "Vaults are encrypted with XChaCha20-Poly1305 under an Argon2id key. Unlocking needs the master password and a secret key generated on the device, so guessing the master password is not enough to open a stolen vault file.",
      "Devices sync through a folder you choose, using a hash-chained, signed log of operations. There is no server to trust.",
      "A built-in MCP server lets AI agents run commands with secrets injected and then redacted from the output. The values themselves are never returned.",
      "About 820 Rust tests across eight crates, signed in-app updates, a strict content-security policy and no telemetry.",
    ],
  },
  {
    slug: "veltriva",
    figure: "02",
    name: "Veltriva Browser",
    kind: "Web browser",
    gist: "tidy browsing",
    tagline: "A browser that tidies up after you.",
    pitch:
      "Veltriva is a Windows browser for people with too many tabs. It quietly puts unused tabs to sleep, files old ones away, and finds pages you have visited from a few letters of their title or address.",
    benefits: [
      {
        title: "Idle tabs cost almost nothing",
        detail: "In testing, unloading 99 of 100 open tabs cut memory use from about 3.8 GB to under 0.4 GB.",
      },
      {
        title: "Easy to get back",
        detail: "Every automatic tidy-up can be undone, and one search covers open, sleeping and archived pages.",
      },
      {
        title: "Private by design",
        detail: "No account, no sync, no tracking. Your history stays on your computer.",
      },
    ],
    facts: ["Windows 10 and 11", "Open source", "Search in about 10 ms across 50,000 pages"],
    status: { tone: "preview", label: "Early access" },
    platforms: ["Windows"],
    releaseRepo: "RMV-Coder/veltriva",
    releaseAssets: [{ match: ".exe", label: "Download for Windows", platform: "Windows" }],
    unavailable: "Installer coming soon",
    links: { source: "https://github.com/RMV-Coder/veltriva" },
    screenshots: [
      {
        src: "/tools/veltriva-window.png",
        alt: "Veltriva Browser with its tab sidebar: open tabs, sleeping tabs and an archive",
        width: 1584,
        height: 992,
      },
      {
        src: "/tools/veltriva-palette.png",
        alt: "Veltriva's memory search finding a page from a few typed letters",
        width: 1584,
        height: 992,
      },
    ],
    accent: "#9DB4D6",
    builtWith: "Electron, React, SQLite",
    engineering: [
      "Hidden tabs are unloaded to free their memory. With 100 tabs of the same test page open, unloading 99 of them cut memory use from 3,771 MB to 383 MB, freeing about 34 MB per tab.",
      "Memory search runs on SQLite full-text search and answers in 10.3 ms at the 95th percentile across 50,000 pages.",
      "Hardened Electron: security fuses set, no preload script inside tabs, a written security review, and CodeQL in CI.",
      "Crash recovery with a safe mode after two crashes, plus unit, end-to-end, accessibility and benchmark suites.",
    ],
  },
  {
    slug: "emmaus",
    figure: "03",
    name: "Emmaus",
    kind: "Bible study companion",
    gist: "Bible study",
    tagline: "A Bible study companion that shows its sources.",
    pitch:
      "Read Scripture in four translations and ask questions as you go. Every answer points to the exact verses behind it and says plainly whether a claim is stated, inferred, disputed or speculative.",
    benefits: [
      {
        title: "Answers you can check",
        detail: "Claims carry tappable verse references, and anything the text doesn't settle is labelled as such. It is a tutor, not an oracle.",
      },
      {
        title: "Honest about disagreement",
        detail: "Where traditions differ, it lays the readings side by side instead of picking a winner.",
      },
      {
        title: "Calm by design",
        detail: "No streaks and no scores. Your notes and prayers stay private.",
      },
    ],
    facts: ["Web app, installable on a phone", "Four public-domain translations", "About 2,850 automated tests"],
    status: { tone: "preview", label: "Alpha" },
    platforms: ["Web", "Android preview"],
    links: { web: { label: "Open Emmaus", href: "https://emmaus-sepia.vercel.app" } },
    screenshots: [
      {
        src: "/tools/emmaus-home.jpg",
        alt: "The Emmaus welcome page: read the Bible with a tutor, not an oracle",
        width: 800,
        height: 500,
      },
    ],
    accent: "#D4B676",
    builtWith: "Next.js, React Native, Postgres",
    engineering: [
      "Answers are built from retrieved passages. Each claim gets a label for how strongly the text supports it. A claim given as plain fact with no verse behind it, or one citing only verses outside those passages, is marked as unsupported.",
      "On study questions, a second model checks the answer against the passages and can ask for a rewrite. A safety layer screens for distress before the tutor replies.",
      "About 2,850 automated tests across the core, web and mobile packages, with end-to-end runs in CI.",
      "Scripture ships inside the mobile app as SQLite for offline reading. Only openly licensed sources are used.",
    ],
  },
  {
    slug: "syntaxlab",
    figure: "04",
    name: "SyntaxLab",
    kind: "Grammar visualiser",
    gist: "grammar",
    tagline: "See how a sentence is built.",
    pitch:
      "Type a sentence and SyntaxLab draws its grammar: which words belong together and what each one is doing, with every label explained in plain English. Built for language students and their teachers.",
    benefits: [
      {
        title: "Diagrams in seconds",
        detail: "Phrase trees, word-relationship arcs and a word-by-word breakdown, all linked together.",
      },
      {
        title: "No chatbot guesswork",
        detail: "Every analysis comes from an established grammar parser, with its measured accuracy published.",
      },
      {
        title: "Practice built in",
        detail: "Exercises that point out the rule you missed. In English for now, with Filipino planned.",
      },
    ],
    facts: ["English and Filipino", "Open source", "Accessibility-audited on every page"],
    status: { tone: "preview", label: "Preview" },
    note: "The website is up, but the parser behind it isn't hosted yet, so it can't analyse sentences online. The demo here shows example analyses in the parser's own format, and the source is open.",
    platforms: ["Web"],
    unavailable: "Hosted version coming soon",
    links: {
      source: "https://github.com/RMV-Coder/SyntaxLab",
    },
    accent: "#F5CF4A",
    builtWith: "Next.js, Python, Stanza",
    engineering: [
      "Analyses come from Stanza and calamanCy, established open-source parsers. SyntaxLab runs its own evaluation of them and publishes the results, including where they fall short.",
      "The Algorithm Lab runs an Earley parser written from scratch and verified against a brute-force oracle.",
      "Every page is audited against WCAG 2.2 AA in CI, and each diagram has a keyboard path and an equivalent table.",
    ],
  },
  {
    slug: "calculus-solver",
    figure: "05",
    name: "Calculus Solver",
    kind: "Maths tutor",
    gist: "maths, step by step",
    tagline: "A calculator that shows its work.",
    pitch:
      "Type a calculus problem and get the full worked solution, written the way a good teacher would: each step names the rule it used and shows the algebra before and after.",
    benefits: [
      {
        title: "Steps, not just answers",
        detail: "Thirty-nine kinds of problem, from derivatives and integrals to limits, each with the reasoning.",
      },
      {
        title: "Checked twice",
        detail: "Every answer is checked against a direct calculation before you see it.",
      },
      {
        title: "It can make the video",
        detail: "Turn any solution into an animated explanation, with a spoken voice-over on Windows.",
      },
    ],
    facts: ["39 problem types", "Every answer double-checked", "Runs on your own machine"],
    status: { tone: "building", label: "In development" },
    platforms: ["Windows", "Web (self-hosted)"],
    unavailable: "Not released yet",
    links: {},
    accent: "#8C9EF5",
    builtWith: "Python, SymPy, Manim",
    engineering: [
      "A rule engine produces the steps, and a catalogue of 145 named rules and theorems tells you which law each step used. Every final answer is cross-checked against SymPy before it is shown.",
      "Solutions can be rendered as animations with Manim, with a voice-over on Windows. A companion renderer lets a hosted page produce the video on the visitor's own PC.",
      "Works offline, with no cloud service, no account and no telemetry. When you are online, the web page loads its maths lettering and fonts from public sites. Without a connection it shows the maths as plain text.",
    ],
  },
  {
    slug: "veyra",
    figure: "06",
    name: "Veyra",
    kind: "Developer tool",
    gist: "undo for code",
    tagline: "An undo button for software teams.",
    pitch:
      "Developers track every change to their code with a tool called Git. It is powerful, but one wrong command can wipe out hours of work. Veyra works with the same projects and adds a safety net: the last thing you did can be undone.",
    benefits: [
      {
        title: "Undo the mistake",
        detail: "Every action is journaled, so even a destructive command can be reversed with one more.",
      },
      {
        title: "Nothing to migrate",
        detail: "It reads and writes standard Git projects, so a team can try it today and stop any time.",
      },
      {
        title: "Warns before it's too late",
        detail: "Blocks leaked passwords from being saved and shows what a change will affect.",
      },
    ],
    facts: ["Windows, macOS and Linux", "Open source", "Version 1.3"],
    status: { tone: "beta", label: "Beta" },
    platforms: ["Windows", "macOS", "Linux"],
    releaseRepo: "RMV-Coder/veyra",
    releaseAssets: [
      { match: "x86_64-pc-windows-msvc.zip", label: "Windows (zip)", platform: "Windows" },
      { match: "aarch64-apple-darwin.tar.gz", label: "macOS, Apple silicon", platform: "macOS" },
      { match: "x86_64-unknown-linux-gnu.tar.gz", label: "Linux", platform: "Linux" },
    ],
    install: [
      {
        label: "Windows (PowerShell)",
        command: "irm https://raw.githubusercontent.com/RMV-Coder/veyra/main/install/install.ps1 | iex",
      },
      {
        label: "macOS and Linux",
        command: "curl -fsSL https://raw.githubusercontent.com/RMV-Coder/veyra/main/install/install.sh | sh",
      },
    ],
    links: { source: "https://github.com/RMV-Coder/veyra" },
    accent: "#FF7A1A",
    builtWith: "Rust",
    engineering: [
      "Reads and writes Git's on-disk format unchanged, so Git and Veyra can work on the same repository in either order.",
      "Every command that changes something is journaled, and the working tree is checkpointed, untracked files included, before anything destructive runs.",
      "Written in Rust, with the test suite running on Linux, macOS and Windows in CI.",
      "Commit-time checks block staged secrets, and semantic diff and impact analysis explain what a change touches.",
    ],
  },
  {
    slug: "omnigraph",
    figure: "07",
    name: "OmniGraph",
    kind: "Developer tool",
    gist: "a map of your code",
    tagline: "A map of how your software fits together.",
    pitch:
      "Point OmniGraph at a software project and it draws an interactive map of how every part connects. A new developer, or a manager who needs the big picture, can see the whole system at a glance.",
    benefits: [
      {
        title: "The whole system on one screen",
        detail: "Follow a thread from a button on the page down to the database behind it.",
      },
      {
        title: "Speaks many languages",
        detail: "Reads projects written in TypeScript, Python, PHP, Go, Rust and Java.",
      },
      {
        title: "Your code stays put",
        detail: "It runs on your own machine. Nothing is uploaded anywhere.",
      },
    ],
    facts: ["Published on npm", "Open source", "Six programming languages"],
    status: { tone: "live", label: "Published" },
    platforms: ["Windows", "macOS", "Linux"],
    install: [
      { label: "Any system with Node.js", command: "npx @zoldia/omnigraph --path ." },
    ],
    links: {
      npm: "https://www.npmjs.com/package/@zoldia/omnigraph",
      source: "https://github.com/RMV-Coder/OmniGraph",
    },
    accent: "#7FD6E8",
    builtWith: "TypeScript, Node.js",
    engineering: [
      "Reads TypeScript and JavaScript as full syntax trees and the other languages with lighter pattern rules, and recognises framework structure such as routes, controllers and models.",
      "A local server draws the graph with a live watch mode, and a CLI answers questions like \"what depends on this file?\".",
      "Published on npm as @zoldia/omnigraph.",
    ],
  },
  {
    slug: "aetherform",
    figure: "08",
    name: "AetherForm",
    kind: "AI workout coach",
    gist: "workout coach",
    tagline: "A coach that counts your reps and corrects your form.",
    pitch:
      "AetherForm watches you exercise through a camera, counts every rep and tells you the moment your form slips. It is built to run on a small computer at home, so the video never leaves your house.",
    benefits: [
      {
        title: "Hands-free counting",
        detail: "It counts squats, push-ups, curls and raises on its own, and times your planks.",
      },
      {
        title: "Cues while you move",
        detail: "\"Chest up.\" \"Go a little deeper.\" Shown on screen and spoken aloud, right when it matters.",
      },
      {
        title: "Private by design",
        detail: "Your video is analysed at home and never uploaded. The AI coach is optional and stays off until you add your own key from an AI provider. Once on, it sends that provider text summaries, plus any meal photo you choose to send.",
      },
    ],
    facts: ["Up to four cameras for a 3D view", "Seven camera-tracked exercises", "Android app"],
    status: { tone: "building", label: "In development" },
    note: "Built for one person training at home, not for gyms. Not published yet.",
    platforms: ["Raspberry Pi 5", "Android"],
    unavailable: "Not released yet",
    links: {},
    accent: "#FFB648",
    builtWith: "Python, MediaPipe, React, Raspberry Pi",
    engineering: [
      "Pose estimation is built for a Raspberry Pi 5 and so far has been tested on a laptop. Reps are counted from joint angles: a squat counts when the knee passes below 100 degrees and returns above 155.",
      "Two to four calibrated cameras are fused into a single 3D view of the lifter.",
      "The Android app works without the hub and can count reps on the phone itself. Frames and keypoints never leave the device.",
    ],
  },
]

export const getTool = (slug: string) => tools.find((tool) => tool.slug === slug)

/**
 * A full platform, as opposed to a tool to download. It leads the homepage:
 * it is the clearest answer to "can he build the whole thing?".
 *
 * Status mirrors the site itself, which currently reads "Launching soon —
 * join the waitlist". Change `status` here the day it opens.
 */
export const flagship = {
  name: "myBoardHub",
  kind: "Rental platform",
  status: { tone: "beta", label: "Launching soon" } as { tone: StatusTone; label: string },
  /** The site's own headline. */
  tagline: "Find your next place. Or fill yours.",
  pitch:
    "A platform for student boarding houses in the Philippines. Owners list rooms and collect rent online, students find, reserve and pay for a place, and parents can follow along.",
  points: [
    "Every listing reviewed before it goes up",
    "Deposits and rent paid by GCash, Maya or card",
    "A digital receipt for every payment",
    "Built for students, parents and hosts across the Philippines",
  ],
  href: "https://myboardhub.com",
  hrefLabel: "See myboardhub.com",
  screenshot: {
    src: "/tools/myboardhub-home.jpg",
    alt: "The myBoardHub home page: a search box for boarding houses near a university, with reviewed listings, secure payments and digital receipts listed below",
    width: 800,
    height: 500,
  },
} as const
