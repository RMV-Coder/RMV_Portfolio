import * as THREE from "three"
import type { Anchor, EnvironmentBuilder, Layout, LayoutMode, MeshOptions, RoomFrame, Vec3 } from "./types"

/**
 * The office: a cutaway corner of a maker's study, finished like an
 * architectural model standing on the page.
 *
 * Frame: the back wall's inner face is the plane z = 0 and the left wall's
 * inner face is the plane x = 0, so the room is x 0..3.75, z 0..2.0, with the
 * floor at y = 0. The camera looks in from the front right, so the right side
 * and the front are open, and every cut edge of the model (wall tops, the
 * wall ends, the slab's front and right edges) carries a thin ember line.
 *
 * Furniture is quiet greige from the palette; only the products, which are
 * placed by the controller at the anchors below, carry colour.
 */

/** The room's measurements, in metres. */
export const ROOM = {
  width: 3.75,
  depth: 2.0,
  height: 2.3,
  /** Wall thickness. Thin on purpose: every cut face is ember, and a thick wall turns that into a heavy frame. */
  wall: 0.07,
  /** Floor slab thickness. */
  slab: 0.16,
} as const

/**
 * Where each product goes: the centre of its base, its facing and its size
 * factor. The same in both layouts. Tune by hand.
 */
export const OFFICE_ANCHORS: Record<string, Anchor> = {
  // On the back wall, above the desk.
  syntaxlab: { position: [1.52, 1.4, 0], rotationY: 0, scale: 1 },
  omnigraph: { position: [2.72, 1.4, 0], rotationY: 0, scale: 1 },
  // On the desk (its top is at y = 0.76).
  veltriva: { position: [1.3, 0.76, 0.26], rotationY: 0.22, scale: 1 },
  myboardhub: { position: [2.06, 0.76, 0.4], rotationY: 0.26, scale: 1 },
  emmaus: { position: [2.78, 0.76, 0.44], rotationY: 0.2, scale: 1.3 },
  veyra: { position: [3.36, 0.76, 0.42], rotationY: 0.25, scale: 1.18 },
  // On the floor.
  "calculus-solver": { position: [0.52, 0, 1.3], rotationY: 0.5, scale: 1 },
  aetherform: { position: [1.78, 0, 1.38], rotationY: 0.1, scale: 1 },
  localpass: { position: [3.02, 0, 1.22], rotationY: 0.35, scale: 1 },
}

/** Camera directions (from the scene toward the camera) and field of view per layout. */
export const OFFICE_CAMERA: Record<LayoutMode, { direction: Vec3; fov: number }> = {
  // 30 degrees to the right of straight ahead, 18 degrees above.
  wide: { direction: [0.4755, 0.309, 0.8236], fov: 30 },
  // 10 degrees to the right, 11 above.
  compact: { direction: [0.1705, 0.1908, 0.9667], fov: 30 },
}

/**
 * Light levels, tuned by eye. Night is one warm pool from the lamp over a cool
 * fill that is just strong enough to keep every product readable; day is a
 * soft sun from the viewer's side.
 */
const NIGHT = { hemi: 0.62, fill: 0.85, lamp: 2.0 } as const
const DAY = { hemi: 0.8, fill: 0.2, sun: 1.9 } as const

/** The tallest thing in the room: the ember caps on the wall tops. */
const ROOM_HEIGHT = 2.33

/** The desk top's upper surface. */
const DESK_TOP = 0.76

/** The lamp: its head (where the shade's neck is) and the point the shade's mouth faces. */
const LAMP_HEAD: Vec3 = [2.34, 1.42, 0.3]
const LAMP_AIM: Vec3 = [2.06, 0.98, 0.52]

/**
 * The rug's footprint (x 1.0..3.5, z 0.805..1.855) and the height of its
 * painted top (0.0118). A floor product whose base centre falls on the rug is
 * stood on top of it while the rug is shown, instead of sinking into it.
 */
const RUG = { x0: 1.0, x1: 3.5, z0: 0.805, z1: 1.855, top: 0.012 } as const

