import * as THREE from "three"
import type { ProductBuilder } from "../types"

/**
 * Veyra: "an undo button for software teams".
 *
 * Built as the thing itself: a chunky arcade-style UNDO button on a small
 * sloped console. A big orange cap with a curved counter-clockwise arrow on it
 * and the word UNDO on the front is understood by anyone, technical or not.
 * On hover the cap presses in and the arrow winds back one full turn.
 *
 * Frames used below (all in metres):
 *   - the object frame: origin at the middle of the base, +z toward the viewer;
 *   - the cap frame: origin on the middle of the slope, +y along the slope
 *     normal, so the cap's xz-plane IS the slope surface.
 */

const ORANGE = "#FF7A1A"
const CREAM = "#FFF4E6"
const HOUSING_DARK = "#2A2420"
const HOUSING_LIGHT = "#3B332C"

// Housing: a wedge, low at the front (+z) and rising toward the back.
const WIDTH = 0.42
const HALF_DEPTH = 0.18
const FRONT_HEIGHT = 0.07
const BACK_HEIGHT = 0.2
const BEVEL = 0.008

// The slope rises 0.13 over 0.36 toward the back: about 19.9 degrees. Turning
// the cap frame by this about +x maps its +y onto the slope normal
// (0, cos, sin), which leans up and toward the viewer.
const SLOPE_ANGLE = Math.atan2(BACK_HEIGHT - FRONT_HEIGHT, 2 * HALF_DEPTH)
/** Height of the slope at z = 0, where the cap sits. */
const SLOPE_MID = (FRONT_HEIGHT + BACK_HEIGHT) / 2

// Cap, in the cap frame.
const COLLAR_RADIUS = 0.132
const COLLAR_TUBE = 0.01
/** Sunk 4 mm into the slope so the ring reads as set into the console, not resting on it. */
const COLLAR_Y = COLLAR_TUBE - 0.004
const SKIRT_RADIUS = 0.12
const SKIRT_HEIGHT = 0.03
/** The skirt also starts 4 mm below the slope, so there is never a seam at its foot. */
const SKIRT_TOP = SKIRT_HEIGHT - 0.004
const DOME_RISE = 0.06
/** The dome is a spherical cap: rim radius 0.12, rise 0.06, so its sphere has radius 0.15. */
const DOME_SPHERE = (SKIRT_RADIUS * SKIRT_RADIUS + DOME_RISE * DOME_RISE) / (2 * DOME_RISE)
/** Height of the dome's sphere centre in the cap frame (below the skirt). */
const DOME_CENTRE = SKIRT_TOP + DOME_RISE - DOME_SPHERE

/** Height of the dome surface at distance `r` from the cap's axis. */
const domeHeight = (r: number) => DOME_CENTRE + Math.sqrt(DOME_SPHERE * DOME_SPHERE - r * r)

// The undo arrow.
const ARC_RADIUS = 0.065
const ARC_TUBE = 0.011
/** The tube's centre line runs 5 mm above the dome, so about two thirds of it stands proud. */
const ARC_HEIGHT = domeHeight(ARC_RADIUS) + 0.005
/**
 * Angles about the cap axis, counter-clockwise seen from above (the sense of a
 * positive turn about +y). 0 points to +x, 90 degrees to the back. The arc runs
 * 270 degrees from the lower left round through the front, the right and the
 * top, so the head lands at the upper left pointing down-left, leaving the
 * gap on the left side: the familiar anticlockwise "undo" arrow.
 */
const ARC_START = (225 * Math.PI) / 180
const ARC_SWEEP = (270 * Math.PI) / 180
const HEAD_RADIUS = 0.026
const HEAD_LENGTH = 0.045
/** The head is flattened against the dome so it reads as a triangle from above. */
const HEAD_SQUASH = 0.6
/**
 * The head leaves the arc on a straight line while the dome falls away under
 * it; tipping it 12 degrees toward the dome keeps its tip about 2 mm clear of
 * the surface instead of 13 mm in the air.
 */
const HEAD_TILT = (12 * Math.PI) / 180

// Hover gesture.
const PRESS_DEPTH = 0.016
const PRESS_PEAK = 0.35

const smooth = (t: number) => {
  const c = t < 0 ? 0 : t > 1 ? 1 : t
  return c * c * (3 - 2 * c)
}

/** 0 → 1 by hover 0.35, then settles to a third, so the cap stays a little pressed while pointed at. */
const pressAmount = (hover: number) =>
  hover < PRESS_PEAK ? smooth(hover / PRESS_PEAK) : 1 - (2 / 3) * smooth((hover - PRESS_PEAK) / (1 - PRESS_PEAK))

