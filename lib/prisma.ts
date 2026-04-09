import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { PrismaClient } from '@/lib/generated/prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  pgPool: Pool | undefined
}

function getConnectionString(): string {
  const url = process.env.DATABASE_URL?.trim()
  if (
    !url ||
    (!url.startsWith('postgresql://') && !url.startsWith('postgres://'))
  ) {
    throw new Error(
      'DATABASE_URL manquant ou invalide. Utilisez une URL PostgreSQL (Neon : postgresql://USER:PASSWORD@HOST/neondb?sslmode=require).',
    )
  }
  return url
}

/** Paramètre ?schema=… de l’URL (Neon) — `pg` ne le gère pas comme Prisma ; on le retire de l’URL du pool. */
function getSchemaFromUrl(url: string): string | undefined {
  const m = url.match(/[?&]schema=([^&]+)/)
  return m ? decodeURIComponent(m[1]) : undefined
}

/** Évite l’avertissement pg (sslmode=require alias de verify-full) et prépare pg v9 — voir pg-connection-string. */
function poolConnectionString(url: string): string {
  try {
    const u = new URL(url)
    u.searchParams.delete('schema')
    const ssl = u.searchParams.get('sslmode')?.toLowerCase()
    const ambiguousSsl =
      ssl === 'prefer' || ssl === 'require' || ssl === 'verify-ca'
    if (ambiguousSsl && !u.searchParams.has('uselibpqcompat')) {
      u.searchParams.set('uselibpqcompat', 'true')
    }
    return u.toString()
  } catch {
    return url
  }
}

function getClient(): PrismaClient {
  if (globalForPrisma.prisma) return globalForPrisma.prisma

  const rawUrl = getConnectionString()
  const poolUrl = poolConnectionString(rawUrl)
  const pool =
    globalForPrisma.pgPool ?? new Pool({ connectionString: poolUrl })
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.pgPool = pool
  }

  const schemaFromUrl = getSchemaFromUrl(rawUrl)
  const adapter =
    schemaFromUrl != null
      ? new PrismaPg(pool, { schema: schemaFromUrl })
      : new PrismaPg(pool)
  globalForPrisma.prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })
  return globalForPrisma.prisma
}

/** Client Prisma (Neon / PostgreSQL) — initialisation au premier usage */
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    const client = getClient()
    const value = Reflect.get(client, prop, receiver)
    if (typeof value === 'function') {
      return value.bind(client)
    }
    return value
  },
})

export default prisma
