import Link from 'next/link'
import { ArrowLeft, CheckCircle, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export type EcoleThemeKey = 'blue' | 'violet' | 'emerald' | 'sky' | 'amber'

const themes: Record<
  EcoleThemeKey,
  {
    page: string
    heroGlow: string
    iconBox: string
    card: string
    soft: string
    accentText: string
    badgeAccent: string
  }
> = {
  blue: {
    page: 'from-background via-blue-50/50 to-slate-50/80',
    heroGlow: 'bg-blue-400/10',
    iconBox: 'bg-blue-600 text-white shadow-blue-600/20',
    card: 'border-blue-100/80',
    soft: 'bg-blue-50/80 border-blue-100',
    accentText: 'text-blue-700',
    badgeAccent: 'bg-blue-50 text-blue-800 border-blue-200/60',
  },
  violet: {
    page: 'from-background via-violet-50/50 to-slate-50/80',
    heroGlow: 'bg-violet-400/10',
    iconBox: 'bg-violet-600 text-white shadow-violet-600/20',
    card: 'border-violet-100/80',
    soft: 'bg-violet-50/80 border-violet-100',
    accentText: 'text-violet-700',
    badgeAccent: 'bg-violet-50 text-violet-800 border-violet-200/60',
  },
  emerald: {
    page: 'from-background via-emerald-50/50 to-slate-50/80',
    heroGlow: 'bg-emerald-400/10',
    iconBox: 'bg-emerald-600 text-white shadow-emerald-600/20',
    card: 'border-emerald-100/80',
    soft: 'bg-emerald-50/80 border-emerald-100',
    accentText: 'text-emerald-700',
    badgeAccent: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
  },
  sky: {
    page: 'from-background via-sky-50/50 to-slate-50/80',
    heroGlow: 'bg-sky-400/10',
    iconBox: 'bg-sky-600 text-white shadow-sky-600/20',
    card: 'border-sky-100/80',
    soft: 'bg-sky-50/80 border-sky-100',
    accentText: 'text-sky-700',
    badgeAccent: 'bg-sky-50 text-sky-800 border-sky-200/60',
  },
  amber: {
    page: 'from-background via-amber-50/50 to-slate-50/80',
    heroGlow: 'bg-amber-400/10',
    iconBox: 'bg-amber-500 text-white shadow-amber-500/20',
    card: 'border-amber-100/80',
    soft: 'bg-amber-50/80 border-amber-100',
    accentText: 'text-amber-700',
    badgeAccent: 'bg-amber-50 text-amber-900 border-amber-200/60',
  },
}

export function getEcoleTheme(key: EcoleThemeKey) {
  return themes[key]
}

type EcolePageShellProps = {
  theme: EcoleThemeKey
  children: ReactNode
  footer?: ReactNode
}

export function EcolePageShell({ theme, children, footer }: EcolePageShellProps) {
  const t = themes[theme]
  return (
    <>
      <main className={`relative bg-gradient-to-b ${t.page}`}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden" aria-hidden>
          <div className={`absolute left-1/2 top-0 h-64 w-[min(100%,42rem)] -translate-x-1/2 rounded-full blur-3xl ${t.heroGlow}`} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-10 sm:pb-12">
          {children}
        </div>
      </main>
      {footer}
    </>
  )
}

type EcoleBadge = {
  icon?: LucideIcon
  label: string
  variant?: 'success' | 'accent'
}

type EcoleHeroProps = {
  backHref: string
  backLabel: string
  theme: EcoleThemeKey
  title: string
  description: string
  badges: EcoleBadge[]
}

export function EcoleHero({ backHref, backLabel, theme, title, description, badges }: EcoleHeroProps) {
  const t = themes[theme]

  return (
    <>
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 shrink-0" />
        {backLabel}
      </Link>

      <header className="text-center mb-10 sm:mb-12">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {badges.map((badge) => {
              const BadgeIcon = badge.icon
              const isSuccess = badge.variant === 'success'
              return (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${
                    isSuccess
                      ? 'bg-green-50 text-green-800 border-green-200/60'
                      : t.badgeAccent
                  }`}
                >
                  {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 shrink-0" />}
                  {badge.label}
                </span>
              )
            })}
          </div>

          <div className="space-y-3 max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
          </div>

          <Link
            href="/inscription"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
          >
            S&apos;inscrire maintenant
          </Link>
        </div>
      </header>
    </>
  )
}

type EcoleSectionProps = {
  theme: EcoleThemeKey
  title: string
  subtitle?: string
  icon?: LucideIcon
  children: ReactNode
  className?: string
}

export function EcoleSection({ theme, title, subtitle, icon: Icon, children, className = '' }: EcoleSectionProps) {
  const t = themes[theme]
  return (
    <section
      className={`rounded-2xl border bg-card/90 backdrop-blur-sm shadow-sm p-5 sm:p-6 lg:p-7 mb-6 ${t.card} ${className}`}
    >
      <div className="mb-5 sm:mb-6">
        <div className="flex items-start gap-3">
          {Icon && (
            <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${t.soft}`}>
              <Icon className={`h-4 w-4 ${t.accentText}`} />
            </div>
          )}
          <div>
            <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
              Formation
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-primary">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
      </div>
      {children}
    </section>
  )
}

export function EcoleObjectivesList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

type EcoleInfoItem = {
  icon: LucideIcon
  label: string
  value: string
}

export function EcoleInfoPanel({ theme, title, items }: { theme: EcoleThemeKey; title: string; items: EcoleInfoItem[] }) {
  const t = themes[theme]
  return (
    <div className={`rounded-xl border p-4 sm:p-5 ${t.soft}`}>
      <h3 className="text-sm font-semibold text-foreground mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => {
          const ItemIcon = item.icon
          return (
            <div key={item.label} className="flex items-start gap-3">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/80 ${t.accentText}`}>
                <ItemIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type EcoleModule = {
  title: string
  description: string
  icon: LucideIcon
  iconClassName?: string
}

export function EcoleModuleGrid({
  theme,
  title,
  modules,
  footnote,
}: {
  theme: EcoleThemeKey
  title: string
  modules: EcoleModule[]
  footnote?: string
}) {
  const t = themes[theme]
  return (
    <section className="mb-8">
      <div className="mb-4 sm:mb-5">
        <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Programme
        </p>
        <h2 className="text-lg sm:text-xl font-bold text-primary">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {modules.map((module) => {
          const ModuleIcon = module.icon
          return (
            <article
              key={module.title}
              className={`group rounded-xl border bg-card p-4 sm:p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${t.card}`}
            >
              <div className="flex items-start gap-3 mb-2.5">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.soft}`}>
                  <ModuleIcon className={`h-5 w-5 ${module.iconClassName ?? t.accentText}`} />
                </div>
                <h3 className="font-semibold text-primary text-sm sm:text-base leading-snug pt-1">{module.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
            </article>
          )
        })}
      </div>
      {footnote && <p className="mt-3 text-sm text-muted-foreground italic">{footnote}</p>}
    </section>
  )
}

