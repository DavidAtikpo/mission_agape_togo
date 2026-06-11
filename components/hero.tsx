export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-primary/10 to-background flex items-start justify-center overflow-hidden py-4 sm:py-5">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
          Mission Agapé Togo
        </h1>
        <p className="mt-1.5 text-sm sm:text-base md:text-lg text-foreground/80 leading-snug">
          Connaitre Dieu pour mieux le servir.
        </p>
        <p className="mt-1.5 text-xs sm:text-sm text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          AGAPE MISSION est une mission internationale et interdénominationnelle qui forme des ouvriers,
          en particulier des missionnaires. En son sein, il y a des écoles : évangélisation, communication,
          étude inductive de la Bible, relation d&apos;aide et intercession.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center pt-3">
          <a
            href="/inscription"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm transition-colors"
          >
            S&apos;inscrire
          </a>
          <a
            href="#ecoles"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-primary rounded-lg border border-primary hover:bg-primary/10 transition-colors"
          >
            Découvrir les écoles
          </a>
        </div>
      </div>
    </section>
  )
}
