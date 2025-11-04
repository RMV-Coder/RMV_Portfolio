"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import TypographyLead from "@/components/typography/lead"
import TypographyP from "@/components/typography/paragraph"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import { TypingAnimation } from "@/components/typing-animation"
import { AnimatedBackground } from "@/components/animated-background"
import { SocialLinks } from "@/components/social-links"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { PerformanceMonitor } from "@/components/performance-monitor"

// Dynamic imports for better code splitting
const SkillsSection = dynamic(() => import("@/components/skills-section").then(mod => ({ default: mod.SkillsSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: true
})

const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: true
})

const ProjectsSection = dynamic(() => import("@/components/projects-section").then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: false // This has GitHub API calls, so we can disable SSR
})

const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: true
})

export default function Home() {
  return (
    <div className="min-h-screen">
      <PerformanceMonitor />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypographyLead text={"RAYMOND VALDEPEÑAS,"} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TypingAnimation 
              texts={[
                "FULLSTACK DEVELOPER",
                "AI/ML ENGINEER", 
                "IOT DEVELOPER",
                "DATA SCIENTIST",
                "DATABASE ARCHITECT",
                "AUTOMATION SPECIALIST"
              ]}
              className="scroll-m-20 text-6xl md:text-8xl font-extrabold tracking-tight text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              delay={1000}
              typingSpeed={120}
              deletingSpeed={80}
              pauseDuration={1500}
            />
          </motion.div>
          
          <motion.div
            className="mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <TypographyP text={"SPECIALIZING IN INTEGRATING AI AND IOT SYSTEMS WITH EXPERTISE IN DATABASE MANAGEMENT."} />
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.button 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </motion.button>
            <motion.button 
              className="px-8 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          <SocialLinks />
        </motion.div>
        
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      <BackToTop />
    </div>
  )
}