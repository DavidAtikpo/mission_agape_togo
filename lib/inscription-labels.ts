export const INSCRIPTION_FIELD_LABELS: Record<string, string> = {
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

export function labelForInscriptionKey(key: string): string {
  return (
    INSCRIPTION_FIELD_LABELS[key] ??
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).trim()
  )
}

export function formatInscriptionValue(value: unknown): string {
  if (value === null || value === undefined || value === '') return '—'
  if (typeof value === 'boolean') return value ? 'Oui' : 'Non'
  if (typeof value === 'object') return JSON.stringify(value, null, 2)
  return String(value)
}

export function statusLabel(status: string): string {
  if (status === 'NOUVELLE') return 'Nouvelle'
  if (status === 'EN_COURS') return 'En cours'
  if (status === 'TRAITEE') return 'Traitée'
  return status
}

export function entriesFromData(data: unknown): [string, string][] {
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    return [['Contenu', formatInscriptionValue(data)]]
  }
  const entries = Object.entries(data as Record<string, unknown>)
  if (entries.length === 0) return [['—', 'Aucune donnée']]
  return entries.map(([key, value]) => [labelForInscriptionKey(key), formatInscriptionValue(value)])
}
