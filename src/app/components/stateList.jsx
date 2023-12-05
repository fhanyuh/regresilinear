import DeleteState from "../components/deleteState"

async function StateList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/injection`,
    {
      cache: "no-store",
    },
  )
  const response = await res.json()
  const state = response.state
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
