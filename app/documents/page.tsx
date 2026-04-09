'use client';

import Link from 'next/link';
import { FileText, BookOpen, FileText as FileTextIcon, File as FileIcon, Book as BookIcon } from 'lucide-react';

export default function DocumentsPage() {
  const documents = [
    {
      title: "École de Formation et de Discipolat Missionnaire",
      description: "Informations complètes sur l'EFDM et ses programmes de formation",
      href: "/documents/efdm",
      icon: <BookOpen className="w-8 h-8 text-primary" />
    },
    {
      title: "Statuts et Règlement Intérieur",
      description: "Document officiel des statuts et du règlement intérieur de Mission Agape",
      href: "/documents/statuts",
      icon: <FileText className="w-8 h-8 text-primary" />
    },
    {
      title: "Prospectus de l'École d'Évangélisation",
      description: "Présentation détaillée de nos programmes d'évangélisation",
      href: "/documents/prospectus",
      icon: <FileTextIcon className="w-8 h-8 text-primary" />
    },
    {
      title: "Informations et Logo",
      description: "Ressources graphiques et informations générales sur l'école",
      href: "/documents/informations",
      icon: <FileIcon className="w-8 h-8 text-primary" />
    },
    {
      title: "Formulaires",
      description: "Tous les formulaires à télécharger et à remplir",
      href: "/documents/formulaires",
      icon: <BookIcon className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Documents Officiels</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Accédez à tous les documents officiels de Mission Agape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Link 
              key={index} 
              href={doc.href}
              className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {doc.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-foreground/70">
                    {doc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
