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
  SiSiemens
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { FaMicrochip, FaCog, FaRobot, FaDatabase, FaCode, FaCloud } from "react-icons/fa"

export interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  color: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Creating modern, responsive user interfaces",
    skills: [
      { name: "React", icon: SiReact, level: "Advanced", color: "text-blue-500" },
      { name: "Next.js", icon: SiNextdotjs, level: "Advanced", color: "text-black dark:text-white" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced", color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert", color: "text-yellow-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", color: "text-cyan-500" },
      { name: "Material UI", icon: SiMui, level: "Advanced", color: "text-blue-600" },
      { name: "Shadcn", icon: FaCog, level: "Advanced", color: "text-gray-700 dark:text-gray-300" },
      { name: "Ant Design", icon: SiAntdesign, level: "Intermediate", color: "text-blue-500" },
      { name: "HTML5", icon: SiHtml5, level: "Expert", color: "text-orange-600" },
      { name: "CSS3", icon: SiCss3, level: "Advanced", color: "text-blue-500" },
    ]
  },
  {
    title: "Backend Development", 
    description: "Building robust server-side applications and APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Advanced", color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, level: "Advanced", color: "text-gray-700 dark:text-gray-300" },
      { name: "Python", icon: SiPython, level: "Advanced", color: "text-yellow-500" },
      { name: "Django", icon: SiDjango, level: "Intermediate", color: "text-green-700" },
      { name: "FastAPI", icon: SiFastapi, level: "Intermediate", color: "text-teal-500" },
      { name: "PHP", icon: SiPhp, level: "Intermediate", color: "text-indigo-600" },
      { name: "WebSockets", icon: SiSocketdotio, level: "Advanced", color: "text-gray-800 dark:text-white" },
      { name: "WebRTC", icon: FaCode, level: "Intermediate", color: "text-orange-500" },
      { name: "Ably Realtime", icon: FaCloud, level: "Intermediate", color: "text-purple-500" },
      { name: "Nodemailer", icon: SiNodedotjs, level: "Advanced", color: "text-green-600" },
    ]
  },
  {
    title: "Programming Languages",
    description: "Core programming languages and low-level development",
    skills: [
      { name: "JavaScript", icon: SiJavascript, level: "Expert", color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced", color: "text-blue-600" },
      { name: "Python", icon: SiPython, level: "Advanced", color: "text-yellow-500" },
      { name: "C", icon: SiC, level: "Intermediate", color: "text-blue-700" },
      { name: "C++", icon: SiCplusplus, level: "Intermediate", color: "text-blue-600" },
      { name: "Assembly", icon: FaCode, level: "Beginner", color: "text-red-600" },
      { name: "PHP", icon: SiPhp, level: "Intermediate", color: "text-indigo-600" },
    ]
  },
  {
    title: "Hardware & IoT",
    description: "Embedded systems and Internet of Things development",
    skills: [
      { name: "Arduino", icon: SiArduino, level: "Advanced", color: "text-teal-600" },
      { name: "ESP32", icon: FaMicrochip, level: "Advanced", color: "text-red-500" },
      { name: "Raspberry Pi", icon: SiRaspberrypi, level: "Advanced", color: "text-red-600" },
      { name: "Arduino Cloud", icon: SiArduino, level: "Intermediate", color: "text-cyan-500" },
      { name: "Blynk", icon: FaCog, level: "Intermediate", color: "text-blue-500" },
      { name: "PLC Siemens", icon: SiSiemens, level: "Intermediate", color: "text-gray-700" },
      { name: "Cisco Packet Tracer", icon: SiCisco, level: "Intermediate", color: "text-blue-600" },
    ]
  },
  {
    title: "Data Science & AI",
    description: "Machine learning, data analysis, and AI development",
    skills: [
      { name: "PyTorch", icon: SiPytorch, level: "Intermediate", color: "text-orange-600" },
      { name: "YOLO", icon: FaRobot, level: "Intermediate", color: "text-purple-600" },
      { name: "NumPy", icon: SiNumpy, level: "Advanced", color: "text-blue-600" },
      { name: "Pandas", icon: SiPandas, level: "Advanced", color: "text-purple-700" },
      { name: "Google Colab", icon: SiPython, level: "Advanced", color: "text-yellow-600" },
      { name: "Jupyter Notebook", icon: SiJupyter, level: "Advanced", color: "text-orange-500" },
      { name: "Anaconda", icon: SiAnaconda, level: "Advanced", color: "text-green-600" },
    ]
  },
  {
    title: "Database & Storage",
    description: "Managing data with various database technologies",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", color: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced", color: "text-blue-700" },
      { name: "MySQL", icon: SiMysql, level: "Advanced", color: "text-orange-600" },
      { name: "Redis", icon: SiRedis, level: "Intermediate", color: "text-red-600" },
      { name: "Firebase", icon: SiFirebase, level: "Advanced", color: "text-yellow-500" },
    ]
  },
  {
    title: "State Management & Validation",
    description: "Managing application state and data validation",
    skills: [
      { name: "Zustand", icon: FaDatabase, level: "Advanced", color: "text-orange-500" },
      { name: "Zod", icon: SiZod, level: "Advanced", color: "text-blue-600" },
    ]
  },
  {
    title: "DevOps & Deployment",
    description: "Streamlining development and deployment workflows", 
    skills: [
      { name: "Git", icon: SiGit, level: "Advanced", color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, level: "Advanced", color: "text-gray-800 dark:text-white" },
      { name: "Docker", icon: SiDocker, level: "Intermediate", color: "text-blue-500" },
      { name: "Vercel", icon: SiVercel, level: "Advanced", color: "text-black dark:text-white" },
      { name: "Render.com", icon: SiVercel, level: "Advanced", color: "text-purple-600" },
      { name: "AWS", icon: SiAmazon, level: "Intermediate", color: "text-orange-500" },
      { name: "Google Cloud", icon: SiGooglecloud, level: "Beginner", color: "text-blue-500" },
    ]
  },
  {
    title: "Design & Productivity",
    description: "Tools for design, collaboration, and productivity",
    skills: [
      { name: "VS Code", icon: VscCode, level: "Expert", color: "text-blue-500" },
      { name: "Figma", icon: SiFigma, level: "Intermediate", color: "text-purple-500" },
      { name: "Postman", icon: SiPostman, level: "Advanced", color: "text-orange-500" },
      { name: "Notion", icon: SiNotion, level: "Advanced", color: "text-gray-800 dark:text-white" },
    ]
  }
]