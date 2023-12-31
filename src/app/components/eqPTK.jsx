"use client"
import "katex/dist/katex.min.css"
import { InlineMath, BlockMath } from "react-katex"
import Store from "../regresilinear/store"

const EqPTK = () => {
  return (
    <>
      <BlockMath>{String.raw`Pelaporan \ (b \pm \Delta b) = {\text{${Store.state.b}}} \pm {\text{${Store.state.deltaB}}}`}</BlockMath>
      <BlockMath>{String.raw`TK = {1 - { \Delta b \over b } \times 100 \%}`}</BlockMath>
      <BlockMath>{String.raw` TK = {\text{${Store.state.tingkatKetelitian}}} \%`}</BlockMath>
    </>
  )
}
export default EqPTK
