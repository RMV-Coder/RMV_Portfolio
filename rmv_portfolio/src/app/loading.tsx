import * as React from "react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-muted rounded animate-pulse mx-auto"></div>
          <div className="h-3 w-24 bg-muted/60 rounded animate-pulse mx-auto"></div>
        </div>
      </div>
    </div>
  )
}