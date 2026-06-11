import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, BookOpen, Calendar, Hash, Mail, Phone } from 'lucide-react'
import prisma from '@/lib/prisma'
import { statusLabel } from '@/lib/inscription-labels'
import { InscriptionStatusForm } from '@/components/admin/InscriptionStatusForm'
import { DeleteInscriptionButton } from '@/components/admin/DeleteInscriptionButton'
import { InscriptionA4Document } from '@/components/admin/InscriptionA4Document'
import { PrintPdfButton } from '@/components/admin/PrintPdfButton'

type Status = 'NOUVELLE' | 'EN_COURS' | 'TRAITEE'

function isStatus(s: string): s is Status {
  return s === 'NOUVELLE' || s === 'EN_COURS' || s === 'TRAITEE'
}

function statusBadgeClass(status: Status) {
  switch (status) {
    case 'TRAITEE':
      return 'bg-emerald-100 text-emerald-800'
    case 'EN_COURS':
      return 'bg-amber-100 text-amber-800'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}

export default async function AdminInscriptionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const row = await prisma.inscription.findUnique({ where: { id } })
  if (!row) notFound()

  const status: Status = isStatus(row.status) ? row.status : 'NOUVELLE'
  const dateReception = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(row.createdAt)

  const pdfRow = {
    id: row.id,
    createdAt: row.createdAt,
    nom: row.nom,
    prenom: row.prenom,
    email: row.email,
    telephone: row.telephone,
    formationSouhaitee: row.formationSouhaitee,
    status: row.status,
    inscriptionData: row.inscriptionData,
    renseignementsData: row.renseignementsData,
    consentementData: row.consentementData,
  }

  return (
    <div className="print:space-y-0">
      <div className="print:hidden space-y-3">
        <Link
          href="/admin/inscriptions"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Toutes les inscriptions
        </Link>

        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4 pb-3 border-b border-border">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <h1 className="text-base md:text-lg font-bold leading-tight">
                {row.prenom} {row.nom}
              </h1>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusBadgeClass(status)}`}>
                {statusLabel(status)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-0.5">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {dateReception}
              </span>
              <span className="inline-flex items-center gap-1 font-mono break-all">
                <Hash className="h-3 w-3 shrink-0" />
                {row.id}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:justify-end shrink-0">
            <PrintPdfButton row={pdfRow} />
          </div>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-xs pb-3 border-b border-border">
          <div className="flex gap-2 min-w-0">
            <Mail className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
            <div className="min-w-0">
              <dt className="text-muted-foreground">E-mail</dt>
              <dd className="font-medium break-all">
                <a href={`mailto:${row.email}`} className="hover:underline">{row.email}</a>
              </dd>
            </div>
          </div>
          <div className="flex gap-2">
            <Phone className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
            <div>
              <dt className="text-muted-foreground">Téléphone</dt>
              <dd className="font-medium">
                <a href={`tel:${row.telephone.replace(/\s/g, '')}`} className="hover:underline">{row.telephone}</a>
              </dd>
            </div>
          </div>
          <div className="flex gap-2 min-w-0">
            <BookOpen className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
            <div className="min-w-0">
              <dt className="text-muted-foreground">Formation</dt>
              <dd className="font-medium break-words">{row.formationSouhaitee ?? '—'}</dd>
            </div>
          </div>
        </dl>

        <div className="pb-3 border-b border-border">
          <p className="text-xs font-semibold mb-2">Suivi du dossier</p>
          <InscriptionStatusForm id={row.id} current={status} />
        </div>

        <div>
          <p className="text-xs font-semibold mb-2">Aperçu format A4</p>
          <InscriptionA4Document row={row} />
        </div>

        <div className="pt-3 mt-3 border-t border-dashed border-border">
          <DeleteInscriptionButton
            id={row.id}
            label={`${row.prenom} ${row.nom}`}
            redirectTo="/admin/inscriptions"
          />
        </div>
      </div>
    </div>
  )
}
