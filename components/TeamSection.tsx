import TeamMember from './TeamMember';

export default function TeamSection() {
  return (
    <section className="w-full pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-14 max-w-3xl mx-auto px-0 sm:px-2">
          <span className="inline-block text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-3">
            Notre Équipe
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-5 md:mb-6 leading-tight">
            Rencontrez Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Équipe</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full" />
          <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            Découvrez les <span className="font-semibold text-foreground">personnes passionnées</span> qui font de la Mission Agapé Togo une réalité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 w-full min-w-0">
          <TeamMember
            name="Le Directeur"
            role="Directeur de la Mission"
            imageSrc="/images/WhatsApp Image 2025-12-25 at 12.43.40.jpeg"
          />
          <TeamMember
            name="La Directrice"
            role="Directrice Adjointe"
            imageSrc="/images/WhatsApp Image 2025-12-25 at 13.23.49.jpeg"
            className="md:mt-8"
          />
          <TeamMember
            name="Le Conseiller"
            role="Conseiller Spirituel"
            imageSrc="/images/WhatsApp Image 2025-12-25 at 12.43.40 (1).jpeg"
          />
        </div>

        <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 bg-gradient-to-r from-primary/5 to-accent/5 p-5 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl text-center max-w-5xl mx-auto border border-primary/10 shadow-sm w-full min-w-0">
          <div className="max-w-3xl mx-auto min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-0 mb-4 sm:mb-6">
              <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider sm:mr-3">
                Notre Engagement
              </span>
              <div className="hidden sm:block w-12 h-px sm:h-px bg-gradient-to-r from-primary to-accent shrink-0" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mission</span>
            </h3>
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-4 sm:mb-6 px-0">
              La Mission Agapé Togo s'engage à apporter <span className="font-semibold text-foreground">l'espoir</span> et le <span className="font-semibold text-foreground">soutien</span> aux communautés à travers :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 text-left">
              <div className="bg-white/5 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-white/5 min-w-0">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2 flex items-start gap-2 sm:gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm">1</span>
                  <span className="leading-snug pt-0.5">L&apos;Éducation</span>
                </h4>
                <p className="text-foreground/70 text-xs sm:text-sm pl-8 sm:pl-9">Formation de qualité pour tous les âges</p>
              </div>
              <div className="bg-white/5 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-white/5 min-w-0">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2 flex items-start gap-2 sm:gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm">2</span>
                  <span className="leading-snug pt-0.5">La Formation</span>
                </h4>
                <p className="text-foreground/70 text-xs sm:text-sm pl-8 sm:pl-9">Développement des compétences pratiques</p>
              </div>
              <div className="bg-white/5 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-white/5 min-w-0">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2 flex items-start gap-2 sm:gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm">3</span>
                  <span className="leading-snug pt-0.5">L&apos;Accompagnement</span>
                </h4>
                <p className="text-foreground/70 text-xs sm:text-sm pl-8 sm:pl-9">Soutien spirituel et personnel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
