import { DocumentContent, type ContentItem } from '@/components/DocumentContent';

export default function EFDMPage() {
  const content: ContentItem[] = [
    "L'École de Formation et de Discipolat Missionnaire (EFDM) est une institution chrétienne qui a pour mission de former des disciples de Jésus-Christ engagés à répandre l'Évangile.",
    "Notre vision est de voir des hommes et des femmes équipés pour le service dans le Royaume de Dieu, munis d'une solide fondation biblique et d'une passion pour l'évangélisation.",
    /* Images désactivées pour l’instant — décommenter pour réafficher
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      alt: 'Bâtiment de l\'EFDM',
      className: 'max-w-2xl mx-auto rounded-lg shadow-lg',
      width: 800,
      height: 500
    },
    */
    "L'EFDM propose plusieurs programmes de formation, notamment :",
    "- Formation biblique approfondie",
    "- Formation au discipolat",
    "- Formation missionnaire",
    "- Développement du leadership chrétien",
    /*
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      alt: 'Séance de formation en classe',
      className: 'max-w-2xl mx-auto rounded-xl shadow-lg'
    },
    */
    "Nos valeurs fondamentales incluent l'intégrité, l'excellence, le service et l'amour inconditionnel.",
    "Nous croyons en la puissance transformatrice de la Parole de Dieu et en l'importance d'une relation personnelle avec Jésus-Christ.",
    /*
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1522071820081-009c01201c29?w=800&q=80',
      alt: 'Notre équipe encadrante',
      className: 'max-w-3xl mx-auto rounded-lg shadow-lg',
      width: 1000,
      height: 600
    },
    */
    "Pour plus d'informations sur nos programmes et nos activités, n'hésitez pas à nous contacter."
  ];

  return (
    <main className="min-h-screen bg-background">
      <DocumentContent 
        title="École de Formation et de Discipolat Missionnaire (EFDM)" 
        content={content}
        className="py-16"
      />
    </main>
  );
}
