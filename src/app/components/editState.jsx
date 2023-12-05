"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const EditState = ({ id, jenisFitur, lastAction, from, until, state }) => {
  const router = useRouter()
  const [newJenisFitur, setJenisFitur] = useState(jenisFitur)
  const [newLastAction, setLastAction] = useState(lastAction)
  const [newFrom, setFrom] = useState(from)
  const [newUntil, setUntil] = useState(until)
  const [newState, setState] = useState(state)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/injection/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newJenisFitur,
            newLastAction,
            newFrom,
            newUntil,
            newState,
          }),
        },
      )
      if (!res.ok) {
        throw new Error("Failed to update state")
      }
      router.push("/injection")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Jenis Fitur"
        onChange={(e) => setJenisFitur(e.target.value)}
        value={newJenisFitur}
      />
      <input
        onChange={(e) => setLastAction(e.target.value)}
        value={newLastAction}
        type="datetime-local"
        placeholder="Terakhir diubah"
      />
      <input
        onChange={(e) => setFrom(e.target.value)}
        value={newFrom}
        type="datetime-local"
        placeholder="Mulai dari"
      />
      <input
        onChange={(e) => setUntil(e.target.value)}
        value={newUntil}
        type="datetime-local"
        placeholder="Mulai hingga"
      />
      <input
        onChange={(e) => setState(e.target.value)}
        value={setState}
        type="text"
        placeholder={`${state == 1 ? "true" : "false"}`}
      />
      <button type="submit">Update State</button>
    </form>
  )
}
export default EditState
