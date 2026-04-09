'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Status = 'NOUVELLE' | 'EN_COURS' | 'TRAITEE'

const labels: Record<Status, string> = {
  NOUVELLE: 'Nouvelle',
  EN_COURS: 'En cours',
  TRAITEE: 'Traitée',
}

export function InscriptionStatusForm({ id, current }: { id: string; current: Status }) {
  const router = useRouter()
  const [status, setStatus] = useState<Status>(current)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setStatus(current)
  }, [current])

  async function save() {
    setMessage('')
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/inscriptions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (!res.ok) {
        const d = (await res.json().catch(() => ({}))) as { error?: string }
        setMessage(d.error || 'Erreur')
        return
      }
      setMessage('Enregistré')
      router.refresh()
    } catch {
      setMessage('Erreur réseau')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <label className="text-sm font-medium shrink-0">Statut du dossier</label>
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          {(Object.keys(labels) as Status[]).map((s) => (
            <option key={s} value={s}>
              {labels[s]}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={save}
          disabled={saving || status === current}
          className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {saving ? '…' : 'Mettre à jour'}
        </button>
        {message ? <span className="text-sm text-muted-foreground">{message}</span> : null}
      </div>
    </div>
  )
}
