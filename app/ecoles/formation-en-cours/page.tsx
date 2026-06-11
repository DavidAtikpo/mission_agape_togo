import { ArrowLeft, Calendar, CheckCircle, Clock, Users, MapPin, BookOpen, Globe, Users2, MessageCircle, Lightbulb, Cross, Church } from "lucide-react"
import Link from "next/link"
// import Edition14Gallery from "@/components/Edition14Gallery"

export default function FormationEnCours() {
  const courses = [
    {
      title: "Fondements bibliques du discipolat",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      description: "Comprendre le modèle de Jésus-Christ pour former des disciples"
    },
    {
      title: "Vie de disciple",
      icon: <Cross className="w-6 h-6 text-red-600" />,
      description: "Grandir dans la foi, la prière et l'obéissance à la Parole"
    },
    {
      title: "Accompagnement personnel",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      description: "Apprendre à marcher aux côtés de nouveaux croyants"
    },
    {
      title: "Formation au leadership",
      icon: <Users2 className="w-6 h-6 text-green-600" />,
      description: "Développer le caractère et la responsabilité du serviteur"
    },
    {
      title: "Étude biblique approfondie",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      description: "Approfondir les Écritures pour enseigner et transmettre"
    },
    {
      title: "Mission et service",
      icon: <Globe className="w-6 h-6 text-cyan-600" />,
      description: "Mettre le discipolat au service de l'évangélisation"
    },
    {
      title: "Vie communautaire",
      icon: <Church className="w-6 h-6 text-indigo-600" />,
      description: "Vivre la fraterné et l'édification dans le corps de Christ"
    },
    {
      title: "Prière et jeûne",
      icon: <MessageCircle className="w-6 h-6 text-rose-600" />,
      description: "Cultiver une vie spirituelle forte au quotidien"
    },
    {
      title: "Transmission de la foi",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      description: "Former d'autres disciples selon le modèle reçu"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-blue-50/30">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 pb-6">
        <Link
          href="/ecoles"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-primary/80 transition mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          Retour aux formations
        </Link>

        {/* Hero */}
        <div className="space-y-2 mb-4">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <div className="text-xl sm:text-2xl leading-none" aria-hidden>
              ✝️
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full">
                <Clock className="w-3 h-3 shrink-0" />
                Inscriptions ouvertes
              </span>
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full">
                <Calendar className="w-3 h-3 shrink-0" />
                Rentrée le 5 septembre 2026
              </span>
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-tight">
            École de Discipolat
          </h1>
          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Une formation pour grandir comme disciple de Jésus-Christ et apprendre à en former d&apos;autres,
            selon le modèle de la Mission Agapé Togo.
          </p>
          <Link
            href="/inscription"
            className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
          >
            S&apos;inscrire maintenant
          </Link>
        </div>

        {/* Prochaine session */}
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-blue-100 mb-4">
          <h2 className="text-sm sm:text-base font-bold text-primary mb-2 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
            Prochaine session
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-3">
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-foreground/90 mb-1">
                  Objectifs de la formation
                </h3>
                <div className="space-y-1 text-xs sm:text-sm text-foreground/70">
                  <p className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Approfondir sa vie de disciple de Jésus-Christ</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Acquérir une solide fondation biblique</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Apprendre à accompagner et former d&apos;autres disciples</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-foreground/90 mb-1">Inscriptions</h3>
                <p className="text-[0.65rem] sm:text-xs text-green-800 bg-green-50 p-2 sm:p-2.5 rounded-md border border-green-100 leading-relaxed">
                  L&apos;école de discipolat commence le <strong>5 septembre 2026</strong>. Les inscriptions sont
                  ouvertes dès maintenant.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-2.5 sm:p-3 rounded-md border border-blue-100">
              <h3 className="text-xs sm:text-sm font-semibold text-foreground/90 mb-2">Informations pratiques</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 p-1 rounded text-blue-600 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium">Date de rentrée</p>
                    <p className="text-foreground/70 text-[0.65rem] sm:text-xs">5 septembre 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 p-1 rounded text-blue-600 shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium">École</p>
                    <p className="text-foreground/70 text-[0.65rem] sm:text-xs">Discipolat</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 p-1 rounded text-blue-600 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium">Lieu</p>
                    <p className="text-foreground/70 text-[0.65rem] sm:text-xs">Aného, Togo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thèmes des cours */}
        <div className="mb-4">
          <h2 className="text-sm sm:text-base font-bold text-primary mb-2">
            Thèmes des cours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border border-primary/20 rounded-md p-2.5 sm:p-3 bg-white shadow-sm hover:shadow transition-shadow"
              >
                <div className="flex items-start gap-2 mb-1">
                  <div className="p-1 bg-primary/10 rounded shrink-0 [&_svg]:w-4 [&_svg]:h-4">
                    {course.icon}
                  </div>
                  <h3 className="font-bold text-primary text-xs sm:text-sm leading-snug">{course.title}</h3>
                </div>
                <p className="text-foreground/70 text-[0.65rem] sm:text-xs leading-relaxed">{course.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <Link
            href="/inscription"
            className="px-4 py-2 text-xs sm:text-sm bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition text-center"
          >
            S&apos;inscrire maintenant
          </Link>
          <Link
            href="/ecoles"
            className="px-4 py-2 text-xs sm:text-sm border border-primary text-primary rounded-md font-semibold hover:bg-primary/5 transition text-center"
          >
            Retour aux écoles
          </Link>
        </div>
      </div>
    </main>
  )
}
