import Link from 'next/link'
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import { InscriptionStatusForm } from '@/components/admin/InscriptionStatusForm'
import { InscriptionA4Document } from '@/components/admin/InscriptionA4Document'
import { PrintPdfButton } from '@/components/admin/PrintPdfButton'

type Status = 'NOUVELLE' | 'EN_COURS' | 'TRAITEE'

function isStatus(s: string): s is Status {
  return s === 'NOUVELLE' || s === 'EN_COURS' || s === 'TRAITEE'
}

export default async function AdminInscriptionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const row = await prisma.inscription.findUnique({ where: { id } })
  if (!row) notFound()

  const status: Status = isStatus(row.status) ? row.status : 'NOUVELLE'

  return (
    <div className="space-y-8 print:space-y-0">
      <div className="print:hidden space-y-4">
        <Link href="/admin/inscriptions" className="text-sm text-primary hover:underline inline-block">
          ← Toutes les inscriptions
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {row.prenom} {row.nom}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Reçue le{' '}
              {new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeStyle: 'short' }).format(
                row.createdAt,
              )}
            </p>
          </div>
          <PrintPdfButton />
        </div>

        <div className="rounded-lg border bg-card p-4 sm:p-6 space-y-4">
          <InscriptionStatusForm id={row.id} current={status} />
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-2 border-t">
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${row.email}`} className="text-primary hover:underline break-all">
                  {row.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Téléphone</dt>
              <dd>
                <a href={`tel:${row.telephone.replace(/\s/g, '')}`} className="hover:underline">
                  {row.telephone}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-muted-foreground">Formation souhaitée</dt>
              <dd className="font-medium">{row.formationSouhaitee ?? '—'}</dd>
            </div>
          </dl>
        </div>

        <p className="text-sm text-muted-foreground border-l-4 border-primary/30 pl-3">
          Aperçu du dossier au format A4 ci-dessous — identique à l&apos;export PDF.
        </p>
      </div>

      <InscriptionA4Document row={row} />
    </div>
  )
}
