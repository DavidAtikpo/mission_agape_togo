export default function Hero() {
  return (
    <section className="relative w-full min-h-0 bg-gradient-to-b from-primary/10 to-background flex items-start justify-center overflow-hidden pt-4 pb-8 md:pt-6 md:pb-12">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-0 pb-2 md:py-1">
        <div className="">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            Mission Agapé Togo
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-2xl text-foreground/80 leading-snug sm:leading-relaxed">
            Connaitre Dieu pour mieux le servir.
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-foreground/60 leading-relaxed">
          AGAPE MISSION est une mission internationale et interdénominationnel qui forme des ouvriers, en particulier des missionnaires. En son sein, il y a des écoles : évangélisation, communication, étude inductive de la Bible, relation d’aide et intercession
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center pt-3 sm:pt-4">
            <a 
              href="/inscription"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-2.5 text-sm sm:text-base font-semibold text-white bg-primary hover:bg-primary/90 transition-all duration-200 ease-in-out transform hover:scale-105 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent"
            >
              S&apos;inscrire
            </a>
            <a 
              href="#ecoles"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-2.5 text-sm sm:text-base font-semibold text-primary hover:text-primary/90 transition-all duration-200 ease-in-out transform hover:scale-105 rounded-lg border-2 border-primary bg-transparent hover:bg-primary/10 shadow-sm"
            >
              Découvrir les écoles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
