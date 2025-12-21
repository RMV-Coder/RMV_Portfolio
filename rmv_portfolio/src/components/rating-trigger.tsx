"use client"

import * as React from "react"
import { RatingModal } from "./rating-modal"
import { ConfirmRatingDialog } from "./confirm-rating-dialog"

export function RatingTrigger() {
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false)
  const [showRatingModal, setShowRatingModal] = React.useState(false)
  const [hasAutoTriggered, setHasAutoTriggered] = React.useState(false)

  React.useEffect(() => {
    // Check if user has already rated
    const hasRated = localStorage.getItem('portfolioRated') === 'true'
    const hasSeenPrompt = sessionStorage.getItem('ratingPromptSeen') === 'true'
    
    if (hasRated || hasSeenPrompt) {
      setHasAutoTriggered(true)
      return
    }

    // Auto-trigger when user reaches 95% of page (first-time visitor)
    const handleScroll = () => {
      if (!hasAutoTriggered && !hasRated && !hasSeenPrompt) {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight
        
        if (scrollPercent > 0.85) {
          setHasAutoTriggered(true)
          sessionStorage.setItem('ratingPromptSeen', 'true')
          
          // Wait 5 seconds before showing confirmation dialog
          setTimeout(() => {
            setShowConfirmDialog(true)
          }, 5000)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasAutoTriggered])

  const handleConfirm = () => {
    setShowRatingModal(true)
  }

  return (
    <>
      {/* Confirmation Dialog */}
      <ConfirmRatingDialog 
        open={showConfirmDialog} 
        onOpenChange={setShowConfirmDialog}
        onConfirm={handleConfirm}
      />

      {/* Rating Modal */}
      <RatingModal open={showRatingModal} onOpenChange={setShowRatingModal} />
    </>
  )
}

