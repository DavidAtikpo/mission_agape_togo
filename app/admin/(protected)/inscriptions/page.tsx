import Link from 'next/link'
import prisma from '@/lib/prisma'

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
      <h1 className="text-2xl font-bold text-foreground mb-2">Inscriptions</h1>
      <p className="text-sm text-muted-foreground mb-6">
        {rows.length} dossier{rows.length !== 1 ? 's' : ''} enregistré{rows.length !== 1 ? 's' : ''}
      </p>

      <div className="rounded-lg border bg-card overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="border-b bg-muted/50 text-left">
              <th className="p-3 font-medium">Date</th>
              <th className="p-3 font-medium">Nom</th>
              <th className="p-3 font-medium">Email</th>
              <th className="p-3 font-medium">Téléphone</th>
              <th className="p-3 font-medium">Formation</th>
              <th className="p-3 font-medium">Statut</th>
              <th className="p-3 font-medium w-24"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-muted-foreground">
                  Aucune inscription pour le moment.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-b last:border-0 hover:bg-muted/30">
                  <td className="p-3 whitespace-nowrap text-muted-foreground">
                    {new Intl.DateTimeFormat('fr-FR', {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    }).format(r.createdAt)}
                  </td>
                  <td className="p-3 font-medium">
                    {r.prenom} {r.nom}
                  </td>
                  <td className="p-3">
                    <a href={`mailto:${r.email}`} className="text-primary hover:underline break-all">
                      {r.email}
                    </a>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <a href={`tel:${r.telephone.replace(/\s/g, '')}`} className="hover:underline">
                      {r.telephone}
                    </a>
                  </td>
                  <td className="p-3 max-w-[140px] truncate" title={r.formationSouhaitee ?? ''}>
                    {r.formationSouhaitee ?? '—'}
                  </td>
                  <td className="p-3">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${statusBadgeClass(r.status)}`}>
                      {r.status === 'NOUVELLE' ? 'Nouvelle' : r.status === 'EN_COURS' ? 'En cours' : 'Traitée'}
                    </span>
                  </td>
                  <td className="p-3">
                    <Link
                      href={`/admin/inscriptions/${r.id}`}
                      className="text-primary font-medium hover:underline whitespace-nowrap"
                    >
                      Détails
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
