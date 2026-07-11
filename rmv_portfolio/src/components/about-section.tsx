"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, MapPin, Coffee, Code, Gamepad2 } from "lucide-react"
import { WorkAvailability } from "@/components/work-availability"
import { Parallax } from "@/components/motion/parallax"


import { ResumeUnavailableModal } from "@/components/resume-unavailable-modal"
import { downloadResume } from "@/lib/resume"

export function AboutSection() {
  const [showResumeModal, setShowResumeModal] = React.useState(false)

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Parallax speed={0.25} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </Parallax>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <Parallax speed={0.15} className="relative">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square relative rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4">
                {/* Profile image with security measures */}
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <Image
                    src="/1-3-01.jpeg"
                    alt="Raymond Valdepeñas - Full Stack Developer"
                    fill
                    className="object-cover object-top select-none pointer-events-none secure-image"
                    style={{
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        userSelect: 'none',
                        WebkitTouchCallout: 'none',
                    } as React.CSSProperties}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    onMouseDown={(e) => e.preventDefault()}
                    draggable={false}
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Invisible overlay to prevent interactions */}
                  <div
                    className="absolute inset-0 select-none pointer-events-auto"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    style={{ userSelect: 'none' }}
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Code className="w-6 h-6" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Coffee className="w-6 h-6" />
                </motion.div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </Parallax>

          {/* Right Column - Bio Content */}
          <Parallax speed={0.35} className="space-y-6">
            {/* Bio Text */}
            <div className="space-y-4 selectable-text">
              <p className="text-lg text-foreground leading-relaxed selectable-text">
                Hello! I&apos;m <span className="font-semibold text-primary">Raymond Valdepeñas</span>,
                a passionate fullstack developer with expertise in building modern web applications
                and integrating cutting-edge technologies like AI and IoT systems.
              </p>

              <p className="text-muted-foreground leading-relaxed selectable-text">
                With over 5 years of experience in software development, I specialize in creating
                scalable solutions using React, Next.js, Node.js, and various database technologies.
                My journey in tech started with a curiosity about how things work, which evolved
                into a passion for creating digital experiences that make a difference.
              </p>

              <p className="text-muted-foreground leading-relaxed selectable-text">
                I have a strong background in database management and enjoy working on projects
                that integrate AI capabilities with IoT systems. When I&apos;m not coding, you&apos;ll find
                me exploring new technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-4 py-6 border-t border-border">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Philippines</span>
              </div>

              {/* Work Availability Status - Change props as needed */}
              <WorkAvailability available={false} status={7} />
            </div>

            {/* Interests */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">When I&apos;m not coding:</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Coffee, label: "Coffee brewing" },
                  { icon: Gamepad2, label: "Gaming" },
                  { icon: Code, label: "Open source" },
                ].map((interest) => (
                  <motion.div
                    key={interest.label}
                    className="flex items-center gap-2 bg-muted px-3 py-2 rounded-full text-sm"
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    <interest.icon className="w-4 h-4" />
                    {interest.label}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="pt-4">
              <motion.button
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={async () => {
                    if (!(await downloadResume())) setShowResumeModal(true)
                  }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>
            </div>
          </Parallax>
        </div>
      </div>

      {/* Resume Unavailable Modal */}
      <ResumeUnavailableModal
        open={showResumeModal}
        onOpenChange={setShowResumeModal}
      />
    </section>
  )
}
