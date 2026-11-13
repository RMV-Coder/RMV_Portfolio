import * as THREE from "three"
import type { ProductBuilder } from "../types"

/**
 * myBoardHub: an architect's model of a small boarding house on a plinth.
 *
 * myBoardHub lets boarding-house owners list rooms for students and collect
 * rent online. A house with lit windows and a "ROOMS FOR RENT" sign in the
 * yard reads as "rooms to rent" to anyone; the brass "PAID" tag hanging from
 * the door knob adds "and the rent is paid". On hover the roof lifts off its
 * back eave like a model's lid and shows the floor plan: four student rooms,
 * a bed in each.
 *
 * It is the centrepiece of the study, so it is the one object with an idle
 * light: at night someone upstairs switches their light off and on again.
 *
 * Local frame: origin at the centre of the plinth's underside, y up, front +z.
 * At rest the model spans x -0.31..0.31, y 0..0.565 (the roof ridge),
 * z -0.23..0.23.
 */

const INK = "#1A1613"
const CREAM = "#FBF8F2"
const BRASS = "#E8B86D"
const WOOD = "#3A2C22"

const ROOF_LIFT = (35 * Math.PI) / 180
const TAG_SWING = (25 * Math.PI) / 180

/** The idle light: on, a quick fade out, a spell of dark, a quick fade back. Seconds within a 6 s cycle. */
const CYCLE = 6
const FADE = 0.25
const OFF_AT = 3.5
const ON_AT = 5.5

const smooth = (t: number) => t * t * (3 - 2 * t)

/** How much of the switched window's light is on at `time`: 1 on, 0 off. */
function switchedOn(time: number): number {
  const phase = time % CYCLE
  if (phase < OFF_AT) return 1
  if (phase < OFF_AT + FADE) return 1 - smooth((phase - OFF_AT) / FADE)
  if (phase < ON_AT) return 0
  if (phase < ON_AT + FADE) return smooth((phase - ON_AT) / FADE)
  return 1
}

/** Sets a bold font at `size`, shrunk if needed so `text` fits `maxWidth`. */
function fitFont(context: CanvasRenderingContext2D, text: string, size: number, family: string, maxWidth: number) {
  context.font = `700 ${size}px ${family}`
  const width = context.measureText(text).width
  if (width > maxWidth) context.font = `700 ${Math.floor((size * maxWidth) / width)}px ${family}`
}

