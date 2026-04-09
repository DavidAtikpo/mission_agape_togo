"use client";

import { Image as ImageIcon } from "lucide-react";

export default function Edition14Gallery() {
  return (
    <div className="py-6 md:py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-8">
        Galerie de la 14ème Édition
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {Array.from({ length: 12 }).map((_, index) => {
          const imageNumber = index + 1;
          return (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group">
              <img
                src={`/images/editions/edition14-${imageNumber}.jpeg`}
                alt={`Édition 14 - Image ${imageNumber}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  const container = (e.target as HTMLElement).parentElement;
                  if (container) {
                    container.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 p-4 text-center">
                        <ImageIcon class="w-8 h-8 mb-2" />
                        <span class="text-sm">Image ${imageNumber} non disponible</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
