'use client';

import { DocumentContent } from '@/components/DocumentContent';
import { FileText, Download } from 'lucide-react';

export default function FormulairesPage() {
  const forms = [
    {
      title: "Formulaire d'Inscription",
      description: "Formulaire à remplir pour s'inscrire aux formations de Mission Agape",
      file: "/FORMULAIRE A REMPLIR PAR L.doc",
      size: "95 KB",
      available: true
    },
    {
      title: "Fiche de Renseignements",
      description: "Fiche de renseignements personnels et spirituels",
      file: "/renseignement confidentie.doc",
      size: "90 KB",
      available: true
    },
    {
      title: "Décharge de Consentement",
      description: "Formulaire d'autorisation pour les activités de l'association",
      file: "/formulaire de decharge de consentement.doc",
      size: "32 KB",
      available: true
    },
    {
      title: "Demande de Bourse d'Études",
      description: "Formulaire de demande d'aide financière pour les formations",
      file: "#",
      size: "À venir",
      available: false
    }
  ] as const;

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Formulaires</h1>
          <p className="text-xl text-foreground/80">
            Téléchargez et remplissez les formulaires nécessaires
          </p>
        </div>

        <div className="space-y-6">
          {forms.map((form, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {form.title}
                    </h3>
                    <p className="text-foreground/70 mt-1">
                      {form.description}
                    </p>
                    <p className="text-sm text-foreground/50 mt-2">
                      Taille : {form.size}
                    </p>
                  </div>
                </div>
                {form.available ? (
                  <a 
                    href={form.file} 
                    download
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </a>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 cursor-not-allowed">
                    <Download className="h-4 w-4 mr-2" />
                    Indisponible
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
