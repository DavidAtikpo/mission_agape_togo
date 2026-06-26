import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import {
  addEditionPhoto,
  deleteEditionPhoto,
  toggleEditionPhotoPublished,
} from '@/app/admin/(protected)/editions/actions'

export default async function EditionPhotosPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const edition = await prisma.edition.findUnique({
    where: { id },
    include: {
      photos: { orderBy: [{ ordre: 'asc' }, { createdAt: 'asc' }] },
    },
  })

  if (!edition) notFound()

  return (
    <div>
      <Link href="/admin/editions" className="text-xs text-muted-foreground hover:text-foreground">
        ← Historique
      </Link>
      <h1 className="text-xl sm:text-2xl font-bold text-foreground mt-2">
        Galerie — Édition {edition.numero}
      </h1>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4">{edition.titre}</p>

      <form action={addEditionPhoto} className="rounded-lg border p-4 mb-6 space-y-3 max-w-xl bg-muted/20">
        <input type="hidden" name="editionId" value={edition.id} />
        <p className="text-sm font-medium">Ajouter une photo</p>
        <input
          name="image"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          required
          className="w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-foreground"
        />
        <input
          name="legende"
          type="text"
          placeholder="Légende (optionnelle)"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
        <input
          name="ordre"
          type="number"
          placeholder="Ordre (0 = premier)"
          defaultValue={edition.photos.length}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="publiee" defaultChecked className="rounded border" />
          Publier sur le site
        </label>
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Ajouter
        </button>
      </form>

      {edition.photos.length === 0 ? (
        <p className="text-sm text-muted-foreground border rounded-lg p-6 text-center">
          Aucune photo. Les visiteurs verront les images de secours pour l&apos;édition 14 tant que la galerie est
          vide.
        </p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {edition.photos.map((photo) => (
            <li key={photo.id} className="rounded-lg border overflow-hidden bg-card">
              <div className="relative aspect-square">
                <Image src={photo.imageUrl} alt={photo.legende ?? ''} fill className="object-cover" sizes="200px" />
              </div>
              <div className="p-2 space-y-2">
                <p className="text-[10px] text-muted-foreground line-clamp-2">
                  {photo.legende || 'Sans légende'} · ordre {photo.ordre}
                </p>
                <div className="flex flex-wrap gap-1">
                  <form action={toggleEditionPhotoPublished}>
                    <input type="hidden" name="id" value={photo.id} />
                    <input type="hidden" name="editionId" value={edition.id} />
                    <button type="submit" className="text-[10px] border rounded px-2 py-0.5 hover:bg-muted">
                      {photo.publiee ? 'Masquer' : 'Publier'}
                    </button>
                  </form>
                  <form action={deleteEditionPhoto}>
                    <input type="hidden" name="id" value={photo.id} />
                    <input type="hidden" name="editionId" value={edition.id} />
                    <button type="submit" className="text-[10px] text-destructive px-2 py-0.5">
                      Supprimer
                    </button>
                  </form>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
