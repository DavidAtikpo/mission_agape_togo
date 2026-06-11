'use client'

import { Trash2 } from 'lucide-react'
import { deleteInscription } from '@/app/admin/(protected)/actions'

type Props = {
  id: string
  label: string
  redirectTo?: string
  variant?: 'table' | 'discreet'
  className?: string
}

export function DeleteInscriptionButton({
  id,
  label,
  redirectTo,
  variant = 'discreet',
  className = '',
}: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const confirmed = window.confirm(
      `Supprimer définitivement l'inscription de ${label} ?\n\nCette action ne peut pas être annulée.`,
    )
    if (!confirmed) {
      e.preventDefault()
      return
    }
    const secondConfirm = window.confirm(
      'Dernière confirmation : voulez-vous vraiment supprimer ce dossier ?',
    )
    if (!secondConfirm) {
      e.preventDefault()
    }
  }

  const classNames =
    variant === 'table'
      ? 'inline-flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground hover:text-destructive underline-offset-2 hover:underline cursor-pointer bg-transparent border-0 p-0'
      : 'inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive underline-offset-2 hover:underline cursor-pointer bg-transparent border-0 p-0'

  return (
    <form action={deleteInscription} onSubmit={handleSubmit} className={`inline ${className}`}>
      <input type="hidden" name="id" value={id} />
      {redirectTo ? <input type="hidden" name="redirectTo" value={redirectTo} /> : null}
      <button type="submit" className={classNames}>
        <Trash2 className="h-3 w-3 shrink-0 opacity-60" />
        Supprimer le dossier
      </button>
    </form>
  )
}
