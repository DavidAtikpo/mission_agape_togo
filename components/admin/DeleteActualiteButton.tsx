'use client'

import { deleteActualite } from '@/app/admin/(protected)/actualites/actions'

type Props = {
  id: string
  titre: string
}

export function DeleteActualiteButton({ id, titre }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!window.confirm(`Supprimer l'actualité « ${titre} » ?`)) {
      e.preventDefault()
    }
  }

  return (
    <form action={deleteActualite} onSubmit={handleSubmit} className="w-full">
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="w-full text-xs text-destructive/80 hover:text-destructive px-3 py-1.5"
      >
        Supprimer
      </button>
    </form>
  )
}
