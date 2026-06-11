import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { entriesFromData, statusLabel } from '@/lib/inscription-labels'

export type InscriptionPdfRow = {
  id: string
  createdAt: Date | string
  nom: string
  prenom: string
  email: string
  telephone: string
  formationSouhaitee: string | null
  status: string
  inscriptionData: unknown
  renseignementsData: unknown
  consentementData: unknown
}

const LOGO_PATH = '/imageagape.jpeg'
const BRAND_RED: [number, number, number] = [215, 31, 42]

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

async function loadLogoDataUrl(): Promise<{ dataUrl: string; format: 'JPEG' | 'PNG' } | null> {
  try {
    const res = await fetch(LOGO_PATH, { cache: 'force-cache' })
    if (!res.ok) return null
    const blob = await res.blob()
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
    const format: 'JPEG' | 'PNG' = blob.type.includes('png') ? 'PNG' : 'JPEG'
    return { dataUrl, format }
  } catch {
    return null
  }
}

function addSection(doc: jsPDF, title: string, startY: number, rows: [string, string][]): number {
  const pageHeight = doc.internal.pageSize.getHeight()
  let y = startY

  if (y > pageHeight - 40) {
    doc.addPage()
    y = 18
  }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(30, 30, 30)
  doc.text(title, 14, y)
  y += 2

  autoTable(doc, {
    startY: y + 4,
    body: rows,
    theme: 'grid',
    styles: {
      fontSize: 9,
      cellPadding: 2.5,
      overflow: 'linebreak',
      valign: 'top',
      textColor: [30, 30, 30],
    },
    columnStyles: {
      0: { cellWidth: 58, fontStyle: 'bold', fillColor: [250, 250, 250] },
      1: { cellWidth: 'auto' },
    },
    margin: { left: 14, right: 14 },
  })

  return (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 10
}

function drawPdfHeader(
  doc: jsPDF,
  row: InscriptionPdfRow,
  dateReception: string,
  logo: { dataUrl: string; format: 'JPEG' | 'PNG' } | null,
): number {
  const logoSize = 18
  const logoX = 14
  const logoY = 10

  if (logo) {
    doc.addImage(logo.dataUrl, logo.format, logoX, logoY, logoSize, logoSize, undefined, 'FAST')
  }

  const textX = logo ? logoX + logoSize + 5 : logoX

  doc.setTextColor(...BRAND_RED)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(15)
  doc.text('MISSION AGAPE', textX, 16)

  doc.setTextColor(90, 90, 90)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.text('Togo — Formation & discipolat', textX, 22)

  const lineY = logoY + logoSize + 4
  doc.setDrawColor(0, 0, 0)
  doc.setLineWidth(0.4)
  doc.line(14, lineY, 196, lineY)

  let y = lineY + 7
  doc.setTextColor(0, 0, 0)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.text("Dossier d'inscription", 14, y)

  y += 6
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text(`Réf. dossier : ${row.id}`, 14, y)
  y += 5
  doc.text(`Reçu le ${dateReception}`, 14, y)

  return y + 10
}

export async function downloadInscriptionPdf(row: InscriptionPdfRow): Promise<void> {
  const logo = await loadLogoDataUrl()
  const doc = new jsPDF({ format: 'a4', unit: 'mm' })
  const createdAt = row.createdAt instanceof Date ? row.createdAt : new Date(row.createdAt)
  const dateReception = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(createdAt)
  const dateDocument = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date())

  let y = drawPdfHeader(doc, row, dateReception, logo)

  y = addSection(doc, 'Synthèse administrative', y, [
    ['Statut du dossier', statusLabel(row.status)],
    ['Nom complet', `${row.prenom} ${row.nom}`],
    ['E-mail', row.email],
    ['Téléphone', row.telephone],
    ['Formation souhaitée', row.formationSouhaitee ?? '—'],
  ])

  y = addSection(doc, "Étape 1 — Formulaire d'inscription", y, entriesFromData(row.inscriptionData))
  y = addSection(doc, 'Étape 2 — Fiche de renseignements', y, entriesFromData(row.renseignementsData))
  addSection(doc, 'Étape 3 — Décharge de consentement', y, entriesFromData(row.consentementData))

  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(120, 120, 120)
    doc.text(
      `Document généré le ${dateDocument} — Mission Agapé Togo — Page ${i}/${pageCount}`,
      14,
      doc.internal.pageSize.getHeight() - 8,
    )
  }

  const filename = `inscription-${slugify(row.nom)}-${slugify(row.prenom)}.pdf`
  doc.save(filename)
}
