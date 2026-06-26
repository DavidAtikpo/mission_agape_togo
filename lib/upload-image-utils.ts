export function isManagedUploadUrl(imageUrl: string | null | undefined): boolean {
  if (!imageUrl) return false
  if (imageUrl.startsWith('/uploads/')) return true
  return imageUrl.includes('.blob.vercel-storage.com')
}
