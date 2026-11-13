import * as THREE from "three"
import type { CanvasPainter, ProductBuilder, Vec3 } from "../types"

/**
 * Emmaus: an open Bible on a small wooden reading stand, leaning back toward
 * the reader, with one verse lit in gold and its reference ("Jn 3:16") noted
 * in the margin beside it. Emmaus is a Bible study companion that shows its
 * sources, so the object is the study itself: the open book, the highlighted
 * passage, and the citation that says where it came from. On hover the right
 * page lifts as if being turned and the highlighted verse glows brighter.
 *
 * Frames used below:
 *   - object space: origin at the centre of the base's underside, +z toward the viewer;
 *   - the rest's frame: origin on the hinge line at the board's front-bottom edge,
 *     local y ("t") straight up off the board, local z running down the slope
 *     (0 at the lip, -0.24 at the top of the board).
 */

const BRAND = "#D4B676"

/** The book leans back 50 degrees from the desk, hinged at the rest's front edge. */
const TILT = (50 * Math.PI) / 180
const COS = Math.cos(TILT)
const SIN = Math.sin(TILT)
/**
 * The hinge line. It sits on a low rail (top at 0.032) so the lip in front of
 * it clears the base and just touches down at its front edge.
 */
const PIVOT_Y = 0.032
const PIVOT_Z = 0.075

// Heights off the board's underside, along the board's normal.
const BOARD_T = 0.012
const COVER_TOP = BOARD_T + 0.012
const BLOCK_TOP = COVER_TOP + 0.01
/** The book's centre along the board, which runs from z = 0 (the lip) to z = -0.24. */
const BOOK_Z = -0.12

const PAGE_W = 0.155
const PAGE_H = 0.21
/** How far each page rises toward the spine. */
const BOW = 0.012
/** Printed pages float this far above whatever lies under them, so nothing flickers. */
const PAGE_GAP = 0.003
/** The plain page revealed under the turning one sits halfway between. */
const UNDER_GAP = 0.0015
const HIGHLIGHT_GAP = 0.002
const TURN = (15 * Math.PI) / 180

// The shared page canvas: the left half is the left page, the right half the right page.
const CANVAS_W = 1024
const CANVAS_H = 704
const HALF = CANVAS_W / 2
const ROW_TOP = 84
const ROW_STEP = 72
const ROW_H = 26
/** The gold band behind the fifth line of the right page, in canvas pixels. */
const BAND = { x0: 540, x1: 806, y0: ROW_TOP + 4 * ROW_STEP - 16, y1: ROW_TOP + 4 * ROW_STEP + ROW_H + 16 }
/** Ragged line ends, as fractions of the measure; the last line of each page ends a paragraph. */
const LEFT_ENDS = [1, 0.95, 1, 0.92, 1, 0.97, 1, 0.58]
const RIGHT_ENDS = [0.96, 1, 0.93, 1, 1, 0.95, 1, 0.66]

/** A page's height above the flat page block at distance |x| from the spine: steepest at the gutter. */
const rise = (x: number) => {
  const d = Math.min(1, Math.abs(x) / PAGE_W)
  return BOW * (1 - d) * (1 - d)
}

/** A point given in the rest's frame, in object space. Build time only. */
const onRest = (x: number, t: number, z: number) =>
  new THREE.Vector3(x, PIVOT_Y + t * COS - z * SIN, PIVOT_Z + t * SIN + z * COS)

/**
 * A sheet bowed like an open page and laid flat in the rest's frame: its face
 * points up off the board and the top of its texture points up the slope.
 * `centreX`/`centreY` place it in page coordinates (x from the spine, y up the page).
 */
