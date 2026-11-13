import * as THREE from "three"
import type { ProductBuilder, Vec3 } from "../types"

/**
 * AetherForm: an AI workout coach that watches you through the camera,
 * counts your reps and corrects your form.
 *
 * It is drawn as a little home-gym corner: an amber dumbbell lying on an
 * exercise mat, watched by a camera on a tripod. The camera's lens is aimed at
 * the dumbbell and its back screen, turned toward the viewer, shows the rep
 * count. "Weights + a camera keeping count" is the whole product in one look.
 * On hover the dumbbell is lifted as if by hand and the count goes up by one.
 *
 * Local frame: origin at the centre of the base, +y up, front toward +z.
 *
 * Room variant, at rest:
 *   mat       x -0.42..0.42, y 0..0.012, z -0.33..0.23
 *   dumbbell  centre (-0.14, 0.072, -0.06): x -0.31..0.03, y 0.012..0.132, z -0.12..0
 *   tripod    base centre (0.28, 0, 0.18), feet 0.155 out from it: x 0.14..0.42, z 0.02..0.27
 *   camera    up to y 0.571 (the record LED on its top)
 *   parts span x -0.42..0.42, y 0..0.571, z -0.33..0.27; the stated size,
 *   0.92 x 0.58 x 0.70 (x +-0.46, z +-0.35), is this slot's footprint and holds them all.
 *
 * Shelf variant (no mat, everything on the shelf board), at rest:
 *   dumbbell  centre (-0.13, 0.06, -0.08): x -0.30..0.04, y 0..0.12, z -0.14..-0.02
 *   tripod    base centre (0.15, 0, 0.04): feet at about (0.13, -0.11), (0.03, 0.13), (0.29, 0.10)
 *   bounds    x -0.30..0.30, y 0..0.571, z -0.14..0.14, so size 0.60 x 0.58 x 0.28.
 */

const BRAND = "#FFB648"

/**
 * How far the dumbbell rises at full hover, and how much it rolls (+x end up,
 * about 6 degrees) and swings (+x end toward the viewer, about 5 degrees)
 * while lifted, as a weight does when one hand takes it by the bar.
 */
const LIFT = 0.14
const LIFT_ROLL = 0.1
const LIFT_YAW = -0.08

/** The record LED is lit for BLINK_ON seconds in every BLINK_PERIOD. */
const BLINK_PERIOD = 2
const BLINK_ON = 0.15

/** The tripod's hub height, and the pivot the camera tilts about (bottom centre of its body). */
const HUB_Y = 0.44
const PIVOT_Y = 0.485
/**
 * The camera looks down about 25 degrees toward the weight, so its back screen
 * tilts up by as much. The viewer is 18 degrees up and 30 degrees right, so
 * this tilt turns the screen toward them more than a level camera would (about
 * 29 degrees off their line of sight in the room, against 31 at 8 degrees),
 * while bringing the lens closer to the true line to the weight (43 degrees down).
 */
const PITCH = -0.44
const LEG_RADIUS = 0.007
const LEG_SPREAD = 0.155

interface Layout {
  mat: boolean
  dumbbell: Vec3
  /** Tripod base centre, on the floor. */
  tripod: Vec3
  size: Vec3
}

const LAYOUTS: Record<"room" | "shelf", Layout> = {
  room: { mat: true, dumbbell: [-0.14, 0.072, -0.06], tripod: [0.28, 0, 0.18], size: [0.92, 0.58, 0.7] },
  // Closer together and pulled in so the whole thing is 0.28 deep.
  shelf: { mat: false, dumbbell: [-0.13, 0.06, -0.08], tripod: [0.15, 0, 0.04], size: [0.6, 0.58, 0.28] },
}

/** The mat, 0.84 x 0.012 x 0.56 centred on (0, 0.006, -0.05). */
const MAT = { width: 0.84, height: 0.012, depth: 0.56, z: -0.05 }

