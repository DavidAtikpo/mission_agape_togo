import Link from 'next/link'
import { ArrowLeft, History } from 'lucide-react'
import EditionGallery from '@/components/editions/EditionGallery'
import EditionSelector from '@/components/editions/EditionSelector'
import HistoriqueTimeline from '@/components/editions/HistoriqueTimeline'
import {
  ensureStandardEditions,
  FALLBACK_EDITION_14_PHOTOS,
  getEditionPhotosPublic,
  getEditionsForPublic,
  getPublishedRapports,
} from '@/lib/editions'

export default async function EditionsPage({
  searchParams,
}: {
  searchParams: Promise<{ edition?: string }>
}) {
  const { edition: editionParam } = await searchParams
  await ensureStandardEditions()
  const [editions, rapports] = await Promise.all([getEditionsForPublic(), getPublishedRapports()])

  const currentEdition = editions.find((e) => e.estCourante) ?? editions[0]
  const parsedNumero = editionParam ? parseInt(editionParam, 10) : NaN
  const selectedEdition =
    editions.find((e) => e.numero === parsedNumero) ?? currentEdition ?? editions[0]

  let photos = selectedEdition ? await getEditionPhotosPublic(selectedEdition.id) : []
  if (photos.length === 0 && selectedEdition?.numero === 14) {
    photos = FALLBACK_EDITION_14_PHOTOS
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 pb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-primary/80 transition mb-4"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          Retour à l&apos;accueil
        </Link>

        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 text-primary">
            <History className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">Historique</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Vie de l&apos;école &amp; éditions
          </h1>
          {selectedEdition ? (
            <p className="text-sm sm:text-base text-foreground/75 max-w-3xl leading-relaxed">
              <strong>
                Édition {selectedEdition.numero}
                {selectedEdition.estCourante ? ' — Dernière édition' : ''}
              </strong>
              {selectedEdition.description ? ` · ${selectedEdition.description}` : ''}
            </p>
          ) : null}
        </div>

        {/* Chronologie rapports */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-3">
            Chronologie depuis le début de l&apos;école
          </h2>
          <HistoriqueTimeline rapports={rapports} />
        </section>

        {/* Galerie */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-primary">
                Galerie photos
                {selectedEdition ? (
                  <span className="font-normal text-foreground/70 text-base sm:ml-2">
                    — Édition {selectedEdition.numero}
                    {selectedEdition.estCourante ? ' (Dernière édition)' : ''}
                  </span>
                ) : null}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {photos.length} photo{photos.length !== 1 ? 's' : ''} affichée{photos.length !== 1 ? 's' : ''}
              </p>
            </div>
            {editions.length > 0 ? (
              <EditionSelector editions={editions} selectedNumero={selectedEdition?.numero ?? 14} />
            ) : null}
          </div>

          {selectedEdition ? (
            <EditionGallery photos={photos} editionNumero={selectedEdition.numero} />
          ) : (
            <p className="text-sm text-muted-foreground">Aucune édition configurée.</p>
          )}
        </section>

        <div className="mt-10 flex flex-col sm:flex-row gap-2 justify-center">
          <Link
            href="/inscription"
            className="text-center px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90"
          >
            S&apos;inscrire
          </Link>
          <Link
            href="/ecoles"
            className="text-center px-5 py-2.5 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary/5"
          >
            École d&apos;Évangélisation
          </Link>
        </div>
      </div>
    </main>
  )
}