export function EcoleHighlightBox({ theme, children }: { theme: EcoleThemeKey; children: ReactNode }) {
  const t = themes[theme]
  return (
    <div className={`rounded-xl border p-3 sm:p-4 text-sm leading-relaxed ${t.soft} ${t.accentText}`}>{children}</div>
  )
}

export function EcolePhaseCards({
  theme,
  phases,
}: {
  theme: EcoleThemeKey
  phases: { title: string; description: string }[]
}) {
  const t = themes[theme]
  return (
    <div className="space-y-3">
      {phases.map((phase) => (
        <div key={phase.title} className={`rounded-xl border p-3 sm:p-4 ${t.soft}`}>
          <p className={`text-sm font-semibold mb-1 ${t.accentText}`}>{phase.title}</p>
          <p className="text-sm text-muted-foreground">{phase.description}</p>
        </div>
      ))}
    </div>
  )
}

export function EcoleCtaBar({
  primaryLabel = "S'inscrire maintenant",
  secondaryHref = '/contact',
  secondaryLabel = 'Nous contacter',
  extraLink,
}: {
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
  extraLink?: { href: string; label: string }
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
      <Link
        href="/inscription"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-primary/25 bg-background px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
      >
        {secondaryLabel}
      </Link>
      {extraLink && (
        <Link
          href={extraLink.href}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
          {extraLink.label}
        </Link>
      )}
    </div>
  )
}
