"use client"
import "katex/dist/katex.min.css"
import { InlineMath, BlockMath } from "react-katex"
import Store from "../regresilinear/store"

const EqY2 = () => {
  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xs font-medium overflow-auto shadow-inner">
          <BlockMath>{String.raw`
      \Delta y^2 = {1 \over N-2} \left\lbrack \sum Y_i^2 - { \sum X_i^2 (\sum Y_i)^2 - 2 \sum X_i \sum Y_i \sum (X_i Y_i) + N (\sum X_i Y_i)^2  \over N \sum X_i^2 - ( \sum X_i )^2  } \right\rbrack
    `}</BlockMath>
        </div>

        <div className="collapse-content text-xs overflow-auto">
          <br />
          <br />
          <BlockMath>{String.raw`
      \Delta y^2 = {1 \over {\text{${Store.state.totalRow}}}-2} \left\lbrack  {\text{${Store.state.sumY2}}} - { {\text{${Store.state.sumX2}}} ( {\text{${Store.state.sumY}}})^2 - 2 \times {\text{${Store.state.sumX}}} \times {\text{${Store.state.sumY}}} \times ({\text{${Store.state.sumXY}}}) + {\text{${Store.state.totalRow}}} ( {\text{${Store.state.sumXY}}})^2  \over {\text{${Store.state.totalRow}}} \times {\text{${Store.state.sumX2}}} - ( {\text{${Store.state.sumX}}} )^2  } \right\rbrack
    `}</BlockMath>
          <BlockMath>{String.raw`
      \Delta y^2 = {1 \over {\text{${Store.state.totalRow}}}-2} \left\lbrack  {\text{${Store.state.sumY2}}} - { {\text{${Store.state.deltaY2_1}}} - {\text{${Store.state.deltaY2_2}}} + {\text{${Store.state.deltaY2_3}}} \over {\text{${Store.state.penyebut_1}}} - {\text{${Store.state.penyebut_2}}} } \right\rbrack
    `}</BlockMath>
          <BlockMath>{String.raw`
      \Delta y^2 = {1 \over {\text{${Store.state.totalRow}}}-2} \left\lbrack  {\text{${Store.state.sumY2}}} - { {\text{${Store.state.deltaY2_4}}} \over {\text{${Store.state.penyebut_3}}} }\right\rbrack
    `}</BlockMath>
          <BlockMath>{String.raw`
      \Delta y^2 = {1 \over {\text{${Store.state.totalRow}}}-2} \left\lbrack  {\text{${Store.state.sumY2}}} - {\text{${Store.state.deltaY2_5}}}\right\rbrack
    `}</BlockMath>
          <BlockMath>{String.raw`
      \Delta y^2 = {1 \over {\text{${
        Store.state.totalRow - 2
      }}}} \times {\text{${Store.state.deltaY2_6}}}
    `}</BlockMath>
          <BlockMath>{String.raw`
      \Delta y^2 = {\text{${Store.state.deltaY2}}}
    `}</BlockMath>
        </div>
      </div>
    </>
  )
}

export default EqY2
