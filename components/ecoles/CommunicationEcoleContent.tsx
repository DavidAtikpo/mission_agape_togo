import {
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  MapPin,
  MessageSquare,
  Mic,
  Monitor,
  Sparkles,
  Users,
  Video,
} from 'lucide-react'
import FormationPracticalInfo from '@/components/FormationPracticalInfo'
import {
  EcoleCtaBar,
  EcoleHero,
  EcoleInfoPanel,
  EcoleModuleGrid,
  EcoleObjectivesList,
  EcolePageShell,
  EcolePhaseCards,
  EcoleSection,
} from '@/components/ecoles/ecole-ui'

export default function CommunicationEcoleContent() {
  return (
    <EcolePageShell theme="violet" footer={<FormationPracticalInfo />}>
      <EcoleHero
        backHref="/ecoles"
        backLabel="Retour aux écoles"
        theme="violet"
        title="École de Communication"
        description="Devenez un communicateur efficace et inspirant : maîtrisez l'art du message, de la prise de parole et de la présence médiatique au service de la mission."
        badges={[
          { icon: CheckCircle, label: 'Formation disponible', variant: 'success' },
          { icon: Clock, label: '7 mois — théorie & terrain' },
        ]}
      />

      <EcoleSection theme="violet" title="Programme de formation" icon={CheckCircle}>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Objectifs de la formation</h3>
              <EcoleObjectivesList
                items={[
                  'Développer des compétences oratoires et de présentation',
                  "Structurer des messages clairs pour tout type d'audience",
                  'Mettre en pratique sur le terrain en contexte interculturel',
                ]}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Deux phases complémentaires</h3>
              <EcolePhaseCards
                theme="violet"
                phases={[
                  {
                    title: 'Phase 1 — Théorie (3 mois)',
                    description:
                      'Fondements, techniques oratoires, langage verbal et non-verbal, préparation au terrain.',
                  },
                  {
                    title: 'Phase 2 — Pratique (4 mois)',
                    description:
                      'Application en contexte réel, interaction interculturelle, leadership et mentorat par des experts.',
                  },
                ]}
              />
            </div>
          </div>

          <EcoleInfoPanel
            theme="violet"
            title="Informations pratiques"
            items={[
              { icon: Clock, label: 'Durée', value: '7 mois (3 mois théorie + 4 mois terrain)' },
              { icon: Globe, label: 'Format', value: 'Présentiel à la base + phase terrain internationale' },
              { icon: Users, label: 'Effectif', value: 'Groupes de 12 à 20 personnes' },
              { icon: MapPin, label: 'Lieu', value: 'Aného, Togo — puis mission sur le terrain' },
              { icon: Calendar, label: 'Certification', value: "Diplôme Mission Agape à l'issue de la formation" },
            ]}
          />
        </div>
      </EcoleSection>

      <EcoleModuleGrid
        theme="violet"
        title="Modules de formation"
        footnote="Chaque module inclut des exercices pratiques avec feedbacks personnalisés."
        modules={[
          {
            title: 'Principes fondamentaux de la communication',
            icon: MessageSquare,
            description: "Comprendre les bases d'un message clair, structuré et mémorable",
          },
          {
            title: 'Langage verbal et non-verbal',
            icon: Mic,
            description: 'Maîtriser la voix, le corps et la posture pour transmettre avec impact',
          },
          {
            title: 'Art du storytelling et du discours',
            icon: Sparkles,
            description: 'Captiver une audience par des récits et des messages inspirants',
          },
          {
            title: 'Communication en équipe et en groupe',
            icon: Users,
            description: "Animer, écouter et fédérer dans un contexte d'équipe ou de ministère",
          },
          {
            title: 'Médias numériques et présence en ligne',
            icon: Monitor,
            description: 'Utiliser les outils modernes pour toucher et engager votre public',
          },
          {
            title: 'Gestion du trac et confiance en soi',
            icon: Video,
            description: 'Parler en public avec assurance grâce à des exercices pratiques',
          },
        ]}
      />

      <EcoleCtaBar />
    </EcolePageShell>
  )
}
