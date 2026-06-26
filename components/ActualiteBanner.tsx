import Link from 'next/link'
import { Megaphone } from 'lucide-react'

type ActualiteBannerProps = {
  titre: string
  contenu: string
  imageUrl?: string | null
  lienLabel?: string | null
  lienUrl?: string | null
}

export default function ActualiteBanner({
  titre,
  contenu,
  imageUrl,
  lienLabel,
  lienUrl,
}: ActualiteBannerProps) {
  const hasLink = Boolean(lienLabel?.trim() && lienUrl?.trim())
  const isExternal = hasLink && /^https?:\/\//i.test(lienUrl!.trim())

  return (
    <section
      className="w-full border-b border-primary/20 bg-gradient-to-r from-primary/5 via-background to-accent/5"
      aria-label="Actualité"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
          {imageUrl ? (
            <div className="w-full sm:w-40 md:w-48 shrink-0 aspect-[4/3] sm:aspect-square rounded-lg overflow-hidden border border-border shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ) : null}

          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Megaphone className="w-4 h-4 shrink-0" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-wide">Actualité</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-foreground leading-snug">{titre}</h2>
            <p className="text-sm text-foreground/75 leading-relaxed whitespace-pre-line">{contenu}</p>
            {hasLink ? (
              isExternal ? (
                <a
                  href={lienUrl!.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-1 px-4 py-1.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
                >
                  {lienLabel!.trim()}
                </a>
              ) : (
                <Link
                  href={lienUrl!.trim()}
                  className="inline-flex items-center justify-center mt-1 px-4 py-1.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
                >
                  {lienLabel!.trim()}
                </Link>
              )
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
