import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { verifyPassword } from '@/lib/password'
import {
  createParticipantSessionToken,
  PARTICIPANT_SESSION_COOKIE,
} from '@/lib/participant-session'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = loginSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: 'E-mail ou mot de passe incorrect.' }, { status: 401 })
    }

    const email = parsed.data.email.toLowerCase().trim()
    const participant = await prisma.participant.findUnique({ where: { email } })
    if (!participant) {
      return NextResponse.json({ error: 'E-mail ou mot de passe incorrect.' }, { status: 401 })
    }

    const valid = await verifyPassword(parsed.data.password, participant.passwordHash)
    if (!valid) {
      return NextResponse.json({ error: 'E-mail ou mot de passe incorrect.' }, { status: 401 })
    }

    await prisma.inscription.updateMany({
      where: {
        email: { equals: email, mode: 'insensitive' },
        participantId: null,
      },
      data: { participantId: participant.id },
    })

    const token = createParticipantSessionToken(participant.id)
    const res = NextResponse.json({ ok: true })
    res.cookies.set(PARTICIPANT_SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
