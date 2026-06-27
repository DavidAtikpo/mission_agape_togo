import { createHmac, timingSafeEqual } from 'node:crypto'

const MAX_AGE_SEC = 60 * 60 * 24 * 7 // 7 jours
const SETUP_MAX_AGE_SEC = 60 * 60 * 24 // 24 h pour créer le compte après inscription

export const PARTICIPANT_SESSION_COOKIE = 'participant_session'

function getSecret(): string {
  const secret = process.env.PARTICIPANT_SESSION_SECRET ?? process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 16) {
    throw new Error('PARTICIPANT_SESSION_SECRET ou ADMIN_SESSION_SECRET requis (min. 16 caractères)')
  }
  return secret
}

function signPayload(payload: object): string {
  const secret = getSecret()
  const encoded = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
  const sig = createHmac('sha256', secret).update(encoded).digest('base64url')
  return `${encoded}.${sig}`
}

function verifySignedToken<T extends { exp: number }>(token: string): T | null {
  const secret = process.env.PARTICIPANT_SESSION_SECRET ?? process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 16) return null

  const parts = token.split('.')
  if (parts.length !== 2) return null
  const [payload, sig] = parts
  const expected = createHmac('sha256', secret).update(payload).digest('base64url')
  try {
    if (expected.length !== sig.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(sig))) {
      return null
    }
    const json = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as T
    if (typeof json.exp !== 'number' || json.exp < Math.floor(Date.now() / 1000)) return null
    return json
  } catch {
    return null
  }
}

export function createParticipantSessionToken(participantId: string): string {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_SEC
  return signPayload({ type: 'session', sub: participantId, exp })
}

export function verifyParticipantSessionToken(token: string | undefined): string | null {
  if (!token) return null
  const json = verifySignedToken<{ type: string; sub: string; exp: number }>(token)
  if (!json || json.type !== 'session' || typeof json.sub !== 'string') return null
  return json.sub
}

export function createInscriptionSetupToken(inscriptionId: string, email: string): string {
  const exp = Math.floor(Date.now() / 1000) + SETUP_MAX_AGE_SEC
  return signPayload({ type: 'inscription_setup', inscriptionId, email, exp })
}

export function verifyInscriptionSetupToken(token: string | undefined): {
  inscriptionId: string
  email: string
} | null {
  if (!token) return null
  const json = verifySignedToken<{
    type: string
    inscriptionId: string
    email: string
    exp: number
  }>(token)
  if (!json || json.type !== 'inscription_setup') return null
  if (typeof json.inscriptionId !== 'string' || typeof json.email !== 'string') return null
  return { inscriptionId: json.inscriptionId, email: json.email }
}
