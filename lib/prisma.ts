import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { PrismaClient } from '@/lib/generated/prisma/client'

/** Bump when new models are added — invalidates cached client in dev. */
const PRISMA_CLIENT_VERSION = 4

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  pgPool: Pool | undefined
  prismaClientVersion: number | undefined
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

function isClientUpToDate(client: PrismaClient): boolean {
  const c = client as PrismaClient & {
    edition?: { findFirst?: unknown }
    editionPhoto?: { findMany?: unknown }
    rapportEcole?: { findMany?: unknown }
  }
  return (
    typeof c.inscription?.findMany === 'function' &&
    typeof c.actualite?.findFirst === 'function' &&
    typeof c.edition?.findFirst === 'function' &&
    typeof c.editionPhoto?.findMany === 'function' &&
    typeof c.rapportEcole?.findMany === 'function' &&
    typeof c.participant?.findUnique === 'function'
  )
}

function clearCachedClient() {
  const cached = globalForPrisma.prisma
  if (cached) {
    void cached.$disconnect().catch(() => {})
  }
  globalForPrisma.prisma = undefined
  globalForPrisma.prismaClientVersion = undefined
}

function getClient(): PrismaClient {
  const cached = globalForPrisma.prisma
  if (
    cached &&
    globalForPrisma.prismaClientVersion === PRISMA_CLIENT_VERSION &&
    isClientUpToDate(cached)
  ) {
    return cached
  }

  if (cached) {
    clearCachedClient()
  }

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
  globalForPrisma.prismaClientVersion = PRISMA_CLIENT_VERSION
  return globalForPrisma.prisma
}

/** Client Prisma (Neon / PostgreSQL) — initialisation au premier usage */
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    let client = getClient()
    let value = Reflect.get(client, prop, receiver)

    if (
      value === undefined &&
      typeof prop === 'string' &&
      prop !== 'then' &&
      !prop.startsWith('$') &&
      prop[0] === prop[0]?.toLowerCase()
    ) {
      clearCachedClient()
      client = getClient()
      value = Reflect.get(client, prop, receiver)
    }

    if (typeof value === 'function') {
      return value.bind(client)
    }
    return value
  },
})

export default prisma
