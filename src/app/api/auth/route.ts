import { NextResponse } from 'next/server'
import { validateTelegramWebAppData } from '@/lib/telegram/telegramAuthValidation'
import { cookies } from 'next/headers'
import { encryptJWT, SESSION_DURATION } from '@/lib/telegram/telegramSession'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const initData = await req.json()

  // console.log(initData)

  try {
    const validationResult = validateTelegramWebAppData(initData)

    if (validationResult.validatedData) {

      const user = { telegramId: validationResult.user.id ?? 0, username: validationResult.user.username }

      const findUser = await db.users.findUnique({ where: { telegram_id: user.telegramId } })

      if (!findUser) {
        await db.users.create({
          data: {
            telegram_id: user.telegramId,
            username: user.username as string,
            rank_id: 1
          }
        })
      }

      const expires = new Date(Date.now() + SESSION_DURATION)
      const session = await encryptJWT({ user, expires })

      cookies().set("session", session, { expires, httpOnly: true })

      return NextResponse.json({ message: "Auth Success", session })
    } else {
      return NextResponse.json({ message: validationResult.message }, { status: 401 })
    }

  } catch (e) {
    return NextResponse.json({
      error: e
    }, { status: 500 })
  }
}

