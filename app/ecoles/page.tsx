import Link from "next/link";
import { ArrowLeft, BookOpen, Users, Mic, Handshake, Zap } from "lucide-react";

export default function EcolesPage() {
  const schools = [
    {
      id: 1,
      title: "Formation en cours",
      description: "Suivez notre programme d'évangélisation en cours avec des mises à jour en temps réel.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      href: "/ecoles/formation-en-cours",
      buttonText: "Voir la formation",
      status: "En cours",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      title: "École de Communication",
      description: "Développez vos compétences en communication pour inspirer et influencer positivement votre audience.",
      icon: <Mic className="w-8 h-8 text-purple-600" />,
      href: "/ecoles/communication",
      buttonText: "En savoir plus",
      status: "Disponible",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "École Inductive de la Bible",
      description: "Maîtrisez la méthode inductive pour une étude biblique profonde et personnelle.",
      icon: <BookOpen className="w-8 h-8 text-amber-600" />,
      href: "/ecoles/formation-en-cours",
      buttonText: "En savoir plus",
      status: "Disponible",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      title: "École Relation d'Aide",
      description: "Formez-vous pour accompagner, conseiller et soutenir ceux qui font face à des défis.",
      icon: <Handshake className="w-8 h-8 text-green-600" />,
      href: "/ecoles/relation-aide",
      buttonText: "En savoir plus",
      status: "Disponible",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 5,
      title: "École d'Intersession",
      description: "Intensifiez votre apprentissage lors de sessions courtes et dynamiques tout au long de l'année.",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      href: "/ecoles/intersession",
      buttonText: "En savoir plus",
      status: "Bientôt disponible",
      statusColor: "bg-yellow-100 text-yellow-800"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-blue-50/30">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Nos Écoles de Formation</h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
            Découvrez nos différentes formations conçues pour équiper et former des disciples selon le modèle de Jésus-Christ.
          </p>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => (
            <div key={school.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {school.icon}
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{school.title}</h2>
                </div>
                
                <p className="text-foreground/70 mb-6">{school.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${school.statusColor}`}>
                    {school.status}
                  </span>
                  
                  <Link 
                    href={school.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {school.buttonText}
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Vous souhaitez en savoir plus ?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour plus d'informations sur nos programmes de formation et nos prochaines sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Nous contacter
            </Link>
            <Link 
              href="/inscription" 
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
