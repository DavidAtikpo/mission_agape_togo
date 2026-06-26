import Link from 'next/link'
import prisma from '@/lib/prisma'
import { ensureStandardEditions } from '@/lib/editions'

export default async function AdminEditionsPage() {
  await ensureStandardEditions()
  const editions = await prisma.edition.findMany({
    orderBy: { numero: 'desc' },
    include: {
      _count: { select: { photos: true, rapports: true } },
    },
  })

  const rapportsCount = await prisma.rapportEcole.count()

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Historique &amp; éditions</h1>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4">
        Gérez les galeries photos et les petits rapports publiés sur{' '}
        <Link href="/editions" className="text-primary hover:underline">
          /editions
        </Link>
        .
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <Link
          href="/admin/editions/rapports"
          className="rounded-lg border bg-card p-4 hover:border-primary/40 transition-colors"
        >
          <p className="font-semibold text-sm">Rapports de l&apos;école</p>
          <p className="text-xs text-muted-foreground mt-1">
            {rapportsCount} rapport{rapportsCount !== 1 ? 's' : ''} — texte + 1 image
          </p>
        </Link>
        <Link
          href="/admin/editions/rapports/new"
          className="rounded-lg border border-dashed p-4 hover:border-primary/40 transition-colors flex items-center justify-center text-sm font-medium text-primary"
        >
          + Nouveau rapport
        </Link>
      </div>

      <h2 className="text-sm font-semibold mb-2">Éditions &amp; galeries</h2>
      <ul className="rounded-lg border divide-y">
        {editions.map((edition) => (
          <li key={edition.id} className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="font-semibold text-sm">
                Édition {edition.numero}
                {edition.estCourante ? (
                  <span className="ml-2 text-[10px] font-medium rounded-full bg-green-100 text-green-800 px-2 py-0.5">
                    Dernière édition
                  </span>
                ) : null}
              </p>
              <p className="text-xs text-muted-foreground">{edition.titre}</p>
              <p className="text-[10px] text-muted-foreground mt-1">
                {edition._count.photos} photo{edition._count.photos !== 1 ? 's' : ''} ·{' '}
                {edition._count.rapports} rapport{edition._count.rapports !== 1 ? 's' : ''} lié
                {edition._count.rapports !== 1 ? 's' : ''}
              </p>
            </div>
            <Link
              href={`/admin/editions/${edition.id}/photos`}
              className="text-xs border rounded-md px-3 py-1.5 hover:bg-muted transition-colors text-center shrink-0"
            >
              Gérer la galerie
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
