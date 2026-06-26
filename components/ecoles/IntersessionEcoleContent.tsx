import { Calendar, Clock, MapPin, Users, Zap } from 'lucide-react'
import {
  EcoleCtaBar,
  EcoleHero,
  EcoleInfoPanel,
  EcoleModuleGrid,
  EcolePageShell,
  EcoleSection,
} from '@/components/ecoles/ecole-ui'

const sessions = [
  { title: 'Leadership biblique (3 jours)', description: 'Intensive et transformatrice', icon: Zap },
  { title: 'Prière et intercession (3 jours)', description: 'Intensive et transformatrice', icon: Zap },
  { title: 'Gestion des conflits (2 jours)', description: 'Intensive et transformatrice', icon: Zap },
  { title: 'Planification stratégique (2 jours)', description: 'Intensive et transformatrice', icon: Zap },
  { title: 'Mentorat et discipulat (3 jours)', description: 'Intensive et transformatrice', icon: Zap },
  { title: 'Retraite de restauration (4 jours)', description: 'Intensive et transformatrice', icon: Zap },
]

export default function IntersessionEcoleContent() {
  return (
    <EcolePageShell theme="amber">
      <EcoleHero
        backHref="/ecoles"
        backLabel="Retour aux écoles"
        theme="amber"
        title="École d'Intersession"
        description="Sessions intensives et courtes pour approfondir votre formation tout au long de l'année."
        badges={[{ icon: Clock, label: 'Sessions courtes' }]}
      />

      <EcoleSection theme="amber" title="À propos" icon={Zap}>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            L&apos;École d&apos;Intersession propose des formations courtes et intensives conçues pour les personnes
            ayant des contraintes d&apos;emploi du temps. Ces sessions permettent d&apos;approfondir des domaines
            spécifiques ou de compléter votre formation initiale.
          </p>
          <p>
            Pendant les vacances scolaires, les jours fériés ou les week-ends, participez à des sessions concentrées
            qui couvrent des sujets essentiels en format rapide et dynamique.
          </p>
        </div>
      </EcoleSection>

      <EcoleModuleGrid theme="amber" title="Sessions disponibles" modules={sessions} />

      <EcoleSection theme="amber" title="Format et durée" icon={Calendar}>
        <EcoleInfoPanel
          theme="amber"
          title="Informations pratiques"
          items={[
            { icon: Clock, label: 'Durée', value: '2 à 4 jours selon la session' },
            { icon: Calendar, label: 'Calendrier', value: 'Vacances scolaires, week-ends et jours fériés' },
            { icon: MapPin, label: 'Format', value: 'Sessions intensives en présentiel' },
            { icon: Users, label: 'Participants', value: 'Groupes de 15 à 30 personnes' },
          ]}
        />
      </EcoleSection>

      <EcoleCtaBar secondaryHref="/contact" secondaryLabel="Nous contacter" />
    </EcolePageShell>
  )
}
