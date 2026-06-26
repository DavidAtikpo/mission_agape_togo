import Link from 'next/link'
import { Calendar, GraduationCap, MapPin } from 'lucide-react'

export default function HomeCtaSection() {
  return (
    <section className="w-full py-8 sm:py-10 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-primary/15 bg-card shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-5 sm:p-7 lg:p-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Rentrée 2026</p>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                Rejoignez l&apos;École d&apos;Évangélisation
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Formation de 7 mois à Aného : 3 mois d&apos;enseignement biblique et pratique, puis 4 mois de
                mission sur le terrain. Inscriptions ouvertes dès maintenant.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  Rentrée le <strong>5 septembre 2026</strong>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  Aného, Togo
                </li>
                <li className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  7 mois — théorie &amp; terrain
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <Link
                  href="/inscription"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  S&apos;inscrire maintenant
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="bg-primary/5 border-t lg:border-t-0 lg:border-l border-primary/10 p-5 sm:p-7 lg:p-8 flex flex-col justify-center gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Accès rapide
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { href: '/documents', label: 'Documents' },
                    { href: '/documents/prospectus', label: 'Prospectus' },
                    { href: '/editions', label: 'Historique' },
                    { href: '/documents/formulaires', label: 'Formulaires' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg border bg-background px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors text-center"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Écolage, analyses médicales et fournitures : consultez les informations pratiques sur la page{' '}
                <Link href="/ecoles" className="text-primary font-medium hover:underline">
                  École d&apos;Évangélisation
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
