"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"
import { SkillCard } from "@/components/skill-card"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="p-4 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-card rounded-lg border border-border">
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              30+
            </motion.div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-border">
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              5+
            </motion.div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-border">
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              50+
            </motion.div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-border">
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              10+
            </motion.div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}