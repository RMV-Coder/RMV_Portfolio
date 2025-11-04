"use client"

import * as React from "react"

export function PerformanceMonitor() {
  React.useEffect(() => {
    // Performance monitoring only in development
    if (process.env.NODE_ENV === 'development') {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const { name, startTime, duration } = entry
          
          // Log performance metrics
          console.group(`🚀 Performance Metric: ${name}`)
          console.log(`Start Time: ${startTime.toFixed(2)}ms`)
          console.log(`Duration: ${duration.toFixed(2)}ms`)
          console.groupEnd()

          // Specific metrics
          if (name === 'first-contentful-paint') {
            console.log(`🎨 First Contentful Paint: ${startTime.toFixed(2)}ms`)
          }
          
          if (name === 'largest-contentful-paint') {
            console.log(`🖼️ Largest Contentful Paint: ${startTime.toFixed(2)}ms`)
          }
        })
      })

      // Observe various performance metrics
      try {
        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
      } catch (error) {
        console.warn('Performance Observer not supported:', error)
      }

      // Web Vitals
      const measureWebVitals = () => {
        if ('web-vital' in window) {
          // @ts-expect-error - web-vital might not be available
          window['web-vital'].getCLS(console.log)
          // @ts-expect-error - web-vital might not be available
          window['web-vital'].getFID(console.log)
          // @ts-expect-error - web-vital might not be available
          window['web-vital'].getFCP(console.log)
          // @ts-expect-error - web-vital might not be available
          window['web-vital'].getLCP(console.log)
          // @ts-expect-error - web-vital might not be available
          window['web-vital'].getTTFB(console.log)
        }
      }

      // Measure after load
      if (document.readyState === 'complete') {
        measureWebVitals()
      } else {
        window.addEventListener('load', measureWebVitals)
      }

      return () => {
        observer.disconnect()
        window.removeEventListener('load', measureWebVitals)
      }
    }
  }, [])

  return null
}