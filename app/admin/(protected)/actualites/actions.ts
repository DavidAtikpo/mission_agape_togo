'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getAdminSessionValid } from '@/lib/admin-auth'
import prisma from '@/lib/prisma'
import { deleteUploadedImage, saveUploadedImage } from '@/lib/upload-image'

const UPLOAD_SUBDIR = 'actualites'

async function assertAdmin() {
  if (!(await getAdminSessionValid())) {
    redirect('/admin/login')
  }
}

function readField(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export async function createActualite(formData: FormData) {
  await assertAdmin()

  const titre = readField(formData, 'titre')
  const contenu = readField(formData, 'contenu')
  if (!titre || !contenu) return

  let imageUrl = readField(formData, 'imageUrl') || null
  const imageFile = formData.get('image')
  if (imageFile instanceof File && imageFile.size > 0) {
    imageUrl = await saveUploadedImage(imageFile, UPLOAD_SUBDIR)
  }

  const lienLabel = readField(formData, 'lienLabel') || null
  const lienUrl = readField(formData, 'lienUrl') || null
  const publiee = formData.get('publiee') === 'on'

  await prisma.actualite.create({
    data: { titre, contenu, imageUrl, lienLabel, lienUrl, publiee },
  })

  revalidatePath('/')
  revalidatePath('/admin/actualites')
  redirect('/admin/actualites')
}

export async function updateActualite(formData: FormData) {
  await assertAdmin()

  const id = readField(formData, 'id')
  if (!id) return

  const existing = await prisma.actualite.findUnique({ where: { id } })
  if (!existing) return

  const titre = readField(formData, 'titre')
  const contenu = readField(formData, 'contenu')
  if (!titre || !contenu) return

  let imageUrl = readField(formData, 'imageUrl') || null
  const removeImage = formData.get('removeImage') === 'on'
  const imageFile = formData.get('image')

  if (removeImage) {
    await deleteUploadedImage(existing.imageUrl, UPLOAD_SUBDIR)
    imageUrl = null
  } else if (imageFile instanceof File && imageFile.size > 0) {
    await deleteUploadedImage(existing.imageUrl, UPLOAD_SUBDIR)
    imageUrl = await saveUploadedImage(imageFile, UPLOAD_SUBDIR)
  } else if (!imageUrl) {
    imageUrl = existing.imageUrl
  }

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
