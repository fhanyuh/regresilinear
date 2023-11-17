"use client"
import EqB from "./eqB"
import EqY2 from "./eqY2"
import EqDeltaB from "./eqDeltaB"
import EqPTK from "./eqPTK"
import Credits from "./credits"

const Equation = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <EqB />
      <EqY2 />
      <EqDeltaB />
      <EqPTK />
      <Credits />
    </div>
  )
}

export default Equation
