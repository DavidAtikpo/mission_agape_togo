import {
  Calendar,
  CheckCircle,
  Clock,
  Ear,
  Heart,
  MapPin,
  MessageCircle,
  Scale,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react'
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

export default function RelationAideEcoleContent() {
  return (
    <EcolePageShell theme="emerald">
      <EcoleHero
        backHref="/ecoles"
        backLabel="Retour aux écoles"
        theme="emerald"
        title="École Relation d'Aide"
        description="Formez-vous à accompagner, soutenir et conseiller avec empathie et professionnalisme, en combinant principes bibliques et compétences relationnelles concrètes."
        badges={[
          { icon: CheckCircle, label: 'Formation disponible', variant: 'success' },
          { icon: Clock, label: '12 semaines' },
        ]}
      />

      <EcoleSection theme="emerald" title="À propos de la formation" icon={CheckCircle}>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          <div className="space-y-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              L&apos;École Relation d&apos;Aide prépare des accompagnants qualifiés pour soutenir les personnes en
              difficulté. Vous développerez les compétences essentielles d&apos;écoute, d&apos;empathie et de conseil
              pour faire une différence positive dans la vie des autres.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Objectifs de la formation</h3>
              <EcoleObjectivesList
                items={[
                  'Pratiquer une écoute active et une présence bienveillante',
                  'Accompagner avec discernement dans diverses situations de vie',
                  "Respecter l'éthique et les limites de la relation d'aide",
                ]}
              />
            </div>

            <EcoleHighlightBox theme="emerald">
              <span className="flex items-start gap-2">
                <Scale className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Formation holistique : enseignements bibliques, mises en situation et jeux de rôle pour une pratique
                  concrète et responsable.
                </span>
              </span>
            </EcoleHighlightBox>
          </div>

          <EcoleInfoPanel
            theme="emerald"
            title="Informations pratiques"
            items={[
              { icon: Clock, label: 'Durée', value: '12 semaines' },
              { icon: Calendar, label: 'Fréquence', value: '2 séances par semaine (2 h 30 chacune)' },
              { icon: Users, label: 'Effectif', value: 'Groupes de 12 à 20 personnes' },
              { icon: MapPin, label: 'Format & lieu', value: 'En présentiel à Aného, avec mises en pratique' },
            ]}
          />
        </div>
      </EcoleSection>

      <EcoleModuleGrid
        theme="emerald"
        title="Modules de formation"
        footnote="Apprentissage expérientiel : études de cas, jeux de rôle et retours en groupe."
        modules={[
          {
            title: 'Écoute active et empathie',
            icon: Ear,
            description: "Accueillir l'autre avec attention, respect et présence authentique",
          },
          {
            title: 'Communication non-violente',
            icon: MessageCircle,
            description: 'Exprimer les besoins et gérer les conflits avec bienveillance',
          },
          {
            title: 'Gestion des émotions et du stress',
            icon: Heart,
            description: "Comprendre et accompagner les réactions émotionnelles en situation d'aide",
          },
          {
            title: 'Relations de confiance',
            icon: Users,
            description: 'Établir un cadre relationnel sûr et durable avec la personne aidée',
          },
          {
            title: 'Conseil et orientation spirituelle',
            icon: Sparkles,
            description: 'Allier discernement biblique et accompagnement pastoral',
          },
          {
            title: 'Éthique et limites professionnelles',
            icon: Shield,
            description: 'Intervenir avec intégrité, confidentialité et clarté des rôles',
          },
        ]}
      />

      <EcoleCtaBar />
    </EcolePageShell>
  )
}
