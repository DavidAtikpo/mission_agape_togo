import prisma from '@/lib/prisma'

const STANDARD_EDITION_MAX = 14

/** Crée les éditions 1 à 14 si elles n'existent pas encore. */
export async function ensureStandardEditions() {
  const existing = await prisma.edition.findMany({
    select: { id: true, numero: true, estCourante: true },
  })
  const byNumero = new Map(existing.map((e) => [e.numero, e]))

  for (let numero = 1; numero <= STANDARD_EDITION_MAX; numero++) {
    if (byNumero.has(numero)) continue

    await prisma.edition.create({
      data: {
        numero,
        titre: numero === STANDARD_EDITION_MAX ? 'Édition 2025-2026' : `Édition ${numero}`,
        description:
          numero === STANDARD_EDITION_MAX
            ? "Dernière édition — formation en cours à l'École d'Évangélisation."
            : null,
        estCourante: numero === STANDARD_EDITION_MAX,
      },
    })
  }

  const courante = byNumero.get(STANDARD_EDITION_MAX) ?? (await prisma.edition.findUnique({ where: { numero: STANDARD_EDITION_MAX } }))
  if (courante && !courante.estCourante) {
    await prisma.edition.updateMany({ where: { estCourante: true }, data: { estCourante: false } })
    await prisma.edition.update({ where: { id: courante.id }, data: { estCourante: true } })
  }

  return prisma.edition.findMany({
    orderBy: { numero: 'asc' },
    select: { id: true, numero: true, titre: true, estCourante: true },
  })
}

/** @deprecated Utiliser ensureStandardEditions */
export async function ensureDefaultEdition() {
  return ensureStandardEditions().then((list) => list.find((e) => e.numero === STANDARD_EDITION_MAX) ?? list[list.length - 1] ?? null)
}

export async function getEditionsForPublic() {
  return prisma.edition.findMany({
    orderBy: { numero: 'desc' },
    select: {
      id: true,
      numero: true,
      titre: true,
      description: true,
      estCourante: true,
    },
  })
}

export async function getCurrentEdition() {
  return prisma.edition.findFirst({
    where: { estCourante: true },
    orderBy: { numero: 'desc' },
    select: {
      id: true,
      numero: true,
      titre: true,
      description: true,
      estCourante: true,
    },
  })
}

export async function getEditionPhotosPublic(editionId: string) {
  return prisma.editionPhoto.findMany({
    where: { editionId, publiee: true },
    orderBy: [{ ordre: 'asc' }, { createdAt: 'asc' }],
    select: {
      id: true,
      imageUrl: true,
      legende: true,
    },
  })
}

export async function getPublishedRapports() {
  return prisma.rapportEcole.findMany({
    where: { publiee: true },
    orderBy: { dateEvenement: 'desc' },
    select: {
      id: true,
      titre: true,
      contenu: true,
      imageUrl: true,
      dateEvenement: true,
      edition: {
        select: { numero: true, titre: true },
      },
    },
  })
}

/** Photos statiques de secours si la galerie admin est vide */
export const FALLBACK_EDITION_14_PHOTOS = [
  { id: 'fb-1', imageUrl: '/images/editions/edition14-1.jpeg', legende: 'Édition 14 — Photo 1' },
  { id: 'fb-2', imageUrl: '/images/editions/edition14-2.jpeg', legende: 'Édition 14 — Photo 2' },
  { id: 'fb-3', imageUrl: '/images/editions/edition14-3.jpeg', legende: 'Édition 14 — Photo 3' },
  { id: 'fb-4', imageUrl: '/1.jpeg', legende: 'Édition 14 — Photo 4' },
  { id: 'fb-5', imageUrl: '/6.jpeg', legende: 'Édition 14 — Photo 5' },
  { id: 'fb-6', imageUrl: '/7.jpeg', legende: 'Édition 14 — Photo 6' },
  { id: 'fb-7', imageUrl: '/4.jpeg', legende: 'Édition 14 — Photo 7' },
  { id: 'fb-8', imageUrl: '/5.jpeg', legende: 'Édition 14 — Photo 8' },
  { id: 'fb-9', imageUrl: '/8.jpeg', legende: 'Édition 14 — Photo 9' },
]
