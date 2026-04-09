import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from '@/lib/admin-session'

async function assertAdmin() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value
  if (!verifyAdminSessionToken(token)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  return null
}

export async function GET(_request: Request, ctx: { params: Promise<{ id: string }> }) {
  const unauthorized = await assertAdmin()
  if (unauthorized) return unauthorized

  const { id } = await ctx.params
  const row = await prisma.inscription.findUnique({ where: { id } })
  if (!row) return NextResponse.json({ error: 'Introuvable' }, { status: 404 })
  return NextResponse.json(row)
}

const patchSchema = z.object({
  status: z.enum(['NOUVELLE', 'EN_COURS', 'TRAITEE']),
})

export async function PATCH(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const unauthorized = await assertAdmin()
  if (unauthorized) return unauthorized

  const { id } = await ctx.params
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'JSON invalide' }, { status: 400 })
  }
  const parsed = patchSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Statut invalide' }, { status: 400 })
  }

  try {
    const row = await prisma.inscription.update({
      where: { id },
      data: { status: parsed.data.status },
    })
    return NextResponse.json(row)
  } catch {
    return NextResponse.json({ error: 'Mise à jour impossible' }, { status: 404 })
  }
}
