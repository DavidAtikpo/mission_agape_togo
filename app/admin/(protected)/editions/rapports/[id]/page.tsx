import Link from 'next/link'
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import { ensureStandardEditions } from '@/lib/editions'
import { RapportEcoleForm } from '@/components/admin/RapportEcoleForm'

export default async function EditRapportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [row, editions] = await Promise.all([
    prisma.rapportEcole.findUnique({ where: { id } }),
    ensureStandardEditions(),
  ])

  if (!row) notFound()

  return (
    <div>
      <Link href="/admin/editions/rapports" className="text-xs text-muted-foreground hover:text-foreground">
        ← Rapports
      </Link>
      <h1 className="text-xl sm:text-2xl font-bold text-foreground mt-2 mb-4">Modifier le rapport</h1>
      <RapportEcoleForm
        mode="edit"
        editions={editions}
        redirectPath={`/admin/editions/rapports/${id}`}
        initial={row}
      />
    </div>
  )
}
