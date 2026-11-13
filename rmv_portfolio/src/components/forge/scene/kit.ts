import * as THREE from "three"
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js"
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js"
import type {
  CanvasPainter,
  GlowLevels,
  MaterialOptions,
  MeshOptions,
  SceneFonts,
  SceneKit,
  ScenePalette,
  SceneTheme,
  Vec3,
} from "./types"

/**
 * The room's colours by theme: the study at night, lit by a lamp, and the same
 * study in morning light. Furniture is deliberately quiet in both, so that the
 * products, which bring their own accents, are what the eye lands on.
 *
 * These are surface colours before lighting, so the night set is mid-toned
 * rather than dark: the darkness comes from the light, not the paint, which
 * is what lets a lamp leave a visible pool on a wall.
 */
export const PALETTES: Record<SceneTheme, ScenePalette> = {
  dark: {
    wall: "#5a524b",
    wallShade: "#443d37",
    floor: "#6b5d50",
    floorLine: "#52463c",
    rug: "#5f564f",
    rugTrim: "#8c8072",
    wood: "#74665a",
    woodDark: "#4c423a",
    metal: "#8d8a86",
    metalDark: "#3a3836",
    plastic: "#d6d0c6",
    plasticDark: "#2b2927",
    paper: "#ece6da",
    ink: "#2a2522",
    fabric: "#6a625b",
    glass: "#9fb6c4",
    blueprint: "#7fd6e8",
    ember: "#ff7a1a",
    brass: "#e8b86d",
    screen: "#10161c",
    skyTop: "#0d1530",
    skyBottom: "#2b3460",
    celestial: "#f6efd9",
    lampGlow: "#ffc98a",
  },
  light: {
    wall: "#ece6dc",
    wallShade: "#d9d1c4",
    floor: "#cec5b7",
    floorLine: "#b5ab9c",
    rug: "#dcd3c6",
    rugTrim: "#b8ad9f",
    wood: "#a3968a",
    woodDark: "#7d7166",
    metal: "#aaa7a1",
    metalDark: "#4a4744",
    plastic: "#f1ece3",
    plasticDark: "#3a3633",
    paper: "#fbf7ef",
    ink: "#2a2522",
    fabric: "#8e8479",
    glass: "#bfe0ee",
    blueprint: "#17637a",
    ember: "#9c3d08",
    brass: "#b8862b",
    screen: "#1b242c",
    skyTop: "#9ccbea",
    skyBottom: "#e6f2f8",
    celestial: "#fff3c4",
    lampGlow: "#ffe2b8",
  },
}

/** Seconds a theme change takes to cross-fade. */
const CROSS_FADE = 0.6
/** Edges sharper than this many degrees are drawn in the blueprint. */
const EDGE_ANGLE = 35

/** A line drawing of a group of meshes: the blueprint that group is built from. */
export interface Outline {
  lines: THREE.LineSegments
  material: THREE.LineBasicMaterial
  /** How many segments the drawing has. They are ordered bottom-most first, so a draw range wipes upward. */
  segments: number
}

/** The kit as the controller sees it: everything builders get, plus the levers only it pulls. */
export interface Kit extends SceneKit {
  /**
   * Everything made by this kit is cut by this plane: whatever lies above
   * `clip.constant` (a height in metres) is not drawn. Raising it builds the
   * object up from the floor; lowering it dissolves the object back into its
   * drawing.
   */
  readonly clip: THREE.Plane
  /** A kit for one object: the same theme and colours, with a cutting plane of its own. */
  scope(): Kit
  /** Starts a cross-fade to `theme`, or jumps to it. */
  setTheme(theme: SceneTheme, immediately?: boolean): void
  /** Advances any cross-fade. Returns true if something visible changed and the scene needs redrawing. */
  tick(seconds: number): boolean
  /**
   * A line drawing of everything under `root`, in `root`'s own space. Rounded
   * boxes are drawn as their plain outline, so it reads as drafting rather
   * than as a wireframe mesh. The drawing starts invisible (opacity 0).
   */
  blueprint(root: THREE.Object3D): Outline
  dispose(): void
}

interface Shared {
  theme: SceneTheme
  /** Linear progress toward daylight, and where it is heading. */
  blend: number
  target: number
  /** `blend`, eased. */
  daylight: number
  dirty: boolean
  disposed: boolean
  themed: { material: THREE.MeshStandardMaterial; dark: THREE.Color; light: THREE.Color; selfLit: boolean }[]
  glowing: { material: THREE.MeshStandardMaterial; levels: GlowLevels }[]
  painted: { texture: THREE.CanvasTexture; paint: CanvasPainter }[]
  outlines: THREE.LineBasicMaterial[]
}