export const myboardhub: ProductBuilder = (kit) => {
  const group = new THREE.Group()
  const still = new THREE.Group()
  group.add(still)

  // ── Materials. One object per look, so welding folds each look into one draw.
  const plinthMat = kit.pair("#3a322b", "#b8ad9f")
  const strip = kit.trim("brass", { dark: 0.35, light: 0.1 }, { metalness: 0.6, roughness: 0.4 })
  const brass = kit.mat("brass", { metalness: 0.6, roughness: 0.35 })
  const bodyMat = kit.pair("#efe7da", "#fbf8f2", { roughness: 0.85 })
  const roofMat = kit.color(BRASS, { metalness: 0.3, roughness: 0.55 })
  const doorMat = kit.pair("#6B4A3A", "#8A6E55")
  const postMat = kit.mat("metalDark", { metalness: 0.4, roughness: 0.5 })
  const boardMat = kit.color(WOOD, { roughness: 0.75 })

  const windows = kit.glow("#FFD38A", { dark: 0.9, light: 0.12 })
  // The switched window has its own material so it can go dark on its own;
  // it is driven in update, so it stays out of `glow`.
  const switched = kit.glow("#FFD38A", { dark: 0.9, light: 0.12 })
  // An unlit pane is dusky glass rather than paint, so the switched window
  // reads as "light off" when it goes out, and daytime windows look like glass.
  windows.color.set("#7a7266")
  switched.color.set("#7a7266")

  // ── Plinth: 0.62 x 0.03 x 0.46, top at y 0.03, with a brass strip along its front top edge.
  still.add(kit.mesh(kit.box(0.62, 0.03, 0.46, 0.01), plinthMat, [0, 0.015, 0]))
  // y 0.029..0.035, z 0.221..0.227: on the plinth top, just inside its front edge (z 0.23).
  still.add(kit.mesh(kit.box(0.6, 0.006, 0.006), strip, [0, 0.032, 0.224]))

  // ── Body: x -0.25..0.25, y 0.03..0.37, z -0.20..0.10 (front wall at z 0.10).
  still.add(kit.mesh(kit.box(0.5, 0.34, 0.3, 0.01), bodyMat, [0, 0.2, -0.05]))

  // ── Floor plan on the body's flat top (x -0.24..0.24, z -0.19..0.09), 2 mm above it.
  // Laid flat with rotation.x = -PI/2, the top of the canvas points to the back of the house.
  const plan = kit.canvas(512, 300, (context, width, height) => {
    context.fillStyle = CREAM
    context.fillRect(0, 0, width, height)
    context.strokeStyle = INK
    context.lineCap = "square"
    context.lineJoin = "miter"
    context.lineWidth = 12
    const wall = (x1: number, y1: number, x2: number, y2: number) => {
      context.beginPath()
      context.moveTo(x1, y1)
      context.lineTo(x2, y2)
      context.stroke()
    }
    // The canvas bottom is the front of the house, so the way in is a gap in the
    // bottom wall at the middle, under the real front door (x 0).
    wall(10, 10, 502, 10)
    wall(10, 10, 10, 290)
    wall(502, 10, 502, 290)
    wall(10, 290, 226, 290)
    wall(286, 290, 502, 290)
    // A corridor from the front door to the back (x 226..286), two rooms either
    // side of it. Door gaps are 56 long so they still show 44 once the square
    // caps are added.
    for (const x of [226, 286]) {
      wall(x, 10, x, 84)
      wall(x, 140, x, 160)
      wall(x, 216, x, 290)
    }
    wall(10, 150, 226, 150)
    wall(286, 150, 502, 150)

    // Door leaves and their swings, hinged beside the wall between the rooms.
    context.lineWidth = 4
    context.lineCap = "butt"
    const door = (hx: number, hy: number, leafX: number, from: number, to: number) => {
      wall(hx, hy, leafX, hy)
      context.beginPath()
      context.arc(hx, hy, 44, from, to)
      context.stroke()
    }
    door(226, 134, 182, Math.PI, Math.PI * 1.5)
    door(286, 134, 330, Math.PI * 1.5, Math.PI * 2)
    door(226, 166, 182, Math.PI * 0.5, Math.PI)
    door(286, 166, 330, 0, Math.PI * 0.5)

    // A bed in each room: frame, pillow at the wall end, the fold of the blanket.
    context.lineWidth = 6
    const rounded = (x: number, y: number, w: number, h: number, r: number) => {
      context.beginPath()
      context.roundRect(x, y, w, h, r)
      context.stroke()
    }
    const bed = (x: number, top: boolean) => {
      const y = top ? 22 : 194
      rounded(x, y, 60, 84, 10)
      rounded(x + 8, top ? y + 8 : y + 58, 44, 18, 7)
      wall(x, top ? y + 36 : y + 48, x + 60, top ? y + 36 : y + 48)
    }
    bed(30, true)
    bed(422, true)
    bed(30, false)
    bed(422, false)
  })
  const planMat = kit.color("#ffffff", { map: plan, roughness: 0.9 })
  still.add(
    kit.mesh(new THREE.PlaneGeometry(0.48, 0.28), planMat, [0, 0.372, -0.05], [-Math.PI / 2, 0, 0], {
      noBlueprint: true,
    })
  )

  // ── Windows, 12 mm deep, standing 9 mm proud of their walls. Plain boxes: the
  // 12 mm depth caps any rounding at 5.5 mm, under a pixel at this size, and
  // seven rounded panes would cost about 2,000 triangles for nothing.
  const front = kit.box(0.07, 0.08, 0.012)
  const side = kit.box(0.012, 0.08, 0.07)
  // Front wall at z 0.10: panes span z 0.097..0.109.
  still.add(kit.mesh(front, switched, [-0.15, 0.29, 0.103]))
  still.add(kit.mesh(front, windows, [0, 0.29, 0.103]))
  still.add(kit.mesh(front, windows, [0.15, 0.29, 0.103]))
  still.add(kit.mesh(front, windows, [-0.15, 0.14, 0.103]))
  still.add(kit.mesh(front, windows, [0.15, 0.14, 0.103]))
  // Side walls at x +-0.25: panes span 0.247..0.259 out from the centre.
  still.add(kit.mesh(side, windows, [-0.253, 0.29, -0.05]))
  still.add(kit.mesh(side, windows, [0.253, 0.29, -0.05]))

  // ── Door: x -0.04..0.04, y 0.03..0.16 (on the plinth), z 0.0985..0.1135.
  still.add(kit.mesh(kit.box(0.08, 0.13, 0.015), doorMat, [0, 0.095, 0.106]))
  // Knob, sunk 3.5 mm into the door face.
  const knob: [number, number, number] = [0.025, 0.09, 0.118]
  still.add(kit.mesh(kit.sphere(0.008), brass, knob))

  // ── Yard sign at the front right corner. The post stands at x 0.275 rather than
  // 0.25 so the 0.16 board can hang under the arm without touching it.
  // Post: x 0.269..0.281, y 0.03..0.25, z 0.164..0.176.
  still.add(kit.mesh(kit.cylinder(0.006, 0.006, 0.22, 12), postMat, [0.275, 0.14, 0.17]))
  // Arm: x 0.145..0.281, y 0.240..0.248, reaching left from just under the post top.
  still.add(kit.mesh(kit.box(0.136, 0.008, 0.008), postMat, [0.213, 0.244, 0.17]))
  // Chains: y 0.216..0.240, from the arm's underside into the board's top edge.
  const chain = kit.cylinder(0.002, 0.002, 0.024, 6)
  still.add(kit.mesh(chain, postMat, [0.15, 0.228, 0.17], undefined, { cast: false }))
  still.add(kit.mesh(chain, postMat, [0.22, 0.228, 0.17], undefined, { cast: false }))
  // Board: x 0.105..0.265 (4 mm clear of the post), y 0.118..0.218, z 0.166..0.174.
  still.add(kit.mesh(kit.box(0.16, 0.1, 0.008), boardMat, [0.185, 0.168, 0.17]))
  const sign = kit.canvas(512, 320, (context, width, height) => {
    context.fillStyle = WOOD
    context.fillRect(0, 0, width, height)
    context.strokeStyle = BRASS
    context.lineWidth = 8
    context.strokeRect(4, 4, width - 8, height - 8)
    context.fillStyle = BRASS
    context.textAlign = "center"
    context.textBaseline = "alphabetic"
    fitFont(context, "ROOMS", 120, kit.fonts.display, width - 72)
    context.fillText("ROOMS", width / 2, 164)
    fitFont(context, "FOR RENT", 72, kit.fonts.display, width - 72)
    context.fillText("FOR RENT", width / 2, 262)
  })
  const signMat = kit.color("#ffffff", { map: sign, roughness: 0.75 })
  // 1.5 mm in front of the board's face (z 0.174).
  still.add(
    kit.mesh(new THREE.PlaneGeometry(0.16, 0.1), signMat, [0.185, 0.168, 0.1755], undefined, { noBlueprint: true })
  )

  // ── Roof, hinged on the back eave line (y 0.375, z -0.20). The gable faces the
  // front and the ridge runs front to back; the prism overhangs 0.03 front and
  // back (local z -0.03..0.33, so z -0.23..0.13 in the model) and 0.04 each side.
  const roof = new THREE.Group()
  roof.position.set(0, 0.375, -0.2)
  group.add(roof)
  const gable = new THREE.Shape()
  gable.moveTo(-0.29, 0)
  gable.lineTo(0.29, 0)
  gable.lineTo(0, 0.19)
  gable.closePath()
  const prism = new THREE.ExtrudeGeometry(gable, { depth: 0.36, bevelEnabled: false })
  roof.add(kit.mesh(prism, roofMat, [0, 0, -0.03]))
  // Chimney x 0.125..0.175, local y 0.06..0.14. The right slope is at local y
  // 0.108 (uphill side) and 0.075 (downhill side) there, so it stands 3 to 6 cm
  // clear of the roof and its foot is buried in it. Top at y 0.515 in the model.
  roof.add(kit.mesh(kit.box(0.05, 0.08, 0.05), plinthMat, [0.15, 0.1, 0.09]))
  kit.weld(roof)

  // ── Key tag, hinged at the knob. The ring hangs 1 cm below the knob's centre so
  // its top loops inside the knob; the tag hangs from the ring's bottom.
  const tag = new THREE.Group()
  tag.position.set(...knob)
  group.add(tag)
  tag.add(kit.mesh(new THREE.TorusGeometry(0.012, 0.0022, 6, 16), brass, [0, -0.01, 0], undefined, { cast: false }))
  // Tag: local y -0.055..-0.020 (model y 0.035..0.070, 5 mm above the plinth),
  // z -0.002..0.002, i.e. 2.5 mm in front of the door face.
  tag.add(kit.mesh(kit.box(0.06, 0.035, 0.004), roofMat, [0, -0.0375, 0]))
  const paid = kit.canvas(256, 150, (context, width, height) => {
    context.fillStyle = BRASS
    context.fillRect(0, 0, width, height)
    context.strokeStyle = INK
    context.lineWidth = 14
    context.lineCap = "round"
    context.lineJoin = "round"
    context.beginPath()
    context.moveTo(26, 80)
    context.lineTo(48, 104)
    context.lineTo(84, 50)
    context.stroke()
    context.fillStyle = INK
    context.textAlign = "left"
    context.textBaseline = "middle"
    fitFont(context, "PAID", 72, kit.fonts.display, width - 114)
    context.fillText("PAID", 100, 80)
  })
  // Same finish as the tag body so the face and its edges match.
  const paidMat = kit.color("#ffffff", { map: paid, roughness: 0.55, metalness: 0.3 })
  tag.add(
    kit.mesh(new THREE.PlaneGeometry(0.058, 0.033), paidMat, [0, -0.0375, 0.0036], undefined, {
      noBlueprint: true,
      cast: false,
    })
  )
  kit.weld(tag)

  kit.weld(still)

  let lastOn = 1

  return {
    group,
    size: [0.62, 0.565, 0.46],
    mount: "surface",
    glow: [windows, strip],
    update(frame) {
      const hover = frame.hover
      // Negative turns about x lift +z: a point at local (0, 0, z) goes to y = z * sin(angle).
      roof.rotation.x = -ROOF_LIFT * hover
      // The same sign swings the tag's bottom (local -y) toward +z, away from the door.
      tag.rotation.x = -TAG_SWING * hover

      const on = kit.daylight < 0.5 ? switchedOn(frame.time) : 1
      const rest = (switched.userData.restGlow as number | undefined) ?? 0
      // Lit and brightened exactly as the controller lights the windows in `glow`
      // (rest + h * (0.2 + 0.35 * rest), with h = smooth(hover), switched on over
      // the last quarter of the arrival), so at rest and on hover this window
      // matches its neighbours and only the idle switch sets it apart.
      const lift = smooth(hover)
      const arrived = smooth(Math.min(1, Math.max(0, (frame.built - 0.75) / 0.25)))
      switched.emissiveIntensity = (rest + lift * (0.2 + 0.35 * rest)) * on * arrived

      const changed = on !== lastOn
      lastOn = on
      return changed
    },
  }
}
