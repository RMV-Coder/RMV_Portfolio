import * as THREE from "three"
import type { ProductBuilder, SceneKit, SceneTheme, Vec3 } from "../types"

/**
 * Calculus Solver: a calculator that shows its work.
 *
 * The object is a classroom chalkboard with one integral worked through step
 * by step and the answer boxed at the bottom. A worked example on a board is
 * the most familiar picture of "someone explaining the maths to you", which is
 * what the product does. Hovering chalks in the next step, left to right.
 *
 * In the room the board leans on a three-legged wooden easel; on the shelf it
 * stands on its own ledge with its back against the wall.
 *
 * Board frame (shared by both variants): origin at the bottom of the back face,
 * centred in x, front toward +z. The ledge is the bottom 0.025, the timber
 * frame sits on it (0.025 to 0.675), and the ledge reaches 0.07 forward.
 */

const BRAND = "#8C9EF5"
const CHALK = "#ECEBE4"
const SLATE_DARK = "#1E2A24"
const SLATE_LIGHT = "#2F4038"

/** How far the easel board leans back: -8 degrees about x tips its top toward -z. */
const LEAN = (-8 * Math.PI) / 180

/** Faint eraser smudges: x, y, radius x, radius y, angle. Fixed, so every repaint is identical. */
const SMUDGES: [number, number, number, number, number][] = [
  [770, 140, 200, 56, -0.2],
  [880, 330, 110, 40, 0.1],
  [660, 480, 230, 34, -0.05],
  [860, 620, 140, 60, 0.15],
  [330, 696, 260, 22, 0],
]

/** Sets the largest font from 52 px down to 48 px at which `text` fits `room`; returns its width at that size. */
function fitFont(context: CanvasRenderingContext2D, text: string, room: number, face: string): number {
  context.font = `700 52px ${face}`
  const natural = context.measureText(text).width
  if (natural <= room) return natural
  const size = Math.max(48, Math.floor((52 * room) / natural))
  context.font = `700 ${size}px ${face}`
  return context.measureText(text).width
}

/**
 * One line of a step, at `left`, with its baseline at `baseline`. If even 48 px
 * is too wide it is squeezed sideways rather than shrunk further. `reveal`
 * (0..1) clips it from the left, as if it were still being chalked in.
 */
function drawStep(
  context: CanvasRenderingContext2D,
  text: string,
  left: number,
  baseline: number,
  room: number,
  face: string,
  reveal: number
) {
  if (reveal <= 0) return
  const natural = fitFont(context, text, room, face)
  const squeeze = Math.min(1, room / natural)
  context.save()
  if (reveal < 1) {
    context.beginPath()
    context.rect(0, baseline - 70, left + natural * squeeze * reveal, 100)
    context.clip()
  }
  context.translate(left, baseline)
  context.scale(squeeze, 1)
  context.fillText(text, 0, 0)
  context.restore()
}

