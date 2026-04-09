'use client';

import { DocumentContent } from '@/components/DocumentContent';
import Image from 'next/image';

export default function InformationsPage() {
  const content = [
    "PRÉSENTATION DE MISSION AGAPE",
    "Mission Agape est une organisation chrétienne à but non lucratif fondée en [Année] avec pour mission de former des disciples de Jésus-Christ engagés dans la transformation spirituelle et sociale de leur communauté.",
    "Notre vision est de voir des hommes et des femmes équipés pour le service dans le Royaume de Dieu, à travers une formation biblique solide et pratique.",
    "NOS VALEURS :\n- Fidélité à la Parole de Dieu\n- Excellence dans la formation\n- Intégrité dans la gestion\n- Amour et service\n- Engagement envers la mission",
    "NOTRE LOGO :",
    // Le logo sera affiché ici
    "Signification du logo :\n- La flamme représente le Saint-Esprit\n- Le livre représente la Bible, fondement de notre enseignement\n- Les couleurs symbolisent la sainteté, la pureté et la passion pour l'Évangile"
  ];

  return (
    <main className="min-h-screen bg-background">
      <DocumentContent 
        title="Informations et Logo" 
        content={content}
        className="py-16"
      >
        <div className="mt-8 flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <div className="relative w-full h-48">
              <Image
                src="/logo Porteur de flambeau.png"
                alt="Logo Mission Agape"
                width={300}
                height={200}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-foreground/60">
                Télécharger le logo :
                <a 
                  href="/logo Porteur de flambeau.png" 
                  download
                  className="ml-2 text-primary hover:underline"
                >
                  Format PNG
                </a>
              </p>
            </div>
          </div>
        </div>
      </DocumentContent>
    </main>
  );
}
