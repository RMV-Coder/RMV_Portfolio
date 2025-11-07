"use client"

import * as React from "react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
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
    </footer>
  )
}