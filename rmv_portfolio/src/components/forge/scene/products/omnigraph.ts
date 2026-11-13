import * as THREE from "three"
import type { ProductBuilder, ProductFrame, Vec3 } from "../types"

/**
 * OmniGraph: a corkboard on the wall with six index cards pinned to it and
 * cyan string run between the pins, the way people map out a mystery. Here
 * the cards name the everyday parts of a piece of software (Login, Payments,
 * Database...) and the string shows which part talks to which, which is what
 * OmniGraph draws for a real codebase: a map of how it fits together.
 *
 * Local frame: back of the board on z = 0, base centre at the origin, front
 * toward +z. On hover the strings light up from the Database outward, as if
 * the map were being traced.
 */

const BRAND = "#7FD6E8"

const WIDTH = 1.04
const HEIGHT = 0.72
/** The frame's face width, and how far it stands off the wall. */
const BAR = 0.03
const FRAME_DEPTH = 0.035
const CORK_WIDTH = WIDTH - 2 * BAR // 0.98, so the cork fills the frame exactly
const CORK_HEIGHT = HEIGHT - 2 * BAR // 0.66
const CORK_DEPTH = 0.015

const CARD_WIDTH = 0.17
const CARD_HEIGHT = 0.1
/** 0.003 in front of the cork face, comfortably clear of polygon-offset flicker. */
const CARD_Z = 0.018
const TILT = (2.5 * Math.PI) / 180

const PIN_RADIUS = 0.014
/** Pin centre: its back is pushed just into the card, its head stands proud. */
const PIN_Z = 0.03
/** Pin centre above the card centre, in the card's own (tilted) frame; the head stops 0.004 short of the top edge. */
const PIN_RISE = 0.033

const STRING_RADIUS = 0.0035
/** Droop at mid-span for a level string; less for steeper ones, none for a vertical one. */
const SAG = 0.015
/** Emissive intensity of a fully traced string. */
const LIT = 1.6

/** The pins reach furthest forward, so they set the board's depth. */
const DEPTH = PIN_Z + PIN_RADIUS // 0.044

const CARD_FACE = "#F3EDE4"
const CARD_SHADOW = "#DCD2C4"
const CARD_INK = "#1A1613"

interface Card {
  label: string
  x: number
  y: number
}

const CARDS: Card[] = [
  { label: "Login", x: -0.33, y: 0.56 },
  { label: "Payments", x: 0, y: 0.59 },
  { label: "Admin", x: 0.33, y: 0.56 },
  { label: "Database", x: 0, y: 0.35 },
  { label: "Email", x: -0.33, y: 0.14 },
  { label: "Search", x: 0.33, y: 0.14 },
]
const DATABASE = 3

/** Database out to every other card first, then the two links along the top row. */
const LINKS: [number, number][] = [
  [DATABASE, 0],
  [DATABASE, 1],
  [DATABASE, 2],
  [DATABASE, 4],
  [DATABASE, 5],
  [0, 1],
  [1, 2],
]
const INNER_LINKS = 5

/** Atlas layout: 3 x 2 slots of 341 x 256 px; each card face is a 340 x 200 rect inside its slot, so it keeps the card's 1.7 : 1 shape. */
const ATLAS_WIDTH = 1024
const ATLAS_HEIGHT = 512
const FACE_WIDTH = 340
const FACE_HEIGHT = 200

function faceRect(index: number) {
  const slotWidth = ATLAS_WIDTH / 3
  const slotHeight = ATLAS_HEIGHT / 2
  const column = index % 3
  const row = Math.floor(index / 3)
  return {
    x: column * slotWidth + (slotWidth - FACE_WIDTH) / 2,
    y: row * slotHeight + (slotHeight - FACE_HEIGHT) / 2,
  }
}

/** Smoothstep from 0 at `from` to 1 at `to`. */
function ramp(value: number, from: number, to: number) {
  const t = Math.min(1, Math.max(0, (value - from) / (to - from)))
  return t * t * (3 - 2 * t)
}

