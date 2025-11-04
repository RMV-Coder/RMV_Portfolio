"use client"

import * as React from "react"
import { motion } from "framer-motion"
import type { Skill } from "@/data/skills"

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      className="group relative p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon */}
        <motion.div
          className={`text-4xl mb-3 ${skill.color}`}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <skill.icon className="w-12 h-12" />
        </motion.div>
        
        {/* Name */}
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        
        {/* Level indicator */}
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <motion.div
            className="bg-primary rounded-full h-2"
            initial={{ width: 0 }}
            whileInView={{ 
              width: skill.level === "Expert" ? "100%" 
                   : skill.level === "Advanced" ? "80%" 
                   : skill.level === "Intermediate" ? "60%" 
                   : "40%" 
            }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            viewport={{ once: true }}
          />
        </div>
        
        {/* Level text */}
        <span className="text-xs text-muted-foreground font-medium">
          {skill.level}
        </span>
      </div>
      
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  )
}