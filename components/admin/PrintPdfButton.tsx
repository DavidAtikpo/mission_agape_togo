'use client'

import { Printer } from 'lucide-react'

export function PrintPdfButton() {
  return (
    <div className="flex flex-col gap-1 print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        <Printer className="h-4 w-4 shrink-0" aria-hidden />
        Exporter en PDF / Imprimer
      </button>
      <p className="text-xs text-muted-foreground max-w-md">
        Dans la fenêtre d&apos;impression, choisissez <strong>Enregistrer au format PDF</strong> comme
        destination. Décochez <strong>En-têtes et pieds de page</strong> (Chrome / Edge) pour retirer
        l&apos;URL et la date ajoutées par le navigateur.
      </p>
    </div>
  )
}
