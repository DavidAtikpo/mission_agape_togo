export default function DonationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-blue-50/30 text-foreground pt-3 pb-10 md:pt-8 md:pb-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Faire un don
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-[1.05rem] text-foreground/80 leading-relaxed">
            Pour faire un don, veuillez contacter directement le Directeur de la Mission afin de recevoir le moyen de paiement.
          </p>
        </div>

        <section className="bg-white/70 dark:bg-card/60 backdrop-blur rounded-2xl border border-primary/10 shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold">
            Contact direct
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
            Nous vous répondrons rapidement pour vous communiquer les informations de paiement (Mobile Money, virement, etc.).
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-2.5 justify-center">
            <a
              href="https://wa.me/22890924479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Contacter sur WhatsApp
            </a>
            <a
              href="tel:+22890924479"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Appeler le Directeur
            </a>
          </div>

          <div className="mt-4 text-center">
            <a href="/contact" className="text-sm font-semibold text-primary hover:underline">
              Ou nous écrire via la page Contact
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
