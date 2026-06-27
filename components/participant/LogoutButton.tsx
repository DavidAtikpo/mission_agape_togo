'use client'

import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/connexion')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={logout}
      className="rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
    >
      Déconnexion
    </button>
  )
}
