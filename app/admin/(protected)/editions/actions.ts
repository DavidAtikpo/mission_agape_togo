'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getAdminSessionValid } from '@/lib/admin-auth'
import prisma from '@/lib/prisma'
import { deleteLocalUpload, saveUploadedImage } from '@/lib/upload-image'

const PHOTO_UPLOAD = 'editions'
const RAPPORT_UPLOAD = 'rapports'

async function assertAdmin() {
  if (!(await getAdminSessionValid())) {
    redirect('/admin/login')
  }
}

function readField(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

function readDate(formData: FormData, key: string): Date | null {
  const raw = readField(formData, key)
  if (!raw) return null
  const d = new Date(raw)
  return Number.isNaN(d.getTime()) ? null : d
}

async function resolveImage(
  formData: FormData,
  subdir: string,
  existingUrl: string | null,
  removeImage: boolean
): Promise<string | null> {
  let imageUrl = readField(formData, 'imageUrl') || null
  const imageFile = formData.get('image')

  if (removeImage) {
    await deleteLocalUpload(existingUrl, subdir)
    return null
  }
  if (imageFile instanceof File && imageFile.size > 0) {
    await deleteLocalUpload(existingUrl, subdir)
    return saveUploadedImage(imageFile, subdir)
  }
  if (imageUrl) return imageUrl
  return existingUrl
}

function revalidateHistorique() {
  revalidatePath('/editions')
  revalidatePath('/admin/editions')
  revalidatePath('/admin/editions/rapports')
}

export async function createRapportEcole(formData: FormData) {
  await assertAdmin()

  const titre = readField(formData, 'titre')
  const contenu = readField(formData, 'contenu')
  const dateEvenement = readDate(formData, 'dateEvenement')
  if (!titre || !contenu || !dateEvenement) return

  const editionId = readField(formData, 'editionId') || null
  const publiee = formData.get('publiee') === 'on'

  let imageUrl: string | null = null
  const imageFile = formData.get('image')
  if (imageFile instanceof File && imageFile.size > 0) {
    imageUrl = await saveUploadedImage(imageFile, RAPPORT_UPLOAD)
  } else {
    imageUrl = readField(formData, 'imageUrl') || null
  }

  await prisma.rapportEcole.create({
    data: {
      titre,
      contenu,
      dateEvenement,
      editionId,
      imageUrl,
      publiee,
    },
  })

  revalidateHistorique()
  redirect('/admin/editions/rapports')
}

export async function updateRapportEcole(formData: FormData) {
  await assertAdmin()

  const id = readField(formData, 'id')
  if (!id) return

  const existing = await prisma.rapportEcole.findUnique({ where: { id } })
  if (!existing) return

  const titre = readField(formData, 'titre')
  const contenu = readField(formData, 'contenu')
  const dateEvenement = readDate(formData, 'dateEvenement')
  if (!titre || !contenu || !dateEvenement) return

  const editionId = readField(formData, 'editionId') || null
  const publiee = formData.get('publiee') === 'on'
  const removeImage = formData.get('removeImage') === 'on'
  const imageUrl = await resolveImage(formData, RAPPORT_UPLOAD, existing.imageUrl, removeImage)

  await prisma.rapportEcole.update({
    where: { id },
    data: { titre, contenu, dateEvenement, editionId, imageUrl, publiee },
  })

  revalidateHistorique()
  revalidatePath(`/admin/editions/rapports/${id}`)
  redirect('/admin/editions/rapports')
}

export async function deleteRapportEcole(formData: FormData) {
  await assertAdmin()

  const id = readField(formData, 'id')
  if (!id) return

  const existing = await prisma.rapportEcole.findUnique({ where: { id } })
  if (!existing) return

  await deleteLocalUpload(existing.imageUrl, RAPPORT_UPLOAD)
  await prisma.rapportEcole.delete({ where: { id } })

  revalidateHistorique()
  redirect('/admin/editions/rapports')
}

export async function toggleRapportPublished(formData: FormData) {
  await assertAdmin()

  const id = readField(formData, 'id')
  if (!id) return

  const row = await prisma.rapportEcole.findUnique({ where: { id }, select: { publiee: true } })
  if (!row) return

  await prisma.rapportEcole.update({
    where: { id },
    data: { publiee: !row.publiee },
  })

  revalidateHistorique()
}

export async function addEditionPhoto(formData: FormData) {
  await assertAdmin()

  const editionId = readField(formData, 'editionId')
  if (!editionId) return

  const imageFile = formData.get('image')
  if (!(imageFile instanceof File) || imageFile.size === 0) return

  const imageUrl = await saveUploadedImage(imageFile, PHOTO_UPLOAD)
  const legende = readField(formData, 'legende') || null
  const ordreRaw = readField(formData, 'ordre')
  const ordre = ordreRaw ? parseInt(ordreRaw, 10) : 0
  const publiee = formData.get('publiee') === 'on'

  await prisma.editionPhoto.create({
    data: {
      editionId,
      imageUrl,
      legende,
      ordre: Number.isNaN(ordre) ? 0 : ordre,
      publiee,
    },
  })

  revalidateHistorique()
  revalidatePath(`/admin/editions/${editionId}/photos`)
}

export async function deleteEditionPhoto(formData: FormData) {
  await assertAdmin()

  const id = readField(formData, 'id')
  const editionId = readField(formData, 'editionId')
  if (!id) return

  const existing = await prisma.editionPhoto.findUnique({ where: { id } })
  if (!existing) return

  await deleteLocalUpload(existing.imageUrl, PHOTO_UPLOAD)
  await prisma.editionPhoto.delete({ where: { id } })

  revalidateHistorique()
  if (editionId) revalidatePath(`/admin/editions/${editionId}/photos`)
}

export async function toggleEditionPhotoPublished(formData: FormData) {
  await assertAdmin()

  const id = readField(formData, 'id')
  const editionId = readField(formData, 'editionId')
  if (!id) return

  const row = await prisma.editionPhoto.findUnique({ where: { id }, select: { publiee: true } })
  if (!row) return

  await prisma.editionPhoto.update({
    where: { id },
    data: { publiee: !row.publiee },
  })

  revalidateHistorique()
  if (editionId) revalidatePath(`/admin/editions/${editionId}/photos`)
}

export async function createEdition(formData: FormData) {
  await assertAdmin()

  const numeroRaw = readField(formData, 'numero')
  const numero = parseInt(numeroRaw, 10)
  const titre = readField(formData, 'titre') || (numero ? `Édition ${numero}` : '')
  const redirectTo = readField(formData, 'redirectTo') || '/admin/editions/rapports/new'

  if (!numero || numero < 1) {
    redirect(redirectTo)
  }

  const existing = await prisma.edition.findUnique({ where: { numero } })
  if (!existing) {
    await prisma.edition.create({
      data: {
        numero,
        titre,
        estCourante: false,
      },
    })
    revalidateHistorique()
  }

  redirect(redirectTo)
}
