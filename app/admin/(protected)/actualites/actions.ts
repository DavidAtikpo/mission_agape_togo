'use server'

import { redirect, unstable_rethrow } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getAdminSessionValid } from '@/lib/admin-auth'
import prisma from '@/lib/prisma'
import { deleteUploadedImage, saveUploadedImage } from '@/lib/upload-image'

const UPLOAD_SUBDIR = 'actualites'

export type ActualiteActionState = { error?: string } | null

async function assertAdmin() {
  if (!(await getAdminSessionValid())) {
    redirect('/admin/login')
  }
}

function readField(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

async function resolveImageUrl(
  formData: FormData,
  existingUrl: string | null,
): Promise<string | null> {
  const removeImage = formData.get('removeImage') === 'on'

  if (removeImage) {
    await deleteUploadedImage(existingUrl, UPLOAD_SUBDIR)
    return null
  }

  const uploadedImageUrl = readField(formData, 'uploadedImageUrl')
  if (uploadedImageUrl) {
    if (existingUrl && existingUrl !== uploadedImageUrl) {
      await deleteUploadedImage(existingUrl, UPLOAD_SUBDIR)
    }
    return uploadedImageUrl
  }

  const imageFile = formData.get('image')
  if (imageFile instanceof File && imageFile.size > 0) {
    await deleteUploadedImage(existingUrl, UPLOAD_SUBDIR)
    return saveUploadedImage(imageFile, UPLOAD_SUBDIR)
  }

  const imageUrl = readField(formData, 'imageUrl') || null
  if (imageUrl) {
    if (existingUrl && existingUrl !== imageUrl) {
      await deleteUploadedImage(existingUrl, UPLOAD_SUBDIR)
    }
    return imageUrl
  }

  return existingUrl
}

export async function createActualite(
  _prev: ActualiteActionState,
  formData: FormData,
): Promise<ActualiteActionState> {
  try {
    await assertAdmin()

    const titre = readField(formData, 'titre')
    const contenu = readField(formData, 'contenu')
    if (!titre || !contenu) {
      return { error: 'Le titre et le texte sont obligatoires.' }
    }

    const imageUrl = await resolveImageUrl(formData, null)
    const lienLabel = readField(formData, 'lienLabel') || null
    const lienUrl = readField(formData, 'lienUrl') || null
    const publiee = formData.get('publiee') === 'on'

    await prisma.actualite.create({
      data: { titre, contenu, imageUrl, lienLabel, lienUrl, publiee },
    })

    revalidatePath('/')
    revalidatePath('/admin/actualites')
    redirect('/admin/actualites')
  } catch (error) {
    unstable_rethrow(error)
    const message =
      error instanceof Error ? error.message : 'Erreur lors de la création de l’actualité.'
    return { error: message }
  }
}

export async function updateActualite(
  _prev: ActualiteActionState,
  formData: FormData,
): Promise<ActualiteActionState> {
  try {
    await assertAdmin()

    const id = readField(formData, 'id')
    if (!id) return { error: 'Actualité introuvable.' }

    const existing = await prisma.actualite.findUnique({ where: { id } })
    if (!existing) return { error: 'Actualité introuvable.' }

    const titre = readField(formData, 'titre')
    const contenu = readField(formData, 'contenu')
    if (!titre || !contenu) {
      return { error: 'Le titre et le texte sont obligatoires.' }
    }

    const imageUrl = await resolveImageUrl(formData, existing.imageUrl)
    const lienLabel = readField(formData, 'lienLabel') || null
    const lienUrl = readField(formData, 'lienUrl') || null
    const publiee = formData.get('publiee') === 'on'

    await prisma.actualite.update({
      where: { id },
      data: { titre, contenu, imageUrl, lienLabel, lienUrl, publiee },
    })

    revalidatePath('/')
    revalidatePath('/admin/actualites')
    revalidatePath(`/admin/actualites/${id}`)
    redirect('/admin/actualites')
  } catch (error) {
    unstable_rethrow(error)
    const message =
      error instanceof Error ? error.message : 'Erreur lors de l’enregistrement.'
    return { error: message }
  }
}

export async function deleteActualite(formData: FormData) {
  await assertAdmin()

  const id = readField(formData, 'id')
  if (!id) return

  const existing = await prisma.actualite.findUnique({ where: { id } })
  if (!existing) return

  await deleteUploadedImage(existing.imageUrl, UPLOAD_SUBDIR)
  await prisma.actualite.delete({ where: { id } })

  revalidatePath('/')
  revalidatePath('/admin/actualites')
  redirect('/admin/actualites')
}

export async function toggleActualitePublished(formData: FormData) {
  await assertAdmin()

  const id = readField(formData, 'id')
  if (!id) return

  const row = await prisma.actualite.findUnique({ where: { id }, select: { publiee: true } })
  if (!row) return

  await prisma.actualite.update({
    where: { id },
    data: { publiee: !row.publiee },
  })

  revalidatePath('/')
  revalidatePath('/admin/actualites')
}
