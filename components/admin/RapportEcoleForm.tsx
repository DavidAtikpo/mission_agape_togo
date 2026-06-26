import Image from 'next/image'
import Link from 'next/link'
import { createEdition, createRapportEcole, updateRapportEcole } from '@/app/admin/(protected)/editions/actions'

type EditionOption = { id: string; numero: number; titre: string; estCourante?: boolean }

type RapportEcoleFormProps = {
  mode: 'create' | 'edit'
  editions: EditionOption[]
  redirectPath?: string
  initial?: {
    id: string
    titre: string
    contenu: string
    imageUrl: string | null
    dateEvenement: Date
    editionId: string | null
    publiee: boolean
  }
}

function formatDateInput(date: Date) {
  return date.toISOString().slice(0, 10)
}

export function RapportEcoleForm({ mode, editions, redirectPath, initial }: RapportEcoleFormProps) {
  const action = mode === 'create' ? createRapportEcole : updateRapportEcole
  const defaultEditionId =
    initial?.editionId ??
    editions.find((e) => e.estCourante)?.id ??
    editions.find((e) => e.numero === 14)?.id ??
    editions[editions.length - 1]?.id ??
    ''
  const nextNumero = editions.length > 0 ? Math.max(...editions.map((e) => e.numero)) + 1 : 15
  const addEditionRedirect = redirectPath ?? (mode === 'edit' && initial ? `/admin/editions/rapports/${initial.id}` : '/admin/editions/rapports/new')

  return (
    <div className="space-y-6 max-w-2xl">
      <form action={action} className="space-y-5">
        {mode === 'edit' && initial ? <input type="hidden" name="id" value={initial.id} /> : null}

        <div className="space-y-1.5">
          <label htmlFor="titre" className="text-sm font-medium">
            Titre du rapport <span className="text-destructive">*</span>
          </label>
          <input
            id="titre"
            name="titre"
            type="text"
            required
            defaultValue={initial?.titre ?? ''}
            placeholder="Ex. Première semaine de formation"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contenu" className="text-sm font-medium">
            Texte du rapport <span className="text-destructive">*</span>
          </label>
          <textarea
            id="contenu"
            name="contenu"
            required
            rows={5}
            defaultValue={initial?.contenu ?? ''}
            placeholder="Petit compte-rendu de la vie à l'école…"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm resize-y min-h-[120px]"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="dateEvenement" className="text-sm font-medium">
              Date <span className="text-destructive">*</span>
            </label>
            <input
              id="dateEvenement"
              name="dateEvenement"
              type="date"
              required
              defaultValue={initial ? formatDateInput(initial.dateEvenement) : formatDateInput(new Date())}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="editionId" className="text-sm font-medium">
              Édition
            </label>
            <select
              id="editionId"
              name="editionId"
              defaultValue={defaultEditionId}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option value="">— Aucune —</option>
              {editions.map((e) => (
                <option key={e.id} value={e.id}>
                  Édition {e.numero}
                  {e.estCourante ? ' (Dernière)' : ''} — {e.titre}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground">Éditions 1 à 14 disponibles. Vous pouvez en ajouter ci-dessous.</p>
          </div>
        </div>

        <div className="space-y-3 rounded-lg border p-4 bg-muted/20">
          <p className="text-sm font-medium">Image (optionnelle, 1 seule)</p>

          {initial?.imageUrl ? (
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <div className="relative w-32 h-24 rounded-md overflow-hidden border shrink-0">
                <Image src={initial.imageUrl} alt="Aperçu" fill className="object-cover" sizes="128px" />
              </div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input type="checkbox" name="removeImage" className="rounded border" />
                Supprimer l&apos;image actuelle
              </label>
            </div>
          ) : null}

          <input
            name="image"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-foreground"
          />
          <input
            name="imageUrl"
            type="url"
            defaultValue={initial?.imageUrl?.startsWith('/uploads/') ? '' : (initial?.imageUrl ?? '')}
            placeholder="Ou URL d'image https://…"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>

        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            name="publiee"
            defaultChecked={initial?.publiee ?? false}
            className="rounded border"
          />
          Publier sur la page Historique
        </label>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {mode === 'create' ? 'Créer le rapport' : 'Enregistrer'}
          </button>
          <Link
            href="/admin/editions/rapports"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            Annuler
          </Link>
        </div>
      </form>

      <div className="rounded-lg border border-dashed p-4 bg-muted/10 space-y-3">
        <div>
          <p className="text-sm font-medium">Ajouter une édition</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Pour une édition 15 ou suivante, ou si une édition manque dans la liste.
          </p>
        </div>
        <form action={createEdition} className="grid sm:grid-cols-[100px_1fr_auto] gap-2 items-end">
          <input type="hidden" name="redirectTo" value={addEditionRedirect} />
          <div className="space-y-1">
            <label htmlFor="numero" className="text-xs font-medium text-muted-foreground">
              Numéro
            </label>
            <input
              id="numero"
              name="numero"
              type="number"
              min={1}
              defaultValue={nextNumero}
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="editionTitre" className="text-xs font-medium text-muted-foreground">
              Titre
            </label>
            <input
              id="editionTitre"
              name="titre"
              type="text"
              placeholder={`Ex. Édition ${nextNumero}`}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors whitespace-nowrap"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  )
}
