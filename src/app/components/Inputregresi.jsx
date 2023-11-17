"use client"
import { useState } from "react"
import Store from "../regresilinear/store"
import Equation from "./equation"
import "katex/dist/katex.min.css"
import { InlineMath, BlockMath } from "react-katex"

const Inputregresi = () => {
  let [jumlahTabel, setJumlahTabel] = useState(4)
  let [render, setRender] = useState(true)

  let listItemsX = []
  let listItemsY = []
  let listItemsX2 = []
  let listItemsY2 = []
  let listItemsXY = []

  function ResetButton() {
    setRender(true)
    for (let i = 0; i < jumlahTabel; i++) {
      document.getElementById("SumX").value = 0
      document.getElementById("SumY").value = 0
      document.getElementById("SumX2").value = 0
      document.getElementById("SumY2").value = 0
      document.getElementById("SumXY").value = 0
    }
  }

  const TabelX = () => {
    listItemsX = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsX.push(
        <input
          key={"X" + i}
          className="input input-bordered input-xs"
          defaultValue={0}
          type="number"
          id={"X" + i}
          name={"X" + i}
        />,
      )
    }
    listItemsX.push(
      <input
        disabled
        className="input input-bordered input-xs my-2"
        key={"SumX"}
        type="number"
        id={"SumX"}
        name={"SumX"}
        placeholder="Sigma X"
      />,
    )
    return listItemsX
  }

  const TabelY = () => {
    listItemsY = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsY.push(
        <input
          key={"Y" + i}
          className="input input-bordered input-xs"
          defaultValue={0}
          type="number"
          id={"Y" + i}
          name={"Y" + i}
        />,
      )
    }
    listItemsY.push(
      <input
        disabled
        className="input input-bordered input-xs my-2"
        key={"SumY"}
        type="number"
        id={"SumY"}
        name={"SumY"}
        placeholder="Sigma Y"
      />,
    )
    return listItemsY
  }

  const TabelX2 = () => {
    listItemsX2 = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsX2.push(
        <input
          disabled
          className="input input-bordered input-xs"
          key={"X2" + i}
          defaultValue={0}
          type="number"
          id={"X2" + i}
          name={"X2" + i}
        />,
      )
    }
    listItemsX2.push(
      <input
        disabled
        className="input input-bordered input-xs my-2"
        key={"SumX2"}
        type="number"
        id={"SumX2"}
        name={"SumX2"}
        placeholder="Sigma X2"
      />,
    )
    return listItemsX2
  }

  const TabelY2 = () => {
    listItemsY2 = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsY2.push(
        <input
          disabled
          className="input input-bordered input-xs"
          key={"Y2" + i}
          defaultValue={0}
          type="number"
          id={"Y2" + i}
          name={"Y2" + i}
        />,
      )
    }
    listItemsY2.push(
      <input
        disabled
        key={"SumY2"}
        className="input input-bordered input-xs my-2"
        type="number"
        id={"SumY2"}
        name={"SumY2"}
        placeholder="Sigma Y2"
      />,
    )
    return listItemsY2
  }

  const TabelXY = () => {
    listItemsXY = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsXY.push(
        <input
          disabled
          className="input input-bordered input-xs"
          key={"XY" + i}
          defaultValue={0}
          type="number"
          id={"XY" + i}
          name={"XY" + i}
        />,
      )
    }
    listItemsXY.push(
      <input
        className="input input-bordered input-xs my-2"
        disabled
        placeholder="Sigma XY"
        key={"SumXY"}
        type="number"
        id={"SumXY"}
        name={"SumXY"}
      />,
    )
    return listItemsXY
  }

  function Pembulatan(x) {
    if (Store.state.pembulatan) {
      return (
        Math.round(x * Store.state.belakangDesimal) /
        Store.state.belakangDesimal
      )
    } else {
      return x
    }
  }

  function DoubleCalculation() {
    CalculationButton()
    CalculationButton()
    Store.action.calculationHandler()
  }
  function CalculationButton() {
    setRender(false)
    Store.state.totalRow = jumlahTabel
    Store.state.cX = []
    Store.state.cY = []
    Store.state.cX2 = []
    Store.state.cY2 = []
    Store.state.cXY = []
    Store.state.sumX = 0
    Store.state.sumY = 0
    Store.state.sumX2 = 0
    Store.state.sumY2 = 0
    Store.state.sumXY = 0
    for (let i = 0; i < jumlahTabel; i++) {
      Store.state.valuesX[i] = document.getElementById("X" + i).value
      Store.state.valuesY[i] = document.getElementById("Y" + i).value
      Store.state.sumX += parseFloat(document.getElementById("X" + i).value)
      Store.state.sumY += parseFloat(document.getElementById("Y" + i).value)
      Store.state.sumX2 += parseFloat(document.getElementById("X2" + i).value)
      Store.state.sumY2 += parseFloat(document.getElementById("Y2" + i).value)
      Store.state.sumXY += parseFloat(document.getElementById("XY" + i).value)
    }
    Store.state.sumX = Pembulatan(Store.state.sumX)
    Store.state.sumY = Pembulatan(Store.state.sumY)
    Store.state.sumX2 = Pembulatan(Store.state.sumX2)
    Store.state.sumY2 = Pembulatan(Store.state.sumY2)
    Store.state.sumXY = Pembulatan(Store.state.sumXY)
    for (let i = 0; i < jumlahTabel; i++) {
      Store.state.cX[i] = Pembulatan(Store.state.valuesX[i])
      Store.state.cY[i] = Pembulatan(Store.state.valuesY[i])
      Store.state.cX2[i] = Pembulatan(
        Store.state.valuesX[i] * Store.state.valuesX[i],
      )
      Store.state.cY2[i] = Pembulatan(
        Store.state.valuesY[i] * Store.state.valuesY[i],
      )
      Store.state.cXY[i] = Pembulatan(
        Store.state.valuesX[i] * Store.state.valuesY[i],
      )
    }
    for (let i = 0; i < jumlahTabel; i++) {
      document.getElementById("X" + i).value = Store.state.valuesX[i]
      document.getElementById("Y" + i).value = Store.state.valuesY[i]
      document.getElementById("X2" + i).value = Store.state.cX2[i]
      document.getElementById("Y2" + i).value = Store.state.cY2[i]
      document.getElementById("XY" + i).value = Store.state.cXY[i]
      document.getElementById("SumX").value = Store.state.sumX
      document.getElementById("SumY").value = Store.state.sumY
      document.getElementById("SumX2").value = Store.state.sumX2
      document.getElementById("SumY2").value = Store.state.sumY2
      document.getElementById("SumXY").value = Store.state.sumXY
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-bold mb-4">Regresi Linear Calculation</h1>
      </div>
      <div>
        <div className="flex gap-1 justify-between items-center">
          <div className="grid grid-cols-1 gap-1">
            <div className="flex w-full justify-center">X</div>
            {TabelX()}
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div className="flex w-full justify-center">Y</div>
            {TabelY()}
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div className="flex w-full justify-center">
              <div>
                X<sup>2</sup>
              </div>
            </div>
            {TabelX2()}
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div className="flex w-full justify-center">
              <div>
                Y<sup>2</sup>
              </div>
            </div>
            {TabelY2()}
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div className="flex w-full justify-center">XY</div>
            {TabelXY()}
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <div>
            {render ? (
              <button
                className="btn btn-xs my-2 btn-primary"
                onClick={DoubleCalculation}
              >
                Calculate
              </button>
            ) : (
              <button
                className="btn btn-xs my-2 btn-neutral"
                onClick={ResetButton}
              >
                Reset
              </button>
            )}
          </div>
          <div className="flex gap-2 flex-row-reverse">
            <button
              className="btn btn-xs my-2 btn-ghost"
              onClick={() => {
                if (jumlahTabel < 3) {
                  alert("Minimal 2")
                } else {
                  setJumlahTabel(jumlahTabel - 1)
                  ResetButton()
                  setRender(true)
                }
              }}
              id="minusTabel"
              type="submit"
            >
              Remove Table
            </button>
            <button
              className="btn btn-xs my-2 btn-outline btn-neutral"
              onClick={() => {
                setJumlahTabel(jumlahTabel + 1)
                ResetButton()
                setRender(true)
              }}
              id="plusTabel"
              type="submit"
            >
              Add Table
            </button>
          </div>
        </div>
      </div>
      <div>{render ? "Loading..." : <Equation />}</div>
    </>
  )
}

export default Inputregresi
