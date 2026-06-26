import Link from 'next/link'
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import { ActualiteForm } from '@/components/admin/ActualiteForm'

export default async function EditActualitePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const row = await prisma.actualite.findUnique({ where: { id } })
  if (!row) notFound()

  return (
    <div>
      <div className="mb-4">
        <Link
          href="/admin/actualites"
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          ← Retour aux actualités
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground mt-2">Modifier l&apos;actualité</h1>
      </div>
      <ActualiteForm mode="edit" initial={row} />
    </div>
  )
}
