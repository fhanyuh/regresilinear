"use client"
import "katex/dist/katex.min.css"
import { InlineMath, BlockMath } from "react-katex"
import Store from "../regresilinear/store"

const EqDeltaB = () => {
  return (
    <>
      <BlockMath>{String.raw` \Delta b = \Delta y { \sqrt{N} \over \sqrt{ N \sum X_i^2 - ( \sum X_i )^2 }} `}</BlockMath>
      <BlockMath>{String.raw` \Delta b = {\text{${Store.state.deltaY}}} { \sqrt{\text{${Store.state.totalRow}}} \over \sqrt{ {\text{${Store.state.totalRow}}} \times {\text{${Store.state.sumX2}}} - ( {\text{${Store.state.sumX}}} )^2 }} `}</BlockMath>
      <BlockMath>{String.raw` \Delta b = {\text{${Store.state.deltaY}}} { \sqrt{\text{${Store.state.totalRow}}} \over \sqrt{{\text{${Store.state.penyebut_1}}} - {\text{${Store.state.penyebut_2}}}}} `}</BlockMath>
      <BlockMath>{String.raw` \Delta b = {\text{${Store.state.deltaY}}} { \sqrt{\text{${Store.state.deltaB_1}}}} `}</BlockMath>
      <BlockMath>{String.raw` \Delta b = {\text{${Store.state.deltaY}}} \times { \text{${Store.state.deltaB_2}}} `}</BlockMath>
      <BlockMath>{String.raw` \Delta b = { \text{${Store.state.deltaB}}} `}</BlockMath>
    </>
  )
}
export default EqDeltaB
