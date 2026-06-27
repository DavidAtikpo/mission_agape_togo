import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getParticipantId } from '@/lib/participant-auth'
import prisma from '@/lib/prisma'
import { statusLabel } from '@/lib/inscription-labels'
import { LogoutButton } from '@/components/participant/LogoutButton'

function statusBadgeClass(status: string): string {
  if (status === 'TRAITEE') return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
  if (status === 'EN_COURS') return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
  return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
}

export default async function MonComptePage() {
  const participantId = await getParticipantId()
  if (!participantId) {
    redirect('/connexion')
  }

  const participant = await prisma.participant.findUnique({
    where: { id: participantId },
    include: {
      inscriptions: {
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!participant) {
    redirect('/connexion')
  }

  return (
    <main className="min-h-screen bg-background py-8 sm:py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Mon compte</h1>
            <p className="text-sm text-muted-foreground mt-1">{participant.email}</p>
          </div>
          <LogoutButton />
        </div>

        <section className="rounded-xl border bg-card p-5 sm:p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Mes inscriptions</h2>

          {participant.inscriptions.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Aucune inscription liée à ce compte pour le moment.
            </p>
          ) : (
            <ul className="space-y-4">
              {participant.inscriptions.map((row) => (
                <li key={row.id} className="rounded-lg border p-4 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">
                      {row.prenom} {row.nom}
                    </p>
                    <span
                      className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full ${statusBadgeClass(row.status)}`}
                    >
                      {statusLabel(row.status)}
                    </span>
                  </div>
                  {row.formationSouhaitee ? (
                    <p className="text-sm text-muted-foreground">
                      Formation : {row.formationSouhaitee}
                    </p>
                  ) : null}
                  <p className="text-xs text-muted-foreground">
                    Envoyée le{' '}
                    {new Date(row.createdAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  {row.status === 'NOUVELLE' ? (
                    <p className="text-sm text-foreground/80">
                      Votre dossier a bien été reçu et sera examiné par l&apos;équipe.
                    </p>
                  ) : null}
                  {row.status === 'EN_COURS' ? (
                    <p className="text-sm text-foreground/80">
                      Votre inscription est en cours de traitement.
                    </p>
                  ) : null}
                  {row.status === 'TRAITEE' ? (
                    <p className="text-sm text-foreground/80">
                      Votre inscription a été traitée. L&apos;équipe vous contactera si nécessaire.
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link href="/" className="underline hover:text-foreground">
            Retour à l&apos;accueil
          </Link>
        </p>
      </div>
    </main>
  )
}
