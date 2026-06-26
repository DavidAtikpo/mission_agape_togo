'use client'

import { useState } from 'react'
import { upload } from '@vercel/blob/client'
import { isManagedUploadUrl } from '@/lib/upload-image-utils'

const MAX_IMAGE_BYTES = 5 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

type Props = {
  initialUrl?: string | null
  subdir: 'actualites' | 'editions' | 'rapports'
}

function validateFile(file: File): string | null {
  const ext = file.name.toLowerCase()
  const mimeOk = file.type ? ALLOWED_TYPES.has(file.type) : /\.(jpe?g|png|webp|gif)$/.test(ext)
  if (!mimeOk) return 'Format non supporté (JPEG, PNG, WebP, GIF).'
  if (file.size > MAX_IMAGE_BYTES) return 'Image trop volumineuse (max. 5 Mo).'
  return null
}

export function AdminImageUploadField({ initialUrl, subdir }: Props) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialUrl ?? null)
  const [uploadedUrl, setUploadedUrl] = useState('')
  const [removeImage, setRemoveImage] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [useServerFallback, setUseServerFallback] = useState(false)

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    const validationError = validateFile(file)
    if (validationError) {
      setError(validationError)
      event.target.value = ''
      return
    }

    setError(null)
    setRemoveImage(false)
    setUploadedUrl('')
    setUseServerFallback(false)

    setUploading(true)
    try {
      const pathname = `${subdir}/${Date.now()}-${file.name.replace(/[^\w.-]+/g, '-')}`
      const blob = await upload(pathname, file, {
        access: 'public',
        handleUploadUrl: '/api/admin/upload-image',
      })
      setUploadedUrl(blob.url)
      setPreviewUrl(blob.url)
      event.target.value = ''
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Impossible de téléverser l’image.'
      setUseServerFallback(true)
      setPreviewUrl(URL.createObjectURL(file))
      setError(
        `${message} L’image sera envoyée à l’enregistrement (mode secours).`,
      )
    } finally {
      setUploading(false)
    }
  }

  function handleRemoveChange(checked: boolean) {
    setRemoveImage(checked)
    if (checked) {
      setPreviewUrl(null)
      setUploadedUrl('')
      setUseServerFallback(false)
      setError(null)
    } else {
      setPreviewUrl(initialUrl ?? null)
    }
  }

  const showUrlFieldDefault =
    initialUrl && !isManagedUploadUrl(initialUrl) ? initialUrl : ''

  return (
    <div className="space-y-3 rounded-lg border p-4 bg-muted/20">
      <p className="text-sm font-medium">Image (optionnelle)</p>

      {previewUrl && !removeImage ? (
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <div className="relative w-32 h-24 rounded-md overflow-hidden border shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewUrl} alt="Aperçu" className="w-full h-full object-cover" />
          </div>
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              name="removeImage"
              checked={removeImage}
              onChange={(e) => handleRemoveChange(e.target.checked)}
              className="rounded border"
            />
            Supprimer l&apos;image actuelle
          </label>
        </div>
      ) : null}

      <input type="hidden" name="uploadedImageUrl" value={uploadedUrl} />

      <div className="space-y-1.5">
        <label htmlFor="image" className="text-xs text-muted-foreground">
          Téléverser une image (JPEG, PNG, WebP, GIF — max. 5 Mo)
        </label>
        <input
          id="image"
          name={useServerFallback ? 'image' : undefined}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          disabled={uploading}
          onChange={handleFileChange}
          className="w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-foreground disabled:opacity-50"
        />
        {uploading ? (
          <p className="text-xs text-muted-foreground">Téléversement en cours…</p>
        ) : null}
        {uploadedUrl ? (
          <p className="text-xs text-green-700 dark:text-green-400">Image prête à enregistrer.</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="imageUrl" className="text-xs text-muted-foreground">
          Ou coller une URL d&apos;image
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="url"
          defaultValue={showUrlFieldDefault}
          placeholder="https://…"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  )
}
