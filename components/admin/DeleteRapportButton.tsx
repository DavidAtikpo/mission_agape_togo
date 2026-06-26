'use client'

import { deleteRapportEcole } from '@/app/admin/(protected)/editions/actions'

type Props = {
  id: string
  titre: string
}

export function DeleteRapportButton({ id, titre }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!window.confirm(`Supprimer le rapport « ${titre} » ?`)) {
      e.preventDefault()
    }
  }

  return (
    <form action={deleteRapportEcole} onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="text-xs text-destructive/80 hover:text-destructive px-2 py-1">
        Supprimer
      </button>
    </form>
  )
}
