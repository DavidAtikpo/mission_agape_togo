import { ArrowLeft, Calendar, CheckCircle, Clock, Users, MapPin, BookOpen, Globe, Users2, MessageCircle, Lightbulb, Cross, Megaphone, Wind, Church, MessageSquare } from "lucide-react"
import Link from "next/link"
import Edition14Gallery from "@/components/Edition14Gallery"

export default function BibleInductive() {
  const courses = [
    {
      title: "Fondements bibliques de l'évangélisation",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      description: "Comprendre les bases bibliques de la mission évangélique"
    },
    {
      title: "L'appel à l'évangélisation",
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      description: "Découvrir son appel personnel dans la mission"
    },
    {
      title: "La personne de l'évangéliste",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      description: "Développer le caractère et les compétences nécessaires"
    },
    {
      title: "L'évangile de Jésus-Christ",
      icon: <Cross className="w-6 h-6 text-red-600" />,
      description: "Maîtriser le message central de l'évangile"
    },
    {
      title: "L'évangélisation personnelle",
      icon: <Users2 className="w-6 h-6 text-amber-600" />,
      description: "Apprendre à partager sa foi au quotidien"
    },
    {
      title: "L'évangélisation de masse",
      icon: <Megaphone className="w-6 h-6 text-orange-600" />,
      description: "Organiser et animer des campagnes d'évangélisation"
    },
    {
      title: "L'évangélisation interculturelle",
      icon: <Globe className="w-6 h-6 text-cyan-600" />,
      description: "Adapter son approche à différents contextes culturels"
    },
    {
      title: "L'évangélisation et le Saint-Esprit",
      icon: <Wind className="w-6 h-6 text-blue-400" />,
      description: "La dimension spirituelle de l'évangélisation"
    },
    {
      title: "Le discipolat",
      icon: <Users2 className="w-6 h-6 text-green-600" />,
      description: "Accompagner les nouveaux croyants dans leur foi"
    },
    {
      title: "L'implantation d'églises",
      icon: <Church className="w-6 h-6 text-purple-600" />,
      description: "Stratégies pour fonder de nouvelles communautés"
    },
    {
      title: "La prière et le jeûne",
      icon: <MessageCircle className="w-6 h-6 text-indigo-600" />,
      description: "La dimension spirituelle du ministère"
    },
    {
      title: "La gestion des objections",
      icon: <MessageSquare className="w-6 h-6 text-rose-600" />,
      description: "Répondre aux questions difficiles sur la foi"
    },
    {
      title: "L'évangélisation créative",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      description: "Méthodes innovantes pour partager l'évangile"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-blue-50/30">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/ecoles" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
          <ArrowLeft size={20} />
          Retour aux formations
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-4xl">📖</div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                En pause actuellement
              </span>
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                Reprise le 4 janvier 2026
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">École d'Évangélisation 2025-2026</h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
            Formation complète pour devenir un témoin efficace de l'Évangile, alliant enseignement biblique et mise en pratique sur le terrain.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Current Status */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            État actuel de la formation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground/90 mb-2">Phase théorique terminée</h3>
                <div className="space-y-2 text-foreground/70">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>3 mois de formation intensive en salle</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Enseignements bibliques fondamentaux</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ateliers pratiques d'évangélisation</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground/90 mb-2">En pause</h3>
                <p className="text-amber-700 bg-amber-50 p-4 rounded-lg border border-amber-100">
                  Les étudiants sont actuellement en congé. La formation reprendra le 4 janvier 2026 pour la phase pratique.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-foreground/90 mb-4">Prochaine étape</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Reprise des cours</p>
                    <p className="text-foreground/70 text-sm">4 janvier 2026</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phase pratique</p>
                    <p className="text-foreground/70 text-sm">Mise en application sur le terrain</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Lieu</p>
                    <p className="text-foreground/70 text-sm">Aného, Togo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thèmes des cours */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Thèmes des cours (13 modules)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="border border-primary/20 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {course.icon}
                  </div>
                  <h3 className="font-bold text-primary">{course.title}</h3>
                </div>
                <p className="text-foreground/70 text-sm">{course.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galerie de la 14e édition */}
        <Edition14Gallery />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Link
            href="/inscription"
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition text-center"
          >
            Rejoindre le prochain cycle
          </Link>
          <Link
            href="/ecoles"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition text-center"
          >
            Retour aux écoles
          </Link>
        </div>
      </section>
    </main>
  )
}
