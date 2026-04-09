import { ArrowLeft, Calendar, CheckCircle, Clock, Users, MapPin } from "lucide-react"
import Link from "next/link"

export default function Evangelisation() {
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

        {/* Modules */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Modules de formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Fondements bibliques de l'évangélisation",
              "Techniques de communication efficace",
              "Gestion des objections et questions",
              "Développement de relations authentiques",
              "Évangélisation contextuelle et culturelle",
              "Suivi et discipulat",
            ].map((module, i) => (
              <div key={i} className="border border-primary/20 rounded-lg p-6 bg-primary/5">
                <h3 className="font-bold text-primary mb-2">{module}</h3>
                <p className="text-sm text-foreground/60">Exploration profonde et pratique intensive</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Format et durée</h2>
          <div className="space-y-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">Structure du programme</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-primary mb-2">Phase 1: Théorie (3 mois)</p>
                  <p className="text-foreground/70 text-sm mb-3">À la base de Mission Agape</p>
                  <ul className="text-sm text-foreground/60 space-y-2">
                    <li>• Fondements bibliques et théologiques</li>
                    <li>• Techniques de communication</li>
                    <li>• Études de cas pratiques</li>
                    <li>• Préparation à la pratique terrain</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Phase 2: Pratique (4 mois)</p>
                  <p className="text-foreground/70 text-sm mb-3">Dans différents pays et villes</p>
                  <ul className="text-sm text-foreground/60 space-y-2">
                    <li>• Immersion dans le terrain</li>
                    <li>• Application pratique des enseignements</li>
                    <li>• Travail en équipe internationale</li>
                    <li>• Mentorat et supervision continue</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 space-y-4">
              <p className="text-foreground/70">
                <span className="font-bold text-accent">Durée totale:</span> 7 mois
              </p>
              <p className="text-foreground/70">
                <span className="font-bold text-accent">Format:</span> Présentiel (théorie) + Terrain international (pratique)
              </p>
              <p className="text-foreground/70">
                <span className="font-bold text-accent">Participants:</span> Groupes de 15-25 personnes maximum
              </p>
              <p className="text-foreground/70">
                <span className="font-bold text-accent">Certification:</span> Diplôme de Mission Agape délivré après completion
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a
            href="/contact"
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition text-center"
          >
            Rejoindre le prochain cycle
          </a>
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
