import EditState from "../../../components/editState"

const getStateById = async (id) => {
  try {
    const res = await fetch(`http:localhost:3000/api/injection/${id}`, {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch state")
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const EditStatePage = async ({ params }) => {
  const { id } = params
  const { state } = await getStateById(id)
  const { jenisFitur, lastAction, from, until } = state
  const State = state.state

  return (
    <>
      <h1>Edit State Page</h1>
      <EditState
        id={id}
        jenisFitur={jenisFitur}
        lastAction={lastAction}
        from={from}
        until={until}
        state={State}
      />
    </>
  )
}

export default EditStatePage
