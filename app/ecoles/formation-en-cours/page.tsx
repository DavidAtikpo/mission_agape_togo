import { ArrowLeft, Calendar, CheckCircle, Clock, Users, MapPin, BookOpen, Globe, Users2, MessageCircle, Lightbulb, Cross, Megaphone, Wind, Church, MessageSquare } from "lucide-react"
import Link from "next/link"
// import Edition14Gallery from "@/components/Edition14Gallery"

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
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 md:pt-6">
        <Link
          href="/ecoles"
          className="inline-flex items-center gap-1.5 md:gap-2 text-sm md:text-base text-primary hover:text-primary/80 transition mb-4 md:mb-8"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
          Retour aux formations
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-5 md:py-9">
        <div className="space-y-3 md:space-y-5">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <div className="text-2xl md:text-4xl leading-none" aria-hidden>
              📖
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs md:text-sm font-medium px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                <Clock className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                Formation terminée
              </span>
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs md:text-sm font-medium px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                Prochaine rentrée : 5 septembre 2026
              </span>
              {/* <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs md:text-sm font-medium px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                Reprise le 4 janvier 2026
              </span> */}
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
            École d'Évangélisation 2025-2026
          </h1>
          <p className="text-sm sm:text-base md:text-[1.05rem] text-foreground/80 leading-relaxed max-w-4xl">
            Connaitre Dieu pour mieux le servir.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-5 md:py-9 space-y-7 md:space-y-10 pb-10 md:pb-12">
        {/* Current Status */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-md p-4 sm:p-5 md:p-6 border border-blue-100">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 shrink-0" />
            État actuel de la formation
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground/90 mb-1.5 md:mb-2">
                  Phase théorique terminée
                </h3>
                <div className="space-y-1.5 md:space-y-2 text-sm md:text-base text-foreground/70">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>3 mois de formation intensive en salle</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Enseignements bibliques fondamentaux</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ateliers pratiques d'évangélisation</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground/90 mb-1.5 md:mb-2">Statut</h3>
                <p className="text-xs md:text-sm text-emerald-700 bg-emerald-50 p-3 md:p-4 rounded-lg border border-emerald-100 leading-relaxed">
                  L’école de cette année est déjà finie.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-blue-100">
              <h3 className="text-sm md:text-base font-semibold text-foreground/90 mb-3 md:mb-4">Prochaine rentrée</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="bg-blue-100 p-1.5 md:p-2 rounded-md md:rounded-lg text-blue-600 shrink-0">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm md:text-base font-medium">Date</p>
                    <p className="text-foreground/70 text-xs md:text-sm">5 septembre 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <div className="bg-blue-100 p-1.5 md:p-2 rounded-md md:rounded-lg text-blue-600 shrink-0">
                    <Users className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm md:text-base font-medium">École</p>
                    <p className="text-foreground/70 text-xs md:text-sm">Évangélisation</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <div className="bg-blue-100 p-1.5 md:p-2 rounded-md md:rounded-lg text-blue-600 shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm md:text-base font-medium">Lieu</p>
                    <p className="text-foreground/70 text-xs md:text-sm">Aného, Togo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thèmes des cours */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 md:mb-5">
            Thèmes des cours (13 modules)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border border-primary/20 rounded-lg p-3 sm:p-4 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="p-1.5 md:p-2 bg-primary/10 rounded-lg shrink-0 [&_svg]:w-5 [&_svg]:h-5 md:[&_svg]:w-6 md:[&_svg]:h-6">
                    {course.icon}
                  </div>
                  <h3 className="font-bold text-primary text-sm sm:text-base leading-snug">{course.title}</h3>
                </div>
                <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">{course.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galerie de la 14e édition */}
        {/* <Edition14Gallery /> */}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-3 md:pt-6">
          <Link
            href="/inscription"
            className="px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition text-center"
          >
            Rejoindre le prochain cycle
          </Link>
          <Link
            href="/ecoles"
            className="px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition text-center"
          >
            Retour aux écoles
          </Link>
        </div>
      </section>
    </main>
  )
}