function bowedSheet(
  width: number,
  height: number,
  segments: number,
  centreX: number,
  centreY: number,
  lift: number
): THREE.PlaneGeometry {
  const geometry = new THREE.PlaneGeometry(width, height, segments, 1)
  geometry.translate(centreX, centreY, 0)
  const position = geometry.attributes.position
  for (let i = 0; i < position.count; i++) position.setZ(i, rise(position.getX(i)) + lift)
  // Plane +z becomes the rest's +y (up off the board); plane +y becomes -z (up the slope).
  geometry.rotateX(-Math.PI / 2)
  geometry.computeVertexNormals()
  return geometry
}

/** Points a page at one half of the shared canvas: 0 for the left half, 0.5 for the right. */
function showHalf(geometry: THREE.BufferGeometry, start: number) {
  const uv = geometry.attributes.uv
  for (let i = 0; i < uv.count; i++) uv.setX(i, start + uv.getX(i) * 0.5)
}

const paintPages: CanvasPainter = (context, width, height) => {
  context.fillStyle = "#F6EFDF"
  context.fillRect(0, 0, width, height)

  // A soft shadow down the gutter, so the two halves read as a bound book.
  const gutter = context.createLinearGradient(HALF - 80, 0, HALF + 80, 0)
  gutter.addColorStop(0, "rgba(110, 82, 48, 0)")
  gutter.addColorStop(0.5, "rgba(110, 82, 48, 0.24)")
  gutter.addColorStop(1, "rgba(110, 82, 48, 0)")
  context.fillStyle = gutter
  context.fillRect(HALF - 80, 0, 160, height)

  // Left page: a big red drop capital, then lines of text.
  const leftStart = 56
  const leftEnd = HALF - 48
  context.font = "700 140px serif"
  context.fillStyle = "#7A2E1E"
  context.textAlign = "left"
  context.textBaseline = "alphabetic"
  // Baseline on the foot of the second line, so the capital stands two lines tall.
  context.fillText("In", leftStart, ROW_TOP + ROW_STEP + ROW_H)
  const besideCap = Math.min(leftStart + context.measureText("In").width + 20, 300)

  context.fillStyle = "#9B9386"
  LEFT_ENDS.forEach((end, row) => {
    const x0 = row < 2 ? besideCap : leftStart
    context.fillRect(x0, ROW_TOP + row * ROW_STEP, (leftEnd - x0) * end, ROW_H)
  })

  // Right page: the fifth line sits on a soft gold band, with its reference in the outer margin.
  context.fillStyle = "rgba(212, 182, 118, 0.55)"
  context.fillRect(BAND.x0, BAND.y0, BAND.x1 - BAND.x0, BAND.y1 - BAND.y0)

  const rightStart = HALF + 44
  const rightEnd = 792
  context.fillStyle = "#9B9386"
  RIGHT_ENDS.forEach((end, row) => {
    context.fillRect(rightStart, ROW_TOP + row * ROW_STEP, (rightEnd - rightStart) * end, ROW_H)
  })

  context.font = "italic 52px serif"
  context.fillStyle = "#8A6A2A"
  context.textAlign = "right"
  context.textBaseline = "middle"
  const marginRight = width - 34
  // maxWidth only squeezes a wide fallback face sideways; the glyphs stay 52 px tall.
  context.fillText("Jn 3:16", marginRight, (BAND.y0 + BAND.y1) / 2, marginRight - (BAND.x1 + 10))
}

