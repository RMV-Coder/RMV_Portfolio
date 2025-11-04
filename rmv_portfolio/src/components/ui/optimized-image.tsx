"use client"

import * as React from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  className?: string
  fallback?: string
  loading?: "eager" | "lazy"
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback = "/placeholder-image.jpg",
  loading = "lazy",
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = React.useState(src)
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const handleLoad = React.useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = React.useCallback(() => {
    setHasError(true)
    setIsLoading(false)
    if (fallback) {
      setImgSrc(fallback)
    }
  }, [fallback])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        loading={loading}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          hasError && "opacity-50"
        )}
        {...props}
      />
    </div>
  )
}