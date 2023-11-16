"use client"
import { useState } from "react"
import Store from "../regresilinear/store"
import Equation from "./equation"

const Inputregresi = () => {
  let [jumlahTabel, setJumlahTabel] = useState(Store.state.totalRow)
  let [render, setRender] = useState(false)
  let listItemsX = []
  let listItemsY = []
  let listItemsX2 = []
  let listItemsY2 = []
  let listItemsXY = []
  var delayInMilliseconds = 1000

  setTimeout(() => {
    setRender(false)
  }, delayInMilliseconds)

  function reRender() {
    setRender(true)
    setTimeout()
  }

  function ResetButton() {
    for (let i = 0; i < jumlahTabel; i++) {
      document.getElementById("X" + i).value = 0
      document.getElementById("Y" + i).value = 0
      document.getElementById("X2" + i).value = 0
      document.getElementById("Y2" + i).value = 0
      document.getElementById("XY" + i).value = 0
      document.getElementById("SumX").value = 0
      document.getElementById("SumY").value = 0
      document.getElementById("SumX2").value = 0
      document.getElementById("SumY2").value = 0
      document.getElementById("SumXY").value = 0
    }
  }

  function handleButtonClick() {
    for (let i = 0; i < jumlahTabel; i++) {
      document.getElementById("SumX").value = 0
      document.getElementById("SumY").value = 0
      document.getElementById("SumX2").value = 0
      document.getElementById("SumY2").value = 0
      document.getElementById("SumXY").value = 0
    }
    setJumlahTabel(jTabel.value)
    Store.state.totalRow = jTabel.value
  }
  const TabelX = () => {
    listItemsX = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsX.push(
        <input
          key={"X" + i}
          defaultValue={0}
          type="number"
          id={"X" + i}
          name={"X" + i}
        />,
      )
    }
    listItemsX.push(
      <input
        readOnly
        key={"SumX"}
        defaultValue={0}
        type="number"
        id={"SumX"}
        name={"SumX"}
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
          defaultValue={0}
          type="number"
          id={"Y" + i}
          name={"Y" + i}
        />,
      )
    }
    listItemsY.push(
      <input
        readOnly
        key={"SumY"}
        defaultValue={0}
        type="number"
        id={"SumY"}
        name={"SumY"}
      />,
    )
    return listItemsY
  }

  const TabelX2 = () => {
    listItemsX2 = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsX2.push(
        <input
          readOnly
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
        readOnly
        key={"SumX2"}
        defaultValue={0}
        type="number"
        id={"SumX2"}
        name={"SumX2"}
      />,
    )
    return listItemsX2
  }

  const TabelY2 = () => {
    listItemsY2 = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsY2.push(
        <input
          readOnly
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
        readOnly
        key={"SumY2"}
        defaultValue={0}
        type="number"
        id={"SumY2"}
        name={"SumY2"}
      />,
    )
    return listItemsY2
  }

  const TabelXY = () => {
    listItemsXY = []
    for (let i = 0; i < jumlahTabel; i++) {
      listItemsXY.push(
        <input
          readOnly
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
        readOnly
        key={"SumXY"}
        defaultValue={0}
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
    reRender()
  }
  function CalculationButton() {
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
      <h1>Tabel</h1>
      <h3>Jumlah Tabel</h3>
      <input
        defaultValue={4}
        type="number"
        min={2}
        max={10}
        id="jTabel"
        name="jTabel"
      />
      <button onClick={handleButtonClick} type="submit">
        Atur Tabel
      </button>
      <div>
        <div className="grid grid-cols-5 gap-2">
          <div className="grid grid-cols-1 gap-2">X{TabelX()}</div>
          <div className="grid grid-cols-1 gap-2">Y{TabelY()}</div>
          <div className="grid grid-cols-1 gap-2">
            X2
            {TabelX2()}
          </div>
          <div className="grid grid-cols-1 gap-2">
            Y2
            {TabelY2()}
          </div>
          <div className="grid grid-cols-1 gap-2">
            XY
            {TabelXY()}
          </div>
        </div>
        <button onClick={ResetButton}>Reset</button>
        <button onClick={DoubleCalculation}>Calculate</button>
      </div>
      <div>{render ? "Loading..." : <Equation />}</div>
    </>
  )
}

export default Inputregresi