export const emmaus: ProductBuilder = (kit) => {
  const wood = kit.mat("wood")
  const leather = kit.pair("#4A2A1E", "#6B3A2A", { roughness: 0.7 })
  const gilt = kit.glow(BRAND, { dark: 0.15, light: 0.05 }, { metalness: 0.6, roughness: 0.4 })
  const pages = kit.canvas(CANVAS_W, CANVAS_H, paintPages)
  const paper = kit.color("#ffffff", { map: pages, roughness: 0.92 })
  // The next page, revealed when the right page lifts: plain, a shade darker.
  const nextPage = kit.color("#EDE4D0", { roughness: 0.92 })
  const ribbonMat = kit.color(BRAND, { metalness: 0.3, roughness: 0.5 })
  const highlight = kit.glow(BRAND, { dark: 0.2, light: 0.1 }, { transparent: true, opacity: 0.55 })

  const group = new THREE.Group()
  const still = new THREE.Group()
  group.add(still)

  // Base: top at y = 0.02, spanning z -0.10..0.10.
  still.add(kit.mesh(kit.box(0.3, 0.02, 0.2, 0.006), wood, [0, 0.01, 0]))
  // Hinge rail under the rest's front edge: y 0.02..0.032, z 0.055..0.08. The lip
  // clears its front-top corner (lip underside is at y 0.035 where z = 0.08).
  still.add(kit.mesh(kit.box(0.28, 0.012, 0.025), wood, [0, 0.026, 0.0675]))

  // Back strut: from a foot sunk 2 mm into the base to a point 4 mm inside the
  // board's underside, 0.17 up the slope. Its top leans about 17 degrees forward
  // (toward +z), so strut, board and base close a triangle behind the hinge.
  const top = onRest(0, 0.004, -0.17)
  const footY = 0.018
  const footZ = -0.075
  const climb = top.y - footY
  const run = top.z - footZ
  // Rotating +y about x by a gives (0, cos a, sin a), so this turns the strut onto (0, climb, run).
  const lean = Math.atan2(run, climb)
  // 1.5 mm extra at each end, so neither end shows a gap where it meets a face at an angle.
  const strutLength = Math.hypot(climb, run) + 0.003
  still.add(
    kit.mesh(kit.box(0.14, strutLength, 0.012), wood, [0, (footY + top.y) / 2, (footZ + top.z) / 2], [lean, 0, 0])
  )
  // A stop block behind the strut's foot: front face at z -0.0815, just behind the strut.
  still.add(kit.mesh(kit.box(0.16, 0.012, 0.014), wood, [0, 0.026, -0.0885]))

  // The rest and the book on it, built flat in the rest's frame and tipped back.
  const rest = new THREE.Group()
  rest.position.set(0, PIVOT_Y, PIVOT_Z)
  rest.rotation.x = TILT
  still.add(rest)

  rest.add(kit.mesh(kit.box(0.32, BOARD_T, 0.24, 0.005), wood, [0, BOARD_T / 2, BOOK_Z]))
  // The lip stands in front of the board's lower edge and 7 mm proud of the cover.
  rest.add(kit.mesh(kit.box(0.32, 0.025, 0.02), wood, [0, 0.0185, 0.01]))

  rest.add(kit.mesh(kit.box(0.34, 0.012, 0.24, 0.005), leather, [0, (BOARD_T + COVER_TOP) / 2, BOOK_Z]))
  rest.add(kit.mesh(kit.box(0.32, 0.01, 0.22), gilt, [0, (COVER_TOP + BLOCK_TOP) / 2, BOOK_Z]))

  // The page stack swelling toward the spine, under the bowed pages: its ends
  // show as gilt edges. Its foot is sunk 4 mm into the flat block.
  const swell = new THREE.Shape()
  swell.moveTo(-PAGE_W, -0.004)
  swell.lineTo(PAGE_W, -0.004)
  // Same 16 steps as the pages' vertices, so the gap between them stays constant.
  for (let i = 0; i <= 16; i++) {
    const x = PAGE_W - (i * PAGE_W) / 8
    swell.lineTo(x, rise(x))
  }
  const swellGeometry = new THREE.ExtrudeGeometry(swell, { depth: 0.214, bevelEnabled: false })
  swellGeometry.translate(0, 0, -0.107)
  rest.add(kit.mesh(swellGeometry, gilt, [0, BLOCK_TOP, BOOK_Z]))

  const leftGeometry = bowedSheet(PAGE_W, PAGE_H, 8, -PAGE_W / 2, 0, PAGE_GAP)
  showHalf(leftGeometry, 0)
  rest.add(kit.mesh(leftGeometry, paper, [0, BLOCK_TOP, BOOK_Z], undefined, { noBlueprint: true }))

  const underGeometry = bowedSheet(PAGE_W, PAGE_H, 8, PAGE_W / 2, 0, UNDER_GAP)
  rest.add(kit.mesh(underGeometry, nextPage, [0, BLOCK_TOP, BOOK_Z], undefined, { noBlueprint: true }))

  // Ribbon marker: it comes out of the gutter, lies on the left page clear of the
  // turning one, rolls over the lip and hangs straight down in front of the base
  // (base front is z 0.10; its lowest point is 12 mm off the floor).
  const ribbonPath = new THREE.CatmullRomCurve3([
    onRest(-0.003, 0.044, -0.055),
    onRest(-0.011, 0.053, -0.032),
    onRest(-0.012, 0.053, -0.016),
    onRest(-0.013, 0.037, 0.01),
    new THREE.Vector3(-0.014, 0.034, 0.121),
    new THREE.Vector3(-0.015, 0.018, 0.121),
  ])
  still.add(
    kit.mesh(new THREE.TubeGeometry(ribbonPath, 16, 0.004, 6, false), ribbonMat, undefined, undefined, {
      cast: false,
    })
  )

  // The turning page, hinged along the spine at the height of its spine edge,
  // so the edge stays put while the outer edge lifts. A positive turn about the
  // spine (the rest's z) raises +x: y' = x sin(a) + y cos(a).
  const moving = new THREE.Group()
  moving.position.set(0, PIVOT_Y, PIVOT_Z)
  moving.rotation.x = TILT
  group.add(moving)

  const hinge = new THREE.Group()
  hinge.position.set(0, BLOCK_TOP + BOW + PAGE_GAP, BOOK_Z)
  moving.add(hinge)

  // Offsets of -BOW put the page back where it lies flat: rise(x) + PAGE_GAP above the block.
  const rightGeometry = bowedSheet(PAGE_W, PAGE_H, 8, PAGE_W / 2, 0, -BOW)
  showHalf(rightGeometry, 0.5)
  hinge.add(kit.mesh(rightGeometry, paper, undefined, undefined, { noBlueprint: true }))

  // The highlight over the gold band, mapped from canvas pixels to page metres.
  const toPageX = (px: number) => ((px - HALF) / HALF) * PAGE_W
  const toPageY = (py: number) => PAGE_H / 2 - (py / CANVAS_H) * PAGE_H
  const bandW = toPageX(BAND.x1) - toPageX(BAND.x0)
  const bandH = toPageY(BAND.y0) - toPageY(BAND.y1)
  const highlightGeometry = bowedSheet(
    bandW,
    bandH,
    4,
    (toPageX(BAND.x0) + toPageX(BAND.x1)) / 2,
    (toPageY(BAND.y0) + toPageY(BAND.y1)) / 2,
    -BOW + HIGHLIGHT_GAP
  )
  hinge.add(kit.mesh(highlightGeometry, highlight, undefined, undefined, { cast: false, noBlueprint: true }))

  kit.weld(still)
  kit.weld(hinge)

  // Measured, not assumed: about 0.34 x 0.236 x 0.25 (the ribbon hangs furthest forward).
  group.updateMatrixWorld(true)
  const bounds = new THREE.Box3().setFromObject(group, true)
  const size: Vec3 = [
    2 * Math.max(-bounds.min.x, bounds.max.x),
    bounds.max.y,
    2 * Math.max(-bounds.min.z, bounds.max.z),
  ]

  return {
    group,
    size,
    mount: "surface",
    glow: [gilt],
    update(frame) {
      hinge.rotation.z = TURN * frame.hover
      const resting = (highlight.userData.restGlow as number | undefined) ?? 0.2
      highlight.emissiveIntensity = (resting + (0.9 - resting) * frame.hover) * frame.built
      return false
    },
  }
}
