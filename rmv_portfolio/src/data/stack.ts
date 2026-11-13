/**
 * What the work is built with — and nothing that isn't on show somewhere.
 *
 * Every entry is used in a product on this site, named beside it, so the list
 * can be checked rather than taken on trust. If a product stops using
 * something, it comes off the list.
 */
export interface StackGroup {
  label: string
  items: { name: string; usedIn: string }[]
}

export const stack: StackGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", usedIn: "most of the products here" },
      { name: "Rust", usedIn: "LocalPass, Veyra" },
      { name: "Python", usedIn: "Calculus Solver, SyntaxLab, AetherForm" },
      { name: "C and C++", usedIn: "microcontroller firmware" },
    ],
  },
  {
    label: "Web",
    items: [
      { name: "Next.js and React", usedIn: "myBoardHub, Emmaus, SyntaxLab" },
      { name: "Svelte", usedIn: "LocalPass" },
      { name: "FastAPI", usedIn: "SyntaxLab, Calculus Solver, AetherForm" },
      { name: "Tailwind CSS", usedIn: "this site and most others" },
    ],
  },
  {
    label: "Desktop and mobile",
    items: [
      { name: "Tauri", usedIn: "LocalPass on Windows and Android" },
      { name: "Electron", usedIn: "Veltriva Browser" },
      { name: "React Native", usedIn: "Emmaus on Android" },
      { name: "Capacitor", usedIn: "AetherForm on Android" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", usedIn: "myBoardHub, Emmaus" },
      { name: "SQLite", usedIn: "Veltriva, Emmaus offline, AetherForm" },
      { name: "Redis", usedIn: "myBoardHub sessions" },
    ],
  },
  {
    label: "AI and vision",
    items: [
      { name: "Pose and face models", usedIn: "AetherForm, the security research" },
      { name: "PyTorch", usedIn: "face recognition on a Raspberry Pi" },
      { name: "Language parsers", usedIn: "SyntaxLab" },
      { name: "LLM APIs with citations", usedIn: "Emmaus" },
    ],
  },
  {
    label: "Hardware",
    items: [
      { name: "Raspberry Pi", usedIn: "AetherForm, the security research" },
      { name: "ESP32 and Arduino", usedIn: "sensor and robotics projects" },
      { name: "Cameras and sensors", usedIn: "boarding-house security, rep counting" },
    ],
  },
  {
    label: "Shipping it",
    items: [
      { name: "Automated tests and CI", usedIn: "LocalPass, Veltriva, Emmaus, SyntaxLab, Veyra" },
      { name: "Versioned, signed or checksummed releases", usedIn: "LocalPass, Veyra" },
      { name: "Vercel and Docker", usedIn: "the hosted web apps" },
    ],
  },
]
