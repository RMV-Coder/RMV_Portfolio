import * as THREE from "three"
import type { ProductBuilder } from "../types"

/**
 * Veltriva Browser: "a browser that tidies up after you".
 *
 * A desktop monitor showing a web browser. Anyone recognises a browser
 * window; what names this one is the vertical tab list down the left and the
 * "12 tabs tidied" toast in the corner. On hover the bottom tabs drop into the
 * "Tidied" folder one at a time and the toast counts them, which is the
 * product's whole promise acted out.
 *
 * Local frame: origin at the middle of the foot's underside, front toward +z.
 * Parts at rest (x, y, z ranges in metres):
 *   foot   ±0.12,   0 – 0.015,   ±0.08
 *   neck   ±0.02,   0.015 – 0.135, -0.065 – -0.035
 *   plate  ±0.035,  0.11 – 0.17,  -0.04 – -0.01  (joins neck to bezel back)
 *   bezel  ±0.31,   0.10 – 0.48,  ±0.015
 *   LED    0.242 – 0.258, 0.1125 – 0.1175, 0.0135 – 0.0175
 *   screen ±0.29,   0.12 – 0.46,  z = 0.017
 * True bounding box: 0.62 x 0.48 x 0.16 (the foot sets the depth).
 */

const BRAND = "#9DB4D6"

// Canvas layout, in pixels of the 1024 x 600 screen texture.
const TITLE_BAR = 56
const SIDEBAR = 250
const TAB_X = 20
const TAB_W = 210
const TAB_H = 56
const TAB_TOP = 80
const TAB_STEP = 74
const TAB_COUNT = 6
/** Favicon colours for the tabs, muted so the active tab stays the loudest thing. */
const FAVICONS = ["#232733", "#E2A27A", "#8DBFA6", "#D7877F", "#BCA9DB", "#E6CB7A"]

/** Hover levels at which the next tab is tidied away. */
const STEPS = [0.3, 0.55, 0.8]

/** Traces a rounded rectangle as the current path. */
function roundedPath(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2)
  context.beginPath()
  context.moveTo(x + r, y)
  context.arcTo(x + width, y, x + width, y + height, r)
  context.arcTo(x + width, y + height, x, y + height, r)
  context.arcTo(x, y + height, x, y, r)
  context.arcTo(x, y, x + width, y, r)
  context.closePath()
}

