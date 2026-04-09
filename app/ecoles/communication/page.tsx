import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Communication() {
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
          <div className="flex items-center gap-4">
            <div className="text-4xl">🎤</div>
            <span className="inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Actuellement en cours
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">École de Communication</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Maîtrisez l'art de la communication pour inspirer, influencer et transformer votre audience.
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
              L'École de Communication vous forme à devenir un communicateur efficace et inspirant. Cette formation
              couvre tous les aspects de la communication: du langage verbal et non-verbal au storytelling, en passant
              par l'usage des médias modernes.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Vous développerez vos compétences oratoires, apprendrez à structurer vos messages et à captiver votre
              audience, qu'elle soit en ligne ou hors ligne.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg h-80 flex items-center justify-center border border-accent/20">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🎤</div>
              <p className="text-foreground/60">École de Communication</p>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Modules de formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Principes fondamentaux de la communication",
              "Langage verbal et non-verbal",
              "Art du storytelling et du discours",
              "Communication en équipe et en groupe",
              "Médias numériques et présence en ligne",
              "Gestion du trac et confiance en soi",
            ].map((module, i) => (
              <div key={i} className="border border-accent/20 rounded-lg p-6 bg-accent/5">
                <h3 className="font-bold text-primary mb-2">{module}</h3>
                <p className="text-sm text-foreground/60">Pratique intensive avec feedbacks personnalisés</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Format et durée</h2>
          <div className="space-y-6">
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">Structure du programme</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-primary mb-2">Phase 1: Théorie (3 mois)</p>
                  <p className="text-foreground/70 text-sm mb-3">À la base de Mission Agape</p>
                  <ul className="text-sm text-foreground/60 space-y-2">
                    <li>• Fondements de la communication</li>
                    <li>• Techniques oratoires et présentation</li>
                    <li>• Langage verbal et non-verbal</li>
                    <li>• Préparation pour le terrain</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Phase 2: Pratique (4 mois)</p>
                  <p className="text-foreground/70 text-sm mb-3">Dans différents pays et villes</p>
                  <ul className="text-sm text-foreground/60 space-y-2">
                    <li>• Application en contexte réel</li>
                    <li>• Interaction avec différentes cultures</li>
                    <li>• Développement du leadership</li>
                    <li>• Mentorat par experts en communication</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 space-y-4">
              <p className="text-foreground/70">
                <span className="font-bold text-primary">Durée totale:</span> 7 mois
              </p>
              <p className="text-foreground/70">
                <span className="font-bold text-primary">Format:</span> Présentiel (théorie) + Terrain international
                (pratique)
              </p>
              <p className="text-foreground/70">
                <span className="font-bold text-primary">Participants:</span> Groupes de 12-20 personnes
              </p>
              <p className="text-foreground/70">
                <span className="font-bold text-primary">Certification:</span> Diplôme de Mission Agape délivré après
                completion
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition text-center"
          >
            Rejoindre le prochain cycle
          </a>
          <a
            href="/"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition text-center"
          >
            Retour aux écoles
          </a>
        </div>
      </section>
    </main>
  )
}