/** A level circular arc in the xz-plane, angles counter-clockwise seen from above. */
class LevelArc extends THREE.Curve<THREE.Vector3> {
  readonly radius: number
  readonly height: number
  readonly start: number
  readonly sweep: number

  constructor(radius: number, height: number, start: number, sweep: number) {
    super()
    this.radius = radius
    this.height = height
    this.start = start
    this.sweep = sweep
  }

  getPoint(t: number, target: THREE.Vector3 = new THREE.Vector3()): THREE.Vector3 {
    const angle = this.start + this.sweep * t
    return target.set(this.radius * Math.cos(angle), this.height, -this.radius * Math.sin(angle))
  }
}

export const veyra: ProductBuilder = (kit) => {
  const group = new THREE.Group()

  const housingMat = kit.pair(HOUSING_DARK, HOUSING_LIGHT, { roughness: 0.6 })
  const steelMat = kit.mat("metal", { roughness: 0.35, metalness: 0.6 })
  const skirtMat = kit.color("#E2650F", { roughness: 0.45 })
  const domeMat = kit.glow(ORANGE, { dark: 0.25, light: 0.08 }, { roughness: 0.35 })
  const arrowMat = kit.color(CREAM, { roughness: 0.5 })

  // ── The console: everything that never moves ──
  const body = new THREE.Group()
  group.add(body)

  // Side profile drawn in (z, y). bevelOffset = -BEVEL keeps the body of the
  // extrusion on the true profile and only insets the two end caps, so the
  // rounded ends stay inside the 0.42 width.
  const profile = new THREE.Shape()
  profile.moveTo(-HALF_DEPTH, 0)
  profile.lineTo(HALF_DEPTH, 0)
  profile.lineTo(HALF_DEPTH, FRONT_HEIGHT)
  profile.lineTo(-HALF_DEPTH, BACK_HEIGHT)
  profile.closePath()
  const run = WIDTH - 2 * BEVEL
  const housingGeo = new THREE.ExtrudeGeometry(profile, {
    depth: run,
    bevelEnabled: true,
    bevelThickness: BEVEL,
    bevelSize: BEVEL,
    bevelOffset: -BEVEL,
    bevelSegments: 2,
    curveSegments: 1,
  })
  // Extruded along +z from -BEVEL to run + BEVEL; centre that on 0 (±0.21).
  housingGeo.translate(0, 0, -run / 2)
  // Turning -90 degrees about y maps (x, y, z) to (-z, y, x): the drawn profile
  // x becomes the object's z (slope rising toward the back) and the extrusion
  // runs along x.
  body.add(kit.mesh(housingGeo, housingMat, [0, 0, 0], [0, -Math.PI / 2, 0]))

  // Front label: "UNDO" in brand orange on the housing's own colour.
  const labelTexture = kit.canvas(512, 72, (context, width, height, _palette, theme) => {
    context.fillStyle = theme === "dark" ? HOUSING_DARK : HOUSING_LIGHT
    context.fillRect(0, 0, width, height)
    context.font = "700 56px " + kit.fonts.display
    context.fillStyle = ORANGE
    context.textAlign = "left"
    context.textBaseline = "alphabetic"
    const word = "UNDO"
    const spacing = 18
    let total = spacing * (word.length - 1)
    for (const letter of word) total += context.measureText(letter).width
    // Centre the capitals themselves, not the font's line box.
    const ascent = context.measureText(word).actualBoundingBoxAscent
    const baseline = height / 2 + ascent / 2
    let x = (width - total) / 2
    for (const letter of word) {
      context.fillText(letter, x, baseline)
      x += context.measureText(letter).width + spacing
    }
  })
  const labelMat = kit.color("#ffffff", { map: labelTexture, roughness: 0.6 })
  // 1.5 mm proud of the front face (z = 0.18), which spans y 0 to 0.07.
  body.add(
    kit.mesh(new THREE.PlaneGeometry(0.36, 0.05), labelMat, [0, 0.035, HALF_DEPTH + 0.0015], undefined, {
      cast: false,
      noBlueprint: true,
    })
  )

  // ── The cap, set into the middle of the slope ──
  const cap = new THREE.Group()
  cap.position.set(0, SLOPE_MID, 0)
  cap.rotation.x = SLOPE_ANGLE
  group.add(cap)

  // Steel collar lying on the slope (a torus is built in xy; -90 degrees about x lays it in xz).
  cap.add(
    kit.mesh(
      new THREE.TorusGeometry(COLLAR_RADIUS, COLLAR_TUBE, 8, 24),
      steelMat,
      [0, COLLAR_Y, 0],
      [-Math.PI / 2, 0, 0]
    )
  )

  // The part that presses: skirt, dome and arrow. Its origin is on the slope,
  // so moving it along -y pushes it straight into the console.
  const press = new THREE.Group()
  cap.add(press)

  press.add(kit.mesh(kit.cylinder(SKIRT_RADIUS, SKIRT_RADIUS, SKIRT_HEIGHT), skirtMat, [0, SKIRT_TOP - SKIRT_HEIGHT / 2, 0]))

  // Dome profile from the rim (r 0.12, y 0) up to the crown (r 0, y 0.06).
  // Rising y with falling r gives outward-facing normals in LatheGeometry.
  const domePoints: THREE.Vector2[] = []
  const rimAngle = Math.asin((DOME_SPHERE - DOME_RISE) / DOME_SPHERE)
  const steps = 8
  for (let i = 0; i <= steps; i++) {
    const angle = rimAngle + ((Math.PI / 2 - rimAngle) * i) / steps
    const r = i === steps ? 0 : DOME_SPHERE * Math.cos(angle)
    domePoints.push(new THREE.Vector2(r, DOME_SPHERE * Math.sin(angle) - (DOME_SPHERE - DOME_RISE)))
  }
  press.add(kit.mesh(new THREE.LatheGeometry(domePoints, 24), domeMat, [0, SKIRT_TOP, 0]))

  // ── The undo arrow, its own group so it can wind about the cap's axis ──
  const arrow = new THREE.Group()
  press.add(arrow)

  const arc = new LevelArc(ARC_RADIUS, ARC_HEIGHT, ARC_START, ARC_SWEEP)
  arrow.add(kit.mesh(new THREE.TubeGeometry(arc, 16, ARC_TUBE, 6, false), arrowMat))
  // Round off the open tail of the tube.
  arrow.add(kit.mesh(kit.sphere(ARC_TUBE, 10), arrowMat, [arc.getPoint(0).x, ARC_HEIGHT, arc.getPoint(0).z]))

  // Arrow head at the leading end, pointing on along the arc.
  const end = ARC_START + ARC_SWEEP
  const radial = new THREE.Vector3(Math.cos(end), 0, -Math.sin(end))
  // d/dangle of (cos, -sin): the direction of counter-clockwise travel.
  const along = new THREE.Vector3(-Math.sin(end), 0, -Math.cos(end))
  // The dome's surface normal under the end of the arc.
  const normal = radial
    .clone()
    .multiplyScalar(ARC_RADIUS)
    .add(new THREE.Vector3(0, domeHeight(ARC_RADIUS) - DOME_CENTRE, 0))
    .normalize()
  const heading = along.multiplyScalar(Math.cos(HEAD_TILT)).addScaledVector(normal, -Math.sin(HEAD_TILT))
  // The tilted heading is no longer square to the dome normal, so rebuild an
  // orthonormal frame from it: otherwise the basis shears the cone.
  const side = new THREE.Vector3().crossVectors(heading, normal).normalize()
  const lift = new THREE.Vector3().crossVectors(side, heading)
  // Cone axis (y) along the heading, its flattened direction (z) as near the
  // dome normal as the tilt allows; side x heading = lift keeps it right-handed.
  const placement = new THREE.Matrix4().makeBasis(side, heading, lift)
  placement.setPosition(arc.getPoint(1))
  const headGeo = new THREE.ConeGeometry(HEAD_RADIUS, HEAD_LENGTH, 12)
  headGeo.translate(0, HEAD_LENGTH / 2, 0)
  headGeo.scale(1, 1, HEAD_SQUASH)
  headGeo.applyMatrix4(placement)
  arrow.add(kit.mesh(headGeo, arrowMat))

  kit.weld(body)
  kit.weld(arrow)

  // The true bounding box at rest, measured from the vertices, kept centred on
  // the base so it matches the object's origin.
  group.updateMatrixWorld(true)
  const bounds = new THREE.Box3().setFromObject(group, true)
  const size: [number, number, number] = [
    2 * Math.max(Math.abs(bounds.min.x), Math.abs(bounds.max.x)),
    bounds.max.y,
    2 * Math.max(Math.abs(bounds.min.z), Math.abs(bounds.max.z)),
  ]

  return {
    group,
    size,
    mount: "surface",
    glow: [domeMat],
    update(frame) {
      press.position.y = -PRESS_DEPTH * pressAmount(frame.hover)
      // A positive turn about the cap's +y is counter-clockwise seen from above it.
      arrow.rotation.y = Math.PI * 2 * smooth(frame.hover)
      return false
    },
  }
}
