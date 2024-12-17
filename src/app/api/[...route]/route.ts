import { validateTelegramWebAppData } from '@/lib/telegram/telegramAuthValidation'
import { cookies } from 'next/headers'
import { encryptJWT, SESSION_DURATION } from '@/lib/telegram/telegramSession'
import { Hono } from 'hono';
import { handle } from 'hono/vercel'
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient();
const app = new Hono().basePath('/api')

app.post('/auth/telegram', async (c) => {

  const initData = await c.req.json()

  try {

    const validationResult = validateTelegramWebAppData(initData)

    if (validationResult.validatedData) {

      const user = { telegramId: validationResult.user.id ?? 0, username: validationResult.user.username }

      const findUser = await prisma.users.findUnique({ where: { telegram_id: user.telegramId } })

      // console.log("find user: ", findUser)

      if (!findUser) {
        await prisma.users.create({
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

      return c.json({ message: "Auth Success", session }, 200)
    }

  } catch (e) {
    return c.json({
      error: e
    }, 500)
  }
})

app.get('/hello', async (c) => {
  return c.json({
    message: 'Hello from Hono on Vercel!'
  })
})

export const POST = handle(app)
export const GET = handle(app)