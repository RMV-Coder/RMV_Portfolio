"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const [dimensions, setDimensions] = React.useState({ width: 1200, height: 800 })
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
    
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

  // Generate consistent particles using seeded random values
  const particles = React.useMemo(() => {
    if (!isClient) {
      // Return consistent server-side data
      return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        initialX: (i * 123.456) % dimensions.width,
        initialY: (i * 789.123) % dimensions.height,
        targetX: ((i + 10) * 234.567) % dimensions.width,
        targetY: ((i + 10) * 890.234) % dimensions.height,
        duration: 20 + (i % 10)
      }))
    }
    
    // Client-side can use random values after hydration
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      initialX: Math.random() * dimensions.width,
      initialY: Math.random() * dimensions.height,
      targetX: Math.random() * dimensions.width,
      targetY: Math.random() * dimensions.height,
      duration: Math.random() * 10 + 20
    }))
  }, [dimensions, isClient])

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