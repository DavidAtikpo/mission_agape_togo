import Link from 'next/link'
import Image from 'next/image'
import prisma from '@/lib/prisma'
import { deleteActualite, toggleActualitePublished } from './actions'
import { DeleteActualiteButton } from '@/components/admin/DeleteActualiteButton'

export default async function AdminActualitesPage() {
  const rows = await prisma.actualite.findMany({
    orderBy: { updatedAt: 'desc' },
  })

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Actualités</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Carte affichée sur la page d&apos;accueil, avant la section hero.
          </p>
        </div>
        <Link
          href="/admin/actualites/new"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Nouvelle actualité
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-lg border p-6 text-center text-sm text-muted-foreground">
          Aucune actualité. Créez-en une pour l&apos;afficher sur l&apos;accueil.
        </div>
      ) : (
        <ul className="rounded-lg border divide-y">
          {rows.map((row) => {
            const dateLabel = new Intl.DateTimeFormat('fr-FR', {
              dateStyle: 'short',
              timeStyle: 'short',
            }).format(row.updatedAt)

            return (
              <li key={row.id} className="p-3 sm:p-4 hover:bg-muted/20">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {row.imageUrl ? (
                    <div className="relative w-full sm:w-24 h-20 sm:h-16 rounded-md overflow-hidden border shrink-0">
                      <Image
                        src={row.imageUrl}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  ) : (
                    <div className="w-full sm:w-24 h-20 sm:h-16 rounded-md border bg-muted/40 shrink-0 flex items-center justify-center text-[10px] text-muted-foreground">
                      Sans image
                    </div>
                  )}

                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-sm">{row.titre}</p>
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          row.publiee
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200'
                            : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                      >
                        {row.publiee ? 'Publiée' : 'Brouillon'}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{dateLabel}</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 whitespace-pre-line">
                      {row.contenu}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-stretch shrink-0">
                    <form action={toggleActualitePublished}>
                      <input type="hidden" name="id" value={row.id} />
                      <button
                        type="submit"
                        className="w-full text-xs border rounded-md px-3 py-1.5 hover:bg-muted transition-colors"
                      >
                        {row.publiee ? 'Dépublier' : 'Publier'}
                      </button>
                    </form>
                    <Link
                      href={`/admin/actualites/${row.id}`}
                      className="text-xs text-center border rounded-md px-3 py-1.5 hover:bg-muted transition-colors"
                    >
                      Modifier
                    </Link>
                    <DeleteActualiteButton id={row.id} titre={row.titre} />
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
