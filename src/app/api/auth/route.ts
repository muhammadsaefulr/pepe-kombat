import { NextResponse } from 'next/server'
import { validateTelegramWebAppData } from '@/lib/telegram/telegramAuthValidation'
import { cookies } from 'next/headers'
import { encryptJWT, SESSION_DURATION } from '@/lib/telegram/telegramSession'

export async function POST(request: Request) {
  const { initData } = await request.json()

  const validationResult = validateTelegramWebAppData(initData)

  if (validationResult.validatedData) {
    const user = { telegramId: validationResult.user.id }

    const expires = new Date(Date.now() + SESSION_DURATION)
    const session = await encryptJWT({ user, expires })

    cookies().set("session", session, { expires, httpOnly: true })

    return NextResponse.json({ message: 'Authentication successful' })
  } else {
    return NextResponse.json({ message: validationResult.message }, { status: 401 })
  }
}