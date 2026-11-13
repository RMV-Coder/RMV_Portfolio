import * as THREE from "three"
import type { Anchor, EnvironmentBuilder, Layout, Vec3 } from "./types"

/**
 * The tools-page shelf: the same product objects standing in a row on a
 * wooden shelf fixed to a wall, seen almost straight on, like an elevation
 * drawing. On a short band it becomes two shelves, one above the other.
 *
 * Frame: the wall's face is the plane z = 0, the shelf sticks out toward +z,
 * and x runs along the shelf.
 */

/** Width of one product's slot along the shelf. */
const SLOT = 0.84
/** Plank overhang beyond the outermost slots, both ends together. */
const PLANK_EXTRA = 0.2
const PLANK_THICK = 0.05
const PLANK_DEPTH = 0.4
const PLANK_RADIUS = 0.012
/** Top of the shelf when there is one row, and of the lower of two rows. */
const ROW_LOW = 0.4
/** Top of the upper shelf when there are two rows. */
const ROW_HIGH = 1.1
/** Brackets at the plank ends sit this far in from each end. */
const BRACKET_INSET = 0.25
/** Where surface products stand, and where wall boards lean. */
const SURFACE_Z = 0.21
const WALL_Z = 0.012

/** The middle of what is shown, which the lights aim at. */
const CENTRE_X = 0
const CENTRE_Y = 0.75
const CENTRE_Z = 0.2

const PLACEMENT: Record<string, { scale: number; wall: boolean }> = {
  localpass: { scale: 0.85, wall: false },
  veltriva: { scale: 1.0, wall: false },
  emmaus: { scale: 1.5, wall: false },
  syntaxlab: { scale: 0.7, wall: true },
  "calculus-solver": { scale: 0.8, wall: true },
  veyra: { scale: 1.3, wall: false },
  omnigraph: { scale: 0.7, wall: true },
  aetherform: { scale: 1.0, wall: false },
  myboardhub: { scale: 0.8, wall: false },
}

interface ShelfUnit {
  /** Origin at the plank's top surface, on the wall, at x = 0. */
  root: THREE.Group
  plank: THREE.Mesh
  strip: THREE.Mesh
  /** Left end, centre, right end. Each has its origin at the plank's top surface on the wall (same height as root). */
  brackets: THREE.Group[]
}

