"use client"
import { useRouter } from "next/navigation"
const DeleteState = ({ id }) => {
  const router = useRouter()
  const deleteState = async () => {
    const confirmed = confirm("Are you sure?")
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/injection?id=${id}`, {
        method: "DELETE",
      })
      if (res.ok) {
        router.refresh()
      }
    }
  }
  return <button onClick={deleteState}>Delete</button>
}

export default DeleteState
