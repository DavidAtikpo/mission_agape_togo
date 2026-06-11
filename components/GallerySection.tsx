'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

/** Première ligne desktop = 5 photos ; 2 lignes visibles au départ */
const PHOTOS_INITIAL = 10;
const PHOTOS_STEP = 10;

const BLUR_DATA =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  edition: number;
}

type LightboxState = { images: GalleryImage[]; index: number };

/** Mobile : pile « album » centrée + bandeau scrollable + swipe pour parcourir */
function AlbumStack({
  images,
  onOpen,
}: {
  images: GalleryImage[];
  onOpen: (img: GalleryImage) => void;
}) {
  const [topIndex, setTopIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTopIndex((i) => Math.min(i, Math.max(0, images.length - 1)));
  }, [images]);

  const scrollThumbIntoView = useCallback((index: number) => {
    const el = thumbRef.current?.querySelector<HTMLElement>(`[data-thumb-index="${index}"]`);
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, []);

  if (images.length === 0) return null;

  const maxLayers = 5;
  const total = images.length;
  const safeTop = Math.min(topIndex, Math.max(0, total - 1));
  const stack = images.slice(safeTop, safeTop + Math.min(maxLayers, total - safeTop));
  const reversed = [...stack].reverse();

  const goNext = () => {
    setTopIndex((i) => {
      const n = Math.min(i + 1, total - 1);
      queueMicrotask(() => scrollThumbIntoView(n));
      return n;
    });
  };
  const goPrev = () => {
    setTopIndex((i) => {
      const n = Math.max(i - 1, 0);
      queueMicrotask(() => scrollThumbIntoView(n));
      return n;
    });
  };

  const onStackTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onStackTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current || total <= 1) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,280px)] pb-4 pt-1 flex flex-col items-center">
      {/* Pile centrée : offsets symétriques autour du centre */}
      <div
        className="relative aspect-[3/4] w-full max-w-[260px] mx-auto touch-pan-x"
        onTouchStart={onStackTouchStart}
        onTouchEnd={onStackTouchEnd}
      >
        {reversed.map((img, revIdx) => {
          const depth = stack.length - 1 - revIdx;
          const ty = depth * 11;
          const tx = Math.sin(depth * 0.95) * 7;
          const rot = Math.sin(depth * 0.7) * 2.2;
          const sc = 1 - depth * 0.032;
          const isTop = revIdx === stack.length - 1;

          return (
            <button
              key={`${img.id}-${safeTop}`}
              type="button"
              aria-label={img.alt}
              className="absolute left-1/2 top-1/2 aspect-[3/4] w-[88%] overflow-hidden rounded-xl border-2 border-white bg-muted shadow-xl ring-1 ring-black/5 origin-center"
              style={{
                transform: `translate(-50%, -50%) translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${sc})`,
                zIndex: revIdx + 1,
                pointerEvents: isTop ? 'auto' : 'none',
              }}
              onClick={() => onOpen(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 85vw, 280px"
                placeholder="blur"
                blurDataURL={BLUR_DATA}
              />
            </button>
          );
        })}
      </div>

      {total > 1 ? (
        <>
          <p className="mt-2 px-2 text-center text-[0.7rem] text-muted-foreground leading-snug">
            Glissez gauche / droite sur la pile, ou faites défiler les miniatures ci‑dessous. Appuyez sur la carte du dessus pour agrandir.
          </p>
          <div
            ref={thumbRef}
            className="mt-3 flex w-full max-w-[min(100vw-2rem,320px)] snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 py-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
            style={{ touchAction: 'pan-x' }}
          >
            {images.map((img, i) => (
              <button
                key={img.id}
                type="button"
                data-thumb-index={i}
                onClick={() => {
                  setTopIndex(i);
                  scrollThumbIntoView(i);
                }}
                className={`relative h-14 w-14 shrink-0 snap-center overflow-hidden rounded-lg border-2 transition-shadow ${
                  i === safeTop
                    ? 'border-primary ring-2 ring-primary/30 shadow-md'
                    : 'border-border opacity-80 active:opacity-100'
                }`}
                aria-label={`Photo ${i + 1}`}
                aria-current={i === safeTop ? 'true' : undefined}
              >
                <Image src={img.src} alt="" fill className="object-cover" sizes="56px" aria-hidden />
              </button>
            ))}
          </div>
          <p className="mt-1.5 text-center text-[0.65rem] text-muted-foreground">
            {safeTop + 1} / {total}
          </p>
        </>
      ) : (
        <p className="mt-2 text-center text-xs text-muted-foreground">Appuyez pour agrandir</p>
      )}
    </div>
  );
}

