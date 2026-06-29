import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { hashPassword, validatePasswordStrength } from '@/lib/password'
import {
  createParticipantSessionToken,
  PARTICIPANT_SESSION_COOKIE,
  verifyInscriptionSetupToken,
} from '@/lib/participant-session'
import { isMailConfigured } from '@/lib/mail'
import { sendAccountCreatedToUser } from '@/lib/emails/inscription-notifications'

const registerSchema = z.object({
  setupToken: z.string().min(1),
  password: z.string().min(8),
  passwordConfirm: z.string().min(8),
})

function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = registerSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Données invalides.' }, { status: 400 })
    }

    const { setupToken, password, passwordConfirm } = parsed.data
    if (password !== passwordConfirm) {
      return NextResponse.json({ error: 'Les mots de passe ne correspondent pas.' }, { status: 400 })
    }

    const strengthError = validatePasswordStrength(password)
    if (strengthError) {
      return NextResponse.json({ error: strengthError }, { status: 400 })
    }

    const setup = verifyInscriptionSetupToken(setupToken)
    if (!setup) {
      return NextResponse.json(
        { error: 'Lien expiré ou invalide. Connectez-vous si vous avez déjà un compte.' },
        { status: 400 },
      )
    }

    const inscription = await prisma.inscription.findUnique({ where: { id: setup.inscriptionId } })
    if (!inscription) {
      return NextResponse.json({ error: 'Inscription introuvable.' }, { status: 404 })
    }

    if (inscription.email.toLowerCase() !== setup.email.toLowerCase()) {
      return NextResponse.json({ error: 'Jeton invalide.' }, { status: 400 })
    }

    const existingParticipant = await prisma.participant.findUnique({
      where: { email: inscription.email.toLowerCase() },
    })

    if (existingParticipant) {
      await prisma.inscription.update({
        where: { id: inscription.id },
        data: { participantId: existingParticipant.id },
      })
      return NextResponse.json({
        existingAccount: true,
        email: existingParticipant.email,
        message: 'Un compte existe déjà pour cet e-mail. Connectez-vous pour suivre votre inscription.',
      })
    }

    const passwordHash = await hashPassword(password)
    const participant = await prisma.participant.create({
      data: {
        email: inscription.email.toLowerCase().trim(),
        passwordHash,
        inscriptions: { connect: { id: inscription.id } },
      },
    })

    if (isMailConfigured()) {
      try {
        await sendAccountCreatedToUser({
          prenom: inscription.prenom,
          nom: inscription.nom,
          email: inscription.email,
        })
      } catch (mailError) {
        console.error('Échec envoi e-mail compte créé:', mailError)
      }
    }

    const token = createParticipantSessionToken(participant.id)
    const res = NextResponse.json({ ok: true })
    res.cookies.set(PARTICIPANT_SESSION_COOKIE, token, sessionCookieOptions())
    return res
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
