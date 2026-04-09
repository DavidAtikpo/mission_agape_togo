'use client';

import { DocumentContent } from '@/components/DocumentContent';

export default function ProspectusPage() {
  const content = [
    "ÉCOLE D'ÉVANGÉLISATION MISSION AGAPE",
    "Présentation\nL'École d'Évangélisation de Mission Agape forme des évangélistes compétents pour annoncer l'Évangile avec puissance et pertinence dans notre contexte actuel.",
    "Objectifs de la formation :\n- Acquérir une solide formation biblique et théologique\n- Développer des compétences pratiques en prédication et enseignement\n- Maîtriser les outils d'évangélisation contemporains\n- Vivre une expérience missionnaire sur le terrain",
    "Programme de formation :\n1. Fondements bibliques de l'évangélisation\n2. Théologie de la mission\n3. Méthodes d'évangélisation\n4. Communication de l'Évangile\n5. Ministère pratique\n6. Stage sur le terrain",
    "Durée de la formation :\n- Formation intensive de 6 mois\n- 4 mois de cours théoriques\n- 2 mois de stage pratique\n- Début des cours : [Date]",
    "Conditions d'admission :\n- Avoir au moins 18 ans\n- Être membre actif d'une église locale\n- Lettre de recommandation pastorale\n- Entretien de motivation",
    "Frais de scolarité :\n- Frais d'inscription : [Montant]\n- Frais de scolarité mensuels : [Montant]\n- Possibilité de bourses d'études sous conditions"
  ];

  return (
    <main className="min-h-screen bg-background">
      <DocumentContent 
        title="Prospectus de l'École d'Évangélisation" 
        content={content}
        className="py-16"
      />
    </main>
  );
}
