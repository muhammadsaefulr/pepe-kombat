import { db } from '@/lib/db'
import { getSession } from '@/lib/telegram/telegramSession'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const uid = searchParams.get("uid")

  try {

    const session = await getSession()
    if (!session) {
      return NextResponse.json({ message: "Required Auth Session !" }, { status: 401 })
    }

    if (!uid || isNaN(Number(uid))) {
      return NextResponse.json({ message: "Invalid uid parameter !" }, { status: 400 })
    }

    const uidBigInt = BigInt(uid);
    const sesBigInt = BigInt(session.user.telegramId)

    // console.log("uid test: ", uidBigInt)
    // console.log("session id: ", session.user.telegramId)

    const isUidExist = await db.users.findUnique({
      where: {
        telegram_id: uidBigInt
      }
    })

    if (!isUidExist) {
      return NextResponse.json({
        message: "User id not found",
      }, { status: 404 })
    }

    if (uidBigInt == sesBigInt) {
      return NextResponse.json({ message: "Cannot adding personal userid into friends" }, { status: 400 })
    }

    const existingFriends = await db.friendlist.findMany({
      where: {
        telegram_id: session.user.telegramId,
        friend_id: isUidExist?.telegram_id,
      },
    });

    if (existingFriends.length > 0) {
      return NextResponse.json({ message: `User Sudah Ada Dalam Friendlist !` })
    }

    await db.friendlist.create({
      data: {
        telegram_id: session.user.telegramId,
        friend_id: isUidExist?.telegram_id
      }
    })

    return NextResponse.json({ message: `Berhasil Menambahkan ${isUidExist.username} Sebagai Teman` })
  } catch (e) {
    console.error('Error during PUT:', e);
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }

}

export async function GET(req: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ message: "Required Auth Session !" }, { status: 401 })
    }

    const userId = session.user.telegramId

    const listFriends = await db.friendlist.findMany({
      where: {
        OR: [
          { telegram_id: userId },
          { friend_id: userId },
        ],
      },
      include: {
        friend: true,
        user: true
      }
    })

    const friendList = listFriends.map(friend => {
      const isCurrentUserTelegramId = friend.telegram_id === BigInt(userId);
      const selectedFriend = isCurrentUserTelegramId ? friend.friend : friend.user;

      return {
        ...selectedFriend,
        telegram_id: selectedFriend.telegram_id.toString()
      }

    });

    return NextResponse.json({ data: friendList }, { status: 200 })

  } catch (e) {
    console.error('Error during PUT:', e);
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}