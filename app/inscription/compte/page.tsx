import { Suspense } from 'react'
import InscriptionComptePage from './page.client'

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center text-muted-foreground text-sm">
          Chargement…
        </main>
      }
    >
      <InscriptionComptePage />
    </Suspense>
  )
}
