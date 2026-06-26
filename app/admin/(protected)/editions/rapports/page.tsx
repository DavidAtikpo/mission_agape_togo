import Link from 'next/link'
import Image from 'next/image'
import prisma from '@/lib/prisma'
import { DeleteRapportButton } from '@/components/admin/DeleteRapportButton'
import { toggleRapportPublished } from '@/app/admin/(protected)/editions/actions'

export default async function AdminRapportsPage() {
  const rows = await prisma.rapportEcole.findMany({
    orderBy: { dateEvenement: 'desc' },
    include: { edition: { select: { numero: true } } },
  })

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <Link href="/admin/editions" className="text-xs text-muted-foreground hover:text-foreground">
            ← Historique
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground mt-2">Rapports de l&apos;école</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Chronologie publiée sur la page Historique depuis le début de l&apos;école.
          </p>
        </div>
        <Link
          href="/admin/editions/rapports/new"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Nouveau rapport
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-lg border p-6 text-center text-sm text-muted-foreground">
          Aucun rapport. Créez le premier compte-rendu de la formation.
        </div>
      ) : (
        <ul className="rounded-lg border divide-y">
          {rows.map((row) => {
            const dateLabel = new Intl.DateTimeFormat('fr-FR', {
              dateStyle: 'medium',
            }).format(row.dateEvenement)

            return (
              <li key={row.id} className="p-3 sm:p-4 hover:bg-muted/20">
                <div className="flex flex-col sm:flex-row gap-3">
                  {row.imageUrl ? (
                    <div className="relative w-full sm:w-24 h-20 rounded-md overflow-hidden border shrink-0">
                      <Image src={row.imageUrl} alt="" fill className="object-cover" sizes="96px" />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-sm">{row.titre}</p>
                      <span
                        className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${
                          row.publiee
                            ? 'bg-green-100 text-green-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {row.publiee ? 'Publié' : 'Brouillon'}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{dateLabel}</span>
                      {row.edition ? (
                        <span className="text-[10px] text-primary">Éd. {row.edition.numero}</span>
                      ) : null}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 whitespace-pre-line">{row.contenu}</p>
                  </div>
                  <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
                    <form action={toggleRapportPublished}>
                      <input type="hidden" name="id" value={row.id} />
                      <button
                        type="submit"
                        className="w-full text-xs border rounded-md px-3 py-1.5 hover:bg-muted"
                      >
                        {row.publiee ? 'Dépublier' : 'Publier'}
                      </button>
                    </form>
                    <Link
                      href={`/admin/editions/rapports/${row.id}`}
                      className="text-xs text-center border rounded-md px-3 py-1.5 hover:bg-muted"
                    >
                      Modifier
                    </Link>
                    <DeleteRapportButton id={row.id} titre={row.titre} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
