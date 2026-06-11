'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, Loader2 } from 'lucide-react'

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
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setStatus(current)
  }, [current])

  async function save() {
    setMessage('')
    setSuccess(false)
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
      setSuccess(true)
      setMessage('Enregistré')
      router.refresh()
    } catch {
      setMessage('Erreur réseau')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <select
        id="status-select"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value as Status)
          setSuccess(false)
          setMessage('')
        }}
        className="rounded-md border border-input bg-background px-2 py-1.5 text-xs w-full sm:w-40"
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
        className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
        Enregistrer
      </button>
      {message ? (
        <span className={`inline-flex items-center gap-1 text-xs ${success ? 'text-emerald-600' : 'text-destructive'}`}>
          {success ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
          {message}
        </span>
      ) : null}
    </div>
  )
}
