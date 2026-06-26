import { mkdir, unlink, writeFile } from 'fs/promises'
import path from 'path'

const MAX_IMAGE_BYTES = 5 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

export async function saveUploadedImage(file: File, subdir: string): Promise<string> {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error('Format d’image non supporté (JPEG, PNG, WebP, GIF).')
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error('Image trop volumineuse (max. 5 Mo).')
  }

  const uploadDir = path.join(process.cwd(), 'public', 'uploads', subdir)
  const ext = path.extname(file.name).toLowerCase() || '.jpg'
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`
  await mkdir(uploadDir, { recursive: true })
  const buffer = Buffer.from(await file.arrayBuffer())
  await writeFile(path.join(uploadDir, filename), buffer)
  return `/uploads/${subdir}/${filename}`
}

export async function deleteLocalUpload(imageUrl: string | null | undefined, subdir: string) {
  const prefix = `/uploads/${subdir}/`
  if (!imageUrl?.startsWith(prefix)) return
  try {
    await unlink(path.join(process.cwd(), 'public', imageUrl))
  } catch {
    // fichier déjà absent
  }
}
