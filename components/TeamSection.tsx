import TeamMember from './TeamMember';

export default function TeamSection() {
  return (
    <section className="w-full py-4 sm:py-5 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-3 sm:mb-4 max-w-2xl mx-auto">
          <span className="inline-block text-primary font-bold text-[0.65rem] uppercase tracking-wider mb-1">
            Notre Équipe
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1.5 leading-tight">
            Rencontrez Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Équipe</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-1.5 rounded-full" />
          <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed">
            Les personnes passionnées qui font de la Mission Agapé Togo une réalité
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto">
          <TeamMember
            name="Le Directeur"
            role="Directeur de la Mission"
            imageSrc="/images/WhatsApp Image 2025-12-25 at 12.43.40.jpeg"
          />
          <TeamMember
            name="La Directrice"
            role="Directrice Adjointe"
            imageSrc="/images/WhatsApp Image 2025-12-25 at 13.23.49.jpeg"
          />
          <TeamMember
            name="Le Conseiller"
            role="Conseiller Spirituel"
            imageSrc="/images/WhatsApp Image 2025-12-25 at 12.43.40 (1).jpeg"
          />
        </div>

        <div className="mt-4 sm:mt-5 bg-gradient-to-r from-primary/5 to-accent/5 p-3 sm:p-4 rounded-lg text-center max-w-4xl mx-auto border border-primary/10">
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 leading-tight">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mission</span>
          </h3>
          <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed mb-3">
            La Mission Agapé Togo apporter l&apos;espoir et le soutien aux communautés à travers :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left">
            <div className="bg-white/5 p-2.5 rounded-md border border-white/5">
              <h4 className="font-bold text-xs text-foreground mb-0.5">L&apos;Éducation</h4>
              <p className="text-foreground/70 text-[0.65rem] leading-relaxed">Formation de qualité pour tous</p>
            </div>
            <div className="bg-white/5 p-2.5 rounded-md border border-white/5">
              <h4 className="font-bold text-xs text-foreground mb-0.5">La Formation</h4>
              <p className="text-foreground/70 text-[0.65rem] leading-relaxed">Compétences pratiques</p>
            </div>
            <div className="bg-white/5 p-2.5 rounded-md border border-white/5">
              <h4 className="font-bold text-xs text-foreground mb-0.5">L&apos;Accompagnement</h4>
              <p className="text-foreground/70 text-[0.65rem] leading-relaxed">Soutien spirituel et personnel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
