"use client"

import * as React from "react"
import { Calendar } from "lucide-react"
import { 
  WorkAvailabilityProps, 
  WorkAvailabilityStatus,
  WORK_AVAILABILITY_CONFIGS 
} from "@/app/interface/interface"

export function WorkAvailability({ available, status }: WorkAvailabilityProps) {
  // Determine the status to use
  const effectiveStatus: WorkAvailabilityStatus = React.useMemo(() => {
    if (available) {
      // When available=true, use status if provided, otherwise default to 1
      return status || 1
    } else {
      // When available=false, status is required
      if (!status) {
        console.warn("WorkAvailability: status is required when available=false. Defaulting to status 4.")
        return 4 // Default to "Currently Employed"
      }
      return status
    }
  }, [available, status])

  const config = WORK_AVAILABILITY_CONFIGS[effectiveStatus]

  return (
    <div className="flex items-center gap-3">
      <Calendar className="w-5 h-5 text-primary" />
      <span 
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${config.color} ${config.bgColor}`}
      >
        <span>{config.icon}</span>
        <span>{config.text}</span>
      </span>
    </div>
  )
}
