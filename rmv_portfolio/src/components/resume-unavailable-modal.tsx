"use client"

import * as React from "react"
import { FileQuestion, Clock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ResumeUnavailableModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ResumeUnavailableModal({ open, onOpenChange }: ResumeUnavailableModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
            <FileQuestion className="h-6 w-6 text-orange-600 dark:text-orange-400" />
          </div>
          <DialogTitle className="text-center text-xl">Resume Currently Unavailable</DialogTitle>
          <DialogDescription className="text-center pt-2">
            My resume is currently being updated with recent projects and experience. Please check back soon or feel free to contact me directly for more information about my background and qualifications.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex items-center justify-center gap-2 rounded-lg bg-muted p-3 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Expected to be available within a few days</span>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button
            type="button"
            variant="default"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Understood
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
