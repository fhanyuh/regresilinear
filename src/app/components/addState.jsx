"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const AddState = () => {
  const router = useRouter()
  const [jenisFitur, setJenisFitur] = useState("")
  const [lastAction, setLastAction] = useState("")
  const [from, setFrom] = useState("")
  const [until, setUntil] = useState("")
  const [state, setState] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!jenisFitur || !from || !until) {
      alert("Please fill the requirement data")
      return
    }
    try {
      const res = await fetch(
        `https://fhan-regresilinear.vercel.app/api/injection`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            jenisFitur,
            lastAction,
            from,
            until,
            state,
          }),
        },
      )
      if (!res.ok) {
        throw new Error("Failed to update state")
      }
      router.refresh()
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
        value={jenisFitur}
      />
      <input
        onChange={(e) => setLastAction(e.target.value)}
        value={lastAction}
        type="datetime-local"
        placeholder="Terakhir diubah"
      />
      <input
        onChange={(e) => setFrom(e.target.value)}
        value={from}
        type="datetime-local"
        placeholder="Mulai dari"
      />
      <input
        onChange={(e) => setUntil(e.target.value)}
        value={until}
        type="datetime-local"
        placeholder="Mulai hingga"
      />
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        type="text"
        placeholder="State"
      />
      <button type="submit">Add State</button>
    </form>
  )
}
export default AddState
