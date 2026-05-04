import TeamMember from './TeamMember';

export default function TeamSection() {
  return (
    <section className="w-full pt-7 pb-10 sm:pt-9 sm:pb-12 md:pt-10 md:pb-14 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-6 sm:mb-9 md:mb-10 max-w-3xl mx-auto px-0 sm:px-2">
          <span className="inline-block text-primary font-bold text-[0.7rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1.5 sm:mb-2">
            Notre Équipe
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight">
            Rencontrez Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Équipe</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-2.5 sm:mb-4 md:mb-5 rounded-full" />
          <p className="text-foreground/80 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-medium max-w-2xl mx-auto">
            Découvrez les <span className="font-semibold text-foreground">personnes passionnées</span> qui font de la Mission Agapé Togo une réalité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-7 w-full min-w-0">
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

        <div className="mt-7 sm:mt-9 md:mt-10 lg:mt-12 bg-gradient-to-r from-primary/5 to-accent/5 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center max-w-5xl mx-auto border border-primary/10 shadow-sm w-full min-w-0">
          <div className="max-w-3xl mx-auto min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-0 mb-3 sm:mb-4">
              <span className="text-primary font-bold text-[0.7rem] sm:text-xs uppercase tracking-wider sm:mr-3">
                Notre Engagement
              </span>
              <div className="hidden sm:block w-12 h-px sm:h-px bg-gradient-to-r from-primary to-accent shrink-0" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mission</span>
            </h3>
            <p className="text-foreground/80 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-medium mb-3 sm:mb-4 px-0">
              La Mission Agapé Togo s'engage à apporter <span className="font-semibold text-foreground">l'espoir</span> et le <span className="font-semibold text-foreground">soutien</span> aux communautés à travers :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-5 sm:mt-6 text-left">
              <div className="bg-white/5 p-3.5 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-white/5 min-w-0">
                <h4 className="font-bold text-sm sm:text-base text-foreground mb-1.5 flex items-start gap-2 sm:gap-3">
                  <span className="w-5.5 h-5.5 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[0.7rem] sm:text-xs">1</span>
                  <span className="leading-snug pt-0.5">L&apos;Éducation</span>
                </h4>
                <p className="text-foreground/70 text-xs pl-7 sm:pl-8 leading-relaxed">Formation de qualité pour tous les âges</p>
              </div>
              <div className="bg-white/5 p-3.5 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-white/5 min-w-0">
                <h4 className="font-bold text-sm sm:text-base text-foreground mb-1.5 flex items-start gap-2 sm:gap-3">
                  <span className="w-5.5 h-5.5 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[0.7rem] sm:text-xs">2</span>
                  <span className="leading-snug pt-0.5">La Formation</span>
                </h4>
                <p className="text-foreground/70 text-xs pl-7 sm:pl-8 leading-relaxed">Développement des compétences pratiques</p>
              </div>
              <div className="bg-white/5 p-3.5 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-white/5 min-w-0">
                <h4 className="font-bold text-sm sm:text-base text-foreground mb-1.5 flex items-start gap-2 sm:gap-3">
                  <span className="w-5.5 h-5.5 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[0.7rem] sm:text-xs">3</span>
                  <span className="leading-snug pt-0.5">L&apos;Accompagnement</span>
                </h4>
                <p className="text-foreground/70 text-xs pl-7 sm:pl-8 leading-relaxed">Soutien spirituel et personnel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
