import Image from 'next/image'
import type { Inscription } from '@/lib/generated/prisma/client'

const FIELD_LABELS: Record<string, string> = {
  nom: 'Nom',
  prenom: 'Prénom(s)',
  dateNaissance: 'Date de naissance',
  lieuNaissance: 'Lieu de naissance',
  adresse: 'Adresse',
  telephone: 'Téléphone',
  email: 'E-mail',
  niveauEtude: 'Dernier diplôme obtenu',
  egliseLocale: 'Église locale',
  pasteurResponsable: 'Pasteur responsable',
  formationSouhaitee: 'Formation souhaitée',
  motivation: 'Motivation',
  situationFamiliale: 'Situation familiale',
  nombreEnfants: "Nombre d'enfants à charge",
  profession: 'Profession actuelle',
  employeur: 'Employeur',
  adresseProfessionnelle: 'Adresse professionnelle',
  telephoneProfessionnel: 'Téléphone professionnel',
  personneContact: 'Personne à contacter',
  telephoneContact: 'Téléphone du contact',
  lienParente: 'Lien de parenté',
  groupeSanguin: 'Groupe sanguin',
  allergies: 'Allergies',
  traitementMedical: 'Traitement médical',
  experienceChretienne: 'Expérience chrétienne',
  ministeres: 'Ministères',
  attentes: 'Attentes',
  nomComplet: 'Nom complet',
  responsableLegal: 'Responsable légal',
  telephoneResponsable: 'Téléphone du responsable',
  accepteReglement: 'Acceptation du règlement intérieur',
  autoriseUtilisationImage: 'Autorisation utilisation d’image',
  date: 'Date',
  signature: 'Signature (nom / mention)',
}

function labelForKey(key: string): string {
  return FIELD_LABELS[key] ?? key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).trim()
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === '') return '—'
  if (typeof value === 'boolean') return value ? 'Oui' : 'Non'
  if (typeof value === 'object') return JSON.stringify(value, null, 2)
  return String(value)
}

function DataTable({ data }: { data: unknown }) {
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    return (
      <pre className="whitespace-pre-wrap break-words text-[10pt] font-mono bg-neutral-50 p-3 border border-neutral-200 print:bg-transparent print:border-neutral-300">
        {JSON.stringify(data, null, 2)}
      </pre>
    )
  }
  const entries = Object.entries(data as Record<string, unknown>)
  if (entries.length === 0) return <p className="text-neutral-500 text-sm">Aucune donnée</p>

  return (
    <table className="w-full border-collapse text-[10pt] print:text-[9pt]">
      <tbody>
        {entries.map(([key, value]) => (
          <tr key={key} className="border-b border-neutral-200 print:break-inside-avoid">
            <th
              scope="row"
              className="align-top py-2 pr-3 text-left font-semibold text-neutral-800 w-[38%] border-r border-neutral-100 print:border-neutral-200"
            >
              {labelForKey(key)}
            </th>
            <td className="align-top py-2 pl-3 text-neutral-900 whitespace-pre-wrap break-words">
              {formatValue(value)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function statusLabel(status: string): string {
  if (status === 'NOUVELLE') return 'Nouvelle'
  if (status === 'EN_COURS') return 'En cours'
  if (status === 'TRAITEE') return 'Traitée'
  return status
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
      className="mx-auto w-full max-w-[210mm] bg-white text-black shadow-md border border-neutral-300 print:shadow-none print:border-0 print:max-w-none
        px-[14mm] py-[12mm] min-h-[297mm] box-border text-[11pt] leading-normal print:min-h-0 print:px-0 print:py-0"
    >
      <header className="border-b-2 border-black pb-4 mb-5 print:mb-4">
        <div className="flex items-center gap-4 mb-4 print:break-inside-avoid">
          <Image
            src="/imageagape.jpeg"
            alt="Mission Agapé"
            width={72}
            height={72}
            className="h-[72px] w-[72px] shrink-0 rounded-full object-cover border border-neutral-200 print:border-neutral-300"
          />
          <div className="min-w-0">
            <p
              className="text-[15pt] font-extrabold tracking-tight leading-tight"
              style={{ color: '#d71f2a' }}
            >
              MISSION AGAPE
            </p>
            <p className="text-[9pt] uppercase tracking-wide text-neutral-600 font-semibold mt-1">
              Togo — Formation &amp; discipolat
            </p>
          </div>
        </div>
        <h1 className="text-[16pt] font-bold leading-tight">Dossier d&apos;inscription</h1>
        <p className="text-[10pt] text-neutral-700 mt-2">
          Réf. dossier : <span className="font-mono font-medium">{row.id}</span>
          {' · '}
          Reçu le {dateRéception}
        </p>
      </header>

      <section className="mb-6 print:mb-5 print:break-inside-avoid">
        <h2 className="text-[11pt] font-bold border-b border-neutral-400 pb-1 mb-3">
          Synthèse administrative
        </h2>
        <table className="w-full border-collapse text-[10pt]">
          <tbody>
            <tr className="border-b border-neutral-200">
              <th className="py-2 pr-3 text-left font-semibold w-[38%]">Statut du dossier</th>
              <td className="py-2">{statusLabel(row.status)}</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th className="py-2 pr-3 text-left font-semibold">Nom complet</th>
              <td className="py-2">
                {row.prenom} {row.nom}
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th className="py-2 pr-3 text-left font-semibold">E-mail</th>
              <td className="py-2 break-all">{row.email}</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th className="py-2 pr-3 text-left font-semibold">Téléphone</th>
              <td className="py-2">{row.telephone}</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th className="py-2 pr-3 text-left font-semibold">Formation souhaitée</th>
              <td className="py-2">{row.formationSouhaitee ?? '—'}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6 print:mb-5">
        <h2 className="text-[11pt] font-bold border-b border-neutral-400 pb-1 mb-3">
          Étape 1 — Formulaire d&apos;inscription
        </h2>
        <DataTable data={row.inscriptionData} />
      </section>

      <section className="mb-6 print:mb-5">
        <h2 className="text-[11pt] font-bold border-b border-neutral-400 pb-1 mb-3">
          Étape 2 — Fiche de renseignements
        </h2>
        <DataTable data={row.renseignementsData} />
      </section>

      <section className="mb-8 print:mb-6">
        <h2 className="text-[11pt] font-bold border-b border-neutral-400 pb-1 mb-3">
          Étape 3 — Décharge de consentement
        </h2>
        <DataTable data={row.consentementData} />
      </section>

      <footer className="pt-4 border-t border-neutral-300 text-[9pt] text-neutral-600 print:mt-4">
        Document généré le {dateDocument} — Mission Agapé Togo — usage administratif interne.
      </footer>
    </article>
  )
}
