'use client';

import Image from 'next/image';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

export default function EditionsPage() {
  const editions = [
    {
      id: 'edition14',
      title: 'Édition Spéciale 2025-2026',
      description: 'Découvrez notre édition spéciale 2025-2026 avec des témoignages inspirants et les dernières nouvelles de la mission.',
      images: [
        { src: '/images/editions/edition14-1.jpeg', alt: 'Édition 14 - Page 1' },
        { src: '/images/editions/edition14-2.jpeg', alt: 'Édition 14 - Page 2' },
        { src: '/images/editions/edition14-3.jpeg', alt: 'Édition 14 - Page 3' }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Nos Éditions</h1>
          <p className="text-lg text-foreground/80">Découvrez nos dernières publications et éditions spéciales</p>
        </div>

        <div className="space-y-12">
          {editions.map((edition) => (
            <section key={edition.id} className="bg-card rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">{edition.title}</h2>
                <p className="text-foreground/80 mb-6">{edition.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {edition.images.map((image, index) => (
                    <div key={index} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a 
                          href={image.src} 
                          download 
                          className="bg-white text-primary rounded-full p-3 hover:bg-primary hover:text-white transition-colors"
                          title="Télécharger l'image"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="/documents"
                    className="inline-flex items-center px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger l'édition complète (PDF)
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    Partager
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Mission Agape Togo. Tous droits réservés.</p>
        </div>
      </div>
    </main>
  );
}
