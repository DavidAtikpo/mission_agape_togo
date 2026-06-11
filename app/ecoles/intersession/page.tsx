import { ArrowLeft, Calendar, CheckCircle, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function Intersession() {
  const sessions = [
    "Leadership biblique (3 jours)",
    "Prière et intercession (3 jours)",
    "Gestion des conflits (2 jours)",
    "Planification stratégique (2 jours)",
    "Mentorat et discipulat (3 jours)",
    "Retraite de restauration (4 jours)",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-amber-50/30">
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
              ⚡
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full">
                <Clock className="w-3 h-3 shrink-0" />
                Inscriptions ouvertes
              </span>
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full">
                <Calendar className="w-3 h-3 shrink-0" />
                Rentrée discipolat : 5 septembre 2026
              </span>
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-tight">
            École d&apos;Intersession
          </h1>
          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Sessions intensives et courtes pour approfondir votre formation tout au long de l&apos;année.
          </p>
        </div>

        {/* Rentrée discipolat */}
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-amber-100 mb-4">
          <h2 className="text-sm sm:text-base font-bold text-primary mb-2 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
            Rentrée de l&apos;École de Discipolat
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <p className="text-[0.65rem] sm:text-xs text-green-800 bg-green-50 p-2 sm:p-2.5 rounded-md border border-green-100 leading-relaxed">
                La prochaine rentrée de l&apos;<strong>École de Discipolat</strong> est prévue le{" "}
                <strong>5 septembre 2026</strong>. Les inscriptions sont ouvertes dès maintenant.
              </p>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
              >
                S&apos;inscrire maintenant
              </Link>
            </div>

            <div className="bg-amber-50 p-2.5 sm:p-3 rounded-md border border-amber-100">
              <h3 className="text-xs sm:text-sm font-semibold text-foreground/90 mb-2">Informations pratiques</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-amber-100 p-1 rounded text-amber-700 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium">Date de rentrée</p>
                    <p className="text-foreground/70 text-[0.65rem] sm:text-xs">5 septembre 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-amber-100 p-1 rounded text-amber-700 shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium">Formation</p>
                    <p className="text-foreground/70 text-[0.65rem] sm:text-xs">École de Discipolat</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-amber-100 p-1 rounded text-amber-700 shrink-0">
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

        {/* À propos */}
        <div className="mb-4">
          <h2 className="text-sm sm:text-base font-bold text-primary mb-2">À propos</h2>
          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-2">
            L&apos;École d&apos;Intersession propose des formations courtes et intensives conçues pour les personnes
            ayant des contraintes d&apos;emploi du temps. Ces sessions permettent d&apos;approfondir des domaines
            spécifiques ou de compléter votre formation initiale.
          </p>
          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
            Pendant les vacances scolaires, les jours fériés ou les week-ends, participez à des sessions concentrées
            qui couvrent des sujets essentiels en format rapide et dynamique.
          </p>
        </div>

        {/* Sessions */}
        <div className="mb-4">
          <h2 className="text-sm sm:text-base font-bold text-primary mb-2">Sessions disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
            {sessions.map((module) => (
              <div key={module} className="border border-amber-500/20 rounded-md p-2.5 sm:p-3 bg-amber-500/5">
                <h3 className="font-bold text-primary text-xs sm:text-sm mb-0.5">{module}</h3>
                <p className="text-[0.65rem] sm:text-xs text-foreground/60">Intensive et transformatrice</p>
              </div>
            ))}
          </div>
        </div>

        {/* Format */}
        <div className="mb-4">
          <h2 className="text-sm sm:text-base font-bold text-primary mb-2">Format et durée</h2>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-md p-2.5 sm:p-3 space-y-1.5 text-xs sm:text-sm text-foreground/70">
            <p>
              <span className="font-bold text-amber-600">Durée :</span> 2 à 4 jours selon la session
            </p>
            <p>
              <span className="font-bold text-amber-600">Calendrier :</span> Vacances scolaires, week-ends et jours
              fériés
            </p>
            <p>
              <span className="font-bold text-amber-600">Format :</span> Sessions intensives en présentiel
            </p>
            <p>
              <span className="font-bold text-amber-600">Participants :</span> Groupes de 15 à 30 personnes
            </p>
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
            href="/ecoles/formation-en-cours"
            className="px-4 py-2 text-xs sm:text-sm border border-primary text-primary rounded-md font-semibold hover:bg-primary/5 transition text-center"
          >
            Voir l&apos;École de Discipolat
          </Link>
        </div>
      </div>
    </main>
  )
}
