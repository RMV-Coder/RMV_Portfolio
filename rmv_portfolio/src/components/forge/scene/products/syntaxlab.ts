import * as THREE from "three"
import type { ProductBuilder } from "../types"

/**
 * SyntaxLab: a whiteboard on the wall with "The cat sat on the mat." written
 * along the bottom and a tree drawn over it, splitting the sentence into "who"
 * and "did what". It is the product's whole idea, seeing how a sentence is
 * built, done the way a teacher would do it with a marker. Hovering adds the
 * word classes under the sentence, the step the app takes next.
 *
 * Wall-mounted: the back sits on z = 0, the origin is the middle of the base.
 */

const BRAND = "#F5CF4A"
const BOARD = "#F7F6F2"
const INK = "#1A1613"
/** The hover labels: the site's ember, dark enough to read on white. */
const NOTE = "#B4470A"

/** Frame: aluminium section, outer size, and where its bottom edge sits. */
const SECTION = 0.025
const FRAME_W = 1.04
const FRAME_H = 0.66
const FRAME_Y = 0.04
/** How far the frame stands off the wall: proud of the board and its drawing. */
const FRAME_D = 0.024

/** The board fills the frame's opening exactly: 0.99 x 0.61, centre y 0.37. */
const BOARD_W = FRAME_W - 2 * SECTION
const BOARD_H = FRAME_H - 2 * SECTION
const BOARD_Y = FRAME_Y + FRAME_H / 2
const BOARD_D = 0.012
/** The drawing sits 2.5 mm in front of the board face, clear of polygon offset. */
const DRAWING_Z = 0.0145

/** Tray along the bottom: its top meets the frame's bottom edge at y 0.04. */
const TRAY_W = 0.6
const TRAY_H = 0.02
const TRAY_D = 0.05
const TRAY_Y = 0.03
const MARKER_R = 0.009
/** Marker centre: on the tray top, and in front of the frame bar (front at 0.024). */
const MARKER_Y = FRAME_Y + MARKER_R
const MARKER_Z = 0.034

/** Canvas size, in proportion to the drawing plane (0.985 x 0.605). */
const CANVAS_W = 1024
const CANVAS_H = 632

