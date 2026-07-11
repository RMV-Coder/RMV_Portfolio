"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { scrollTo } from "@/lib/smooth-scroll"

export function ScrollIndicator() {
  const scrollToNextSection = () => {
    scrollTo("#about")
  }

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
    >
      <button
        onClick={scrollToNextSection}
        className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300 group"
        aria-label="Scroll to next section"
      >
        <span className="text-sm mb-2 opacity-70">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="group-hover:text-primary transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
    </motion.div>
  )
}