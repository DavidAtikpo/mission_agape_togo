import Link from 'next/link'
import {
  BookOpen,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  Package,
  Wallet,
} from 'lucide-react'

const supplies = [
  'Une Bible d\'étude',
  'A4 grand format — 200 pages',
  'Un cahier de 300 pages',
  '2 cahiers de 200 pages',
  '4 cahiers de 100 pages',
  'Un ensemble géométrique',
  'Stylos Bic : bleu, rouge, noir, vert',
  '2 tenues de l\'école — une pour la phase théorique, une pour la phase pratique',
  '5 livres à étudier — total : 13 500 FCFA',
]

export default function FormationPracticalInfo() {
  return (
    <section
      id="infos-formation"
      className="w-full pt-7 pb-10 sm:pt-9 sm:pb-12 md:pt-10 md:pb-14 bg-gradient-to-b from-blue-50/80 to-background dark:from-blue-950/20 dark:to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
            Informations pratiques
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 leading-tight">
            Frais, analyses &amp; fournitures
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
            Tout ce qu&apos;il faut savoir avant votre rentrée à l&apos;école de formation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Écolage */}
          <article className="rounded-2xl border bg-card shadow-sm overflow-hidden flex flex-col">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-5 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Écolage — 7 mois</h3>
                <p className="text-xs text-muted-foreground">Nourriture, logement &amp; voyage</p>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
              <p className="text-sm text-foreground/80 leading-relaxed">
                L&apos;écolage pour les <strong>7 mois de formation</strong>, comprenant la{' '}
                <strong>nourriture</strong>, le <strong>logement</strong> et le{' '}
                <strong>voyage de 4 mois</strong>, est fixé à :
              </p>
              <p className="text-3xl font-bold text-primary tabular-nums">310 000 FCFA</p>
              <p className="text-sm text-muted-foreground">Payable en 2 tranches</p>
              <ul className="space-y-3 mt-auto">
                <li className="flex gap-3 rounded-xl bg-muted/50 p-3 text-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">1<sup>re</sup> tranche — 160 000 FCFA</p>
                    <p className="text-muted-foreground text-xs mt-0.5">À la rentrée de l&apos;école</p>
                  </div>
                </li>
                <li className="flex gap-3 rounded-xl bg-muted/50 p-3 text-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">2<sup>e</sup> tranche</p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Au plus tard le <strong>27 décembre</strong> de l&apos;année
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </article>

          {/* Analyses */}
          <article className="rounded-2xl border bg-card shadow-sm overflow-hidden flex flex-col">
            <div className="flex items-center gap-3 border-b bg-emerald-500/5 px-5 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Analyses médicales</h3>
                <p className="text-xs text-muted-foreground">Exigences à la rentrée</p>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <ul className="space-y-3">
                {[
                  'Bilan de santé complet (taille, poids, etc.)',
                  'Dépistage Hépatite B',
                  'Suivi des trois vaccinations sur trois mois consécutifs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <ClipboardList className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground border-t pt-4">
                Présentez vos résultats à l&apos;inscription ou à la rentrée.
              </p>
            </div>
          </article>

          {/* Fournitures */}
          <article className="rounded-2xl border bg-card shadow-sm overflow-hidden flex flex-col md:col-span-2">
            <div className="flex items-center gap-3 border-b bg-amber-500/5 px-5 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Fournitures scolaires</h3>
                <p className="text-xs text-muted-foreground">Liste recommandée</p>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {supplies.map((item, index) => (
                  <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                    <span className="font-semibold text-amber-600 shrink-0 tabular-nums">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 p-3">
                <p className="text-sm font-medium text-foreground flex items-start gap-2">
                  <BookOpen className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  Toutes les fournitures sont disponibles sur place à la Mission, à des prix plus avantageux.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/inscription"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
          >
            <GraduationCap className="h-4 w-4" />
            S&apos;inscrire à la formation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
