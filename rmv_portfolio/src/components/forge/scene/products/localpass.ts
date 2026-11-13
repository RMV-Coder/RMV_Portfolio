import * as THREE from "three"
import type { ProductBuilder } from "../types"

/**
 * LocalPass: a password manager that never leaves your computer.
 *
 * It is drawn as a squat brass floor safe. A safe is the everyday picture of
 * "my valuables, kept here, at home", which is the whole promise of the
 * product: the passwords stay in the room. On hover the handle wheel turns a
 * quarter turn, the keyhole warms up, and the door swings out on a few
 * coloured cards (the saved logins) resting inside.
 *
 * Local frame: origin at the centre of the base, +y up, front toward +z.
 * The body is a hollow box open at the front (x -0.25..0.25, y 0.03..0.56,
 * z -0.23..0.21); the door, escutcheon and wheel stand proud of it up to
 * z = 0.23, which is where the stated depth of 0.46 comes from.
 */

/** How far the door swings at full hover. */
const DOOR_OPEN = THREE.MathUtils.degToRad(28)

/** The hinge line: the front-left edge of the opening, halfway up it. */
const HINGE: [number, number, number] = [-0.21, 0.295, 0.21]

const clamp01 = (value: number) => (value < 0 ? 0 : value > 1 ? 1 : value)
const ease = (t: number) => t * t * (3 - 2 * t)

/**
 * A keyhole outline: a round top joined to a trapezoid that widens downward,
 * centred on the origin. The brief's proportions (circle r 0.03, slot 0.022
 * to 0.048 over 0.075) are scaled by 0.9 so the bottom corners stay about
 * 6 mm inside the escutcheon's 0.07 rim instead of poking past it.
 */
function keyholeShape(): THREE.Shape {
  const scale = 0.9
  const radius = 0.03 * scale
  const topHalf = 0.011 * scale
  const bottomHalf = 0.024 * scale
  const length = 0.075 * scale
  // The slot's top corners sit exactly on the circle, so the outline is one
  // clean loop: arc over the top, down the left side, across, up the right.
  const drop = Math.sqrt(radius * radius - topHalf * topHalf)
  const total = radius + drop + length
  const centreY = total / 2 - radius
  const slotTop = centreY - drop
  const slotBottom = slotTop - length
  const start = Math.atan2(-drop, topHalf)

  const shape = new THREE.Shape()
  shape.moveTo(topHalf, slotTop)
  shape.absarc(0, centreY, radius, start, Math.PI - start, false)
  shape.lineTo(-bottomHalf, slotBottom)
  shape.lineTo(bottomHalf, slotBottom)
  shape.closePath()
  return shape
}

