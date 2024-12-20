import { getSession } from '@/lib/telegram/telegramSession'
import { NextResponse } from 'next/server'

export async function GET() {
    const session = await getSession()

    if (session) {
        return NextResponse.json({ isAuthenticated: true, data: session })
    } else {
        return NextResponse.json({ isAuthenticated: false }, { status: 401 })
    }
}