const smooth = (t: number) => t * t * (3 - 2 * t)

/** The site's own typefaces, so lettering in the scene matches the page around it. */
function readFonts(): SceneFonts {
  const style = getComputedStyle(document.body)
  const family = (variable: string, fallback: string) => {
    const value = style.getPropertyValue(variable).trim()
    return value ? `${value}, ${fallback}` : fallback
  }
  return {
    display: family("--font-display-face", "sans-serif"),
    body: family("--font-body", "sans-serif"),
    mono: family("--font-mono-face", "monospace"),
  }
}

/** The outline of one mesh, in the mesh's own space. The caller owns the result. */
function edgesOf(mesh: THREE.Mesh): THREE.BufferGeometry {
  const prepared = mesh.userData.outline as THREE.BufferGeometry | undefined
  if (prepared) return prepared.clone()
  const blockout = mesh.geometry.userData.blockout as Vec3 | undefined
  if (!blockout) return new THREE.EdgesGeometry(mesh.geometry, EDGE_ANGLE)
  const plain = new THREE.BoxGeometry(...blockout)
  const edges = new THREE.EdgesGeometry(plain, EDGE_ANGLE)
  plain.dispose()
  return edges
}

/** Reverses every triangle of an unindexed geometry, for parts mirrored with a negative scale. */
function flipWinding(geometry: THREE.BufferGeometry) {
  for (const attribute of Object.values(geometry.attributes)) {
    const { array, itemSize } = attribute as THREE.BufferAttribute
    for (let triangle = 0; triangle + 2 < attribute.count; triangle += 3) {
      const second = (triangle + 1) * itemSize
      const third = (triangle + 2) * itemSize
      for (let item = 0; item < itemSize; item++) {
        const held = array[second + item]
        array[second + item] = array[third + item]
        array[third + item] = held
      }
    }
  }
}