export const localpass: ProductBuilder = (kit) => {
  const group = new THREE.Group()

  // Materials, one object per look so welding merges them.
  const bodyMat = kit.color("#D4A24C", { metalness: 0.85, roughness: 0.35 })
  const doorMat = kit.color("#C2913F", { metalness: 0.8, roughness: 0.4 })
  const footMat = kit.color("#2A2420")
  const liningMat = kit.color("#120F0D")
  // The bright brass of the escutcheon and wheel; it is the part that warms on hover.
  const brassMat = kit.glow("#E8C77A", { dark: 0.12, light: 0.04 }, { metalness: 0.8, roughness: 0.3 })
  // Dark at rest, lit from within as the safe is opened. Driven in update, not by the controller.
  const keyMat = kit.glow("#FFE2A0", { dark: 0.0, light: 0.0 })
  keyMat.color.set("#14110F")
  const cardMats = ["#F3EDE4", "#9DB4D6", "#E8B86D"].map((hex) => kit.color(hex, { roughness: 0.55 }))

  // Everything that never moves.
  const still = new THREE.Group()

  // Feet: 0.05 x 0.03 x 0.05, tucked a little in from the body's corners.
  for (const x of [-0.2, 0.2]) {
    for (const z of [-0.185, 0.165]) {
      still.add(kit.mesh(kit.box(0.05, 0.03, 0.05), footMat, [x, 0.015, z]))
    }
  }

  // Body shell. The back spans the full width; the sides, top and bottom sit
  // in front of it (z -0.19..0.21), and the top and bottom fit between the sides.
  const round = 0.008
  still.add(kit.mesh(kit.box(0.5, 0.53, 0.04, round), bodyMat, [0, 0.295, -0.21]))
  still.add(kit.mesh(kit.box(0.04, 0.53, 0.4, round), bodyMat, [-0.23, 0.295, 0.01]))
  still.add(kit.mesh(kit.box(0.04, 0.53, 0.4, round), bodyMat, [0.23, 0.295, 0.01]))
  still.add(kit.mesh(kit.box(0.42, 0.04, 0.4, round), bodyMat, [0, 0.54, 0.01]))
  still.add(kit.mesh(kit.box(0.42, 0.04, 0.4, round), bodyMat, [0, 0.05, 0.01]))

  // Lining, 4 mm thick, against the inner faces of the cavity (x +-0.21,
  // y 0.07..0.52, z -0.19..0.21). It stops at z 0.178 so the closed door
  // (z 0.18..0.21) never passes through it.
  const lining = { cast: false, noBlueprint: true }
  still.add(kit.mesh(kit.box(0.42, 0.45, 0.004), liningMat, [0, 0.295, -0.188], undefined, lining))
  still.add(kit.mesh(kit.box(0.004, 0.45, 0.364), liningMat, [-0.208, 0.295, -0.004], undefined, lining))
  still.add(kit.mesh(kit.box(0.004, 0.45, 0.364), liningMat, [0.208, 0.295, -0.004], undefined, lining))
  still.add(kit.mesh(kit.box(0.412, 0.004, 0.364), liningMat, [0, 0.518, -0.004], undefined, lining))
  still.add(kit.mesh(kit.box(0.412, 0.004, 0.364), liningMat, [0, 0.072, -0.004], undefined, lining))

  // One shelf at mid-height (top at y 0.306). It spans the lining wall to wall
  // (x +-0.206) and runs from the back lining (z -0.186) to z 0.164, so it is
  // held on three sides rather than hanging in the cavity.
  still.add(kit.mesh(kit.box(0.412, 0.012, 0.35), footMat, [0, 0.3, -0.011]))

  // Cards, kept to the right half and the front: with the door at 28 degrees
  // and the camera off to the right, that is the part of the inside on view.
  const card = kit.box(0.12, 0.008, 0.08)
  const flat = { cast: false, noBlueprint: true }
  // Two fanned on the shelf, the second resting on the first.
  still.add(kit.mesh(card, cardMats[0], [0.04, 0.31, 0.05], [0, 0.12, 0], flat))
  still.add(kit.mesh(card, cardMats[1], [0.085, 0.318, 0.065], [0, -0.28, 0], flat))
  // One on the floor of the safe (lining top at y 0.074).
  still.add(kit.mesh(card, cardMats[2], [0.09, 0.078, 0.06], [0, 0.35, 0], flat))

  // Hinge barrels on the hinge line. They are round about it, so they can
  // stay with the still parts while the door turns inside them.
  for (const y of [0.145, 0.445]) {
    still.add(kit.mesh(kit.cylinder(0.012, 0.012, 0.07, 12), doorMat, [HINGE[0], y, HINGE[2]]))
  }

  kit.weld(still)
  group.add(still)

  // The door swings about its left edge. Its group's origin is the hinge, so
  // the door itself lies at x 0..0.42, z -0.03..0 in that frame.
  const door = new THREE.Group()
  door.position.set(...HINGE)
  group.add(door)

  const doorFace = new THREE.Group()
  // 4 mm narrower and shorter than the 0.42 x 0.45 opening, so its edges
  // never sit coplanar with the shell's inner faces.
  doorFace.add(kit.mesh(kit.box(0.416, 0.446, 0.03, 0.008), doorMat, [0.21, 0, -0.015]))

  // Escutcheon, left of centre and above the middle: a 1 cm disc on the door face.
  const escutcheon = { x: 0.13, y: 0.06 }
  doorFace.add(
    kit.mesh(kit.cylinder(0.07, 0.07, 0.01, 24), brassMat, [escutcheon.x, escutcheon.y, 0.005], [Math.PI / 2, 0, 0])
  )
  // Keyhole extruded 6 mm along +z from z 0.007, so it stands 3 mm proud of the disc (front at 0.01).
  const keyhole = new THREE.ExtrudeGeometry(keyholeShape(), { depth: 0.006, bevelEnabled: false, curveSegments: 16 })
  doorFace.add(kit.mesh(keyhole, keyMat, [escutcheon.x, escutcheon.y, 0.007], undefined, { cast: false }))
  kit.weld(doorFace)
  door.add(doorFace)

  // Handle wheel, right of centre and below the middle, spinning about its own z axis.
  // Its centre sits 12 mm in front of the door face; with the knobs it reaches
  // 0.070 from the centre and z 0.02 at most (world z 0.23).
  const wheel = new THREE.Group()
  wheel.position.set(0.3, -0.07, 0.012)
  wheel.add(kit.mesh(new THREE.TorusGeometry(0.045, 0.0065, 6, 24), brassMat))
  // Hub: a short post from the door face (z -0.012 here) to z 0.008.
  wheel.add(kit.mesh(kit.cylinder(0.014, 0.014, 0.02, 16), brassMat, [0, 0, -0.002], [Math.PI / 2, 0, 0]))
  for (let index = 0; index < 3; index++) {
    const angle = Math.PI / 2 + (index * 2 * Math.PI) / 3
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    // Each spoke runs from the hub out past the rim to a round knob, the way a safe's spinner does.
    wheel.add(kit.mesh(kit.box(0.06, 0.008, 0.006), brassMat, [cos * 0.03, sin * 0.03, 0], [0, 0, angle]))
    wheel.add(kit.mesh(kit.sphere(0.008, 10), brassMat, [cos * 0.062, sin * 0.062, 0]))
  }
  kit.weld(wheel)
  door.add(wheel)

  return {
    group,
    size: [0.5, 0.56, 0.46],
    mount: "surface",
    glow: [brassMat],
    update(frame) {
      const hover = frame.hover
      // The wheel turns first (clockwise from the front, hence negative z)...
      wheel.rotation.z = -ease(clamp01(hover / 0.4)) * (Math.PI / 2)
      // ...then the door swings. About +y, a negative angle carries the free
      // edge (x > 0 in the hinge frame) toward +z: z' = -x sin(angle).
      door.rotation.y = -ease(clamp01((hover - 0.35) / 0.65)) * DOOR_OPEN
      const rest = (keyMat.userData.restGlow as number | undefined) ?? 0
      keyMat.emissiveIntensity = (rest + 0.8 * hover) * frame.built
      return false
    },
  }
}
