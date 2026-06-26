import Link from 'next/link'
import { ArrowRight, History } from 'lucide-react'

export default function EditionsTeaser() {
  return (
    <section className="w-full py-4 sm:py-5 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl border bg-card p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-primary">
              <History className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Historique</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
              Édition 14 — Dernière édition
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-xl leading-relaxed">
              Galeries photos et petits rapports de la vie à l&apos;école, depuis le début de la formation.
            </p>
          </div>
          <Link
            href="/editions"
            className="inline-flex items-center justify-center gap-2 shrink-0 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Voir l&apos;historique
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
