import Link from 'next/link'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { ecoles } from '@/lib/ecoles'
import SchoolCard from './school-card'

const gradients: Record<string, string> = {
  evangelisation: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(108,92,231,0.04))',
  communication: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(0,194,168,0.04))',
  'bible-inductive': 'linear-gradient(135deg, rgba(96,165,250,0.12), rgba(108,92,231,0.04))',
  'relation-aide': 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(0,194,168,0.04))',
  intersession: 'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(108,92,231,0.04))',
}

export default function Schools() {
  return (
    <section id="ecoles" className="w-full py-8 sm:py-10 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full min-w-0">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Nos formations</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 leading-tight">
            Nos écoles de formation
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cinq programmes spécialisés pour renforcer votre impact spirituel et votre service sur le terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
          {ecoles.map((ecole) => (
            <SchoolCard
              key={ecole.slug}
              title={ecole.title}
              description={ecole.description}
              gradient={gradients[ecole.slug]}
              link={ecole.href}
              isActive={ecole.status === 'En cours'}
            />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/ecoles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Voir toutes les écoles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