function GalleryLightbox({
  state,
  setLightbox,
  onClose,
}: {
  state: LightboxState;
  setLightbox: React.Dispatch<React.SetStateAction<LightboxState | null>>;
  onClose: () => void;
}) {
  const { images, index } = state;
  const current = images[index];
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const wheelAccum = useRef(0);

  const goPrev = () =>
    setLightbox((l) => (l && l.index > 0 ? { ...l, index: l.index - 1 } : l));
  const goNext = () =>
    setLightbox((l) =>
      l && l.index < l.images.length - 1 ? { ...l, index: l.index + 1 } : l
    );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setLightbox((l) => (l && l.index > 0 ? { ...l, index: l.index - 1 } : l));
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setLightbox((l) =>
          l && l.index < l.images.length - 1 ? { ...l, index: l.index + 1 } : l
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, setLightbox]);

  useEffect(() => {
    const el = thumbsRef.current?.querySelector<HTMLElement>(`[data-lb-thumb="${index}"]`);
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [index]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!current) return null;

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current || images.length <= 1) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const onWheelMain = (e: React.WheelEvent) => {
    if (images.length <= 1) return;
    e.preventDefault();
    wheelAccum.current += e.deltaY;
    if (wheelAccum.current > 60) {
      wheelAccum.current = 0;
      goNext();
    } else if (wheelAccum.current < -60) {
      wheelAccum.current = 0;
      goPrev();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative flex w-full max-w-4xl max-h-[92vh] min-w-0 flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Visionneuse photos"
      >
        <button
          type="button"
          className="absolute -top-1 right-0 z-20 rounded-lg bg-black/50 p-2 text-white hover:bg-black/70 sm:-top-2 sm:right-0"
          aria-label="Fermer"
          onClick={onClose}
        >
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Photo précédente"
              disabled={index <= 0}
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/55 p-2.5 text-white shadow-lg transition-opacity hover:bg-black/75 disabled:pointer-events-none disabled:opacity-30 sm:left-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Photo suivante"
              disabled={index >= images.length - 1}
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/55 p-2.5 text-white shadow-lg transition-opacity hover:bg-black/75 disabled:pointer-events-none disabled:opacity-30 sm:right-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        ) : null}

        <div
          className="relative mt-8 w-full shrink-0 touch-pan-x sm:mt-10"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onWheel={onWheelMain}
        >
          <div className="relative mx-auto w-full max-h-[55vh] min-h-[200px] sm:max-h-[60vh]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-900 sm:aspect-video">
              <Image
                key={current.id}
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="100vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA}
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-2 shrink-0 text-center text-white">
          <p className="text-sm font-medium sm:text-base">
            Édition {current.edition} — {index + 1} / {images.length}
          </p>
          <p className="text-xs text-white/70 sm:text-sm">
            Flèches, molette sur l’image, ← → au clavier, miniatures ci‑dessous ou glissez gauche / droite
          </p>
        </div>

        {images.length > 1 ? (
          <div
            ref={thumbsRef}
            className="mt-3 flex max-h-[22vh] snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
            style={{ touchAction: 'pan-x' }}
          >
            {images.map((img, i) => (
              <button
                key={img.id}
                type="button"
                data-lb-thumb={i}
                onClick={() => setLightbox({ images, index: i })}
                className={`relative h-16 w-16 shrink-0 snap-center overflow-hidden rounded-lg border-2 transition-all sm:h-[4.5rem] sm:w-[4.5rem] ${
                  i === index
                    ? 'border-primary ring-2 ring-primary/40 scale-[1.02]'
                    : 'border-white/20 opacity-75 hover:opacity-100'
                }`}
                aria-label={`Voir la photo ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
              >
                <Image src={img.src} alt="" fill className="object-cover" sizes="72px" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// Images des éditions
const generateGalleryImages = (): GalleryImage[] => {
  return [
    // Édition 14 (2025-2026)
    {
      id: 1,
      src: '/images/editions/edition14-1.jpeg',
      alt: 'Édition 2025-2026 - Page 1',
      edition: 14
    },
    {
      id: 2,
      src: '/images/editions/edition14-2.jpeg',
      alt: 'Édition 2025-2026 - Page 2',
      edition: 14
    },
    {
      id: 3,
      src: '/images/editions/edition14-3.jpeg',
      alt: 'Édition 2025-2026 - Page 3',
      edition: 14
    },
    {
      id: 4,
      src: '/1.jpeg',
      alt: 'Édition 2025-2026 - Page 4',
      edition: 14
    },
    {
      id: 5,
      src: '/6.jpeg',
      alt: 'Édition 2025-2026 - Page 5',
      edition: 14
    },
    {
      id: 6,
      src: '/7.jpeg',
      alt: 'Édition 2025-2026 - Page 6',
      edition: 14
    },
    {
      id: 7,
      src: '/4.jpeg',
      alt: 'Édition 2025-2026 - Page 7',
      edition: 14
    },
    {
      id: 8,
      src: '/5.jpeg',
      alt: 'Édition 2025-2026 - Page 8',
      edition: 14
    },
    {
      id: 9,
      src: '/8.jpeg',
      alt: 'Édition 2025-2026 - Page 9',
      edition: 14
    },
    // {
    //   id: 10,
    //   src: '/images/editions/edition14-10.jpeg',
    //   alt: 'Édition 2025-2026 - Page 10',
    //   edition: 14
    // },
    // {
    //   id: 11,
    //   src: '/images/editions/edition14-11.jpeg',
    //   alt: 'Édition 2025-2026 - Page 11',
    //   edition: 14
    // },
    // {
    //   id: 12,
    //   src: '/images/editions/edition14-12.jpeg',
    //   alt: 'Édition 2025-2026 - Page 12',
    //   edition: 14
    // }
  ];
};

export default function GallerySection() {
  const TOTAL_EDITIONS = 14;
  const [selectedEdition, setSelectedEdition] = useState<number>(TOTAL_EDITIONS); // Dernière édition par défaut
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [showAllEditions, setShowAllEditions] = useState(false);
  const [visibleEditionCount, setVisibleEditionCount] = useState(PHOTOS_INITIAL);
  const [visibleAllEditionsCount, setVisibleAllEditionsCount] = useState(PHOTOS_INITIAL);
  
  const allImages = generateGalleryImages();
  
  const filteredImages = allImages.filter(img => img.edition === selectedEdition);
  const allEditionsImages = showAllEditions ? allImages : [];

  useEffect(() => {
    setVisibleEditionCount(PHOTOS_INITIAL);
  }, [selectedEdition]);

  useEffect(() => {
    setLightbox(null);
  }, [selectedEdition]);

  useEffect(() => {
    if (showAllEditions) setVisibleAllEditionsCount(PHOTOS_INITIAL);
  }, [showAllEditions]);
  
  const editions = Array.from({ length: TOTAL_EDITIONS }, (_, i) => i + 1);
  
  // Fonction pour afficher toutes les éditions
  const toggleAllEditions = () => {
    setShowAllEditions(prev => !prev);
  };

  const visibleFiltered = filteredImages.slice(0, visibleEditionCount);
  const hasMoreEdition = filteredImages.length > visibleEditionCount;
  const visibleAllSlice = allEditionsImages.slice(0, visibleAllEditionsCount);
  const hasMoreAllEditions = allEditionsImages.length > visibleAllEditionsCount;

  const gridClass =
    'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5 w-full min-w-0';
  const tileClass =
    'group relative overflow-hidden rounded-lg sm:rounded-xl aspect-square cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-md';

  const openLightboxEdition = (img: GalleryImage) => {
    const idx = filteredImages.findIndex((i) => i.id === img.id);
    setLightbox({ images: filteredImages, index: idx >= 0 ? idx : 0 });
  };
  const openLightboxAllEditions = (img: GalleryImage) => {
    const idx = allEditionsImages.findIndex((i) => i.id === img.id);
    setLightbox({ images: allEditionsImages, index: idx >= 0 ? idx : 0 });
  };

  return (
    <section className="w-full py-4 sm:py-5 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 w-full min-w-0">
        <div className="text-center mb-3 sm:mb-4 max-w-2xl mx-auto">
          <span className="inline-block text-primary font-bold text-[0.65rem] uppercase tracking-wider mb-1">
            Galeries Photos
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1.5 leading-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Éditions</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-1.5 rounded-full" />
          <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed">
            Revivez les moments forts de nos 14 éditions de formation.
          </p>

          <div className="mt-3 flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-2 w-full mx-auto">
            <div className="relative group w-full sm:w-auto">
              <button
                type="button"
                onClick={toggleAllEditions}
                className={`w-full sm:w-auto px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  showAllEditions
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                    : 'bg-white/5 hover:bg-white/10 text-foreground border border-white/10 hover:border-primary/30'
                }`}
              >
                {showAllEditions ? 'Voir moins' : 'Voir toutes les éditions'}
              </button>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
            </div>

            <div className="relative w-full sm:w-auto min-w-0">
              <div className="flex items-center justify-between sm:justify-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
                <span className="text-foreground/80 text-xs sm:text-sm shrink-0">Édition</span>
                <select
                  value={selectedEdition}
                  onChange={(e) => setSelectedEdition(Number(e.target.value))}
                  className="min-w-0 flex-1 sm:flex-initial bg-transparent border-none focus:ring-0 text-foreground text-sm cursor-pointer text-right sm:text-left"
                >
                  {editions.map((edition) => (
                    <option key={edition} value={edition} className="bg-background text-foreground">
                      Édition {edition}
                      {edition === TOTAL_EDITIONS && ' (Dernière)'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions pour l'ajout d'images */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 p-2.5 sm:p-3 rounded-lg mb-3 border border-blue-200 dark:border-blue-800 w-full min-w-0">
          <div className="text-center space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-blue-800 dark:text-blue-100 leading-snug">
              Allez dans tout le monde entier et proclamez la Bonne Nouvelle à toute la création
            </h3>
            <p className="text-blue-700 dark:text-blue-300 italic text-[0.65rem] sm:text-xs">
              « Allez dans le monde entier, proclamez l&apos;Évangile à toute la création. » — Marc 16:15
            </p>

            <div className="max-w-xl mx-auto bg-white/80 dark:bg-blue-900/30 p-2.5 rounded-md border border-blue-100 dark:border-blue-700 text-left sm:text-center">
              <h4 className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">
                Partagez votre lumière avec le monde
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-[0.65rem] sm:text-xs leading-relaxed">
                Témoignez de la gloire de Dieu en partageant vos moments de grâce avec nos frères et sœurs.
              </p>
            </div>
          </div>
        </div>

        {/* Galerie d'images */}
        <div className="space-y-4 w-full min-w-0">
          {/* Édition sélectionnée */}
          <div className="space-y-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                Édition {selectedEdition}
                {selectedEdition === TOTAL_EDITIONS && (
                  <span className="block sm:inline font-semibold text-foreground/80 sm:text-foreground sm:font-bold text-sm sm:text-xl mt-0.5 sm:mt-0">
                    {' '}
                    (Dernière édition)
                  </span>
                )}
              </h3>
              <span className="self-start sm:self-auto px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full whitespace-nowrap">
                {filteredImages.length} photos
              </span>
            </div>

            <div className="min-w-0">
              {filteredImages.length > 0 ? (
                <>
                  {/* Mobile : pile album (1 carte au premier plan) */}
                  <div className="sm:hidden flex flex-col items-center">
                    <AlbumStack images={visibleFiltered} onOpen={openLightboxEdition} />
                    {hasMoreEdition ? (
                      <button
                        type="button"
                        onClick={() =>
                          setVisibleEditionCount((c) =>
                            Math.min(c + PHOTOS_STEP, filteredImages.length)
                          )
                        }
                        className="mt-2 px-4 py-2 rounded-lg text-sm font-medium border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        Afficher plus (
                        {filteredImages.length - visibleEditionCount} restantes)
                      </button>
                    ) : null}
                  </div>

                  {/* Tablette / desktop : grille */}
                  <div className={`hidden sm:grid ${gridClass}`}>
                    {visibleFiltered.map((image) => (
                      <div
                        key={image.id}
                        className={tileClass}
                        onClick={() => openLightboxEdition(image)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-between p-2 sm:p-3">
                          <div className="flex justify-end">
                            <span className="px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white text-[0.65rem] font-medium rounded-full">
                              Édition {image.edition}
                            </span>
                          </div>
                          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white font-medium text-xs mb-0">Édition {image.edition}</p>
                            <p className="text-white/80 text-[0.65rem]">Photo {image.id % 3 || 3}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 group-hover:bg-black/40 transition-all duration-300 z-0" />
                        <div className="relative w-full h-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL={BLUR_DATA}
                          />
                        </div>
                      </div>
                    ))}
                    {hasMoreEdition ? (
                      <div className="col-span-full flex justify-center pt-2">
                        <button
                          type="button"
                          onClick={() =>
                            setVisibleEditionCount((c) =>
                              Math.min(c + PHOTOS_STEP, filteredImages.length)
                            )
                          }
                          className="px-4 py-2 rounded-lg text-sm font-medium border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          Afficher plus (
                          {filteredImages.length - visibleEditionCount} restantes)
                        </button>
                      </div>
                    ) : null}
                  </div>
                </>
              ) : (
                  <div className="col-span-full text-center py-6 sm:py-8">
                    <div className="mx-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/60">Aucune photo disponible pour cette édition</p>
                  </div>
                )}
            </div>
          </div>
          
          {/* Toutes les éditions (si activé) */}
          {showAllEditions && (
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-foreground">Toutes les éditions</h3>
              <div className="min-w-0">
                <div className="sm:hidden flex flex-col items-center">
                  <AlbumStack images={visibleAllSlice} onOpen={openLightboxAllEditions} />
                  {hasMoreAllEditions ? (
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleAllEditionsCount((c) =>
                          Math.min(c + PHOTOS_STEP, allEditionsImages.length)
                        )
                      }
                      className="mt-2 px-4 py-2 rounded-lg text-sm font-medium border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      Afficher plus (
                      {allEditionsImages.length - visibleAllEditionsCount} restantes)
                    </button>
                  ) : null}
                </div>
                <div className={`hidden sm:grid ${gridClass}`}>
                  {visibleAllSlice.map((image) => (
                    <div
                      key={`all-${image.id}`}
                      className={tileClass}
                      onClick={() => openLightboxAllEditions(image)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-between p-2 sm:p-3">
                        <div className="flex justify-end">
                          <span className="px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white text-[0.65rem] font-medium rounded-full">
                            Édition {image.edition}
                          </span>
                        </div>
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white font-medium text-xs mb-0">Édition {image.edition}</p>
                          <p className="text-white/80 text-[0.65rem]">Photo {image.id % 3 || 3}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 group-hover:bg-black/40 transition-all duration-300 z-0" />
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL={BLUR_DATA}
                        />
                      </div>
                    </div>
                  ))}
                  {hasMoreAllEditions ? (
                    <div className="col-span-full flex justify-center pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setVisibleAllEditionsCount((c) =>
                            Math.min(c + PHOTOS_STEP, allEditionsImages.length)
                          )
                        }
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        Afficher plus (
                        {allEditionsImages.length - visibleAllEditionsCount} restantes)
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          {lightbox ? (
            <GalleryLightbox
              state={lightbox}
              setLightbox={setLightbox}
              onClose={() => setLightbox(null)}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
