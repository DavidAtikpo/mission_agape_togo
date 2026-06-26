import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'
import { getAdminSessionValid } from '@/lib/admin-auth'

export async function POST(request: Request): Promise<NextResponse> {
  if (!(await getAdminSessionValid())) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      {
        error:
          'Stockage Blob non configuré. Dans Vercel : Storage → Blob → Connecter au projet, puis redéployer.',
      },
      { status: 503 },
    )
  }

  let body: HandleUploadBody
  try {
    body = (await request.json()) as HandleUploadBody
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        const allowedPrefixes = ['actualites/', 'editions/', 'rapports/']
        if (!allowedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
          throw new Error('Chemin de fichier non autorisé.')
        }
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
          maximumSizeInBytes: 5 * 1024 * 1024,
          addRandomSuffix: true,
        }
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Échec du téléversement.'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
