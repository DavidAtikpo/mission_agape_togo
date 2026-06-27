import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyInscriptionSetupToken } from '@/lib/participant-session'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')
  const setup = verifyInscriptionSetupToken(token ?? undefined)

  if (!setup) {
    return NextResponse.json({ error: 'Lien expiré ou invalide.' }, { status: 400 })
  }

  const inscription = await prisma.inscription.findUnique({
    where: { id: setup.inscriptionId },
    select: { id: true, email: true, nom: true, prenom: true, participantId: true },
  })

  if (!inscription || inscription.email.toLowerCase() !== setup.email.toLowerCase()) {
    return NextResponse.json({ error: 'Inscription introuvable.' }, { status: 404 })
  }

  const existingAccount = Boolean(inscription.participantId)

  return NextResponse.json({
    email: inscription.email,
    nom: inscription.nom,
    prenom: inscription.prenom,
    existingAccount,
  })
}