/** The corners of the room's bounding box, kept in view by the wide layout. */
const ROOM_CORNERS: Vec3[] = (() => {
  const xs = [-ROOM.wall, ROOM.width + 0.02]
  const ys = [-ROOM.slab, ROOM.height + 0.03]
  const zs = [-ROOM.wall, ROOM.depth + 0.02]
  const corners: Vec3[] = []
  xs.forEach((x) => ys.forEach((y) => zs.forEach((z) => corners.push([x, y, z]))))
  return corners
})()

/** Where each board's end joint falls, as a fraction of the room's width. */
const BOARD_JOINTS = [0.18, 0.62, 0.4, 0.86, 0.27, 0.7, 0.5, 0.12, 0.9, 0.34, 0.58, 0.06]

/** The skyline in the window, on a 512 x 640 canvas: [left, width, height] in pixels, standing on the bottom edge. */
const SKYLINE: [number, number, number][] = [
  [0, 78, 150],
  [72, 64, 105],
  [130, 96, 200],
  [220, 70, 130],
  [284, 92, 215],
  [370, 62, 120],
  [426, 86, 170],
]

/** The lit windows in the skyline at night: [left, top] in pixels, each 16 x 20. */
const LIT_WINDOWS: [number, number][] = [
  [24, 532],
  [152, 476],
  [192, 528],
  [304, 462],
  [342, 512],
  [450, 504],
]

