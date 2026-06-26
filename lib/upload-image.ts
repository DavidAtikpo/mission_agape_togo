import { del, put } from '@vercel/blob'
import { mkdir, unlink, writeFile } from 'fs/promises'
import path from 'path'
import { isManagedUploadUrl } from './upload-image-utils'

const MAX_IMAGE_BYTES = 5 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

const EXT_TO_MIME: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
}

function resolveMimeType(file: File): string {
  if (file.type && ALLOWED_TYPES.has(file.type)) return file.type
  const ext = path.extname(file.name).toLowerCase()
  return EXT_TO_MIME[ext] ?? file.type
}

function validateImage(file: File) {
  const mime = resolveMimeType(file)
  if (!ALLOWED_TYPES.has(mime)) {
    throw new Error('Format d’image non supporté (JPEG, PNG, WebP, GIF).')
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error('Image trop volumineuse (max. 5 Mo).')
  }
}

export async function saveUploadedImage(file: File, subdir: string): Promise<string> {
  validateImage(file)

  const ext = path.extname(file.name).toLowerCase() || '.jpg'
  const filename = `${subdir}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(filename, file, { access: 'public' })
    return blob.url
  }

  if (process.env.VERCEL) {
    throw new Error(
      'Stockage d’images non configuré. Dans Vercel : Storage → Blob → Connecter au projet, puis redéployer. Vous pouvez aussi coller une URL d’image.',
    )
  }

  const uploadDir = path.join(process.cwd(), 'public', 'uploads', subdir)
  const localName = path.basename(filename)
  await mkdir(uploadDir, { recursive: true })
  const buffer = Buffer.from(await file.arrayBuffer())
  await writeFile(path.join(uploadDir, localName), buffer)
  return `/uploads/${subdir}/${localName}`
}

export async function deleteUploadedImage(imageUrl: string | null | undefined, subdir: string) {
  if (!imageUrl) return

  if (isManagedUploadUrl(imageUrl) && imageUrl.includes('.blob.vercel-storage.com')) {
    try {
      await del(imageUrl)
    } catch {
      // fichier déjà absent
    }
    return
  }

  const prefix = `/uploads/${subdir}/`
  if (!imageUrl.startsWith(prefix)) return
  try {
    await unlink(path.join(process.cwd(), 'public', imageUrl))
  } catch {
    // fichier déjà absent
  }
}

/** @deprecated Utiliser deleteUploadedImage */
export async function deleteLocalUpload(imageUrl: string | null | undefined, subdir: string) {
  return deleteUploadedImage(imageUrl, subdir)
}
