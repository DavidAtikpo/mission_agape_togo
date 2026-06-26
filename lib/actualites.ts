import prisma from '@/lib/prisma'

export async function getPublishedActualite() {
  return prisma.actualite.findFirst({
    where: { publiee: true },
    orderBy: { updatedAt: 'desc' },
    select: {
      id: true,
      titre: true,
      contenu: true,
      imageUrl: true,
      lienLabel: true,
      lienUrl: true,
      updatedAt: true,
    },
  })
}
