import connectMongoDB from "../../../../../libs/mongodb"
import State from "../../../../../models/state"
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
  const { id } = params
  const {
    newJenisFitur: jenisFitur,
    newLastAction: lastAction,
    newFrom: from,
    newUntil: until,
    newState: state,
  } = await request.json()
  await connectMongoDB()
  await State.findByIdAndUpdate(id, {
    jenisFitur,
    lastAction,
    from,
    until,
    state,
  })
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 })
}

export async function GET(request, { params }) {
  const { id } = params
  await connectMongoDB()
  const state = await State.findOne({ _id: id })
  return NextResponse.json({ state }, { status: 200 })
}
