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
        className="border border-border rounded-lg p-4 sm:p-5 md:p-6 h-full min-w-0 hover:shadow-lg hover:border-primary/30 transition cursor-pointer group relative bg-white"
      >
        {isActive && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
            <span className="inline-block bg-accent text-accent-foreground text-[0.65rem] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
              En cours
            </span>
          </div>
        )}
        <h3
          className={`text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-accent transition leading-snug ${isActive ? "pr-14 sm:pr-16" : ""}`}
        >
          {title}
        </h3>
        <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">{description}</p>
        <div className="mt-3 sm:mt-4 text-primary text-xs sm:text-sm font-semibold group-hover:translate-x-1 transition">
          En savoir plus →
        </div>
      </div>
    </Link>
  )
}
