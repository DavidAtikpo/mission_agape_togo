import SchoolCard from "./school-card"

export default function Schools() {
  const schools = [
    {
      id: 1,
      title: "École d'Évangélisation",
      description: "Apprenez les principes et techniques pour partager votre foi avec efficacité et compassion.",
      gradient: "linear-gradient(135deg, rgba(108,92,231,0.12), rgba(0,194,168,0.04))",
      link: "/ecoles/evangelisation",
      isActive: true,
    },
    {
      id: 2,
      title: "École de Communication",
      description:
        "Développez vos compétences en communication pour inspirer et influencer positivement votre audience.",
      gradient: "linear-gradient(135deg, rgba(0,194,168,0.12), rgba(108,92,231,0.04))",
      link: "/ecoles/communication",
      isActive: true,
    },
    {
      id: 3,
      title: "École Inductive de la Bible",
      description: "Maîtrisez la méthode inductive pour une étude biblique profonde et personnelle.",
      gradient: "linear-gradient(135deg, rgba(96,165,250,0.12), rgba(108,92,231,0.04))",
      link: "/ecoles/bible-inductive",
    },
    {
      id: 4,
      title: "École Relation d'Aide",
      description: "Formez-vous pour accompagner, conseiller et soutenir ceux qui font face à des défis.",
      gradient: "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(0,194,168,0.04))",
      link: "/ecoles/relation-aide",
    },
    {
      id: 5,
      title: "École d'Intersession",
      description: "Intensifiez votre apprentissage lors de sessions courtes et dynamiques tout au long de l'année.",
      gradient: "linear-gradient(135deg, rgba(251,191,36,0.12), rgba(108,92,231,0.04))",
      link: "/ecoles/intersession",
    },
  ]

  return (
    <section id="ecoles" className="w-full py-4 sm:py-5 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full min-w-0">
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1 leading-tight">
            Nos Écoles de Formation
          </h2>
          <p className="text-xs sm:text-sm text-foreground/60 max-w-xl mx-auto">
            Cinq programmes spécialisés pour renforcer votre impact spirituel
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
          {schools.map((school) => (
            <SchoolCard key={school.id} {...school} />
          ))}
        </div>
      </div>
    </section>
  )
}
