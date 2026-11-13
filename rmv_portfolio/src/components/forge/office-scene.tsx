"use client"

import * as React from "react"
import * as THREE from "three"
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js"
import { createKit, type Outline } from "./scene/kit"
import { buildOffice } from "./scene/office"
import { productBuilders } from "./scene/products"
import { buildShelf } from "./scene/shelf"
import type { Anchor, LayoutMode, ProductBuild, ProductFrame, RoomFrame, SceneTheme } from "./scene/types"

/**
 * The 3D scene: a cutaway maker's study in which every object is a product,
 * or (on the tools page) the same objects standing on a shelf.
 *
 * This file is only the stage manager. The room comes from an environment
 * builder, each object from a product builder, and their colours from the kit
 * (see ./scene/types.ts for the contract). What lives here is what both
 * settings share: the renderer, fitting the room into the space the page
 * leaves for it, building the scene up from its own blueprint, dissolving it
 * back as the page scrolls on, hovering and name tags, and following the
 * site's light and dark themes.
 *
 * Plain three.js rather than a React renderer: one imperative loop with no
 * React state in the hot path. The loop only draws on frames where something
 * changed, so a scene nobody is touching costs nothing.
 */

export interface BenchItem {
  slug: string
  name: string
  kind: string
  accent: string
}

interface OfficeSceneProps {
  items: BenchItem[]
  /** Slug highlighted from outside (a chip being hovered or focused). */
  activeSlug: string | null
  onHover: (slug: string | null) => void
  onSelect: (slug: string) => void
  /** Called if the scene cannot be shown at all (no WebGL), so the page can close the gap it left for it. */
  onUnavailable?: () => void
  /** `office` is the room beside the headline; `shelf` is the row on the tools page. */
  arrangement?: "office" | "shelf"
  className?: string
}

interface Exhibit {
  slug: string
  build: ProductBuild
  /** Placed at the product's anchor; this is what lifts on hover. */
  holder: THREE.Group
  /** The product is drawn only below this plane: raising it builds the product up. */
  clip: THREE.Plane
  outline: Outline
  /** A soft dark patch under the product, shown when real shadows are off. */
  blob: THREE.Mesh | null
  anchor: Anchor | null
  /** Its place in the order of arrival. */
  rank: number
  hover: number
  frame: ProductFrame
}

/** When each part of the entrance happens, in seconds. */
const TIMING = {
  office: { lines: 0.7, productLinesAt: 0.45, lineGap: 0.07, sweepAt: 0.8, sweep: 1.1, productsAt: 1.25, gap: 0.11 },
  shelf: { lines: 0.5, productLinesAt: 0.2, lineGap: 0.05, sweepAt: 0.35, sweep: 0.7, productsAt: 0.6, gap: 0.08 },
} as const
const PRODUCT_LINES = 0.45
const PRODUCT_SWEEP = 0.55
/** A height no part of any scene reaches: a cutting plane parked here cuts nothing. */
const UNCUT = 1e4
/** Frames slower than this, sustained, mean the machine is struggling. */
const SLOW_FRAME = 1 / 38
/** How far outside the stage a pointer may be and still pick something, in pixels. */
const PICK_MARGIN = 24
/** The fixed site header's height plus a little air: name tags stay below it. */
const HEADER_CLEARANCE = 72
/**
 * On a phone the page fades to its background over the last strip of the
 * band above the headline. The scene stops this many pixels short of the
 * text, where that fade begins. Keep in step with the gradient in forge-hero.tsx.
 */
const FADE_STRIP = 48

const UP = new THREE.Vector3(0, 1, 0)

const clamp01 = (t: number) => Math.min(1, Math.max(0, t))
const smooth = (t: number) => t * t * (3 - 2 * t)
const smoothstep = (from: number, to: number, t: number) => smooth(clamp01((t - from) / (to - from)))
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const mix = (from: number, to: number, t: number) => from + (to - from) * t

/** A lamp being switched on: a first catch, a dip, then full. `since` is seconds since the switch. */
const flicker = (since: number) => {
  if (since <= 0) return 0
  if (since < 0.06) return mix(0, 0.35, since / 0.06)
  if (since < 0.1) return mix(0.35, 0.05, (since - 0.06) / 0.04)
  if (since < 0.28) return mix(0.05, 1, smooth((since - 0.1) / 0.18))
  return 1
}

/** Gives the browser a turn, so a tap or a scroll is not kept waiting behind a long setup. */
const pause = () => new Promise<void>((resolve) => setTimeout(resolve, 0))

const readTheme = (): SceneTheme => (document.documentElement.classList.contains("dark") ? "dark" : "light")

