"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
  color: string
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/RMV-Coder",
    icon: <Github className="w-5 h-5" />,
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    name: "LinkedIn", 
    href: "https://linkedin.com/in/raymond-mv002/",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:text-blue-600"
  },
  {
    name: "Email",
    href: "mailto:raymondvaldepenas.dev@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    color: "hover:text-red-500"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/mond_valdepenas",
    icon: <Twitter className="w-5 h-5" />,
    color: "hover:text-blue-400"
  }
]

export function SocialLinks() {
  return (
    <motion.div 
      className="flex items-center justify-center space-x-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground transition-colors duration-300 ${link.color}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
        >
          <span className="sr-only">{link.name}</span>
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  )
}