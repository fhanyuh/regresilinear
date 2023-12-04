import StateList from "../components/stateList"
import AddStatePage from "./addState/page"

const Injection = () => {
  return (
    <div>
      <h1>Injection</h1>
      <AddStatePage />
      <div className="gap-4 grid">
        <StateList />
      </div>
    </div>
  )
}

export default Injection
