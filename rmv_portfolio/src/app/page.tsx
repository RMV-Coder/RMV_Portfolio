"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import TypographyLead from "@/components/typography/lead"
import TypographyP from "@/components/typography/paragraph"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import { TypingAnimation } from "@/components/typing-animation"
import { AnimatedBackground } from "@/components/animated-background"
import { SocialLinks } from "@/components/social-links"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { CustomCursor } from "@/components/custom-cursor"
import { InteractiveBackground } from "@/components/interactive-background"
import { SmoothScroll } from "@/components/smooth-scroll"
import { scrollTo } from "@/lib/smooth-scroll"
import { StackReveal } from "@/components/motion/stack-reveal"
import { Magnetic } from "@/components/motion/magnetic"
import { homePageGraph } from "@/lib/structured-data"

// Dynamic imports for better code splitting
const SkillsSection = dynamic(() => import("@/components/skills-section").then(mod => ({ default: mod.SkillsSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: true
})

const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: true
})

// The repo list is fetched client-side via SWR, but the section itself renders
// on the server. With ssr:false the entire section — heading, description, and
// the link to GitHub — was absent from the served HTML, so crawlers saw no
// projects section at all.
const ProjectsSection = dynamic(() => import("@/components/projects-section").then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: true
})

const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: true
})

const ResearchSection = dynamic(() => import("@/components/research-section").then(mod => ({ default: mod.ResearchSection })), {
  loading: () => <div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>,
  ssr: true
})

export default function Home() {
  const heroRef = React.useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  // Hero content lags the scroll (translates up slower); the background lags
  // even more for a layered depth effect. Disabled under reduced motion.
  // Hero depth is purely positional (no shrink): content lags, background lags
  // more, so About slides up and covers it via z-index.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 90])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 200])

  return (
    <div className="min-h-screen">
      {/*
        ProfilePage node for this URL specifically — it names Raymond as the
        page's `mainEntity`, which is the question an AI overview is answering
        when someone searches his name. Emitted here rather than in the layout
        so it does not follow the visitor onto /research, which describes a
        different resource.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageGraph) }}
      />

      <SmoothScroll />
      <InteractiveBackground />
      <CustomCursor />
      <PerformanceMonitor />
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="relative isolate z-0 min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <AnimatedBackground />
        </motion.div>

        <motion.div style={{ y: contentY }} className="relative z-10">
        <motion.div
          className="text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypographyLead as="h1" text={"RAYMOND VALDEPEÑAS,"} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TypingAnimation 
              texts={[
                "FULLSTACK DEVELOPER",
                "SOFTWARE DEVELOPER",
                "AI/ML ENGINEER", 
                "IOT DEVELOPER",
                "DATA SCIENTIST",
                "DATABASE ARCHITECT",
                "AUTOMATION SPECIALIST"
              ]}
              className="scroll-m-20 text-6xl md:text-8xl font-extrabold tracking-tight text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              delay={100}
              typingSpeed={100}
              deletingSpeed={40}
              pauseDuration={4000}
              startFullyTyped={true}
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
            <Magnetic>
              <motion.button
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("#projects")}
                data-cursor="View"
              >
                View Projects
              </motion.button>
            </Magnetic>
            <Magnetic>
              <motion.button
                className="px-8 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("#contact")}
                data-cursor="Say hi"
              >
                Contact Me
              </motion.button>
            </Magnetic>
          </motion.div>
          
          <SocialLinks />
        </motion.div>
        </motion.div>

        <ScrollIndicator />
      </section>

      {/* Stacked parallax layers — each covers the previous by z-index, clamps
          on exit, and its background lags more than its content. */}
      <StackReveal index={1} tone="muted">
        <AboutSection />
      </StackReveal>

      <StackReveal index={2} tone="base">
        <SkillsSection />
      </StackReveal>

      <StackReveal index={3} tone="muted">
        <ResearchSection />
      </StackReveal>

      <StackReveal index={4} tone="base">
        <ProjectsSection />
      </StackReveal>

      <StackReveal index={5} tone="muted">
        <ContactSection />
      </StackReveal>

      <BackToTop />
    </div>
  )
}