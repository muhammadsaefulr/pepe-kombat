import { validateTelegramWebAppData } from '@/lib/telegram/telegramAuthValidation'
import { cookies } from 'next/headers'
import { encryptJWT, SESSION_DURATION } from '@/lib/telegram/telegramSession'
import { Hono } from 'hono';

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.post("/auth/telegram", async (c) => {

  try {
    const { initData } = await c.req.json();

    const validationResult = validateTelegramWebAppData(initData)

    if (validationResult.validatedData) {
      console.log("Validation result: ", validationResult)
      const user = { telegramId: validationResult.user.id }

      const expires = new Date(Date.now() + SESSION_DURATION)
      const session = await encryptJWT({ user, expires })

      cookies().set("session", session, { expires, httpOnly: true })

      return c.json({
        message: 'Authentication successful'
      }, 200)

    } else {
      return c.json({
        message: 'Authentication failed'
      }, 401)
    }

  } catch (e) {
    return c.json({
      error: e
    })
  }
})

