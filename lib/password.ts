import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'

const scryptAsync = promisify(scrypt)
const SALT_LEN = 16
const KEY_LEN = 64

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(SALT_LEN).toString('hex')
  const derived = (await scryptAsync(password, salt, KEY_LEN)) as Buffer
  return `${salt}:${derived.toString('hex')}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  try {
    const derived = (await scryptAsync(password, salt, KEY_LEN)) as Buffer
    const hashBuf = Buffer.from(hash, 'hex')
    if (hashBuf.length !== derived.length) return false
    return timingSafeEqual(hashBuf, derived)
  } catch {
    return false
  }
}

export function validatePasswordStrength(password: string): string | null {
  if (password.length < 8) return 'Le mot de passe doit contenir au moins 8 caractères.'
  return null
}
