import Image from 'next/image'
import Link from 'next/link'
import { createActualite, updateActualite } from '@/app/admin/(protected)/actualites/actions'

type ActualiteFormProps = {
  mode: 'create' | 'edit'
  initial?: {
    id: string
    titre: string
    contenu: string
    imageUrl: string | null
    lienLabel: string | null
    lienUrl: string | null
    publiee: boolean
  }
}

export function ActualiteForm({ mode, initial }: ActualiteFormProps) {
  const action = mode === 'create' ? createActualite : updateActualite

  return (
    <form action={action} className="space-y-5 max-w-2xl">
      {mode === 'edit' && initial ? <input type="hidden" name="id" value={initial.id} /> : null}

      <div className="space-y-1.5">
        <label htmlFor="titre" className="text-sm font-medium">
          Titre <span className="text-destructive">*</span>
        </label>
        <input
          id="titre"
          name="titre"
          type="text"
          required
          defaultValue={initial?.titre ?? ''}
          placeholder="Ex. Rentrée École d'Évangélisation — 5 septembre 2026"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contenu" className="text-sm font-medium">
          Texte <span className="text-destructive">*</span>
        </label>
        <textarea
          id="contenu"
          name="contenu"
          required
          rows={5}
          defaultValue={initial?.contenu ?? ''}
          placeholder="Message affiché sur la carte d'actualité…"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm resize-y min-h-[120px]"
        />
      </div>

      <div className="space-y-3 rounded-lg border p-4 bg-muted/20">
        <p className="text-sm font-medium">Image (optionnelle)</p>

        {initial?.imageUrl ? (
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <div className="relative w-32 h-24 rounded-md overflow-hidden border shrink-0">
              <Image
                src={initial.imageUrl}
                alt="Aperçu"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input type="checkbox" name="removeImage" className="rounded border" />
              Supprimer l&apos;image actuelle
            </label>
          </div>
        ) : null}

        <div className="space-y-1.5">
          <label htmlFor="image" className="text-xs text-muted-foreground">
            Téléverser une image (JPEG, PNG, WebP, GIF — max. 5 Mo)
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-foreground"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="imageUrl" className="text-xs text-muted-foreground">
            Ou coller une URL d&apos;image
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            defaultValue={
              initial?.imageUrl?.startsWith('/uploads/') ? '' : (initial?.imageUrl ?? '')
            }
            placeholder="https://…"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="lienLabel" className="text-sm font-medium">
            Libellé du bouton (optionnel)
          </label>
          <input
            id="lienLabel"
            name="lienLabel"
            type="text"
            defaultValue={initial?.lienLabel ?? ''}
            placeholder="Ex. S'inscrire"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lienUrl" className="text-sm font-medium">
            Lien du bouton (optionnel)
          </label>
          <input
            id="lienUrl"
            name="lienUrl"
            type="text"
            defaultValue={initial?.lienUrl ?? ''}
            placeholder="/inscription ou https://…"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          name="publiee"
          defaultChecked={initial?.publiee ?? false}
          className="rounded border"
        />
        Publier sur la page d&apos;accueil
      </label>
      <p className="text-xs text-muted-foreground -mt-3">
        Si plusieurs actualités sont publiées, la plus récemment modifiée s&apos;affiche en premier.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          {mode === 'create' ? 'Créer l’actualité' : 'Enregistrer'}
        </button>
        <Link
          href="/admin/actualites"
          className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          Annuler
        </Link>
      </div>
    </form>
  )
}