export const veltriva: ProductBuilder = (kit) => {
  const group = new THREE.Group()
  const body = new THREE.Group()
  group.add(body)

  /** How many of the bottom three tabs have gone into the folder: 0 to 3. */
  let tidied = 0

  const texture = kit.canvas(1024, 600, (context, width, height) => {
    const font = kit.fonts.body

    // Page area first, then the chrome drawn over its edges.
    context.fillStyle = "#F3EDE4"
    context.fillRect(0, 0, width, height)

    // Hero block and five lines of "text".
    context.globalAlpha = 0.35
    context.fillStyle = BRAND
    roundedPath(context, 290, 96, 694, 160, 14)
    context.fill()
    context.globalAlpha = 1
    context.fillStyle = "#C9C1B4"
    const lines = [640, 600, 660, 480, 560]
    lines.forEach((length, index) => {
      roundedPath(context, 290, 290 + index * 40, length, 22, 11)
      context.fill()
    })

    // Title bar: window dots and an empty address pill.
    context.fillStyle = "#2B2F3A"
    context.fillRect(0, 0, width, TITLE_BAR)
    const dots = ["#D9776B", "#DDB362", "#86B784"]
    dots.forEach((colour, index) => {
      context.fillStyle = colour
      context.beginPath()
      context.arc(28 + index * 30, TITLE_BAR / 2, 9, 0, Math.PI * 2)
      context.fill()
    })
    context.fillStyle = "#3A4152"
    roundedPath(context, 300, 12, 600, 32, 16)
    context.fill()

    // Sidebar with its tab list.
    context.fillStyle = "#232733"
    context.fillRect(0, TITLE_BAR, SIDEBAR, height - TITLE_BAR)
    const shown = TAB_COUNT - tidied
    for (let index = 0; index < shown; index++) {
      const y = TAB_TOP + index * TAB_STEP
      const active = index === 0
      context.fillStyle = active ? BRAND : "#3A4152"
      roundedPath(context, TAB_X, y, TAB_W, TAB_H, 14)
      context.fill()
      context.fillStyle = FAVICONS[index]
      context.beginPath()
      context.arc(TAB_X + 32, y + TAB_H / 2, 13, 0, Math.PI * 2)
      context.fill()
      context.fillStyle = active ? "#3A4152" : "#8A90A0"
      roundedPath(context, TAB_X + 60, y + TAB_H / 2 - 7, active ? 120 : 100 - index * 6, 14, 7)
      context.fill()
    }

    // The folder pill sits just below the last tab left, so it visibly takes the
    // tabs' place, and its tint deepens with each tab it swallows. The tint
    // stops at 30 percent so the brand-coloured label keeps about 4:1 contrast.
    const folderY = TAB_TOP + shown * TAB_STEP
    if (tidied > 0) {
      context.globalAlpha = 0.1 * tidied
      context.fillStyle = BRAND
      roundedPath(context, TAB_X, folderY, TAB_W, TAB_H, 14)
      context.fill()
      context.globalAlpha = 1
    }
    context.strokeStyle = BRAND
    context.lineWidth = 3
    // Canvas state survives a repaint, and the toast's tick below sets round
    // caps; reset them so the dashes look the same on every paint.
    context.lineCap = "butt"
    context.lineJoin = "miter"
    context.setLineDash([12, 8])
    roundedPath(context, TAB_X + 1.5, folderY + 1.5, TAB_W - 3, TAB_H - 3, 13)
    context.stroke()
    context.setLineDash([])
    context.fillStyle = BRAND
    context.font = "700 48px " + font
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText("Tidied", TAB_X + TAB_W / 2, folderY + TAB_H / 2 + 2)

    // Toast, bottom right. Its width follows the text so the larger count fits.
    const message = `${12 + tidied} tabs tidied`
    context.font = "700 48px " + font
    const textWidth = context.measureText(message).width
    const toastW = Math.min(620, Math.max(440, 92 + textWidth + 30))
    const toastH = 88
    const toastX = width - 24 - toastW
    const toastY = height - 24 - toastH
    context.fillStyle = "#1A1613"
    roundedPath(context, toastX, toastY, toastW, toastH, 20)
    context.fill()
    // A tick in the brand colour, so the toast reads as "done" before it is read.
    const tickX = toastX + 46
    const tickY = toastY + toastH / 2
    context.fillStyle = BRAND
    context.beginPath()
    context.arc(tickX, tickY, 22, 0, Math.PI * 2)
    context.fill()
    context.strokeStyle = "#1A1613"
    context.lineWidth = 6
    context.lineCap = "round"
    context.lineJoin = "round"
    context.beginPath()
    context.moveTo(tickX - 10, tickY + 1)
    context.lineTo(tickX - 3, tickY + 9)
    context.lineTo(tickX + 11, tickY - 8)
    context.stroke()
    context.fillStyle = "#F3EDE4"
    context.textAlign = "left"
    context.fillText(message, toastX + 92, tickY + 2)
  })

  const shell = kit.pair("#1C1C1E", "#2B2B2E", { roughness: 0.4 })
  const led = kit.glow(BRAND, { dark: 1.2, light: 0.6 })
  const screen = kit.screen(texture, { dark: 1.0, light: 1.0 })

  // Foot: 0.015 thick, so the rounding has to stay under half of that.
  body.add(kit.mesh(kit.box(0.24, 0.015, 0.16, 0.006), shell, [0, 0.0075, 0]))
  body.add(kit.mesh(kit.box(0.04, 0.12, 0.03), shell, [0, 0.075, -0.05]))
  // The neck stands 0.02 behind the bezel's back; this plate bridges the gap.
  // It runs 0.005 into the bezel so the joint is solid rather than a coplanar touch.
  body.add(kit.mesh(kit.box(0.07, 0.06, 0.03), shell, [0, 0.14, -0.025]))
  body.add(kit.mesh(kit.box(0.62, 0.38, 0.03, 0.012), shell, [0, 0.29, 0]))

  // Power LED in the chin, half sunk into the bezel's front face (z = 0.015).
  // y 0.1125 - 0.1175: above the 0.012 rounding of the bezel's lower edge (the
  // front face is only flat from y 0.112) and below the screen (y 0.12).
  body.add(kit.mesh(kit.box(0.016, 0.005, 0.004), led, [0.25, 0.115, 0.0155], undefined, { noBlueprint: true }))

  // Screen 0.002 proud of the bezel front, clear of its polygon offset.
  body.add(
    kit.mesh(new THREE.PlaneGeometry(0.58, 0.34), screen, [0, 0.29, 0.017], undefined, {
      cast: false,
      noBlueprint: true,
    })
  )

  kit.weld(body)

  return {
    group,
    size: [0.62, 0.48, 0.16],
    mount: "surface",
    glow: [screen, led],
    update(frame) {
      let next = 0
      for (let index = 0; index < STEPS.length; index++) if (frame.hover >= STEPS[index]) next++
      if (next !== tidied) {
        tidied = next
        kit.repaint(texture)
      }
      return false
    },
  }
}