export const aetherform: ProductBuilder = (kit, variant) => {
  const layout = LAYOUTS[variant]
  const group = new THREE.Group()

  // Materials, one object per look so welding merges them.
  const matMat = kit.pair("#3C3F3A", "#8E9488", { roughness: 0.95 })
  const plateMat = kit.glow(BRAND, { dark: 0.12, light: 0.04 }, { roughness: 0.5 })
  const steel = kit.mat("metal", { metalness: 0.7, roughness: 0.35 })
  const darkMetal = kit.mat("metalDark", { metalness: 0.5, roughness: 0.45 })
  const bodyMat = kit.mat("plasticDark", { roughness: 0.6 })
  const glassMat = kit.mat("ink", { metalness: 0.3, roughness: 0.15 })
  // Driven in update, not by the controller: dark red when off, bright red when it blinks.
  const ledMat = kit.glow("#FF3B30", { dark: 1.5, light: 0.8 })
  ledMat.color.set("#4A1A17")

  // The rep counter on the camera's back screen. Declared before the canvas,
  // whose painter runs straight away.
  let reps = 12
  let armed = true
  const screenTexture = kit.canvas(256, 160, (context, width, height) => {
    context.fillStyle = "#000000"
    context.fillRect(0, 0, width, height)
    context.fillStyle = BRAND
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.font = "600 48px " + kit.fonts.display
    context.fillText("REP", width / 2, 36, width - 24)
    context.font = "700 96px " + kit.fonts.display
    context.fillText(String(reps), width / 2, 106, width - 24)
  })
  const screenMat = kit.screen(screenTexture, { dark: 1.0, light: 1.0 })

  // Everything that never moves.
  const still = new THREE.Group()

  if (layout.mat) {
    still.add(kit.mesh(kit.box(MAT.width, MAT.height, MAT.depth, 0.006), matMat, [0, MAT.height / 2, MAT.z]))
  }

  // The tripod, built about its own base centre.
  const tripod = new THREE.Group()
  tripod.position.set(...layout.tripod)
  still.add(tripod)

  const [tx, , tz] = layout.tripod
  const [dx, , dz] = layout.dumbbell
  // Direction (as an angle about +y, 0 = toward +z) from the tripod to the dumbbell.
  const lensAzimuth = Math.atan2(dx - tx, dz - tz)

  // Three legs, the lens looking out between two of them and the third behind.
  const up = new THREE.Vector3(0, 1, 0)
  const top = new THREE.Vector3(0, HUB_Y, 0)
  for (const offset of [Math.PI / 3, -Math.PI / 3, Math.PI]) {
    const azimuth = lensAzimuth + offset
    const footX = Math.sin(azimuth) * LEG_SPREAD
    const footZ = Math.cos(azimuth) * LEG_SPREAD
    // A foot that lands on the mat stands on its top, not inside it.
    const worldX = tx + footX
    const worldZ = tz + footZ
    const onMat =
      layout.mat &&
      Math.abs(worldX) <= MAT.width / 2 &&
      worldZ >= MAT.z - MAT.depth / 2 &&
      worldZ <= MAT.z + MAT.depth / 2
    const ground = onMat ? MAT.height : 0
    // Lift the axis end by r sin(splay) so the tilted end cap's lowest edge just touches the ground.
    const splay = Math.atan2(LEG_SPREAD, HUB_Y - ground)
    const foot = new THREE.Vector3(footX, ground + LEG_RADIUS * Math.sin(splay), footZ)
    const along = new THREE.Vector3().subVectors(top, foot)
    // A leg on the mat is 12 mm shorter than one on the floor.
    const leg = kit.mesh(kit.cylinder(LEG_RADIUS, LEG_RADIUS, along.length(), 8), darkMetal, undefined, undefined, {
      cast: false,
    })
    leg.position.copy(foot).addScaledVector(along, 0.5)
    leg.quaternion.setFromUnitVectors(up, along.normalize())
    tripod.add(leg)
  }

  // Hub where the legs meet (y 0.425..0.455), and the pan head on it (y 0.455..0.472).
  tripod.add(kit.mesh(kit.cylinder(0.02, 0.02, 0.03, 16), darkMetal, [0, HUB_Y, 0]))
  tripod.add(kit.mesh(kit.cylinder(0.016, 0.016, 0.017, 16), darkMetal, [0, 0.4635, 0]))

  // The head turns the camera about +y. In the camera's own frame the lens
  // looks along -z and the screen faces +z, so turning local +z toward the
  // direction away from the dumbbell aims the lens at it and the back (with
  // the screen) at the viewer, who is in front and to the right.
  const head = new THREE.Group()
  head.position.set(0, PIVOT_Y, 0)
  head.rotation.y = Math.atan2(tx - dx, tz - dz)
  tripod.add(head)

  // Tilted about local x, origin at the bottom centre of the body. With
  // rotation.x negative, y' = y cos - z sin sends the lens (-z) down and the
  // back (+z) up: the rounded back-top edge ends at y 0.570, the LED's top at
  // 0.571. The front-bottom edge drops to 0.470, but 32 mm out from the axis,
  // clear of the 16 mm pan head.
  const camera = new THREE.Group()
  camera.rotation.x = PITCH
  head.add(camera)

  // Tilt bracket under the body (local y -0.030..0.002, 2 mm up into the body).
  // Tilted 25 degrees, even its highest bottom corner (y 0.466) is below the
  // pan head's top (0.472), so the camera never floats above its mount.
  camera.add(kit.mesh(kit.box(0.04, 0.032, 0.04), darkMetal, [0, -0.014, 0]))
  // Body: 0.12 x 0.08 x 0.07, local y 0..0.08, z -0.035..0.035. An 8 mm
  // radius leaves a flat back of 0.104 x 0.064, so the 0.10 x 0.06 screen
  // never overhangs the rounded edge.
  camera.add(kit.mesh(kit.box(0.12, 0.08, 0.07, 0.008), bodyMat, [0, 0.04, 0]))
  // Lens barrel from the front face forward: z -0.075..-0.035.
  camera.add(kit.mesh(kit.cylinder(0.03, 0.03, 0.04, 24), darkMetal, [0, 0.04, -0.055], [Math.PI / 2, 0, 0]))
  // Amber ring round the barrel near its tip (a torus lies in xy, so its axis is already z).
  camera.add(kit.mesh(new THREE.TorusGeometry(0.03, 0.006, 8, 24), plateMat, [0, 0.04, -0.072]))
  // Glass, 3 mm proud of the barrel's front cap (z -0.078..-0.075).
  camera.add(
    kit.mesh(kit.cylinder(0.022, 0.022, 0.003, 20), glassMat, [0, 0.04, -0.0765], [Math.PI / 2, 0, 0], {
      noBlueprint: true,
    })
  )
  // Screen on the back face (z 0.035), 1.5 mm in front of it.
  camera.add(
    kit.mesh(new THREE.PlaneGeometry(0.1, 0.06), screenMat, [0, 0.04, 0.0365], undefined, {
      cast: false,
      noBlueprint: true,
    })
  )
  // Record LED, half sunk into the flat of the top near the back right corner.
  camera.add(kit.mesh(kit.sphere(0.008, 12), ledMat, [0.04, 0.08, 0.012], undefined, { noBlueprint: true }))

  kit.weld(still)
  group.add(still)

  // The dumbbell, lying along x, with its origin at its own centre so it lifts
  // and rolls about that point. Plates are 0.06 in radius, so at rest it sits
  // on the mat top (room) or on the shelf (shelf).
  const dumbbell = new THREE.Group()
  dumbbell.position.set(...layout.dumbbell)
  const alongX: Vec3 = [0, 0, Math.PI / 2]
  // Bar x -0.17..0.17.
  dumbbell.add(kit.mesh(kit.cylinder(0.014, 0.014, 0.34, 12), steel, [0, 0, 0], alongX))
  for (const side of [-1, 1]) {
    // Plate x 0.095..0.145, then a collar hugging its outer face (0.144..0.164).
    dumbbell.add(kit.mesh(kit.cylinder(0.06, 0.06, 0.05, 24), plateMat, [side * 0.12, 0, 0], alongX))
    dumbbell.add(kit.mesh(kit.cylinder(0.03, 0.03, 0.02, 16), steel, [side * 0.154, 0, 0], alongX))
  }
  kit.weld(dumbbell)
  group.add(dumbbell)

  const restY = layout.dumbbell[1]
  let ledOn = true

  return {
    group,
    size: layout.size,
    mount: "surface",
    glow: [plateMat, screenMat],
    update(frame) {
      const hover = frame.hover
      // Lifted straight up. Euler order XYZ applies z first: rotation.z > 0
      // turns +x toward +y (the +x end rises), then rotation.y < 0 turns +x
      // toward +z (that end swings toward the viewer). The roll dips the -x
      // plate by at most 0.145 sin(0.1) = 0.015 while the rise is 0.14, so no
      // part of it ever dips into the mat or shelf.
      dumbbell.position.y = restY + LIFT * hover
      dumbbell.rotation.z = LIFT_ROLL * hover
      dumbbell.rotation.y = LIFT_YAW * hover

      // One rep each time the lift completes; it re-arms once the weight is back down.
      if (armed && hover > 0.9) {
        armed = false
        reps += 1
        kit.repaint(screenTexture)
      } else if (!armed && hover < 0.2) {
        armed = true
      }

      // Under reduced motion time stays 0, which falls in the lit window, so the LED stays on.
      const on = frame.time % BLINK_PERIOD < BLINK_ON
      const rest = (ledMat.userData.restGlow as number | undefined) ?? 0
      ledMat.emissiveIntensity = on ? rest * frame.built : 0
      const switched = on !== ledOn
      ledOn = on
      return switched
    },
  }
}
