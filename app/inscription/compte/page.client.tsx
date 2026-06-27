'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Loader2, UserPlus } from 'lucide-react'

type SetupInfo = {
  email: string
  nom: string
  prenom: string
  existingAccount: boolean
}

export default function InscriptionComptePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') ?? ''

  const [setupInfo, setSetupInfo] = useState<SetupInfo | null>(null)
  const [loadingSetup, setLoadingSetup] = useState(true)
  const [setupError, setSetupError] = useState<string | null>(null)

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!token) {
      setSetupError('Lien invalide. Reprenez votre inscription ou connectez-vous.')
      setLoadingSetup(false)
      return
    }

    fetch(`/api/auth/setup?token=${encodeURIComponent(token)}`)
      .then(async (res) => {
        const data = (await res.json().catch(() => ({}))) as SetupInfo & { error?: string }
        if (!res.ok) {
          setSetupError(data.error || 'Lien expiré ou invalide.')
          return
        }
        setSetupInfo(data)
      })
      .catch(() => setSetupError('Erreur réseau.'))
      .finally(() => setLoadingSetup(false))
  }, [token])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError(null)
    setSubmitting(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ setupToken: token, password, passwordConfirm }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        error?: string
        existingAccount?: boolean
        email?: string
      }

      if (data.existingAccount) {
        router.push(`/connexion?email=${encodeURIComponent(data.email ?? setupInfo?.email ?? '')}`)
        return
      }

      if (!res.ok) {
        setSubmitError(data.error || 'Impossible de créer le compte.')
        return
      }

      router.push('/mon-compte')
      router.refresh()
    } catch {
      setSubmitError('Erreur réseau.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-muted/40 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border bg-card p-6 sm:p-8 shadow-sm">
        {loadingSetup ? (
          <div className="flex flex-col items-center gap-3 py-8 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm">Chargement…</p>
          </div>
        ) : setupError ? (
          <div className="space-y-4 text-center">
            <p className="text-sm text-destructive">{setupError}</p>
            <Link href="/connexion" className="text-sm text-primary underline">
              Se connecter
            </Link>
          </div>
        ) : setupInfo?.existingAccount ? (
          <div className="space-y-4 text-center">
            <CheckCircle className="w-10 h-10 text-primary mx-auto" />
            <h1 className="text-xl font-bold">Inscription enregistrée</h1>
            <p className="text-sm text-muted-foreground">
              Un compte existe déjà pour <strong>{setupInfo.email}</strong>. Connectez-vous pour
              suivre le statut de votre inscription.
            </p>
            <Link
              href={`/connexion?email=${encodeURIComponent(setupInfo.email)}`}
              className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Se connecter
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full bg-primary/10 p-2">
                <UserPlus className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Créer votre compte</h1>
                <p className="text-sm text-muted-foreground">Dernière étape après votre inscription</p>
              </div>
            </div>

            <div className="mb-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-3 py-2.5 text-sm text-green-800 dark:text-green-200">
              Inscription enregistrée pour{' '}
              <strong>
                {setupInfo?.prenom} {setupInfo?.nom}
              </strong>
              . Créez un mot de passe pour suivre votre dossier en ligne.
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  readOnly
                  value={setupInfo?.email ?? ''}
                  className="w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm text-muted-foreground"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Min. 8 caractères"
                />
              </div>
              <div>
                <label htmlFor="passwordConfirm" className="block text-sm font-medium mb-1.5">
                  Confirmer le mot de passe
                </label>
                <input
                  id="passwordConfirm"
                  type="password"
                  autoComplete="new-password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  minLength={8}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              {submitError ? <p className="text-sm text-destructive">{submitError}</p> : null}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {submitting ? 'Création…' : 'Créer mon compte'}
              </button>
            </form>
          </>
        )}

        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link href="/" className="underline hover:text-foreground">
            Retour à l&apos;accueil
          </Link>
        </p>
      </div>
    </main>
  )
}
