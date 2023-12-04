import moongose, { Schema } from "mongoose"

const stateSchema = new Schema({
  jenisFitur: String,
  lastAction: Date,
  from: Date,
  until: Date,
  state: Number,
})

const State = moongose.models.State || moongose.model("State", stateSchema)

export default State
