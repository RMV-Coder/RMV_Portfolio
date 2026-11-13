import { aetherform } from "./products/aetherform"
import { calculusSolver } from "./products/calculus-solver"
import { emmaus } from "./products/emmaus"
import { localpass } from "./products/localpass"
import { myboardhub } from "./products/myboardhub"
import { omnigraph } from "./products/omnigraph"
import { syntaxlab } from "./products/syntaxlab"
import { veltriva } from "./products/veltriva"
import { veyra } from "./products/veyra"
import type { ProductBuilder } from "./types"

/** Every product object, by the slug its tool is known by. A slug with no builder is simply not shown. */
export const productBuilders: Record<string, ProductBuilder> = {
  myboardhub,
  localpass,
  veltriva,
  emmaus,
  syntaxlab,
  "calculus-solver": calculusSolver,
  veyra,
  omnigraph,
  aetherform,
}
