'use server'

import { mkdir, writeFile, unlink } from 'fs/promises'
import path from 'path'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getAdminSessionValid } from '@/lib/admin-auth'
import prisma from '@/lib/prisma'

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'actualites')
const MAX_IMAGE_BYTES = 5 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

async function assertAdmin() {
  if (!(await getAdminSessionValid())) {
    redirect('/admin/login')
  }
}

async function saveUploadedImage(file: File): Promise<string> {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error('Format d’image non supporté (JPEG, PNG, WebP, GIF).')
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error('Image trop volumineuse (max. 5 Mo).')
  }

  const ext = path.extname(file.name).toLowerCase() || '.jpg'
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`
  await mkdir(UPLOAD_DIR, { recursive: true })
  const buffer = Buffer.from(await file.arrayBuffer())
  await writeFile(path.join(UPLOAD_DIR, filename), buffer)
  return `/uploads/actualites/${filename}`
}

async function deleteLocalImage(imageUrl: string | null | undefined) {
  if (!imageUrl?.startsWith('/uploads/actualites/')) return
  try {
    await unlink(path.join(process.cwd(), 'public', imageUrl))
  } catch {
    // fichier déjà absent
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
    imageUrl = await saveUploadedImage(imageFile)
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
    await deleteLocalImage(existing.imageUrl)
    imageUrl = null
  } else if (imageFile instanceof File && imageFile.size > 0) {
    await deleteLocalImage(existing.imageUrl)
    imageUrl = await saveUploadedImage(imageFile)
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

  await deleteLocalImage(existing.imageUrl)
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
