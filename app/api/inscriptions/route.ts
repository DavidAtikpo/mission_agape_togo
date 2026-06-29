import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { createInscriptionSetupToken } from '@/lib/participant-session'
import { isMailConfigured } from '@/lib/mail'
import { notifyInscriptionSubmitted } from '@/lib/emails/inscription-notifications'

const payloadSchema = z.object({
  inscription: z.record(z.unknown()),
  renseignements: z.record(z.unknown()),
  consentement: z.record(z.unknown()),
})

const inscriptionRequired = z.object({
  nom: z.string().min(1),
  prenom: z.string().min(1),
  email: z.string().email(),
  telephone: z.string().min(1),
  formationSouhaitee: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = payloadSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 })
    }

    const { inscription, renseignements, consentement } = parsed.data
    const ins = inscriptionRequired.safeParse(inscription)
    if (!ins.success) {
      return NextResponse.json(
        { error: 'Étape « Inscription » incomplète : nom, prénom, email et téléphone sont requis.' },
        { status: 400 },
      )
    }

    const consent = consentement as Record<string, unknown>
    if (consent.accepteReglement !== true) {
      return NextResponse.json(
        { error: 'Le consentement au règlement intérieur est obligatoire.' },
        { status: 400 },
      )
    }

    const row = await prisma.inscription.create({
      data: {
        email: ins.data.email.trim(),
        nom: ins.data.nom.trim(),
        prenom: ins.data.prenom.trim(),
        telephone: ins.data.telephone.trim(),
        formationSouhaitee: ins.data.formationSouhaitee?.trim() || null,
        inscriptionData: inscription as object,
        renseignementsData: renseignements as object,
        consentementData: consentement as object,
      },
    })

    const setupToken = createInscriptionSetupToken(row.id, row.email)

    if (isMailConfigured()) {
      try {
        await notifyInscriptionSubmitted({
          prenom: row.prenom,
          nom: row.nom,
          email: row.email,
          telephone: row.telephone,
          formationSouhaitee: row.formationSouhaitee,
          inscriptionId: row.id,
          setupToken,
        })
      } catch (mailError) {
        console.error('Échec envoi e-mails inscription:', mailError)
      }
    } else {
      console.warn('SMTP non configuré — aucun e-mail envoyé pour l’inscription', row.id)
    }

    return NextResponse.json({ ok: true, id: row.id, setupToken })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Erreur serveur lors de l’enregistrement.' }, { status: 500 })
  }
}
