/**
 * Where the work has happened. Stated plainly and checkably — every line here
 * should survive a reference call.
 */

export interface ExperienceEntry {
  role: string
  organisation: string
  /** One clause on what the organisation is, for people who haven't heard of it. */
  about: string
  period: string
  current?: boolean
  location?: string
  points: string[]
  link?: { label: string; href: string }
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Developer",
    organisation: "Career Team",
    // From the company's own site (careerteam.com/about, read November 2026).
    about:
      "A US workforce development and technology company, founded in 1996. Its Career Edge platform, built for the agencies that help people find work, is used in more than 30 states.",
    period: "Jul 2026 – Present",
    current: true,
    // No bullet points yet, at the owner's request.
    points: [],
    link: { label: "careerteam.com", href: "https://www.careerteam.com" },
  },
  {
    role: "Junior Software Developer",
    organisation: "Career Team",
    about: "Where I started at Career Team, before being promoted to Software Developer in July 2026.",
    period: "Dec 2025 – Jul 2026",
    points: [],
    link: { label: "careerteam.com", href: "https://www.careerteam.com" },
  },
  {
    role: "Full-Stack Developer Intern",
    organisation: "Logicbase Interactive",
    about: "A software company in Cagayan de Oro, Philippines.",
    period: "Jan 2025 – May 2025",
    location: "Cagayan de Oro",
    points: [
      "Built and launched an internal project-management and customer-support web app, improving task visibility and team coordination by 25% and cutting client response times by 30%.",
      "Tested a point-of-sale system, catching 15+ critical and 100+ minor bugs.",
      "Designed landing-page mockups and contributed to web content and company social assets.",
    ],
  },
]

export const education = {
  school: "Mindanao State University – Iligan Institute of Technology",
  degree: "BS Computer Applications, major in Internet of Things",
  honour: "Magna cum laude",
  period: "2021 – 2025",
} as const

/**
 * What a client can actually hire for, each tied to something already built.
 * No logos, no jargon: the proof is the product.
 */
export interface Service {
  title: string
  detail: string
  proof: string
  proofHref: string
}

export const services: Service[] = [
  {
    title: "Web platforms that take bookings and payments",
    detail:
      "Booking, payments, accounts with different permissions, dashboards. The kind of software a business runs on.",
    proof: "myBoardHub: listings, reservations and online rent, launching soon",
    proofHref: "#work",
  },
  {
    title: "Apps for desktop and phone",
    detail:
      "Installable software for Windows and Android that feels at home on the device and keeps working offline.",
    proof: "LocalPass ships for Windows and Android",
    proofHref: "/tools#localpass",
  },
  {
    title: "AI that shows its working",
    detail:
      "Assistants designed to be checked, not just trusted: every answer traceable to its source.",
    proof: "Emmaus cites the verse behind every claim",
    proofHref: "/tools#emmaus",
  },
  {
    title: "Smart devices and automation",
    detail:
      "Cameras, sensors and small computers wired into software, from face-recognition security to robots that find their own way.",
    proof: "Face-recognition security for boarding houses, published by Springer",
    proofHref: "#research",
  },
]
