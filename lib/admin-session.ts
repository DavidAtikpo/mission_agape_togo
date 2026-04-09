import { createHmac, timingSafeEqual } from 'node:crypto'

const MAX_AGE_SEC = 60 * 60 * 24 * 7 // 7 jours

export function createAdminSessionToken(): string {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 16) {
    throw new Error('ADMIN_SESSION_SECRET doit être défini (min. 16 caractères)')
  }
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_SEC
  const payload = Buffer.from(JSON.stringify({ exp }), 'utf8').toString('base64url')
  const sig = createHmac('sha256', secret).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export function verifyAdminSessionToken(token: string | undefined): boolean {
  if (!token) return false
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 16) return false
  const parts = token.split('.')
  if (parts.length !== 2) return false
  const [payload, sig] = parts
  const expected = createHmac('sha256', secret).update(payload).digest('base64url')
  try {
    if (expected.length !== sig.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(sig))) {
      return false
    }
    const json = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as { exp?: number }
    if (typeof json.exp !== 'number') return false
    if (json.exp < Math.floor(Date.now() / 1000)) return false
    return true
  } catch {
    return false
  }
}

export const ADMIN_SESSION_COOKIE = 'admin_session'
