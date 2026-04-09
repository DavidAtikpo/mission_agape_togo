import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Intersession() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          <div className="text-4xl">⚡</div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">École d'Intersession</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Sessions intensives et courtes pour approfondir votre formation tout au long de l'année.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">À propos</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              L'École d'Intersession propose des formations courtes et intensives conçues pour les personnes ayant des
              contraintes d'emploi du temps. Ces sessions permettent d'approfondir des domaines spécifiques ou de
              compléter votre formation initiale.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Pendant les vacances scolaires, les jours fériés ou les week-ends, participez à des sessions concentrées
              qui couvrent des sujets essentiels en format rapide et dynamique.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 rounded-lg h-80 flex items-center justify-center border border-amber-500/20">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">⚡</div>
              <p className="text-foreground/60">Sessions Intensives</p>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Sessions disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Leadership biblique (3 jours)",
              "Prière et intercession (3 jours)",
              "Gestion des conflits (2 jours)",
              "Planification stratégique (2 jours)",
              "Mentorat et discipulat (3 jours)",
              "Retraite de restauration (4 jours)",
            ].map((module, i) => (
              <div key={i} className="border border-amber-500/20 rounded-lg p-6 bg-amber-500/5">
                <h3 className="font-bold text-primary mb-2">{module}</h3>
                <p className="text-sm text-foreground/60">Intensive et transformatrice</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Format et durée</h2>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-8 space-y-4">
            <p className="text-foreground/70">
              <span className="font-bold text-amber-600">Durée:</span> 2-4 jours selon la session
            </p>
            <p className="text-foreground/70">
              <span className="font-bold text-amber-600">Calendrier:</span> Vacances scolaires, week-ends et jours
              fériés
            </p>
            <p className="text-foreground/70">
              <span className="font-bold text-amber-600">Format:</span> Sessions intensives en présentiel
            </p>
            <p className="text-foreground/70">
              <span className="font-bold text-amber-600">Participants:</span> Groupes de 15-30 personnes
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-center"
          >
            S'inscrire maintenant
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition text-center"
          >
            Voir le calendrier
          </a>
        </div>
      </section>
    </main>
  )
}
