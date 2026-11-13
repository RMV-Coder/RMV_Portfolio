"use client"

import * as React from "react"

/**
 * `waiting`: the page is still loading, so the 3D scene has not been asked for.
 * `ready`: go ahead and load it.
 * `off`: this visitor does not get one, and the page should close the gap it would have filled.
 */
export type SceneReadiness = "waiting" | "ready" | "off"

/**
 * Says when the 3D scene may load.
 *
 * It is the largest download on the site, so it waits its turn behind the
 * text, the fonts and the images, and it is skipped altogether for visitors
 * who have asked their browser to save data, or whose browser has no WebGL.
 * The page is complete without it.
 */
export function useSceneReady(): SceneReadiness {
  const [state, setState] = React.useState<SceneReadiness>("waiting")

  React.useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    const unsupported = Boolean(connection?.saveData) || typeof window.WebGL2RenderingContext === "undefined"

    let idle = 0
    let timer = 0
    const settle = () => setState(unsupported ? "off" : "ready")
    const start = () => {
      if (!unsupported && typeof window.requestIdleCallback === "function") {
        idle = window.requestIdleCallback(settle, { timeout: 1200 })
      } else {
        // No scene: say so at once, so the page can close the gap. Otherwise give the page a moment first.
        timer = window.setTimeout(settle, unsupported ? 0 : 300)
      }
    }
    if (unsupported || document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })

    return () => {
      window.removeEventListener("load", start)
      if (idle) window.cancelIdleCallback(idle)
      window.clearTimeout(timer)
    }
  }, [])

  return state
}
