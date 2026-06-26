'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { createActualite, updateActualite, type ActualiteActionState } from '@/app/admin/(protected)/actualites/actions'
import { AdminImageUploadField } from '@/components/admin/AdminImageUploadField'

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
  const [state, formAction, pending] = useActionState<ActualiteActionState, FormData>(action, null)

  return (
    <form action={formAction} encType="multipart/form-data" className="space-y-5 max-w-2xl">
      {mode === 'edit' && initial ? <input type="hidden" name="id" value={initial.id} /> : null}

      {state?.error ? (
        <div className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.error}
        </div>
      ) : null}

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

      <AdminImageUploadField initialUrl={initial?.imageUrl} subdir="actualites" />

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
          disabled={pending}
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {pending ? 'Enregistrement…' : mode === 'create' ? 'Créer l’actualité' : 'Enregistrer'}
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
