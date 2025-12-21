"use client"

import * as React from "react"
import { Star, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ConfirmRatingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function ConfirmRatingDialog({ open, onOpenChange, onConfirm }: ConfirmRatingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            Enjoying My Portfolio?
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Your feedback would be incredibly valuable! Would you like to take a moment to rate your experience?
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            It only takes 30 seconds and helps me improve. Your ratings are anonymous and appreciated! 🙏
          </p>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="gap-2"
          >
            <X className="w-4 h-4" />
            Maybe Later
          </Button>
          <Button
            type="button"
            onClick={() => {
              onOpenChange(false)
              onConfirm()
            }}
            className="gap-2"
          >
            <Star className="w-4 h-4" />
            {"Sure, I'd Love To!"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
