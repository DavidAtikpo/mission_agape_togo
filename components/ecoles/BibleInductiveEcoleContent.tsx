import { BookOpen, CheckCircle } from 'lucide-react'
import {
  EcoleCtaBar,
  EcoleHero,
  EcoleModuleGrid,
  EcolePageShell,
  EcoleSection,
} from '@/components/ecoles/ecole-ui'

export default function BibleInductiveEcoleContent() {
  return (
    <EcolePageShell theme="sky">
      <EcoleHero
        backHref="/ecoles"
        backLabel="Retour aux écoles"
        theme="sky"
        title="École Inductive de la Bible"
        description="Maîtrisez la méthode inductive pour une étude biblique profonde, personnelle et transmissible."
        badges={[{ icon: CheckCircle, label: 'Formation disponible', variant: 'success' }]}
      />

      <EcoleSection theme="sky" title="À propos" icon={BookOpen}>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          Cette école forme à l&apos;étude rigoureuse des Écritures : observer le texte, comprendre son sens et
          l&apos;appliquer à la vie quotidienne et au service.
        </p>
      </EcoleSection>

      <EcoleModuleGrid
        theme="sky"
        title="Modules de formation"
        modules={[
          {
            title: 'Observation du texte biblique',
            icon: BookOpen,
            description: 'Apprendre à lire attentivement et à noter les faits du passage',
          },
          {
            title: 'Interprétation et contexte',
            icon: BookOpen,
            description: 'Comprendre le sens original à la lumière du contexte biblique',
          },
          {
            title: 'Application personnelle et enseignement',
            icon: BookOpen,
            description: 'Transformer l\'étude en transformation de vie et en partage',
          },
          {
            title: 'Étude des genres littéraires bibliques',
            icon: BookOpen,
            description: 'Discerner les différents types de textes et leurs méthodes d\'étude',
          },
          {
            title: 'Méthode inductive en groupe',
            icon: BookOpen,
            description: 'Conduire et participer à des études bibliques en communauté',
          },
          {
            title: 'Rédaction de notes et partage',
            icon: BookOpen,
            description: 'Structurer ses observations pour enseigner avec clarté',
          },
        ]}
      />

      <EcoleCtaBar />
    </EcolePageShell>
  )
}
