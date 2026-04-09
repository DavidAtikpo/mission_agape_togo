'use client';

import { DocumentContent } from '@/components/DocumentContent';

export default function StatutsPage() {
  const content = [
    "TITRE I : DÉNOMINATION, SIÈGE, DURÉE, OBJET",
    "Article 1 : Dénomination\nIl est créé une association à but non lucratif régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, ayant pour dénomination : MISSION AGAPE.",
    "Article 2 : Siège\nLe siège social est fixé à [Adresse complète]. Il pourra être transféré par simple décision du Conseil d'Administration.",
    "Article 3 : Durée\nLa durée de l'association est illimitée.",
    "Article 4 : Objet\nL'association a pour objet :\n- La formation biblique et théologique\n- L'évangélisation\n- L'aide humanitaire\n- Le développement communautaire",
    "TITRE II : COMPOSITION - ADMISSION - RADIATION",
    "Article 5 : Composition\nL'association se compose de membres actifs, bienfaiteurs et d'honneur.",
    "Article 6 : Admission\nToute personne désirant faire partie de l'association doit adresser une demande écrite au Conseil d'Administration.",
    "Article 7 : Radiation\nLa qualité de membre se perd par démission ou radiation prononcée par le Conseil d'Administration.",
    "TITRE III : RESSOURCES",
    "Article 8 : Ressources\nLes ressources de l'association comprennent :\n- Les cotisations des membres\n- Les dons manuels\n- Les subventions\n- Toutes les ressources autorisées par la loi"
  ];

  return (
    <main className="min-h-screen bg-background">
      <DocumentContent 
        title="Statuts et Règlement Intérieur" 
        content={content}
        className="py-16"
      />
    </main>
  );
}
