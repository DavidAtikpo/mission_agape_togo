import { NextResponse } from 'next/server'
import { createAdminSessionToken, ADMIN_SESSION_COOKIE } from '@/lib/admin-session'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string }
    const password = body.password ?? ''
    const expected = process.env.ADMIN_PASSWORD
    if (!expected || expected.length < 8) {
      console.error('ADMIN_PASSWORD manquant ou trop court (min. 8 caractères)')
      return NextResponse.json({ error: 'Configuration serveur incorrecte.' }, { status: 500 })
    }
    if (password !== expected) {
      return NextResponse.json({ error: 'Mot de passe incorrect.' }, { status: 401 })
    }

    let token: string
    try {
      token = createAdminSessionToken()
    } catch {
      return NextResponse.json({ error: 'Configuration serveur incorrecte.' }, { status: 500 })
    }

    const res = NextResponse.json({ ok: true })
    res.cookies.set(ADMIN_SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }
}