export const buildShelf: EnvironmentBuilder = (kit) => {
  const group = new THREE.Group()
  group.name = "shelf-environment"

  // ── Wall ──────────────────────────────────────────────────────────────
  const wall = kit.mesh(new THREE.PlaneGeometry(60, 12), kit.mat("wall"), [CENTRE_X, CENTRE_Y, 0], undefined, {
    cast: false,
    receive: true,
    noBlueprint: true,
  })
  wall.name = "wall"
  group.add(wall)

  // ── Materials, shared so welding can merge by look ────────────────────
  const wood = kit.mat("wood", { roughness: 0.6 })
  const brassTrim = kit.trim("brass", { dark: 0.3, light: 0.08 }, { metalness: 0.6, roughness: 0.4 })
  const bracketMetal = kit.pair("#A8875A", "#87590F", { metalness: 0.8, roughness: 0.35 })

  // ── Planks ────────────────────────────────────────────────────────────
  // The rounded plank is rebuilt when its length changes (scaling it would
  // stretch the rounded ends); both planks share the one geometry.
  let plankLength = 8 * SLOT + PLANK_EXTRA
  let plankGeometry = kit.box(plankLength, PLANK_THICK, PLANK_DEPTH, PLANK_RADIUS)
  // A plain unit-length box: scaling it along x is exact.
  const stripGeometry = kit.box(1, 0.012, 0.01)

  /** One L-bracket: a leg against the wall, an arm under the plank, and a diagonal brace. */
  const makeBracket = (): THREE.Group => {
    const bracket = new THREE.Group()
    // Leg: x ±0.015, y -0.25..-0.05, z 0..0.02 (flat on the wall, under the plank).
    bracket.add(kit.mesh(kit.box(0.03, 0.2, 0.02), bracketMetal, [0, -PLANK_THICK - 0.1, 0.01]))
    // Arm: x ±0.015, y -0.07..-0.05 (touching the plank's underside), z 0.02..0.36.
    bracket.add(kit.mesh(kit.box(0.03, 0.02, 0.34), bracketMetal, [0, -PLANK_THICK - 0.01, 0.19]))
    // Brace from (y -0.24, z 0.02) on the leg to (y -0.07, z 0.19) under the arm.
    // rotation.x = -PI/4 turns the box's +z axis to (0, sin 45°, cos 45°): up and out.
    // Its end corners stay inside the leg (z >= 0.014, y >= -0.246) and the arm (y <= -0.064).
    bracket.add(
      kit.mesh(kit.box(0.024, 0.016, 0.24), bracketMetal, [0, -0.155, 0.105], [-Math.PI / 4, 0, 0])
    )
    kit.weld(bracket)
    return bracket
  }

  const makeUnit = (name: string): ShelfUnit => {
    const root = new THREE.Group()
    root.name = name
    // Plank: x ±L/2, y -0.05..0 (top at the row height), z 0..0.40 (back on the wall).
    const plank = kit.mesh(plankGeometry, wood, [0, -PLANK_THICK / 2, PLANK_DEPTH / 2])
    // Brass strip on the front top edge: y -0.014..-0.002, z 0.397..0.407,
    // x ±(L - 0.03)/2, inside the plank's rounded ends.
    const strip = kit.mesh(stripGeometry, brassTrim, [0, -0.008, PLANK_DEPTH + 0.002], undefined, {
      cast: false,
      noBlueprint: true,
    })
    root.add(plank, strip)
    const brackets = [makeBracket(), makeBracket(), makeBracket()]
    brackets.forEach((bracket) => root.add(bracket))
    group.add(root)
    return { root, plank, strip, brackets }
  }

  const units: ShelfUnit[] = [makeUnit("shelf-upper"), makeUnit("shelf-lower")]

  const setPlankLength = (length: number) => {
    if (Math.abs(length - plankLength) > 1e-6) {
      const previous = plankGeometry
      plankGeometry = kit.box(length, PLANK_THICK, PLANK_DEPTH, PLANK_RADIUS)
      units.forEach((unit) => {
        unit.plank.geometry = plankGeometry
      })
      previous.dispose()
      plankLength = length
    }
    const end = length / 2 - BRACKET_INSET
    units.forEach((unit) => {
      unit.strip.scale.x = length - 0.03
      unit.brackets[0].position.set(-end, 0, 0)
      unit.brackets[1].position.set(0, 0, 0)
      unit.brackets[2].position.set(end, 0, 0)
    })
  }

  /** Puts the planks at the given row tops (one or two) and sizes them. */
  const arrange = (tops: number[], length: number) => {
    setPlankLength(length)
    units[0].root.position.set(0, tops[0], 0)
    units[0].root.visible = true
    const second = tops.length > 1
    units[1].root.position.set(0, second ? tops[1] : ROW_LOW, 0)
    units[1].root.visible = second
  }

  arrange([ROW_LOW], plankLength)

  // ── Lights ────────────────────────────────────────────────────────────
  const skyNight = new THREE.Color("#7C8DB5")
  const groundNight = new THREE.Color("#2A211B")
  const skyDay = new THREE.Color("#F4EEE5")
  const groundDay = new THREE.Color("#CBB89A")
  const hemi = new THREE.HemisphereLight(skyNight, groundNight, 0.6)
  group.add(hemi)

  const keyNight = new THREE.Color("#FFC27A")
  const keyDay = new THREE.Color("#FFF1DC")
  const key = new THREE.DirectionalLight(keyNight, 2.2)
  key.name = "key"
  key.castShadow = true
  key.shadow.mapSize.set(2048, 1024)
  const shadowCamera = key.shadow.camera
  shadowCamera.left = -4.2
  shadowCamera.right = 4.2
  shadowCamera.top = 1.6
  shadowCamera.bottom = -1.6
  shadowCamera.near = 0.5
  shadowCamera.far = 14
  shadowCamera.updateProjectionMatrix()
  key.shadow.bias = -0.0004
  key.shadow.normalBias = 0.02
  key.shadow.radius = 4
  // A plank throws a broad shadow down the wall; at full strength it reads as a grey slab under the shelf.
  key.shadow.intensity = 0.6
  key.target.position.set(CENTRE_X, CENTRE_Y, CENTRE_Z)
  group.add(key, key.target)

  const fill = new THREE.DirectionalLight("#9DB4D6", 0.35)
  fill.name = "fill"
  fill.castShadow = false
  fill.position.set(CENTRE_X - 3.0, CENTRE_Y + 1.2, CENTRE_Z + 4.0)
  fill.target.position.set(CENTRE_X, CENTRE_Y, CENTRE_Z)
  group.add(fill, fill.target)

  let shadowsWanted = true
  let shadowsOn = true

  /** Mixes every light for the current daylight and room power. Allocates nothing. */
  const mix = (power: number) => {
    const day = kit.daylight
    const night = 1 - day

    hemi.color.lerpColors(skyNight, skyDay, day)
    hemi.groundColor.lerpColors(groundNight, groundDay, day)
    hemi.intensity = 0.6 * night + 0.8 * day

    key.color.lerpColors(keyNight, keyDay, day)
    key.intensity = 2.2 * power * night + 1.9 * (0.65 + 0.35 * power) * day
    // Low and from the front, so the plank's shadow on the wall stays a narrow band.
    key.position.set(
      CENTRE_X + 0.6 * night + 2.0 * day,
      CENTRE_Y + 2.4 * night + 2.8 * day,
      CENTRE_Z + 4.4 * night + 4.8 * day
    )

    fill.intensity = 0.35 * night + 0.15 * day

    if (shadowsWanted !== shadowsOn) {
      key.castShadow = shadowsWanted
      shadowsOn = shadowsWanted
    }
  }

  mix(0)

  // ── Layout ────────────────────────────────────────────────────────────
  const layout = (mode: "wide" | "compact", slugs: string[]): Layout => {
    const count = slugs.length
    const twoRows = mode === "compact" && count > 3
    const firstCount = twoRows ? Math.ceil(count / 2) : count
    const rows: string[][] = twoRows ? [slugs.slice(0, firstCount), slugs.slice(firstCount)] : [slugs]
    const tops = twoRows ? [ROW_HIGH, ROW_LOW] : [ROW_LOW]

    const widest = Math.max(1, ...rows.map((row) => row.length))
    const length = widest * SLOT + PLANK_EXTRA
    arrange(tops, length)

    const anchors: Record<string, Anchor> = {}
    rows.forEach((row, rowIndex) => {
      const top = tops[rowIndex]
      row.forEach((slug, index) => {
        const placement = PLACEMENT[slug] ?? { scale: 1, wall: false }
        anchors[slug] = {
          position: [(index - (row.length - 1) / 2) * SLOT, top, placement.wall ? WALL_Z : SURFACE_Z],
          rotationY: 0,
          scale: placement.scale,
        }
      })
    })

    const half = length / 2 + 0.05
    const low = Math.min(...tops) - 0.3
    const high = Math.max(...tops) + 0.78
    const keep: Vec3[] = []
    for (const x of [-half, half]) {
      for (const y of [low, high]) {
        for (const z of [0, PLANK_DEPTH]) keep.push([x, y, z])
      }
    }

    return {
      anchors,
      camera: { direction: [0, 0.139, 0.99], fov: 14 },
      keep,
    }
  }

  return {
    group,
    height: 1.95,
    // The wall runs well below the shelf; start under the lowest part a short band can show.
    floor: -1.5,
    layout,
    setShadows(enabled) {
      shadowsWanted = enabled
      shadowsOn = enabled
      key.castShadow = enabled
    },
    update(frame) {
      mix(frame.power)
    },
  }
}
