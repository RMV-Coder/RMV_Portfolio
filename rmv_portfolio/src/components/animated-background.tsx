"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const [dimensions, setDimensions] = React.useState({ width: 1200, height: 800 })

  React.useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Set initial dimensions
    updateDimensions()
    
    // Update on resize
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Generate random positions based on current dimensions
  const particles = React.useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      initialX: Math.random() * dimensions.width,
      initialY: Math.random() * dimensions.height,
      targetX: Math.random() * dimensions.width,
      targetY: Math.random() * dimensions.height,
      duration: Math.random() * 10 + 20
    }))
  }, [dimensions])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
          }}
          animate={{
            x: particle.targetX,
            y: particle.targetY,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 border border-secondary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  )
}