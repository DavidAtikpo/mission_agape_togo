import Link from 'next/link'
import { ActualiteForm } from '@/components/admin/ActualiteForm'

export default function NewActualitePage() {
  return (
    <div>
      <div className="mb-4">
        <Link
          href="/admin/actualites"
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          ← Retour aux actualités
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground mt-2">Nouvelle actualité</h1>
      </div>
      <ActualiteForm mode="create" />
    </div>
  )
}
