import Link from 'next/link'
import { ensureStandardEditions } from '@/lib/editions'
import { RapportEcoleForm } from '@/components/admin/RapportEcoleForm'

export default async function NewRapportPage() {
  const editions = await ensureStandardEditions()

  return (
    <div>
      <Link href="/admin/editions/rapports" className="text-xs text-muted-foreground hover:text-foreground">
        ← Rapports
      </Link>
      <h1 className="text-xl sm:text-2xl font-bold text-foreground mt-2 mb-4">Nouveau rapport</h1>
      <RapportEcoleForm mode="create" editions={editions} redirectPath="/admin/editions/rapports/new" />
    </div>
  )
}
