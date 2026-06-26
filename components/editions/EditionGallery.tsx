'use client'

import { useState } from 'react'

type Photo = {
  id: string
  imageUrl: string
  legende: string | null
}

type Props = {
  photos: Photo[]
  editionNumero: number
}

export default function EditionGallery({ photos, editionNumero }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (photos.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-8">
        Aucune photo publiée pour cette édition.
      </p>
    )
  }

  const current = lightboxIndex !== null ? photos[lightboxIndex] : null

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-lg border bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.imageUrl}
              alt={photo.legende ?? `Édition ${editionNumero}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-1 right-1 rounded bg-black/55 px-1.5 py-0.5 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Éd. {editionNumero}
            </span>
          </button>
        ))}
      </div>

      {current && lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
          role="presentation"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-white text-sm hover:underline"
              onClick={() => setLightboxIndex(null)}
            >
              Fermer
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.imageUrl}
              alt={current.legende ?? ''}
              className="w-full max-h-[75vh] object-contain rounded-lg mx-auto"
            />
            {current.legende ? (
              <p className="mt-3 text-center text-sm text-white/90">{current.legende}</p>
            ) : null}
            {photos.length > 1 ? (
              <div className="mt-3 flex justify-center gap-3">
                <button
                  type="button"
                  disabled={lightboxIndex <= 0}
                  onClick={() => setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null))}
                  className="rounded-md bg-white/15 px-3 py-1.5 text-sm text-white disabled:opacity-30"
                >
                  Précédente
                </button>
                <span className="text-sm text-white/70 self-center">
                  {lightboxIndex + 1} / {photos.length}
                </span>
                <button
                  type="button"
                  disabled={lightboxIndex >= photos.length - 1}
                  onClick={() =>
                    setLightboxIndex((i) =>
                      i !== null ? Math.min(photos.length - 1, i + 1) : null
                    )
                  }
                  className="rounded-md bg-white/15 px-3 py-1.5 text-sm text-white disabled:opacity-30"
                >
                  Suivante
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
