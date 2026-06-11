'use client'

import { useState } from 'react'
import { Download, Loader2, Printer } from 'lucide-react'
import { downloadInscriptionPdf, type InscriptionPdfRow } from '@/lib/inscription-pdf'

type Props = {
  row: InscriptionPdfRow
}

export function PrintPdfButton({ row }: Props) {
  const [downloading, setDownloading] = useState(false)

  async function handleDownload() {
    setDownloading(true)
    try {
      await downloadInscriptionPdf(row)
    } finally {
      setTimeout(() => setDownloading(false), 600)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-1.5 print:hidden">
      <button
        type="button"
        onClick={() => void handleDownload()}
        disabled={downloading}
        className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
      >
        {downloading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
        {downloading ? '…' : 'PDF'}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium hover:bg-muted"
      >
        <Printer className="h-3.5 w-3.5" />
        Imprimer
      </button>
    </div>
  )
}
