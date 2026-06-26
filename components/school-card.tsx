import Link from "next/link"

interface SchoolCardProps {
  id?: number
  title: string
  description: string
  gradient?: string
  link: string
  isActive?: boolean
}

export default function SchoolCard({ title, description, gradient, link, isActive }: SchoolCardProps) {
  return (
    <Link href={link}>
      <div
        style={gradient ? { background: gradient } : undefined}
        className="border border-border rounded-xl p-3 sm:p-4 h-full min-w-0 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group relative bg-card"
      >
        {isActive ? (
          <span className="absolute top-1.5 right-1.5 inline-block bg-accent text-accent-foreground text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full">
            En cours
          </span>
        ) : null}
        <h3
          className={`text-xs sm:text-sm font-bold text-primary mb-1 leading-snug line-clamp-2 ${isActive ? "pr-10" : ""}`}
        >
          {title}
        </h3>
        <p className="text-foreground/65 text-[0.65rem] sm:text-xs leading-snug line-clamp-3">{description}</p>
        <div className="mt-1.5 text-primary text-[0.65rem] sm:text-xs font-semibold">En savoir plus →</div>
      </div>
    </Link>
  )
}