/** The right-hand edge of the headline block's actual text, which is narrower than its box. */
function inkRight(block: HTMLElement): number {
  const range = document.createRange()
  let right = 0
  block.querySelectorAll("h1 > span, p, li").forEach((element) => {
    range.selectNodeContents(element)
    for (const rect of range.getClientRects()) right = Math.max(right, rect.right)
  })
  return right
}

export function OfficeScene({
  items,
  activeSlug,
  onHover,
  onSelect,
  onUnavailable,
  arrangement = "office",
  className = "",
}: OfficeSceneProps) {
  const hostRef = React.useRef<HTMLDivElement>(null)
  const labelRef = React.useRef<HTMLDivElement>(null)

  // Latest props for the render loop, which is created once.
  const live = React.useRef({ activeSlug, onHover, onSelect, onUnavailable, items })
  React.useEffect(() => {
    live.current = { activeSlug, onHover, onSelect, onUnavailable, items }
  })

  React.useEffect(() => {
    const host = hostRef.current
    const label = labelRef.current
    if (!host || !label) return

    let cancelled = false
    /** Everything to take down on unmount; run last-in, first-out. */
    const undo: (() => void)[] = []

    /**
     * Builds the scene in steps, handing control back to the browser between
     * them: built in one go, nine objects, their textures and their drawings
     * would hold the page still for a noticeable moment on a phone.
     */
    const build = async () => {
      let renderer: THREE.WebGLRenderer
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" })
      } catch {
        // No WebGL: the page reads fine without the scene.
        live.current.onUnavailable?.()
        return
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const touch = window.matchMedia("(pointer: coarse)").matches
      const timing = TIMING[arrangement]

      /** Set once, for good, if this machine turns out not to keep up. */
      let eased = false
      const pixelRatio = () =>
        Math.min(window.devicePixelRatio, eased ? 1.25 : window.innerWidth < 640 ? 1.5 : 2)
      renderer.setPixelRatio(pixelRatio())
      renderer.outputColorSpace = THREE.SRGBColorSpace
      // Keeps colours as painted: the accents on the products are brand colours.
      renderer.toneMapping = THREE.NeutralToneMapping
      renderer.localClippingEnabled = true
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFShadowMap
      // Shadows depend on the lights and the objects, not on where the camera is,
      // so they are redrawn only on frames where the scene itself changed.
      renderer.shadowMap.autoUpdate = false
      const canvas = renderer.domElement
      canvas.style.display = "block"
      host.appendChild(canvas)

      const kit = createKit(readTheme(), Math.min(8, renderer.capabilities.getMaxAnisotropy()))
      const scene = new THREE.Scene()
      let reflections: THREE.WebGLRenderTarget | null = null

      undo.push(() => {
        scene.traverse((object) => {
          const mesh = object as THREE.Mesh
          mesh.geometry?.dispose()
          ;(mesh.userData.outline as THREE.BufferGeometry | undefined)?.dispose()
          const materials = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : []
          materials.forEach((material) => {
            const textured = material as THREE.MeshStandardMaterial
            textured.map?.dispose()
            textured.emissiveMap?.dispose()
            material.dispose()
          })
        })
        kit.dispose()
        reflections?.dispose()
        renderer.dispose()
        // A browser allows only a handful of live WebGL contexts. Give this one
        // back now, rather than whenever the canvas happens to be collected.
        renderer.forceContextLoss()
        canvas.remove()
      })

      await pause()
      if (cancelled) return

      /**
       * Soft image-based fill, so metal and glass have something to reflect.
       * Baked once; the tools that bake it are let go straight away.
       */
      const bakeReflections = () => {
        const generator = new THREE.PMREMGenerator(renderer)
        const studio = new RoomEnvironment()
        const baked = generator.fromScene(studio, 0.04)
        generator.dispose()
        studio.dispose()
        reflections?.dispose()
        reflections = baked
        scene.environment = baked.texture
      }
      bakeReflections()

      await pause()
      if (cancelled) return

      const room = (arrangement === "shelf" ? buildShelf : buildOffice)(kit)
      scene.add(room.group)
      // Real shadows cost a second pass; phones and narrow screens get soft patches instead.
      let shadows = !touch && window.innerWidth >= 768
      room.setShadows(shadows)

      await pause()
      if (cancelled) return

      // ── Products ──────────────────────────────────────────────────────────
      const exhibits: Exhibit[] = []
      const pickTargets: THREE.Object3D[] = []
      const pickMaterial = new THREE.MeshBasicMaterial({ visible: false })

      const blobTexture = (() => {
        const size = 128
        const image = document.createElement("canvas")
        image.width = image.height = size
        const context = image.getContext("2d")
        if (context) {
          const fade = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
          fade.addColorStop(0, "rgba(0,0,0,1)")
          fade.addColorStop(0.55, "rgba(0,0,0,0.45)")
          fade.addColorStop(1, "rgba(0,0,0,0)")
          context.fillStyle = fade
          context.fillRect(0, 0, size, size)
        }
        return new THREE.CanvasTexture(image)
      })()
      undo.push(() => {
        pickMaterial.dispose()
        blobTexture.dispose()
      })

      for (const item of live.current.items) {
        const builder = productBuilders[item.slug]
        if (!builder) continue
        const scoped = kit.scope()
        const product = builder(scoped, arrangement === "shelf" ? "shelf" : "room")
        const outline = scoped.blueprint(product.group)
        product.group.add(outline.lines)

        const holder = new THREE.Group()
        holder.add(product.group)
        // A generous invisible box: a forgiving target around a spindly object.
        const [boxWidth, boxHeight, boxDepth] = product.size
        const reach = Math.max(boxDepth, 0.12)
        const pickBox = new THREE.Mesh(new THREE.BoxGeometry(boxWidth * 1.1, boxHeight * 1.05, reach * 1.1), pickMaterial)
        pickBox.position.set(0, boxHeight / 2, product.mount === "wall" ? reach / 2 : 0)
        pickBox.userData.exhibit = exhibits.length
        holder.add(pickBox)
        pickTargets.push(pickBox)
        holder.visible = false
        scene.add(holder)

        let blob: THREE.Mesh | null = null
        if (product.mount === "surface") {
          blob = new THREE.Mesh(
            new THREE.PlaneGeometry(boxWidth * 1.35, boxDepth * 1.35),
            new THREE.MeshBasicMaterial({
              map: blobTexture,
              color: 0x000000,
              transparent: true,
              depthWrite: false,
              clippingPlanes: [scoped.clip],
            })
          )
          blob.rotation.x = -Math.PI / 2
          blob.visible = false
          scene.add(blob)
        }

        exhibits.push({
          slug: item.slug,
          build: product,
          holder,
          clip: scoped.clip,
          outline,
          blob,
          anchor: null,
          rank: 0,
          hover: 0,
          frame: { time: 0, hover: 0, built: 0 },
        })

        // One object at a time.
        await pause()
        if (cancelled) return
      }

      // ── Layout and framing: fit the scene into the space the page leaves for it ─
      const camera = new THREE.PerspectiveCamera(30, 1, 0.5, 120)
      const direction = new THREE.Vector3(0, 0.2, 1).normalize()
      const center = new THREE.Vector3(0, 1, 0)
      const fitPoints: THREE.Vector3[] = []
      let distance = 10
      let width = 1
      let height = 1
      let mode: LayoutMode | "" = ""
      let roomOutline: Outline | null = null
      let placed = 0
      const stage = { x: 0, y: 0, w: 1, h: 1 }
      /** True when the page has left no room worth drawing in. */
      let stageHidden = false

      /** Where on the canvas the scene should sit, in CSS pixels. */
      const measureStage = (): LayoutMode => {
        stageHidden = false
        if (arrangement === "shelf") {
          // The bottom strip is left for the caption under the shelf.
          stage.x = 16
          stage.y = 8
          stage.w = width - 32
          stage.h = height - 42
          return stage.w / stage.h >= 3.6 ? "wide" : "compact"
        }
        const text = host.parentElement?.querySelector<HTMLElement>("[data-bench-clear]")
        const bounds = host.getBoundingClientRect()
        // The same test the page's own layout uses (Tailwind's `lg`), so the two
        // can never disagree; the canvas is narrower than the viewport by a scrollbar.
        if (window.matchMedia("(min-width: 1024px)").matches) {
          // Beside the headline: from where its text ends to the right edge.
          const textEnd = text ? inkRight(text) - bounds.left + 28 : width * 0.5
          stage.x = Math.min(width * 0.6, Math.max(width * 0.5, textEnd))
          stage.y = 84
          stage.w = width - Math.max(20, width * 0.015) - stage.x
          // On a short screen the hero is taller than the window; the room belongs in
          // the part that is seen first, not centred on a section that runs below the fold.
          stage.h = Math.max(240, Math.min(height, window.innerHeight) - 64 - stage.y)
          return "wide"
        }
        // Above the headline: the gap the text leaves under the site header,
        // less the strip over which the page fades to its background.
        const textTop = text ? text.getBoundingClientRect().top - bounds.top : height * 0.46
        stage.x = 10
        stage.y = 70
        stage.w = width - 20
        const gap = textTop - FADE_STRIP - stage.y
        stage.h = Math.max(1, gap)
        // A landscape phone, or a page zoomed far in: too little room to show
        // anything worth seeing, and the text would end up on top of it.
        stageHidden = gap < 110
        return "compact"
      }

      const applyLayout = (next: LayoutMode) => {
        mode = next
        const present = exhibits.map((exhibit) => exhibit.slug)
        const layout = room.layout(next, present)
        camera.fov = layout.camera.fov
        direction.set(...layout.camera.direction).normalize()

        fitPoints.length = 0
        layout.keep.forEach((point) => fitPoints.push(new THREE.Vector3(...point)))
        placed = 0
        exhibits.forEach((exhibit) => {
          const anchor = layout.anchors[exhibit.slug] ?? null
          exhibit.anchor = anchor
          exhibit.holder.visible = anchor !== null
          if (exhibit.blob) exhibit.blob.visible = false
          if (!anchor) return
          placed += 1
          exhibit.holder.position.set(...anchor.position)
          exhibit.holder.rotation.y = anchor.rotationY
          exhibit.holder.scale.setScalar(anchor.scale)
          if (exhibit.blob) {
            exhibit.blob.position.set(anchor.position[0], anchor.position[1] + 0.004, anchor.position[2])
            exhibit.blob.rotation.z = anchor.rotationY
            exhibit.blob.scale.setScalar(anchor.scale)
          }
          // The corners of the product's box, so the camera keeps every product whole.
          const [w, h, d] = exhibit.build.size
          const near = exhibit.build.mount === "wall" ? d : d / 2
          const far = exhibit.build.mount === "wall" ? 0 : -d / 2
          for (const x of [-w / 2, w / 2]) {
            for (const y of [0, h]) {
              for (const z of [far, near]) {
                fitPoints.push(
                  new THREE.Vector3(x, y, z)
                    .multiplyScalar(anchor.scale)
                    .applyAxisAngle(UP, anchor.rotationY)
                    .add(exhibit.holder.position)
                )
              }
            }
          }
        })

        // Arrival order: back of the room first, the centrepiece last.
        const order = exhibits
          .filter((exhibit) => exhibit.anchor)
          .sort((a, b) => {
            const last = Number(a.slug === "myboardhub") - Number(b.slug === "myboardhub")
            if (last !== 0) return last
            const depth = a.anchor!.position[2] - b.anchor!.position[2]
            return Math.abs(depth) > 0.05 ? depth : a.anchor!.position[0] - b.anchor!.position[0]
          })
        order.forEach((exhibit, index) => (exhibit.rank = index))

        // The room may have rearranged itself, so its drawing is made afresh.
        if (roomOutline) {
          room.group.remove(roomOutline.lines)
          roomOutline.lines.geometry.dispose()
          roomOutline.material.dispose()
        }
        roomOutline = kit.blueprint(room.group)
        room.group.add(roomOutline.lines)
      }

      const right = new THREE.Vector3()
      const lift = new THREE.Vector3()
      const projected = new THREE.Vector3()

      /** Sets the camera's view offset so the point it looks at lands on the centre of the stage. */
      const aim = () => {
        camera.setViewOffset(
          width,
          height,
          width / 2 - (stage.x + stage.w / 2),
          height / 2 - (stage.y + stage.h / 2),
          width,
          height
        )
        camera.updateProjectionMatrix()
      }

      /**
       * Finds how far back the camera must stand, and which point it must look
       * at, for every fit point to sit inside the stage. The direction is fixed;
       * a few rounds of measure-and-correct settle distance and aim exactly,
       * perspective included.
       */
      const fit = () => {
        if (fitPoints.length === 0) return
        const tangent = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
        right.crossVectors(UP, direction).normalize()
        lift.crossVectors(direction, right).normalize()
        // Leave a little air around the scene.
        const inset = 0.04
        const w = stage.w * (1 - 2 * inset)
        const h = stage.h * (1 - 2 * inset)
        const cx = stage.x + stage.w / 2
        const cy = stage.y + stage.h / 2

        // First guess, as if there were no perspective.
        const box = new THREE.Box3()
        fitPoints.forEach((point) =>
          box.expandByPoint(projected.set(point.dot(right), point.dot(lift), point.dot(direction)))
        )
        center
          .set(0, 0, 0)
          .addScaledVector(right, (box.min.x + box.max.x) / 2)
          .addScaledVector(lift, (box.min.y + box.max.y) / 2)
          .addScaledVector(direction, (box.min.z + box.max.z) / 2)
        distance = Math.max(
          ((box.max.y - box.min.y) * height) / (2 * h * tangent),
          ((box.max.x - box.min.x) * height) / (2 * w * tangent)
        )
        aim()

        for (let round = 0; round < 6; round++) {
          camera.position.copy(center).addScaledVector(direction, distance)
          camera.lookAt(center)
          camera.updateMatrixWorld()
          let minX = Infinity
          let maxX = -Infinity
          let minY = Infinity
          let maxY = -Infinity
          fitPoints.forEach((point) => {
            projected.copy(point).project(camera)
            const x = ((projected.x + 1) / 2) * width
            const y = ((1 - projected.y) / 2) * height
            minX = Math.min(minX, x)
            maxX = Math.max(maxX, x)
            minY = Math.min(minY, y)
            maxY = Math.max(maxY, y)
          })
          const scale = Math.max((maxX - minX) / w, (maxY - minY) / h)
          if (!Number.isFinite(scale) || scale <= 0) break
          distance *= scale
          const metresPerPixel = (2 * distance * tangent) / height
          center
            .addScaledVector(right, (((minX + maxX) / 2 - cx) * metresPerPixel) / scale)
            .addScaledVector(lift, (-((minY + maxY) / 2 - cy) * metresPerPixel) / scale)
        }
      }

      const relayout = () => {
        width = host.clientWidth || 1
        height = host.clientHeight || 1
        renderer.setPixelRatio(pixelRatio())
        renderer.setSize(width, height, false)
        canvas.style.width = "100%"
        canvas.style.height = "100%"
        camera.aspect = width / height
        const next = measureStage()
        canvas.style.visibility = stageHidden ? "hidden" : ""
        if (next !== mode) applyLayout(next)
        fit()
      }

      let layoutDue = true
      /** The scene itself changed: redraw it, shadows included. */
      let dirty = true
      /** Only the camera moved: redraw, but the shadows are still right. */
      let moved = false
      const resizeObserver = new ResizeObserver(() => {
        layoutDue = true
      })
      resizeObserver.observe(host)
      undo.push(() => resizeObserver.disconnect())
      // The headline reflows when its typeface arrives, which moves the stage.
      document.fonts?.ready.then(() => {
        layoutDue = true
      })

      // A lost GPU context (a phone tab left in the background) takes the baked
      // reflections with it. Bake them again and draw, or the scene comes back blank.
      const onContextRestored = () => {
        bakeReflections()
        dirty = true
      }
      canvas.addEventListener("webglcontextrestored", onContextRestored)
      undo.push(() => canvas.removeEventListener("webglcontextrestored", onContextRestored))

      // ── Pointer: parallax, hover, click ───────────────────────────────────
      const pointer = new THREE.Vector2(0, 0)
      const ndc = new THREE.Vector2(2, 2) // off-canvas until the pointer moves
      /** Where the pointer last was, in window coordinates, so hover can be worked out again after a scroll. */
      const lastPoint = { clientX: 0, clientY: 0, known: false }
      /** Whether the canvas itself, rather than a link lying over it, is under the pointer. */
      let overCanvas = false
      const raycaster = new THREE.Raycaster()
      let hovered = -1
      /** On touch screens a first tap shows what something is; this is that product, and until when. */
      const tapped = { index: -1, until: 0 }

      /** The product under a point on the canvas, or -1. */
      const pick = (at: THREE.Vector2): number => {
        if (stageHidden || Math.abs(at.x) > 1 || Math.abs(at.y) > 1) return -1
        // Everything is fitted inside the stage. A point outside it is over the
        // page's own text, which lets clicks through to the canvas behind it.
        const x = ((at.x + 1) / 2) * width
        const y = ((1 - at.y) / 2) * height
        if (
          x < stage.x - PICK_MARGIN ||
          x > stage.x + stage.w + PICK_MARGIN ||
          y < stage.y - PICK_MARGIN ||
          y > stage.y + stage.h + PICK_MARGIN
        ) {
          return -1
        }
        raycaster.setFromCamera(at, camera)
        for (const hit of raycaster.intersectObjects(pickTargets, false)) {
          const index = hit.object.userData.exhibit as number
          const exhibit = exhibits[index]
          if (exhibit.anchor && exhibit.frame.built > 0.6) return index
        }
        return -1
      }

      const setHovered = (index: number) => {
        if (index === hovered) return
        hovered = index
        canvas.style.cursor = index >= 0 ? "pointer" : ""
        if (index >= 0) canvas.setAttribute("data-cursor", "Open")
        else canvas.removeAttribute("data-cursor")
        // The site's custom cursor reads data-cursor only when the pointer crosses
        // onto an element, and the whole scene is one element: tell it to look again.
        if (!touch && overCanvas) canvas.dispatchEvent(new PointerEvent("pointerover", { bubbles: true }))
        live.current.onHover(index >= 0 ? exhibits[index].slug : null)
        dirty = true
      }

      const toNdc = (
        point: { clientX: number; clientY: number },
        rect: { left: number; top: number; width: number; height: number },
        target: THREE.Vector2
      ) => {
        const x = (point.clientX - rect.left) / rect.width
        const y = (point.clientY - rect.top) / rect.height
        target.set(x * 2 - 1, -(y * 2 - 1))
      }

      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType === "touch") return
        lastPoint.clientX = event.clientX
        lastPoint.clientY = event.clientY
        lastPoint.known = true
        overCanvas = event.target === canvas
        toNdc(event, canvas.getBoundingClientRect(), ndc)
        pointer.set(ndc.x, -ndc.y)
      }
      const onPointerLeave = () => {
        lastPoint.known = false
        overCanvas = false
        ndc.set(2, 2)
        pointer.set(0, 0)
      }
      const clickPoint = new THREE.Vector2()
      const onClick = (event: MouseEvent) => {
        // Picked at the click itself, so a tap works where there is no hover.
        toNdc(event, canvas.getBoundingClientRect(), clickPoint)
        const index = pick(clickPoint)
        if (!touch) {
          if (index >= 0) live.current.onSelect(exhibits[index].slug)
          return
        }
        // Touch: the first tap names it, a second tap on the same thing opens it.
        const now = performance.now()
        if (index >= 0 && index === tapped.index && now < tapped.until) {
          tapped.index = -1
          live.current.onSelect(exhibits[index].slug)
        } else {
          tapped.index = index
          tapped.until = now + 4000
        }
        dirty = true
      }
      let labelShown = false
      // On touch the name tag is the obvious thing to tap next, so it opens what it names.
      const onLabelClick = () => {
        const slug = label.dataset.slug
        if (!touch || !labelShown || !slug) return
        tapped.index = -1
        tapped.until = 0
        live.current.onSelect(slug)
        dirty = true
      }

      // The headline sits above the canvas, so listen on the section around both.
      const section = host.closest("section") ?? host
      section.addEventListener("pointermove", onPointerMove as EventListener)
      section.addEventListener("pointerleave", onPointerLeave)
      canvas.addEventListener("click", onClick)
      label.addEventListener("click", onLabelClick)
      undo.push(() => {
        section.removeEventListener("pointermove", onPointerMove as EventListener)
        section.removeEventListener("pointerleave", onPointerLeave)
        canvas.removeEventListener("click", onClick)
        label.removeEventListener("click", onLabelClick)
      })

      // ── Theme: night and day follow the site ──────────────────────────────
      const themeObserver = new MutationObserver(() => kit.setTheme(readTheme(), reduced))
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
      undo.push(() => themeObserver.disconnect())

      // ── Only work while on screen and the tab is visible ──────────────────
      let visible = true
      const visibility = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        dirty = true
      })
      visibility.observe(host)
      undo.push(() => visibility.disconnect())

      // ── The loop ──────────────────────────────────────────────────────────
      const roomFrame: RoomFrame = { time: 0, power: 0 }
      const tilt = new THREE.Vector2()
      const offset = new THREE.Vector3()
      const side = new THREE.Vector3()
      const scratch = new THREE.Vector3()
      let raf = 0
      let ready = false
      let started = -1
      let previous = 0
      let lastScroll = -1
      let tagWidth = 0
      let tagHeight = 0
      let tagPlace = ""
      /** A running average of frame time while drawing, and for how many frames in a row. */
      let pace = 1 / 60
      let busyFrames = 0
      /** The display's own rhythm, measured on quiet frames: 60 Hz, or 30 on a laptop saving power. 0 until known. */
      let idlePace = 0
      /** Whether the other theme's shaders have been prepared. */
      let warmed = false

      /** Trades looks for speed, once, on a machine that cannot keep up. */
      const easeLoad = () => {
        eased = true
        if (shadows) {
          shadows = false
          room.setShadows(false)
        }
        renderer.setPixelRatio(pixelRatio())
        dirty = true
      }

      const render = (now: number) => {
        raf = requestAnimationFrame(render)
        if (!ready || !visible || document.hidden) {
          previous = now
          return
        }
        if (layoutDue) {
          layoutDue = false
          relayout()
          dirty = true
        }
        if (stageHidden) {
          previous = now
          return
        }
        if (started < 0) started = now
        const delta = Math.min(0.1, Math.max(0, (now - previous) / 1000))
        previous = now
        const elapsed = reduced ? Infinity : (now - started) / 1000
        const time = reduced ? 0 : (now - started) / 1000

        // How far the scene has scrolled away: 0 in place, 1 when it is gone.
        const hostRect = host.getBoundingClientRect()
        const scrolled = reduced ? 0 : clamp01(-hostRect.top / Math.max(1, height))
        const away = smoothstep(0.15, 0.85, scrolled)
        if (scrolled !== lastScroll) {
          lastScroll = scrolled
          dirty = true
        }

        // While the entrance is playing, every frame is drawn.
        const lampAt = timing.productsAt + Math.max(0, placed - 1) * timing.gap + PRODUCT_SWEEP + 0.08
        if (elapsed < lampAt + 1.2) dirty = true

        if (kit.tick(delta)) dirty = true
        renderer.toneMappingExposure = mix(1.0, 0.96, kit.daylight)
        scene.environmentIntensity = mix(0.45, 0.55, kit.daylight)

        // Camera: a small orbit that follows the pointer, drawing back as the page scrolls on.
        if (!reduced && !touch) {
          const beforeX = tilt.x
          const beforeY = tilt.y
          tilt.lerp(pointer, 1 - Math.pow(0.94, delta * 60))
          if (Math.abs(tilt.x - beforeX) + Math.abs(tilt.y - beforeY) > 1e-4) moved = true
        }
        offset.copy(direction).applyAxisAngle(UP, -tilt.x * 0.055)
        side.crossVectors(UP, offset).normalize()
        offset.applyAxisAngle(side, tilt.y * 0.028)
        camera.position.copy(center).addScaledVector(offset, distance * (1 + scrolled * 0.12))
        camera.lookAt(center)

        // The room rises out of its own drawing, and sinks back into it on scroll.
        const roomSweep = clamp01((elapsed - timing.sweepAt) / timing.sweep)
        const roomBuilt = Math.min(roomSweep, 1 - away)
        kit.clip.constant = roomBuilt >= 1 ? UNCUT : mix(room.floor, room.height + 0.05, easeInOut(roomBuilt))
        if (roomOutline) {
          const drawn = Math.max(clamp01(elapsed / timing.lines), away > 0 ? 1 : 0)
          const opacity = Math.max(0.85 * (1 - smoothstep(0.55, 1, roomSweep)), 0.7 * Math.min(1, 2 * away))
          roomOutline.material.opacity = opacity
          roomOutline.lines.visible = opacity > 0.003
          roomOutline.lines.geometry.setDrawRange(0, Math.floor(roomOutline.segments * drawn) * 2)
        }

        // The room's own light comes on last, like a switch, and dims as the page moves on.
        roomFrame.time = time
        roomFrame.power = flicker(elapsed - lampAt) * (1 - 0.6 * away)
        if (room.update(roomFrame)) dirty = true
        // Screens and lit windows wake just after the lamp.
        const wake = clamp01((elapsed - lampAt - 0.2) / 0.4)

        let over = -1
        if (touch) {
          if (performance.now() < tapped.until) over = tapped.index
          else tapped.index = -1
        } else if (scrolled < 0.3) {
          // The page may have scrolled under a still pointer, which sends no event:
          // work out afresh what the pointer is over.
          if (lastPoint.known) toNdc(lastPoint, hostRect, ndc)
          over = pick(ndc)
        }
        setHovered(over)

        const activeSlug = live.current.activeSlug
        const shade = mix(0.36, 0.2, kit.daylight)
        exhibits.forEach((exhibit, index) => {
          const { anchor, build: product, frame } = exhibit
          if (!anchor) return

          const goal = index === hovered || exhibit.slug === activeSlug ? 1 : 0
          if (exhibit.hover !== goal) {
            exhibit.hover = reduced ? goal : mix(exhibit.hover, goal, 1 - Math.exp(-delta / 0.09))
            if (Math.abs(exhibit.hover - goal) < 0.002) exhibit.hover = goal
            dirty = true
          }
          const hover = smooth(exhibit.hover)

          const arriving = clamp01((elapsed - timing.productsAt - exhibit.rank * timing.gap) / PRODUCT_SWEEP)
          const leaving = 1 - clamp01((away - 0.03 * exhibit.rank) / 0.7)
          const built = Math.min(arriving, leaving)
          const base = anchor.position[1]
          // A product that is pointed at is lifted, and may open upward (a roof, a
          // page): the cut leaves room for that, so nothing loses its top mid-build.
          const tall = product.size[1] * (1 + 0.3 * hover) + 0.06 * hover
          const top = base + tall * anchor.scale + 0.03
          exhibit.clip.constant = built >= 1 ? UNCUT : mix(base - 0.01, top, easeInOut(built))

          const drawn = Math.max(
            clamp01((elapsed - timing.productLinesAt - exhibit.rank * timing.lineGap) / PRODUCT_LINES),
            away > 0 ? 1 : 0
          )
          const opacity = Math.max(0.85 * (1 - smoothstep(0.4, 1, arriving)), 0.7 * Math.min(1, 2 * away))
          exhibit.outline.material.opacity = opacity
          exhibit.outline.lines.visible = opacity > 0.003
          exhibit.outline.lines.geometry.setDrawRange(0, Math.floor(exhibit.outline.segments * drawn) * 2)

          // Picked up a little when pointed at; a wall piece comes forward instead.
          if (product.mount === "wall") {
            exhibit.holder.position.set(anchor.position[0], base, anchor.position[2] + hover * 0.02)
          } else {
            exhibit.holder.position.set(anchor.position[0], base + hover * 0.035 * anchor.scale, anchor.position[2])
          }
          exhibit.holder.scale.setScalar(anchor.scale * (1 + hover * 0.035))

          const on = smoothstep(0.75, 1, built) * wake
          product.glow.forEach((material) => {
            const rest = (material.userData.restGlow as number | undefined) ?? 0
            material.emissiveIntensity = (rest + hover * (0.2 + 0.35 * rest)) * on
          })
          if (exhibit.blob) {
            exhibit.blob.visible = !shadows
            ;(exhibit.blob.material as THREE.MeshBasicMaterial).opacity = shade * built * (1 - hover * 0.3)
          }

          frame.time = time
          frame.hover = exhibit.hover
          frame.built = built * wake
          if (product.update?.(frame)) dirty = true
        })

        // Name tag above whichever product is pointed at, here or from the chips.
        const tagged =
          hovered >= 0 ? exhibits[hovered] : exhibits.find((exhibit) => exhibit.slug === activeSlug && exhibit.anchor)
        if (tagged?.anchor && scrolled < 0.3) {
          const item = live.current.items.find((entry) => entry.slug === tagged.slug)
          if (item && label.dataset.slug !== item.slug) {
            label.dataset.slug = item.slug
            label.replaceChildren(
              Object.assign(document.createElement("strong"), { textContent: item.name }),
              Object.assign(document.createElement("span"), { textContent: item.kind })
            )
            tagWidth = label.offsetWidth
            tagHeight = label.offsetHeight
          }
          const position = tagged.holder.position
          scratch
            .copy(position)
            .setY(position.y + (tagged.build.size[1] + 0.05) * tagged.anchor.scale)
            .project(camera)
          let x = ((scratch.x + 1) / 2) * width
          let y = ((1 - scratch.y) / 2) * height - 8
          let hang = "-100%"
          // The site header is fixed over the top of the window. A tag that would
          // slide under it hangs below the product instead.
          if (y - tagHeight < HEADER_CLEARANCE - hostRect.top) {
            scratch.copy(position).project(camera)
            y = ((1 - scratch.y) / 2) * height + 10
            hang = "0"
          }
          x = Math.min(width - tagWidth / 2 - 6, Math.max(tagWidth / 2 + 6, x))
          const place = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, ${hang})`
          if (place !== tagPlace) {
            tagPlace = place
            label.style.transform = place
          }
          if (!labelShown) {
            labelShown = true
            label.style.opacity = "1"
            if (touch) label.style.pointerEvents = "auto"
          }
        } else if (labelShown) {
          labelShown = false
          label.style.opacity = "0"
          label.style.pointerEvents = "none"
        }

        if (!dirty && !moved) {
          // A quiet frame after a quiet frame shows the display's own rhythm.
          if (busyFrames === 0) idlePace = idlePace === 0 ? delta : mix(idlePace, delta, 0.1)
          busyFrames = 0
          // The first idle moment after the entrance: prepare the other theme's
          // shaders (its shadows come from a different light), so switching
          // theme for the first time does not stall halfway through its fade.
          if (!warmed && elapsed > lampAt + 2.5) {
            warmed = true
            const restore = room.alternate?.()
            if (restore) {
              renderer.compileAsync(scene, camera).catch(() => {})
              restore()
            }
          }
          return
        }
        if (dirty) renderer.shadowMap.needsUpdate = true
        dirty = false
        moved = false
        renderer.render(scene, camera)

        // If drawn frames stay clearly slower than the display's own rhythm once
        // the entrance is over, give up the expensive parts.
        busyFrames += 1
        if (busyFrames > 1) pace = mix(pace, delta, 0.08)
        if (
          !eased &&
          idlePace > 0 &&
          elapsed > lampAt + 1.5 &&
          busyFrames > 50 &&
          pace > Math.max(SLOW_FRAME, idlePace * 1.5)
        ) {
          easeLoad()
        }
      }

      // Shaders are compiled before the clock starts, so the entrance is not swallowed by the first frame.
      relayout()
      layoutDue = false
      const begin = () => {
        ready = true
      }
      renderer.compileAsync(scene, camera).then(begin, begin)
      raf = requestAnimationFrame(render)
      undo.push(() => cancelAnimationFrame(raf))
    }

    build().catch((error) => {
      console.error("[scene] could not start:", error)
      live.current.onUnavailable?.()
    })

    return () => {
      cancelled = true
      for (let step = undo.length - 1; step >= 0; step--) undo[step]()
    }
    // The scene is built once per arrangement; live props are read through `live`.
  }, [arrangement])

  return (
    // The caller positions this box; the name tag inside is placed relative to it.
    <div ref={hostRef} className={className} aria-hidden="true">
      <div
        ref={labelRef}
        className="pointer-events-none absolute left-0 top-0 z-10 flex flex-col items-center whitespace-nowrap rounded-md border border-border bg-card/90 px-3 py-1.5 text-sm opacity-0 shadow-lg backdrop-blur transition-opacity duration-200 [&>span]:font-mono [&>span]:text-[11px] [&>span]:text-blueprint [&>strong]:font-semibold"
      />
    </div>
  )
}

export default OfficeScene
