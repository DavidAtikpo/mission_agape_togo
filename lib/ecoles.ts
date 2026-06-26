export type EcoleItem = {
  slug: string
  title: string
  shortTitle: string
  description: string
  href: string
  status?: 'En cours' | 'Disponible' | 'Bientôt disponible' | 'En pause'
  statusColor?: string
}

export const ecoles: EcoleItem[] = [
  {
    slug: 'evangelisation',
    title: 'École d\'Évangélisation',
    shortTitle: 'Évangélisation',
    description:
      'Devenir un témoin efficace de l\'Évangile. Rentrée le 5 septembre 2026.',
    href: '/ecoles',
    status: 'En cours',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    slug: 'communication',
    title: 'École de Communication',
    shortTitle: 'Communication',
    description: 'Inspirer et influencer positivement votre audience.',
    href: '/ecoles/communication',
    status: 'Disponible',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    slug: 'bible-inductive',
    title: 'École Inductive de la Bible',
    shortTitle: 'Bible inductive',
    description: 'Étude biblique profonde avec la méthode inductive.',
    href: '/ecoles/bible-inductive',
    status: 'Disponible',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    slug: 'relation-aide',
    title: 'École Relation d\'Aide',
    shortTitle: 'Relation d\'aide',
    description: 'Accompagner et soutenir ceux qui font face à des défis.',
    href: '/ecoles/relation-aide',
    status: 'Disponible',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    slug: 'intersession',
    title: 'École d\'Intersession',
    shortTitle: 'Intersession',
    description: 'Sessions courtes et intensives tout au long de l\'année.',
    href: '/ecoles/intersession',
    status: 'Disponible',
    statusColor: 'bg-green-100 text-green-800',
  },
]

export function getEcoleBySlug(slug: string) {
  return ecoles.find((e) => e.slug === slug)
}
