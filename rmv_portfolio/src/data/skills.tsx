import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiAmazon,
  SiGooglecloud,
  SiFigma,
  SiPostman,
  SiNotion,
  SiArduino,
  SiRaspberrypi,
  SiPytorch,
  SiJupyter,
  SiAnaconda,
  SiC,
  SiCplusplus,
  SiCisco,
  SiMui,
  SiZod,
  SiNumpy,
  SiPandas,
  SiSocketdotio,
  SiAntdesign,
  SiSiemens,
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { FaMicrochip, FaCog, FaRobot, FaDatabase, FaCode, FaCloud } from "react-icons/fa"

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

export type CategoryId =
  | "frontend"
  | "backend"
  | "data-ai"
  | "iot"
  | "databases"
  | "devops"

export interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  level: SkillLevel
  color: string
  /** A technology can legitimately belong to more than one domain. */
  categories: CategoryId[]
}

export interface Language {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface Category {
  id: CategoryId
  label: string
  description: string
}

/**
 * Languages cut across every domain, so they get their own visual treatment
 * (a horizontal chip strip above the tabbed grid) rather than living inside a
 * single category.
 */
export const languages: Language[] = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "C", icon: SiC, color: "text-blue-700" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-600" },
  { name: "Assembly", icon: FaCode, color: "text-red-600" },
]

export const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Modern, responsive user interfaces",
  },
  {
    id: "backend",
    label: "Backend",
    description: "Server-side apps, APIs and realtime systems",
  },
  {
    id: "data-ai",
    label: "Data & AI",
    description: "Machine learning, data analysis and AI",
  },
  {
    id: "iot",
    label: "IoT & Hardware",
    description: "Embedded systems, sensors and networking",
  },
  {
    id: "databases",
    label: "Databases",
    description: "Data storage and persistence layers",
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    description: "Deployment, tooling and productivity",
  },
]

/**
 * Flat, de-duplicated technology list — each technology appears exactly once
 * and declares every domain it belongs to via `categories`.
 */
