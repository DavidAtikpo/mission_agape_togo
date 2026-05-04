export default function BesoinsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-blue-50/30 text-foreground pt-3 pb-10 md:pt-8 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="inline-block text-primary font-bold text-[0.7rem] sm:text-xs uppercase tracking-[0.18em] mb-2">
            Centre en cours de construction
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Nos besoins
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-[1.05rem] text-foreground/80 leading-relaxed">
            <span className="font-semibold text-foreground">AGAPE MISSION</span> est une mission internationale et interdénominationnelle
            qui forme des ouvriers, en particulier des missionnaires. En son sein, il y a des écoles :
            évangélisation, communication, étude inductive de la Bible, relation d’aide et intercession.
          </p>
        </div>

        <section className="bg-white/70 dark:bg-card/60 backdrop-blur rounded-2xl border border-primary/10 shadow-sm p-4 sm:p-6 md:p-7 mb-5 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
            Plan de construction
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
            Voici le plan de la construction de la cité (centre).
          </p>

          <div className="mt-4 rounded-xl border border-border bg-background/60 overflow-hidden">
            <img
              src="/plan-construction.jpg"
              alt="Plan de construction — AGAPE MISSION"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <p className="mt-3 text-xs sm:text-sm text-foreground/70 text-center">
            (Dépose ton image dans `public/plan-construction.jpg` pour l’afficher ici.)
          </p>
        </section>

        <section className="bg-white/70 dark:bg-card/60 backdrop-blur rounded-2xl border border-primary/10 shadow-sm p-4 sm:p-6 md:p-7">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
            Nos besoins actuels
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
            En ce moment, nous avons deux priorités. Vous pouvez nous aider par un don, un don en nature, ou un partenariat.
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="rounded-xl border border-border bg-background/60 p-4 sm:p-5">
              <h3 className="font-bold text-base sm:text-lg">1) Construction de la cité (centre)</h3>
              <ul className="mt-2 space-y-1.5 text-sm sm:text-base text-foreground/80">
                <li>- Matériaux: ciment, sable, gravier, fer à béton, tôles, peinture</li>
                <li>- Travaux: maçonnerie, charpente, menuiserie, finition</li>
                <li>- Réseaux: électricité, plomberie, sanitaires</li>
                <li>- Espaces: salles de formation, salle polyvalente, bureaux</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background/60 p-4 sm:p-5">
              <h3 className="font-bold text-base sm:text-lg">2) Voiture pour les voyages</h3>
              <ul className="mt-2 space-y-1.5 text-sm sm:text-base text-foreground/80">
                <li>- Déplacements missionnaires et visites de terrain</li>
                <li>- Transport du matériel (supports de cours, équipements)</li>
                <li>- Carburant, entretien et assurance</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-center">
            <a
              href="/don"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Faire un don
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Proposer un don en nature / partenariat
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
