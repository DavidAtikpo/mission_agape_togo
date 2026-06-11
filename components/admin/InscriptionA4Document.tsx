import type { Inscription } from '@/lib/generated/prisma/client'
import { formatInscriptionValue, labelForInscriptionKey, statusLabel } from '@/lib/inscription-labels'

function DataTable({ data }: { data: unknown }) {
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    return (
      <pre className="whitespace-pre-wrap break-words text-[10pt] max-md:text-xs font-mono bg-neutral-50 p-3 border border-neutral-200 print:bg-transparent print:border-neutral-300">
        {formatInscriptionValue(data)}
      </pre>
    )
  }
  const entries = Object.entries(data as Record<string, unknown>)
  if (entries.length === 0) return <p className="text-neutral-500 text-sm">Aucune donnée</p>

  return (
    <table className="w-full border-collapse text-[10pt] print:text-[9pt] max-md:text-xs max-md:[&_tbody]:block max-md:[&_tr]:block max-md:[&_tr]:mb-3 max-md:[&_tr]:pb-3 max-md:[&_tr]:border-b max-md:[&_tr]:border-neutral-200 max-md:[&_tr:last-child]:border-0 max-md:[&_th]:block max-md:[&_th]:w-full max-md:[&_th]:border-r-0 max-md:[&_th]:pb-0.5 max-md:[&_td]:block max-md:[&_td]:pl-0 max-md:[&_td]:pb-0">
      <tbody>
        {entries.map(([key, value]) => (
          <tr key={key} className="border-b border-neutral-200 print:break-inside-avoid">
            <th
              scope="row"
              className="align-top py-1 pr-2 text-left font-semibold text-neutral-800 w-[38%] max-md:w-full border-r border-neutral-100 print:border-neutral-200"
            >
              {labelForInscriptionKey(key)}
            </th>
            <td className="align-top py-1 pl-2 max-md:pl-0 text-neutral-900 whitespace-pre-wrap break-words">
              {formatInscriptionValue(value)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

type Row = Pick<
  Inscription,
  | 'id'
  | 'createdAt'
  | 'nom'
  | 'prenom'
  | 'email'
  | 'telephone'
  | 'formationSouhaitee'
  | 'status'
  | 'inscriptionData'
  | 'renseignementsData'
  | 'consentementData'
>

export function InscriptionA4Document({ row }: { row: Row }) {
  const dateRéception = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(row.createdAt)

  const dateDocument = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
  }).format(new Date())

  return (
    <article
      id="inscription-a4-export"
      className="mx-auto w-full max-w-[210mm] bg-white text-black box-border text-[10pt] leading-snug
        px-3 py-3 md:px-6 md:py-4
        print:border-0 print:max-w-none print:min-h-0 print:px-0 print:py-0 print:text-[11pt]"
    >
      <header className="border-b border-black pb-2 mb-3 print:mb-4 print:border-b-2">
        <div className="flex items-center gap-2 mb-2 print:break-inside-avoid">
          <img
            src="/imageagape.jpeg"
            alt="Mission Agapé"
            width={72}
            height={72}
            className="h-10 w-10 md:h-12 md:w-12 shrink-0 rounded-full object-cover border border-neutral-200 print:h-[72px] print:w-[72px]"
          />
          <div className="min-w-0">
            <p className="text-sm font-extrabold tracking-tight leading-tight text-[#d71f2a]">
              MISSION AGAPE
            </p>
            <p className="text-[8pt] sm:text-[9pt] uppercase tracking-wide text-neutral-600 font-semibold mt-0.5 sm:mt-1">
              Togo — Formation &amp; discipolat
            </p>
          </div>
        </div>
        <h1 className="text-sm sm:text-[16pt] font-bold leading-tight">Dossier d&apos;inscription</h1>
        <p className="text-[9pt] sm:text-[10pt] text-neutral-700 mt-1.5 sm:mt-2 break-words">
          Réf. dossier : <span className="font-mono font-medium break-all">{row.id}</span>
          {' · '}
          Reçu le {dateRéception}
        </p>
      </header>

      <section className="mb-3 print:mb-5 print:break-inside-avoid">
        <h2 className="text-[10pt] font-bold border-b border-neutral-400 pb-0.5 mb-1.5">
          Synthèse administrative
        </h2>
        <table className="w-full border-collapse text-[10pt] max-md:text-xs max-md:[&_tbody]:block max-md:[&_tr]:block max-md:[&_tr]:mb-2 max-md:[&_tr]:pb-2 max-md:[&_tr]:border-b max-md:[&_tr]:border-neutral-200 max-md:[&_th]:block max-md:[&_th]:w-full max-md:[&_th]:pb-0.5 max-md:[&_td]:block max-md:[&_td]:pl-0">
          <tbody>
            <tr className="border-b border-neutral-200">
              <th className="py-1 pr-2 text-left font-semibold w-[38%] max-md:w-full">Statut du dossier</th>
              <td className="py-1">{statusLabel(row.status)}</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th className="py-1 pr-2 text-left font-semibold">Nom complet</th>
              <td className="py-1">
                {row.prenom} {row.nom}
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th className="py-1 pr-2 text-left font-semibold">E-mail</th>
              <td className="py-1 break-all">{row.email}</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th className="py-1 pr-2 text-left font-semibold">Téléphone</th>
              <td className="py-1">{row.telephone}</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th className="py-1 pr-2 text-left font-semibold">Formation souhaitée</th>
              <td className="py-1">{row.formationSouhaitee ?? '—'}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-3 print:mb-5">
        <h2 className="text-[10pt] font-bold border-b border-neutral-400 pb-0.5 mb-1.5">
          Étape 1 — Formulaire d&apos;inscription
        </h2>
        <DataTable data={row.inscriptionData} />
      </section>

      <section className="mb-3 print:mb-5">
        <h2 className="text-[10pt] font-bold border-b border-neutral-400 pb-0.5 mb-1.5">
          Étape 2 — Fiche de renseignements
        </h2>
        <DataTable data={row.renseignementsData} />
      </section>

      <section className="mb-3 print:mb-5">
        <h2 className="text-[10pt] font-bold border-b border-neutral-400 pb-0.5 mb-1.5">
          Étape 3 — Décharge de consentement
        </h2>
        <DataTable data={row.consentementData} />
      </section>

      <footer className="pt-2 border-t border-neutral-300 text-[9pt] text-neutral-600 print:mt-4">
        Document généré le {dateDocument} — Mission Agapé Togo — usage administratif interne.
      </footer>
    </article>
  )
}
