"use client"
import "katex/dist/katex.min.css"
import { InlineMath, BlockMath } from "react-katex"
import Store from "../regresilinear/store"

const EqB = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-sm font-medium py-0 shadow-inner ">
          <BlockMath>{String.raw`
      b = {N \sum (X_i Y_i) - \sum X_i \sum Y_i  \over N \sum X_i^2 - ( \sum X_i )^2 }
    `}</BlockMath>
        </div>
        <div className="collapse-content text-sm overflow-auto">
          <br />
          <br />
          <BlockMath>{String.raw`
      b = {{\text{${Store.state.totalRow}}} \times {\text{${Store.state.sumXY}}} - {\text{${Store.state.sumX}}} \times {\text{${Store.state.sumY}}}  \over {\text{${Store.state.totalRow}}} \times {\text{${Store.state.sumX2}}} - ( {\text{${Store.state.sumX}}} )^2 }
      `}</BlockMath>
          <BlockMath>{String.raw`
      b = {{\text{${Store.state.b_1}}} - {\text{${Store.state.b_2}}}  \over {\text{${Store.state.penyebut_1}}} - {\text{${Store.state.penyebut_2}}} }
      `}</BlockMath>
          <BlockMath>{String.raw`
      b = {{\text{${Store.state.b_3}}} \over {\text{${Store.state.penyebut_3}}} }
      `}</BlockMath>
          <BlockMath>{String.raw`
      b = {{\text{${Store.state.b}}}}
      `}</BlockMath>
        </div>
      </div>
    </div>
  )
}
export default EqB
