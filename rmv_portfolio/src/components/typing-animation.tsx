"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  texts: string[]
  className?: string
  delay?: number
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  startFullyTyped?: boolean // New prop to start with first text fully typed
}

export function TypingAnimation({ 
  texts, 
  className = "", 
  delay = 0,
  typingSpeed = 50, // milliseconds per character (faster than before)
  deletingSpeed = 30, // milliseconds per character when deleting
  pauseDuration = 1000, // pause between complete words
  startFullyTyped = false // Start with first text already displayed
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = React.useState(startFullyTyped && texts.length > 0 ? texts[0] : "")
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(startFullyTyped)
  const [isPaused, setIsPaused] = React.useState(startFullyTyped)

  React.useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false)
        setIsDeleting(true)
        return
      }

      if (isDeleting) {
        // Deleting animation
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          // Move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      } else {
        // Typing animation
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // Text complete, pause before deleting
          setIsPaused(true)
        }
      }
    }, 
    delay + (isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed))

    return () => clearTimeout(timeout)
  }, [displayedText, currentTextIndex, isDeleting, isPaused, texts, delay, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {displayedText}
      <motion.span
        className="opacity-100 font-normal"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        |
      </motion.span>
    </motion.span>
  )
}

// Legacy component for single text (backward compatibility)
interface SingleTypingAnimationProps {
  text: string
  className?: string
  delay?: number
}

export function SingleTypingAnimation({ text, className = "", delay = 0 }: SingleTypingAnimationProps) {
  return (
    <TypingAnimation 
      texts={[text]} 
      className={className} 
      delay={delay}
      typingSpeed={150}
      deletingSpeed={100}
      pauseDuration={999999} // Very long pause so it doesn't cycle for single text
    />
  )
}