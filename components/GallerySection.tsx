'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  edition: number;
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
    }
  ];
};

export default function GallerySection() {
  const TOTAL_EDITIONS = 14;
  const [selectedEdition, setSelectedEdition] = useState<number>(TOTAL_EDITIONS); // Dernière édition par défaut
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showAllEditions, setShowAllEditions] = useState(false);
  
  const allImages = generateGalleryImages();
  
  const filteredImages = allImages.filter(img => img.edition === selectedEdition);
  const allEditionsImages = showAllEditions ? allImages : [];
  
  const editions = Array.from({ length: TOTAL_EDITIONS }, (_, i) => i + 1);
  
  // Fonction pour afficher toutes les éditions
  const toggleAllEditions = () => {
    setShowAllEditions(prev => !prev);
  };

  return (
    <section className="w-full pt-7 pb-10 sm:pt-9 sm:pb-12 md:pt-10 md:pb-14 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="text-center mb-6 sm:mb-8 max-w-3xl mx-auto px-0 sm:px-2">
          <span className="inline-block text-primary font-bold text-[0.7rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1.5 sm:mb-2">
            Galeries Photos
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Éditions</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-2.5 sm:mb-4 md:mb-5 rounded-full" />
          <p className="text-foreground/80 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-medium">
            Revivez les moments forts de nos 14 éditions de formation et explorez les éditions passées.
          </p>

          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-2.5 sm:gap-3 w-full max-w-xl sm:max-w-none mx-auto">
            <div className="relative group w-full sm:w-auto">
              <button
                type="button"
                onClick={toggleAllEditions}
                className={`w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
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
              <div className="flex items-center justify-between sm:justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 transition-all duration-300">
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
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 p-3.5 sm:p-5 rounded-lg sm:rounded-xl mb-5 sm:mb-7 border border-blue-200 dark:border-blue-800 shadow-sm w-full min-w-0">
          <div className="text-center space-y-3 sm:space-y-5">
            <h3 className="text-sm sm:text-base md:text-xl font-bold text-blue-800 dark:text-blue-100 leading-snug px-1">
              Allez dans tout le monde entier et proclamez la Bonne Nouvelle à toute la création
            </h3>
            <p className="text-blue-700 dark:text-blue-300 italic text-xs sm:text-sm md:text-base px-2">
              « Allez dans le monde entier, proclamez l&apos;Évangile à toute la création. » — Marc 16:15
            </p>

            <div className="max-w-2xl mx-auto bg-white/80 dark:bg-blue-900/30 p-3.5 sm:p-5 rounded-lg sm:rounded-xl border border-blue-100 dark:border-blue-700 shadow-sm text-left sm:text-center">
              <h4 className="text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2 sm:mb-2.5">
                Partagez votre lumière avec le monde
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm leading-relaxed">
                Témoignez de la gloire de Dieu en partageant vos moments de grâce et de louange avec nos frères et sœurs du monde entier.
              </p>
            </div>
          </div>
        </div>

        {/* Galerie d'images */}
        <div className="space-y-7 sm:space-y-9 md:space-y-10 w-full min-w-0">
          {/* Édition sélectionnée */}
          <div className="space-y-3.5 sm:space-y-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-full min-w-0">
              {filteredImages.length > 0 ? (
                filteredImages.map((image) => (
                    <div 
                      key={image.id} 
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-between p-4">
                        <div className="flex justify-end">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            Édition {image.edition}
                          </span>
                        </div>
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white font-medium text-base mb-0.5">Édition {image.edition}</p>
                          <p className="text-white/80 text-xs">Photo {image.id % 3 || 3}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 group-hover:bg-black/40 transition-all duration-300 z-0"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 sm:py-12">
                    <div className="mx-auto w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-foreground/60">Aucune photo disponible pour cette édition</p>
                  </div>
                )}
            </div>
          </div>
          
          {/* Toutes les éditions (si activé) */}
          {showAllEditions && (
            <div className="space-y-3.5 sm:space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Toutes les éditions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-full min-w-0">
                {allEditionsImages.map((image) => (
                  <div 
                    key={image.id} 
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-between p-4">
                      <div className="flex justify-end">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          Édition {image.edition}
                        </span>
                      </div>
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-medium text-base mb-0.5">Édition {image.edition}</p>
                        <p className="text-white/80 text-xs">Photo {image.id % 3 || 3}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 group-hover:bg-black/40 transition-all duration-300 z-0"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal pour l'image sélectionnée */}
          {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] min-w-0">
              <button
                type="button"
                className="absolute top-0 right-0 z-10 p-2 sm:p-0 sm:-top-10 sm:right-0 text-white hover:text-primary transition-colors rounded-lg sm:rounded-none bg-black/40 sm:bg-transparent"
                aria-label="Fermer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-0 pb-[75%] bg-gray-800 rounded-lg overflow-hidden mt-10 sm:mt-0">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="mt-3 sm:mt-4 text-center text-white px-2">
                <p className="text-sm sm:text-base font-medium">Édition {selectedImage.edition}</p>
                <p className="text-white/70 text-xs sm:text-sm">Photo {selectedImage.id % 3 || 3}</p>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
