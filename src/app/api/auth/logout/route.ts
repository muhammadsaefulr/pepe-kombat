import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE() {
    const session = cookies().get("session")

    if (session) {
        cookies().delete("session")
        return NextResponse.json({ message: "Berhasil Logout" }, { status: 200 })

    } else {
        return NextResponse.json({ message: "Session Data Notfound, Already Logged out." })
    }
}