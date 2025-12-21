"use client"

import * as React from "react"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RatingModal } from "@/components/rating-modal"

export function Footer() {
  const [showRatingModal, setShowRatingModal] = React.useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-6">
            {/* Rate Portfolio Button */}
            <div className="flex items-center justify-center">
              <Button
                onClick={() => setShowRatingModal(true)}
                variant="outline"
                size="lg"
                className="group border-border bg-background text-foreground hover:bg-background hover:border-primary transition-all"
              >
                <Star className="w-5 h-5 mr-2 transition-colors group-hover:text-yellow-400 group-hover:fill-yellow-400" />
                Rate This Portfolio
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground w-full">
              {/* Copyright */}
              <div className="text-center sm:text-left">
                <p>
                  © {currentYear} Raymond Valdepeñas. All rights reserved.
                </p>
              </div>

              {/* Powered by */}
              <div className="text-center sm:text-right">
                <p className="flex items-center justify-center sm:justify-end gap-1">
                  Powered by{" "}
                  <Link
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Next.js
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <RatingModal open={showRatingModal} onOpenChange={setShowRatingModal} />
    </>
  )
}