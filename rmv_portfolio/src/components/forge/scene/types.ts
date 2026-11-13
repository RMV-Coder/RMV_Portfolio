import type * as THREE from "three"

/**
 * The contract between the parts of the 3D scene:
 *
 *   - the kit (kit.ts) hands out theme-aware materials, canvas textures and
 *     meshes, so nothing downstream hard-codes a furniture colour;
 *   - an environment (office.ts, shelf.ts) builds a room out of them, lights
 *     it, and says where each product goes;
 *   - a product builder (products/<slug>.ts) builds one object;
 *   - the controller (office-scene.tsx) owns the renderer, the camera, the
 *     entrance, hovering, labels and the theme switch.
 *
 * Units are metres. +x is right, +y is up, +z comes toward the viewer, and
 * the floor is the plane y = 0.
 */

export type SceneTheme = "dark" | "light"

/**
 * Every colour furniture may use. They are deliberately quiet greys and
 * browns: in this scene only the products carry colour.
 */
export interface ScenePalette {
  wall: string
  /** Skirting boards, window frames, anything a shade off the wall. */
  wallShade: string
  floor: string
  /** The seams between floorboards. */
  floorLine: string
  rug: string
  rugTrim: string
  /** Desk and shelf timber. */
  wood: string
  woodDark: string
  metal: string
  metalDark: string
  plastic: string
  plasticDark: string
  paper: string
  ink: string
  fabric: string
  glass: string
  /** The site's three accents, for trim only. */
  blueprint: string
  ember: string
  brass: string
  /** A lit display's dark background. */
  screen: string
  skyTop: string
  skyBottom: string
  /** The moon at night, the sun by day. */
  celestial: string
  lampGlow: string
}

export type PaletteKey = keyof ScenePalette

export type Vec3 = [number, number, number]

export interface MaterialOptions {
  /** Default 0.8. */
  roughness?: number
  /** Default 0. */
  metalness?: number
  /** Faceted shading for deliberately low-poly parts. Default: smooth. */
  flat?: boolean
  /** A texture drawn with `kit.canvas`. */
  map?: THREE.Texture
  side?: THREE.Side
  transparent?: boolean
  opacity?: number
}

export interface MeshOptions {
  /** Default true. Turn off for big backdrops (walls, floors) and for thin parts (strings, wires). */
  cast?: boolean
  /** Default true. */
  receive?: boolean
  /** Leave this mesh out of the blueprint line drawing (tiny details, glass, flat decals). */
  noBlueprint?: boolean
}

/** How strongly something glows at night and by day. 0 = not at all. */
export interface GlowLevels {
  dark: number
  light: number
}

/**
 * Draws a flat surface: a screen, a board, a page. It runs once when the
 * texture is made, again whenever the theme changes or the site's fonts
 * finish loading, and whenever you call `kit.repaint(texture)`.
 */
export type CanvasPainter = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  palette: ScenePalette,
  theme: SceneTheme
) => void

/** CSS font-family lists, ready to drop into `context.font`: `700 64px ${fonts.display}`. */
export interface SceneFonts {
  /** The site's headline face: a characterful grotesque. Use it for anything hand-lettered or signed. */
  display: string
  /** The site's text face: a neutral sans. Use it for interface text on screens. */
  body: string
  mono: string
}

export interface SceneKit {
  /** The current theme and its colours. `theme` flips halfway through a cross-fade. */
  readonly theme: SceneTheme
  readonly palette: ScenePalette
  /**
   * How far the scene is toward daylight: 0 at night, 1 by day, easing between
   * the two over about half a second when the site theme changes. Lights should
   * be mixed by this in `update`.
   */
  readonly daylight: number
  readonly fonts: SceneFonts

  /** A furniture material tied to a palette colour. It cross-fades by itself on a theme change. */
  mat(key: PaletteKey, options?: MaterialOptions): THREE.MeshStandardMaterial
  /** A material with its own night colour and day colour. It cross-fades by itself. */
  pair(dark: string, light: string, options?: MaterialOptions): THREE.MeshStandardMaterial
  /** A fixed-colour material, the same in both themes: a product's own accent. */
  color(hex: string, options?: MaterialOptions): THREE.MeshStandardMaterial
  /**
   * A self-lit, self-coloured material: a bulb, an LED, a lit window pane, a
   * neon edge. The controller brightens every material a product lists in
   * `ProductBuild.glow` while that product is hovered.
   */
  glow(hex: string, levels: GlowLevels, options?: MaterialOptions): THREE.MeshStandardMaterial
  /**
   * A self-lit line in one of the palette's colours, which follows the theme:
   * the ember edge of a cut wall, a brass inlay that should never go dull.
   */
  trim(key: PaletteKey, levels: GlowLevels, options?: MaterialOptions): THREE.MeshStandardMaterial
  /**
   * A self-lit surface showing a canvas: a monitor, a phone, a backlit sign.
   * It ignores the room's lights, so what you paint is what shows.
   */
  screen(map: THREE.Texture, levels: GlowLevels): THREE.MeshStandardMaterial

  /** A box, with softly rounded edges when `radius` is given. Centred on its origin. */
  box(width: number, height: number, depth: number, radius?: number): THREE.BufferGeometry
  /** A cylinder standing along +y, centred on its origin. Default 24 segments. */
  cylinder(radiusTop: number, radiusBottom: number, height: number, segments?: number): THREE.BufferGeometry
  /** Default 20 segments. */
  sphere(radius: number, segments?: number): THREE.BufferGeometry

