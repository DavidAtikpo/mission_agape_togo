import { Calendar } from 'lucide-react'

type Rapport = {
  id: string
  titre: string
  contenu: string
  imageUrl: string | null
  dateEvenement: Date
  edition: { numero: number; titre: string } | null
}

export default function HistoriqueTimeline({ rapports }: { rapports: Rapport[] }) {
  if (rapports.length === 0) {
    return (
      <p className="text-sm text-muted-foreground rounded-lg border p-6 text-center">
        Les rapports de l&apos;école seront publiés ici au fil de la formation.
      </p>
    )
  }

  return (
    <ol className="relative space-y-4 before:absolute before:left-[11px] sm:before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border">
      {rapports.map((rapport) => {
        const dateLabel = new Intl.DateTimeFormat('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(rapport.dateEvenement)

        return (
          <li key={rapport.id} className="relative pl-8 sm:pl-10">
            <span
              className="absolute left-0 sm:left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
              aria-hidden
            />
            <article className="rounded-lg border bg-card p-3 sm:p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {dateLabel}
                </span>
                {rapport.edition ? (
                  <span className="text-[10px] sm:text-xs font-medium rounded-full bg-primary/10 text-primary px-2 py-0.5">
                    Édition {rapport.edition.numero}
                  </span>
                ) : null}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">{rapport.titre}</h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed whitespace-pre-line mb-3">
                {rapport.contenu}
              </p>
              {rapport.imageUrl ? (
                <div className="rounded-md overflow-hidden border max-w-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rapport.imageUrl}
                    alt=""
                    className="w-full h-auto max-h-64 object-cover"
                  />
                </div>
              ) : null}
            </article>
          </li>
        )
      })}
    </ol>
  )
}