export const skills: Skill[] = [
  // ── Frontend ──
  { name: "React", icon: SiReact, level: "Advanced", color: "text-blue-500", categories: ["frontend"] },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced", color: "text-black dark:text-white", categories: ["frontend"] },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", color: "text-cyan-500", categories: ["frontend"] },
  { name: "Material UI", icon: SiMui, level: "Advanced", color: "text-blue-600", categories: ["frontend"] },
  { name: "Shadcn", icon: FaCog, level: "Advanced", color: "text-gray-700 dark:text-gray-300", categories: ["frontend"] },
  { name: "Ant Design", icon: SiAntdesign, level: "Intermediate", color: "text-blue-500", categories: ["frontend"] },
  { name: "HTML5", icon: SiHtml5, level: "Expert", color: "text-orange-600", categories: ["frontend"] },
  { name: "CSS3", icon: SiCss3, level: "Advanced", color: "text-blue-500", categories: ["frontend"] },
  { name: "Zustand", icon: FaDatabase, level: "Advanced", color: "text-orange-500", categories: ["frontend"] },
  // Zod is used for both client form validation and server-side schemas.
  { name: "Zod", icon: SiZod, level: "Advanced", color: "text-blue-600", categories: ["frontend", "backend"] },

  // ── Backend ──
  { name: "Node.js", icon: SiNodedotjs, level: "Advanced", color: "text-green-600", categories: ["backend"] },
  { name: "Express.js", icon: SiExpress, level: "Advanced", color: "text-gray-700 dark:text-gray-300", categories: ["backend"] },
  { name: "Django", icon: SiDjango, level: "Intermediate", color: "text-green-700", categories: ["backend"] },
  { name: "FastAPI", icon: SiFastapi, level: "Intermediate", color: "text-teal-500", categories: ["backend"] },
  { name: "WebSockets", icon: SiSocketdotio, level: "Advanced", color: "text-gray-800 dark:text-white", categories: ["backend"] },
  { name: "WebRTC", icon: FaCode, level: "Intermediate", color: "text-orange-500", categories: ["backend"] },
  { name: "Ably Realtime", icon: FaCloud, level: "Intermediate", color: "text-purple-500", categories: ["backend"] },

  // ── Data & AI ──
  { name: "PyTorch", icon: SiPytorch, level: "Intermediate", color: "text-orange-600", categories: ["data-ai"] },
  { name: "YOLO", icon: FaRobot, level: "Intermediate", color: "text-purple-600", categories: ["data-ai"] },
  { name: "NumPy", icon: SiNumpy, level: "Advanced", color: "text-blue-600", categories: ["data-ai"] },
  { name: "Pandas", icon: SiPandas, level: "Advanced", color: "text-purple-700", categories: ["data-ai"] },
  { name: "Google Colab", icon: SiPython, level: "Advanced", color: "text-yellow-600", categories: ["data-ai"] },
  { name: "Jupyter Notebook", icon: SiJupyter, level: "Advanced", color: "text-orange-500", categories: ["data-ai"] },
  { name: "Anaconda", icon: SiAnaconda, level: "Advanced", color: "text-green-600", categories: ["data-ai"] },

  // ── IoT & Hardware ──
  { name: "Arduino", icon: SiArduino, level: "Advanced", color: "text-teal-600", categories: ["iot"] },
  { name: "ESP32", icon: FaMicrochip, level: "Advanced", color: "text-red-500", categories: ["iot"] },
  { name: "Raspberry Pi", icon: SiRaspberrypi, level: "Advanced", color: "text-red-600", categories: ["iot"] },
  { name: "Arduino Cloud", icon: SiArduino, level: "Intermediate", color: "text-cyan-500", categories: ["iot"] },
  { name: "Blynk", icon: FaCog, level: "Intermediate", color: "text-blue-500", categories: ["iot"] },
  { name: "PLC Siemens", icon: SiSiemens, level: "Intermediate", color: "text-gray-700 dark:text-gray-300", categories: ["iot"] },
  { name: "Cisco Packet Tracer", icon: SiCisco, level: "Intermediate", color: "text-blue-600", categories: ["iot"] },

  // ── Databases ──
  { name: "MongoDB", icon: SiMongodb, level: "Advanced", color: "text-green-500", categories: ["databases"] },
  { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced", color: "text-blue-700", categories: ["databases"] },
  { name: "MySQL", icon: SiMysql, level: "Advanced", color: "text-orange-600", categories: ["databases"] },
  { name: "Redis", icon: SiRedis, level: "Intermediate", color: "text-red-600", categories: ["databases"] },
  { name: "Firebase", icon: SiFirebase, level: "Advanced", color: "text-yellow-500", categories: ["databases", "backend"] },

  // ── DevOps & Tools ──
  { name: "Git", icon: SiGit, level: "Advanced", color: "text-orange-600", categories: ["devops"] },
  { name: "GitHub", icon: SiGithub, level: "Advanced", color: "text-gray-800 dark:text-white", categories: ["devops"] },
  { name: "Docker", icon: SiDocker, level: "Intermediate", color: "text-blue-500", categories: ["devops"] },
  { name: "Vercel", icon: SiVercel, level: "Advanced", color: "text-black dark:text-white", categories: ["devops"] },
  { name: "Render.com", icon: SiVercel, level: "Advanced", color: "text-purple-600", categories: ["devops"] },
  { name: "AWS", icon: SiAmazon, level: "Intermediate", color: "text-orange-500", categories: ["devops"] },
  { name: "Google Cloud", icon: SiGooglecloud, level: "Beginner", color: "text-blue-500", categories: ["devops"] },
  { name: "VS Code", icon: VscCode, level: "Expert", color: "text-blue-500", categories: ["devops"] },
  { name: "Figma", icon: SiFigma, level: "Intermediate", color: "text-purple-500", categories: ["devops"] },
  { name: "Postman", icon: SiPostman, level: "Advanced", color: "text-orange-500", categories: ["devops"] },
  { name: "Notion", icon: SiNotion, level: "Advanced", color: "text-gray-800 dark:text-white", categories: ["devops"] },
]

/** Total distinct technologies on show (flat skills + cross-cutting languages). */
export const totalTechnologies = skills.length + languages.length
