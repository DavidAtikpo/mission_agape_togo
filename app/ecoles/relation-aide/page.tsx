import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RelationAide() {
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
          <div className="text-4xl">🤝</div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">École Relation d'Aide</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Apprenez à accompagner, soutenir et conseiller avec empathie et professionnalisme.
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
              L'École Relation d'Aide prépare des accompagnants qualifiés pour soutenir les personnes en difficulté.
              Vous apprendrez les compétences essentielles d'écoute active, d'empathie et de conseil pour faire une
              différence positive dans la vie des autres.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Cette formation combine la théorie psychologique avec les principes bibliques pour un accompagnement
              holistique et éthique. Vous serez préparé à intervenir dans diverses situations avec compassion et
              discernement.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-lg h-80 flex items-center justify-center border border-green-500/20">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🤝</div>
              <p className="text-foreground/60">Relation d'Aide</p>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Modules de formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Principes de l'écoute active et empathique",
              "Communication non-violente",
              "Gestion des émotions et du stress",
              "Établir des relations de confiance",
              "Conseils et orientation spirituelle",
              "Éthique et limites professionnelles",
            ].map((module, i) => (
              <div key={i} className="border border-green-500/20 rounded-lg p-6 bg-green-500/5">
                <h3 className="font-bold text-primary mb-2">{module}</h3>
                <p className="text-sm text-foreground/60">Apprentissage expérientiel et jeux de rôle</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Format et durée</h2>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 space-y-4">
            <p className="text-foreground/70">
              <span className="font-bold text-green-600">Durée:</span> 12 semaines
            </p>
            <p className="text-foreground/70">
              <span className="font-bold text-green-600">Fréquence:</span> 2 sessions par semaine (2.5h chacune)
            </p>
            <p className="text-foreground/70">
              <span className="font-bold text-green-600">Format:</span> En présentiel avec mises en pratique
            </p>
            <p className="text-foreground/70">
              <span className="font-bold text-green-600">Participants:</span> Groupes de 12-20 personnes
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
            Télécharger le programme
          </a>
        </div>
      </section>
    </main>
  )
}