export const syntaxlab: ProductBuilder = (kit) => {
  const group = new THREE.Group()
  group.name = "syntaxlab"
  const still = new THREE.Group()
  group.add(still)

  const aluminium = kit.pair("#B9BEC3", "#A9AEB3", { metalness: 0.6, roughness: 0.45 })
  const boardMat = kit.color(BOARD, { roughness: 0.5 })
  const yellowMarker = kit.glow(BRAND, { dark: 0.25, light: 0.08 }, { roughness: 0.45 })
  const blackMarker = kit.color(INK, { roughness: 0.55 })
  const magnetMat = kit.color(BRAND, { roughness: 0.4 })

  // Frame: top and bottom bars run the full width; the sides fit between them.
  const halfW = FRAME_W / 2
  const horizontal = kit.box(FRAME_W, SECTION, FRAME_D, 0.006)
  still.add(kit.mesh(horizontal, aluminium, [0, FRAME_Y + FRAME_H - SECTION / 2, FRAME_D / 2]))
  still.add(kit.mesh(horizontal.clone(), aluminium, [0, FRAME_Y + SECTION / 2, FRAME_D / 2]))
  const vertical = kit.box(SECTION, BOARD_H, FRAME_D, 0.006)
  still.add(kit.mesh(vertical, aluminium, [-(halfW - SECTION / 2), BOARD_Y, FRAME_D / 2]))
  still.add(kit.mesh(vertical.clone(), aluminium, [halfW - SECTION / 2, BOARD_Y, FRAME_D / 2]))

  // Board: a plain box, its edges hidden inside the frame.
  still.add(kit.mesh(kit.box(BOARD_W, BOARD_H, BOARD_D), boardMat, [0, BOARD_Y, BOARD_D / 2]))

  // Tray, with a low lip along its front edge so the markers look held.
  still.add(kit.mesh(kit.box(TRAY_W, TRAY_H, TRAY_D, 0.006), aluminium, [0, TRAY_Y, TRAY_D / 2]))
  // Lip: y 0.034..0.052, z 0.044..0.050. The tray's top-front edge is rounded
  // (r 0.006), so under the lip its surface falls from y 0.040 to 0.034; the lip
  // reaches down to 0.034 so it sits in that curve instead of hovering over it.
  // A shade narrower than the tray so its square ends stay inside the rounded ones.
  still.add(kit.mesh(kit.box(TRAY_W - 0.012, 0.018, 0.006), aluminium, [0, 0.043, TRAY_D - 0.003]))

  /**
   * A marker lying along x: a 0.10 body and a 0.01 tapered nib, 0.11 in all.
   * `direction` -1 puts the nib at -x. A cylinder's top (+y) goes to -x under
   * rotation.z = +PI/2 and to +x under -PI/2, and the nib's narrow end is its top.
   */
  const marker = (material: THREE.Material, centreX: number, direction: 1 | -1) => {
    const lying: [number, number, number] = [0, 0, -direction * (Math.PI / 2)]
    still.add(kit.mesh(kit.cylinder(MARKER_R, MARKER_R, 0.1, 16), material, [centreX, MARKER_Y, MARKER_Z], lying))
    still.add(
      kit.mesh(kit.cylinder(0.004, 0.008, 0.01, 16), material, [centreX + direction * 0.055, MARKER_Y, MARKER_Z], lying, {
        noBlueprint: true,
      })
    )
  }
  // Yellow: x -0.19..-0.08. Black: x -0.01..0.10. Both well inside the tray's +/-0.30.
  marker(yellowMarker, -0.13, -1)
  marker(blackMarker, 0.05, 1)

  // Round magnet near the top left, axis along z (rotation.x turns +y to +z):
  // x -0.445..-0.395, y 0.575..0.625, z 0.015..0.027, just in front of the drawing.
  still.add(kit.mesh(kit.cylinder(0.025, 0.025, 0.012, 24), magnetMat, [-0.42, 0.6, 0.021], [Math.PI / 2, 0, 0]))

  // The drawing. One flag, switched by hover with a little hysteresis, adds the word classes.
  let labelsOn = false
  const fonts = kit.fonts

  /** A rounded-end pill path; built by hand so it needs nothing newer than arcTo. */
  const pillPath = (context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
    const r = height / 2
    context.beginPath()
    context.moveTo(x + r, y)
    context.lineTo(x + width - r, y)
    context.arcTo(x + width, y, x + width, y + r, r)
    context.arcTo(x + width, y + height, x + width - r, y + height, r)
    context.lineTo(x + r, y + height)
    context.arcTo(x, y + height, x, y + r, r)
    context.arcTo(x, y, x + r, y, r)
    context.closePath()
  }

  /** Pill height in pixels; its top and bottom are where the tree's lines meet it. */
  const PILL_H = 76

  const pill = (context: CanvasRenderingContext2D, label: string, cx: number, cy: number) => {
    context.font = `700 48px ${fonts.display}`
    const width = context.measureText(label).width + 64
    pillPath(context, cx - width / 2, cy - PILL_H / 2, width, PILL_H)
    context.fillStyle = BRAND
    context.fill()
    context.stroke()
    context.fillStyle = INK
    context.textAlign = "center"
    context.textBaseline = "middle"
    // Nudged down a touch: "middle" sits a little high for lowercase words.
    context.fillText(label, cx, cy + 3)
  }

  /** A bracket over a phrase: a bar with short ticks down at each end. */
  const bracket = (context: CanvasRenderingContext2D, left: number, right: number, y: number) => {
    context.beginPath()
    context.moveTo(left, y + 18)
    context.lineTo(left, y)
    context.lineTo(right, y)
    context.lineTo(right, y + 18)
    context.stroke()
  }

  const line = (context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) => {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
  }

  const texture = kit.canvas(CANVAS_W, CANVAS_H, (context, width, height) => {
    context.fillStyle = BOARD
    context.fillRect(0, 0, width, height)
    context.lineCap = "round"
    context.lineJoin = "round"
    context.lineWidth = 6
    context.strokeStyle = INK

    // The sentence, measured first so the tree can land on its phrases. Its
    // baseline is at 500 rather than lower so the hover labels fit beneath it.
    const sentence = "The cat sat on the mat."
    let size = 64
    context.font = `700 ${size}px ${fonts.display}`
    let total = context.measureText(sentence).width
    if (total > 940) {
      // A very wide fallback face: shrink to fit, but never below the 48 px floor.
      size = Math.max(48, Math.floor((size * 940) / total))
      context.font = `700 ${size}px ${fonts.display}`
      total = context.measureText(sentence).width
    }
    const startX = width / 2 - total / 2
    const at = (prefix: string) => startX + context.measureText(prefix).width
    const catL = at("The ")
    const catR = at("The cat")
    const satL = at("The cat ")
    const satR = at("The cat sat")
    const matL = at("The cat sat on the ")
    const matR = at("The cat sat on the mat")
    const baseline = 500

    context.fillStyle = INK
    context.textAlign = "left"
    context.textBaseline = "alphabetic"
    context.fillText(sentence, startX, baseline)

    // Brackets over "The cat" and "sat on the mat", clear of the capitals (top near 454).
    const bracketY = 424
    bracket(context, startX + 4, catR - 4, bracketY)
    bracket(context, satL + 4, matR - 4, bracketY)

    // Tree lines, drawn before the pills so each starts tucked under its pill.
    const top = { x: 512, y: 90 }
    const who = { x: 290, y: 290 }
    const what = { x: 720, y: 290 }
    line(context, top.x, top.y + PILL_H / 2, who.x, who.y - PILL_H / 2)
    line(context, top.x, top.y + PILL_H / 2, what.x, what.y - PILL_H / 2)
    line(context, who.x, who.y + PILL_H / 2, (startX + catR) / 2, bracketY)
    line(context, what.x, what.y + PILL_H / 2, (satL + matR) / 2, bracketY)

    pill(context, "sentence", top.x, top.y)
    pill(context, "who", who.x, who.y)
    pill(context, "did what", what.x, what.y)

    if (!labelsOn) return

    // Word classes: a short ember underline under each word, its label below.
    context.strokeStyle = NOTE
    context.fillStyle = NOTE
    line(context, catL + 6, baseline + 16, catR - 6, baseline + 16)
    line(context, satL + 6, baseline + 16, satR - 6, baseline + 16)
    line(context, matL + 6, baseline + 16, matR - 6, baseline + 16)

    context.font = `700 48px ${fonts.display}`
    context.textAlign = "center"
    context.textBaseline = "alphabetic"
    let nounX = (catL + catR) / 2
    let verbX = (satL + satR) / 2
    // "cat" and "sat" are neighbours, and their labels are wider than they are:
    // push the two apart evenly if they would touch.
    const overlap = context.measureText("noun").width / 2 + context.measureText("verb").width / 2 + 20 - (verbX - nounX)
    if (overlap > 0) {
      nounX -= overlap / 2
      verbX += overlap / 2
    }
    const labelY = baseline + 72
    context.fillText("noun", nounX, labelY)
    context.fillText("verb", verbX, labelY)
    context.fillText("noun", (matL + matR) / 2, labelY)
  })

  // Lit by the room like the board itself, not self-lit: it is ink on a whiteboard.
  const drawingMat = kit.color("#FFFFFF", { map: texture, roughness: 0.5 })
  still.add(
    kit.mesh(new THREE.PlaneGeometry(BOARD_W - 0.005, BOARD_H - 0.005), drawingMat, [0, BOARD_Y, DRAWING_Z], undefined, {
      cast: false,
      noBlueprint: true,
    })
  )

  kit.weld(still)

  return {
    group,
    // The tray's front face (z 0.05) is the furthest point from the wall.
    size: [FRAME_W, FRAME_Y + FRAME_H, TRAY_D],
    mount: "wall",
    glow: [yellowMarker],
    update(frame) {
      const want = labelsOn ? frame.hover >= 0.4 : frame.hover > 0.5
      if (want !== labelsOn) {
        labelsOn = want
        kit.repaint(texture)
      }
      // Nothing here moves with time.
      return false
    },
  }
}