/** The worked integral of x squared, on a 1024 x 736 slate. */
function paintBoard(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  theme: SceneTheme,
  face: string,
  revealed: number
) {
  context.fillStyle = theme === "dark" ? SLATE_DARK : SLATE_LIGHT
  context.fillRect(0, 0, width, height)

  context.fillStyle = "rgba(236, 235, 228, 0.045)"
  SMUDGES.forEach(([x, y, rx, ry, angle]) => {
    context.beginPath()
    context.ellipse(x, y, rx, ry, angle, 0, Math.PI * 2)
    context.fill()
  })

  context.lineCap = "round"
  context.lineJoin = "round"
  context.textAlign = "left"
  context.textBaseline = "alphabetic"

  // The integral sign: a tall S, hooked at both ends, 150 px from hook to hook (y 45 to 195).
  const cx = 100
  const top = 45
  const bottom = 195
  context.strokeStyle = BRAND
  context.lineWidth = 12
  context.beginPath()
  context.moveTo(cx + 32, top + 16)
  context.bezierCurveTo(cx + 28, top - 4, cx + 8, top - 6, cx + 4, top + 28)
  context.lineTo(cx - 4, bottom - 28)
  context.bezierCurveTo(cx - 8, bottom + 6, cx - 28, bottom + 4, cx - 32, bottom - 16)
  context.stroke()

  // x squared dx, set beside the sign: the 96 px x has its x-height (about 50 px) centred near y 130.
  context.fillStyle = CHALK
  let x = 168
  context.font = `700 96px ${face}`
  context.fillText("x", x, 158)
  x += context.measureText("x").width + 4
  context.font = `700 56px ${face}`
  context.fillText("2", x, 110)
  x += context.measureText("2").width + 30
  context.font = `700 96px ${face}`
  context.fillText("dx", x, 158)

  const left = 56
  const room = width - left * 2
  drawStep(context, "Step 1: add 1 to the power", left, 318, room, face, 1)
  drawStep(context, "Step 2: divide by the new power", left, 438, room, face, revealed / 4)

  // The answer, x cubed over 3 plus C, inside a chalk box centred on y 590.
  const baseline = 618
  const start = 84
  context.font = `700 80px ${face}`
  const head = context.measureText("= x").width
  const tail = context.measureText("/3 + C").width
  context.font = `700 48px ${face}`
  const power = context.measureText("3").width
  let at = start
  context.font = `700 80px ${face}`
  context.fillText("= x", at, baseline)
  at += head + 4
  context.font = `700 48px ${face}`
  context.fillText("3", at, baseline - 40)
  at += power + 10
  context.font = `700 80px ${face}`
  context.fillText("/3 + C", at, baseline)
  at += tail

  const boxLeft = 52
  const boxRight = at + 32
  context.strokeStyle = CHALK
  context.lineWidth = 6
  context.strokeRect(boxLeft, 522, boxRight - boxLeft, 136)

  // A tick beside the box in the brand colour: "this is the answer", readable without the words.
  const tick = boxRight + 40
  context.strokeStyle = BRAND
  context.lineWidth = 12
  context.beginPath()
  context.moveTo(tick, 592)
  context.lineTo(tick + 24, 618)
  context.lineTo(tick + 70, 556)
  context.stroke()
}

/** The framed board on its ledge, in the board frame described in the header. */
function buildBoard(kit: SceneKit, texture: THREE.Texture, chalk: THREE.MeshStandardMaterial): THREE.Group {
  const board = new THREE.Group()
  const timber = kit.pair("#4A3A2E", "#8A6E55", { roughness: 0.75 })
  const slate = kit.pair(SLATE_DARK, SLATE_LIGHT, { roughness: 0.9 })
  const writing = kit.color("#ffffff", { map: texture, roughness: 0.92 })
  const felt = kit.color("#8A7F72", { roughness: 0.95 })

  // Ledge: x -0.435..0.435, y 0..0.025, z 0..0.07.
  board.add(kit.mesh(kit.box(0.87, 0.025, 0.07, 0.006), timber, [0, 0.0125, 0.035]))

  // Frame, 0.035 section, 0.03 deep (z 0..0.03), outer 0.87 x 0.65 standing on the ledge.
  // Bottom rail y 0.025..0.06, top rail y 0.64..0.675, side rails between them (y 0.06..0.64).
  board.add(kit.mesh(kit.box(0.87, 0.035, 0.03, 0.006), timber, [0, 0.0425, 0.015]))
  board.add(kit.mesh(kit.box(0.87, 0.035, 0.03, 0.006), timber, [0, 0.6575, 0.015]))
  board.add(kit.mesh(kit.box(0.035, 0.58, 0.03, 0.006), timber, [-0.4175, 0.35, 0.015]))
  board.add(kit.mesh(kit.box(0.035, 0.58, 0.03, 0.006), timber, [0.4175, 0.35, 0.015]))

  // Slate fills the 0.80 x 0.58 opening, z 0.004..0.016, recessed 14 mm behind the frame face.
  board.add(kit.mesh(kit.box(0.8, 0.58, 0.012), slate, [0, 0.35, 0.01]))

  // The writing, 0.0015 in front of the slate. 0.80 x 0.575 keeps the canvas's 1024:736 shape.
  board.add(
    kit.mesh(new THREE.PlaneGeometry(0.8, 0.575), writing, [0, 0.35, 0.0175], undefined, {
      cast: false,
      noBlueprint: true,
    })
  )

  // On the ledge, in front of the bottom rail (z > 0.03): chalk lying along x
  // (y 0.025..0.038, z 0.0455..0.0585) and an eraser (y 0.025..0.05, z 0.033..0.068).
  board.add(kit.mesh(kit.cylinder(0.0065, 0.0065, 0.075, 12), chalk, [0.2, 0.0315, 0.052], [0, 0, Math.PI / 2]))
  // A plain box: at 9 cm a rounded edge would not show, and would cost 300 triangles.
  board.add(kit.mesh(kit.box(0.09, 0.025, 0.035), felt, [-0.22, 0.0375, 0.0505]))

  return board
}

