import Link from 'next/link'
import prisma from '@/lib/prisma'
import { DeleteInscriptionButton } from '@/components/admin/DeleteInscriptionButton'

function statusBadgeClass(status: string) {
  switch (status) {
    case 'TRAITEE':
      return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200'
    case 'EN_COURS':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
    default:
      return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
  }
}

function statusText(status: string) {
  return status === 'NOUVELLE' ? 'Nouvelle' : status === 'EN_COURS' ? 'En cours' : 'Traitée'
}

export default async function AdminInscriptionsPage() {
  const rows = await prisma.inscription.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      createdAt: true,
      nom: true,
      prenom: true,
      email: true,
      telephone: true,
      formationSouhaitee: true,
      status: true,
    },
  })

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">Inscriptions</h1>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4">
        {rows.length} dossier{rows.length !== 1 ? 's' : ''} enregistré{rows.length !== 1 ? 's' : ''}
      </p>

      {rows.length === 0 ? (
        <div className="rounded-lg border p-6 text-center text-sm text-muted-foreground">
          Aucune inscription pour le moment.
        </div>
      ) : (
        <ul className="rounded-lg border divide-y">
          {rows.map((r) => {
            const dateLabel = new Intl.DateTimeFormat('fr-FR', {
              dateStyle: 'short',
              timeStyle: 'short',
            }).format(r.createdAt)

            return (
              <li key={r.id} className="p-3 hover:bg-muted/20">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <p className="font-semibold text-sm">
                        {r.prenom} {r.nom}
                      </p>
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${statusBadgeClass(r.status)}`}
                      >
                        {statusText(r.status)}
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">{dateLabel}</span>
                    </div>

                    <div className="text-xs text-muted-foreground space-y-0.5 break-words">
                      <p>
                        <span className="text-foreground/60">Email : </span>
                        <a href={`mailto:${r.email}`} className="text-primary hover:underline break-all">
                          {r.email}
                        </a>
                      </p>
                      <p>
                        <span className="text-foreground/60">Tél. : </span>
                        <a href={`tel:${r.telephone.replace(/\s/g, '')}`} className="hover:underline">
                          {r.telephone}
                        </a>
                      </p>
                      <p>
                        <span className="text-foreground/60">Formation : </span>
                        {r.formationSouhaitee ?? '—'}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 shrink-0 lg:pt-0.5">
                    <Link
                      href={`/admin/inscriptions/${r.id}`}
                      className="inline-flex items-center rounded-md border border-primary px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                    >
                      Détails
                    </Link>
                    <DeleteInscriptionButton id={r.id} label={`${r.prenom} ${r.nom}`} variant="table" />
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
