"use client"

import * as React from "react"
import { Star, Send, Loader2, Github } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RatingModalProps } from "@/app/interface/rating"

const PORTFOLIO_REPO_URL = "https://github.com/RMV-Coder/RMV_Portfolio"

const ratingCategories = [
  { name: 'uiux', label: 'UI/UX Design', description: 'Visual design and user experience' },
  { name: 'performance', label: 'Performance & Speed', description: 'Loading time and responsiveness' },
  { name: 'content', label: 'Content Quality', description: 'Information and presentation' },
  { name: 'overall', label: 'Overall Experience', description: 'Your overall impression' },
]

export function RatingModal({ open, onOpenChange }: RatingModalProps) {
  const [ratings, setRatings] = React.useState({
    uiux: 0,
    performance: 0,
    content: 0,
    overall: 0,
  })
  const [feedback, setFeedback] = React.useState('')
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null)
  const [hoveredStar, setHoveredStar] = React.useState<number>(0)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')

  const handleRating = (category: string, score: number) => {
    setRatings(prev => ({ ...prev, [category]: score }))
  }

  // Reset the form when the dialog closes so a reopened modal starts fresh
  // (the success state stays open until the visitor dismisses it).
  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange(nextOpen)
    if (!nextOpen) {
      setRatings({ uiux: 0, performance: 0, content: 0, overall: 0 })
      setFeedback('')
      setSubmitStatus('idle')
    }
  }

  const handleSubmit = async () => {
    // Check if at least overall rating is provided
    if (ratings.overall === 0) {
      alert('Please provide at least an overall rating')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/submit-rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categories: ratings,
          feedback: feedback.trim(),
        }),
      })

      if (!response.ok) throw new Error('Failed to submit rating')

      setSubmitStatus('success')

      // Mark as rated in localStorage
      localStorage.setItem('portfolioRated', 'true')
    } catch (error) {
      console.error('Rating submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  /**
   * Each category is a radio group: one Tab stop (the chosen star, or the first),
   * arrow keys move between stars and choose, as native radio buttons do.
   */
  const handleStarKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, category: string, currentRating: number) => {
    const from = currentRating || 1
    let next: number
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        next = from === 5 ? 1 : from + 1
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        next = from === 1 ? 5 : from - 1
        break
      case 'Home':
        next = 1
        break
      case 'End':
        next = 5
        break
      default:
        return
    }
    event.preventDefault()
    handleRating(category, next)
    event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="radio"]')[next - 1]?.focus()
  }

  const renderStars = (category: string, currentRating: number) => {
    return (
      <div
        role="radiogroup"
        aria-labelledby={`rating-${category}-label`}
        aria-describedby={`rating-${category}-description`}
        // Submit stays disabled until the overall rating is chosen.
        aria-required={category === 'overall' || undefined}
        onKeyDown={(event) => handleStarKeyDown(event, category, currentRating)}
        className="flex gap-1"
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const isActive = hoveredCategory === category && hoveredStar >= star
          const isFilled = currentRating >= star || isActive
          const isChecked = currentRating === star

          return (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={isChecked}
              aria-label={`${star} out of 5`}
              tabIndex={isChecked || (currentRating === 0 && star === 1) ? 0 : -1}
              onClick={() => handleRating(category, star)}
              onMouseEnter={() => {
                setHoveredCategory(category)
                setHoveredStar(star)
              }}
              onMouseLeave={() => {
                setHoveredCategory(null)
                setHoveredStar(0)
              }}
              className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              <Star
                aria-hidden="true"
                className={`w-6 h-6 transition-colors ${
                  isFilled
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Rate this portfolio</DialogTitle>
          <DialogDescription>
            Your feedback helps me improve it. Rate any of these, and add a note if you like.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === 'success' ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Thank you</h3>
            <p className="text-muted-foreground">
              Your rating was sent. I appreciate it.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Enjoyed it? A star on GitHub helps.
            </p>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2">
              <Button asChild>
                <a
                  href={PORTFOLIO_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Star this repo
                  <Star className="w-4 h-4 ml-2 fill-yellow-400 text-yellow-400" />
                </a>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-6 py-4">
              {ratingCategories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 id={`rating-${category.name}-label`} className="font-medium text-sm">{category.label}</h3>
                      <p id={`rating-${category.name}-description`} className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                    {renderStars(category.name, ratings[category.name as keyof typeof ratings])}
                  </div>
                </div>
              ))}

              <div className="space-y-2 pt-4 border-t">
                <label htmlFor="feedback" className="text-sm font-medium">
                  Additional feedback (optional)
                </label>
                <textarea
                  id="feedback"
                  placeholder="Share your thoughts, suggestions, or what you liked most..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  maxLength={1000}
                />
                <p className="text-xs text-muted-foreground text-right">
                  {feedback.length}/1000
                </p>
              </div>

              {submitStatus === 'error' && (
                <div role="alert" className="text-sm text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                  Failed to submit rating. Please try again.
                </div>
              )}
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || ratings.overall === 0}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit rating
                  </>
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