/** "#rrggbb" to an rgba() string. */
function rgba(hex: string, alpha: number): string {
  const value = hex.replace("#", "")
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const buildOffice: EnvironmentBuilder = (kit) => {
  const W = ROOM.width
  const D = ROOM.depth
  const H = ROOM.height
  const T = ROOM.wall

  const root = new THREE.Group()
  root.name = "office"
  /** Everything that never moves; welded at the end. */
  const furniture = new THREE.Group()
  furniture.name = "office-furniture"
  root.add(furniture)

  const put = (
    parent: THREE.Object3D,
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    position: Vec3,
    rotation?: Vec3,
    options?: MeshOptions
  ) => {
    const mesh = kit.mesh(geometry, material, position, rotation, options)
    parent.add(mesh)
    return mesh
  }

  // ── Materials (one object per look, so welding merges them) ──────────────
  const floorMat = kit.mat("floor")
  const wallMat = kit.mat("wall")
  const wallShadeMat = kit.mat("wallShade")
  const emberMat = kit.trim("ember", { dark: 0.95, light: 0.55 })
  const woodMat = kit.mat("wood", { roughness: 0.6 })
  const woodDarkMat = kit.mat("woodDark", { roughness: 0.7 })
  const lampMat = kit.pair("#3A3633", "#7D7873", { metalness: 0.5, roughness: 0.5, side: THREE.DoubleSide })
  const bulbMat = kit.glow("#FFD9A0", { dark: 2.0, light: 0.0 })
  const rollMat = kit.pair("#8C969A", "#C3CBCE", { roughness: 0.85 })
  const rollEndMat = kit.pair("#6E787C", "#A3ADB1", { roughness: 0.85 })

  const backdrop: MeshOptions = { cast: false }
  const trimOptions: MeshOptions = { cast: false, noBlueprint: true }

  // ── Floor slab and floorboards ───────────────────────────────────────────
  // Slab: x -0.10..3.75, y -0.16..0, z -0.10..2.0.
  put(furniture, kit.box(W + T, ROOM.slab, D + T, 0.02), floorMat, [(W - T) / 2, -ROOM.slab / 2, (D - T) / 2], undefined, backdrop)

  // Boards run along x, twelve of them across the room's depth.
  const floorTexture = kit.canvas(1024, 512, (context, width, height, palette) => {
    const boards = BOARD_JOINTS.length
    const board = height / boards
    context.fillStyle = palette.floor
    context.fillRect(0, 0, width, height)
    // Every other board a shade deeper, so the boards read even where seams blur.
    context.fillStyle = palette.floorLine
    context.globalAlpha = 0.08
    for (let i = 1; i < boards; i += 2) context.fillRect(0, i * board, width, board)
    context.globalAlpha = 1
    // Long seams between boards.
    for (let i = 1; i < boards; i++) context.fillRect(0, Math.round(i * board) - 1, width, 2)
    // Staggered end joints.
    BOARD_JOINTS.forEach((joint, i) => {
      const top = Math.round(i * board)
      const bottom = Math.round((i + 1) * board)
      const x = Math.round(joint * width)
      context.fillRect(x - 1, top, 2, bottom - top)
      if (joint < 0.45) {
        const second = Math.round((joint + 0.5) * width)
        context.fillRect(second - 1, top, 2, bottom - top)
      }
    })
  })
  // Plane x 0..3.75, z 0..2.0 at y 0.002 (0.002 above the slab), texture top toward the back wall.
  const floorTop = kit.mesh(
    new THREE.PlaneGeometry(W, D),
    kit.color("#ffffff", { map: floorTexture, roughness: 0.85 }),
    [W / 2, 0.002, D / 2],
    [-Math.PI / 2, 0, 0],
    { cast: false, receive: true, noBlueprint: true }
  )
  root.add(floorTop)

  // ── Walls ────────────────────────────────────────────────────────────────
  // Back wall: x -0.10..3.75, y 0..2.3, z -0.10..0.
  put(furniture, kit.box(W + T, H, T), wallMat, [(W - T) / 2, H / 2, -T / 2], undefined, backdrop)
  // Left wall: x -0.10..0, y 0..2.3, z 0..2.0.
  put(furniture, kit.box(T, H, D), wallMat, [-T / 2, H / 2, D / 2], undefined, backdrop)

  // Skirting, 0.08 high and 0.02 proud. Back: x 0.02..3.75, z 0..0.02. Left: x 0..0.02, z 0..2.0.
  put(furniture, kit.box(W - 0.02, 0.08, 0.02), wallShadeMat, [(W + 0.02) / 2, 0.04, 0.01], undefined, backdrop)
  put(furniture, kit.box(0.02, 0.08, D), wallShadeMat, [0.01, 0.04, D / 2], undefined, backdrop)

  // ── Ember caps on every cut edge ─────────────────────────────────────────
  // Top of the back wall: x -0.10..3.75, y 2.30..2.32, z -0.10..0.
  put(furniture, kit.box(W + T, 0.02, T), emberMat, [(W - T) / 2, H + 0.01, -T / 2], undefined, trimOptions)
  // Top of the left wall: x -0.10..0, y 2.30..2.32, z 0..2.0.
  put(furniture, kit.box(T, 0.02, D), emberMat, [-T / 2, H + 0.01, D / 2], undefined, trimOptions)
  // Down the back wall's right end (on the face x = 3.75): x 3.75..3.77, y 0..2.32, z -0.10..0.
  put(furniture, kit.box(0.02, H + 0.02, T), emberMat, [W + 0.01, (H + 0.02) / 2, -T / 2], undefined, trimOptions)
  // Down the left wall's front end (on the face z = 2.0): x -0.10..0, y 0..2.32, z 2.0..2.02.
  put(furniture, kit.box(T, H + 0.02, 0.02), emberMat, [-T / 2, (H + 0.02) / 2, D + 0.01], undefined, trimOptions)
  // The slab's top edge, front: x -0.10..3.77, y -0.02..0, z 2.0..2.02.
  put(furniture, kit.box(W + T + 0.02, 0.02, 0.02), emberMat, [(W - T + 0.02) / 2, -0.01, D + 0.01], undefined, trimOptions)
  // The slab's top edge, right: x 3.75..3.77, y -0.02..0, z -0.10..2.0.
  put(furniture, kit.box(0.02, 0.02, D + T), emberMat, [W + 0.01, -0.01, (D - T) / 2], undefined, trimOptions)

  // ── Window in the left wall ──────────────────────────────────────────────
  // Opening: z 0.45..1.25, y 1.05..2.00. Frame bars stand x -0.04..0.03 (0.03 proud).
  const winZ = 0.85
  const winSill = 1.05
  const winW = 0.8
  const winH = 0.95
  const bar = 0.05
  const barDepth = 0.07
  const barX = 0.03 - barDepth / 2
  const winMidY = winSill + winH / 2
  // Uprights: z 0.40..0.45 and 1.25..1.30, y 1.00..2.05.
  put(furniture, kit.box(barDepth, winH + 2 * bar, bar), wallShadeMat, [barX, winMidY, winZ - winW / 2 - bar / 2])
  put(furniture, kit.box(barDepth, winH + 2 * bar, bar), wallShadeMat, [barX, winMidY, winZ + winW / 2 + bar / 2])
  // Head and foot: z 0.45..1.25, y 2.00..2.05 and 1.00..1.05.
  put(furniture, kit.box(barDepth, bar, winW), wallShadeMat, [barX, winSill + winH + bar / 2, winZ])
  put(furniture, kit.box(barDepth, bar, winW), wallShadeMat, [barX, winSill - bar / 2, winZ])
  // Glazing bars, 0.03 square, x 0..0.03 (in front of the glass at x 0.012).
  put(furniture, kit.box(0.03, winH, 0.03), wallShadeMat, [0.015, winMidY, winZ])
  put(furniture, kit.box(0.03, 0.03, winW), wallShadeMat, [0.015, winMidY, winZ])
  // Sill board: x -0.01..0.11, y 0.965..1.00, z 0.40..1.30; the frame's foot sits on it.
  put(furniture, kit.box(0.12, 0.035, 0.9), wallShadeMat, [0.05, winSill - bar - 0.0175, winZ])

  const windowTexture = kit.canvas(512, 640, (context, width, height, palette, theme) => {
    const night = theme === "dark"
    const sky = context.createLinearGradient(0, 0, 0, height)
    sky.addColorStop(0, palette.skyTop)
    sky.addColorStop(1, palette.skyBottom)
    context.fillStyle = sky
    context.fillRect(0, 0, width, height)

    if (night) {
      // A crescent moon, upper right: a disc with an offset disc of sky taken out of it.
      const mx = width * 0.72
      const my = height * 0.2
      context.fillStyle = palette.celestial
      context.beginPath()
      context.arc(mx, my, 48, 0, Math.PI * 2)
      context.fill()
      // The bite, clipped to the moon so it never paints plain sky outside it.
      context.save()
      context.clip()
      context.fillStyle = sky
      context.beginPath()
      context.arc(mx - 22, my - 10, 42, 0, Math.PI * 2)
      context.fill()
      context.restore()
      // The halo last, so the bite and the sky around the moon carry the same glow.
      const halo = context.createRadialGradient(mx, my, 30, mx, my, 110)
      halo.addColorStop(0, rgba(palette.celestial, 0.18))
      halo.addColorStop(1, rgba(palette.celestial, 0))
      context.fillStyle = halo
      context.fillRect(0, 0, width, height)
    } else {
      // A soft sun glow, upper left.
      const sx = width * 0.26
      const sy = height * 0.2
      const glow = context.createRadialGradient(sx, sy, 0, sx, sy, 190)
      glow.addColorStop(0, rgba(palette.celestial, 1))
      glow.addColorStop(0.22, rgba(palette.celestial, 0.95))
      glow.addColorStop(0.5, rgba(palette.celestial, 0.35))
      glow.addColorStop(1, rgba(palette.celestial, 0))
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)
    }

    // A low skyline of flat rooftops.
    context.fillStyle = night ? "#141C3A" : "#B8C4C8"
    SKYLINE.forEach(([left, w, h]) => context.fillRect(left, height - h, w, h))
    if (night) {
      context.fillStyle = "#E8B86D"
      LIT_WINDOWS.forEach(([left, top]) => context.fillRect(left, top, 16, 20))
    }
  })
  // The glass faces +x at x = 0.012, inside the frame (z 0.45..1.25, y 1.05..2.00).
  // rotation.y = +90 degrees turns the plane's +z normal to +x and its texture's right edge toward -z.
  const glass = kit.mesh(
    new THREE.PlaneGeometry(winW, winH),
    kit.screen(windowTexture, { dark: 0.55, light: 0.9 }),
    [0.012, winMidY, winZ],
    [0, Math.PI / 2, 0],
    { cast: false, receive: false, noBlueprint: true }
  )
  root.add(glass)

  // ── Desk against the back wall ───────────────────────────────────────────
  // Top: x 0.95..3.65, y 0.71..0.76, z 0.03..0.73.
  const deskX0 = 0.95
  const deskX1 = 3.65
  const deskZ0 = 0.03
  const deskZ1 = 0.73
  const deskCx = (deskX0 + deskX1) / 2
  put(furniture, kit.box(deskX1 - deskX0, 0.05, deskZ1 - deskZ0, 0.012), woodMat, [deskCx, DESK_TOP - 0.025, (deskZ0 + deskZ1) / 2])
  // Legs 0.05 square, y 0..0.71, inset 0.05 from each corner.
  const legH = DESK_TOP - 0.05
  const legXs = [deskX0 + 0.075, deskX1 - 0.075]
  const legZs = [deskZ0 + 0.075, deskZ1 - 0.075]
  legXs.forEach((x) => legZs.forEach((z) => put(furniture, kit.box(0.05, legH, 0.05), woodDarkMat, [x, legH / 2, z])))
  // Back stretcher between the back legs' inner faces: x 1.05..3.55, y 0.155..0.205.
  put(furniture, kit.box(legXs[1] - legXs[0] - 0.05, 0.05, 0.03), woodDarkMat, [deskCx, 0.18, legZs[0]])

  // ── Desk lamp (furniture only; nothing of it casts a shadow) ─────────────
  const up = new THREE.Vector3(0, 1, 0)
  const lampOptions: MeshOptions = { cast: false }
  // Base: r 0.085, y 0.76..0.785, centred z 0.115 so it sits fully on the desk (z 0.03..0.20).
  const baseTop = new THREE.Vector3(2.52, DESK_TOP + 0.025, 0.115)
  put(furniture, kit.cylinder(0.085, 0.085, 0.025), lampMat, [baseTop.x, DESK_TOP + 0.0125, baseTop.z], undefined, lampOptions)
  const elbow = new THREE.Vector3(2.6, 1.22, 0.08)
  const head = new THREE.Vector3(...LAMP_HEAD)

  /** A cylinder from a to b: it stands along +y, so turn +y onto the direction a to b. */
  const rod = (a: THREE.Vector3, b: THREE.Vector3, radius: number) => {
    const direction = new THREE.Vector3().subVectors(b, a)
    const length = direction.length()
    direction.normalize()
    const mesh = kit.mesh(kit.cylinder(radius, radius, length, 12), lampMat, undefined, undefined, lampOptions)
    mesh.position.addVectors(a, b).multiplyScalar(0.5)
    mesh.quaternion.setFromUnitVectors(up, direction)
    furniture.add(mesh)
  }
  rod(baseTop, elbow, 0.011)
  rod(elbow, head, 0.01)
  const joint = (point: THREE.Vector3) =>
    put(furniture, kit.sphere(0.018, 12), lampMat, [point.x, point.y, point.z], undefined, lampOptions)
  joint(new THREE.Vector3(baseTop.x, baseTop.y + 0.01, baseTop.z))
  joint(elbow)
  joint(head)

  // The shade: local +y runs from the neck (at the head) to the mouth, turned to face the aim point.
  const aim = new THREE.Vector3(...LAMP_AIM)
  const facing = new THREE.Vector3().subVectors(aim, head).normalize()
  const shade = new THREE.Group()
  shade.position.copy(head)
  shade.quaternion.setFromUnitVectors(up, facing)
  furniture.add(shade)
  const profile = [
    new THREE.Vector2(0.025, 0),
    new THREE.Vector2(0.034, 0.03),
    new THREE.Vector2(0.055, 0.08),
    new THREE.Vector2(0.085, 0.13),
  ]
  put(shade, new THREE.LatheGeometry(profile, 24), lampMat, [0, 0, 0], undefined, lampOptions)
  // A cap closing the neck: r 0.028, local y -0.02..0.01 (the shade is r 0.028 at y 0.01).
  put(shade, kit.cylinder(0.028, 0.028, 0.03, 16), lampMat, [0, -0.005, 0], undefined, lampOptions)
  // The bulb, just inside the mouth: local y 0.067..0.123, where the shade is wider than 0.049.
  const bulbDepth = 0.095
  put(shade, kit.sphere(0.028, 16), bulbMat, [0, bulbDepth, 0], undefined, { cast: false, receive: false, noBlueprint: true })
  const bulbPosition = head.clone().addScaledVector(facing, bulbDepth)

  // ── Two rolled blueprints leaning against the back wall ──────────────────
  const lean = THREE.MathUtils.degToRad(8)
  const roll = (x: number, radius: number, length: number) => {
    const outer = radius + 0.003
    const end = 0.022
    const sin = Math.sin(lean)
    const cos = Math.cos(lean)
    const group = new THREE.Group()
    // rotation.x = -lean turns +y to (0, cos, -sin): the top tips back toward the wall.
    // Foot height lifts the low back rim onto the floor; foot depth puts the top back rim 2 mm off the wall.
    group.position.set(x, outer * sin, length * sin + outer * cos + 0.002)
    group.rotation.x = -lean
    furniture.add(group)
    put(group, kit.cylinder(radius, radius, length - 2 * end + 0.004, 16), rollMat, [0, length / 2, 0])
    put(group, kit.cylinder(outer, outer, end, 16), rollEndMat, [0, end / 2, 0])
    put(group, kit.cylinder(outer, outer, end, 16), rollEndMat, [0, length - end / 2, 0])
  }
  roll(0.5, 0.035, 0.85)
  roll(0.64, 0.03, 0.75)

  // ── Rug (its own group: hidden in the compact layout) ────────────────────
  const rug = new THREE.Group()
  rug.name = "office-rug"
  root.add(rug)
  // x 1.0..3.5, y 0..0.01, z 0.805..1.855.
  put(rug, kit.box(2.5, 0.01, 1.05, 0.004), kit.mat("rug", { roughness: 0.95 }), [2.25, 0.005, 1.33], undefined, { cast: false })
  const rugTexture = kit.canvas(1024, 432, (context, width, height, palette) => {
    context.fillStyle = palette.rug
    context.fillRect(0, 0, width, height)
    context.strokeStyle = palette.rugTrim
    context.lineWidth = 10
    context.strokeRect(30, 30, width - 60, height - 60)
    context.lineWidth = 4
    context.strokeRect(54, 54, width - 108, height - 108)
  })
  // 0.0018 above the rug's top, inside its flat area.
  put(rug, new THREE.PlaneGeometry(2.48, 1.03), kit.color("#ffffff", { map: rugTexture, roughness: 0.95 }), [2.25, 0.0118, 1.33], [-Math.PI / 2, 0, 0], {
    cast: false,
    noBlueprint: true,
  })

  // ── Lights ───────────────────────────────────────────────────────────────
  const hemi = new THREE.HemisphereLight(0x7c8db5, 0x2a211b, NIGHT.hemi)
  root.add(hemi)

  const fill = new THREE.DirectionalLight(0x9db4d6, NIGHT.fill)
  fill.target.position.set(2.0, 0.9, 0.6)
  fill.position.set(2.0 + 3, 0.9 + 4, 0.6 + 6)
  fill.castShadow = false
  root.add(fill, fill.target)

  const spot = new THREE.SpotLight(0xffc27a, NIGHT.lamp, 4, 0.62, 0.75, 2)
  spot.position.copy(bulbPosition)
  spot.target.position.copy(aim)
  spot.castShadow = false
  spot.shadow.mapSize.set(1024, 1024)
  spot.shadow.camera.near = 0.05
  spot.shadow.camera.far = 4
  spot.shadow.camera.updateProjectionMatrix()
  spot.shadow.bias = -0.0004
  spot.shadow.normalBias = 0.02
  spot.shadow.radius = 4
  root.add(spot, spot.target)

  const spill = new THREE.PointLight(0x9db4d6, 0.15, 1.2, 2)
  spill.position.set(1.42, 1.02, 0.52)
  spill.castShadow = false
  root.add(spill)

  const sun = new THREE.DirectionalLight(0xfff1dc, 0)
  sun.target.position.set(1.9, 0.6, 0.8)
  sun.position.set(1.9 + 5.5, 0.6 + 7.0, 0.8 + 6.5)
  sun.castShadow = false
  const sunCamera = sun.shadow.camera
  sunCamera.left = -3.2
  sunCamera.right = 3.2
  sunCamera.top = 3.2
  sunCamera.bottom = -3.2
  sunCamera.near = 1
  sunCamera.far = 25
  sunCamera.updateProjectionMatrix()
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.bias = -0.0004
  sun.shadow.normalBias = 0.02
  root.add(sun, sun.target)

  // Scratch colours, made once.
  const skyNight = new THREE.Color("#7C8DB5")
  const skyDay = new THREE.Color("#F4EEE5")
  const groundNight = new THREE.Color("#2A211B")
  const groundDay = new THREE.Color("#CBB89A")

  let shadows = true

  const mix = (power: number) => {
    const day = kit.daylight
    const night = 1 - day
    hemi.color.lerpColors(skyNight, skyDay, day)
    hemi.groundColor.lerpColors(groundNight, groundDay, day)
    hemi.intensity = NIGHT.hemi + (DAY.hemi - NIGHT.hemi) * day
    fill.intensity = NIGHT.fill * night + DAY.fill * day
    spot.intensity = NIGHT.lamp * night * power
    spill.intensity = 0.15 * night * power
    sun.intensity = DAY.sun * day * (0.65 + 0.35 * power)
    const rest = bulbMat.userData.restGlow
    bulbMat.emissiveIntensity = (typeof rest === "number" ? rest : 0) * power

    cast(day)
  }

  /** Exactly one light casts the shadows: the lamp by night, the sun by day, neither when shadows are off. */
  const cast = (day: number) => {
    const spotCasts = shadows && day < 0.5
    const sunCasts = shadows && day >= 0.5
    if (spot.castShadow !== spotCasts) spot.castShadow = spotCasts
    if (sun.castShadow !== sunCasts) sun.castShadow = sunCasts
  }
  mix(0)

  // Everything in `furniture` is static: merge it by material.
  kit.weld(furniture)

  return {
    group: root,
    height: ROOM_HEIGHT,
    // Just under the slab, which is 0.16 thick.
    floor: -0.25,

    layout(mode: LayoutMode, slugs: string[]): Layout {
      rug.visible = mode === "wide"
      const anchors: Record<string, Anchor> = {}
      slugs.forEach((slug) => {
        if (!Object.prototype.hasOwnProperty.call(OFFICE_ANCHORS, slug)) return
        const anchor = OFFICE_ANCHORS[slug]
        const [x, y, z] = anchor.position
        const onRug = rug.visible && y === 0 && x >= RUG.x0 && x <= RUG.x1 && z >= RUG.z0 && z <= RUG.z1
        anchors[slug] = {
          position: [x, onRug ? RUG.top : y, z],
          rotationY: anchor.rotationY,
          scale: anchor.scale,
        }
      })
      const camera = OFFICE_CAMERA[mode]
      return {
        anchors,
        camera: { direction: [camera.direction[0], camera.direction[1], camera.direction[2]], fov: camera.fov },
        keep: mode === "wide" ? ROOM_CORNERS.map((corner): Vec3 => [corner[0], corner[1], corner[2]]) : [],
      }
    },

    setShadows(enabled: boolean) {
      shadows = enabled
      cast(kit.daylight)
    },

    alternate() {
      if (!shadows) return undefined
      // The other theme's shadows come from the other light.
      const spotCasts = spot.castShadow
      const sunCasts = sun.castShadow
      spot.castShadow = !spotCasts
      sun.castShadow = !sunCasts
      return () => {
        spot.castShadow = spotCasts
        sun.castShadow = sunCasts
      }
    },

    update(frame: RoomFrame) {
      mix(frame.power)
    },
  }
}