  /** A mesh with shadows switched on, positioned and rotated (radians, XYZ order). */
  mesh(
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    position?: Vec3,
    rotation?: Vec3,
    options?: MeshOptions
  ): THREE.Mesh

  /**
   * A texture painted on a 2D canvas, `width` by `height` pixels (1024 at most
   * on the long side). It is sRGB, so paint the colours you want to see.
   */
  canvas(width: number, height: number, paint: CanvasPainter): THREE.CanvasTexture
  /** Runs a texture's painter again. Call it after changing what the painter reads; never every frame. */
  repaint(texture: THREE.CanvasTexture): void

  /**
   * Merges every mesh under `group` that shares a material into one mesh, so a
   * part built from thirty boxes costs one draw instead of thirty. Call it once,
   * last, on each group whose pieces never move relative to one another. Do not
   * call it on a group that contains a sub-group you animate: weld the moving
   * sub-group and the still remainder separately.
   */
  weld(group: THREE.Object3D): void
}

// ── Products ────────────────────────────────────────────────────────────

/** What a product is told every frame. The same object is reused: read it, do not keep it. */
export interface ProductFrame {
  /**
   * Seconds since the scene started, for idle motion only. It is 0 and frozen
   * for visitors who asked for reduced motion, so anything driven by it stands
   * still for them without further checks.
   */
  time: number
  /**
   * 0 → 1 while the pointer (or a matching chip) is on the product, easing
   * over about a third of a second, and back to 0 after. Drive the product's
   * hover gesture straight from this number, so it reverses by itself.
   */
  hover: number
  /**
   * 0 → 1 as the product arrives during the entrance; it falls again as the
   * page scrolls away. Screens and lamps should be off at 0 and on at 1.
   */
  built: number
}

export interface ProductBuild {
  /**
   * The object. Its local origin is the centre of its base (the middle of its
   * bottom face); it stands upright along +y and its front faces +z. A wall-hung
   * object is built the same way, with its back on the plane z = 0.
   */
  group: THREE.Group
  /** Bounding size in metres at rest: width (x), height (y), depth (z). */
  size: Vec3
  /**
   * `surface`: it stands on a desk, a shelf or the floor. `wall`: it hangs on a
   * wall (or leans against one), and comes forward instead of lifting on hover.
   */
  mount: "surface" | "wall"
  /** Materials that should brighten when the product is hovered. */
  glow: THREE.MeshStandardMaterial[]
  /**
   * Called every frame the scene is on screen. Return true on any frame where
   * idle motion (motion driven by `time`) changed something, so the scene is
   * redrawn; changes driven by `hover` and `built` are redrawn regardless.
   * Must not allocate.
   */
  update?(frame: ProductFrame): boolean | void
}

/** `room`: in the office. `shelf`: on the tools-page shelf, which is 0.40 deep. */
export type ProductVariant = "room" | "shelf"

export type ProductBuilder = (kit: SceneKit, variant: ProductVariant) => ProductBuild

// ── Environments ────────────────────────────────────────────────────────

/** Where a product goes: the position of its base centre, its facing, its size factor. */
export interface Anchor {
  position: Vec3
  /** Radians about +y. 0 faces +z; positive turns the front toward +x. */
  rotationY: number
  scale: number
}

export interface Layout {
  /** One anchor per product slug the environment has room for. */
  anchors: Record<string, Anchor>
  camera: {
    /** Direction from the scene toward the camera (it will be normalised). */
    direction: Vec3
    /** Vertical field of view in degrees. */
    fov: number
  }
  /**
   * Points that must stay in view besides the products themselves, which are
   * always kept in view: the corners of the room, the ends of the shelf.
   */
  keep: Vec3[]
}

/** `wide`: a broad stage (beside the headline on a desktop). `compact`: a short band (phones, tablets). */
export type LayoutMode = "wide" | "compact"

/** What an environment is told every frame. The same object is reused. */
export interface RoomFrame {
  /** Seconds since the scene started; 0 and frozen under reduced motion. */
  time: number
  /**
   * 0 → 1: how much of the room's own light is on. It flickers up at the end of
   * the entrance and dims as the page scrolls away. Multiply the key light and
   * any lit bulb by it; leave the soft fill light alone so the room is never black.
   */
  power: number
}

export interface EnvironmentBuild {
  /** Everything in the room, lights included. Products are added by the controller, not here. */
  group: THREE.Group
  /** The height of the tallest thing in the room, for the build-up sweep. */
  height: number
  /** Where the build-up sweep starts: nothing at or below this height is ever cut away. */
  floor: number
  /**
   * Arranges the room for a stage shape and reports where the given products
   * go. It may show, hide or move furniture. `slugs` are the products present,
   * in display order.
   */
  layout(mode: LayoutMode, slugs: string[]): Layout
  /**
   * Switches real shadows on or off (they are off on phones and slow machines).
   * It must take effect at once, not on the next `update`: shaders are compiled
   * for whichever lights cast shadows at that moment.
   */
  setShadows(enabled: boolean): void
  /**
   * Puts the lights in the arrangement the other theme uses (a different light
   * casting the shadows, say) and returns a function that puts them back. The
   * controller uses it once, while idle, to prepare that theme's shaders so the
   * first theme switch does not stall. Leave it out if both themes light alike.
   */
  alternate?(): (() => void) | undefined
  /**
   * Called every frame the scene is on screen: mix the lights by
   * `kit.daylight` and `frame.power` here. Return true if idle motion changed
   * something. Must not allocate.
   */
  update(frame: RoomFrame): boolean | void
}

export type EnvironmentBuilder = (kit: SceneKit) => EnvironmentBuild
