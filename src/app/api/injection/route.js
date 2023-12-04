import connectMongoDB from "../../../../libs/mongodb"
import State from "../../../../models/state"
import { NextResponse } from "next/server"

export async function POST(request) {
  const { jenisFitur, lastAction, from, until, state } = await request.json()
  await connectMongoDB()
  await State.create({ jenisFitur, lastAction, from, until, state })
  return NextResponse.json({ message: "State Created" }, { status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const state = await State.find()
  return NextResponse.json({ state })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id")
  await connectMongoDB()
  await State.findByIdAndDelete(id)
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 })
}