/**
 * A square wooden strut from one point to another (centre of each end). These
 * are the easel's tripod legs, which the brief counts as thin parts: no shadow.
 */
function strut(kit: SceneKit, material: THREE.Material, from: Vec3, to: Vec3, section: number): THREE.Mesh {
  const a = new THREE.Vector3(...from)
  const b = new THREE.Vector3(...to)
  const along = b.clone().sub(a)
  const length = along.length()
  const mesh = kit.mesh(kit.box(section, length, section, 0.006), material, undefined, undefined, { cast: false })
  mesh.position.copy(a).add(b).multiplyScalar(0.5)
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), along.normalize())
  return mesh
}

export const calculusSolver: ProductBuilder = (kit, variant) => {
  const group = new THREE.Group()

  // How many quarters of Step 2 are chalked in; the painter reads it.
  let revealed = 0
  const texture = kit.canvas(1024, 736, (context, width, height, _palette, theme) =>
    paintBoard(context, width, height, theme, kit.fonts.display, revealed)
  )

  const chalk = kit.glow(BRAND, { dark: 0.3, light: 0.1 })
  const board = buildBoard(kit, texture, chalk)

  let size: Vec3
  let mount: "surface" | "wall"

  if (variant === "shelf") {
    // Upright, back on z = 0: 0.87 wide, 0.675 tall (ledge 0.025 + frame 0.65), 0.07 deep (the ledge).
    group.add(board)
    size = [0.87, 0.675, 0.07]
    mount = "wall"
  } else {
    const wood = kit.mat("wood")

    // The board leans back 8 degrees from the bottom of its back face, which
    // sits on the cross bar at y 0.6175, z 0.19. Its back face is then the
    // plane z = 0.19 - (y - 0.6175) tan 8deg; its top reaches y 0.6175 +
    // 0.675 cos 8 + 0.03 sin 8 = 1.29.
    const lean = new THREE.Group()
    lean.position.set(0, 0.6175, 0.19)
    lean.rotation.x = LEAN
    lean.add(board)
    // Cross bar, in the lean frame: y -0.03..0, z 0..0.08, just in front of the
    // legs (whose front faces lie on the board's back plane). World y 0.588..0.627.
    lean.add(kit.mesh(kit.box(0.8, 0.03, 0.08, 0.006), wood, [0, -0.015, 0.04]))
    group.add(lean)

    // Front legs, 0.032 square, following the board plane with their centres
    // 0.016 behind it: z 0.2606 at the floor, 0.0618 at the top (y 1.415).
    // Splayed: x 0.40 at the floor, 0.30 at the top. The struts are rounded
    // boxes (radius 6 mm), so a tilted foot's lowest point is its corner
    // rounding, about 2.2 mm below the end centre: the end centres sit at
    // y 0.00225 so the feet touch the floor instead of hovering above it.
    group.add(strut(kit, wood, [-0.4, 0.00225, 0.2608], [-0.3, 1.415, 0.0618], 0.032))
    group.add(strut(kit, wood, [0.4, 0.00225, 0.2608], [0.3, 1.415, 0.0618], 0.032))

    // Top rail joining the front legs above the board (y about 1.34..1.38),
    // centred on the legs' centreline at y 1.36 and leaning with them.
    group.add(kit.mesh(kit.box(0.66, 0.04, 0.032, 0.006), wood, [0, 1.36, 0.0696], [LEAN, 0, 0]))

    // Back leg, from just behind the top rail (back face z 0.053) down to the
    // floor at z -0.262: about 12 degrees off vertical.
    group.add(strut(kit, wood, [0, 0.00225, -0.2624], [0, 1.37, 0.037], 0.032))

    // Worked from the rounded struts' extremes, not their sharp corners:
    // x: board +-0.435 (feet reach +-0.416); y: 0 to the front legs' tops, 1.417;
    // z: back foot -0.277 to front feet +0.276.
    size = [0.87, 1.417, 0.553]
    mount = "surface"
  }

  // Nothing moves: only the writing changes, and that is a repaint.
  kit.weld(group)

  return {
    group,
    size,
    mount,
    glow: [chalk],
    update(frame) {
      // Step 2 is chalked in a quarter at a time as the hover eases in, and rubbed out as it eases away.
      const target = Math.min(4, Math.max(0, Math.round(frame.hover * 4)))
      if (target !== revealed) {
        revealed = target
        kit.repaint(texture)
      }
      return false
    },
  }
}
