import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  MapPin,
  MessageCircle,
  Mic,
  Users,
} from 'lucide-react'
import FormationPracticalInfo from '@/components/FormationPracticalInfo'
import {
  EcoleCtaBar,
  EcoleHero,
  EcoleHighlightBox,
  EcoleInfoPanel,
  EcoleModuleGrid,
  EcoleObjectivesList,
  EcolePageShell,
  EcoleSection,
} from '@/components/ecoles/ecole-ui'

export default function EvangelisationEcoleContent() {
  return (
    <EcolePageShell theme="blue" footer={<FormationPracticalInfo />}>
      <EcoleHero
        backHref="/"
        backLabel="Retour à l'accueil"
        theme="blue"
        title="École d'Évangélisation"
        description="Formation complète pour devenir un témoin efficace de l'Évangile, alliant enseignement biblique et mise en pratique sur le terrain."
        badges={[
          { icon: CheckCircle, label: 'Inscriptions ouvertes', variant: 'success' },
          { icon: Calendar, label: 'Rentrée le 5 septembre 2026' },
        ]}
      />

      <EcoleSection theme="blue" title="Prochaine session" icon={CheckCircle}>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Objectifs de la formation</h3>
              <EcoleObjectivesList
                items={[
                  "Maîtriser les fondements bibliques de l'évangélisation",
                  'Développer des compétences pratiques de témoignage',
                  'Participer à une phase terrain de 4 mois en mission',
                ]}
              />
            </div>
            <EcoleHighlightBox theme="blue">
              L&apos;école d&apos;évangélisation commence le <strong>5 septembre 2026</strong>. Les inscriptions sont
              ouvertes dès maintenant.
            </EcoleHighlightBox>
          </div>

          <EcoleInfoPanel
            theme="blue"
            title="Informations pratiques"
            items={[
              { icon: Calendar, label: 'Date de rentrée', value: '5 septembre 2026' },
              { icon: Clock, label: 'Durée', value: '7 mois (3 mois théorie + 4 mois terrain)' },
              { icon: MapPin, label: 'Lieu', value: 'Aného, Togo' },
            ]}
          />
        </div>
      </EcoleSection>

      <EcoleModuleGrid
        theme="blue"
        title="Modules de formation"
        modules={[
          {
            title: "Fondements bibliques de l'évangélisation",
            icon: BookOpen,
            description: 'Comprendre les bases scripturaires pour témoigner avec clarté',
          },
          {
            title: 'Techniques de communication efficace',
            icon: Mic,
            description: "Partager le message de l'Évangile avec impact et simplicité",
          },
          {
            title: 'Gestion des objections',
            icon: MessageCircle,
            description: 'Répondre aux questions avec sagesse et respect',
          },
          {
            title: 'Relations authentiques',
            icon: Heart,
            description: 'Construire des liens sincères dans le partage de la foi',
          },
          {
            title: 'Évangélisation contextuelle',
            icon: Globe,
            description: 'Adapter le message aux réalités culturelles et sociales',
          },
          {
            title: 'Phase pratique sur le terrain',
            icon: Users,
            description: "Mettre en pratique l'évangélisation en équipe et en mission",
          },
        ]}
      />

      <EcoleCtaBar />
    </EcolePageShell>
  )
}