export const omnigraph: ProductBuilder = (kit) => {
  const group = new THREE.Group()
  const still = new THREE.Group()
  group.add(still)

  // Frame: four rounded bars, the top and bottom running the full width.
  const frame = kit.pair("#3A2C22", "#9C8F80", { roughness: 0.7 })
  const horizontal = (y: number) =>
    kit.mesh(kit.box(WIDTH, BAR, FRAME_DEPTH, 0.008), frame, [0, y, FRAME_DEPTH / 2])
  const vertical = (x: number) =>
    kit.mesh(kit.box(BAR, CORK_HEIGHT, FRAME_DEPTH, 0.008), frame, [x, HEIGHT / 2, FRAME_DEPTH / 2])
  still.add(horizontal(HEIGHT - BAR / 2), horizontal(BAR / 2))
  still.add(vertical(-(WIDTH - BAR) / 2), vertical((WIDTH - BAR) / 2))

  // Cork: a speckle tile, repeated 3 x 2 so each 256 px tile covers about 0.33 m square.
  const corkTexture = kit.canvas(256, 256, (context, width, height, _palette, theme) => {
    const dark = theme === "dark"
    context.fillStyle = dark ? "#8A6A48" : "#C7A27A"
    context.fillRect(0, 0, width, height)
    // A fixed LCG, reseeded on every paint, so the cork looks the same each time.
    let seed = 20240611
    const next = () => {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
      return seed / 4294967296
    }
    const darker = dark ? "#5E452D" : "#9C7752"
    const lighter = dark ? "#A98660" : "#DDBF97"
    for (let dot = 0; dot < 380; dot++) {
      const x = next() * width
      const y = next() * height
      const radius = 0.7 + next() * 1.4
      context.globalAlpha = 0.5 + next() * 0.4
      context.fillStyle = next() < 0.55 ? darker : lighter
      // Drawn at every wrapped offset so the tile repeats without a seam.
      for (let ox = -width; ox <= width; ox += width) {
        for (let oy = -height; oy <= height; oy += height) {
          context.beginPath()
          context.arc(x + ox, y + oy, radius, 0, Math.PI * 2)
          context.fill()
        }
      }
    }
    context.globalAlpha = 1
  })
  corkTexture.wrapS = THREE.RepeatWrapping
  corkTexture.wrapT = THREE.RepeatWrapping
  corkTexture.repeat.set(3, 2)
  const cork = kit.color("#ffffff", { map: corkTexture, roughness: 0.95 })
  // The frame's inner edge already draws the cork's outline in the blueprint.
  still.add(
    kit.mesh(kit.box(CORK_WIDTH, CORK_HEIGHT, CORK_DEPTH), cork, [0, HEIGHT / 2, CORK_DEPTH / 2], undefined, {
      noBlueprint: true,
    })
  )

  // Cards: one atlas, each card's UVs cut to its own face.
  const atlas = kit.canvas(ATLAS_WIDTH, ATLAS_HEIGHT, (context, width, height) => {
    context.fillStyle = CARD_FACE
    context.fillRect(0, 0, width, height)
    context.textAlign = "center"
    context.textBaseline = "middle"
    // One size for every card, set by the widest word, so the six labels read as a set.
    const room = FACE_WIDTH - 36
    let size = 60
    context.font = `700 ${size}px ${kit.fonts.display}`
    let widest = 0
    CARDS.forEach((card) => {
      widest = Math.max(widest, context.measureText(card.label).width)
    })
    if (widest > room) {
      size = Math.max(48, Math.floor((size * room) / widest))
      context.font = `700 ${size}px ${kit.fonts.display}`
    }
    CARDS.forEach((card, index) => {
      const face = faceRect(index)
      context.fillStyle = CARD_SHADOW
      context.fillRect(face.x, face.y + FACE_HEIGHT - 9, FACE_WIDTH, 9)
      context.fillStyle = CARD_INK
      // A little below centre, leaving the top of the card for the pin.
      context.fillText(card.label, face.x + FACE_WIDTH / 2, face.y + FACE_HEIGHT * 0.58)
    })
  })
  const paper = kit.color("#ffffff", { map: atlas, roughness: 0.9 })
  const pin = kit.glow(BRAND, { dark: 0.5, light: 0.15 }, { roughness: 0.35 })
  const pinGeometry = kit.sphere(PIN_RADIUS, 16)
  const pins: Vec3[] = []

  CARDS.forEach((card, index) => {
    const tilt = index % 2 === 0 ? TILT : -TILT
    const geometry = new THREE.PlaneGeometry(CARD_WIDTH, CARD_HEIGHT)
    const face = faceRect(index)
    const u0 = face.x / ATLAS_WIDTH
    const u1 = (face.x + FACE_WIDTH) / ATLAS_WIDTH
    // Canvas rows run downward; texture v runs upward (flipY).
    const vTop = 1 - face.y / ATLAS_HEIGHT
    const vBottom = 1 - (face.y + FACE_HEIGHT) / ATLAS_HEIGHT
    const uv = geometry.getAttribute("uv") as THREE.BufferAttribute
    for (let vertex = 0; vertex < uv.count; vertex++) {
      uv.setXY(vertex, u0 + uv.getX(vertex) * (u1 - u0), vBottom + uv.getY(vertex) * (vTop - vBottom))
    }
    still.add(kit.mesh(geometry, paper, [card.x, card.y, CARD_Z], [0, 0, tilt], { noBlueprint: true }))

    // The pin sits at (0, PIN_RISE) in the card's frame; Rz(tilt) takes that to (-sin, cos) * PIN_RISE.
    const at: Vec3 = [card.x - PIN_RISE * Math.sin(tilt), card.y + PIN_RISE * Math.cos(tilt), PIN_Z]
    pins.push(at)
    still.add(kit.mesh(index === 0 ? pinGeometry : pinGeometry.clone(), pin, at, undefined, { noBlueprint: true }))
  })

  // Strings: each its own material, so they can be lit one wave after another.
  const strings = new THREE.Group()
  group.add(strings)
  const stringMaterials: THREE.MeshStandardMaterial[] = []
  LINKS.forEach(([from, to]) => {
    const start = new THREE.Vector3(...pins[from])
    const end = new THREE.Vector3(...pins[to])
    const sag = (SAG * Math.abs(end.x - start.x)) / start.distanceTo(end)
    // A quadratic Bezier's midpoint sits halfway to its control point, so the control dips twice the sag.
    const control = start.clone().add(end).multiplyScalar(0.5)
    control.y -= 2 * sag
    const curve = new THREE.QuadraticBezierCurve3(start, control, end)
    const material = kit.glow(BRAND, { dark: 0.35, light: 0.1 }, { roughness: 0.6 })
    stringMaterials.push(material)
    // The ends finish inside the pin heads, which hide the open tube ends.
    strings.add(kit.mesh(new THREE.TubeGeometry(curve, 8, STRING_RADIUS, 5, false), material, undefined, undefined, { cast: false }))
  })

  kit.weld(still)

  const update = (frame: ProductFrame): boolean => {
    // The five strings from the Database light first; the top-row links follow.
    const inner = ramp(frame.hover, 0, 0.6)
    const outer = ramp(frame.hover, 0.4, 1)
    for (let index = 0; index < stringMaterials.length; index++) {
      const material = stringMaterials[index]
      const rest = (material.userData.restGlow as number | undefined) ?? 0.35
      const lit = index < INNER_LINKS ? inner : outer
      material.emissiveIntensity = (rest + (LIT - rest) * lit) * frame.built
    }
    return false
  }

  return {
    group,
    size: [WIDTH, HEIGHT, DEPTH],
    mount: "wall",
    glow: [pin],
    update,
  }
}