export function createKit(initialTheme: SceneTheme, anisotropy = 4): Kit {
  const start = initialTheme === "light" ? 1 : 0
  const shared: Shared = {
    theme: initialTheme,
    blend: start,
    target: start,
    daylight: start,
    dirty: false,
    disposed: false,
    themed: [],
    glowing: [],
    painted: [],
    outlines: [],
  }
  const fonts = readFonts()
  const blueprintDark = new THREE.Color(PALETTES.dark.blueprint)
  const blueprintLight = new THREE.Color(PALETTES.light.blueprint)

  const repaint = (entry: { texture: THREE.CanvasTexture; paint: CanvasPainter }) => {
    const canvas = entry.texture.image as HTMLCanvasElement
    const context = canvas.getContext("2d")
    if (!context) return
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.globalAlpha = 1
    context.clearRect(0, 0, canvas.width, canvas.height)
    entry.paint(context, canvas.width, canvas.height, PALETTES[shared.theme], shared.theme)
    entry.texture.needsUpdate = true
  }

  /** Brings every theme-aware material to where the cross-fade currently stands. */
  const apply = () => {
    const mix = shared.daylight
    shared.themed.forEach(({ material, dark, light, selfLit }) => {
      material.color.lerpColors(dark, light, mix)
      if (selfLit) material.emissive.copy(material.color)
    })
    shared.glowing.forEach(({ material, levels }) => {
      const rest = levels.dark + (levels.light - levels.dark) * mix
      // The controller reads this as the level to brighten from on hover.
      material.userData.restGlow = rest
      material.emissiveIntensity = rest
    })
    shared.outlines.forEach((material) => material.color.lerpColors(blueprintDark, blueprintLight, mix))
  }

  // Lettering is first painted in a fallback face; paint it again once the real one has arrived.
  const onFonts = () => {
    if (shared.disposed) return
    shared.painted.forEach(repaint)
    shared.dirty = true
  }
  document.fonts?.addEventListener("loadingdone", onFonts)

  const make = (clip: THREE.Plane): Kit => {
    const standard = (color: THREE.ColorRepresentation, options: MaterialOptions = {}) =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: options.roughness ?? 0.8,
        metalness: options.metalness ?? 0,
        flatShading: options.flat ?? false,
        map: options.map ?? null,
        side: options.side ?? THREE.FrontSide,
        transparent: options.transparent ?? false,
        opacity: options.opacity ?? 1,
        clippingPlanes: [clip],
        clipShadows: true,
        // Surfaces sit a hair behind their own outline, so the blueprint lines
        // drawn along their edges never flicker against them.
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      })

    const pair = (dark: string, light: string, options?: MaterialOptions, selfLit = false) => {
      const entry = {
        material: standard(dark, options),
        dark: new THREE.Color(dark),
        light: new THREE.Color(light),
        selfLit,
      }
      entry.material.color.lerpColors(entry.dark, entry.light, shared.daylight)
      if (selfLit) entry.material.emissive.copy(entry.material.color)
      shared.themed.push(entry)
      return entry.material
    }

    const lit = (material: THREE.MeshStandardMaterial, levels: GlowLevels) => {
      const rest = levels.dark + (levels.light - levels.dark) * shared.daylight
      material.emissiveIntensity = rest
      material.userData.restGlow = rest
      shared.glowing.push({ material, levels })
      return material
    }

    return {
      clip,
      fonts,
      get theme() {
        return shared.theme
      },
      get palette() {
        return PALETTES[shared.theme]
      },
      get daylight() {
        return shared.daylight
      },

      mat: (key, options) => pair(PALETTES.dark[key], PALETTES.light[key], options),
      pair: (dark, light, options) => pair(dark, light, options),
      color: (hex, options) => standard(hex, options),

      trim: (key, levels, options) => lit(pair(PALETTES.dark[key], PALETTES.light[key], options, true), levels),

      glow(hex, levels, options) {
        const material = standard(hex, options)
        material.emissive.set(hex)
        return lit(material, levels)
      },

      screen(map, levels) {
        // Black to the room's lights, so only what is painted shows.
        const material = standard("#000000", { roughness: 0.35 })
        material.emissive.set("#ffffff")
        material.emissiveMap = map
        return lit(material, levels)
      },

      box(width, height, depth, radius = 0) {
        if (radius <= 0) return new THREE.BoxGeometry(width, height, depth)
        const limit = Math.min(width, height, depth) / 2 - 0.0005
        const geometry = new RoundedBoxGeometry(width, height, depth, 2, Math.max(0.0005, Math.min(radius, limit)))
        // Remembered so the blueprint can draw the plain box this softens.
        geometry.userData.blockout = [width, height, depth]
        return geometry
      },

      cylinder: (radiusTop, radiusBottom, height, segments = 24) =>
        new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments),

      sphere: (radius, segments = 16) =>
        new THREE.SphereGeometry(radius, segments, Math.max(8, Math.round(segments * 0.7))),

      mesh(geometry, material, position, rotation, options: MeshOptions = {}) {
        const mesh = new THREE.Mesh(geometry, material)
        if (position) mesh.position.set(...position)
        if (rotation) mesh.rotation.set(...rotation)
        mesh.castShadow = options.cast ?? true
        mesh.receiveShadow = options.receive ?? true
        if (options.noBlueprint) mesh.userData.noBlueprint = true
        return mesh
      },

      canvas(width, height, paint) {
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        const texture = new THREE.CanvasTexture(canvas)
        texture.colorSpace = THREE.SRGBColorSpace
        texture.anisotropy = anisotropy
        const entry = { texture, paint }
        shared.painted.push(entry)
        repaint(entry)
        return texture
      },

      repaint(texture) {
        const entry = shared.painted.find((candidate) => candidate.texture === texture)
        if (!entry) return
        repaint(entry)
        shared.dirty = true
      },

      weld(group) {
        const meshes: THREE.Mesh[] = []
        group.traverse((object) => {
          const mesh = object as THREE.Mesh
          if (mesh.isMesh) meshes.push(mesh)
        })
        // Nothing to gain, or something this cannot merge safely: leave it as built.
        if (meshes.length < 2 || meshes.some((mesh) => Array.isArray(mesh.material))) return

        group.updateWorldMatrix(true, true)
        const toGroup = new THREE.Matrix4().copy(group.matrixWorld).invert()
        const relative = new THREE.Matrix4()
        interface Batch {
          source: THREE.Mesh
          parts: THREE.BufferGeometry[]
          outlines: THREE.BufferGeometry[]
        }
        const batches = new Map<string, Batch>()

        meshes.forEach((mesh) => {
          const material = mesh.material as THREE.Material
          const hidden = mesh.userData.noBlueprint === true
          const key = `${material.uuid}|${mesh.castShadow}|${mesh.receiveShadow}|${hidden}`
          let batch = batches.get(key)
          if (!batch) batches.set(key, (batch = { source: mesh, parts: [], outlines: [] }))

          relative.multiplyMatrices(toGroup, mesh.matrixWorld)
          const part = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone()
          // Merging needs every part to carry the same attributes.
          Object.keys(part.attributes).forEach((name) => {
            if (name !== "position" && name !== "normal" && name !== "uv") part.deleteAttribute(name)
          })
          if (!part.attributes.normal) part.computeVertexNormals()
          if (!part.attributes.uv) {
            part.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(part.attributes.position.count * 2), 2))
          }
          part.applyMatrix4(relative)
          if (relative.determinant() < 0) flipWinding(part)
          batch.parts.push(part)
          if (!hidden) batch.outlines.push(edgesOf(mesh).applyMatrix4(relative))
        })

        meshes.forEach((mesh) => {
          mesh.removeFromParent()
          mesh.geometry.dispose()
          ;(mesh.userData.outline as THREE.BufferGeometry | undefined)?.dispose()
        })

        batches.forEach(({ source, parts, outlines }) => {
          const merged = mergeGeometries(parts)
          parts.forEach((part) => part.dispose())
          if (!merged) return
          const mesh = new THREE.Mesh(merged, source.material)
          mesh.castShadow = source.castShadow
          mesh.receiveShadow = source.receiveShadow
          if (source.userData.noBlueprint) mesh.userData.noBlueprint = true
          // The drawing of the separate parts, kept for the blueprint: the merged
          // mesh on its own would lose the plain outlines of its rounded boxes.
          else if (outlines.length > 0) mesh.userData.outline = mergeGeometries(outlines)
          outlines.forEach((outline) => outline.dispose())
          group.add(mesh)
        })
      },

      scope: () => make(new THREE.Plane(new THREE.Vector3(0, -1, 0), 1e4)),

      setTheme(theme, immediately = false) {
        shared.target = theme === "light" ? 1 : 0
        if (!immediately) return
        shared.blend = shared.target
        shared.daylight = shared.target
        if (shared.theme !== theme) {
          shared.theme = theme
          shared.painted.forEach(repaint)
        }
        apply()
        shared.dirty = true
      },

      tick(seconds) {
        let changed = shared.dirty
        shared.dirty = false
        if (shared.blend !== shared.target) {
          const step = Math.max(0, seconds) / CROSS_FADE
          shared.blend =
            shared.target > shared.blend
              ? Math.min(shared.target, shared.blend + step)
              : Math.max(shared.target, shared.blend - step)
          shared.daylight = smooth(shared.blend)
          // Painted surfaces cannot fade, so they switch at the midpoint, where it shows least.
          const theme: SceneTheme = shared.blend >= 0.5 ? "light" : "dark"
          if (theme !== shared.theme) {
            shared.theme = theme
            shared.painted.forEach(repaint)
          }
          apply()
          changed = true
        }
        return changed
      },

      blueprint(root) {
        root.updateWorldMatrix(true, true)
        const toRoot = new THREE.Matrix4().copy(root.matrixWorld).invert()
        const relative = new THREE.Matrix4()
        const outlines: THREE.BufferGeometry[] = []

        // Furniture a layout has put away is not part of the drawing.
        const shown = (object: THREE.Object3D) => {
          for (let node: THREE.Object3D | null = object; node; node = node === root ? null : node.parent) {
            if (!node.visible) return false
          }
          return true
        }

        root.traverse((object) => {
          const mesh = object as THREE.Mesh
          if (!mesh.isMesh || mesh.userData.noBlueprint || !shown(mesh)) return
          relative.multiplyMatrices(toRoot, mesh.matrixWorld)
          outlines.push(edgesOf(mesh).applyMatrix4(relative))
        })

        const merged = outlines.length > 0 ? mergeGeometries(outlines) : null
        outlines.forEach((geometry) => geometry.dispose())
        const geometry = merged ?? new THREE.BufferGeometry()

        // Lowest segments first, so revealing the drawing by range draws it from the ground up.
        const position = geometry.getAttribute("position") as THREE.BufferAttribute | undefined
        const segments = position ? position.count / 2 : 0
        if (position) {
          const source = position.array as Float32Array
          const order = Array.from({ length: segments }, (_, index) => index).sort(
            (a, b) =>
              Math.min(source[a * 6 + 1], source[a * 6 + 4]) - Math.min(source[b * 6 + 1], source[b * 6 + 4])
          )
          const sorted = new Float32Array(source.length)
          order.forEach((from, to) => sorted.set(source.subarray(from * 6, from * 6 + 6), to * 6))
          source.set(sorted)
          position.needsUpdate = true
        }

        const material = new THREE.LineBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
        material.color.lerpColors(blueprintDark, blueprintLight, shared.daylight)
        shared.outlines.push(material)

        const lines = new THREE.LineSegments(geometry, material)
        // A drawing, not an object: it never answers the pointer and is never drawn itself.
        lines.raycast = () => {}
        lines.userData.noBlueprint = true
        lines.frustumCulled = false
        return { lines, material, segments }
      },

      dispose() {
        shared.disposed = true
        document.fonts?.removeEventListener("loadingdone", onFonts)
      },
    }
  }

  return make(new THREE.Plane(new THREE.Vector3(0, -1, 0), 1e4))
}
