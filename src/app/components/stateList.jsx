import { useEffect, useState } from "react"
import DeleteState from "../components/deleteState"

const getState = async () => {
  try {
    const res = await fetch(
      "https://fhan-regresilinear.vercel.app/api/injection",
      {
        cache: "no-store",
      },
    )
    if (!res.ok) {
      throw new Error("Failed to fetch state")
    }
    return res.json()
  } catch (error) {
    console.log("Error loading state : ", error)
  }
}

const StateList = async () => {
  const [state, setState] = useState([])
  useEffect(() => {
    async function fetchState() {
      let stateList = await getState()
      if (stateList) {
        setState(stateList)
      }
    }
  })
  return (
    <>
      {state.map((i) => (
        <div
          key={i._id}
          className="flex flex-col bg-amber-500 px-4 py-2 w-full"
        >
          <div className="flex justify-between">
            <p>{i.jenisFitur ? i.jenisFitur : "jenisFitur"}</p>
            <p>{i.state ? i.state : "state"}</p>
          </div>
          <div className="flex justify-between">
            <p>{i.lastAction ? i.lastAction : "lastAction"}</p>
            <p>{i.from ? i.from : "from"}</p>
            <p>{i.until ? i.until : "until"}</p>
          </div>
          <div className="flex gap-2">
            <a href={`/injection/editState/${i._id}`}>Edit</a>
            <DeleteState id={i._id} />
          </div>
        </div>
      ))}
    </>
  )
}

export default StateList
